<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator; // ✅ Import Validator facade
use App\Models\User; // ✅ Import User model

class DashboardController extends Controller
{
    public function index(): Response
    {

        $user = Auth::user();
        // dd($user);
        $adminData = DB::table('adminconfig')
            ->where('Client_Email', $user->email)
            ->first();
        // dd($adminData);


        $adminPlChange = DB::table('adminperson_pl_change')
            ->where('source_file', $adminData->source_file)
            ->first() ?? 'default value';
        // dd($adminPlChange);

        $adminmainAccountInfo = DB::table('adminmain_account_info')
            ->where('source_file', $adminData->source_file)
            ->first() ?? 'default value';
        // dd($adminmainAccountInfo);


        /* query for portfolio_value chart in dashboard*/
        $adminPersonalValues = DB::table('adminpersonal_values')
            ->distinct()
            ->where('source_file', $adminData->source_file)
            ->whereBetween('current_datetime', [Carbon::now()->subDays(90), Carbon::now()])
            ->get() ?? 'default value';
        // dd($adminPersonalValues);

        $adminAlpacaSnapshot = DB::table('admin_alpaca_snapshot')
            ->where('source_file', $adminData->source_file)->get() ?? 'default value';
        // dd($admin_alpaca_snapshot);




        //query for portfolio donut chart in investment sidebar in dashboard
        $sourceFile = $adminData->source_file;

        $adminholdings = DB::table('adminholdings')
            ->select(
                'Symbol',
                DB::raw("ROUND((SUM(Qty) * 100.0 / (SELECT SUM(Qty) FROM adminholdings WHERE source_file = '{$sourceFile}')), 2) as percentage")
            )
            ->where('source_file', $sourceFile)
            ->groupBy('Symbol')
            ->get() ?? 'default value';

        /* query for table data in dashboard */
        $pos = DB::table('adminholdings')
            ->where('source_file', $adminData->source_file)->get();

        // dd($adminholdings);


        //query for portfolio donut chart in investment sidebar in dashboard
        // $holdings = DB::table('adminholdings')
        // ->select(
        //     'Symbol',
        //     DB::raw("ROUND((SUM(Qty) * 100.0 / (SELECT SUM(Qty) FROM adminholdings WHERE source_file = ?)), 2) as percentage", [$adminData->source_file])
        // )
        // ->where('source_file', $adminData->source_file)
        // ->groupBy('Symbol')
        // ->get();

        /*query for riskLevel */

        // $riskLevel = 'low';

        if ($user->riskLevel <= 0) {
            $riskLevel = 'Low';
        } elseif ($user->riskLevel >0 && $user->riskLevel <= 32) {
            $riskLevel = 'Medium';
        } elseif ($user->riskLevel > 32 && $user->riskLevel <= 67) {
            $riskLevel = 'High';
        } elseif ($user->riskLevel > 67) {
            $riskLevel = 'Super High';
        }


        /* query for overall growth */

        // Get first and last date
        $result = DB::table('adminpersonal_values')
            ->select(
                DB::raw('MIN(current_datetime) AS first_date'),
                DB::raw('MAX(current_datetime) AS last_date')
            )
            ->where('source_file', $adminData->source_file)
            ->first();

        // Get the portfolio values for first and last dates
        $firstPortfolioValue = DB::table('adminpersonal_values')
            ->where('current_datetime', $result->first_date)
            ->where('source_file', $adminData->source_file)
            ->value('portfolio_value');

        $lastPortfolioValue = DB::table('adminpersonal_values')
            ->where('current_datetime', $result->last_date)
            ->where('source_file', $adminData->source_file)
            ->value('portfolio_value');

        // Calculate the overall growth
        if ($firstPortfolioValue && $lastPortfolioValue) {
            if ($firstPortfolioValue > 0) {
                $growth = (($lastPortfolioValue - $firstPortfolioValue) / $firstPortfolioValue) * 100;
                $growth = round($growth, 2); // Round to 2 decimal places
            } else {
                $growth = 0; // Avoid division by zero if firstPortfolioValue is 0 or less
            }
        } else {
            $growth = 0; // If any value is missing, consider growth as 0
        }

        if ($user->status == 'not ready') {
            $status = 'Not Ready';
        }
        if ($user->status == 'pause orders') {
            $status = 'Paused Orders';
        } else if ($user->status == 'stop') {
            $status = 'Stopped';
        } else if ($user->requirement_created_at !== NULL && Carbon::parse($user->requirement_created_at)->addDays(2)->isPast()) {
            $status = 'Running';
        } else if ($user->status == 'building model') {
            $status = 'Building Model';
        }


        /* query for last date */
        $lastDate = DB::table('adminpersonal_values')
            ->where('source_file', $adminData->source_file)
            ->select(DB::raw('MAX(current_datetime) AS last_date'))
            ->first();


        // dd($holdings);   
        
        $userPricingPlan=$user->choose_payment_plan?$user->choose_payment_plan:'Choose Pricing Plan';
        $success = session('success', false);
        $cancel = session('cancel', false);


        if ($adminData) {
            return Inertia::render('Dashboard/Dashboard', [
                'user' => $user,
                'adminData' => $adminData,
                'adminPlChange' => $adminPlChange,
                'adminmainAccountInfo' => $adminmainAccountInfo,
                'adminPersonalValues' => $adminPersonalValues,
                'adminholdings' => $adminholdings, // may be some page can be missing(said)
                'adminAlpacaSnapshot' => $adminAlpacaSnapshot,
                'pos' => $pos,
                'riskLevel' => $riskLevel,
                'grow' => $growth,
                'sta' => $status,
                'lastDate'=>$lastDate,
                'userPricingPlan'=>$userPricingPlan,
                'success' => $success,
                'cancel'=>$cancel,

            ]);
        }

        // return Inertia::render('Dashboard/Dashboard');
    }

    public function configurePortfolio(Request $request)
    {
        // Extract the formData array
        $data = $request->input('formData');

        // Debugging to check if data is extracted correctly
        // dd($data);

        $validator = Validator::make($data, [
            'agreedToTerms' => 'required|boolean',
            'riskLevel' => 'required|integer|max:100',
            'requirements' => 'required|string',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Assuming user authentication
        $userId = Auth::id();

        // Add or update the requirement_created_at timestamp
        $data['requirement_created_at'] = now();
        $data['status'] = 'building model';

        User::updateOrInsert(
            ['id' => $userId], // Condition to check existing user
            $data
        );

        return back()->with('success', 'Your message has been sent!');
    }


    public function pauseOrders()
    {
        // dd('its working on pauseOrders');
        $userId = auth::user()->id;
        $user = User::find($userId);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->status = 'pause orders';
        $user->save();



        return back()->with('success', 'Status has been updated!');
    }

    public function statusStop()
    {
        // dd('its working on status stop');

        $userId = auth::user()->id;
        $user = User::find($userId);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        $user->status = 'stop';
        $user->save();



        return back()->with('success', 'Stop Status has been updated!');
    }
}

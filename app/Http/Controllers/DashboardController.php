<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

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
            ->first();
        // dd($adminPlChange);

        $adminmainAccountInfo = DB::table('adminmain_account_info')
            ->where('source_file', $adminData->source_file)
            ->first();
        // dd($adminmainAccountInfo);


        /* query for portfolio_value chart in dashboard*/
        $adminPersonalValues = DB::table('adminpersonal_values')
            ->distinct()
            ->where('source_file', $adminData->source_file)
            ->whereBetween('current_datetime', [Carbon::now()->subDays(90), Carbon::now()])
            ->get();
        // dd($adminPersonalValues);

        $adminAlpacaSnapshot = DB::table('admin_alpaca_snapshot')
            ->where('source_file', $adminData->source_file)->get();
        // dd($admin_alpaca_snapshot);


        /* query for table data in dashboard */


        //query for portfolio donut chart in investment sidebar in dashboard
        $sourceFile = $adminData->source_file;

        $adminholdings = DB::table('adminholdings')
            ->select(
                'Symbol',
                DB::raw("ROUND((SUM(Qty) * 100.0 / (SELECT SUM(Qty) FROM adminholdings WHERE source_file = '{$sourceFile}')), 2) as percentage")
            )
            ->where('source_file', $sourceFile)
            ->groupBy('Symbol')
            ->get();

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





        // dd($holdings);        


        if ($adminData) {
            return Inertia::render('Dashboard/Dashboard', [
                'user' => $user,
                'adminData' => $adminData,
                'adminPlChange' => $adminPlChange,
                'adminmainAccountInfo' => $adminmainAccountInfo,
                'adminPersonalValues' => $adminPersonalValues,
                'adminholdings' => $adminholdings, // may be some page can be missing(said)
                'adminAlpacaSnapshot' => $adminAlpacaSnapshot,
                
            ]);
        }

        // return Inertia::render('Dashboard/Dashboard');
    }
}

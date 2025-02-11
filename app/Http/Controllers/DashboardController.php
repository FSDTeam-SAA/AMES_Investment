<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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


        $adminPersonalValues = DB::table('adminpersonal_values')
            ->distinct()
            ->where('source_file', $adminData->source_file)
            ->whereBetween('current_datetime', [Carbon::now()->subDays(90), Carbon::now()])
            ->get();
        // dd($adminPersonalValues);

        $adminholdings = DB::table('adminpersonal_values')
            ->where('source_file', $adminData->source_file)->get();
        // dd($adminholdings);

        $adminAlpacaSnapshot = DB::table('admin_alpaca_snapshot')
            ->where('source_file', $adminData->source_file)->get();
        // dd($admin_alpaca_snapshot);


        if ($adminData) {
            return Inertia::render('Dashboard/Dashboard', [
                'user' => $user,
                'adminData' => $adminData,
                'adminPlChange' => $adminPlChange,
                'adminmainAccountInfo' => $adminmainAccountInfo,
                'adminPersonalValues' => $adminPersonalValues,
                'adminholdings' => $adminholdings,
                'adminAlpacaSnapshot' => $adminAlpacaSnapshot,
            ]);
        }

        // return Inertia::render('Dashboard/Dashboard');
    }
}

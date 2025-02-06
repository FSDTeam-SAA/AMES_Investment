<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index(): Response 
    {
        $user = Auth::user();
        // dd($user);
        $adminData = DB::table('adminconfig')
               ->where('Client_Email', $user->email)
               ->first();

        if ($adminData) {
            return Inertia::render('Dashboard/Dashboard', [
                'user' => $user,
                'adminData' => $adminData
            ]);
        }
        
        // return Inertia::render('Dashboard/Dashboard');
    }
}

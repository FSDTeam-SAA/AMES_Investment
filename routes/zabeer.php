<?php

use App\Http\Controllers\GoogleAuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

    
Route::get('login-with-google', [GoogleAuthController::class, 'loginWithGoogle'])
->name('loginWithGoogle');
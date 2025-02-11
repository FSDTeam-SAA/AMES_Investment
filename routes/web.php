<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::patch('/users-email', [ProfileController::class, 'updateEmail'])->name('user-email.updateEmail');
    Route::patch('/user-phone', [ProfileController::class, 'updatePhoneNumber'])->name('user-phone.updatePhoneNumber');
    Route::patch('/user-api-secret', [ProfileController::class, 'updateApiKeySecretKey'])->name('user-apikey-secretkey.updateapikeysecretkey');
});

//email verification





//

// Auth::routes(['verify' => true]);

require __DIR__ . '/auth.php';
require __DIR__ . '/zabeer.php';
require __DIR__ . '/nahid.php';
require __DIR__ . '/abu_sayed.php';
require __DIR__ . '/fahim.php';
require __DIR__ . '/ilhan.php';

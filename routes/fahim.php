<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AboutUsController;

    
Route::get('about-us', [AboutUsController::class, 'index'])
->name('about-us');
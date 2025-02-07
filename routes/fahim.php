<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\PricingPlansController;
use App\Http\Controllers\ResearchController;


Route::get('about-us', [AboutUsController::class, 'index'])
->name('about-us');

Route::get('pricing-plans', [PricingPlansController::class, 'index'])
->name('pricing-plans');

Route::get('research', [ResearchController::class, 'index'])
->name('research');




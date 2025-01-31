<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;


Route::get('contact', [ContactController::class, 'index'])->name('contact');

Route::post('contact/send-message', [ContactController::class, 'store'])->name('contact.store');

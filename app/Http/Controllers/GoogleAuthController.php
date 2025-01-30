<?php

namespace App\Http\Controllers;

use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Inertia\Inertia;

class GoogleAuthController extends Controller
{
    // Redirect to Google for authentication
    public function redirect()
    {
        
        return Socialite::driver('google')->redirect();
    }

    // Handle callback from Google
    public function callback()
    {
        $googleUser = Socialite::driver('google')->user();

        // Find or create the user
        $user = User::updateOrCreate(
            ['email' => $googleUser->getEmail()],
            [
                'name' => $googleUser->getName(),
                'google_id' => $googleUser->getId(),
                'avatar' => $googleUser->getAvatar(),
                'password' => '',
            ]
        );

        Auth::login($user);

        // Redirect the user using Inertia
        return Inertia::location(route('dashboard'));

        
    }
}
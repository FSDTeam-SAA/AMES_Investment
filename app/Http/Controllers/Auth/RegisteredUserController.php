<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;


class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
        'name' => 'required|string|max:255',           // User's name
        'email' => 'required|string|lowercase|email|max:255|unique:' . User::class, // User's email
        'password' => ['required', 'confirmed', Rules\Password::defaults()], // Password
        'phoneNumber' => 'nullable|string|max:255',   // Optional phone number
        'termsAccepted' => 'accepted',                // Terms acceptance (checkbox)
        'apiKey' => 'nullable|string|max:255',        // Optional API key
        'secretKey' => 'nullable|string|max:255',     
        ]);
        $user = User::create([
        'name' => $request->name,                   // User's first name
        'email' => $request->email,                 // User's email
        'phone_number' => $request->phoneNumber,   // Phone number (nullable)
        'password' => Hash::make($request->password), // Hashed password
        'terms_accepted' => $request->termsAccepted, // Terms acceptance
        'api_key' => $request->apiKey,             // API key (nullable)
        'secret_key' => $request->secretKey,
        ]);

        
        

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}

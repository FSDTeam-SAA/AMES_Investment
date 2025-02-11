<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function updateEmail(Request $request)
    {

        // dd($request->all());

        // Validate the request
        $request->validate([
            'email' => 'required|email|unique:users,email,' . Auth::id(),
        ]);

        $user = Auth::user();

        // Get the current admin data associated with the user's email
        $adminData = DB::table('adminconfig')
            ->where('Client_Email', $user->email)
            ->first();

        $email = $request->email;

        $userData = DB::table('users')->where('email', $user->email);

        // Update the user's email
        $userData->update(['email' => $email]);



        if ($adminData) {
            DB::table('adminconfig')
                ->where('Client_Email', $adminData->Client_Email)
                ->update(['Client_Email' =>  $email]);
        }
    }

    public function updatePhoneNumber(Request $request)
    {
        // Validate the phone number format
        $request->validate([
            'phoneNumber' => [
                'required',
                'regex:/^\+?[0-9]{1,4}?[-.\s]?(\(?[0-9]{1,3}?\)?[-.\s]?)?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/', // Basic international phone number format
            ],
        ]);
        $user = Auth::user();
        // dd($user);
        $adminData = DB::table('adminconfig')
            ->where('Client_Email', $user->email)
            ->first();
        // dd($request->phone);
        $phoneNumber = $request->phoneNumber;
        // dd($phoneNumber);
        $userData = DB::table('users')->where('email', $user->email);


        $userData->update(['phone_number' => $phoneNumber]);

        if ($adminData) {
            DB::table('adminconfig')
                ->where('phone_num', $adminData->phone_num)
                ->update(['phone_num' =>  $phoneNumber]);
        }
    }


    public function updateApiKeySecretKey(Request $request)
    {

        // dd($request->all());
        // Validate the incoming request data
        $request->validate([
            'apikey' => 'required|string|min:10 |max:100',
            'secretkey' => 'required|string|min:10 |max:100',
        ]);

        $user = Auth::user();
        $adminData = DB::table('adminconfig')
            ->where('Client_Email', $user->email)
            ->first();
        $apikey = $request->apikey;
        $secretkey = $request->secretkey;

        $userData = DB::table('users')->where('email', $user->email);

        $userData->update(['api_key' => $apikey, 'secret_key' => $secretkey]);

        if ($adminData) {
            DB::table('adminconfig')
                ->where('Client_Email', $adminData->Client_Email)
                ->update(['api_key' => $apikey, 'secret_key' => $secretkey]);
        }
    }
}

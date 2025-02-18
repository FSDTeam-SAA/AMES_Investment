<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;


class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {
        // dd($request->user()->toArray());
        if ($request->user()->hasVerifiedEmail()) {

            return redirect()->intended(route('dashboard', absolute: false).'?verified=1');
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));

            $userData = $request->user()->toArray();

            $nameWithUnderscore = str_replace(' ', '_', $userData['name']);

            // Check if the email already exists
            $exists = DB::table('adminconfig')->where('Client_Email', $userData['email'])->exists();

            if (!$exists) {
                DB::table('adminconfig')->insert([
                    'source_file' => $nameWithUnderscore,
                    'Name' => $nameWithUnderscore,
                    'phone_num' => $userData['phone_number'],
                    'Client_Email' => $userData['email'],
                    'API_KEY' => $userData['api_key'],
                    'SECRET_KEY' => $userData['secret_key'],
                ]);
            }
        }

        return redirect()->intended(route('dashboard', absolute: false).'?verified=1');
    }
}

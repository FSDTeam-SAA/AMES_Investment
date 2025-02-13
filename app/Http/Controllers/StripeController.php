<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class StripeController extends Controller
{
    public function Payment(Request $request)
    {

        $plan = $request->input('plan');

        // Set the Stripe API key
        Stripe::setApiKey(config('stripe.sk'));

        // Define price based on the plan selected
        $unitAmount = 0;
        $productName = '';

        if ($plan == 'basic') {
            $unitAmount = 5 * 100;  // $5 in cents
            $productName = 'Basic Plan';
        } elseif ($plan == 'plus') {
            $unitAmount = 20 * 100;  // $20 in cents
            $productName = 'Plus Plan';
        } elseif ($plan == 'pro') {
            $unitAmount = 20 * 100;  // $20 in cents
            $productName = 'Pro Plan';
        }

        // Create the checkout session
        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [
                [
                    'price_data' => [
                        'currency' => 'usd',
                        'product_data' => [
                            'name' => $productName,
                        ],
                        'unit_amount' => $unitAmount,
                    ],
                    'quantity' => 1,
                ],
            ],
            'mode' => 'payment',
            'metadata' => [
                'plan' => $plan, // Store plan securely
                'user_id' => Auth::id(), // Associate with user
            ],
            'success_url' => route('stripe.success') . '?session_id={CHECKOUT_SESSION_ID}', // Pass session_id securely

            'cancel_url' => route('stripe.cancel'),
        ]);

        // Return the session URL to the frontend
        // dd($session);
        return Inertia::location($session->url);
    }

    public function Success(Request $request)
    {
        // dd($request);
        Stripe::setApiKey(config('stripe.sk'));

        $sessionId = $request->query('session_id');
        if (!$sessionId) {
            return Inertia::location(route('dashboard'));
        }

        // Retrieve the session object
        $session = Session::retrieve($sessionId);

        // Validate the session user
        $user = Auth::user();
        if (!$user instanceof User) {
            return Inertia::location(route('dashboard'));
        }
        if (!$user || $session->metadata->user_id != $user->id) {
            return Inertia::location(route('dashboard'));
        }

        // Get the plan from metadata
        $plan = $session->metadata->plan;


        $user->choose_payment_plan = $plan;
        $user->save();

        // dd($request);
        return redirect()->route('dashboard')->with('success', "Payment successful for the $plan plan!");
    }

    public function Cancel()
    {
        // return 'Payment was cancelled!';
        return Inertia::location(route('dashboard'));
    }
}

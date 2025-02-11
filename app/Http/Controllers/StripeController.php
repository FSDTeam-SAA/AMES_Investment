<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session;
use Inertia\Inertia;

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
            'success_url' => route('stripe.success'),
            'cancel_url' => route('stripe.cancel'),
        ]);

        // Return the session URL to the frontend
        return Inertia::location($session->url);
    }

    public function success()
    {
        // return 'Yay, Payment was successfuls!';
        return Inertia::location(route('dashboard'));
    }

    public function cancel()
    {
        // return 'Payment was cancelled!';
        return Inertia::location(route('dashboard'));
    }
}

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
    public function payment(Request $request)
    {

        session()->flash('success', true);

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
        return Inertia::location($session->url);
    }


  

    public function success(Request $request)
    {
        

        session()->flash('success', true);
        // $success = session('successs', true);
        // dd($success);
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


        // Redirect to the dashboard
        return redirect()->route('dashboard');


    }

    public function cancel()
    {
        // dd("cancel");
        session()->flash('cancel', true);
        // return 'Payment was cancelled!';
        return redirect()->route('dashboard');
    }

    // public function createCheckoutSession(Request $request)
    // {
    //     Stripe::setApiKey(env('STRIPE_SECRET'));

    //     $session = Session::create([
    //         'payment_method_types' => ['card'],
    //         'line_items' => [[
    //             'price_data' => [
    //                 'currency' => 'usd',
    //                 'product_data' => [
    //                     'name' => 'Custom Product',
    //                     'description' => 'A brief description of the product.',
    //                 ],
    //                 'unit_amount' => 5000, // Amount in cents ($50)
    //             ],
    //             'quantity' => 1,
    //         ]],
    //         'mode' => 'payment',
    //         'success_url' => route('payment.success') . '?session_id={CHECKOUT_SESSION_ID}',
    //         'cancel_url' => route('payment.cancel'),
    //         'customer_email' => auth()->user()->email ?? null, // Attach logged-in user’s email
    //         'metadata' => [
    //             'user_id' => auth()->id(),
    //             'custom_info' => 'Any additional data',
    //         ]
    //     ]);

    //     return response()->json(['url' => $session->url]);
    // }



}

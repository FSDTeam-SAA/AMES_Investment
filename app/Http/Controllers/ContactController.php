<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response; // ✅ Import Inertia Response
use Illuminate\Support\Facades\Validator; // ✅ Import Validator facade
use App\Models\Contact;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Contact/contact');
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'question' => 'required|string',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Save contact message or handle as needed
        Contact::create($request->only('name', 'email', 'question'));

        return back()->with('success', 'Your message has been sent!');
    }
}

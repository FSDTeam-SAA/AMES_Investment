<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response; // ✅ Import Inertia Response

class PricingPlansController extends Controller
{
    public function index(): Response 
    {
        return Inertia::render('PricingPlans/pricingPlans');
    }
}

<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Inertia\Response; // ✅ Import Inertia Response
use Illuminate\Http\Request;

class ResearchController extends Controller
{
    public function index(): Response 
    {
        return Inertia::render('Research/Research');
    }
}

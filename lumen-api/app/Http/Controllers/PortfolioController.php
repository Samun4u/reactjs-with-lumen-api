<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Portfolio;

class PortfolioController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        
    }

    public function index()
    {
      $data = Portfolio::all();
      return response()->json($data,200);


    }


    
}

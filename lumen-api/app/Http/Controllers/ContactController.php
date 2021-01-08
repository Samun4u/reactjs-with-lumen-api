<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        
    }

    public function insert( Request $r)
    {


        Contact::create($r->all());
        $d=Contact::all();
        return response()->json($d, 200);


    }


    
}

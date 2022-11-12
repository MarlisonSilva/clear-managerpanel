<?php

namespace App\Http\Controllers;

use App\Models\Truck;
use App\Http\Requests\TruckRequestStore;
use App\Http\Requests\TruckRequestUpdate;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;

class TruckController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $trucks = Truck::all();
         
        return Inertia::render('Truck/index', [
            'trucks'=>$trucks, 
            'create_url' => URL::route('truck.create'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Truck/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TruckRequestStore $request)
    {    
        Truck::create($request->validated());
        return redirect()->route('truck.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $truck = Truck::find($id);
        return Inertia::render('Truck/show', ['truck'=>$truck]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $truck = Truck::find($id);
        return Inertia::render('Truck/edit', ['truck'=>$truck]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TruckRequestUpdate $request, $id)
    {
        $truck = Truck::find($id);
        $truck->update($request->validated());
        return redirect()->route('truck.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Truck::find($id)->delete();
        return redirect()->route('truck.index');
    }
}

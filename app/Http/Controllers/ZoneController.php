<?php

namespace App\Http\Controllers;

use App\Models\Zone;
use App\Http\Requests\ZoneRequestStore;
use App\Http\Requests\ZoneRequestUpdate;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;

class ZoneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $zones = Zone::all();
         
        return Inertia::render('Zone/index', [
            'zones'=>$zones, 
            'create_url' => URL::route('zone.create'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Zone/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ZoneRequestStore $request)
    {    
        Zone::create($request->validated());
        return redirect()->route('zone.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $zone = Zone::find($id);
        return Inertia::render('Zone/show', ['zone'=>$zone]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $zone = Zone::find($id);
        return Inertia::render('Zone/edit', ['zone'=>$zone]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ZoneRequestUpdate $request, $id)
    {
        $zone = Zone::find($id);
        $zone->update($request->validated());
        return redirect()->route('zone.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Zone::find($id)->delete();
        return redirect()->route('zone.index');
    }
}

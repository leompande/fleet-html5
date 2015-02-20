<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Driver;
use App\Vehicle;

class DriverController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
        $drivers = Driver::all();
        return response()->json($drivers);
    }

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$driver = new Driver();

        $driver->first_name = "";
        $driver->middle_name = "";
        $driver->last_name = "";
        $driver->gender = "";
        $driver->birthday = "";
        $driver->phone = "";
        $driver->email = "";
        $driver->current_address = "";
        $driver->employment_date = "";
        $driver->driving_licence_class = "";

        $driver->save();
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
        $driver = Driver::find($id);
        return response()->json($driver);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
        $driver = Driver::find($id);

        $driver->first_name = "";
        $driver->middle_name = "";
        $driver->last_name = "";
        $driver->gender = "";
        $driver->birthday = "";
        $driver->phone = "";
        $driver->email = "";
        $driver->current_address = "";
        $driver->employment_date = "";
        $driver->driving_licence_class = "";

        $driver->save();
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
        Driver::destroy($id);
	}

}

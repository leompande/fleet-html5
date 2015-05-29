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
	public function store(Request $request)
	{
		$driver = new Driver();

        foreach ( $request->all() as $column => $value ) {
            echo $column."=>".$value;

            switch ($column) {
                case "first_name":
                    $driver->first_name        = $value;
                    break;
                case "middle_name":
                    $driver->middle_name     = $value;
                    break;
                case "last_name":
                    $driver->last_name           = $value;
                    break;
                case "gender":
                    $driver->gender               = $value;
                    break;
                case "birthday":
                    $driver->birthday                  = $value;
                    break;
                case "phone":
                    $driver->phone                     = $value;
                    break;
                case "email":
                    $driver->email                      = $value;
                    break;
                case "current_address":
                    $driver->current_address        = $value;
                    break;
                case "employment_date":
                    $driver->employment_date                 = $value;
                    break;
                case "driving_licence_class":
                    $driver->driving_licence_class                  = $value;
                    break;
                case "engine_capacity":
                    $driver->engine_capacity            = $value;
                    break;
            }

        }


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
	public function update(Request $request,$id)
	{
        $driver = Driver::find($id);

        foreach ( $request->all() as $column => $value ) {
            switch ($column) {
                case "first_name":
                    $driver->first_name        = $value;
                    break;
                case "middle_name":
                    $driver->middle_name       = $value;
                    break;
                case "last_name":
                    $driver->last_name         = $value;
                    break;
                case "gender":
                    $driver->gender            = $value;
                    break;
                case "birthday":
                    $driver->birthday          = $value;
                    break;
                case "phone":
                    $driver->phone             = $value;
                    break;
                case "class":
                    $driver->class             = $value;
                    break;
                case "email":
                    $driver->email             = $value;
                    break;
                case "current_address":
                    $driver->current_address   = $value;
                    break;
                case "employment_date":
                    $driver->employment_date   = $value;
                    break;
                case "driving_licence_class":
                    $driver->driving_licence_class      = $value;
                    break;
            }

        }

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

<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Driver;
use App\Vehicle;
use App\Fuel;
class VehicleController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
    public function index()
    {
        $vehicles = Vehicle::all();
        return response()->json($vehicles);
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
		$vehicle = new Vehicle();

        $vehicle->registration_number = "";
        $vehicle->vehicle_control_number = "";
        $vehicle->first_registered = "";
        $vehicle->model_number = "";
        $vehicle->body_type = "";
        $vehicle->color = "";
        $vehicle->class = "";
        $vehicle->year_of_manufacture = "";
        $vehicle->chassis_no = "";
        $vehicle->engine_no = "";
        $vehicle->engine_capacity = "";
        $vehicle->fuel_used = "";
        $vehicle->number_of_axles = "";
        $vehicle->axle_distance = "";
        $vehicle->seat_capacity = "";
        $vehicle->tare_weight = "";
        $vehicle->gross_weight = "";
        $vehicle->imported_from = "";
        $vehicle->usage_id = "";
        $vehicle->modal_id = "";
        $vehicle->make_id = "";
        $vehicle->fuel_consumption_rate = "";

        $vehicle->save();
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
        $vehicles = Vehicle::find($id);
        return response()->json($vehicles);
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
        $vehicle = Vehicle::find($id);

        $vehicle->registration_number = "";
        $vehicle->vehicle_control_number = "";
        $vehicle->first_registered = "";
        $vehicle->model_number = "";
        $vehicle->body_type = "";
        $vehicle->color = "";
        $vehicle->class = "";
        $vehicle->year_of_manufacture = "";
        $vehicle->chassis_no = "";
        $vehicle->engine_no = "";
        $vehicle->engine_capacity = "";
        $vehicle->fuel_used = "";
        $vehicle->number_of_axles = "";
        $vehicle->axle_distance = "";
        $vehicle->seat_capacity = "";
        $vehicle->tare_weight = "";
        $vehicle->gross_weight = "";
        $vehicle->imported_from = "";
        $vehicle->usage_id = "";
        $vehicle->modal_id = "";
        $vehicle->make_id = "";
        $vehicle->fuel_consumption_rate = "";

        $vehicle->save();
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
        Vehicle::destroy($id);

	}

}

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
	public function store(Request $request)
	{
		$vehicle = new Vehicle();


        foreach ( $request->all() as $column => $value ) {
            echo $column."=>".$value;

            switch ($column) {
                case "registration_number":
                    $vehicle->registration_number        = $value;
                    break;
                case "vehicle_control_number":
                    $vehicle->vehicle_control_number     = $value;
                    break;
                case "first_registered":
                    $vehicle->first_registered           = $value;
                    break;
                case "model_number":
                    $vehicle->model_number               = $value;
                    break;
                case "body_type":
                    $vehicle->body_type                  = $value;
                    break;
                case "color":
                    $vehicle->color                      = $value;
                    break;
                case "class":
                    $vehicle->class                      = $value;
                    break;
                case "year_of_manufacture":
                    $vehicle->year_of_manufacture        = $value;
                    break;
                case "chassis_no":
                    $vehicle->chassis_no                 = $value;
                    break;
                case "engine_no":
                    $vehicle->engine_no                  = $value;
                    break;
                case "engine_capacity":
                    $vehicle->engine_capacity            = $value;
                    break;
                case "fuel_used":
                    echo $vehicle->fuel_used             = $value;
                    break;
                case "number_of_axles":
                    $vehicle->number_of_axles            = $value;
                    break;
                case "axle_distance":
                    $vehicle->axle_distance              = $value;
                    break;
                case "seat_capacity":
                    $vehicle->seat_capacity              = $value;
                    break;
                case "tare_weight":
                    $vehicle->tare_weight                = $value;
                    break;
                case "gross_weight":
                    $vehicle->gross_weight               = $value;
                    break;
                case "imported_from":
                    $vehicle->imported_from              = $value;
                    break;
                case "usage_id":
                    $vehicle->usage_id                   = $value;
                    break;
                case "modal_id":
                    $vehicle->modal_id                   = $value;
                    break;
                case "make_id":
                    $vehicle->make_id                    = $value;
                    break;
                case "make_id":
                    $vehicle->make_id                    = $value;
                    break;
                case "fuel_consumption_rate":
                    $vehicle->fuel_consumption_rate      = $value;
                    break;
            }

        }

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
		echo $id;
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Request $request,$id)
	{
        $vehicle = Vehicle::find($id);
        foreach ( $request->all() as $column => $value ) {
            switch ($column) {
                case "registration_number":
                    $vehicle->registration_number        = $value;
                    break;
                case "vehicle_control_number":
                    $vehicle->vehicle_control_number     = $value;
                    break;
                case "first_registered":
                    $vehicle->first_registered           = $value;
                    break;
                case "model_number":
                    $vehicle->model_number               = $value;
                    break;
                case "body_type":
                    $vehicle->body_type                  = $value;
                    break;
                case "color":
                    $vehicle->color                      = $value;
                    break;
                case "class":
                    $vehicle->class                      = $value;
                    break;
                case "year_of_manufacture":
                    $vehicle->year_of_manufacture        = $value;
                    break;
                case "chassis_no":
                    $vehicle->chassis_no                 = $value;
                    break;
                case "engine_no":
                    $vehicle->engine_no                  = $value;
                    break;
                case "engine_capacity":
                    $vehicle->engine_capacity            = $value;
                    break;
                case "fuel_used":
                    echo $vehicle->fuel_used             = $value;
                    break;
                case "number_of_axles":
                    $vehicle->number_of_axles            = $value;
                    break;
                case "axle_distance":
                    $vehicle->axle_distance              = $value;
                    break;
                case "seat_capacity":
                    $vehicle->seat_capacity              = $value;
                    break;
                case "tare_weight":
                    $vehicle->tare_weight                = $value;
                    break;
                case "gross_weight":
                    $vehicle->gross_weight               = $value;
                    break;
                case "imported_from":
                    $vehicle->imported_from              = $value;
                    break;
                case "usage_id":
                    $vehicle->usage_id                   = $value;
                    break;
                case "modal_id":
                    $vehicle->modal_id                   = $value;
                    break;
                case "make_id":
                    $vehicle->make_id                    = $value;
                    break;
                case "make_id":
                    $vehicle->make_id                    = $value;
                    break;
                case "fuel_consumption_rate":
                    $vehicle->fuel_consumption_rate      = $value;
                    break;
            }

        }
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

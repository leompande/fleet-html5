<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Reservation;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Driver;
use App\Fuel;
use App\Reservedreservation;
class ReservationController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
        $reservations = Reservation::all();
        return response()->json($reservations);
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
        $reservation = new Reservation();


        foreach ( $request->all() as $column => $value ) {

            switch ($column) {
                case "title":
                    $reservation->title        = $value;
                    break;
                case "start_date":
                    $reservation->start_date    = $value;
                    break;
                case "end_date":
                    $reservation->end_date       = $value;
                    break;
                case "possible_routes":
                    $reservation->possible_routes = $value;
                    break;
                case "reserved_to":
                    $reservation->reserved_to     = $value;
                    break;
            }

        }

        $reservation->save();
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
    public function show($id)
    {
        $reservation = Reservation::find($id);
        return response()->json($reservation);
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
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}

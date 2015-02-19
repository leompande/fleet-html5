<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDriverVehicleTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create('driver_vehicle', function(Blueprint $table)
        {
            $table->increments('id');
            $table->integer('driver_id');
            $table->integer('vehicle_id');
            $table->date('date_handled_over');
            $table->string('starting_point');
            $table->string('destination');
            $table->integer('average_distance');
            $table->integer('initial_odometer_reading');
            $table->integer('final_odometer_reading');
            $table->integer('initial_fuel_reading');
            $table->integer('final_fuel_reading');
            $table->string('fuel_consumption_remark');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('driver_vehicle');
    }


}

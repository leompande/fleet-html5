<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVehiclesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create('vehicles', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('registration_number');
            $table->string('vehicle_control_number');
            $table->date('first_registered');
            $table->string('model_number');
            $table->string('body_type');
            $table->string('color');
            $table->string('class');
            $table->string('year_of_manufacture');
            $table->string('chassis_no');
            $table->string('engine_no');
            $table->string('engine_capacity');
            $table->string('fuel_used');
            $table->string('number_of_axles');
            $table->string('axle_distance');
            $table->integer('seat_capacity');
            $table->string('tare_weight');
            $table->string('gross_weight');
            $table->string('imported_from');
            $table->integer('usage_id');
            $table->integer('modal_id');
            $table->integer('make_id');
            $table->integer('fuel_consumption_rate');
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
        Schema::drop('vehicles');
	}

}

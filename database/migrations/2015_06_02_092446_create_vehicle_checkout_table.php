<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVehicleCheckoutTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('vehiclecheckout', function(Blueprint $table)
		{
			$table->increments('id');
            $table->dateTime("checkout_date");
            $table->integer("departure_fuel_capacity");
            $table->integer("return_fuel_capacity");
            $table->integer("departure_odometer");
            $table->integer('return_odometer');
            $table->string('vehicle_condition');
            $table->text('drivers_comment');
            $table->text('passengers_comment');
            $table->text('journey_calamities');
            $table->string('supervisor');
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
		Schema::drop('vehiclecheckout');
	}

}

<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReservedVehiclesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('reservedvehicles', function(Blueprint $table)
		{
			$table->increments('id');
            $table->integer("vehicle_id");
            $table->integer('reservation_id');
            $table->integer('driver_id');
            $table->boolean('postponed');
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
		Schema::drop('reservedvehicles');
	}

}

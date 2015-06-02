<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCancelledReservationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('cancelledreservations', function(Blueprint $table)
		{
			$table->increments('id');
            $table->integer("reservation_id");
            $table->text("reason_for_cancellation");
            $table->date("cancellation_date");
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
		Schema::drop('cancelledreservations');
	}

}

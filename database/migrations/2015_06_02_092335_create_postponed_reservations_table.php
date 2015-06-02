<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostponedReservationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('postponedreservations', function(Blueprint $table)
		{
			$table->increments('id');
            $table->integer("reservation_id");
            $table->text("reason_for_postpone");
            $table->date("new_start_date");
            $table->date("new_end_date");
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
		Schema::drop('postponedreservations');
	}

}

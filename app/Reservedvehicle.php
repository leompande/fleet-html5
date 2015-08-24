<?php
/**
 * Created by PhpStorm.
 * User: leo
 * Date: 6/2/15
 * Time: 1:14 PM
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Reservedvehicle extends Model {
    public function reservation(){

        return $this->belongsTo('App\Reservation');

    }
} 
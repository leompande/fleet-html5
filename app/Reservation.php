<?php
/**
 * Created by PhpStorm.
 * User: leo
 * Date: 6/2/15
 * Time: 1:11 PM
 */

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model {

    public function reservedvehicles(){

        return $this->hasMany('App\Reservedvehicle');

    }

}

<?php
/**
 * Created by PhpStorm.
 * User: leo
 * Date: 6/2/15
 * Time: 1:24 PM
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Checkout extends Model{
    public function reservation(){
        return $this->hasOne('App\Reservation');
    }
} 
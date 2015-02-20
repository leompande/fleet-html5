<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Fuel extends Model {

    public function vehicles(){
        return $this->belongsToMany('App\Vehicle');
    }

}

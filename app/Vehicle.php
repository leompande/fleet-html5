<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model {

	public function drivers(){

        return $this->belongsToMany('App\Driver');

    }

    public function modal(){
        return $this->belongsTo('App\Modal');
    }

    public function make(){
        return $this->belongsTo('App\Make');
    }

    public function fuel(){
        return $this->belongsToMany('App\Fuel');
    }

}

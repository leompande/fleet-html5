<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Modal extends Model {

    public function vehicles(){
        return $this->hasMany('App\Vehicle');
    }

}

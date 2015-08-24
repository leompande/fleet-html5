<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Make extends Model {

    public function vehicles(){
        return $this->hasMany('App\Vehicle');
    }

}

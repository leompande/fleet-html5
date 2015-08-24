<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;
class UserTableSeeder extends Seeder{

    public function run()
    {
        DB::table('users')->delete();

        // new users users array
        $admin1   = array(
            'name' => 'Leonard Mpande',
            'email' => 'leo@gmail.com',
            'password' => 'mpande',
        );
        $admin2   = array(
            'name' => 'Stephen Mpande',
            'email' => 'steve@gmail.com',
            'password' => 'steve',
        );
        $admin3   = array(
            'name' => 'Edger Mpande',
            'email' => 'edgar@gmail.com',
            'password' => 'edger',
        );
        User::create($admin1);
        User::create($admin2);
        User::create($admin3);
    }
} 
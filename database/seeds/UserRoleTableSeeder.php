<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\UserRole;

class UserRoleTableSeeder {

    public function run()
    {
        DB::table('user_role')->delete();

        // new users users array
        $admin1   = array(
            'role_id' => '1',
            'user_id' => '1',
        ); $admin2   = array(
            'role_id' => '2',
            'user_id' => '2',
        ); $admin3   = array(
            'role_id' => '2',
            'user_id' => '3',
        ); $admin4   = array(
            'role_id' => '2',
            'user_id' => '4',
        ); $admin5   = array(
            'role_id' => '2',
            'user_id' => '5',
        );

        UserRole::create($admin1);
        UserRole::create($admin2);
        UserRole::create($admin3);
        UserRole::create($admin4);
        UserRole::create($admin5);
    }
} 
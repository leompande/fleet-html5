<?php
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Role;

class RolesTableSeeder extends Seeder{

    public function run()
    {
        DB::table('roles')->delete();

        // new users users array
        $admin1   = array(
            'role_name' => 'ADMINISTRATOR'
        );
        $admin2   = array(
            'role_name' => 'DATA ENTRY'
        );
        $admin3   = array(
            'role_name' => 'REPORT VIEWER'
        );
        $admin4   = array(
            'role_name' => 'FINANCE'
        );
        $admin5   = array(
            'role_name' => 'MAINTENANCE'
        );
        $admin6   = array(
            'role_name' => 'DASHBOARD'
        );
        Role::create($admin1);
        Role::create($admin2);
        Role::create($admin3);
        Role::create($admin4);
        Role::create($admin5);
        Role::create($admin6);
    }
} 
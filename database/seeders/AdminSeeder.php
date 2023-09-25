<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert(
            [
                [
                    'type' => true,
                    'name' => 'Admin Lenergia',
                    'email' => 'contact@lenergia.fr',
                    'password' => Hash::make('contact@lenergia.fr'),
                ],
                [
                    'type' => false,
                    'name' => 'User Lenergia',
                    'email' => 'user@lenergia.fr',
                    'password' => Hash::make('user@lenergia.fr'),
                ],
            ]);
    }
}

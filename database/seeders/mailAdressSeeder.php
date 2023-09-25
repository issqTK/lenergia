<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Generator;
use Illuminate\Support\Facades\DB;

class mailAdressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = app(Generator::class);

        DB::table('mail_adresses')->insert(
            [
                [
                    'name' => $faker->name,
                    'mailAdress' => $faker->safeEmail,
                ],
                [
                    'name' => $faker->name,
                    'mailAdress' => $faker->safeEmail,
                ],
                [
                    'name' => $faker->name,
                    'mailAdress' => $faker->safeEmail,
                ],
                [
                    'name' => $faker->name,
                    'mailAdress' => $faker->safeEmail,
                ],
                [
                    'name' => $faker->name,
                    'mailAdress' => $faker->safeEmail,
                ],
                [
                    'name' => $faker->name,
                    'mailAdress' => $faker->safeEmail,
                ],
            ]);

    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IntermediateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('intermediate_pages')->insert(
            [
                [
                    'slug' => 'passer-solaire',
                    'title' => 'Tout savoir sur les panneaux solaires',
                    'type' => 'es'
                ],
                [
                    'slug' => 'chauffage-maison',
                    'title' => 'Quel système de chauffage choisir',
                    'type' => 'ch'
                ],
                [
                    'slug' => 'isolation-maison',
                    'title' => 'Isolation des murs : pourquoi, comment faire ?',
                    'type' => 'i'
                ],                                
            ]
        );
    }
}

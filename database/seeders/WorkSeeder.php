<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WorkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('works')->insert(
            [
                [
                    'id' => 1,
                    'type' => 'es',
                    'name' => 'Panneaux Solaires Photovoltaïques',
                    'svg' => 'Panneaux_Photovoltaïques.png',
                    'img' => 'photovoltaique.png',
                    'img_alt' => 'panneaux solaires photovoltaïques',
                    'title' => 'Panneau Solaire Photovoltaique : Aides, Fonctionnement, Prix ..',
                    'description' => '<p style="margin-bottom:15px">Êtes-vous intéressé par les panneaux solaires ?<br>Avez-vous envisagé de les installer sur votre toiture ?<br>Dans ce cas, vous allez adorer ce guide complet sur les panneaux solaires en 2023!<br>Il abordera toutes les questions que vous vous posez certainement.</p><i>Si vous cherchez à connaître :</i><ul style="list-style-type:disc; list-style-position: outside; margin-left:15px; font-weight:bold; font-size:.9em; line-height:30px"><li>Le fonctionnement d\'une installation solaire.</li><li>Le nombre de panneaux photovoltaïques nécessaires pour votre projet.</li><li>Les prix moyens de nos Kits solaires.</li><li>Les différentes aides de l\'État disponibles pour vous accompagner dans votre transition énergétique.</li></ul>',
                    'slug' => 'panneaux-solaires-photovoltaiques',
                    'meta_title' => 'Panneaux Solaires photovoltaïques: fonctionnement, prix, entretien, énergie solaire',
                ],
                [
                    'id' => 2,
                    'type' => 'es',
                    'name' => 'Panneaux solaires thermiques',
                    'svg' => 'panneaux_thermiques.png',
                    'img' => null,
                    'img_alt' => null,
                    'title' => 'Panneaux solaires thermiques : Votre guide complet et informations détaillées',
                    'description' => 'Les panneaux solaires thermiques sont une technologie innovante qui utilise l\'énergie solaire pour produire de la chaleur. En capturant la chaleur du soleil, ils chauffent l\'eau ou l\'air de manière écologique et efficace. Découvrez leurs avantages et applications pour un avenir énergétique plus propre. En utilisant une énergie renouvelable, vous faites jusqu\'à <strong>40% d\'économies.</strong>',
                    'slug' => 'panneau-solaire-thermique',
                    'meta_title' => 'Panneau solaire thermique : fonctionnement, énergie solaire, centrale solaire thermique',
                ],
                [
                    'id' => 3,
                    'type' => 'es',
                    'name' => 'Panneaux solaires hybrides',
                    'svg' => 'panneaux_hybrides.png',
                    'img' => null,
                    'img_alt' => null,
                    'title' => 'Optimisez votre énergie avec les panneaux solaires hybrides : Maximisez votre potentiel énergétique',
                    'description' => 'Alliant chauffage thermique et électricité photovoltaïque, ces panneaux novateurs s\'alimentent de la lumière et de la chaleur solaire pour créer une alliance parfaite. Explorez leurs caractéristiques, fonctionnement, avantages, et économies d\'énergie pour une transition énergétique réussie. Une révolution verte à ne pas manquer !',
                    'slug' => 'panneau-solaire-hybrides',
                    'meta_title' => 'Le panneau solaire hybride : une solution écologique 2 en 1 produire de l\'électricité et du chauffage',
                ], 
                [
                    'id' => 4,
                    'type' => 'es',
                    'name' => 'Ballon thermodynamique',
                    'svg' => 'Ballon_thermodynamique.png',
                    'img' => null,
                    'img_alt' => null,
                    'title' => 'Chauffe-eau thermodynamique : Votre Allié Économique pour une Eau Chaude Écologique',
                    'description' => 'Découvrez une solution de chauffage d\'eau qui peut réduire votre <strong>facture d\'électricité jusqu\'à 50%</strong> ! Le chauffe-eau thermodynamique utilise les calories de l\'air pour <strong>chauffer</strong> votre eau de manière écologique et économique. Cette installation abordable vous permettra également de bénéficier d\'une <strong>aide allant jusqu\'à 1 200 €</strong> grâce au programme <strong>MaPrimeRénov\'</strong>.',
                    'slug' => 'chauffe-eau-thermodynamique',
                    'meta_title' => 'Chauffe-eau thermodynamique : chauffe-eau solaire l\'essentiel',
                ],
                /*  */
                [
                    'id' => 5,
                    'type' => 'ch',
                    'name' => 'Pompe à chaleur',
                    'svg' => 'pompe-a-chaleur.png',
                    'img' => 'Pompe à chaleur Atlantic.png',
                    'img_alt' => 'Pompe à chaleur',
                    'title' => 'Qu\'est-ce qu\'une pompe à chaleur ?',
                    'description' => 'Une pompe à chaleur (PAC) est un système de chauffage écologique qui permet de chauffer un logement et, dans certains cas, l\'eau sanitaire de ce même logement.',
                    'slug' => 'pompe-à-chaleur',
                    'meta_title' => 'Pompe à chaleur chauffage, fonctionnement, prix, ..',
                ],
                [
                    'id' => 6,
                    'type' => 'ch',
                    'name' => 'Poêles à granulés',
                    'svg' => 'poele-a-granules.png',
                    'img' => 'Poêle à granulés.png',
                    'img_alt' => 'Poêle à granulés',
                    'title' => 'Poêle à granulés : un chauffage d\'appoint au bois optimisé',
                    'description' => 'Cet article épluche l\'essentiel à savoir sur le poêle à granulés. Subventions, aides de l\'Etat, prix, installation... Cet équipement de chauffage d\'appoint trouve de plus en plus sa place dans les logements des Français. Il faut dire qu\'il est performant et économique !',
                    'slug' => 'poêle-à-granulés',
                    'meta_title' => 'Poêle à granulés prix : fonctionnement, installation, prix, ...',
                ],
                [
                    'id' => 7,
                    'type' => 'ch',
                    'name' => 'Système solaire combiné',
                    'svg' => 'collaboration.png',
                    'img' => null,
                    'img_alt' => null,
                    'title' => 'Solaire Combiné : La Fusion Parfaite pour une Énergie Durable !',
                    'description' => 'Le Système Solaire Combiné (SSC) est une technologie qui tire parti du soleil pour répondre aux besoins énergétiques d\'une habitation, offrant à la fois de la chaleur et de l\'électricité.',
                    'slug' => 'système-solaire-combiné',
                    'meta_title' => 'Système Solaire Combiné : Fonctionnement, Installation, Prix, …',
                ], 
                /*  */
                [
                    'id' => 8,
                    'type' => 'i',
                    'name' => 'Murs intérieur',
                    'svg' => 'Murs-intérieur.png',
                    'img' => null,
                    'img_alt' => null,
                    'title' => 'Tout savoir sur l\'isolation des murs par l\'intérieur',
                    'description' => '<i><b>Introduction :</b></i><br>L\'isolation des murs par l\'intérieur : la technique la plus répandue en France pour ses économies d\'énergie. Avantages, inconvénients, meilleurs isolants, et coûts détaillés dans notre guide complet et accessible à tous ! Optimisez votre confort thermique et réduisez vos pertes de chaleur avec les bonnes informations sur l\'isolation des murs intérieurs.',
                    'slug' => 'isolation-intérieur',
                    'meta_title' => 'isolation intérieur : isolation mur intérieur le guide complet, fonctionnement, prix .. ',
                ],
                [
                    'id' => 9,
                    'type' => 'i',
                    'name' => 'Murs extérieur',
                    'svg' => 'Murs-extérieur.png',
                    'img' => null,
                    'img_alt' => null,
                    'title' => 'Tout savoir sur l\'isolation des murs par l\'intérieur',
                    'description' => 'Sans une isolation appropriée, votre maison peut être vulnérable aux intempéries, laissant entrer l\'humidité et les courants d\'air, entraînant des problèmes d\'humidité et de moisissures. Il est donc primordial de prendre des mesures pour isoler efficacement vos murs extérieurs afin de créer un intérieur confortable, sain et économe en énergie.',
                    'slug' => 'isolation-extérieur',
                    'meta_title' => 'isolation extérieur : isolation mur extérieur le guide complet, fonctionnement, prix .. ',
                ],

            ]
        );
    }
}

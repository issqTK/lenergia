<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FAQSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('f_a_q_s')->insert(
            [
                [
                    'work_id' => 1,
                    'h3' => 'Quel est le prix d\'un panneau solaire ?',
                    'p' => 'Nous proposons l\'installation de 3 kwc à partir de 7 786 € (aides de l\'État déduites).',
                ],
                [
                    'work_id' => 1,
                    'h3' => 'Quelles sont les aides de l\'État pour les panneaux solaires photovoltaïques ?',
                    'p' => 'Le soutien de l\'Etat pour l\'installation de panneaux solaires se traduit par plusieurs aides comme la prime à l\'autoconsommation, l\'obligation d\'achat, la TVA à taux réduit et une fiscalité avantageuse. Certaines collectivités locales offrent également des subventions supplémentaires.',
                ],
                [
                    'work_id' => 1,
                    'h3' => 'Est-ce rentable d\'installer des panneaux?',
                    'p' => 'Oui, il est aujourd\'hui rentable d\'installer des panneaux solaires en France. Le temps de retour sur amortissement est compris entre 8 à 10 ans et les installations photovoltaïques peuvent atteindre un taux de rentabilité de 10%.',
                ],
                [
                    'work_id' => 1,
                    'h3' => 'Comment fonctionne une installation solaire ?',
                    'p' => 'Le panneau solaire capte et transforme les rayons du Soleil en courant électrique continu. Or, nos maisons fonctionnent avec un courant alternatif. C\'est pour cela que les panneaux solaires sont reliés à un (ou plusieurs) onduleur(s) qui convertit le courant continu en courant alternatif. L\'électricité est ensuite envoyée à votre compteur avant d\'alimenter votre maison et/ou le réseau.',
                ],
                [
                    'work_id' => 1,
                    'h3' => 'Quelle est la différence entre un panneau solaire et un panneau photovoltaïque ?',
                    'p' => 'Panneau solaire est un terme générique qui renvoie simplement à un dispositif qui capte l\'énergie solaire pour ensuite la réutiliser. Selon le type d\'énergie que vous souhaitez obtenir, vous devez choisir des panneaux photovoltaïques (électricité) ou thermiques (eau chaude).',
                ],
                /*  */
                [
                    'work_id' => 2,
                    'h3' => 'Quel est le coût moyen d\'installation des panneaux thermiques ?',
                    'p' => 'Le coût varie selon la puissance du système, allant de 15 000 € à 40 000 € pour des installations de 3 kWc à 9 kWc. Des aides financières peuvent être disponibles pour réduire les coûts.',
                ],
                [
                    'work_id' => 2,
                    'h3' => 'Les panneaux thermiques fonctionnent-ils par temps nuageux ?',
                    'p' => 'Oui, les panneaux thermiques peuvent fonctionner par temps nuageux, bien qu\'ils soient plus efficaces sous un ensoleillement direct.',
                ],
                [
                    'work_id' => 2,
                    'h3' => 'Quelle est la différence entre panneaux solaires photovoltaïques et panneaux thermiques ?',
                    'p' => 'Les panneaux photovoltaïques produisent de l\'électricité, tandis que les panneaux thermiques produisent de la chaleur pour l\'eau chaude ou le chauffage.',
                ],
                /*  */
                [
                    'work_id' => 3,
                    'h3' => 'Quelle est la durée de vie moyenne des panneaux hybrides ?',
                    'p' => 'La durée de vie moyenne des panneaux hybrides est généralement similaire à celle des panneaux solaires traditionnels, soit environ 25 à 30 ans. Cependant, leur efficacité peut diminuer légèrement au fil du temps, mais un entretien régulier peut prolonger leur durée de vie et leur performance.',
                ],
                [
                    'work_id' => 3,
                    'h3' => 'Quel est l\'entretien requis pour les panneaux hybrides ?',
                    'p' => 'Les panneaux hybrides nécessitent un entretien relativement simple. Il est recommandé de nettoyer régulièrement les surfaces des panneaux pour éliminer la poussière, les feuilles ou autres débris qui pourraient réduire leur efficacité.',
                ],
                [
                    'work_id' => 3,
                    'h3' => 'Quels sont les avantages des panneaux hybrides par rapport aux panneaux solaires traditionnels ?',
                    'p' => 'Les panneaux hybrides offrent plusieurs avantages par rapport aux panneaux solaires traditionnels. Ils permettent de produire à la fois de l\'électricité et de la chaleur, ce qui optimise l\'utilisation de l\'énergie solaire. Cela peut conduire à des économies d\'énergie plus importantes et à une meilleure efficacité globale de l\'installation.',
                ],
                /*  */
                [
                    'work_id' => 4,
                    'h3' => 'Combien de temps faut-il pour chauffer l\'eau dans un chauffe-eau thermodynamique ?',
                    'p' => 'Le temps de chauffe de l\'eau dans un chauffe-eau thermodynamique varie entre 4 et 8 heures, en fonction de la capacité du ballon et de la température ambiante.',
                ],
                [
                    'work_id' => 4,
                    'h3' => 'Peut-on installer un chauffe-eau thermodynamique dans n\'importe quel type de logement ?',
                    'p' => 'Oui, le chauffe-eau thermodynamique peut être installé dans la plupart des types de logements, qu\'il s\'agisse de maisons individuelles, d\'appartements ou de bâtiments collectifs.',
                ],
                [
                    'work_id' => 4,
                    'h3' => 'Est-ce que le chauffe-eau thermodynamique est bruyant ?',
                    'p' => 'Non, le chauffe-eau thermodynamique est silencieux lorsqu\'il fonctionne, car il utilise un compresseur pour extraire les calories de l\'air ambiant, ce qui le rend plus discret qu\'un chauffe-eau électrique classique.',
                ],
                [
                    'work_id' => 4,
                    'h3' => 'Quelle est la durée de vie d\'un chauffe-eau thermodynamique ?',
                    'p' => 'La durée de vie moyenne d\'un chauffe-eau thermodynamique est d\'environ 15 à 20 ans, mais cela peut varier en fonction de la qualité de l\'appareil et de l\'entretien régulier effectué.',
                ],
                [
                    'work_id' => 4,
                    'h3' => 'Quelle est la consommation électrique d\'un chauffe-eau thermodynamique ?',
                    'p' => 'La consommation électrique d\'un chauffe-eau thermodynamique dépend de plusieurs facteurs, tels que la taille du ballon, la température de l\'eau souhaitée et le niveau d\'isolation du logement. En général, un chauffe-eau thermodynamique consomme environ 2 à 3 fois moins d\'électricité qu\'un chauffe-eau électrique classique.',
                ],
                /*  */
                [
                    'work_id' => 5,
                    'h3' => 'Quel type de pompe à chaleur convient le mieux à ma maison ?',
                    'p' => 'La réponse dépend de facteurs tels que la taille de votre maison, le climat de votre région et vos besoins en chauffage et en refroidissement. Il est recommandé de consulter un professionnel pour déterminer le type de pompe à chaleur le plus approprié pour votre situation.',
                ],
                [
                    'work_id' => 5,
                    'h3' => 'Quel est le niveau d\'efficacité énergétique de la pompe à chaleur ?',
                    'p' => 'Le niveau d\'efficacité énergétique est mesuré par le coefficient de performance (COP). Plus le COP est élevé, plus la pompe à chaleur est efficace. Il est conseillé de choisir une pompe à chaleur avec un COP élevé pour des économies d\'énergie maximales.',
                ],
                [
                    'work_id' => 5,
                    'h3' => 'Quelle est la capacité de chauffage et de refroidissement de la pompe à chaleur ?',
                    'p' => 'La capacité de chauffage et de refroidissement de la pompe à chaleur est exprimée en kilowatts (kW). Elle doit être adaptée à la taille de votre maison et à vos besoins en chauffage et en refroidissement. Un professionnel peut vous aider à déterminer la capacité appropriée.',
                ],
                [
                    'work_id' => 5,
                    'h3' => 'Quelle est la garantie offerte et sa durée ?',
                    'p' => 'La garantie offerte peut varier d\'un fabricant à l\'autre, mais généralement, une garantie standard d\'au moins 2 à 5 ans est courante. Certains fabricants proposent également des extensions de garantie pour une période supplémentaire. Il est important de vérifier les détails de la garantie lors de l\'achat.',
                ],
                [
                    'work_id' => 5,
                    'h3' => 'Quelles sont les exigences d\'entretien de la pompe à chaleur ?',
                    'p' => 'Les exigences d\'entretien peuvent varier d\'une pompe à chaleur à l\'autre, mais en général, il est recommandé de planifier un entretien annuel effectué par un professionnel. Cela garantit un fonctionnement optimal de la pompe à chaleur et prolonge sa durée de vie.',
                ],
                /*  */
                [
                    'work_id' => 6,
                    'h3' => 'Ma pompe à chaleur aérothermique présente du givre sur l\'unité extérieure. Que faire pour y remédier ?',
                    'p' => 'Si l\'unité extérieure de votre pompe à chaleur se couvre de givre, assurez-vous qu\'elle est dégagée de tout obstacle et nettoyez les éventuels dépôts de glace. Si le problème persiste, faites appel à un professionnel pour vérifier le bon fonctionnement de votre système.',
                ],
                [
                    'work_id' => 6,
                    'h3' => 'Comment optimiser l\'exposition de l\'unité extérieure d\'une pompe à chaleur aérothermique ?',
                    'p' => 'Oui, l\'unité extérieure d\'une pompe à chaleur aérothermique doit être exposée dans un espace dégagé, loin des obstacles, pour favoriser son efficacité et son bon fonctionnement.',
                ],
                [
                    'work_id' => 6,
                    'h3' => 'Quel est le taux de TVA appliqué à l\'achat d\'une chaudière fioul à condensation ?',
                    'p' => 'Le taux de TVA appliqué à une chaudière fioul à condensation est de 5,5%.',
                ],
                [
                    'work_id' => 6,
                    'h3' => 'Quelle est la durée de vie typique d\'une chaudière gaz basse température ?',
                    'p' => 'La durée de vie moyenne d\'une chaudière gaz basse température est d\'environ 15 à 20 ans, selon son entretien et son utilisation.',
                ],
                [
                    'work_id' => 6,
                    'h3' => 'Est-ce que la température du sol fluctue entre le jour et la nuit, ainsi qu\'au fil des saisons ?',
                    'p' => 'Oui, la température du sol peut varier entre le jour et la nuit, ainsi qu\'au fil des saisons, en raison des changements climatiques et des cycles naturels.',
                ],
                /*  */
                [
                    'work_id' => 7,
                    'h3' => 'Est-ce que l\'installation d\'un Système Solaire Combiné nécessite des modifications importantes de ma maison ?',
                    'p' => 'Oui, l\'installation d\'un Système Solaire Combiné peut nécessiter des modifications mineures à votre maison pour intégrer les capteurs solaires et les panneaux photovoltaïques.',
                ],
                [
                    'work_id' => 7,
                    'h3' => 'Comment estimer les économies d\'énergie que je pourrais réaliser en utilisant un SSC ?',
                    'p' => 'Les économies d\'énergie dépendent de votre consommation actuelle, mais généralement, un SSC permet de réaliser des économies significatives sur vos factures d\'électricité et de chauffage.',
                ],
                [
                    'work_id' => 7,
                    'h3' => 'Est-ce que le Système Solaire Combiné est adapté à mon climat local et quelle est son efficacité dans des conditions météorologiques variées ?',
                    'p' => 'Le SSC peut être adapté à différents climats et est efficace dans des conditions météorologiques variées, bien qu\'une exposition maximale au soleil soit idéale pour une performance optimale.',
                ],
                /*  */
                [
                    'work_id' => 8,
                    'h3' => 'Quels matériaux isolants sont les plus efficaces pour l\'isolation des murs intérieurs ?',
                    'p' => 'Parmi les matériaux isolants les plus efficaces pour les murs intérieurs, on retrouve la laine de roche, la laine de verre, le polystyrène et les isolants écologiques tels que le chanvre.',
                ],
                [
                    'work_id' => 8,
                    'h3' => 'Est-il possible de réaliser soi-même l\'isolation des murs intérieurs ?',
                    'p' => 'Oui, il est possible de réaliser soi-même l\'isolation des murs intérieurs, cependant, faire appel à des professionnels garantit une mise en œuvre conforme aux normes et une meilleure efficacité énergétique.',
                ],
                [
                    'work_id' => 8,
                    'h3' => 'Quelles sont les différences entre l\'isolation par l\'intérieur et l\'isolation par l\'extérieur ?',
                    'p' => 'L\'isolation par l\'intérieur se réalise à l\'intérieur de l\'habitation en plaçant l\'isolant sur les murs intérieurs, tandis que l\'isolation par l\'extérieur s\'effectue sur la façade extérieure de la maison.',
                ],
                [
                    'work_id' => 8,
                    'h3' => 'Comment se déroulent concrètement les travaux d\'isolation des murs intérieurs ?',
                    'p' => 'Les travaux d\'isolation des murs intérieurs impliquent généralement la préparation des surfaces, l\'installation de l\'isolant choisi, puis la réalisation de finitions comme l\'ajout d\'un revêtement final pour obtenir un aspect esthétique.',
                ],
                /*  */
                [
                    'work_id' => 9,
                    'h3' => 'L\'isolation des murs par l\'extérieur nécessite-t-elle des autorisations spéciales ?',
                    'p' => 'Oui, dans la plupart des cas, l\'isolation des murs par l\'extérieur nécessite une autorisation d\'urbanisme, telle qu\'un permis de construire ou une déclaration préalable.',
                ],
                [
                    'work_id' => 9,
                    'h3' => 'Quels matériaux sont utilisés pour l\'isolation des murs extérieurs ?',
                    'p' => 'Les matériaux couramment utilisés incluent la laine minérale, le polystyrène expansé (PSE), le polyuréthane (PUR) et les panneaux en fibres de bois.',
                ],
                [
                    'work_id' => 9,
                    'h3' => 'Quel est le coût moyen de l\'isolation des murs par l\'extérieur ?',
                    'p' => 'Le coût varie en fonction de la surface à isoler et du matériau choisi, mais en général, le prix moyen se situe entre 100€ et 150€ par mètre carré.',
                ],
                [
                    'work_id' => 10,
                    'h3' => 'Quel type d\'isolation est le plus efficace avec un thermostat connecté ?',
                    'p' => 'Une bonne isolation thermique est essentielle pour maximiser les bénéfices d\'un thermostat connecté. Les matériaux comme la laine de verre, le polystyrène expansé ou encore la cellulose sont très efficaces pour garder la chaleur à l\'intérieur.',
                ],
                [
                    'work_id' => 10,
                    'h3' => 'L\'installation est-elle vraiment simple ?',
                    'p' => 'Oui, la plupart des thermostats connectés sont conçus pour être installés sans outils spécifiques. Un manuel d\'instructions détaillé est généralement fourni pour vous guider pas à pas.',
                ],
                [
                    'work_id' => 10,
                    'h3' => 'Quelle est la différence entre un thermostat connecté et un thermostat classique ?',
                    'p' => 'Un thermostat classique ne permet pas de gestion à distance ni de programmation intelligente. Un thermostat connecté offre des fonctionnalités avancées, comme des rapports sur la consommation énergétique et la possibilité de le contrôler via une application mobile.',
                ],
            ]
        );
    }
}

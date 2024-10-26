<template>
    <div class="flex flex-col pt-16 gap-6 bg-white">
        <h2 class="text-2xl md:text-4xl mx-4 font-extrabold text-center">
            Envie de faire des économies d'énergie
        </h2>

        <p class="text-xl text-center mb-16 mx-4">
            Des services conçus pour vous :
        </p>

        <div
            class="relative flex flex-wrap justify-center gap-8 py-12 px-4 md:mx-6 bg-gradient-to-b to-slate-50 from-slate-100 md:rounded-xl">
            <!-- nav -->
            <!-- #b9f8d3 green ; #ffd0b6 pink ; #a8ecff blue -->
            <div class="absolute grid grid-cols-3 -top-16 md:-top-12 w-11/12 lg:w-10/12">
                <a @click.prevent="showContent('solair')" :style="solair ? 'background-color:#a8ecff' : ''"
                    class="flex flex-col md:flex-row gap-0 md:gap-2 md:justify-center justify-start items-center py-2 md:p-4 md:py-4 md:px-6 rounded bg-white text-sm md:text-base font-bold cursor-pointer border transition-all duration-500">
                    <img class="w-14 h-14" src="/images/illustration/solaire_icon.png" alt="Passer au solaire" />
                    <span class="flex-1 text-center md:text-left">Branchez-vous sur le soleil</span>
                </a>
                <a @click.prevent="showContent('chauffage')" :style="chauffage ? 'background-color:#ffd0b6' : ''"
                    class="flex flex-col md:flex-row gap-0 md:gap-2 md:justify-center justify-start items-center py-2 md:p-4 md:py-4 md:px-6 rounded bg-white text-sm md:text-base font-bold cursor-pointer border transition-all duration-500">
                    <img class="w-14 h-14" src="/images/illustration/chauffage_icon.png" alt="Changer mon chauffage" />
                    <span class="flex-1 text-center md:text-left">Chauffez-vous proprement</span>
                </a>
                <a @click.prevent="showContent('isolation')" :style="isolation ? 'background-color: #b9f8d3' : ''"
                    class="flex flex-col md:flex-row gap-0 md:gap-2 md:justify-center justify-start items-center py-2 md:p-4 md:py-4 md:px-6 rounded bg-white text-sm md:text-base font-bold cursor-pointer border transition-all duration-500">
                    <img class="w-14 h-14" src="/images/illustration/isolation_icon.png" alt="Isoler ma maison" />
                    <span class="flex-1 text-center md:text-left">Limiter les déperditions thermiques</span>
                </a>
            </div>

            <!-- contents -->
            <div v-if="solair" class="w-full m-auto flex flex-wrap justify-center py-6 gap-8">
                <div class="flex flex-col md:flex-row w-96 md:w-7/12 bg-white rounded-md overflow-hidden">
                    <div class="h-32 w-full md:h-full md:w-4/12 !bg-cover" style="
                            background: url('/images/home/solaire-section2.png')
                                center;
                        "></div>

                    <div class="flex flex-col w-full md:w-8/12">
                        <h6 class="font-bold p-3" style="background-color: #a8ecff">
                            Jusqu'à 1 600€ d'économies par an
                        </h6>

                        <div class="p-3 px-6 flex flex-col gap-2 items-start h-full text-sm">
                            <h3 class="text-xl font-bold leading-10">
                                Panneaux solaires
                            </h3>

                            <p class="">
                                Créez de votre toiture une source de production
                                d'électricité, et vous:
                            </p>

                            <ul class="list-disc ml-4">
                                <li class="mb-2">
                                    Dites adieu aux sources d'énergie
                                    traditionnelles en produisant votre propre
                                    électricité écologique
                                </li>
                                <li>
                                    Bénéficiez d'une réduction de 60 % sur vos
                                    dépenses énergétiques
                                </li>
                            </ul>

                            <p class="">
                                <b class="text-base">Profitez de l'utilisation de panneaux
                                    hybrides ?</b>
                                <br />
                                <span class="text-sm">Alliant chauffage thermique et électricité
                                    photovoltaïque, ces panneaux novateurs
                                    s'alimentent de la lumière et de la chaleur
                                    solaire pour créer une alliance
                                    parfaite.</span>
                            </p>

                            <p class="text-center mt-3">
                                Réaliser jusqu'à 60 % d'économies sur vos coûts
                                énergétiques.
                            </p>

                            <Link :href="route('intermediate', 'passer-solaire')"
                                class="text-center m-auto text-teal-500 hover:text-white text-xs uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-8 py-4 rounded-full font-bold border border-teal-500 transition-all">
                            JE PASSE AU SOLAIRE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="chauffage" class="w-full m-auto flex flex-wrap justify-center py-6 gap-8">
                <div class="flex flex-col md:flex-row w-96 md:w-5/12 bg-white rounded-md overflow-hidden">
                    <div class="h-32 w-full md:h-full md:w-5/12 !bg-cover" style="
                            background: url('/images/home/chauffage1.jpg')
                                center;
                        "></div>

                    <div class="flex flex-col w-full md:w-7/12 h-full">
                        <h6 class="font-bold p-3" style="background-color: #ffd0b6">
                            Jusqu'à 1 000€ d'économies par an
                        </h6>

                        <div class="px-6 py-4 flex flex-col gap-4 items-start">
                            <h3 class="text-xl font-bold leading-10">
                                Pompe à chaleur
                            </h3>

                            <ul class="list-disc ml-4">
                                <li class="mb-2">Efficacité énergétique</li>
                                <li class="mb-2">Économies financières</li>
                                <li>Distribution homogène de la chaleur</li>
                            </ul>

                            <Link :href="route('intermediate', 'chauffage-maison')
                                "
                                class="text-center m-auto text-teal-500 hover:text-white text-xs uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-8 py-4 rounded-full font-bold border border-teal-500 transition-all">
                            J'INSTALLE UNE PAC
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row w-96 md:w-5/12 bg-white rounded-md overflow-hidden">
                    <div class="h-32 w-full md:h-full md:w-5/12 !bg-cover" style="
                            background: url('/images/home/chauffage-2.jpg')
                                center;
                        "></div>

                    <div class="flex flex-col w-full md:w-7/12">
                        <h6 class="font-bold p-3 bg-gray-200">
                            Jusqu'à 30% d'économies d'énergie
                        </h6>

                        <div class="px-6 py-4 flex flex-col gap-4 items-start">
                            <h3 class="text-xl font-bold leading-10">
                                Chaudière à Gaz
                            </h3>

                            <ul class="list-disc ml-4">
                                <li class="mb-2">Chauffage instantané</li>
                                <li class="mb-2">Solution économique</li>
                                <li>Faibles émissions</li>
                            </ul>

                            <Link :href="route('intermediate', 'chauffage-maison')
                                "
                                class="text-center m-auto text-teal-500 hover:text-white text-xs uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-8 py-4 rounded-full font-bold border border-teal-500 transition-all">
                            J'INSTALLE UNE CHAUDIÈRE
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row w-96 md:w-5/12 bg-white rounded-md overflow-hidden">
                    <div class="h-32 w-full md:h-full md:w-5/12 !bg-cover md:bg-auto" style="
                            background: url('/images/home/chauffage-3.jpg')
                                no-repeat center;
                        "></div>

                    <div class="flex flex-col w-full md:w-7/12">
                        <h6 class="font-bold p-3 bg-gray-200">
                            Jusqu'à 3 800€ d'aides
                        </h6>

                        <div class="px-6 py-4 flex flex-col gap-4 items-start">
                            <h3 class="text-xl font-bold leading-10">
                                Chauffage d'appoint
                            </h3>

                            <p class="leading-6 text-md">
                                Chaleur efficace et combustible écologique,
                                faites des économies d'énergie en optant pour un
                                poêle à granulés.
                            </p>

                            <Link :href="route('intermediate', 'chauffage-maison')
                                "
                                class="text-center m-auto text-teal-500 hover:text-white text-xs uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-8 py-4 rounded-full font-bold border border-teal-500 transition-all">
                            JE CHOISIS MON CHAUFFAGE
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row w-96 md:w-5/12 bg-white rounded-md overflow-hidden">
                    <div class="h-32 w-full md:h-full md:w-5/12 !bg-right-top !bg-cover" style="
                            background: url('/images/home/chauffage-4.jpeg')
                                center;
                        "></div>

                    <div class="flex flex-col w-full md:w-7/12">
                        <h6 class="font-bold p-3 bg-gray-200">
                            Des factures divisées par trois
                        </h6>

                        <div class="px-6 py-4 flex flex-col gap-4 items-start">
                            <h3 class="text-xl font-bold leading-8">
                                Chauffe-eau thermodynamique
                            </h3>

                            <ul class="list-disc ml-4">
                                <li class="mb-2">Chauffage Rapide</li>
                                <li class="mb-2">
                                    Capacité d'adaptation lors de l'installation
                                </li>
                                <li>Performance tout au long de l'année</li>
                            </ul>

                            <Link :href="route('intermediate', 'chauffage-maison')
                                "
                                class="text-center m-auto text-teal-500 hover:text-white text-xs uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-8 py-4 rounded-full font-bold border border-teal-500 transition-all">
                            J'INSTALLE UN CHAUFFE-EAU
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="isolation" class="w-full m-auto flex flex-wrap justify-center py-6 gap-8">
                <div class="flex flex-col md:flex-row w-96 md:w-7/12 bg-white rounded-md overflow-hidden">
                    <div class="h-32 w-full md:h-full md:w-4/12 !bg-cover" style="
                            background: url('/images/home/section-2-isolation.jpg')
                                center;
                        "></div>

                    <div class="flex flex-col w-full md:w-8/12">
                        <h6 class="font-bold p-3" style="background-color: #b9f8d3">
                            Jusqu'à 25% d'économies d'énergie
                        </h6>

                        <div class="p-6 md:py-8 flex flex-col gap-2 items-start h-full" style="min-height: 330px">
                            <h3 class="text-xl font-bold leading-10">
                                Isolation des murs
                            </h3>

                            <p class="leading-6">
                                L'isolation des murs assure un confort accru,
                                prévient les pertes d'énergie et permet des
                                économies significatives
                            </p>

                            <Link :href="route('intermediate', 'isolation-maison')
                                "
                                class="text-center m-auto text-teal-500 hover:text-white text-xs uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-8 py-4 rounded-full font-bold border border-teal-500 transition-all">
                            J'ISOLE MES MURS
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Link } from "@inertiajs/vue3";
import btnDevis from "@/customComponents/btnDevis.vue";

export default {
    components: { Link, btnDevis },
    data() {
        return {
            solair: true,
            chauffage: false,
            isolation: false,
        };
    },
    methods: {
        showContent(content) {
            this.chauffage = false;
            this.isolation = false;
            this.solair = false;

            if (content == "solair") this.solair = true;
            else if (content == "chauffage") this.chauffage = true;
            else if (content == "isolation") this.isolation = true;
        },
    },
};
</script>

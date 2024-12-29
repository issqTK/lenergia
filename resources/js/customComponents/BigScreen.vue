<template>
    <div class="hidden lg:flex justify-between h-full overflow-hidden bg-white">
        <ul class="flex items-center h-full gap-4">
            <li class="show-interior">
                <a href="javascript:void(0)" class="py-8 block">Nos Offres</a>

                <ul
                    class="absolute bg-white flex py-6 rounded border-t-4 shadow border-green-300 interior"
                >
                    <i
                        class="fa-solid fa-caret-up text-green-300 text-3xl absolute"
                        style="top: -23px; left: 30px"
                    ></i>

                    <div class="flex flex-col gap-6 px-9 border-r">
                        <h3 class="uppercase text-gray-700 font-semibold">
                            Les Travaux
                        </h3>
                        <li>
                            <Link
                                :href="
                                    route('intermediate', 'isolation-maison')
                                "
                                class="!flex items-center gap-2"
                            >
                                <img
                                    src="/images/illustration/isolation_global.png"
                                    style="max-height: 30px"
                                />
                                Isolation globale
                            </Link>
                        </li>
                        <li>
                            <Link
                                :href="
                                    route(
                                        'landing',
                                        'panneaux-solaires-photovoltaiques'
                                    )
                                "
                                class="!flex items-center gap-2"
                            >
                                <img
                                    src="/images/illustration/Panneaux_Photovoltaïques.png"
                                    style="max-height: 30px"
                                />
                                Panneaux photovoltaïques
                            </Link>
                        </li>
                        <li>
                            <Link
                                :href="route('landing', 'pompe-à-chaleur')"
                                class="!flex items-center gap-2"
                            >
                                <img
                                    src="/images/illustration/pompe-a-chaleur.png"
                                    style="max-height: 30px"
                                />
                                Pompe à chaleur
                            </Link>
                        </li>
                        <li>
                            <Link
                                :href="
                                    route('landing', 'système-solaire-combiné')
                                "
                                class="!flex items-center gap-2"
                            >
                                <img
                                    src="/images/illustration/collaboration.png"
                                    style="max-height: 30px"
                                />
                                Système solaire combiné
                            </Link>
                        </li>
                    </div>

                    <div class="flex flex-col gap-6 px-9">
                        <h3 class="uppercase text-gray-700 font-semibold">
                            Les Services
                        </h3>
                        <li>
                            <Link
                                :href="route('parcour')"
                                class="!flex items-center gap-2"
                            >
                                <img
                                    src="/images/illustration/bilan_icon.png"
                                    style="max-height: 30px"
                                />
                                Bilan énergétique gratuit
                            </Link>
                        </li>
                        <li>
                            <Link
                                :href="route('parcour')"
                                class="!flex items-center gap-2"
                            >
                                <img
                                    src="/images/illustration/audi-energitique.png"
                                    style="max-height: 30px"
                                />
                                Audit énergétique
                            </Link>
                        </li>
                    </div>
                </ul>
            </li>

            <li class="show-interior">
                <a href="javascript:void(0)" class="py-8 block"
                    >Conseils Travaux</a
                >

                <ul
                    class="absolute bg-white flex py-6 rounded border-t-4 shadow border-green-300 interior"
                >
                    <i
                        id="solair-lg-plus-i"
                        class="fa-solid fa-caret-up text-green-300 text-3xl absolute"
                        style="top: -23px; left: 40px"
                    ></i>

                    <div class="flex flex-col gap-6 px-9 border-r">
                        <h3 class="uppercase text-gray-700 font-semibold">
                            Énergie Solaire
                        </h3>
                        <li v-for="work in props.esWorks" :key="work.id">
                            <Link
                                :href="route('landing', work.slug)"
                                class="!flex !items-center gap-2"
                            >
                                <img
                                    :src="'/images/illustration/' + work.svg"
                                    style="max-height: 30px"
                                />
                                <span>{{ work.name }}</span>
                            </Link>
                        </li>
                    </div>

                    <div class="flex flex-col gap-6 px-9 border-r">
                        <h3 class="uppercase text-gray-700 font-semibold">
                            Chauffage
                        </h3>
                        <li v-for="work in props.chWorks" :key="work.id">
                            <Link
                                :href="route('landing', work.slug)"
                                class="!flex !items-center gap-2"
                            >
                                <img
                                    :src="'/images/illustration/' + work.svg"
                                    style="max-height: 30px"
                                />
                                <span class="!leading-8">{{ work.name }}</span>
                            </Link>
                        </li>
                    </div>

                    <div class="flex flex-col gap-6 px-9">
                        <h3 class="uppercase text-gray-700 font-semibold">
                            Isolation
                        </h3>
                        <li v-for="work in props.iWorks" :key="work.id">
                            <Link
                                :href="route('landing', work.slug)"
                                class="!flex !items-center gap-2"
                            >
                                <img
                                    :src="'/images/illustration/' + work.svg"
                                    style="max-height: 30px"
                                />
                                <span>{{ work.name }}</span>
                            </Link>
                        </li>
                    </div>
                </ul>
            </li>

            <li class="thermostat">
                <Link
                    :href="route('landing', 'thermostat-connecté')"
                    class="py-8 block"
                >
                    <span>Thermostat Connecté</span>
                </Link>
            </li>

            <li class="show-interior">
                <a href="javascript:void(0)" class="py-8 block"
                    >Découvrez-nous</a
                >

                <ul
                    class="absolute bg-white flex flex-col gap-6 p-6 rounded border-t-4 shadow border-green-300 interior"
                >
                    <i
                        id="decouvre-lg-plus-i"
                        class="fa-solid fa-caret-up text-green-300 text-3xl absolute"
                        style="top: -23px; left: 40px"
                    ></i>

                    <li>
                        <Link :href="route('about')" class="text-black flex">
                            Qui sommes-nous ?
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('contact')" class="text-black flex">
                            Nous Contacter
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>

        <div class="flex items-center">
            <btn class="!shadow-none" text="Demander un devis"></btn>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import btn from "./btnDevis.vue";

const props =  defineProps(['esWorks', 'chWorks', 'iWorks']);

</script>

<style scoped>
* { box-sizing: border-box }
.show-interior:hover .interior { display: flex }
.interior { display: none }
.interior li > a:hover,.thermostat > a:hover { text-shadow: 0.5px 0px 1px }
</style>

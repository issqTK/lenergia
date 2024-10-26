<template>
    <div id="header" class="relative !bg-cover overflow-hidden"
        style="background: url('/images/home/head-page.jpg') no-repeat top center;">
        <div class="p-8 sm:p-12 md:p-16 text-slate-100 ">
            <h1 class="flex flex-col gap-2 font-extrabold w-full">
                <span class="text-xl sm:text-2xl md:text-3xl leading-8 sm:leading-10 md:leading-relaxed">
                    Pensez vous à devenir <br>
                    autonome en énergie & éviter <br>
                    de subir les augmentations des factures
                </span>

                <span class="text-2xl sm:text-4xl md:text-5xl leading-10 sm:leading-relaxed md:leading-relaxed">
                    L'énergia vous accompagne<br>
                    de A à Z
                </span>
            </h1>

            <Appelez_nous></Appelez_nous>
        </div>

        <div class="absolute bottom-0 flex flex-wrap justify-center gap-3 lg:gap-6 w-full p-3 lg:p-6 shadow-xl"
            style="background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.01), #cbd5e1);">

            <Link :href="route('parcour', 'panneaux-solaires-photovoltaiques')" class="solaire-parent relative grid place-items-center text-center gap-2 lg:gap-4 
                w-28 lg:w-40 p-2 lg:p-4 lg:px-6 bg-white rounded-lg shadow-xl overflow-hidden">

                <img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/solaire_icon.png"
                    alt="Passer au solaire">

                <span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10">Passer au solaire</span>

                <span class="solaire-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0"></span>
            </Link>

            <Link :href="route('parcour', 'pompe-à-chaleur')" class="chauffage-parent relative grid place-items-center text-center gap-2 lg:gap-4 
                w-28 lg:w-40 p-2 lg:p-4 lg:px-6 bg-white rounded-lg shadow-xl overflow-hidden">

                <img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/chauffage_icon.png"
                    alt="Changer mon chauffage">

                <span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10">Changer mon chauffage</span>

                <span class="chauffage-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0"></span>
            </Link>

            <Link :href="route('parcour')" class="isolation-parent relative grid place-items-center text-center gap-2 lg:gap-4 
                w-28 lg:w-40 p-2 lg:p-4 lg:px-6 bg-white rounded-lg shadow-xl overflow-hidden">

                <img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/isolation_icon.png"
                    alt="Isoler ma maison">

                <span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10">Isoler ma maison</span>

                <span class="isolation-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0"></span>
            </Link>
            	
            <Link :href="route('parcour')" class="calcule-parent relative grid place-items-center text-center gap-2 lg:gap-4 
                w-28 lg:w-40 p-2 lg:p-4 lg:px-6 bg-white rounded-lg shadow-xl overflow-hidden">

                <img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="\images\illustration/calcule_icon.png"
                    alt="Calculer prime & aides">

                <span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10">Calculer prime &
                    aides</span>

                <span class="calcule-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0"></span>
            </Link>

            <Link :href="route('parcour')" class="bilan-parent relative grid place-items-center text-center gap-2 lg:gap-4 
                w-28 lg:w-40 p-2 lg:p-4 lg:px-6 bg-white rounded-lg shadow-xl overflow-hidden">

                <img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/bilan_icon.png"
                    alt="Mon bilan énergétique">

                <span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10">Mon bilan
                    énergétique*</span>

                <span class="bilan-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0"></span>
            </Link>
        </div>
    </div>

</template>

<script>
import Appelez_nous from '@/Pages/AppelezNous.vue';
import { Link } from '@inertiajs/vue3';

export default {
    components: { Appelez_nous, Link },
}
</script>

<style scoped>
#header {
    min-height: calc(100vh - 96px);
}

.bilan-hover {
    background-color: #e5f9ff;
}

.calcule-hover {
    background-color: #b6cbff !important;
}

.isolation-hover {
    background-color: #b9f8d3 !important;
}

.chauffage-hover {
    background-color: #ffd0b6 !important;
}

.solaire-hover {
    background-color: #a8ecff !important;
}

.isolation-hover,
.chauffage-hover,
.solaire-hover,
.calcule-hover,
.bilan-hover {
    transition: all .2s ease-in;
}

.solaire-parent:hover .solaire-hover,
.chauffage-parent:hover .chauffage-hover,
.isolation-parent:hover .isolation-hover,
.calcule-parent:hover .calcule-hover,
.bilan-parent:hover .bilan-hover {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0;
}
</style>
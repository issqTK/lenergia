<script>
import { Link } from '@inertiajs/vue3';
import { computed } from "vue";
import PrimaryNavigation from '@/customComponents/PrimaryNavigation.vue';
export default {
    components:{
        PrimaryNavigation,
    }
}

</script>

<template>
    <div class="text-slate-900">
        <PrimaryNavigation></PrimaryNavigation>

        <div>
            <slot />           
        </div>
    </div>
    
    <footer v-if="!route().current('parcour')"  class="w-full bg-slate-500 text-slate-50 pb-8 border-t-4 border-white mt-8">
        <div class="flex flex-col md:flex-row items-center md:mb-4 mb-8">
            <img src="/images/logo-light.png" class="h-48" alt="">
            <h6 class="text-2xl md:text-3xl text-center flex-1">n°1 de la rénovation énergétique en ligne</h6>
        </div>

        <div class="flex flex-col md:flex-row items-center md:items-start md:justify-between mx-12 mb-12 gap-4">
            <div class=" w-full md:w-3/12">
                <div class="flex gap-2 mb-4">
                    <span class="italic">Suivez nous</span>
                    <span class="fb"></span>
                    <span class="twitter"></span>
                    <span class="in"></span>
                </div>
                <div class="flex flex-col gap-4">
                    <p class="text-xl">Un projet ?</p>
                    <a :href="route('parcour')" class="border rounded-full text-center px-8 py-4">DEMANDER UN DEVIS</a>
                </div>
            </div>

            <div class="md:px-4 w-full md:w-3/12">
                <h6 class="font-bold text-lg">ÉNERGIE SOLAIRE</h6>
                <ul class="flex flex-col gap-2">
                    <li><a :href="route('landing', 'panneaux-solaires-photovoltaiques')">Panneaux Solaires Photovoltaïques</a></li>
                    <li><a :href="route('landing', 'panneau-solaire-thermique')">Panneaux solaires thermiques</a></li>
                    <li><a :href="route('landing', 'panneau-solaire-hybrides')">Panneaux solaires hybrides</a></li>
                    <li><a :href="route('landing', 'chauffe-eau-thermodynamique')">Ballon thermodynamique</a></li>
                </ul>
            </div>

            <div class="md:px-4 w-full md:w-3/12">
                <h6 class="font-bold text-lg text-left">CHAUFFAGE</h6>
                <ul class="flex flex-col gap-2">
                    <li><a :href="route('landing', 'pompe-à-chaleur')">Pompe à chaleur</a></li>
                    <li><a :href="route('landing', 'poêle-à-granulés')">Poêles à granulés</a></li>
                    <li><a :href="route('landing', 'système-solaire-combiné')">Système solaire combiné</a></li>
                </ul>
            </div>

            <div class="md:px-4 w-full md:w-auto ">
                <h6 class="font-bold text-lg text-left">ISOLATION</h6>
                <ul class="flex flex-col gap-2">
                    <li><a :href="route('landing', 'isolation-intérieur')">Murs intérieur</a></li>
                    <li><a :href="route('landing', 'isolation-extérieur')">Murs extérieur</a></li>
                </ul>
            </div>
        </div>

        <div class="flex md:justify-between mx-12 flex-wrap gap-4">
            <a href="javascript:void(0)">Qui somme nous</a>
            <a href="javascript:void(0)">Nous Contacter</a>
            <span>© {{ new Date().getFullYear() }} Lenergia. Tous les droits réservés</span>
        </div>
    </footer>
</template>
<style scoped>
.fb{ background: url('/images/socieux/fb-light.png'); }
.twitter{ background: url('/images/socieux/twitter-light.png');}
.in{ background: url('/images/socieux/in-light.png');}
.fb:hover{ background: url('/images/socieux/fb-dark.png'); background-size: contain;}
.twitter:hover{ background: url('/images/socieux/twitter-dark.png'); background-size: contain;}
.in:hover{ background: url('/images/socieux/in-dark.png'); background-size: contain;}
.fb, .twitter, .in{
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-size: contain;
}

</style>

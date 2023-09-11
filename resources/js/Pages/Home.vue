<template>
    <Head title="Bienvenue" />

    <div id="header" class="relative">
        <div class="p-6 md:p-16 text-slate-100">
            <h1 class="flex flex-col gap-2 font-extrabold md:w-9/12 w-full py-4">
                <span class="text-lg md:text-3xl leading-8 md:leading-10">
                    Pensez vous à devenir <br class="md:hidden">autonome en énergie 
                    <br class="hidden md:block">& éviter <br class="md:hidden">de subir les augmentations des factures
                </span>
                <span class="text-2xl md:text-5xl leading-10 md:leading-relaxed">
                    L'énergia vous accompagne<br> 
                    de A à Z
                </span>
            </h1>
            
            
            <Appelez_nous></Appelez_nous>
            
        </div>

        <!-- header nav -->
        <div class="absolute bottom-0 flex flex-wrap p-2 lg:p-4 gap-2 lg:gap-4 justify-center lg:justify-center bg-gradient-to-r from-slate-50 to-slate-100 w-full lg:w-11/12 lg:rounded-tr-3xl">
            <Link :href="route('parcour', 'panneaux-solaires-photovoltaiques')" class="relative solaire-parent p-2 lg:p-4 bg-white w-28 h-32 lg:w-36 lg:h-36 grid place-items-center text-center rounded-lg shadow-xl overflow-hidden">
                <img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/solaire_icon.png" alt="Passer au solaire">
                <span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10">Passer au solaire</span>
                <span class="solaire-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0"></span>
            </Link>

            <Link :href="route('parcour', 'pompe-à-chaleur')" class="relative chauffage-parent p-2 lg:p-4 bg-white w-28 h-32 lg:w-36 lg:h-36 grid place-items-center text-center rounded-lg shadow-xl overflow-hidden">
                <img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/chauffage_icon.png" alt="Changer mon chauffage">
                <span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10">Changer mon chauffage</span>
                <span class="chauffage-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0"></span>
            </Link>
            
            <Link :href="route('parcour')" class="relative isolation-parent p-2 lg:p-4 bg-white w-28 h-32 lg:w-36 lg:h-36 grid place-items-center text-center rounded-lg shadow-xl overflow-hidden">
                <img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/isolation_icon.png" alt="Isoler ma maison">
                <span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10">Isoler ma maison</span>
                <span class="isolation-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0"></span>
            </Link>
           
            <a href="javascript:void(0)" class="relative calcule-parent p-2 lg:p-4 bg-white w-28 h-32 lg:w-36 lg:h-36 grid place-items-center text-center rounded-lg shadow-xl overflow-hidden">
                <img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="\images\illustration/calcule_icon.png" alt="Calculer prime & aides">
                <span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10">Calculer prime & aides</span>
                <span class="calcule-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0"></span>
            </a>
            
            <a href="javascript:void(0)" class="relative bilan-parent p-2 lg:p-4 bg-white w-28 h-32 lg:w-36 lg:h-36 grid place-items-center text-center rounded-lg shadow-xl overflow-hidden">
                <img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/bilan_icon.png" alt="Mon bilan énergétique">
                <span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10">Mon bilan énergétique*</span>
                <span class="bilan-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0"></span>
            </a>
        </div>
    </div>

    <seconde_section></seconde_section>

    <third_section></third_section>

    <fourth_section></fourth_section>

    <mail_section></mail_section>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import Appelez_nous from '@/Pages/AppelezNous.vue';
import seconde_section from '@/Pages/home/secondeSection.vue';
import third_section from './home/ThirdSection.vue';
import fourth_section from './home/FourthSection.vue';
import mail_section from './home/MailSection.vue';

export default {
    layout:GuestLayout,
    components:{
        Appelez_nous,
        Head,
        seconde_section,
        third_section,
        fourth_section,
        mail_section,
        Link
    },
}
</script>

<style scoped>
    *{box-sizing: border-box;}
    @media screen and (max-width: 768px) {
        #header{
            min-height: 105vh!important;
        }
    }
    #header{
        min-height: 120vh;
        background-image: url("/images/home/head-page.jpg");
        background-repeat: no-repeat ;
        background-size: cover;
        background-position: center;
    }

    .bilan-hover{ background-color: #e5f9ff; }
    .calcule-hover {background-color: #b6cbff!important;}
    .isolation-hover{background-color: #b9f8d3!important; }
    .chauffage-hover{background-color: #ffd0b6!important;}
    .solaire-hover {background-color: #a8ecff!important;}
    
    .isolation-hover, .chauffage-hover, .solaire-hover, .calcule-hover, .bilan-hover {transition: all .2s ease-in;}

    .solaire-parent:hover .solaire-hover, .chauffage-parent:hover .chauffage-hover, .isolation-parent:hover .isolation-hover, .calcule-parent:hover .calcule-hover, .bilan-parent:hover .bilan-hover{
        width: 100%;
        height: 100%;
        left: 0;
        top:0;
        border-radius: 0;
    }

</style>

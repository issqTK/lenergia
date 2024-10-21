<template>
    <!-- lg plus -->
    <div class="hidden lg:flex justify-between h-full overflow-hidden rounded-br-2xl rounded-bl-2xl bg-white" >
        <ul class="flex items-center h-full">
            <!-- Nos Offres -->
            <li class="show-interior ">
                <a href="javascript:void(0)" class="link ">Nos Offres</a>

                <ul class="absolute bg-white flex py-8 rounded border-t-4 shadow border-green-300 interior ">
                    <i class="fa-solid fa-caret-up text-green-300 text-3xl absolute" style="top:-23px;left: 30px;"></i>
                    <div class="flex flex-col gap-2 border-r">
                        <h3>Les Travaux</h3>
                        <li>
                            <Link :href="route('intermediate','isolation-maison')" class="!flex items-center gap-2">
                                <img src="/images/illustration/isolation_global.png" style="max-height: 30px;">
                                Isolation globale
                            </Link>
                        </li>
                        <li>
                            <Link :href="route('landing', 'panneaux-solaires-photovoltaiques')" class="!flex items-center gap-2">
                                <img src="/images/illustration/Panneaux_Photovoltaïques.png" style="max-height: 30px;">
                                Panneaux photovoltaïques
                            </Link>
                        </li>
                        <li>
                            <Link :href="route('landing', 'pompe-à-chaleur')" class="!flex items-center gap-2">
                                <img src="/images/illustration/pompe-a-chaleur.png" style="max-height: 30px;">
                                Pompe à chaleur
                            </Link>
                        </li>
                        <li>
                            <Link :href="route('landing', 'système-solaire-combiné')" class="!flex items-center gap-2">
                                <img src="/images/illustration/collaboration.png" style="max-height: 30px;">
                                Système solaire combiné
                            </Link>
                        </li>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h3>Les Services</h3>
                        <li>
                            <a href="#" class="!flex items-center gap-2">
                                <img src="/images/illustration/bilan_icon.png" style="max-height: 30px;">
                                Bilan énergétique gratuit
                            </a>
                        </li>
                        <li>
                            <a href="#" class="!flex items-center gap-2">
                                <img src="/images/illustration/audi-energitique.png" style="max-height: 30px;">
                                Audit énergétique
                            </a>
                        </li>
                    </div>  
                </ul>
            </li>

            <!-- Conseils Travaux -->
            <li class="show-interior">
                <a href="javascript:void(0)" class="link">Conseils Travaux</a>

                <ul class="absolute bg-white flex py-8 rounded border-t-4 shadow border-green-300 interior left-1/4">
                    <i id="solair-lg-plus-i" class="fa-solid fa-caret-up text-green-300 text-3xl absolute" style="top:-23px;left:130px"></i>

                    <div class="flex flex-col gap-2 border-r">
                        <h3>Énergie Solaire</h3>
                        <li v-for="work in esWorks" :key="work.id">
                            <Link :href="route('landing',work.slug)" class="!flex !items-center gap-2">
                                <img :src="'/images/illustration/'+work.svg" style="max-height: 30px;">
                                <span>{{work.name}}</span>
                            </Link>
                        </li>
                    </div>

                    <div class="flex flex-col gap-2 border-r">
                        <h3>Chauffage</h3>
                        <li v-for="work in chWorks" :key="work.id">
                            <Link :href="route('landing',work.slug)" class="!flex !items-center gap-2"> 
                                <img :src="'/images/illustration/'+work.svg" style="max-height: 30px;">
                                <span class="!leading-8">{{work.name}}</span>
                            </Link>
                        </li>
                    </div>

                    <div class="flex flex-col gap-2 ">
                        <h3>Isolation</h3>
                        <li v-for="work in iWorks" :key="work.id">
                            <Link  :href="route('landing',work.slug)" class="!flex !items-center gap-2">
                                <img :src="'/images/illustration/'+work.svg" style="max-height: 30px;">
                                <span>{{work.name}}</span>
                            </Link>
                        </li>
                    </div>
                </ul>
            </li>
            <!-- Découvrez-nous -->
            <li class="show-interior">
                <a href="javascript:void(0)" class="link">Découvrez-nous</a>
                <ul class="absolute bg-white flex flex-col p-8 rounded border-t-4 shadow border-green-300 interior" style="left:450px">
                    <i id="decouvre-lg-plus-i" class="fa-solid fa-caret-up text-green-300 text-3xl absolute" style="top:-23px;left:90px"></i>
                    <li><a href="javascript:void(0)" class="text-black">Nos offres de travaux</a></li>
                    <li><a href="javascript:void(0)" class="text-black">Qui sommes-nous ?</a></li>
                    <li><a href="javascript:void(0)" class="text-black">Nous Contacter</a></li>

                </ul>
            </li>
        </ul>

        <!--  -->
        
        <div class="flex items-center gap-3">
            <Link v-if="$page.props.auth.user == null" :href="route('login')" class="italic link" >
                <i class="fa-solid fa-circle-user mr-2 text-lg leading-4 align-middle text-teal-500" ></i>
                Se Connecter
            </Link>
            <Link v-else :href="route('dashboard')" class="italic link">{{$page.props.auth.user.name}}</Link>

            <btn class="!shadow-none" text="Demander un devis"></btn>
        </div>
    </div>
</template>

<script>
    import { Link } from '@inertiajs/vue3';
    import btn from "./btnDevis.vue";
    export default {
        props:['esWorks', 'chWorks', 'iWorks'],
        components: {Link, btn},
    }
</script>

<style scoped>
      *{ box-sizing: border-box; }
    .link { display:block; padding:30px 15px; }
    .interior{ display:none; }
    .show-interior:hover .interior{ display:flex }
    .interior div{ padding:0px 30px; }
    .interior h3{
        text-transform:uppercase;
        color:darkgray;
        font-weight:bold;
        margin-bottom:10px;
    }
    .interior div>li:last-child{ margin-bottom:0px}
    .interior li{ margin-bottom:15px}
    .interior li>a:hover{ text-shadow: .5px 0px 1px } 
    .interior li>a{ display:block; }
</style>
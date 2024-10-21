<template>
    <div id="navigation" ref="navigation" class="fix-top flex relative items-center justify-between text-sm px-4 bg-white h-24 w-full z-10 ">
         <!-- Logo -->
         <a  href="/" class="block lg:!left-0 h-full relative max-w-3/12" 
            style="transition: all 800ms ease-in-out"
            :style="showingNavigation ? 'left:0' : 'left: calc(50% - 155px);' " 
            >
            <img src="/images/logo.png" alt="Lenergia" id="logo" draggable="false" class="h-full z-10" style="max-width:250px">
        </a>

         <!-- Show & Hide nav -->
         <div class="lg:hidden cursor-pointer text-center" style="width:30px">
            <i  class="fa-solid fa-bars text-black text-2xl" 
                @click="showNav" v-show="!showingNavigation"></i>
            
            <i  class="fa-solid fa-xmark text-black text-2xl" 
                @click="showingNavigation=false" v-show="showingNavigation"></i>
        </div>

        <!-- Navigation -->
        <div id="mobile-nav" class="absolute lg:static flex-1 z-10 h-full w-full"
            style="top:95px; transition: all 800ms ease-in-out"
            :style="showingNavigation ? 'right:0' : 'right:-100%'">

            <!-- lg less -->
            <div class="relative bg-white lg:hidden flex flex-col gap-6 p-6 min-h-screen w-full border">
                <!-- primary nav -->
                <ul class="flex flex-col gap-4 font-semibold">
                    <!-- Nos Offres -->
                    <li>
                        <a  href="javascript:void(0)" 
                            class="flex flex-1 justify-between items-center p-2 active:px-4 rounded-md transition-all bg-gradient-to-r active:from-white active:to-green-100"
                            @click="this.showInterior($event)">
                            Nos offres 
                            <i class="fa-solid fa-chevron-right leading-3"></i>
                        </a>
                        
                        <ul class="absolute w-full min-h-screen top-0 -right-full flex flex-col gap-5 p-6 font-semibold bg-white"
                            style="transition: all 800ms ease-in-out">
                            <a  href="javascript:void(0)"
                                @click="this.hideInterior($event)">
                                <i class="fa-solid fa-chevron-left"></i> 
                                Retour
                            </a>

                            <div class="flex flex-col ">
                                <h3 class="uppercase text-gray-500">Les Travaux</h3>
                                <li><Link @click="showingNavigation=false;" :href="route('intermediate', 'isolation-maison')" class="ins-link"><img src="/images/illustration/isolation_global.png" style="max-height: 30px;">Isolation globale</Link></li>
                                <li><Link @click="showingNavigation=false;" :href="route('landing', 'panneaux-solaires-photovoltaiques')" class="ins-link"><img src="/images/illustration/Panneaux_Photovoltaïques.png" style="max-height: 30px;">Panneaux photovoltaïques</Link></li>
                                <li><Link @click="showingNavigation=false;" :href="route('landing', 'pompe-à-chaleur')" class="ins-link"><img src="/images/illustration/pompe-a-chaleur.png" style="max-height: 30px;">Pompe à chaleur</Link></li>
                                <li><Link @click="showingNavigation=false;" :href="route('landing', 'système-solaire-combiné')" class="ins-link"><img src="/images/illustration/collaboration.png" style="max-height: 30px;">Système solaire combiné</Link></li>
                            </div>

                            <div class="flex flex-col ">
                                <h3 class="uppercase text-gray-500">Les Services</h3>
                                <li><a href="#" class="ins-link">Bilan énergétique gratuit</a></li>
                                <li><a href="#" class="ins-link">Audit énergétique</a></li>
                            </div>
                        </ul>
                    </li>
                    <!-- Conseils Travaux -->
                    <li class="w-full">
                        <a  href="javascript:void(0)" 
                            class="flex flex-1 justify-between items-center p-2 active:px-4 rounded-md transition-all bg-gradient-to-r active:from-white active:to-green-100"
                            @click="this.showInterior($event)">
                            Conseils travaux
                            <i class="fa-solid fa-chevron-right"></i>
                        </a>
                        
                        <ul class="absolute w-full min-h-screen top-0 -right-full flex flex-col gap-5 p-6 font-semibold bg-white"
                            style="transition: all 800ms ease-in-out">
                            <a  href="javascript:void(0)"
                                @click="this.hideInterior($event)">
                                <i class="fa-solid fa-chevron-left"></i> 
                                Retour
                            </a>
                            <!-- ES -->
                            <div class="flex flex-col ">
                                <h3 class="uppercase text-gray-500">Énergie Solaire</h3>
                                <li v-for="(work, i) in esWorks" :key="i">
                                    <Link @click="showingNavigation=false;" :href="route('landing',work.slug)" class="ins-link !flex gap-2 items-center">
                                        <img :src="'/images/illustration/' + work.svg" :alt="work.img_alt" class="w-6">
                                        {{work.name}}
                                    </Link>
                                </li>
                            </div>
                            <!-- ISO -->
                            <div class="flex flex-col ">
                                <h3 class="uppercase text-gray-500">Isolation</h3>
                                <li v-for="work in iWorks" :key="work.id">
                                    <Link @click="showingNavigation=false;" :href="route('landing',work.slug)" class="ins-link !flex gap-2 items-center">
                                        <img :src="'/images/illustration/' + work.svg" :alt="work.img_alt" class="w-6">
                                        {{work.name}}
                                    </Link>
                                </li>
                            </div>
                            <!-- CH -->
                            <div class="flex flex-col ">
                                <h3 class="uppercase text-gray-500">Chauffage</h3>
                                <li v-for="work in chWorks" :key="work.id">
                                    <Link @click="showingNavigation=false;" :href="route('landing',work.slug)" class="ins-link !flex gap-2 items-center">
                                        <img :src="'/images/illustration/' + work.svg" :alt="work.img_alt" class="w-6">
                                        {{work.name}}
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </li>
                </ul>
                
                <!-- buttons -->
                <div class="flex flex-col gap-4">
                    <div >
                        <Link v-if="$page.props.auth.user == null" :href="route('login')" class="m-auto table font-semibold px-9 py-4  rounded-full border shadow uppercase" >
                            <i class="fa-solid fa-circle-user mr-2 text-lg leading-4 align-middle" style="color: #73efa6;"></i>
                            Se Connecter
                        </Link>
                        <Link v-else :href="route('dashboard')" class="m-auto table font-semibold py-5 px-12 uppercase">{{$page.props.auth.user.name}}</Link>
                    </div>
                    <div class="flex">
                        <btn text="Demander un devis"></btn>
                    </div>
                </div>
            </div>

            <BigScreenMenu :esWorks="this.esWorks" :chWorks="this.chWorks" :iWorks="this.iWorks"></BigScreenMenu>
        </div>

    </div>

    <div id="fakerNavigation"></div>
</template>

<script>
import btn from "./btnDevis.vue";
import BigScreenMenu from "./BigScreen.vue";

import { Link } from '@inertiajs/vue3';
export default {
    components: {btn, BigScreenMenu, Link},
    data() {
        return {
            showingNavigation: false,
        }
    },
    computed: {
        esWorks: function() {
            return this.$page.props.works.filter(function(e) {
                if(e.type == 'es')
                return e           
            })
        },
        chWorks: function() {
            return this.$page.props.works.filter(function(e) {
                if(e.type == 'ch')
                return e           
            })
        },
        iWorks: function() {
            return this.$page.props.works.filter(function(e) {
                if(e.type == 'i')
                return e           
            })
        }
    },
    mounted() {
        this.fakeHeight();
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods : {
        showNav() {
            const mobileNav = document.getElementById('mobile-nav');

            if(window.scrollY >= 96)
                mobileNav.classList.add('top-less')
            else if(mobileNav.classList.contains('top-less'))
                mobileNav.classList.remove('top-less')

            this.showingNavigation=true;
        },
        handleScroll() {
            if(window.scrollY >= 96) {
                document.getElementById('navigation').classList.add('!h-16');
                document.getElementById('solair-lg-plus-i').style.left = '50px';
                document.getElementById('decouvre-lg-plus-i').style.left = '30px';
                document.querySelectorAll('.interior').forEach((item) => {
                    item.classList.add('!top-16')
                });

                document.getElementById('mobile-nav').classList.add('top-less');
            }
            else {
                document.getElementById('navigation').classList.remove('!h-16');
                document.getElementById('solair-lg-plus-i').style.left = '130px';
                document.getElementById('decouvre-lg-plus-i').style.left = '90px';
                document.querySelectorAll('.interior').forEach((item) => {
                    item.classList.remove('!top-16');
                });

                document.getElementById('mobile-nav').classList.remove('top-less');
            }    
        },
        fakeHeight() {
            document.getElementById('fakerNavigation').style.height = this.$refs.navigation.clientHeight +'px';
        },
        showInterior(event){
            const item = event.target.parentNode.querySelector('ul');
            if (item)
                item.classList.add('!right-0');
        },
        hideInterior(event){
            const item = event.target.parentNode.classList.remove('!right-0')
        }
        
    }
}
</script>

<style scoped>
*{ box-sizing: border-box; }

.top-less{top: 63px!important;}

.fix-top{
    position: fixed;
    top:0;
    left: 0;
    z-index: 20;
}
.ins-link {
    display:flex;
    gap: 10px;
    padding: 15px 0 0 15px;
    border-radius: 5px;
    transition: all 300ms ease-in
}
.ins-link:hover{ padding-left: 10px!important; text-shadow: .5px 0px 1px;}
.link:hover{ text-shadow: .5px 0px 1px } 



</style>
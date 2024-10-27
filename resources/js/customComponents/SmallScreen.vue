<template>
    <div class="relative bg-white lg:hidden flex flex-col gap-9 p-9 min-h-screen w-full border">
        <ul class="flex flex-col gap-6">
            <!-- Nos Offres -->
            <li>
                <a href="javascript:void(0)" class="flex justify-between items-center" @click="this.showInterior($event)">
                    Nos offres <i class="fa-solid fa-chevron-right leading-3"></i>
                </a>

                <ul class="absolute w-full min-h-screen top-0 -right-full flex flex-col gap-6 p-9 bg-white transi">
                    <a href="javascript:void(0)" @click="this.hideInterior($event)"> <i class="fa-solid fa-chevron-left"></i> Retour </a>

                    <div class="flex flex-col gap-4">
                        <h3 class="uppercase text-gray-700 font-semibold">Les Travaux</h3>
                        
                        <li>
                            <Link @click="this.$emit('showing-navigation', false)" :href="route('intermediate', 'isolation-maison')" class="flex gap-4 items-center pl-4 ins-link">
                                <img src="/images/illustration/isolation_global.png" style="max-height: 30px;">
                                Isolation globale
                            </Link>
                        </li>
                        <li>
                            <Link @click="this.$emit('showing-navigation', false)" :href="route('landing', 'panneaux-solaires-photovoltaiques')"  class="flex gap-4 items-center pl-4 ins-link">
                                <img src="/images/illustration/Panneaux_Photovoltaïques.png" style="max-height: 30px;">Panneaux photovoltaïques
                            </Link>
                        </li>
                        <li>
                            <Link @click="this.$emit('showing-navigation', false)" :href="route('landing', 'pompe-à-chaleur')"  class="flex gap-4 items-center pl-4 ins-link">
                                <img src="/images/illustration/pompe-a-chaleur.png" style="max-height: 30px;">
                                Pompe à chaleur
                            </Link>
                        </li>
                        <li>
                            <Link @click="this.$emit('showing-navigation', false)" :href="route('landing', 'système-solaire-combiné')" class="flex gap-4 items-center pl-4 ins-link">
                                <img src="/images/illustration/collaboration.png" style="max-height: 30px;">
                                Système solaire combiné
                            </Link>
                        </li>
                    </div>

                    <div class="flex flex-col gap-4">
                        <h3 class="uppercase text-gray-700 font-semibold">Les Services</h3>

                        <li>
                            <Link @click="this.$emit('showing-navigation', false)" :href="route('parcour')" class="flex gap-4 items-center pl-4 ins-link">
                                <img src="/images/illustration/bilan_icon.png" style="max-height: 30px;">
                                Bilan énergétique gratuit
                            </Link>
                        </li>
                        
                        <li>
                            <Link @click="this.$emit('showing-navigation', false)" :href="route('parcour')" class="flex gap-4 items-center pl-4 ins-link">
                                <img src="/images/illustration/audi-energitique.png" style="max-height: 30px;">
                                Audit énergétique
                            </Link>
                        </li>
                    </div>
                </ul>
            </li>

            <!-- Conseils Travaux -->
            <li>
                <a href="javascript:void(0)" class="flex justify-between items-center" @click="this.showInterior($event)">
                    Conseils travaux <i class="fa-solid fa-chevron-right"></i>
                </a>

                <ul class="absolute w-full min-h-screen top-0 -right-full flex flex-col gap-6 p-9 bg-white transi">
                    <a href="javascript:void(0)" @click="this.hideInterior($event)"> <i class="fa-solid fa-chevron-left"></i> Retour </a>

                    <!-- ES -->
                    <div class="flex flex-col gap-4">
                        <h3 class="uppercase text-gray-700 font-semibold">Énergie Solaire</h3>

                        <li v-for="(work, i) in esWorks" :key="i">
                            <Link @click="this.$emit('showing-navigation', false)" :href="route('landing', work.slug)" class="ins-link flex gap-4 pl-4 items-center">
                                <img :src="'/images/illustration/' + work.svg" :alt="work.img_alt" class="w-6">
                                {{ work.name }}
                            </Link>
                        </li>
                    </div>
                    
                    <!-- ISO -->
                    <div class="flex flex-col gap-4">
                        <h3 class="uppercase text-gray-700 font-semibold">Isolation</h3>

                        <li v-for="work in iWorks" :key="work.id">
                            <Link @click="this.$emit('showing-navigation', false)" :href="route('landing', work.slug)" class="ins-link flex gap-4 pl-4 items-center">
                                <img :src="'/images/illustration/' + work.svg" :alt="work.img_alt" class="w-6">
                                {{ work.name }}
                            </Link>
                        </li>
                    </div>
                    
                    <!-- CH -->
                    <div class="flex flex-col gap-4">
                        <h3 class="uppercase text-gray-700 font-semibold">Chauffage</h3>

                        <li v-for="work in chWorks" :key="work.id">
                            <Link @click="this.$emit('showing-navigation', false)" :href="route('landing', work.slug)" class="ins-link flex gap-4 pl-4 items-center">
                                <img :src="'/images/illustration/' + work.svg" :alt="work.img_alt" class="w-6">
                                {{ work.name }}
                            </Link>
                        </li>
                    </div>
                </ul>
            </li>

            <!--  -->
            <li> <Link @click="this.$emit('showing-navigation', false)" :href="route('landing', 'thermostat-connecté')" class="ins-link"> <span>Thermostat Connecté</span> </Link> </li>

            <!-- Découvrez-nous -->
            <li>
                <a href="javascript:void(0)"  class="flex justify-between items-center" @click="this.showInterior($event)">
                    Découvrez-nous <i class="fa-solid fa-chevron-right"></i>
                </a>

                <ul class="absolute w-full min-h-screen top-0 -right-full flex flex-col gap-6 p-9 bg-white transi">
                    <a href="javascript:void(0)" @click="this.hideInterior($event)"> <i class="fa-solid fa-chevron-left"></i> Retour </a>
                    
                    <li>
                        <Link @click="this.$emit('showing-navigation', false)" :href="route('about')" class="flex gap-4 items-center pl-4 ins-link">
                            Qui sommes-nous ?
                        </Link>
                    </li>
                    <li>
                        <Link @click="this.$emit('showing-navigation', false)" :href="route('contact')" class="flex gap-4 items-center pl-4 ins-link">
                            Nous Contacter
                        </Link>
                    </li>

                </ul>
            </li>

        </ul>

        <!-- buttons -->
        <div class="flex gap-4 !text-xs">
            <div>
                <Link v-if="$page.props.auth.user == null" :href="route('login')"
                    class="m-auto table font-semibold px-9 py-4  rounded-full border shadow uppercase">
                <i class="fa-solid fa-circle-user mr-2 text-lg leading-4 align-middle" style="color: #73efa6;"></i>
                Se Connecter
                </Link>
                <Link v-else :href="route('dashboard')" class="m-auto table font-semibold py-5 px-12 uppercase">
                {{ $page.props.auth.user.name }}</Link>
            </div>
            <div class="flex">
                <btn text="Demander un devis" @click="this.$emit('showing-navigation', false)"></btn>
            </div>
        </div>
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3';
import btn from "./btnDevis.vue";

export default {
    props: ['esWorks', 'chWorks', 'iWorks', 'ShowingNavigation'],
    emits:['showing-navigation'],

    components: { Link, btn },

    methods: {
        showInterior(event) {
            const item = event.target.parentNode.querySelector('ul');
            if (item)
                item.classList.add('!right-0');
        },
        hideInterior(event) {
            const item = event.target.parentNode.classList.remove('!right-0')
        }

    }
}
</script>

<style scoped>
.ins-link { transition: all 300ms ease-in}
.ins-link:hover { padding-left: 0px!important; text-shadow: .5px 0px 1px;}
.transi {transition: all 800ms ease-in-out}
</style>
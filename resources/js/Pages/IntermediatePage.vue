<template>
    <Head :title="page.title" />

    <div class="py-4 px-4 md:px-12 lg:px-16">
        <!-- history pages-->
        <div class="flex gap-2 items-center text-xs ">
            <a href="/">Accueil</a>
            <i class="fa-solid fa-chevron-right" style="color: #73efa6;"></i>
            ..
            <i class="fa-solid fa-chevron-right" style="color: #73efa6;"></i>
            <b v-html="page.title" class="overflow-hidden text-ellipsis leading-4 max-w-xs whitespace-nowrap"></b>
        </div>

        <div class="flex mt-4 gap-6">
            <!-- left side -->
            <div class="absolute md:static w-4/12 hidden md:block p-4">
                <!-- sommaire -->
                <div class="w-3/4 m-auto">
                    <div class="font-semibold text-lg mb-2">Sommaire</div>

                    <ul v-if="page.type == 'es'" class="flex flex-col gap-4 break-words">
                        <li class="flex gap-2" v-for="work in esWorks" :key="work.id">
                            <i class="fa-solid leading-6 fa-circle" style="color: #72efa6; font-size:.5em"></i>
                            <a @click.prevent="toArticle(work.name)"
                                class="hover:font-semibold cursor-pointer">{{ work.name }}</a>
                        </li>
                    </ul>

                    <ul v-if="page.type == 'ch'" class="flex flex-col gap-4 break-words">
                        <li class="flex gap-2" v-for="work in chWorks" :key="work.id">
                            <i class="fa-solid leading-6 fa-circle" style="color: #72efa6; font-size:.5em"></i>
                            <a @click.prevent="toArticle(work.name)"
                                class="hover:font-semibold cursor-pointer">{{ work.name }}</a>
                        </li>
                    </ul>

                    <ul v-if="page.type == 'i'" class="flex flex-col gap-4 break-words">
                        <li class="flex gap-2" v-for="work in iWorks" :key="work.id">
                            <i class="fa-solid leading-6 fa-circle" style="color: #72efa6; font-size:.5em"></i>
                            <a @click.prevent="toArticle(work.name)"
                                class="hover:font-semibold cursor-pointer">{{ work.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- right side -->
            <div class="text-slate-800 w-full md:w-8/12 px-4 md:px-12 py-8 flex flex-col gap-8 bg-white rounded">

                <!-- entete -->
                <div class="">
                    <h1 class="text-2xl lg:text-3xl font-bold ">{{ page.title }}</h1>
                </div>

                <!-- es -->
                <div v-if="page.type == 'es'">
                    <div v-for="work in esWorks" :key="work.id" class="flex flex-col gap-4 mb-6 py-4">
                        <h3 class="flex gap-4 p-4 items-center font-bold text-xl" :ref="work.name">
                            <img class="w-12" :src="'/images/illustration/' + work.svg" :alt="work.img_alt">
                            {{ work.title }}
                        </h3>

                        <div class="relative">
                            <div class="p-4 text-lg leading-8  bg-slate-50 rounded h-32 overflow-hidden"
                                v-html="work.description"></div>
                            <Link :href="'/' + work.slug"
                                class="absolute right-4 -bottom-6 font-bold capitalize p-4 py-2 rounded hover:bg-slate-500 bg-slate-400 text-slate-50">
                            Savoir Plus</Link>
                        </div>

                        <btnDevis text="J'ESTIME MON DEVIS" :slug="work.slug" class="my-6"></btnDevis>
                    </div>
                </div>

                <!-- ch -->
                <div v-if="page.type == 'ch'">
                    <div v-for="work in chWorks" :key="work.id" class="flex flex-col gap-4 mb-6 py-4">
                        <h3 class="flex gap-4 p-4 items-center font-bold text-xl" :ref="work.name">
                            <img class="w-12" :src="'/images/illustration/' + work.svg" :alt="work.img_alt">
                            {{ work.title }}
                        </h3>

                        <div class="relative">
                            <div class="p-4 text-lg leading-8  bg-slate-50 rounded h-32 overflow-hidden"
                                v-html="work.description"></div>
                            <Link :href="'/' + work.slug"
                                class="absolute right-4 -bottom-6 font-bold capitalize p-4 py-2 rounded hover:bg-slate-500 bg-slate-400 text-slate-50">
                            Savoir Plus</Link>
                        </div>

                        <btnDevis text="J'ESTIME MON DEVIS" :slug="work.slug" class="my-6"></btnDevis>
                    </div>
                </div>

                <!-- i -->
                <div v-if="page.type == 'i'">
                    <div v-for="work in iWorks" :key="work.id" class="flex flex-col gap-4 mb-6 py-4">
                        <h3 class="flex gap-4 p-4 items-center font-bold text-xl" :ref="work.name">
                            <img class="w-12" :src="'/images/illustration/' + work.svg" :alt="work.img_alt">
                            {{ work.title }}
                        </h3>

                        <div class="relative">
                            <div class="p-4 text-lg leading-8  bg-slate-50 rounded h-32 overflow-hidden"
                                v-html="work.description"></div>
                            <Link :href="'/' + work.slug"
                                class="absolute right-4 -bottom-6 font-bold capitalize p-4 py-2 rounded hover:bg-slate-500 bg-slate-400 text-slate-50">
                            Savoir Plus</Link>
                        </div>

                        <btnDevis text="J'ESTIME MON DEVIS" :slug="work.slug" class="my-6"></btnDevis>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import btnDevis from '@/customComponents/btnDevis.vue';

export default {
    props: {
        'page': Object
    },
    layout: GuestLayout,
    components: {
        Head,
        Link,
        btnDevis,
    },

    data() {
        return {
            works: this.$page.props.works,
        }
    },

    methods: {
        toArticle(ref) {
            this.$refs[ref][0].scrollIntoView({ behavior: 'smooth' });
        }
    },

    computed: {
        esWorks: function () {
            return this.works.filter(function (e) {
                if (e.type == 'es')
                    return e
            })
        },
        chWorks: function () {
            return this.works.filter(function (e) {
                if (e.type == 'ch')
                    return e
            })
        },
        iWorks: function () {
            return this.works.filter(function (e) {
                if (e.type == 'i')
                    return e
            })
        }
    },
}
</script>

<style scoped></style>
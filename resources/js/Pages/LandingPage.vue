<template>

    <Head :title="work.meta_title" />

    <div class="py-4 px-4 md:px-12 lg:px-16">
        <!-- history pages-->
        <div class="flex gap-2 items-center text-xs">
            <a href="/">Accueil</a>
            <i class="fa-solid fa-chevron-right" style="color: #73efa6"></i>
            ..
            <i class="fa-solid fa-chevron-right" style="color: #73efa6"></i>
            <b v-html="work.title" class="overflow-hidden text-ellipsis leading-4 max-w-xs whitespace-nowrap"></b>
        </div>

        <div class="flex mt-4 gap-6">
            <!-- left side -->
            <div class="absolute md:static w-4/12 hidden md:block p-4">
                <!-- sommaire -->
                <div class="w-3/4 m-auto">
                    <div class="font-semibold text-lg mb-2">Sommaire</div>

                    <ul class="flex flex-col gap-4 break-words">
                        <li class="flex gap-2" v-for="article in articles" :key="article.id">
                            <i class="fa-solid leading-6 fa-circle" style="color: #72efa6; font-size: 0.5em"></i>
                            <a @click.prevent="toArticle(article.link_id)" class="shadow-text cursor-pointer">{{
                                article.title }}</a>
                        </li>
                        <li class="flex gap-2">
                            <i class="fa-solid leading-6 fa-circle" style="color: #72efa6; font-size: 0.5em"></i>
                            <a @click.prevent="toArticle('faq')" class="shadow-text cursor-pointer">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- right side -->
            <div class="text-slate-800 w-full md:w-8/12 px-4 md:px-12 py-12 flex flex-col gap-8 bg-white rounded">
                <!-- sommaire -->
                <div class="md:hidden flex flex-col gap-2">
                    <a href="javascript:void(0)" @click="this.showInterior($event)"
                        class="block font-semibold text-lg md:text-lg cursor-pointer py-2 px-8 rounded text-white bg-emerald-300">
                        Sommaire &nbsp;<i class="fa-solid fa-caret-down"></i>
                    </a>

                    <ul
                        class="flex flex-col gap-4 break-words p-0 rounded bg-white text-sm h-0 overflow-hidden bg-slate-100">
                        <li class="flex gap-2" v-for="article in articles" :key="article.id">
                            <i class="fa-solid leading-6 fa-circle" style="color: #72efa6; font-size: 0.5em"></i>
                            <a @click.prevent="toArticle(article.link_id)" class="hover:font-semibold cursor-pointer">{{
                                article.title }}</a>
                        </li>
                    </ul>
                </div>

                <!-- entete -->
                <div class="flex flex-col gap-8">
                    <!-- title -->
                    <h1 v-html="work.title" class="text-2xl lg:text-3xl text-center font-bold"></h1>

                    <!-- image -->
                    <img v-if="work.img" :src="'/images/works/img/' + work.img" class="w-full" />

                    <!-- description -->
                    <p v-html="work.description" class="break-words text-justify leading-8"
                        style="word-spacing: 1px; letter-spacing: 0.5px"></p>

                    <!-- line text -->
                    <p style=" word-spacing: 0.7px; letter-spacing: 0.2px; text-align: center; ">
                        <strong class="text-center">{{ work.line_text }}</strong>
                    </p>
                </div>

                <!-- button -->
                <div class="flex flex-col">
                    <btnDevis v-if="work.type == 'es'" text="JE CALCULE MES AIDES" :slug="work.slug"></btnDevis>
                    <btnDevis v-if="work.id == 5" text="J'ESTIME MON DEVIS" :slug="work.slug"></btnDevis>
                    <btnDevis v-if="work.id == 6" text="J'ESTIME MON DEVIS" :slug="work.slug"></btnDevis>
                    <btnDevis v-if="work.id == 7" text="JE CALCULE MES AIDES" :slug="work.slug"></btnDevis>
                    <btnDevis v-if="work.id == 8" text="JE CALCULE MES AIDES" :slug="work.slug"></btnDevis>
                    <btnDevis v-if="work.id == 9" text="JE CALCULE MES AIDES" :slug="work.slug"></btnDevis>
                    <btnDevis v-if="work.id == 10" text="Commandez dès maintenant" :slug="work.slug"></btnDevis>
                    <i class="m-auto text-sm">Simulation gratuite en 2 minutes</i>
                </div>

                <!-- articles -->
                <div class="article flex flex-col gap-8" v-for="article in articles" :key="article.id">
                    <h2 class="text-xl md:text-2xl font-bold" :ref="article.link_id">
                        {{ article.title }}
                    </h2>

                    <div v-html="article.article" class="little-article flex flex-col gap-6"></div>

                    <div v-if="article.btnText" class="flex items-center">
                        <btnDevis v-if="[1,5,10].includes(work.id)" :text="article.btnText" :slug="work.slug"></btnDevis>
                        <btnDevis v-else :text="article.btnText" ></btnDevis>

                    </div>
                </div>

                <!-- FAQ -->
                <div id="faq" class="flex flex-col gap-4">
                    <h2 ref="faq" class="text-2xl font-bold">FAQ</h2>
                    <div v-for="faq in faqs" :key="faqs.id"
                        class="flex flex-col gap-3 p-3 bg-slate-200 text-black rounded hover:bg-slate-100">
                        <h3 @click="showNext($event)" class="cursor-pointer !font-semibold !text-base" v-text="faq.h3">
                        </h3>
                        <p class="hidden" v-text="faq.p"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Head } from "@inertiajs/vue3";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import btnDevis from "@/customComponents/btnDevis.vue";
import { ref } from "vue";

export default {
    props: ["work", "articles", "faqs"],
    layout: GuestLayout,
    components: {
        Head,
        btnDevis,
        ref,
    },
    data() {
        return {
            sommair_interior: false,
        };
    },
    methods: {
        showNext(event) {
            document.querySelectorAll("#faq p").forEach((element) => {
                if (element.classList.contains("!block"))
                    element.classList.remove("!block");
                element.parentNode.classList.add("hover:bg-slate-100");
            });

            event.target.nextSibling.classList.add("!block");
            event.target.parentNode.classList.remove("hover:bg-slate-100");
        },
        showInterior(event) {
            var parent;
            if (/i/i.test(event.target.tagName))
                parent = event.target.parentNode.parentNode;
            else parent = event.target.parentNode;

            const ul = parent.querySelector("ul");

            if (this.sommair_interior == false) {
                ul.classList.add("!h-auto");
                ul.classList.add("!p-4");
                this.sommair_interior = true;
            } else {
                ul.classList.remove("!h-auto");
                ul.classList.remove("!p-4");
                this.sommair_interior = false;
            }
        },
        toArticle(ref) {
            console.log(this.$refs);

            if (ref == "faq")
                this.$refs[ref].scrollIntoView({ behavior: "smooth" });
            else this.$refs[ref][0].scrollIntoView({ behavior: "smooth" });
        },
    },
};
</script>

<style>
.shadow-text:hover { text-shadow: 0.5px 0px 1px; }

.little-article img { width: 90%; margin: 0 auto; }

#faq p,
.little-article p,
.little-article i,
.little-article ul {
    word-break: break-word;
    font-size: 0.98em;
    line-height: 26px;
    word-spacing: 0.8px;
    letter-spacing: 0.5px;
}

#faq h3 { font-size: 1.1em !important; font-weight: bold; }

.little-article h3 { font-size: 1.2em !important; font-weight: bold; }

.little-article table th { padding: 8px 0 !important; }

.little-article table tr:first-child {
    background-color: #64748b;
    color: white;
    font-weight: bold;
    font-size: 0.75em !important;
}

.little-article table tr:nth-child(even) { background-color: #f8fafc; }

.little-article table td {
    padding: 15px;
    text-align: center;
    font-size: 0.8em;
}

.little-article ul {
    list-style-type: disc;
    list-style-position: outside;
    margin-left: 15px;
}

.little-article ul li { margin-bottom: 15px; }

.little-article .sans-style { list-style-type: none !important; }

.little-article ul.number { list-style-type: decimal !important; }

.little-article ul.square { list-style-type: square !important; }

</style>

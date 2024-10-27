<template>
    <div id="navigation" ref="navigation"
        class="!fixed top-0 left-0 flex relative items-center justify-between text-sm px-4 bg-white h-24 w-full z-20 ">
        <!-- Logo -->
        <Link :href="route('home')" class="block lg:!left-0 h-full relative max-w-3/12" style="transition: all 800ms ease-in-out"
            :style="showingNavigation ? 'left:0' : 'left: calc(50% - 155px);'">
            <img src="/images/logo.png" alt="Lenergia" id="logo" draggable="false" class="h-full z-10"
                style="max-width:250px">
        </Link>

        <!-- Show & Hide nav -->
        <div class="lg:hidden cursor-pointer text-center" style="width:30px">
            <i class="fa-solid fa-bars text-black text-2xl" @click="showNav" v-show="!showingNavigation"></i>

            <i class="fa-solid fa-xmark text-black text-2xl" @click="showingNavigation = false"
                v-show="showingNavigation"></i>
        </div>

        <!-- Navigation -->
        <div id="mobile-nav" class="absolute lg:static lg:ml-6 flex-1 z-10 h-full w-full"
            style="top:95px; transition: all 800ms ease-in-out" :style="showingNavigation ? 'right:0' : 'right:-100%'">

            <SmallScreenMenu @showingNavigation="getShowingNav" :showingNavigation="this.showingNavigation"  :esWorks="this.esWorks" :chWorks="this.chWorks" :iWorks="this.iWorks"></SmallScreenMenu>
            <BigScreenMenu :esWorks="this.esWorks" :chWorks="this.chWorks" :iWorks="this.iWorks"></BigScreenMenu>
        </div>

    </div>

    <div id="fakerNavigation"></div>
</template>

<script>
import { Link } from '@inertiajs/vue3';
import BigScreenMenu from "./BigScreen.vue";
import SmallScreenMenu from "./SmallScreen.vue";

export default {
    components: { Link, BigScreenMenu, SmallScreenMenu },
    data() {
        return {
            showingNavigation: false,
        }
    },
    computed: {
        esWorks: function () {
            return this.$page.props.works.filter(function (e) {
                if (e.type == 'es')
                    return e
            })
        },
        chWorks: function () {
            return this.$page.props.works.filter(function (e) {
                if (e.type == 'ch')
                    return e
            })
        },
        iWorks: function () {
            return this.$page.props.works.filter(function (e) {
                if (e.type == 'i')
                    return e
            })
        }
    },
    mounted() {
        this.fakeHeight();
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        showNav() {
            const mobileNav = document.getElementById('mobile-nav');

            if (window.scrollY >= 96)
                mobileNav.classList.add('top-less')
            else if (mobileNav.classList.contains('top-less'))
                mobileNav.classList.remove('top-less')

            this.showingNavigation = true;
        },
        handleScroll() {
            if (window.scrollY >= 96) {
                document.getElementById('navigation').classList.add('!h-16');
                document.querySelectorAll('.interior').forEach((item) => {
                    item.classList.add('!top-16')
                });

                document.getElementById('mobile-nav').classList.add('top-less');
            }
            else {
                document.getElementById('navigation').classList.remove('!h-16');
                document.querySelectorAll('.interior').forEach((item) => {
                    item.classList.remove('!top-16');
                });

                document.getElementById('mobile-nav').classList.remove('top-less');
            }
        },
        fakeHeight() {
            document.getElementById('fakerNavigation').style.height = this.$refs.navigation.clientHeight + 'px';
        },
        getShowingNav(value) {
            this.showingNavigation = value;
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.top-less {
    top: 63px !important;
}
</style>
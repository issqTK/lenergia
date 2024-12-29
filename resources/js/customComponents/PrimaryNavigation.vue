<template>
    <div
        ref="menu"
        class="!fixed top-0 left-0 flex relative items-center justify-between text-sm px-4 bg-white h-24 w-full z-20"
    >
        <Link
            :href="route('home')"
            class="block lg:!left-0 h-full relative max-w-3/12"
            style="transition: all 800ms ease-in-out"
            :style="showMenu ? 'left:0' : 'left: calc(50% - 155px);'"
        >
            <img
                src="/images/logo.png"
                alt="Lenergia"
                id="logo"
                draggable="false"
                class="h-full z-10"
                style="max-width: 250px"
            />
        </Link>

        <div class="lg:hidden cursor-pointer text-center" style="width: 30px">
            <i
                class="fa-solid fa-bars text-black text-2xl"
                @click="showNav"
                v-show="!showMenu"
            ></i>

            <i
                class="fa-solid fa-xmark text-black text-2xl"
                @click="showMenu = false"
                v-show="showMenu"
            ></i>
        </div>

        <div
            ref="mobile"
            class="absolute lg:static lg:ml-6 flex-1 z-10 h-full w-full"
            style="top: 95px; transition: all 800ms ease-in-out"
            :style="showMenu ? 'right:0' : 'right:-100%'"
        >
            <SmallScreenMenu
                @showing-navigation="updateShowingNav"
                :showingNavigation="showMenu"
                :esWorks="esWorks"
                :chWorks="chWorks"
                :iWorks="iWorks"
            ></SmallScreenMenu>

            <BigScreenMenu
                :esWorks="esWorks"
                :chWorks="chWorks"
                :iWorks="iWorks"
            ></BigScreenMenu>
        </div>
    </div>

    <div ref="shadowMenu"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import { Link } from "@inertiajs/vue3";
import BigScreenMenu  from "./BigScreen.vue";
import SmallScreenMenu from "./SmallScreen.vue";

const page = usePage();

const showMenu = ref(false);

const menu = ref(false);

const shadowMenu = ref(false);

const mobile = ref(false);

const esWorks = computed(() => page.props.works.filter((e) => e.type === "es"));

const chWorks = computed(() => page.props.works.filter((e) => e.type === "ch"));

const iWorks = computed(() => page.props.works.filter((e) => e.type === "i"));

const fakeHeight = () => {
    if (menu.value) 
        shadowMenu.value.style.height = `${menu.value.clientHeight}px`;
};

const showNav = () => {
    if (mobile.value) {
        if (typeof window !== "undefined" && window.scrollY >= 96) {
            mobile.value.classList.add("top-less");
        } else if (mobile.value.classList.contains("top-less")) {
            mobile.value.classList.remove("top-less");
        }
        showMenu.value = true;
    }
};

const handleScroll = () => {
    if (typeof window === "undefined") return;

    if (window.scrollY >= 96) {
        menu.value.classList.add("!h-16");
        document
            .querySelectorAll(".interior")
            .forEach((item) => item.classList.add("!top-16"));
        mobile.value.classList.add("top-less");
    } else {
        menu.value.classList.remove("!h-16");
        document
            .querySelectorAll(".interior")
            .forEach((item) => item.classList.remove("!top-16"));
        mobile.value.classList.remove("top-less");
    }
};

const updateShowingNav = (value) => {
    showMenu.value = value;
};

onMounted(() => {
    fakeHeight();

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll);
    }
});

onUnmounted(() => {
    if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
    }
});
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.top-less {
    top: 63px !important;
}
</style>

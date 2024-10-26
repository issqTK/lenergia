<template>
    <Head title="Contact us" />

    <div class="flex flex-col justify-around lg:w-9/12 lg:rounded-lg lg:shadow-xl py-8 px-12 md:py-12 md:px-24 mx-auto mt-8 bg-white page ">
        <h1 class="capitalize text-xl font-bold">nous contacter :</h1>
        
        <div class="flex gap-4 items-center relative">
            <label for="mail" class="text-sm uppercase">email</label>
            <textarea name="email" @click="copy" id="mail" class="rounded-sm w-full border-none ring-1 ring-slate-100 resize-none" rows="1" readonly>contact@lenergia.fr</textarea>
            <span v-show="this.emailCopied" class="absolute right-2 bottom-2 text-green-500 font-semibold">Copied!</span>
        </div>
        <hr>        
        <div class="flex flex-col gap-1 relative">
            <a class="flex justify-center items-center h-24 w-24 bg-amber-400 text-white font-bold rounded-full" href="tel:0985408779">
            Appeler</a>
        </div>
    </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';

export default {
    layout: GuestLayout,
    components: { Head },

    data() {
        return {
            emailCopied: false
        }
    },

    methods : {
        copy() {
            document.getElementById("mail").select();
            document.execCommand('copy');
            this.emailCopied = true;
            setTimeout(() => { this.emailCopied = false }, 2000);
            
        }
    }
}
</script>

<style scoped>
.page { min-height: calc(100vh - 96px); }
</style>
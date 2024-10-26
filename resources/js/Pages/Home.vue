<template>
    <Head title="Bienvenue" />

    <FirstS></FirstS>

    <SecondeS></SecondeS>

    <ThirdS></ThirdS>

    <FourthS></FourthS>

    <mail_section></mail_section>
</template>

<script>
import { Head } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';

import FirstS from '@/Pages/home/FirstS.vue';
import SecondeS from '@/Pages/home/SecondeS.vue';
import ThirdS from '@/Pages/home/ThirdS.vue';
import FourthS from '@/Pages/home/FourthS.vue';
import mail_section from '@/Pages/home/MailSection.vue';

export default {
    layout: GuestLayout,
    components: {
        Head,
        FirstS,
        SecondeS,
        ThirdS,
        FourthS,
        mail_section,
    },
}
</script>

<style scoped>

* { box-sizing: border-box; }

</style>

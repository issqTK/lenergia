<template>
    <Head title="Bienvenue" />

    <FirstS></FirstS>

   <!--  <seconde_section></seconde_section>

    <third_section></third_section>

    <fourth_section></fourth_section>

    <mail_section></mail_section> -->
</template>

<script>
import { Head } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';

import FirstS from '@/Pages/home/FirstS.vue';
import seconde_section from '@/Pages/home/secondeSection.vue';
import third_section from './home/ThirdSection.vue';
import fourth_section from './home/FourthSection.vue';
import mail_section from './home/MailSection.vue';

export default {
    layout: GuestLayout,
    components: {
        Head,
        FirstS,
        seconde_section,
        third_section,
        fourth_section,
        mail_section,
    },
}
</script>

<style scoped>

* { box-sizing: border-box; }

</style>

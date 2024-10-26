<template>
    <Head title="about us" />

    <div class="flex flex-col gap-6 text-sm md:text-base lg:w-9/12 lg:rounded-lg lg:shadow-xl p-8 md:py-12 md:px-16 mx-auto mt-8 bg-white page ">
        <h1 class="text-xl md:text-2xl font-bold capitalize">Qui sommes-nous ?</h1>

        <p class="text-justify leading-8">Bienvenue chez <strong>Lenergia</strong>, votre partenaire de confiance pour vos projets d'énergie renouvelable et de rénovation énergétique. Nous sommes une plateforme innovante dédiée à la génération de solutions durables et économiques pour les particuliers et les entreprises souhaitant améliorer leur efficacité énergétique.</p>
        
        <p class="text-justify leading-8">Chez <strong>Lenergia</strong>, nous croyons que la transition énergétique est essentielle pour un avenir plus vert. C'est pourquoi nous facilitons l'accès à des projets d'économies d'énergie tels que l'installation de panneaux solaires, l'isolation thermique, les pompes à chaleur, et bien plus encore.</p>
        
        <p class="text-justify leading-8">Notre mission est simple : <strong>vous accompagner à chaque étape de votre projet, du diagnostic à l'installation</strong>, en passant par la recherche des meilleures subventions disponibles. Grâce à notre réseau de sous-traitants certifiés et à nos équipes spécialisées, nous nous assurons que vos travaux sont réalisés dans les meilleures conditions et conformément aux normes les plus exigeantes.</p>
        
        <p class="text-justify leading-8">En choisissant <strong>Lenergia</strong>, vous bénéficiez :</p>

        <ul class="list-disc ml-9 text-justify leading-8">
            <li><strong>D'une expertise technique :</strong> Nos experts vous conseillent et assurent le suivi de votre projet, de l'audit initial à la mise en œuvre.</li>
            <li><strong>D'un réseau de professionnels qualifiés :</strong> Nous travaillons avec des partenaires reconnus pour leur savoir-faire, qui se chargeront des visites techniques, des audits, et des installations.</li>
            <li><strong>D'un accompagnement personnalisé :</strong> Nous analysons vos besoins pour vous proposer les solutions les plus adaptées à votre situation.</li>
        </ul>

        <p class="text-justify leading-8">Notre vision est de devenir une référence en matière de conseil énergétique et de vous offrir des solutions performantes pour réduire votre consommation, alléger vos factures, et contribuer à la préservation de l'environnement.</p>
        
        <p class="text-justify leading-8"><strong>Lenergia</strong> est plus qu'une simple plateforme : c'est un acteur engagé pour une transition énergétique accessible à tous. Ensemble, construisons un avenir énergétique durable !</p>
    </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';

export default {
    props: {},

    layout: GuestLayout,

    components: {
        Head,
    },
}
</script>

<style scoped>
.page { min-height: calc(100vh - 96px); }
</style>
<template>
    <!-- title -->
    <h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold ">
        Quelle est l'énergie de chauffage actuelle de votre logement ?
    </h3>

    <p class="mt-8 text-center ">Si vous avez plusieurs énergies de chauffage, indiquez-nous la principale</p>

    <div class="md:w-10/12 grid grid-cols-3 gap-4 mt-8 m-auto ">
        <div @click="this.$emit('logement-energie', 'Chauffage au fioul')" 
            class="py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"
            :class="LogementEnergie == 'Chauffage au fioul' ? 'shadow-xl bg-white' : ''">
            <img src="/images/illustration/fioul.png" alt="fioul" class="w-4/12 m-auto">
            <span>Chauffage au fioul</span>
        </div>
        <div @click="this.$emit('logement-energie', 'Chauffage électrique')" 
            class="py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"
            :class="LogementEnergie == 'Chauffage électrique' ? '!shadow-xl bg-white' : ''">
            
            <img src="/images/illustration/electric.png" alt="electric" class="w-4/12 m-auto">
            <span>Chauffage électrique</span>
        </div>
        <div @click="this.$emit('logement-energie', 'Chauffage au gaz')" 
            class="py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"
            :class="LogementEnergie == 'Chauffage au gaz' ? 'shadow-xl bg-white' : ''">

            <img src="/images/illustration/gaz.png" alt="gaz" class="w-4/12 m-auto">
            <span>Chauffage au gaz</span>
        </div>
        <div @click="this.$emit('logement-energie', 'Chauffage au bois')"
            class="py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"
            :class="LogementEnergie == 'Chauffage au bois' ? 'shadow-xl bg-white' : ''">

            <img src="/images/illustration/woodfire.png" alt="woodfire" class="w-4/12 m-auto">
            <span>Chauffage au bois</span>
        </div>
        <div @click="this.$emit('logement-energie', 'Pompe à chaleur')"
            class="py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"
            :class="LogementEnergie == 'Pompe à chaleur' ? 'shadow-xl bg-white' : ''">
            <img src="/images/illustration/pompchaleur.png" alt="pompe a chaleur" class="w-4/12 m-auto">
            <span>Pompe à chaleur</span>
        </div>
        <div @click="this.$emit('logement-energie', 'Chauffage au charbon')"
            class="py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"
            :class="LogementEnergie == 'Chauffage au charbon' ? 'shadow-xl bg-white' : ''">
            <img src="/images/illustration/charbon.png" alt="Chauffage au charbon" class="w-4/12 m-auto">
            <span>Chauffage au charbon</span>
        </div>
    </div>
</template>

<script>
export default {
    emits:['logement-energie'],
    props:['LogementEnergie'],
}
</script>
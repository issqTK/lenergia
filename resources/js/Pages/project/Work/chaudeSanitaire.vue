<template>
    <!-- title -->
    <h3 class="text-center text-xl md:text-2xl font-extrabold mb-12">Souhaitez-vous que votre pompe à chaleur fournisse également de l'eau chaude sanitaire ?
    </h3>

    <!-- select -->
    <div class="grid md:grid-cols-2 gap-4">
        <!-- chauffage seul -->
        <div @click="goNext('Chauffage seul')" 
        class="relative flex flex-col items-left justify-between gap-4 p-8 rounded bg-white hover:shadow-xl cursor-pointer" >
            
            <div class="flex flex-col gap-4">
                <span class="font-bold text-lg">Chauffage seul</span>
                <p class="text-xs">Installation classique de votre pompe à chaleur s'intégrant parfaitement à votre système de chauffage existant. <b>C'est généralement la solution la plus économique</b>.</p>
            </div>

            <img src="/images/works/article/heater-sanitary-water-heating-only.png" alt="chauffage eau sanitaire" class="rounded">

            <span 
                v-if="this.eauChaudeSanitaire == 'Chauffage seul'"
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>
        <!-- chauffage sanitaire -->
        <div @click="goNext('Chauffage eau chaude sanitaire')" class="relative flex flex-col items-left justify-between gap-4 p-8 rounded bg-white hover:shadow-xl cursor-pointer" >
            
            <div class="flex flex-col gap-4">
                <span class="font-bold text-lg">Chauffage eau chaude sanitaire</span>
                <p class="text-xs">En plus de s'intégrer à votre système de chauffage existant, votre pompe à chaleur peut également produire votre eau chaude sanitaire. Vous devez nécessairement habiter en maison.</p>
            </div>

            <img src="/images/works/article/heater-sanitary-water-heating-and-water.png" alt="chauffage eau sanitaire" class="rounded">

            <span v-if="this.eauChaudeSanitaire == 'Chauffage eau chaude sanitaire'"                
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>
        
    </div>
</template>

<script>
export default {
    props:['eauChaudeSanitaire'],
    emits: ['EauChaudeSanitaire'],

    methods: {
        goNext(value) {
            this.$emit('EauChaudeSanitaire', value);
        }
    }
}
</script>
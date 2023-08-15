<template>
     <!-- title -->
     <h3 class="text-center text-xl md:text-2xl font-extrabold">Un emplacement est-il disponible à l'extérieur de votre logement ?
    </h3>

    <p class="mt-8 text-sm text-center">L'installation d'une pompe à chaleur Air-eau nécessite la pose d'un module extérieur (environ 2 m2).</p>

    <div class="flex gap-4 md:gap-8 justify-center mt-8 w-9/12 m-auto">
        <div @click="goNext(true)" class="relative p-12 md:p-20 rounded bg-white hover:shadow-xl cursor-pointer">
            <span class="text-xl font-bold">Oui</span>
            <span 
                v-if="this.EspaceExterior == true"
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>

        <div @click="goNext(false)" class="relative p-12 md:p-20 rounded bg-white hover:shadow-xl cursor-pointer">
            <span class="text-xl font-bold">Non</span>
            <span 
                v-if="this.EspaceExterior == false"
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
    props: ['EspaceExterior'],
    emits:['espace-exterieur'],
    methods:{
        goNext(boolen) {
            this.$emit('espace-exterieur', boolen);
        }
    }
}
</script>
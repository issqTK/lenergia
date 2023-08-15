<template>
    <h3 class="text-center font-bold md:font-extrabold text-xl md:text-2xl break-word md:p-2 mb-6">De quand date la construction du logement concerné par les travaux?
    </h3>

    <p class="text-center mb-6">Cela permet de nous assurer de votre éligibilité aux différentes aides.</p>

    <div class="md:w-10/12 w-full m-auto grid md:grid-cols-3 gap-4">

        <div @click="this.$emit('logement-construction', '-2')" class="relative p-4 flex flex-col items-center justify-center gap-4 hover:shadow-xl cursor-pointer bg-white rounded" >

            <img class="w-24 md:w-36" src="/images/illustration/31.png" alt="calendar">
            <span class="font-bold">Moins de 2 ans</span>

            <span v-if="this.LogementConstruction == '-2'"
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>
        
        <div @click="this.$emit('logement-construction', '2-15')" class="relative p-4 flex flex-col items-center justify-center gap-4 hover:shadow-xl cursor-pointer bg-white rounded" >

            <img class="w-24 md:w-36" src="/images/illustration/31-2.png" alt="calendar">
            <span class="font-bold">Entre 2 ans et 15 ans</span>

            <span v-if="this.LogementConstruction == '2-15'"
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>

        <div @click="this.$emit('logement-construction', '+15')" class="relative p-4 flex flex-col items-center justify-center gap-4 hover:shadow-xl cursor-pointer bg-white rounded"  >

            <img class="w-24 md:w-36" src="/images/illustration/31-3.png" alt="calendar">
            <span class="font-bold">Plus de 15 ans</span>

            <span v-if="this.LogementConstruction == '15+'"
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
    emits:['logement-construction'],
    props:['LogementConstruction']
}
</script>
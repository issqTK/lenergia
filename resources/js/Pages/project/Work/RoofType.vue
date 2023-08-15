<template>
    <!-- title -->
    <h3 class="flex items-center justify-center font-bold md:font-extrabold text-xl md:text-2xl mb-6">
        Vous avez quel type de toiture ?
    </h3>

    <!-- separate -->
    <span class="w-12 h-2 bg-green-200 m-auto mb-6 block rounded"></span>

    <!-- title component -->
    <p class="font-bold md:font-extrabold text-lg md:text-xl text-center mb-6">Sélectionné un type de toiture</p>

    <!-- select -->

    <div class="w-full flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 m-auto mt-8 ">
        
        <div @click="goNext('La toiture plate')" 
        class="relative flex flex-row md:flex-col items-center justify-start overflow-hidden text-center gap-2 bg-white rounded hover:shadow-lg cursor-pointer md:pb-3" 
        :class="this.roofType == 'La toiture plate' ? 'shadow-lg border' : ''">
            
            <img src="/images/illustration/toiture-plate.png" alt="La toiture plate" class="w-32 md:w-36">
            <span class="font-bold text-base flex-1">La toiture plate</span>

            <!-- active icon -->
            <span v-if="this.roofType == 'La toiture plate'" class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>
        
        <div @click="goNext('La toiture en pente')" 
        class="relative flex flex-row md:flex-col items-center justify-start overflow-hidden text-center gap-2 bg-white rounded hover:shadow-lg cursor-pointer md:pb-3" 
        :class="this.roofType == 'La toiture en pente' ? 'shadow-lg border' : ''">
            
            <img src="/images/illustration/toiture-en-pente.png" alt="la toiture en pente" class="w-32 md:w-36">
            <span class="font-bold text-base flex-1">La toiture en pente</span>

            <!-- active icon -->
            <span v-if="this.roofType == 'La toiture en pente'" class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>
    </div>
</template>

<script>

export default {
    props:['roofType', 'getNext'],
    emits: ['roof-type'],
    methods : { 
        goNext(value) {
            this.$emit('roof-type', value);
            return this.getNext();
        }
    }
}
</script>
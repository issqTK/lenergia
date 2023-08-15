<template>
    <!-- title -->
    <h3 class="flex gap-4 items-center justify-center font-bold md:font-extrabold text-xl md:text-2xl mb-6">
        <img style="width:120px" src="/images/illustration/fairy.png" alt="fairy">
        <span class="italic ">Calculez vos aides et obtenez votre devis travaux</span>
    </h3>

    <!-- separate -->
    <span class="w-12 h-2 bg-green-200 m-auto mb-6 block rounded"></span>

    <!-- title component -->
    <p class="font-bold md:font-extrabold text-lg md:text-2xl text-center mb-6">Votre projet concerne : </p>

    <!-- select -->
    <div class="flex gap-4 md:gap-6 justify-center">
        <!-- house -->
        <div  class="bg-white p-4 md:p-8 w-40 md:w-auto rounded relative flex flex-col items-center gap-4 hover:shadow-xl cursor-pointer"
            @click="this.$emit('logement-type', 'maison')" 
            :class="this.LogementType == 'maison' ? 'shadow-xl' : ''"
            >

            <img class="w-24 md:w-36" src="/images/illustration/house.png" alt="une maison">
            <span class="font-semibold md:font-bold text-sm md:text-base">Une maison</span>

            <span 
                v-if="this.LogementType == 'maison'"
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>
        <!-- apartment -->
        <div class="bg-white p-4 md:p-8 w-40 md:w-auto rounded relative flex flex-col items-center gap-4 hover:shadow-xl cursor-pointer"
            @click="this.$emit('logement-type', 'appartement')"
            :class="this.LogementType == 'appartement' ? 'shadow-xl' : ''"
            >
            
            <img class="w-24 md:w-36" src="/images/illustration/apartment.png" alt="un appartement">
            <span class="font-semibold md:font-bold text-sm md:text-base">Un appartement</span>

            <span v-if="this.LogementType == 'appartement'"
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
    props:['LogementType'],
    emits:['logement-type'],
}
</script>
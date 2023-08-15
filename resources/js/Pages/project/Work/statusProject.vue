<template>
    <!-- title -->
    <h3 class="text-center text-xl md:text-2xl font-extrabold mb-12">Où en êtes-vous dans votre projet ?</h3>

     <!-- select -->
     <div class="grid md:grid-cols-3 gap-4">
        <!-- thinking -->
        <div @click="this.$emit('status-project', 'Je réfléchis à mes travaux')" class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer" >

            <img class="w-24 md:w-36" src="/images/illustration/lamp thinking.png" alt="réfléchis à mes travaux">
            
            <span class="font-bold">Je réfléchis à mes travaux</span>

            <!-- active -->
            <span v-if="this.statusProject == 'Je réfléchis à mes travaux'" class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>

        <!-- looking for -->
        <div @click="this.$emit('status-project', 'Je recherche un artisan RGE')" class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer" >

            <img class="w-24 md:w-36" src="/images/illustration/artisan.png" alt="chercher un artisan rge">

            <span class="font-bold">Je recherche un artisan RGE</span>

            <span 
                v-if="this.statusProject == 'Je recherche un artisan RGE'"
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>

        <!-- Je vais signer mon devis -->
        <div @click="this.$emit('status-project', 'Je vais signer mon devis')" class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer" >

            <img class="w-24 md:w-36" src="/images/illustration/devis sign.png" alt="Je vais signer mon devis">

            <span class="font-bold">Je vais signer mon devis</span>

            <span 
                v-if="this.statusProject == 'Je vais signer mon devis'"
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
    emits:['status-project'],
    props:['statusProject'],
}
</script>
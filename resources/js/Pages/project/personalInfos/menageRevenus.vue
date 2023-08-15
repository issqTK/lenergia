<template>
    <h3 class="text-xl md:text-2xl font-extrabold mb-6 text-center">À combien s'élève le revenu total de votre foyer fiscal ?</h3>

    <p class="text-center mb-6">Le revenu fiscal de référence est utilisé pour calculer le montant de vos aides au plus juste.</p>

     <!-- select -->
     <div class="grid md:grid-cols-4 gap-4">
        <!-- Inférieur à 16 229 € -->
        <div @click="this.$emit('menage-revenus','Inférieur à 16 229 €')" 
            class="relative flex flex-col items-center  gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer" >
            
            <img class="w-24 md:w-36" src="/images/illustration/Inférieur à 16.png" alt="Inférieur à 16 229 €">
            
            <span class="font-bold text-center">Inférieur à 16 229 €</span>

            <span 
                v-if="this.menageRevenus == 'Inférieur à 16 229 €'"
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>

        <!-- Entre 16 229 € et 20 805 € -->
        <div @click="this.$emit('menage-revenus','Entre 16 229 € et 20 805 €')" 
            class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer" >
            
            <img class="w-24 md:w-36" src="/images/illustration/Entre 16 et 20.png" alt="Entre 16 229 € et 20 805 €">
            
            <span class="font-bold text-center">Entre 16 229 € et 20 805 €</span>

            <span 
                v-if="this.menageRevenus == 'Entre 16 229 € et 20 805 €'"
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>

        <!-- Entre 20 805 € et 29 148 € -->
        <div @click="this.$emit('menage-revenus','Entre 20 805 € et 29 148 €')" 
            class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer" >
            
            <img class="w-24 md:w-36" src="/images/illustration/Entre 16 et 29.png" alt="Entre 20 805 € et 29 148 €">
            
            <span class="font-bold text-center">Entre 20 805 € et 29 148 €</span>

            <span 
                v-if="this.menageRevenus == 'Entre 20 805 € et 29 148 €'"
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>

        <!-- Supérieur à 29 148 € -->
        <div @click="this.$emit('menage-revenus','Supérieur à 29 148 €')" 
            class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer" >
            
            <img class="w-24 md:w-36" src="/images/illustration/Supérieur à 29.png" alt="Supérieur à 29 148 €">
            
            <span class="font-bold text-center">Supérieur à 29 148 €</span>

            <span 
                v-if="this.menageRevenus == 'Supérieur à 29 148 €'"
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
    emits:['menage-revenus'],
    props:['menageRevenus'],
}
</script>
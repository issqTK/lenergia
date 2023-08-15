<template> 
    <div v-if="LogementEnergie == 'Chauffage au fioul'" >
        <h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold ">Quel type d'équipement au fioul est installé ?</h3>

        <p class="mt-8 text-center">Les chaudières installées depuis moins de 10 ans sont généralement à condensation</p>

        <div class="md:w-10/12 grid md:grid-cols-3 gap-4 m-auto mt-8 ">
        
            <div @click="goNext('Chaudière à condensation')" class="relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer" :class="this.LogementEnergieType == 'Chaudière à condensation' ? 'shadow-lg border' : ''">
                
                <img class="w-24 md:w-36" src="/images/illustration/chaudiere_condensation.png" alt="fioul" >
                <span class="font-bold md:text-sm">Chaudière à condensation</span>

                <!-- active icon -->
                <span v-if="this.LogementEnergieType == 'Chaudière à condensation'"
                    class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                    <i class="fa-solid fa-check text-white"></i>
                </span>
                <span v-else
                    class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
                </span>
            </div>

            <div @click="goNext('Chaudière classique')" class="relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer" :class="this.LogementEnergieType == 'Chaudière classique' ? 'shadow-lg border' : ''">
                
                <img src="/images/illustration/chaudiere_classique.png" alt="fioul" class="w-24 md:w-36">
                <span class="font-bold md:text-sm">Chaudière classique</span>

                <!-- active icon -->
                <span v-if="this.LogementEnergieType == 'Chaudière classique'" class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                    <i class="fa-solid fa-check text-white"></i>
                </span>
                <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
                </span>
            </div>

            <div @click="goNext('Poêle')" class="relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer" :class="this.LogementEnergieType == 'Poêle' ? 'shadow-lg border' : ''">
                
                <img src="/images/illustration/poele.png" alt="fioul" class="w-24 md:w-36">
                <span class="font-bold md:text-sm">Poêle</span>

                <!-- active icon -->
                <span v-if="this.LogementEnergieType == 'Poêle'" class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                    <i class="fa-solid fa-check text-white"></i>
                </span>
                <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
                </span>
            </div>

        </div>
    </div>

    <div v-if="LogementEnergie == 'Chauffage électrique'" >
        <h3 class="text-center text-lg md:text-2xl font-bold md:font-extrabold "> Quel type d'équipement électrique est installé ? </h3>

        <div class="md:w-10/12 grid md:grid-cols-3 gap-4 m-auto mt-8 ">
        
            <div @click="goNext('Chaudière électrique')" class="relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer" :class="this.LogementEnergieType == 'Chaudière électrique' ? 'shadow-lg border' : ''">
                
                <img src="/images/illustration/chaudiere_electrique.png" alt="electrique" class="w-24 md:w-36">
                <span class="font-bold md:text-sm">Chaudière électrique</span>

                <!-- active icon -->
                <span v-if="this.LogementEnergieType == 'Chaudière électrique'" class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                    <i class="fa-solid fa-check text-white"></i>
                </span>
                <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
                </span>
            </div>

            <div @click="goNext('Plafonds ou planchers chauffants')" class="relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer" :class="this.LogementEnergieType == 'Plafonds ou planchers chauffants' ? 'shadow-lg border' : ''">
                
                <img src="/images/illustration/Plafonds_chauffants.png" alt="fioul" class="w-24 md:w-36">
                <span class="font-bold md:text-sm">Plafonds ou planchers chauffants</span>

                <!-- active icon -->
                <span v-if="this.LogementEnergieType == 'Plafonds ou planchers chauffants'" class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                    <i class="fa-solid fa-check text-white"></i>
                </span>
                <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
                </span>
            </div>

            <div @click="goNext('Radiateurs électriques')" class="relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer" :class="this.LogementEnergieType == 'Radiateurs électriques' ? 'shadow-lg border' : ''">
                
                <img src="/images/illustration/Radiateurs_électriques.png" alt="fioul" class="w-24 md:w-36">
                <span class="font-bold md:text-sm">Radiateurs électriques</span>

                <!-- active icon -->
                <span v-if="this.LogementEnergieType == 'Radiateurs électriques'" class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                    <i class="fa-solid fa-check text-white"></i>
                </span>

                <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
                </span>
            </div>

        </div>
    </div>

    <div v-if="LogementEnergie == 'Chauffage au gaz'">
        <h3 class="text-center text-lg md:text-2xl font-bold md:font-extrabold ">Quel type d'équipement au gaz est installé ?</h3>

        <p class="mt-8 text-center ">Les chaudières installées depuis moins de 10 ans sont généralement à condensation</p>

        <div class="w-full grid md:grid-cols-4 md:gap-4 gap-2 m-auto mt-8 ">
        
            <div @click="goNext('Chaudière à condensation gaz')" class="relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer" :class="this.LogementEnergieType == 'Chaudière à condensation gaz' ? 'shadow-lg border' : ''">
                
                <img src="/images/illustration/chaudiere_condensation_gaz.png" alt="gaz" class="w-24 md:w-36">
                <span class="font-bold md:text-sm">Chaudière à condensation</span>

                <!-- active icon -->
                <span v-if="this.LogementEnergieType == 'Chaudière à condensation gaz'" class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                    <i class="fa-solid fa-check text-white"></i>
                </span>

                <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
                </span>
            </div>
            
            <div @click="goNext('Chaudière classique gaz')" class="relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer" :class="this.LogementEnergieType == 'Chaudière classique gaz' ? 'shadow-lg border' : ''">
                
                <img src="/images/illustration/chaudiere_classique_gaz.png" alt="gaz" class="w-24 md:w-36">
                <span class="font-bold md:text-sm">Chaudière classique</span>

                <!-- active icon -->
                <span v-if="this.LogementEnergieType == 'Chaudière classique gaz'" class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                    <i class="fa-solid fa-check text-white"></i>
                </span>

                <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
                </span>
            </div>
            
            <div @click="goNext('Radiateur au gaz')" class="relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer" :class="this.LogementEnergieType == 'Radiateur au gaz' ? 'shadow-lg border' : ''">
                
                <img src="/images/illustration/Radiateur_gaz.png" alt="gaz" class="w-24 md:w-36">
                <span class="font-bold md:text-sm">Radiateur au gaz</span>

                <!-- active icon -->
                <span v-if="this.LogementEnergieType == 'Radiateur au gaz'" class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                    <i class="fa-solid fa-check text-white"></i>
                </span>

                <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
                </span>
            </div>
            
            <div @click="goNext('Poêle au gaz')" class="relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer" :class="this.LogementEnergieType == 'Poêle au gaz' ? 'shadow-lg border' : ''">
                
                <img src="/images/illustration/Poêle_gaz.png" alt="gaz" class="w-24 md:w-36">
                <span class="font-bold md:text-sm">Poêle au gaz</span>

                <!-- active icon -->
                <span v-if="this.LogementEnergieType == 'Poêle au gaz'" class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                    <i class="fa-solid fa-check text-white"></i>
                </span>

                <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
                </span>
            </div>

        </div>
    </div>

</template>

<script>

export default {
    props:['LogementEnergie', 'LogementEnergieType'],
    emits: ['energie-type'],
    methods : { 
        goNext(value) {
            this.$emit('energie-type', value);
        }
    }
}
</script>
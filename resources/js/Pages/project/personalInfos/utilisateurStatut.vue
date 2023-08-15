<template>
    <h3 class="text-xl md:text-2xl text-center font-extrabold mb-6">Dans ce logement, vous êtes :</h3>

     <!-- select -->
     <div class="grid md:grid-cols-4 gap-4">
        <!-- house principal -->
        <div @click="this.$emit('utilisateur-status','Propriétaire occupant')" 
            class="relative flex flex-col items-center  gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer" >
            
            <img class="w-24 md:w-36" src="/images/illustration/house principal.png" alt="Propriétaire occupant">
            
            <span class="font-bold text-center">Propriétaire occupant</span>

            <span 
                v-if="this.UtilisateurStatus == 'Propriétaire occupant'"
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>

        <!-- house secondaire -->
        <div @click="this.$emit('utilisateur-status','Propriétaire d\'une résidence secondaire')" 
            class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer" >
            
            <img class="w-24 md:w-36" src="/images/illustration/house secondaire.png" alt="Propriétaire d'une résidence secondaire">
            
            <span class="font-bold text-center">Propriétaire d'une résidence secondaire</span>

            <span 
                v-if="this.UtilisateurStatus == 'Propriétaire d\'une résidence secondaire'"
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>

        <!-- contract -->
        <div @click="this.$emit('utilisateur-status','Propriétaire bailleur')" 
            class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer" >
            
            <img class="w-24 md:w-36" src="/images/illustration/contrat_paper.png" alt="Propriétaire bailleur">
            
            <span class="font-bold text-center">Propriétaire bailleur</span>

            <span 
                v-if="this.UtilisateurStatus == 'Propriétaire bailleur'"
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>

        <!-- keys -->
        <div @click="this.$emit('utilisateur-status','Locataire')" 
            class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer" >
            
            <img class="w-24 md:w-36" src="/images/illustration/keys.png" alt="Locataire">
            
            <span class="font-bold text-center">Locataire</span>

            <span 
                v-if="this.UtilisateurStatus == 'Locataire'"
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
    props:['UtilisateurStatus'],
    emits:['utilisateur-status'],
}
</script>
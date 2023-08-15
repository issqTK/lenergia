<template>
    <!-- title -->
    <h3 class="text-center text-xl md:text-2xl font-extrabold mb-12">Quel type de revêtement extérieur préférez-vous pour vos murs ?
    </h3>

    <!-- select -->
    <div class="grid md:grid-cols-2 gap-4">
        <!-- enduit -->
        <div @click="goNext('extérieur sous enduit')" class="relative flex flex-col items-left gap-4 p-8 rounded bg-white hover:shadow-xl cursor-pointer" >

            <span class="font-bold text-lg">Isolation extérieur sous enduit</span>
            
            <p class="text-xs">Cela consiste à poser des panneaux isolants avant de les recouvrir d'un sous-enduit. On y intègre ensuite un treillis souple avant de finir par l'application de l'enduit de finition. 
            <b>C'est généralement la solution la plus économique</b>.</p>

            <img src="/images/works/article/isolation-ext-sous-enduit.png" alt="enduit" class="rounded">

            <span 
                v-if="this.ExterieurRevetement == 'extérieur sous enduit'"
                class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                
                <i class="fa-solid fa-check text-white"></i>
            </span>

            <span v-else
                class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " >
            </span>
        </div>

        <!-- bardage -->
        <div @click="goNext('extérieur sous bardage')" class="relative flex flex-col items-left gap-4 p-8 rounded bg-white hover:shadow-xl cursor-pointer" >

            <span class="font-bold text-lg">Isolation extérieur sous bardage</span>

            <p class="text-xs">Cela consiste à fixer les panneaux isolants contre une ossature en bois ou métallique. Puis, un bardage (planches de bois, briques, métal, ardoises..)
            <b>recouvre l'ensemble pour une finition esthétique souvent plus coûteuse.</b></p>

            <img src="/images/works/article/isolation-ext-sous-bardage.png" alt="enduit" class="rounded">

            <span 
                v-if="this.ExterieurRevetement == 'extérieur sous bardage'"
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
    props:['ExterieurRevetement'],
    emits: ['exterior-revetement'],

    methods: {
        goNext(value) {
            this.$emit('exterior-revetement', value);
        }
    }
}
</script>
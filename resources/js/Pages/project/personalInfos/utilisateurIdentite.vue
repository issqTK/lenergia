<template>
    <h3 class="text-xl md:text-2xl font-extrabold text-center mb-12">Comment vous appelez-vous ?</h3>

    <div class="grid grid-cols-2 gap-6 mb-4">

        <span @click="$emit('gender-value', 'Monsieur')"
            class="p-2 rounded bg-white font-bold text-center" 
            :class="gender == 'Monsieur' ? 'shadow-lg border-2' : ''"
        >Monsieur</span>
        
        <span @click="$emit('gender-value', 'Madame')"
            class="p-2 rounded bg-white font-bold text-center"
            :class="gender == 'Madame' ? 'shadow-lg border-2' : ''"
        >Madame</span>

        <div class="flex flex-col gap-1">
            <label for="firstName" class="text-sm font-semibold">Prénom</label>
            <input type="text" id="firstName" :value="firstName" @input="$emit('update:first-name', $event.target.value)" class="leading-3 rounded">
        </div>
        
        <div class="flex flex-col gap-1">
            <label for="lastName" class="text-sm font-semibold">Nom</label>
            <input type="text" id="lastName"  :value="lastName" @input="$emit('update:last-name', $event.target.value)" class="leading-3 rounded">
        </div>
    </div>

    <div class="text-red-400 text-center">{{error}}</div>
</template>

<script>
export default {
    emits:['update:first-name', 'update:last-name', 'gender-value'],
    props:['firstName', 'lastName','gender','error'],
    methods: {

    }
   
}
</script>
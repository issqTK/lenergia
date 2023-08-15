<template>
    <h3 class="text-xl md:text-2xl text-center font-extrabold mb-6">Combien de personnes composent votre foyer, vous compris ?
    </h3>

    <p class="text-center mb-6">Le montant de vos aides peut varier en fonction de la taille de votre ménage.</p>
    
    <div class="flex gap-4 items-center justify-center">
        <span @click="lessOne" class="p-6 text-2xl font-semibold rounded bg-white leading-3">-</span>

        <input type="number" :value="menageComposition" @input="$emit('update:modelValue', $event.target.value)" class="text-center font-semibold"/>
        
        <span @click="moreOne" class="p-6 text-2xl font-semibold rounded bg-white leading-3">+</span>
    </div>
</template>

<script>
export default {
    props:['menageComposition'],
    emits:['update:modelValue'],
    methods: {
        lessOne() {
            let value = this.menageComposition;
            value--;
            this.$emit('update:modelValue', value)
        },
        moreOne() {
            let value = this.menageComposition;
            value++;
            this.$emit('update:modelValue', value)
        }
    }
}
</script>
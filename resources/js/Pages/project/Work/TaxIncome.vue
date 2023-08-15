<template>
    <!-- title -->
    <h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold mb-6">Quel est le revenu total de votre foyer fiscal ?</h3>

    <div class="flex flex-col gap-2 justify-center w-9/12 md:w-8/12 m-auto">
        <label class="text-left text-sm font-semibold" for="TaxIncome">Revenu en (euro)</label>
        
        <input type="number" id="TaxIncome" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @keyup.enter="getNext" class="rounded"/>

        <span class="text-red-400">{{error}}</span>
    </div>
    
</template>

<script>
export default {
  emits:['update:modelValue'],
  props:['modelValue', 'error', 'getNext'],  
  methods: {
  }
}
</script>
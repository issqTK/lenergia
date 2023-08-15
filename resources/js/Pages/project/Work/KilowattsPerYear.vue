<template>
    <!-- title -->
    <h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold mb-6">Combien de kilowatts consommez-vous par an ?</h3>

    <div class="flex flex-col gap-2 justify-center md:w-8/12 w-9/12 m-auto">
        <label class="text-left text-sm font-semibold" for="Kilowatts">(kilowatts)</label>
        
        <input type="number" id="Kilowatts" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @keyup.enter="getNext" class="rounded"/>

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
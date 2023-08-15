<template>
  <!-- title -->
  <h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold mb-6">Quelle est la surface habitable de votre logement ?</h3>

  <div class="flex flex-col gap-2 justify-center md:w-10/12 m-auto">
    <label class="text-left text-sm font-semibold" for="surface">Surface en m²</label>
    
    <input type="number" id="surface" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @keyup.enter="getNext" class="rounded"/>

    <span class="text-red-400">{{error_surface}}</span>
  </div>
</template>

<script>
export default {
  emits:['update:modelValue'],
  props:['modelValue', 'error_surface', 'getNext'],  
  methods: {
  }
}
</script>
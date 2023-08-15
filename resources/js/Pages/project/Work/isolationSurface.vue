<template>
    <!-- title -->
    <h3 class="text-center text-xl md:text-2xl font-extrabold mb-6"> Quelle est la surface approximative de murs {{this.murs}} à isoler ?
    </h3>

    <p class="mb-6 text-center ">Cela suffit pour estimer vos aides : votre artisan mesurera vos murs lors de sa visite.</p>

    <div class="flex flex-col gap-2 justify-center md:w-10/12 m-auto">
        <label class="text-left text-sm font-semibold" for="surface">Surface en m²</label>
        <input type="number" id="surface" :value="interiorSurface" @input="$emit('update:modelValue', $event.target.value)" @keyup.enter="getNext"  class="rounded"/>
        <span class="text-red-400">{{error_surface}}</span>
    </div>
</template>

<script>
export default {
    props:['interiorSurface', 'error_surface', 'murs', 'getNext'],
    emits: ['update:modelValue']
}
</script>
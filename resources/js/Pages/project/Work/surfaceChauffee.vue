<template>
    <!-- title -->
    <h3 class="mb-6 text-center text-xl md:text-2xl font-extrabold">Quelle surface sera chauffée par la pompe à chaleur ?
    </h3>

    <p class="mb-6 text-center">N'indiquez que la surface des pièces que la pompe à chaleur chauffe.</p>

    <div class="flex flex-col gap-2 justify-center md:w-10/12 m-auto">
        <label class="text-left text-sm font-bold" for="surface">Surface en m²</label>
        <input type="number" id="surface" :value="surfaceChauffe" @input="$emit('update:modelValue', $event.target.value)" @keyup.enter="getNext" class="rounded"/>
        <span class="text-red-400">{{error_surface}}</span>
    </div>
</template>

<script>
export default {
    props:['surfaceChauffe', 'error_surface', 'getNext'],
    emits: ['update:modelValue']
}
</script>
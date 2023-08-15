<template>
    <!-- title -->
    <h3 class="text-center text-xl md:text-2xl font-extrabold mb-6">Où se situe le logement concerné par les travaux ?
    </h3>

    <p class="text-center mb-6">Le montant de vos aides peut varier en fonction de votre localisation.</p>

    <div class="flex flex-col gap-2 justify-center md:w-10/12 m-auto">
        <label class="text-left text-sm font-semibold" for="Address">Adresse</label>
        <input type="text" id="Address" :value="TravauxAdresse" @input="$emit('update:modelValue', $event.target.value)" @keyup.enter="getNext"  class="rounded" placeholder="35 Rue victor Hugo, 37000 Tours"/>
        <span class="text-red-400">{{error_address}}</span>
    </div>
    
</template>

<script>
export default {
    emits:['update:modelValue'],
    props:['TravauxAdresse', 'error_address', 'getNext'],
}
</script>
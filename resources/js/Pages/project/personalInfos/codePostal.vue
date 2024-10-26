<template>
    <h3 class="text-xl md:text-center text-2xl font-extrabold mb-6">Quel est votre Code Postal ?</h3>

    <div class="flex flex-col gap-2 md:w-10/12 m-auto">
        <label for="codePostal" class="font-semibold text-sm">Code Postal</label>
        <input type="text" id="codePostal" :value="Code" @input="$emit('code-postal' , $event.target.value)" @keyup.enter="getNext" class="rounded">
        <span class="text-red-400">{{error_Postal}}</span>
    </div>
</template>

<script>
export default {
    props:['Code', 'error_Postal', 'getNext'],
    emits: ['code-postal'],
}
</script>
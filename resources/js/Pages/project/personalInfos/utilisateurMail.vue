<template>
    <h3 class="text-xl md:text-2xl font-extrabold text-center mb-6">Dernière étape : entrer votre email</h3>
    <p class="text-center mb-6">Vous bénéficierez de notre service mailing et serez accompagner dans votre projet.</p>

    <div class="flex flex-col gap-2 md:w-10/12 m-auto">
        <label for="email" class="font-semibold text-sm">Email</label>
        <input type="email" id="email" :value="eMail" @input="$emit('e-mail',$event.target.value)" @keyup.enter="getNext" class="rounded">
        <span class="text-red-400">{{error}}</span>
    </div>
</template>

<script>
export default {
    emits:['e-mail'],
    props:['eMail', 'error', 'getNext']
}
</script>
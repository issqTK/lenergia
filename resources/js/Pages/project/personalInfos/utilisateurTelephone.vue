<template>
    <h3 class="text-xl md:text-center text-2xl font-extrabold mb-6">Quel est votre numéro de téléphone ?</h3>
    <p class="text-center mb-6">
        Vous bénéficierez de notre service d'assistance téléphonique
        et serez rappelé gratuitement afin de vous accompagner dans votre projet.
    </p>

    <div class="flex flex-col gap-2 md:w-10/12 m-auto">
        <label for="phone" class="font-semibold text-sm">Téléphone</label>
        <input type="number" id="phone" :value="phoneNumber" @input="goNext($event.target.value)" @keyup.enter="getNext" class="rounded">
        <span class="text-red-400">{{error}}</span>
    </div>
</template>

<script>
export default {
    props:['phoneNumber', 'error', 'getNext'],
    emits: ['phone-number'],
    methods: {
        goNext(value) {
            if(value.length == 1 && value != 0){
                value = 0
            }
            if(value.length > 10) {
                value = value.slice(0, 10)
                return false;
            }

            this.$emit('phone-number' , value)
        }
    }
}
</script>
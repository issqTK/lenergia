<template>
    <div class="absolute right-8 top-8 sm:right-12 sm:top-12 md:top-16 md:right-16 flex justify-center items-center gap-3 ">
        <div class="absolute opacity-0 -right-60 w-60 bg-amber-200 p-2 overflow-hidden transition-all rounded-l-xl"
            :class= "{ '!right-16 !opacity-100' : appel_label === true}"
            >
            <span class="grow">
                <span class="font-bold text-base text-amber-500">Appelez-nous!</span>
                <br />
                <span class="text-white font-bold text-sm">du lundi au vendredi - 8h à 19h</span>
            </span>
        </div>

        <div class="z-10">
            <a class="flex justify-center items-center h-16 w-16 bg-amber-400 text-white font-bold rounded-full" 
            :class= "{ 'rounded-l-none' : appel_label === true}"
            href="tel:0985408779"
            @mouseover.prevent="appel_label=true" 
            @mouseleave.prevent="appel_label=false" 
            >
            
            Appeler</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            appel_label: false
        }
    }
}
</script>

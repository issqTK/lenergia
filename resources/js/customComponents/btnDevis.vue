<script>
import { Link } from '@inertiajs/vue3';
export default {
    components:{Link},
    props: ['text', 'slug'],
}
</script>

<template>
<Link :href="route('parcour', slug)" class="m-auto text-teal-500 hover:text-white uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg px-8 py-4 rounded-full font-bold border border-teal-500 transition-all !bg-white">
    {{ text }}
</Link>
</template>
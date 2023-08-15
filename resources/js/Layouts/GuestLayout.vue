<script>
import { Link } from '@inertiajs/vue3';
import { computed } from "vue";
import PrimaryNavigation from '@/customComponents/PrimaryNavigation.vue';
export default {
    components:{
        PrimaryNavigation,
    }
}

</script>

<template>
    <div class="text-slate-900">
        <PrimaryNavigation></PrimaryNavigation>

        <div>
            <slot />           
        </div>        
    </div>
</template>

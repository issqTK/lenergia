<template>
    <h3 class="text-center text-xl md:text-2xl font-extrabold mb-6">Quels travaux souhaitez-vous réaliser dans votre logement ?
    </h3>

    <p class="mb-6 text-center">Vous pouvez sélectionner plusieurs réponses.</p>

    <div v-if="this.error" class="flex gap-4 rounded items-center z-10 bg-slate-200 p-6 mb-6">
        <i class="fa-solid fa-circle-exclamation text-red-300 text-2xl"></i>
        <span class="text-slate-900 font-semibold">Vous pouvez sélectionner au maximum 5 types de travaux.</span>
    </div>

    <!-- Solaire -->
    <div class="mb-4 w-10/12 mx-auto">
        <h4 class="mb-4 text-lg font-bold">Solaire</h4>
        <div class="grid md:grid-cols-3 gap-4">
            <div v-for="work in esWorks" :key="work.id" >
                <div @click="select(work.id)"
                    class="relative h-full bg-white flex flex-col gap-2 py-4 items-center justify-between rounded-lg cursor-pointer shadow hover:shadow-lg">
                    <img  :src="'/images/illustration/' + work.svg" :alt="work.img_alt" style="width:120px">
                    <span class="text-sm font-semibold text-center">{{work.name}}</span>

                    <span v-if="this.worksIds.includes(work.id)"
                        class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                        <i class="fa-solid fa-check text-white"></i>
                    </span>
                    <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " ></span>
                </div>
            </div>
        </div>
    </div>

    <!-- chauffage -->
    <div class="mb-4 w-10/12 mx-auto">
        <h4 class="mb-4 text-lg font-bold">Chauffage</h4>
        <div class="grid md:grid-cols-3 gap-4">
            <div v-for="work in chWorks" :key="work.id">
                <div @click="select(work.id)"
                    class="relative h-full bg-white flex flex-col gap-2 py-4 items-center justify-between rounded-lg cursor-pointer shadow hover:shadow-lg">
                    <img  :src="'/images/illustration/' + work.svg" :alt="work.img_alt" style="width:120px">
                    <span class="text-sm font-semibold text-center">{{work.name}}</span>

                    <span v-if="this.worksIds.includes(work.id)"
                        class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                        <i class="fa-solid fa-check text-white"></i>
                    </span>
                    <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " ></span>
                </div>
            </div>
        </div>
    </div>

    <!-- Isolation -->
    <div class="w-10/12 mx-auto">
        <h4 class="mb-4 text-lg font-bold">Isolation</h4>
        <div class="grid md:grid-cols-3 gap-4">
            <div v-for="work in iWorks" :key="work.id" >
                <div @click="select(work.id)"
                    class="relative h-full bg-white flex flex-col gap-2 py-4 items-center justify-between rounded-lg cursor-pointer shadow hover:shadow-lg">
                    <img  :src="'/images/illustration/' + work.svg" :alt="work.img_alt" style="width:120px">
                    <span class="text-sm font-semibold text-center">{{work.name}}</span>

                    <span v-if="this.worksIds.includes(work.id)"
                        class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300" >
                        <i class="fa-solid fa-check text-white"></i>
                    </span>
                    <span v-else class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border " ></span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props:['worksIds'],
    emits:['works-ids'],

    data() {
        return{
            error: false,
            works: this.$page.props.works,
        }
    },
    methods: {
        select(work_id) {
            let array = this.worksIds

            if(array.length >= 5) {
                this.error = true;
                window.scrollTo(0,0);
            } else this.error = false   

            if(!array.includes(work_id) && this.error == false) {
                array.push(work_id);
            }
            else {
                const index = array.indexOf(work_id);
                if (index > -1) {
                    array.splice(index, 1);
                }
            }

            this.$emit('works-ids', this.worksIds);

        }
    },
    computed: {
        esWorks: function() {
            return this.works.filter(function(e) {
                if(e.type == 'es')
                return e           
            })
        },
        chWorks: function() {
            return this.works.filter(function(e) {
                if(e.type == 'ch')
                return e           
            })
        },
        iWorks: function() {
            return this.works.filter(function(e) {
                if(e.type == 'i')
                return e           
            })
        }
    },
}
</script>
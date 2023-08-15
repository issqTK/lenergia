<template>
    <Head title="Commandes" />

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <div class="overflow-x-scroll overscroll-contain scroll-y" >
                        <table class="orders rounded overflow-hidden" v-if="this.current == 'list'">
                            <tr>
                                <th>État d'examen</th>
                                <th>nom client</th>
                                <th>Téléphone client</th>
                                <th>logement Type</th>
                                <th>logement Construction</th>
                                <th>logement Surface</th>
                                <th>logement Energie</th>
                                <th>travaux Adresse</th>
                                <th>travaux demandés</th>
                            </tr>

                            <tr v-for="da in data" :key="da.id"
                                @click="show(da)"
                                class="relative cursor-pointer overflow-hidden"
                            >

                                <td>{{ da.reviewState }}</td>

                                <td>{{ da.client.gender == 'Monsieur' ? 'Mr' : 'Mme' }} {{ da.client.lastName }} {{ da.client.firstName }}</td>

                                <td>{{ da.client.phone }}</td>
                                
                                <td>{{ da.logementType }}</td>
                                
                                <td>
                                    <span v-if="da.logementConstruction == '-2'">Moins de 2 ans</span>
                                    <span v-if="da.logementConstruction == '2-15'">Entre 2 ans et 15 ans</span>
                                    <span v-if="da.logementConstruction == '+15'">Plus de 15 ans</span>
                                </td>
                                
                                <td>{{ da.logementSurface }} m²</td>
                                
                                <td class="leading-3">{{ da.logementEnergie }} <br>
                                    <span v-if="da.logementEnergie == 'Chauffage au fioul' || da.logementEnergie == 'Chauffage électrique' || da.logementEnergie == 'Chauffage au gaz'"
                                    >- <br>{{da.logementEnergieType}}</span>
                                </td>
                                
                                <td>{{ da.travauxAdresse }}</td>

                                <td>
                                    <span v-for="work in da.works" class="text-xs block text-left mb-2 p-2 bg-white shadow">
                                        {{ work.name }} <br>
                                    </span>
                                </td>
                                
                                <span class="rounded">Afficher</span>
                            </tr>
                        </table>
                    </div>
                    
                    <div v-if="data.length == 0" class="px-4">Il n'y a pas encore d'enregistrements</div>

                    <OrderView v-if="current == 'view'"
                        :view = this.view
                        @current = this.getCurrent
                    ></OrderView>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import OrderView from '@/Pages/viewOrder.vue';
export default {
    layout:AuthenticatedLayout,
    props:['data'],
    components:{
        Head,
        OrderView,
    },
    data() {
        return {
            current: 'list',
            view: null
        }
    },
    methods: {
        show(data) {
            this.view = data;
            this.current = 'view';
            window.scroll(0,0)
        },
        getCurrent(value) {
            this.current = value;
        }
    }
}
</script>

<style scoped>
.scroll-y::-webkit-scrollbar:horizontal {
  height: 11px;
}

.scroll-y::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 2px solid #1e293b;
  background-color: rgba(0, 0, 0, .5);
}
.scroll-y::-webkit-scrollbar {
  -webkit-appearance: none;
}

.orders th, .orders td{
    text-transform: capitalize;
    padding: 8px;
    text-align: center;
}
.orders th {
    background-color: #64748b9c;
    color: white;
    text-transform:uppercase;
    font-size:.9em
}

.orders > tr:nth-child(even) {
  background-color: #f8fafc;
}

.orders{
    width: 100%;
    font-size: .8em;
}
.orders tr > span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    font-size:.9em;
    font-weight:bold;
    text-transform: uppercase;
    top: 0;
    right: -200px;
    height: 100%;
    padding:0 20px;
    color: white;
    background-color: #97a5bad9;
    border-radius: 5px 0 0 5px;
    transition: all .4s ease-in;
}

.orders tr:hover span {
    right:0!important;
}
</style>
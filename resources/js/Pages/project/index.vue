<template>
    <Head title="Estimez votre prime énergie et demandez votre devis" />

    <div class="flex">
        <!-- left side -->
        <div class="hidden md:block w-3/12 px-6 pt-12 bg-white overflow-hidden">
            <div class="flex items-center gap-2 mb-4" v-if="this.current == 'utilisateurIdentite' || this.current == 'utilisateurTelephone' || this.current == 'utilisateurEmail' || this.current == 'travauxAdresse' || this.current == 'codePostal'"> 
                <span class="w-2 h-20 bg-green-200 rounded-lg">&nbsp;</span>
                <p class="Capitalize font-bold text-black">Vos informations</p>
            </div>
            <div class="flex items-center gap-2 mb-4" v-else>
                <span class="w-2 h-20 bg-gray-100 rounded-lg">&nbsp;</span>
                <p class="Capitalize font-bold text-gray-200">Vos informations</p>
            </div>
            
            <div class="flex items-center gap-2 mb-4" v-if="this.current == 'type' || this.current == 'construc' || this.current == 'surface' || this.current == 'energie' || this.current == 'typeEnergie' || this.current == 'userStatut' || this.current == 'menageCompos' || this.current == 'menageReven'"> 
                <span class="w-2 h-12 bg-green-200 rounded-lg">&nbsp;</span>
                <p class="Capitalize font-bold text-black leading-10">Votre logement</p>
            </div>
            <div class="flex items-center gap-2 mb-4" v-else>
                <span class="w-2 h-12 bg-gray-100 rounded-lg">&nbsp;</span>
                <p class="Capitalize font-bold text-gray-200 leading-10">Votre logement</p>
            </div>
            
            <div class="flex items-center gap-2 mb-4" v-if="this.current == 'travaux' || this.current == 'electricityBill' || this.current == 'kilowattsPerYear' || this.current == 'taxIncome' || this.current == 'roofType' || this.current == 'roofOrientation' || this.current == 'interiorSurface' || this.current == 'exteriorSurface' || this.current == 'exteriorRevetement' || this.current == 'surfaceChauffee' || this.current == 'chaudeSanitaire' || this.current == 'espaceExterior' || this.current == 'statusProjet'"> 
                <span class="w-2 h-12 bg-green-200 rounded-lg">&nbsp;</span>
                <p class="Capitalize font-bold text-black">Votre projet</p>
            </div>
            <div class="flex items-center gap-2 mb-4" v-else>
                <span class="w-2 h-12 bg-gray-100 rounded-lg">&nbsp;</span>
                <p class="Capitalize font-bold text-gray-200">Votre projet</p>
            </div>

            <div class="flex items-center gap-2 mb-4" v-if="this.current == 'done' "> 
                <span class="w-2 h-4 bg-green-200 rounded-lg">&nbsp;</span>
                <p class="Capitalize font-bold text-black">Dernière étape</p>
            </div>
            <div class="flex items-center gap-2 mb-4" v-else>
                <span class="w-2 h-20 bg-gray-100 rounded-lg">&nbsp;</span>
                <p class="Capitalize font-bold text-gray-200">Dernière étape</p>
            </div>
        </div>

        <!-- right -->
        <div class="relative w-full md:w-9/12 p-4 md:p-6 min-h-screen">
            <!-- retour -->
            <div v-if="this.current != 'utilisateurIdentite' && this.current != 'done'" @click="getPrevious" class="inline-block mb-8 p-4 rounded hover:bg-slate-200 cursor-pointer">
                <i class="fa-solid fa-arrow-left" style="color: #74efa6;"></i>
                &nbsp;
                <span class="font-semibold capitalize">retour</span>
            </div>

            <div>
                 <!-- Personal infos -->
                 <utilisateurIdentite v-if="this.current == 'utilisateurIdentite'"
                    :firstName = this.FormData.Client.FirstName
                    :lastName = this.FormData.Client.LastName
                    :gender = this.FormData.Client.Gender
                    :error = this.errors_text
                    @update:first-name = getFirstName
                    @update:last-name = getLastName
                    @gender-value = getGender
                ></utilisateurIdentite>

                <utilisateurTelephone v-if="this.current == 'utilisateurTelephone'"
                :phoneNumber = this.FormData.Client.PhoneNumber
                :error = "this.errors_text"
                :getNext="getNext"
                @phone-number= getPhoneNumber
                ></utilisateurTelephone>

                <utilisateurEmail v-if="this.current == 'utilisateurEmail'"
                    :eMail = this.FormData.Client.EMail
                    :error = this.errors_text
                    :getNext="getNext"
                    @e-mail = getEmail
                ></utilisateurEmail>

                <travauxAddress v-if="this.current == 'travauxAdresse'" 
                    :TravauxAdresse = this.FormData.TravauxAdresse
                    :error_address = this.errors_text
                    :getNext="getNext"
                    @update:modelValue = getTravauxAdresse
                ></travauxAddress>
                
                <CodePostal v-if="this.current == 'codePostal'"
                    :Code = this.FormData.Client.CodePostal
                    :error_Postal = this.errors_text
                    :getNext="getNext"
                    @code-postal = getCodePostal
                ></CodePostal>
                
                <!--  -->
                <LogementType 
                    v-if="this.current == 'type'"
                    @LogementType="getLogementType" 
                    :LogementType = 'this.FormData.LogementType'
                ></LogementType>

                <LogementConstruction
                    v-if="this.current == 'construc'"
                    @LogementConstruction="getLogementConstruction" 
                    :LogementConstruction = 'this.FormData.LogementConstruction'
                ></LogementConstruction>

                <LogementSurface
                    v-if="this.current == 'surface'"
                    :modelValue="this.FormData.LogementSurface"
                    :error_surface="errors_text"
                    :getNext="getNext"
                    @update:modelValue="getLogementSurface"
                ></LogementSurface>

                <LogementEnergie
                    v-if="this.current == 'energie'"
                    @LogementEnergie="getLogementEnergie" 
                    :LogementEnergie = 'this.FormData.LogementEnergie'
                ></LogementEnergie>

                <EnergieType v-if="this.current == 'typeEnergie'"
                    :LogementEnergie = 'this.FormData.LogementEnergie'
                    :LogementEnergieType = 'this.FormData.LogementEnergieType'
                    @energie-type="getEnergieType"
                ></EnergieType>

                <utilisateurStatut  v-if="this.current == 'userStatut'"
                    :UtilisateurStatus = this.FormData.UtilisateurStatus
                    @utilisateur-status = getUtilisateurStatus
                ></utilisateurStatut>

                <menageComposition v-if="this.current == 'menageCompos'"
                    :menageComposition = this.FormData.MenageComposition
                    @update:modelValue= getMenageComposition
                ></menageComposition>

                <menageRevenus v-if="this.current == 'menageReven'" 
                    :menageRevenus = this.FormData.MenageRevenus
                    @menage-revenus = getMenageRevenue
                ></menageRevenus>

                <!-- Votre Projet -->
                <selectTravaux v-if="this.current == 'travaux'"
                    :worksIds = "this.FormData.TravauxIds"
                    :currentWork = "this.currentWork"
                    @works-ids = "getWorksIds"
                ></selectTravaux>

                <electricityBill v-if="this.current == 'electricityBill'" 
                    :modelValue="this.FormData.currentElectricityBill"
                    :error="errors_text"
                    :getNext="getNext"
                    @update:modelValue="getCurrentElectricityBill"
                ></electricityBill>
                
                <RoofType v-if="this.current == 'roofType'" 
                    :roofType="this.FormData.roofType"
                    :getNext="getNext"
                    @roof-type="getRoofType"
                ></RoofType>
                
                <RoofOrientation v-if="this.current == 'roofOrientation'" 
                    :roofOrientation="this.FormData.roofOrientation"
                    :getNext="getNext"
                    @roof-orientation="getRoofOrientation"
                ></RoofOrientation>

                <isolationSurface v-if="this.current == 'interiorSurface'" 
                    murs="intérieur"
                    :error_surface = this.errors_text
                    :interiorSurface = this.FormData.InteriorSurface
                    :getNext="getNext"
                    @update:modelValue="getInteriorSurface"
                ></isolationSurface>

                <isolationSurface v-if="this.current == 'exteriorSurface'" 
                    murs="extérieur"
                    :error_surface = this.errors_text
                    :interiorSurface = this.FormData.ExteriorSurface
                    :getNext="getNext"
                    @update:modelValue="getExteriorSurface"
                ></isolationSurface>

                <isolationRevetement v-if="this.current == 'exteriorRevetement'" 
                    :ExterieurRevetement = "this.FormData.ExterieurRevetement"
                    @exterior-revetement = "getExteriorRevetement"
                ></isolationRevetement>

                <surfaceChauffe v-if="this.current == 'surfaceChauffee'"
                    :surfaceChauffe="this.FormData.SurfaceChauffee"
                    :error_surface="this.errors_text"
                    :getNext= "getNext"
                    @update:modelValue="getSurfaceChauffee"
                ></surfaceChauffe>

                <chaudeSanitaire v-if="this.current == 'chaudeSanitaire'" 
                    :eauChaudeSanitaire = "this.FormData.EauChaudeSanitaire"
                    @EauChaudeSanitaire = "getEauChaudeSanitaire"
                ></chaudeSanitaire>

                <spaceExterior v-if="this.current == 'espaceExterior'" 
                   :EspaceExterior = "this.FormData.EspaceExterior"
                   @espace-exterieur = "getEspaceExterieur"
                ></spaceExterior>

                <statusProject v-if="this.current == 'statusProjet'"
                    :statusProject = this.FormData.StatusProject
                    @status-project = getStatusProject
                ></statusProject>

                <!-- done -->

                <div v-if="this.current == 'done'" class="mt-6 md:mt-12">
                    <p class="text-sm md:text-base font-bold w-full md:w-8/12 text-center p-8 md:p-12 m-auto !leading-loose text-slate-900 bg-slate-50 shadow rounded">
                        Merci pour le temps que vous avez consacré sur ce parcours,
                        On va vous contacter prochainement pour vous accompagner dans votre projet.
                        <a href="/" class="table mx-auto mt-6 p-4 text-sm rounded text-white bg-slate-500 hover:bg-slate-600">Ok Merci</a>
                    </p>
                    
                </div>
            </div>

            <!-- button next -->
            <div v-if="this.current != 'done'" id="fakeButton"></div>

            <div v-if="this.current != 'done'" class="fixed w-full py-4 bg-slate-100 flex left-0 bottom-0 md:left-1/4 md:w-9/12" ref="nextButton"> 
                <a v-if="this.errors == false" 
                    @click="getNext" 
                    class="cursor-pointer m-auto uppercase bg-gradient-to-r from-teal-500 to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-20 py-3 rounded-full font-bold text-white">
                    Suivant
                </a>
                <a v-else
                    class="cursor-pointer m-auto uppercase bg-gradient-to-r from-gray-500 to-gray-200 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-20 py-3 rounded-full font-bold text-black">
                    Suivant
                </a>
            </div>
        </div>
    </div>
</template>


<script>
import { Head, useForm } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import LogementType from '@/Pages/project/Logement/LogementType.vue';
import LogementConstruction from '@/Pages/project/Logement/LogementConstruction.vue';
import LogementSurface from '@/Pages/project/Logement/LogementSurface.vue';
import LogementEnergie from '@/Pages/project/Logement/LogementEnergie.vue';
import EnergieType from '@/Pages/project/Logement/EnergieType.vue';
import selectTravaux from '@/Pages/project/Work/selectTravaux.vue'; 
import isolationSurface from '@/Pages/project/Work/isolationSurface.vue'; 
import isolationRevetement from '@/Pages/project/Work/isolationRevetement.vue'; 
import statusProject from '@/Pages/project/Work/statusProject.vue'; 
import surfaceChauffe from '@/Pages/project/Work/surfaceChauffee.vue'; 
import chaudeSanitaire from '@/Pages/project/Work/chaudeSanitaire.vue'; 
import spaceExterior from '@/Pages/project/Work/spaceExterior.vue'; 
import travauxAddress from '@/Pages/project/Work/travauxAddress.vue'; 
import utilisateurStatut from '@/Pages/project/personalInfos/utilisateurStatut.vue';
import menageComposition from '@/Pages/project/personalInfos/menageCompos.vue';
import menageRevenus from '@/Pages/project/personalInfos/menageRevenus.vue';
import utilisateurIdentite from '@/Pages/project/personalInfos/utilisateurIdentite.vue';
import utilisateurTelephone from '@/Pages/project/personalInfos/utilisateurTelephone.vue';
import utilisateurEmail from '@/Pages/project/personalInfos/utilisateurMail.vue';

import electricityBill from '@/Pages/project/Work/ElectricityBill.vue';
import RoofType from '@/Pages/project/Work/RoofType.vue';
import RoofOrientation from '@/Pages/project/Work/RoofOrientations.vue';
import CodePostal from '@/Pages/project/personalInfos/codePostal.vue';

export default {
    props: ['currentWork'],
    layout:GuestLayout,
    components: {
        Head,
        useForm,
        GuestLayout,
        LogementType,
        LogementConstruction,
        LogementSurface,
        LogementEnergie,
        EnergieType,
        selectTravaux,
        isolationSurface,
        isolationRevetement,
        statusProject,
        surfaceChauffe,
        chaudeSanitaire,
        spaceExterior,
        travauxAddress,
        utilisateurStatut,
        menageComposition,
        menageRevenus,
        utilisateurIdentite,
        utilisateurTelephone,
        CodePostal,
        utilisateurEmail,

        electricityBill,
        RoofType,
        RoofOrientation
    },
    data() {
        return { 
            request: true,

            errors: false,
            errors_text: '',
            
            current: 'utilisateurIdentite',
            previous: '',
            next: '',

            FormData: useForm({
                LogementType : 'maison',
                LogementConstruction : '2-15',
                LogementSurface : '',
                LogementEnergie : 'Chauffage électrique',
                LogementEnergieType: '',
                TravauxIds: [],

                currentElectricityBill: '',
                roofType: '',
                roofOrientation: '',

                InteriorSurface: '',
                ExteriorSurface: '',
                ExterieurRevetement: 'extérieur sous enduit',
                SurfaceChauffee: '',
                EauChaudeSanitaire: 'Chauffage eau chaude sanitaire',
                EspaceExterior: true,
                StatusProject: 'Je recherche un artisan RGE',
                TravauxAdresse: '',
                UtilisateurStatus: 'Propriétaire occupant',
                MenageComposition: 2,
                MenageRevenus: 'Entre 16 229 € et 20 805 €',
                Client: {
                    FirstName: '',
                    LastName: '',
                    Gender: '',
                    PhoneNumber: '',
                    CodePostal: '',
                    EMail: '',
                }
            })
        }
    },
    methods : { 

        fakeHeight() {
            document.getElementById('fakeButton').style.height = this.$refs.nextButton.clientHeight +'px';
        },
        getPrevious(){
            this.errors = false
            this.next = this.current;
            this.current = this.previous
        },
        getNext() {
            if (!this.errors) {
                this.previous = this.current;
                this.current = this.next
            }
        },
        getLogementType(value){
            this.FormData.LogementType = value;
            this.getNext();
        },
        getLogementConstruction(value) {
            this.FormData.LogementConstruction = value;
            this.getNext();
        },
        getLogementSurface(value) {
                this.FormData.LogementSurface = value;
                this.errors = false;            
        },
        getLogementEnergie(value) {
            if (value == 'Chauffage au fioul' || value == 'Chauffage électrique' || value == 'Chauffage au gaz')
                this.next = 'typeEnergie';
            else this.next = 'userStatut';

            this.FormData.LogementEnergie = value;
            this.getNext();
        },
        getEnergieType(value){
            this.FormData.LogementEnergieType = value;
            this.errors = false;

            this.getNext();

        },
        getWorksIds(value) {
            this.FormData.TravauxIds = value;

            if(this.FormData.TravauxIds.length > 0) 
                this.errors = false
            else this.errors = true

            if(this.FormData.TravauxIds.includes(1)) this.next = 'electricityBill';
            
            else if(this.FormData.TravauxIds.includes(8)) this.next = 'interiorSurface';
            
            else if (this.FormData.TravauxIds.includes(9)) this.next = 'exteriorSurface';
            
            else if (this.FormData.TravauxIds.includes(5)) this.next = 'surfaceChauffee';

            else this.next = 'statusProjet';

        },
        getInteriorSurface(value) {
            this.FormData.InteriorSurface = value;
            this.errors = false;
        },
        getExteriorSurface(value) {
            this.FormData.ExteriorSurface = value;
            this.errors = false;
        },
        getExteriorRevetement(value) {
            this.FormData.ExterieurRevetement = value;
            this.getNext();
        },
        getSurfaceChauffee(value) {
            this.FormData.SurfaceChauffee = value;
        },
        getEauChaudeSanitaire(value) {
            this.FormData.EauChaudeSanitaire = value;
            this.getNext();
        },
        getEspaceExterieur(value) {
            this.FormData.EspaceExterior = value;
            this.getNext();
        },
        getStatusProject(value) {
            this.FormData.StatusProject = value;
            this.getNext();
        },
        getTravauxAdresse(value) {
            this.FormData.TravauxAdresse = value;
            this.errors = false;
        },
        getUtilisateurStatus(value) {
            this.FormData.UtilisateurStatus = value;
            this.getNext();
        },
        getMenageComposition(value) {
            this.FormData.MenageComposition = value;
        },
        getMenageRevenue(value) {
            this.FormData.MenageRevenus = value
            this.getNext();
        },
        getGender(value) {
            this.FormData.Client.Gender = value
        },
        getFirstName(value){
            this.FormData.Client.FirstName = value;
        },
        getLastName(value){
            this.FormData.Client.LastName = value;
        },
        getPhoneNumber(value){
            this.FormData.Client.PhoneNumber = value;
        },
        getCodePostal(value){
            this.FormData.Client.CodePostal = value;
        },
        getEmail(value){
            this.FormData.Client.EMail = value;
        },
        getCurrentElectricityBill(value) {
            this.FormData.currentElectricityBill = value;
        },
        getRoofType(value) {
            this.FormData.roofType = value;
        },
        getRoofOrientation(value) {
            this.FormData.roofOrientation = value;
        }
    },
    mounted() { 
        this.fakeHeight();

        if(this.currentWork != null) this.FormData.TravauxIds.push(this.currentWork.id)
    },
    updated() {
        // user infos
        if(this.current == 'utilisateurIdentite') {
            if(this.FormData.Client.FirstName == '') {
                this.errors_text = 'Le prénom est requis';
                this.errors = true;
            } else if(this.FormData.Client.LastName == '') {
                this.errors_text = 'Le nom est requis';
                this.errors = true;                
            } else if(this.FormData.Client.Gender == '') {
                this.errors_text = 'Sélectionner le genre';
                this.errors = true;                
            } else {
                this.errors_text = '';
                this.errors = false;                                
            }

            this.next = 'utilisateurTelephone';
        }
        else if(this.current == 'utilisateurTelephone') {
            if(this.FormData.Client.PhoneNumber == '') {
                this.errors_text = 'Le numero de téléphone est requis!';
                this.errors = true;
            } 
            else if(this.FormData.Client.PhoneNumber.length < 10)
                this.errors = true;
            else {
                this.errors_text = '';
                this.errors = false;
            }

            this.previous = 'utilisateurIdentite';
            this.next = 'utilisateurEmail';
        }
        else if(this.current == 'utilisateurEmail') {
            if(this.FormData.Client.EMail == '') {
                this.errors_text = 'Adresse mail est requis!';
                this.errors = true;
            }
            else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.FormData.Client.EMail)){
                this.errors_text = 'Adresse mail n\'est pas valide!';
                this.errors = true;
            }
            else {
                this.errors_text = '';
                this.errors = false;
            }

            this.previous = 'utilisateurTelephone';
            this.next = 'travauxAdresse';
        }
        else if(this.current == 'travauxAdresse') {
            if(this.FormData.TravauxAdresse.length == 0) {
                this.errors_text = 'Ce champ est obligatoire';
                this.errors = true;
            } else {
                this.errors_text = '';
                this. errors = false;
            }

            this.previous = 'utilisateurEmail';
            this.next = 'codePostal';
            
        }
        else if(this.current == 'codePostal') {
            if(this.FormData.Client.CodePostal == '') {
                this.errors_text = 'Code Postal est requis!';
                this.errors = true;
            } else {
                this.errors_text = '';
                this.errors = false;
            }

            this.previous = 'travauxAdresse';

            if(this.FormData.TravauxIds.includes(10)) this.next = 'travaux';
            else this.next = 'type';
        }
        // Logements
        else if(this.current == 'type') {
            this.next = 'construc';
            this.previous = 'travauxAdresse';
        } 
        else if(this.current == 'construc') {
            this.next = 'surface';
            this.previous = 'type';
        } 
        else if(this.current == 'surface') {
            if(this.FormData.LogementSurface.length == 0) {
                this.errors_text = 'Ce champ est obligatoire';
                this.errors = true;
            }
            else if(this.FormData.LogementSurface > 800) { 
                this.errors_text = 'La surface doit être comprise entre 1 et 800.';
                this.errors = true;
            } else {
                this.errors_text = '';
                this. errors = false;
            }
            
            this.next = 'energie';
            this.previous = 'construc';
        }
        else if(this.current == 'energie') {
            this.FormData.LogementEnergieType = '';
            let value = this.FormData.LogementEnergie;

            if (value == 'Chauffage au fioul' || value == 'Chauffage électrique' || value == 'Chauffage au gaz') 
                this.next = 'typeEnergie';
            else this.next = 'userStatut';

            this.previous = 'surface';            
        }
        else if(this.current == 'typeEnergie') {
            if(this.FormData.LogementEnergieType == '') this.errors = true;
            else this.errors = false;

            this.next = 'userStatut';
            this.previous = 'energie'
        } 
        else if(this.current == 'userStatut') {
            this.next = 'menageCompos';
            this.previous = 'energie';
        }
        else if(this.current == 'menageCompos') {
            this.previous = 'userStatut';
            this.next = 'menageReven';
        }
        else if(this.current == 'menageReven') {
            this.previous = 'menageCompos';
            this.next = 'travaux';
        }
        // Project
        else if(this.current == 'travaux') {
            if(this.FormData.TravauxIds.length == 0) this.errors = true;
            else this.errors = false;

            
            if(this.FormData.TravauxIds.includes(1)) this.next = 'electricityBill';
            else if(this.FormData.TravauxIds.includes(8)) this.next = 'interiorSurface';
            else if (this.FormData.TravauxIds.includes(9)) this.next = 'exteriorSurface';
            else if (this.FormData.TravauxIds.includes(5)) this.next = 'surfaceChauffee';
            else if (this.FormData.TravauxIds.includes(10)) this.next = 'done';
            else this.next = 'statusProjet';

            this.previous = 'utilisateurEmail';
        }
        else if(this.current == 'electricityBill') {
            if(this.FormData.currentElectricityBill.length == 0) {
                this.errors_text = 'Ce champ est obligatoire';
                this.errors = true;
            } else {
                this.errors_text = '';
                this. errors = false;
            }

            this.previous = 'travaux';
            this.next = 'roofType'

        }
        else if(this.current == 'roofType') {
            if(this.FormData.roofType.length == 0) {
                this.errors = true;
            } else {
                this. errors = false;
            }

            this.previous = 'travaux';
            this.next = 'roofOrientation';

        }
        else if(this.current == 'roofOrientation') {
            if(this.FormData.roofOrientation.length == 0) {
                this.errors_text = 'veuillez sélectionner une orientation';
                this.errors = true;
            } else {
                this.errors_text = '';
                this. errors = false;
            }

            this.previous = 'roofType';


            if ( this.FormData.TravauxIds.includes(8)) this.next = 'interiorSurface';
            else if (this.FormData.TravauxIds.includes(9)) this.next = 'exteriorSurface';
            else if (this.FormData.TravauxIds.includes(5)) this.next = 'surfaceChauffee';
            else this.next = 'statusProjet';

        }
        else if(this.current == 'interiorSurface') {
            if(this.FormData.InteriorSurface.length == 0) {
                this.errors_text = 'Ce champ est obligatoire';
                this.errors = true;
            } else if(this.FormData.InteriorSurface > 800) { 
                this.errors_text = 'La surface doit être comprise entre 1 et 800.';
                this.errors = true;
            } else {
                this.errors_text = '';
                this. errors = false;
            }

            if (this.FormData.TravauxIds.includes(9)) this.next = 'exteriorSurface';
            else if (this.FormData.TravauxIds.includes(5)) this.next = 'surfaceChauffee';
            else this.next = 'statusProjet';

            this.previous = 'travaux';
        }
        else if(this.current == 'exteriorSurface') {
            if(this.FormData.ExteriorSurface.length == 0) {
                this.errors_text = 'Ce champ est obligatoire';
                this.errors = true;
            }
            else if(this.FormData.ExteriorSurface > 800) { 
                this.errors_text = 'La surface doit être comprise entre 1 et 800.';
                this.errors = true;
            } else {
                this.errors_text = '';
                this. errors = false;
            }

            this.next = 'exteriorRevetement'
            this.previous = 'travaux';
        }
        else if(this.current == 'exteriorRevetement') {
            if (this.FormData.TravauxIds.includes(5)) {
                this.next = 'surfaceChauffee';
                this.previous = 'exteriorSurface';
            }
            else this.next = 'statusProjet';
        }
        else if(this.current == 'surfaceChauffee') {
            if(this.FormData.SurfaceChauffee.length == 0) {
                this.errors_text = 'Ce champ est obligatoire';
                this.errors = true;
            } else if(this.FormData.SurfaceChauffee > 800) { 
                this.errors_text = 'La surface doit être comprise entre 1 et 800.';
                this.errors = true;
            } else {
                this.errors_text = '';
                this. errors = false;
            }

            this.next = 'chaudeSanitaire';
            this.previous = 'travaux'
        }
        else if(this.current == 'chaudeSanitaire') {
            this.next = 'espaceExterior';
            this.previous = 'surfaceChauffee';
        }
        else if(this.current == 'espaceExterior') {
            this.next = 'statusProjet';
            this.previous = 'chaudeSanitaire';
        }
        else if(this.current == 'statusProjet') {
            this.next = 'done'
            this.previous = 'travaux';
        }
        else if(this.current == 'done') {
            if(this.request == true) {
                this.FormData.post('/parcour', 
                    { 
                        preserveScroll: true, 
                        preserveState: true, 
                        onSuccess: () => this.FormData.reset()
                    }
                );

                this.request = false;
            }
        }
    }
}
</script>

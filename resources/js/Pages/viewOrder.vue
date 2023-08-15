<template>
    <span @click="this.$emit('current', 'list')"
    class="table cursor-pointer mb-8 bg-slate-50 hover:bg-slate-100 font-semibold py-3 px-4 rounded"
    >Retour</span>


    <form class="flex flex-col gap-4 md:gap-8 p-6 mb-8 relative">
    
        <div class="flex flex-col md:flex-row p-4 md:p-0 md:justify-start md:items-end rounded bg-slate-50 md:bg-white gap-4 ">
            <!-- gender -->
            <div class="flex flex-col gap-2 w-full md:w-4/12">
                <label for="gender">État d'examen</label>
                <select id="gender" v-model="this.reviewState.state">
                    <option value="en revue" :selected="view.reviewState == 'en revue'">en revue</option>
                    <option value="confirmer" :selected="view.reviewState == 'confirmer'">confirmer</option>
                </select>
            </div>

            <input type="button" @click.prevent="UpdateReviewState" value="Enregister" class="uppercase py-3 px-12 font-bold cursor-pointer bg-slate-100 hover:bg-slate-200">

            <div v-if="this.reviewState.recentlySuccessful" class="text-center font-semibold py-3 text-green-400">Enregistrée avec succès</div>
            
        </div>
    </form>

    <form class="flex flex-col gap-4 md:gap-8 p-6 mb-8 border rounded relative">
        <legend class="text-xl capitalize font-bold bg-white px-2 absolute" style="top:-20px">information client</legend>
        
        <div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4">
            <!-- gender -->
            <div class="flex flex-col gap-2 w-full md:w-4/12">
                <label for="gender">Genre</label>
                <select id="gender" v-model="this.clientInfos.gender">
                    <option value="Madame" :selected="view.client.gender == 'Madame'">Madame</option>
                    <option value="Monsieur" :selected="view.client.gender == 'Monsieur'">Monsieur</option>
                </select>

            </div>
            <!-- lastName -->
            <div class="relative flex flex-col gap-2 w-full md:w-4/12">
                <label for="lastName">Nom</label>
                <input type="text" id="lastName" v-model="this.clientInfos.lastName" :class="clientInfos.errors.lastName ? 'border-red-400' : ''"/>
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="clientInfos.errors.lastName">*</span>
                <span class="text-red-400 text-sm" >{{ clientInfos.errors.lastName }}</span>

            </div>
            <!-- firstName -->
            <div class="relative flex flex-col gap-2 w-full md:w-4/12">
                <label for="firstName">Prénom</label>
                <input type="text" id="firstName" v-model="this.clientInfos.firstName"  :class="clientInfos.errors.firstName ? 'border-red-400' : ''"/>
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="clientInfos.errors.firstName">*</span>
                <span class="text-red-400 text-sm">{{ clientInfos.errors.firstName }}</span>
            </div>
        </div>

        <div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4">
            <!-- phone -->
            <div class="relative flex flex-col gap-2 w-full md:w-6/12">
                <label for="phone">Téléphone</label>
                <input type="number" id="phone" v-model="clientInfos.phone" :class="clientInfos.errors.phone ? 'border-red-400' : ''"/>
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="clientInfos.errors.phone">*</span>
                <span class="text-red-400 text-sm">{{ clientInfos.errors.phone }}</span>
            </div>
            <!-- Email -->
            <div class="relative flex flex-col gap-2 w-full md:w-6/12">
                <label for="email">E mail</label>
                <input type="email" id="email" v-model="clientInfos.email" :class="clientInfos.errors.email ? 'border-red-400' : ''"/>
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="clientInfos.errors.email">*</span>
                <span class="text-red-400 text-sm">{{ clientInfos.errors.email }}</span>
            </div>
        </div>
        
        <div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4">
            <!-- logementType -->
            <div class="flex flex-col gap-2 w-full md:w-4/12">
                <label for="logementType">Logement Type</label>
                <select id="logementType" v-model="clientInfos.logementType">
                    <option value="maison" :selected="view.logementType == 'maison'">Maison</option>
                    <option value="appartement" :selected="view.logementType == 'appartement'">Appartement</option>
                </select>
            </div>
            <!-- logementConstruction -->
            <div class="flex flex-col gap-2 w-full md:w-4/12">
                <label for="logementConstruction">Logement Construction</label>
                <select id="logementConstruction" v-model="clientInfos.logementConstruction">
                    <option value="-2" :selected="view.logementConstruction == '-2'">Moins de 2 ans</option>
                    <option value="2-15" :selected="view.logementConstruction == '2-15'">Entre 2 ans et 15 ans</option>
                    <option value="+15" :selected="view.logementConstruction == '+15'">Plus de 15 ans</option>
                </select>
            </div>
            <!-- logementSurface -->
            <div class="relative flex flex-col gap-2 w-full md:w-4/12">
                <label for="logementSurface">Logement Surface m²</label>
                <input type="number" id="logementSurface" v-model="clientInfos.logementSurface" :class="clientInfos.errors.logementSurface ? 'border-red-400' : ''">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="clientInfos.errors.logementSurface">*</span>
                <span class="text-red-400 text-sm">{{ clientInfos.errors.logementSurface }}</span>
            </div>
        </div>

        <div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4">
            <!-- logementEnergie -->
            <div class="flex flex-col gap-2 w-full md:w-6/12">
                <label for="logementEnergie">Logement Energie</label>
                <select id="logementEnergie" v-model="clientInfos.logementEnergie">
                    <option value="Chauffage au fioul" :selected="view.logementEnergie == 'Chauffage au fioul'">Chauffage au fioul</option>
                    <option value="Chauffage électrique" :selected="view.logementEnergie == 'Chauffage électrique'">Chauffage électrique</option>
                    <option value="Chauffage au gaz" :selected="view.logementEnergie == 'Chauffage au gaz'">Chauffage au gaz</option>
                    <option value="Chauffage au bois" :selected="view.logementEnergie == 'Chauffage au bois'">Chauffage au bois</option>
                    <option value="Pompe à chaleur" :selected="view.logementEnergie == 'Pompe à chaleur'">Pompe à chaleur</option>
                    <option value="Chauffage au charbon" :selected="view.logementEnergie == 'Chauffage au charbon'">Chauffage au charbon</option>
                </select>
            </div>
            <!-- logementEnergieType -->
            <div class="relative flex flex-col gap-2 w-full md:w-6/12">
                <label v-if="clientInfos.logementEnergie == 'Chauffage au fioul' || clientInfos.logementEnergie == 'Chauffage électrique' || clientInfos.logementEnergie == 'Chauffage au gaz'" for="energieType">
                    Energie type</label>
                <select v-if="clientInfos.logementEnergie == 'Chauffage au fioul'" id="energieType" :class="clientInfos.errors.logementEnergieType ? 'border-red-400' : ''" ref="energyType" v-model="clientInfos.logementEnergieType">
                    <option value="Chaudière à condensation" :selected="clientInfos.logementEnergieType == 'Chaudière à condensation'">Chaudière à condensation</option>
                    <option value="Chaudière classique" :selected="clientInfos.logementEnergieType == 'Chaudière classique'">Chaudière classique</option>
                    <option value="Poêle" :selected="clientInfos.logementEnergieType == 'Poêle'">Poêle</option>
                </select>
                <select v-if="clientInfos.logementEnergie == 'Chauffage électrique'" id="energieType" :class="clientInfos.errors.logementEnergieType ? 'border-red-400' : ''" ref="energyType" v-model="clientInfos.logementEnergieType">
                    <option value="Chaudière électrique" :selected="clientInfos.logementEnergieType == 'Chaudière électrique'">Chaudière électrique</option>
                    <option value="Plafonds ou planchers chauffants" :selected="clientInfos.logementEnergieType == 'Plafonds ou planchers chauffants'">Plafonds ou planchers chauffants</option>
                    <option value="Radiateurs électriques" :selected="clientInfos.logementEnergieType == 'Radiateurs électriques'">Radiateurs électriques</option>
                </select>
                <select v-if="clientInfos.logementEnergie == 'Chauffage au gaz'" id="energieType" :class="clientInfos.errors.logementEnergieType ? 'border-red-400' : ''" ref="energyType" v-model="clientInfos.logementEnergieType">
                    <option value="Chaudière à condensation gaz" :selected="clientInfos.logementEnergieType == 'Chaudière à condensation gaz'">Chaudière à condensation gaz</option>
                    <option value="Chaudière classique gaz" :selected="clientInfos.logementEnergieType == 'Chaudière classique gaz'">Chaudière classique gaz</option>
                    <option value="Radiateurs électriques" :selected="clientInfos.logementEnergieType == 'Radiateurs électriques'">Radiateur au gaz</option>
                    <option value="Poêle au gaz" :selected="clientInfos.logementEnergieType == 'Poêle au gaz'">Poêle au gaz</option>
                </select>
                <span class="text-red-400 text-lg absolute right-8 top-9 z-50" v-if="clientInfos.errors.logementEnergieType">*</span>
                <span class="text-red-400 text-sm">{{ clientInfos.errors.logementEnergieType }}</span>
            </div>
        </div>

        <div v-if="this.clientInfos.recentlySuccessful" class="text-center font-semibold text-green-400">Enregistrée avec succès</div>

        <input type="button" @click.prevent="UpdateClientInfos" value="Enregister" class="uppercase m-auto py-4 px-12 font-bold cursor-pointer bg-slate-100 hover:bg-slate-200">
    </form>

    <form class="flex flex-col gap-4 md:gap-8 p-6 border rounded relative">
        <legend class="text-xl capitalize font-bold bg-white px-2 absolute" style="top:-20px">l'étude de projet </legend>

        <!-- Travaux -->
        <div class="flex flex-col gap-4">
            <div class="flex gap-4 items-center">
                <label >Travaux demandés</label>
                <a @click.prevent="this.viewCreateWork = true" class="text-sm font-semibold bg-slate-50 hover:bg-slate-100 cursor-pointer p-2 rounded">Créé travaux</a>
            </div>


            <div class="flex gap-4 flex-wrap">
                <div v-for="(work, i) in this.view.works" :key="i" class="relative p-4 bg-slate-50 rounded" >
                    {{ work.name }}
                    <span @click="this.delete(work.id, i)" 
                        class="absolute text-xl  cursor-pointer flex leading-4 group" style="top:-10px; right:-2px">
                        <span class="text-xs text-white bg-red-400 rounded-sm opacity-0 group-hover:opacity-100">Supprimer</span>
                        <i class="fa-solid fa-delete-left text-red-400" ></i>
                    </span>
                </div>
            </div>

            <span class="text-green-400 text-sm font-semibold" v-if="this.successMessage != null">{{ this.successMessage }}</span>
            <span class="text-red-400 text-sm font-semibold" v-if="this.errorMessage != null">{{ this.errorMessage }}</span>

        </div>

        <!-- Travaux questions -->
        <div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-8 flex-wrap">
            <!-- photovoltaique -->          
            <div v-if="this.photovoltaique" class="flex flex-col gap-2 relative">
                <label for="ElectricityBill">Le montant actuelle de la facture d'électricité</label>
                <input type="number" id="ElectricityBill" v-model="projectForm.currentElectricityBill" :class="projectForm.errors.currentElectricityBill ? 'border-red-400' : ''">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="projectForm.errors.currentElectricityBill">*</span>
                <span class="text-red-400 text-sm" v-if="projectForm.errors.currentElectricityBill">{{ projectForm.errors.currentElectricityBill }}</span>
            </div>

            <div v-if="this.photovoltaique" class="flex flex-col gap-2 relative">
                <label for="kilowattsPerYear">Combien de kilowatts consommer par an ?</label>
                <input type="number" id="kilowattsPerYear" v-model="projectForm.kilowattsPerYear" :class="projectForm.errors.kilowattsPerYear ? 'border-red-400' : ''">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="projectForm.errors.kilowattsPerYear">*</span>
                <span class="text-red-400 text-sm" v-if="projectForm.errors.kilowattsPerYear">{{ projectForm.errors.kilowattsPerYear }}</span>
            </div>

            <div v-if="this.photovoltaique" class="flex flex-col gap-2 relative">
                <label for="taxIncome">Quel est le revenu total de votre foyer fiscal ?</label>
                <input type="number" id="taxIncome" v-model="projectForm.taxIncome" :class="projectForm.errors.taxIncome ? 'border-red-400' : ''">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="projectForm.errors.taxIncome">*</span>
                <span class="text-red-400 text-sm" v-if="projectForm.errors.taxIncome">{{ projectForm.errors.taxIncome }}</span>
            </div>

            <div v-if="this.photovoltaique" class="flex flex-col gap-2 relative">
                <label for="roofType">Vous avez quel type de toiture ?</label>
                <select id="roofType" v-model="projectForm.roofType" :class="projectForm.errors.roofType ? 'border-red-400' : '' ">
                    <option disabled selected>Selectionner un type de toiture</option>
                    <option value="La toiture plate" >La toiture plate</option>
                    <option value="La toiture en pente" >La toiture en pente</option>
                </select>
                <span class="text-red-400 text-sm" v-if="projectForm.errors.roofType">{{ projectForm.errors.roofType }}</span>
            </div>

            <div v-if="this.photovoltaique" class="flex flex-col gap-2 relative">
                <label for="roofOrientation">Quel est l'orientation de votre toiture ?</label>
                <select id="roofOrientation" v-model="projectForm.roofOrientation" :class="projectForm.errors.roofOrientation ? 'border-red-400' : '' ">
                    <option disabled selected>Selectionner une orientation</option>
                    <option value="Sud" >Sud</option>
                    <option value="Est - Ouest" >Est - Ouest</option>
                    <option value="Sud - Est" >Sud - Est</option>
                    <option value="Sud - Ouest" >Sud - Ouest</option>
                </select>
                <span class="text-red-400 text-sm" v-if="projectForm.errors.roofOrientation">{{projectForm.errors.roofOrientation }}</span>
            </div>

            <!-- interieurSurface -->
            <div v-if="this.interieur" class="flex flex-col gap-2 relative">
                <label for="interieurSurface">Murs Intérieur Surface m²</label>
                <input type="number" id="interieurSurface" v-model="projectForm.interieurSurface" :class="projectForm.errors.interieurSurface ? 'border-red-400' : ''">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="projectForm.errors.interieurSurface">*</span>
                <span class="text-red-400 text-sm">{{ projectForm.errors.interieurSurface }}</span>
            </div>
            <!-- exterieurSurface -->
            <div v-if="this.exterieur" class="flex flex-col gap-2 relative">
                <label for="exterieurSurface">Murs Extérieur Surface m²</label>
                <input type="number" id="exterieurSurface" v-model="projectForm.exterieurSurface" :class="projectForm.errors.exterieurSurface ? 'border-red-400' : '' ">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="projectForm.errors.exterieurSurface">*</span>
                <span class="text-red-400 text-sm">{{ projectForm.errors.exterieurSurface }}</span>
            </div>
            <!-- exterieurRevetement -->
            <div  v-if="this.exterieur" class="flex flex-col gap-2">
                <label for="exterieurRevetement">Murs Extérieur Revetement</label>
                <select id="exterieurRevetement" v-model="projectForm.exterieurRevetement">
                    <option value="extérieur sous enduit" :selected="projectForm.exterieurRevetement == 'extérieur sous enduit'">Extérieur sous enduit</option>
                    <option value="extérieur sous bardage" :selected="projectForm.exterieurRevetement == 'extérieur sous bardage'">Extérieur sous bardage</option>
                </select>
            </div>
            <!-- surfaceChauffee -->
            <div v-if="this.pompe" class="flex flex-col gap-2 relative">
                <label for="surfaceChauffee">Surface chauffee par la pompe à chaleur m²</label>
                <input type="number" id="surfaceChauffee" v-model="projectForm.surfaceChauffee" :class="projectForm.errors.surfaceChauffee ? 'border-red-400' : '' ">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="projectForm.errors.surfaceChauffee">*</span>
                <span class="text-red-400 text-sm">{{ projectForm.errors.surfaceChauffee }}</span>
            </div>
            <!-- eauChaudeSanitaire -->
            <div v-if="this.pompe" class="flex flex-col gap-2">
                <label for="eauChaudeSanitaire">Eau Chaude Sanitaire</label>
                <select id="eauChaudeSanitaire" v-model="projectForm.eauChaudeSanitaire">
                    <option value="Chauffage seul" :selected="projectForm.eauChaudeSanitaire == 'Chauffage seul'">Chauffage seul</option>
                    <option value="Chauffage eau chaude sanitaire" :selected="projectForm.eauChaudeSanitaire == 'Chauffage eau chaude sanitaire'">Chauffage eau chaude sanitaire</option>
                </select>
            </div>
            <!-- EspaceExterieur -->
            <div v-if="this.pompe" class="flex flex-col gap-2">
                <label for="EspaceExterieur">Espace Extérieur pour la pompe à chaleur ?</label>
                <select id="EspaceExterieur" v-model="projectForm.EspaceExterieur">
                    <option value="1" :selected="projectForm.EspaceExterieur == 1">Oui</option>
                    <option value="0" :selected="projectForm.EspaceExterieur == 0">Non</option>
                </select>
            </div>
            
        </div>

        <div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4">
            <!-- statusProjet -->
            <div class="flex flex-col gap-2 w-full md:w-4/12">
                <label for="statusProjet">Status Projet</label>
                <select id="statusProjet" v-model="projectForm.statusProjet">
                    <option value="Je réfléchis à mes travaux" :selected="projectForm.statusProjet == 'Je réfléchis à mes travaux'">Je réfléchis à mes travaux</option>
                    <option value="Je recherche un artisan RGE" :selected="projectForm.statusProjet == 'Je recherche un artisan RGE'">Je recherche un artisan RGE</option>
                    <option value="Je vais signer mon devis" :selected="projectForm.statusProjet == 'Je vais signer mon devis'">Je vais signer mon devis</option>
                </select>
            </div>
            <!-- travauxAdresse -->
            <div class="flex flex-col gap-2 w-full md:w-4/12 relative">
                <label for="travauxAdresse">Travaux Adresse</label>
                <input type="text" id="travauxAdresse" v-model="projectForm.travauxAdresse" :class="projectForm.errors.travauxAdresse ? 'border-red-400' : ''">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="projectForm.errors.travauxAdresse">*</span>
                <span class="text-red-400 text-sm">{{ projectForm.errors.travauxAdresse }}</span>
            </div>
             <!-- utilisateurStatus -->
             <div class="flex flex-col gap-2 w-full md:w-4/12">
                <label for="utilisateurStatus">Utilisateur Status</label>
                <select id="utilisateurStatus" v-model="projectForm.utilisateurStatus">
                    <option value="Propriétaire occupant" :selected="projectForm.utilisateurStatus == 'Propriétaire occupant'">Propriétaire occupant</option>
                    <option value="Propriétaire d'une résidence secondaire" :selected="projectForm.utilisateurStatus == 'Propriétaire d\'une résidence secondaire'">Propriétaire d'une résidence secondaire</option>
                    <option value="Propriétaire bailleur" :selected="projectForm.utilisateurStatus == 'Propriétaire bailleur'">Propriétaire bailleur</option>
                    <option value="Locataire" :selected="projectForm.utilisateurStatus == 'Locataire'">Locataire</option>
                </select>
            </div>
        </div>

        <div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4">
             <!-- menageComposition -->
             <div class="flex flex-col gap-2 w-full md:w-6/12 relative">
                <label for="menageComposition">Menage Composition</label>
                <input type="number" id="menageComposition" v-model="projectForm.menageComposition" :class="projectForm.errors.menageComposition ? 'border-red-400' : ''">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="projectForm.errors.menageComposition">*</span>
                <span class="text-red-400 text-sm">{{ projectForm.errors.menageComposition }}</span>
            </div>

            <!-- menageRevenus -->
            <div class="flex flex-col gap-2 w-full md:w-6/12">
                <label for="menageRevenus">Menage Revenus</label>
                <select id="menageRevenus" v-model="projectForm.menageRevenus">
                    <option value="Inférieur à 16 229 €" :selected="projectForm.menageRevenus == 'Inférieur à 16 229 €'">Inférieur à 16 229 €</option>
                    <option value="Entre 16 229 € et 20 805 €" :selected="projectForm.menageRevenus == 'Entre 16 229 € et 20 805 €'">Entre 16 229 € et 20 805 €</option>
                    <option value="Entre 20 805 € et 29 148 €" :selected="projectForm.menageRevenus == 'Entre 20 805 € et 29 148 €'">Entre 20 805 € et 29 148 €</option>
                    <option value="Supérieur à 29 148 €" :selected="projectForm.menageRevenus == 'Supérieur à 29 148 €'">Supérieur à 29 148 €</option>
                </select>
            </div>
        </div>
        
        <div v-if="this.projectForm.recentlySuccessful" class=" text-center font-semibold text-green-400">Enregistrée avec succès</div>

        <input type="button" @click.prevent="UpdateProjectForm" value="Enregister" class="uppercase m-auto py-4 px-12 font-bold cursor-pointer bg-slate-100 hover:bg-slate-200">
    </form>

    <div v-if="viewCreateWork == true"
        class="fixed top-0 left-0 right-0 bottom-0 bg-slate-100 py-2 px-12 md:px-36 md:py-6 overflow-y-scroll"
        style="-ms-overflow-style:none;scrollbar-width:none"
    >
        <span @click="this.viewCreateWork = false" class="table cursor-pointer mb-8 bg-white hover:bg-slate-50 font-semibold py-3 px-4 rounded">
                    Annuler</span>

        <form class="flex flex-col gap-6 md:w-8/12 md:mx-auto">
            <div class="flex flex-col gap-2 relative">
                <label for="travaux" class="capitalize">Selectionner un travail</label>
                <select id="travaux" @change="loadQuestions($event)" v-model="createWorkForm.work" :class="createWorkForm.errors.work ? 'border-red-400' : ''">
                    <option value="" selected disabled hidden>Choisir ici</option>
                    <option v-for="work in this.$page.props.works" :key="work.id" :value="work.id">{{ work.name }}</option>
                </select>
                <span class="text-red-400 text-sm" v-if="createWorkForm.errors.work">{{ createWorkForm.errors.work }}</span>
            </div>

            <!-- pannaux photovoltaique 
            -->
            <div v-if="this.activeWork == 1" class="flex flex-col gap-2 relative">
                <label for="ElectricityBill">Le montant actuelle de la facture d'électricité</label>
                <input type="number" id="ElectricityBill" v-model="createWorkForm.currentElectricityBill" :class="createWorkForm.errors.currentElectricityBill ? 'border-red-400' : ''">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="createWorkForm.errors.currentElectricityBill">*</span>
                <span class="text-red-400 text-sm" v-if="createWorkForm.errors.currentElectricityBill">{{ createWorkForm.errors.currentElectricityBill }}</span>
            </div>
            <div v-if="this.activeWork == 1" class="flex flex-col gap-2 relative">
                <label for="kilowattsPerYear">Combien de kilowatts consommer par an ?</label>
                <input type="number" id="kilowattsPerYear" v-model="createWorkForm.kilowattsPerYear" :class="createWorkForm.errors.kilowattsPerYear ? 'border-red-400' : ''">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="createWorkForm.errors.kilowattsPerYear">*</span>
                <span class="text-red-400 text-sm" v-if="createWorkForm.errors.kilowattsPerYear">{{ createWorkForm.errors.kilowattsPerYear }}</span>
            </div>
            <div v-if="this.activeWork == 1" class="flex flex-col gap-2 relative">
                <label for="taxIncome">Quel est le revenu total de votre foyer fiscal ?</label>
                <input type="number" id="taxIncome" v-model="createWorkForm.taxIncome" :class="createWorkForm.errors.taxIncome ? 'border-red-400' : ''">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="createWorkForm.errors.taxIncome">*</span>
                <span class="text-red-400 text-sm" v-if="createWorkForm.errors.taxIncome">{{ createWorkForm.errors.taxIncome }}</span>
            </div>
            <div v-if="this.activeWork == 1" class="flex flex-col gap-2 relative">
                <label for="roofType">Vous avez quel type de toiture ?</label>
                <select id="roofType" v-model="createWorkForm.roofType" :class="createWorkForm.errors.roofType ? 'border-red-400' : '' ">
                    <option disabled selected>Selectionner un type de toiture</option>
                    <option value="La toiture plate" >La toiture plate</option>
                    <option value="La toiture en pente" >La toiture en pente</option>
                </select>
                <span class="text-red-400 text-sm" v-if="createWorkForm.errors.roofType">{{ createWorkForm.errors.roofType }}</span>

            </div>
            <div v-if="this.activeWork == 1" class="flex flex-col gap-2 relative">
                <label for="roofOrientation">Quel est l'orientation de votre toiture ?</label>
                <select id="roofOrientation" v-model="createWorkForm.roofOrientation" :class="createWorkForm.errors.roofOrientation ? 'border-red-400' : '' ">
                    <option disabled selected>Selectionner une orientation</option>
                    <option value="Sud" >Sud</option>
                    <option value="Est - Ouest" >Est - Ouest</option>
                    <option value="Sud - Est" >Sud - Est</option>
                    <option value="Sud - Ouest" >Sud - Ouest</option>
                </select>
                <span class="text-red-400 text-sm" v-if="createWorkForm.errors.roofOrientation">{{ createWorkForm.errors.roofOrientation }}</span>

            </div>

            <!-- interieur -->
            <div v-if="this.activeWork == 8" class="flex flex-col gap-2 relative">
                <label for="interieurSurface">Murs Intérieur Surface m²</label>
                <input type="number" id="interieurSurface" v-model="createWorkForm.interieurSurface" :class="createWorkForm.errors.interieurSurface ? 'border-red-400' : ''">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="createWorkForm.errors.interieurSurface">*</span>
                <span class="text-red-400 text-sm" v-if="createWorkForm.errors.interieurSurface">{{ createWorkForm.errors.interieurSurface }}</span>
            </div>

            <!-- exterieur -->
            <div v-if="activeWork == 9" class="flex flex-col gap-2 relative">
                <label for="exterieurSurface">Murs Extérieur Surface m²</label>
                <input type="number" id="exterieurSurface" v-model="createWorkForm.exterieurSurface" :class="createWorkForm.errors.exterieurSurface ? 'border-red-400' : '' ">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="createWorkForm.errors.exterieurSurface">*</span>
                <span class="text-red-400 text-sm" v-if="createWorkForm.errors.exterieurSurface">{{ createWorkForm.errors.exterieurSurface }}</span>
            </div>

            <div v-if="activeWork == 9" class="flex flex-col gap-2 relative">
                <label for="exterieurRevetement">Murs Extérieur Revetement</label>
                <select id="exterieurRevetement" v-model="createWorkForm.exterieurRevetement" :class="createWorkForm.errors.exterieurRevetement ? 'border-red-400' : '' ">
                    <option value="extérieur sous enduit" :selected="createWorkForm.exterieurRevetement == 'extérieur sous enduit'">Extérieur sous enduit</option>
                    <option value="extérieur sous bardage" :selected="createWorkForm.exterieurRevetement == 'extérieur sous bardage'">Extérieur sous bardage</option>
                </select>
                <span class="text-red-400 text-sm" v-if="createWorkForm.errors.exterieurRevetement">{{ createWorkForm.errors.exterieurRevetement }}</span>
            </div>

            <!-- pompe -->
            <div v-if="activeWork == 5" class="flex flex-col gap-2 relative">
                <label for="surfaceChauffee">Surface chauffee par la pompe à chaleur m²</label>
                <input type="number" id="surfaceChauffee" v-model="createWorkForm.surfaceChauffee" :class="createWorkForm.errors.surfaceChauffee ? 'border-red-400' : '' ">
                <span class="text-red-400 text-lg absolute right-2 top-9" v-if="createWorkForm.errors.surfaceChauffee">*</span>
                <span class="text-red-400 text-sm" v-if="createWorkForm.errors.surfaceChauffee">{{ createWorkForm.errors.surfaceChauffee }}</span>
            </div>

            <div v-if="activeWork == 5" class="flex flex-col gap-2 relative">
                <label for="eauChaudeSanitaire">Eau Chaude Sanitaire</label>
                <select id="eauChaudeSanitaire" v-model="createWorkForm.eauChaudeSanitaire" :class="createWorkForm.errors.eauChaudeSanitaire ? 'border-red-400' : '' ">
                    <option value="Chauffage seul" :selected="createWorkForm.eauChaudeSanitaire == 'Chauffage seul'">Chauffage seul</option>
                    <option value="Chauffage eau chaude sanitaire" :selected="createWorkForm.eauChaudeSanitaire == 'Chauffage eau chaude sanitaire'">Chauffage eau chaude sanitaire</option>
                </select>
                <span class="text-red-400 text-sm" v-if="createWorkForm.errors.eauChaudeSanitaire">{{ createWorkForm.errors.eauChaudeSanitaire }}</span>
            </div>

            <div v-if="activeWork == 5" class="flex flex-col gap-2 relative">
                <label for="EspaceExterieur">Espace Extérieur pour la pompe à chaleur ?</label>
                <select id="EspaceExterieur" v-model="createWorkForm.EspaceExterieur" :class="createWorkForm.errors.EspaceExterieur ? 'border-red-400' : '' ">
                    <option value="1" :selected="createWorkForm.EspaceExterieur == 1">Oui</option>
                    <option value="0" :selected="createWorkForm.EspaceExterieur == 0">Non</option>
                </select>
                <span class="text-red-400 text-sm" v-if="createWorkForm.errors.EspaceExterieur">{{ createWorkForm.errors.EspaceExterieur }}</span>
            </div>

            <input type="button" @click.prevent="createWork" value="Enregister" class="uppercase m-auto mt-8 py-4 px-12 font-bold cursor-pointer bg-slate-300 text-white hover:bg-slate-400">
        </form>
    </div>
</template>
<script>
import { useForm } from '@inertiajs/vue3'
import { router } from '@inertiajs/vue3'
import { ref } from 'vue'
export default {
    props:['view'],
    emits:['current'],
    data() {
        return {
            interieur: false,
            exterieur: false,
            pompe: false,
            photovoltaique: false,

            activeWork: null,
            
            successMessage: null,
            errorMessage: null,
            
            viewCreateWork: false,

            reviewState: useForm({
                state: this.view.reviewState,
            }),
            clientInfos: useForm({
                gender: this.view.client.gender,
                lastName: this.view.client.lastName,
                firstName: this.view.client.firstName,
                phone: this.view.client.phone,
                email: this.view.client.email,
                logementType: this.view.logementType, 
                logementConstruction: this.view.logementConstruction,
                logementSurface: this.view.logementSurface,
                logementEnergie: this.view.logementEnergie,
                logementEnergieType: this.view.logementEnergieType,
            }),
            projectForm: useForm({
                currentElectricityBill: this.view.currentElectricityBill,
                kilowattsPerYear: this.view.kilowattsPerYear,
                taxIncome: this.view.taxIncome,
                roofType: this.view.roofType,
                roofOrientation: this.view.roofOrientation,
                interieurSurface: this.view.interieurSurface,
                exterieurSurface: this.view.exterieurSurface,
                exterieurRevetement: this.view.exterieurRevetement,
                surfaceChauffee: this.view.surfaceChauffee,
                eauChaudeSanitaire: this.view.eauChaudeSanitaire,
                EspaceExterieur: this.view.EspaceExterieur,
                statusProjet: this.view.statusProjet,
                travauxAdresse: this.view.travauxAdresse,
                utilisateurStatus: this.view.utilisateurStatus,
                menageComposition: this.view.menageComposition,
                menageRevenus: this.view.menageRevenus,
            }),
            createWorkForm: useForm({
                work: null,
                interieurSurface: '',
                exterieurSurface: '',
                exterieurRevetement: '',
                surfaceChauffee: '',
                eauChaudeSanitaire: '',
                EspaceExterieur: '',
                currentElectricityBill: '',
                kilowattsPerYear: '',
                taxIncome: '',
                roofType: '',
                roofOrientation: '',
            }),

        }
    },
    mounted() {
        this.getActiveQuestions();
    },
    methods: {
        loadQuestions(event) {
            let workId = event.target.value;
            
            if(workId == 1)             
                this.activeWork = 1;
            else if(workId == 5)
                this.activeWork = 5;
            else if(workId == 8)
                this.activeWork = 8
            else if(workId == 9)
                this.activeWork = 9;
            else this.activeWork = null;

        },
        getActiveQuestions() {
            let works = this.view.works;

            this.interieur = false;
            this.exterieur = false;
            this.pompe = false;
            this.photovoltaique = false;

            for(let i = 0;i < works.length; i++ ) {
                if(works[i].name == 'Panneaux Solaires Photovoltaïques')
                    this.photovoltaique = true;

                if(works[i].name == 'Murs intérieur')
                    this.interieur = true;

                if(works[i].name == 'Murs extérieur')
                    this.exterieur = true;

                if(works[i].name == 'Pompe à chaleur')
                    this.pompe = true
            }
        },
        delete(workId, i) {
            let orderId = this.view.id; 

            router.get('/delete-work', { workID: workId, orderID: orderId }, { 
                preserveState: true,
                preserveScroll: true,
                onBefore: () => confirm('Est ce que vous etes sur de vouloir supprimer le travaux?'),
                onSuccess: () => {
                        this.view.works.splice(i, 1);
                        this.getActiveQuestions();
                        this.successMessage = this.$page.props.flash.message;
                        setTimeout(() => { this.successMessage = null }, 4000)
                    },
            });
        },
        UpdateClientInfos() {
            let form = this.clientInfos,
            errors = this.clientInfos.errors,

            pattern_text = /^[a-z ]+$/i,
            pattern_number = /^\d{1,3}$/,
            pattern_phone = /^(0)?[0-9]{9}$/,
            pattern_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
            /* lastName */
            if(!pattern_text.test(form.lastName)) {
                errors.lastName = 'Le Nom est requis contenir des alphabets!';
                return;
            } else errors.lastName = null;

            /* firstName */
            if(!pattern_text.test(form.firstName)) {
                errors.firstName = 'Le Prénom est requis contenir des alphabets!';
                return;
            } else errors.firstName = null;

            /* phone */
            if(!pattern_phone.test(form.phone)) {
                errors.phone = 'Le Téléphone est requise dois contenu 10 chiffres !';
                return;
            } else errors.phone = null;

            /* email */
            if(!pattern_email.test(form.email)) {
                errors.email = 'Adresse e-mail valide requise!';
                return;
            } else errors.email = null;

            /* logementSurface */
            if(!pattern_number.test(form.logementSurface)) {
                errors.logementSurface = 'Le champ Logement Surface requis contenant 3 chiffres au max!';
                return;
            } else errors.logementSurface = null;
           
            /* logementSurface */
            if(!pattern_number.test(form.logementSurface)) {
                errors.logementSurface = 'Le champ Logement Surface requis contenant 3 chiffres au max!';
                return;
            } else errors.logementSurface = null;
            
            /* logementEnergieType */
            if(form.logementEnergie == 'Chauffage au fioul' || form.logementEnergie == 'Chauffage électrique' || form.logementEnergie == 'Chauffage au gaz') {
                if(this.$refs.energyType.value == '') {
                    errors.logementEnergieType = 'Le champ Logement Energie Type est requis!';
                    return;
                } else errors.logementEnergieType = null;
            } else errors.logementEnergieType = null;

            if(errors.firstName == null && errors.lastName == null && errors.phone == null && errors.email == null && errors.logementSurface == null && errors.logementEnergieType == null )
            this.clientInfos.post('/update-client/'+this.view.id, { 
                preserveScroll: true, 
                preserveState: true, 
            });
        },
        UpdateProjectForm() {
            let form = this.projectForm,
            errors = this.projectForm.errors,

            pattern_text = /^[a-z ]+$/i,
            pattern_number = /^\d{1,3}$/,
            pattern_Adresse = /^[a-z0-9 ]+$/i

            if(this.photovoltaique && !pattern_number.test(form.currentElectricityBill)) {
                errors.currentElectricityBill = 'Le champ requis. contenant des chiffres au max!';
                return;
            } else errors.currentElectricityBill = null;

            if(this.photovoltaique && !pattern_number.test(form.kilowattsPerYear)) {
                errors.kilowattsPerYear = 'Le champ requis. contenant des chiffres au max!';
                return;
            } else errors.kilowattsPerYear = null;
           
            if(this.photovoltaique && !pattern_number.test(form.taxIncome)) {
                errors.taxIncome = 'Le champ requis. contenant des chiffres au max!';
                return;
            } else errors.taxIncome = null;
            
            if(this.photovoltaique && form.roofType == '') {
                errors.roofType = 'Le champ requis!';
                return;
            } else errors.roofType = null;
            
            if(this.photovoltaique && form.roofOrientation == '') {
                errors.roofOrientation = 'Le champ requis!';
                return;
            } else errors.roofOrientation = null;

            /* interieurSurface */
            if(this.interieur == true && !pattern_number.test(form.interieurSurface)) {
                errors.interieurSurface = 'Le champ requis. contenant 3 chiffres au max!';
                return;
            } else errors.interieurSurface = null;

            /* exterieurSurface */
            if(this.exterieur == true && !pattern_number.test(form.exterieurSurface)) {
                errors.exterieurSurface = 'Le champ requis. contenant 3 chiffres au max!';
                return;
            } else errors.exterieurSurface = null;

            /* surfaceChauffee */
            if(this.pompe == true && !pattern_number.test(form.surfaceChauffee)) {
                errors.surfaceChauffee = 'Le champ est requis. contenant 3 chiffres au max!';
                return;
            } else errors.surfaceChauffee = null;

            /* travauxAdresse */
            if(!pattern_Adresse.test(form.travauxAdresse)) {
                errors.travauxAdresse = 'Veuillez fournir une adresse domicile valide!';
                return
            } else errors.travauxAdresse = null;

            /* menageComposition */
            if(!pattern_number.test(form.menageComposition)) {
                errors.menageComposition = 'Le champ requis. max 3 chiffres';
                return
            } else errors.menageComposition = null;
            

            if(errors.interieurSurface == null && errors.exterieurSurface == null && errors.surfaceChauffee == null && errors.travauxAdresse == null && errors.menageComposition == null)
            this.projectForm.post('/update-order/'+this.view.id, { 
                preserveScroll: true, 
                preserveState: true, 
            });
        },
        createWork() {
            let form = this.createWorkForm,
            errors = this.createWorkForm.errors,

            pattern_number = /^\d{1,3}$/;

            if(form.work == null) {
                errors.work = 'Veuillez sélectionner un travaux!';
                return;
            } else errors.work = null;

            /* pannaux photovoltaique */
            if(this.activeWork == 1 && !pattern_number.test(form.currentElectricityBill)) {
                errors.currentElectricityBill = 'Le champ requis. contenant des chiffres au max!';
                return;
            } else errors.currentElectricityBill = null;

            if(this.activeWork == 1 && !pattern_number.test(form.kilowattsPerYear)) {
                errors.kilowattsPerYear = 'Le champ requis. contenant des chiffres au max!';
                return;
            } else errors.kilowattsPerYear = null;
           
            if(this.activeWork == 1 && !pattern_number.test(form.taxIncome)) {
                errors.taxIncome = 'Le champ requis. contenant des chiffres au max!';
                return;
            } else errors.taxIncome = null;
            
            if(this.activeWork == 1 && form.roofType == '') {
                errors.roofType = 'Le champ requis!';
                return;
            } else errors.roofType = null;
            
            if(this.activeWork == 1 && form.roofOrientation == '') {
                errors.roofOrientation = 'Le champ requis!';
                return;
            } else errors.roofOrientation = null;

            /* interieurSurface */
            if(this.activeWork == 8 && !pattern_number.test(form.interieurSurface)) {
                errors.interieurSurface = 'Le champ requis. contenant 3 chiffres au max!';
                return;
            } else errors.interieurSurface = null;

            /* exterieurSurface */
            if(this.activeWork == 9 && !pattern_number.test(form.exterieurSurface)) {
                errors.exterieurSurface = 'Le champ requis. contenant 3 chiffres au max!';
                return;
            } else errors.exterieurSurface = null;

            if(this.activeWork == 9 && form.exterieurRevetement == '') {
                errors.exterieurRevetement = 'Le champ requis!';
                return;
            } else errors.exterieurRevetement = null;

            /* surfaceChauffee */
            if(this.activeWork == 5 && !pattern_number.test(form.surfaceChauffee)) {
                errors.surfaceChauffee = 'Le champ est requis. contenant 3 chiffres au max!';
                return;
            } else errors.surfaceChauffee = null;

            if(this.activeWork == 5 && form.eauChaudeSanitaire == '') {
                errors.eauChaudeSanitaire = 'Le champ est requis!';
                return;
            } else errors.eauChaudeSanitaire = null;

            if(this.activeWork == 5 && form.EspaceExterieur == '') {
                errors.EspaceExterieur = 'Le champ est requis!';
                return;
            } else errors.EspaceExterieur = null;

            let worked = '';

            if(
                errors.work == null && 
                errors.currentElectricityBill == null && 
                errors.kilowattsPerYear == null && 
                errors.taxIncome == null && 
                errors.roofType == null && 
                errors.roofOrientation == null && 
                errors.interieurSurface == null && 
                errors.exterieurSurface == null && 
                errors.exterieurRevetement == null && 
                errors.surfaceChauffee == null && 
                errors.eauChaudeSanitaire == null && 
                errors.EspaceExterieur == null 
            ) 

            this.createWorkForm.post('/create-work/' + this.view.id, {
                preserveScroll: true,
                onSuccess: () => {
                       this.viewCreateWork = false;

                        if(this.$page.props.flash.message) { 
                            this.$page.props.works.forEach(work => {
                                if(work.id == form.work)
                                    worked = work.name
                            });

                            this.view.works.push({id:form.work, name:worked});
                            
                            if(form.work == 1) {
                                this.projectForm.currentElectricityBill = this.createWorkForm.currentElectricityBill;
                                this.projectForm.kilowattsPerYear = this.createWorkForm.kilowattsPerYear;
                                this.projectForm.taxIncome = this.createWorkForm.taxIncome;
                                this.projectForm.roofType = this.createWorkForm.roofType;
                                this.projectForm.roofOrientation = this.createWorkForm.roofOrientation;
                                this.photovoltaique = true;
                            }
                            else if(form.work == 8) {
                                this.projectForm.interieurSurface = this.createWorkForm.interieurSurface
                                this.interieur = true;
                            }
                            else if(form.work == 9){
                                this.projectForm.exterieurSurface = this.createWorkForm.exterieurSurface
                                this.projectForm.exterieurRevetement = this.createWorkForm.exterieurRevetement

                                this.exterieur = true;
                            }
                            else if(form.work == 5) {
                                this.projectForm.surfaceChauffee = this.createWorkForm.surfaceChauffee
                                this.projectForm.eauChaudeSanitaire = this.createWorkForm.eauChaudeSanitaire
                                this.projectForm.EspaceExterieur = this.createWorkForm.EspaceExterieur

                                this.pompe = true;
                            }
                            this.successMessage = this.$page.props.flash.message;
                            setTimeout(() => { this.successMessage = null }, 4000)
                        }
                        else if(this.$page.props.flash.error) {
                            this.errorMessage = this.$page.props.flash.error
                            setTimeout(() => { this.errorMessage = null }, 4000)
                        }
                },
            });
        },
        UpdateReviewState() {
            this.reviewState.post('/review-state/' + this.view.id, {
                preserveScroll: true,
            });
        }
    }
}
</script>

<style scoped>
form label{
    font-weight: bold;
    font-size: .8em;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input,select{
    font-size: .9em;
    border-radius: 3px;
}
</style>
import { useForm, router } from "@inertiajs/vue3";
import { useSSRContext } from "vue";
import { ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const viewOrder_vue_vue_type_style_index_0_scoped_4625d493_lang = "";
const _sfc_main = {
  props: ["view"],
  emits: ["current"],
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
        state: this.view.reviewState
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
        logementEnergieType: this.view.logementEnergieType
      }),
      projectForm: useForm({
        currentElectricityBill: this.view.currentElectricityBill,
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
        menageRevenus: this.view.menageRevenus
      }),
      createWorkForm: useForm({
        work: null,
        interieurSurface: "",
        exterieurSurface: "",
        exterieurRevetement: "",
        surfaceChauffee: "",
        eauChaudeSanitaire: "",
        EspaceExterieur: "",
        currentElectricityBill: "",
        roofType: "",
        roofOrientation: ""
      })
    };
  },
  mounted() {
    this.getActiveQuestions();
  },
  methods: {
    loadQuestions(event) {
      let workId = event.target.value;
      if (workId == 1)
        this.activeWork = 1;
      else if (workId == 5)
        this.activeWork = 5;
      else if (workId == 8)
        this.activeWork = 8;
      else if (workId == 9)
        this.activeWork = 9;
      else
        this.activeWork = null;
    },
    getActiveQuestions() {
      let works = this.view.works;
      this.interieur = false;
      this.exterieur = false;
      this.pompe = false;
      this.photovoltaique = false;
      for (let i = 0; i < works.length; i++) {
        if (works[i].name == "Panneaux Solaires Photovoltaïques")
          this.photovoltaique = true;
        if (works[i].name == "Murs intérieur")
          this.interieur = true;
        if (works[i].name == "Murs extérieur")
          this.exterieur = true;
        if (works[i].name == "Pompe à chaleur")
          this.pompe = true;
      }
    },
    delete(workId, i) {
      let orderId = this.view.id;
      router.get("/orders/delete-work", { workID: workId, orderID: orderId }, {
        preserveState: true,
        preserveScroll: true,
        onBefore: () => confirm("Est ce que vous etes sur de vouloir supprimer le travaux?"),
        onSuccess: () => {
          this.view.works.splice(i, 1);
          this.getActiveQuestions();
          this.successMessage = this.$page.props.flash.message;
          setTimeout(() => {
            this.successMessage = null;
          }, 4e3);
        }
      });
    },
    UpdateClientInfos() {
      let form = this.clientInfos, errors = this.clientInfos.errors, pattern_text = /^[a-z ]+$/i, pattern_number = /^\d{1,3}$/, pattern_phone = /^(0)?[0-9]{9}$/, pattern_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!pattern_text.test(form.lastName)) {
        errors.lastName = "Le Nom est requis contenir des alphabets!";
        return;
      } else
        errors.lastName = null;
      if (!pattern_text.test(form.firstName)) {
        errors.firstName = "Le Prénom est requis contenir des alphabets!";
        return;
      } else
        errors.firstName = null;
      if (!pattern_phone.test(form.phone)) {
        errors.phone = "Le Téléphone est requise dois contenu 10 chiffres !";
        return;
      } else
        errors.phone = null;
      if (!pattern_email.test(form.email)) {
        errors.email = "Adresse e-mail valide requise!";
        return;
      } else
        errors.email = null;
      if (!pattern_number.test(form.logementSurface)) {
        errors.logementSurface = "Le champ Logement Surface requis contenant 3 chiffres au max!";
        return;
      } else
        errors.logementSurface = null;
      if (!pattern_number.test(form.logementSurface)) {
        errors.logementSurface = "Le champ Logement Surface requis contenant 3 chiffres au max!";
        return;
      } else
        errors.logementSurface = null;
      if (form.logementEnergie == "Chauffage au fioul" || form.logementEnergie == "Chauffage électrique" || form.logementEnergie == "Chauffage au gaz") {
        if (this.$refs.energyType.value == "") {
          errors.logementEnergieType = "Le champ Logement Energie Type est requis!";
          return;
        } else
          errors.logementEnergieType = null;
      } else
        errors.logementEnergieType = null;
      if (errors.firstName == null && errors.lastName == null && errors.phone == null && errors.email == null && errors.logementSurface == null && errors.logementEnergieType == null)
        this.clientInfos.post("/orders/update-client/" + this.view.id, {
          preserveScroll: true,
          preserveState: true
        });
    },
    UpdateProjectForm() {
      let form = this.projectForm, errors = this.projectForm.errors, pattern_number = /^\d{1,3}$/, pattern_Adresse = /^[a-z0-9 ]+$/i;
      if (this.photovoltaique && !pattern_number.test(form.currentElectricityBill)) {
        errors.currentElectricityBill = "Le champ requis. contenant des chiffres au max!";
        return;
      } else
        errors.currentElectricityBill = null;
      if (this.photovoltaique && form.roofType == "") {
        errors.roofType = "Le champ requis!";
        return;
      } else
        errors.roofType = null;
      if (this.photovoltaique && form.roofOrientation == "") {
        errors.roofOrientation = "Le champ requis!";
        return;
      } else
        errors.roofOrientation = null;
      if (this.interieur == true && !pattern_number.test(form.interieurSurface)) {
        errors.interieurSurface = "Le champ requis. contenant 3 chiffres au max!";
        return;
      } else
        errors.interieurSurface = null;
      if (this.exterieur == true && !pattern_number.test(form.exterieurSurface)) {
        errors.exterieurSurface = "Le champ requis. contenant 3 chiffres au max!";
        return;
      } else
        errors.exterieurSurface = null;
      if (this.pompe == true && !pattern_number.test(form.surfaceChauffee)) {
        errors.surfaceChauffee = "Le champ est requis. contenant 3 chiffres au max!";
        return;
      } else
        errors.surfaceChauffee = null;
      if (!pattern_Adresse.test(form.travauxAdresse)) {
        errors.travauxAdresse = "Veuillez fournir une adresse domicile valide!";
        return;
      } else
        errors.travauxAdresse = null;
      if (!pattern_number.test(form.menageComposition)) {
        errors.menageComposition = "Le champ requis. max 3 chiffres";
        return;
      } else
        errors.menageComposition = null;
      if (errors.interieurSurface == null && errors.exterieurSurface == null && errors.surfaceChauffee == null && errors.travauxAdresse == null && errors.menageComposition == null)
        this.projectForm.post("/orders/update-order/" + this.view.id, {
          preserveScroll: true,
          preserveState: true
        });
    },
    createWork() {
      let form = this.createWorkForm, errors = this.createWorkForm.errors, pattern_number = /^\d{1,3}$/;
      if (form.work == null) {
        errors.work = "Veuillez sélectionner un travaux!";
        return;
      } else
        errors.work = null;
      if (this.activeWork == 1 && !pattern_number.test(form.currentElectricityBill)) {
        errors.currentElectricityBill = "Le champ requis. contenant des chiffres au max!";
        return;
      } else
        errors.currentElectricityBill = null;
      if (this.activeWork == 1 && form.roofType == "") {
        errors.roofType = "Le champ requis!";
        return;
      } else
        errors.roofType = null;
      if (this.activeWork == 1 && form.roofOrientation == "") {
        errors.roofOrientation = "Le champ requis!";
        return;
      } else
        errors.roofOrientation = null;
      if (this.activeWork == 8 && !pattern_number.test(form.interieurSurface)) {
        errors.interieurSurface = "Le champ requis. contenant 3 chiffres au max!";
        return;
      } else
        errors.interieurSurface = null;
      if (this.activeWork == 9 && !pattern_number.test(form.exterieurSurface)) {
        errors.exterieurSurface = "Le champ requis. contenant 3 chiffres au max!";
        return;
      } else
        errors.exterieurSurface = null;
      if (this.activeWork == 9 && form.exterieurRevetement == "") {
        errors.exterieurRevetement = "Le champ requis!";
        return;
      } else
        errors.exterieurRevetement = null;
      if (this.activeWork == 5 && !pattern_number.test(form.surfaceChauffee)) {
        errors.surfaceChauffee = "Le champ est requis. contenant 3 chiffres au max!";
        return;
      } else
        errors.surfaceChauffee = null;
      if (this.activeWork == 5 && form.eauChaudeSanitaire == "") {
        errors.eauChaudeSanitaire = "Le champ est requis!";
        return;
      } else
        errors.eauChaudeSanitaire = null;
      if (this.activeWork == 5 && form.EspaceExterieur == "") {
        errors.EspaceExterieur = "Le champ est requis!";
        return;
      } else
        errors.EspaceExterieur = null;
      let worked = "";
      if (errors.work == null && errors.currentElectricityBill == null && errors.roofType == null && errors.roofOrientation == null && errors.interieurSurface == null && errors.exterieurSurface == null && errors.exterieurRevetement == null && errors.surfaceChauffee == null && errors.eauChaudeSanitaire == null && errors.EspaceExterieur == null)
        this.createWorkForm.post("/orders/create-work/" + this.view.id, {
          preserveScroll: true,
          onSuccess: () => {
            this.viewCreateWork = false;
            if (this.$page.props.flash.message) {
              this.$page.props.works.forEach((work) => {
                if (work.id == form.work)
                  worked = work.name;
              });
              this.view.works.push({ id: form.work, name: worked });
              if (form.work == 1) {
                this.projectForm.currentElectricityBill = this.createWorkForm.currentElectricityBill;
                this.projectForm.roofType = this.createWorkForm.roofType;
                this.projectForm.roofOrientation = this.createWorkForm.roofOrientation;
                this.photovoltaique = true;
              } else if (form.work == 8) {
                this.projectForm.interieurSurface = this.createWorkForm.interieurSurface;
                this.interieur = true;
              } else if (form.work == 9) {
                this.projectForm.exterieurSurface = this.createWorkForm.exterieurSurface;
                this.projectForm.exterieurRevetement = this.createWorkForm.exterieurRevetement;
                this.exterieur = true;
              } else if (form.work == 5) {
                this.projectForm.surfaceChauffee = this.createWorkForm.surfaceChauffee;
                this.projectForm.eauChaudeSanitaire = this.createWorkForm.eauChaudeSanitaire;
                this.projectForm.EspaceExterieur = this.createWorkForm.EspaceExterieur;
                this.pompe = true;
              }
              this.successMessage = this.$page.props.flash.message;
              setTimeout(() => {
                this.successMessage = null;
              }, 4e3);
            } else if (this.$page.props.flash.error) {
              this.errorMessage = this.$page.props.flash.error;
              setTimeout(() => {
                this.errorMessage = null;
              }, 4e3);
            }
          }
        });
    },
    UpdateReviewState() {
      this.reviewState.post("/orders/review-state/" + this.view.id, {
        preserveScroll: true
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><span class="table cursor-pointer mb-8 bg-slate-50 hover:bg-slate-100 font-semibold py-3 px-4 rounded" data-v-4625d493>Retour</span><form class="flex flex-col gap-4 md:gap-8 p-6 mb-8 relative" data-v-4625d493><div class="flex flex-col md:flex-row p-4 md:p-0 md:justify-start md:items-end rounded bg-slate-50 md:bg-white gap-4" data-v-4625d493><div class="flex flex-col gap-2 w-full md:w-4/12" data-v-4625d493><label for="gender" data-v-4625d493>État d&#39;examen</label><select id="gender" data-v-4625d493><option value="en revue"${ssrIncludeBooleanAttr($props.view.reviewState == "en revue") ? " selected" : ""} data-v-4625d493>en revue</option><option value="confirmer"${ssrIncludeBooleanAttr($props.view.reviewState == "confirmer") ? " selected" : ""} data-v-4625d493>confirmer</option></select></div><input type="button" value="Enregister" class="uppercase py-3 px-12 font-bold cursor-pointer bg-slate-100 hover:bg-slate-200" data-v-4625d493>`);
  if (this.reviewState.recentlySuccessful) {
    _push(`<div class="text-center font-semibold py-3 text-green-400" data-v-4625d493> Enregistrée avec succès</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></form><form class="flex flex-col gap-4 md:gap-8 p-6 mb-8 border rounded relative" data-v-4625d493><legend class="text-xl capitalize font-bold bg-white px-2 absolute" style="${ssrRenderStyle({ "top": "-20px" })}" data-v-4625d493>information client </legend><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4" data-v-4625d493><div class="flex flex-col gap-2 w-full md:w-4/12" data-v-4625d493><label for="gender" data-v-4625d493>Genre</label><select id="gender" data-v-4625d493><option value="Madame"${ssrIncludeBooleanAttr($props.view.client.gender == "Madame") ? " selected" : ""} data-v-4625d493>Madame</option><option value="Monsieur"${ssrIncludeBooleanAttr($props.view.client.gender == "Monsieur") ? " selected" : ""} data-v-4625d493>Monsieur</option></select></div><div class="relative flex flex-col gap-2 w-full md:w-4/12" data-v-4625d493><label for="lastName" data-v-4625d493>Nom</label><input type="text" id="lastName"${ssrRenderAttr("value", this.clientInfos.lastName)} class="${ssrRenderClass($data.clientInfos.errors.lastName ? "border-red-400" : "")}" data-v-4625d493>`);
  if ($data.clientInfos.errors.lastName) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.clientInfos.errors.lastName)}</span></div><div class="relative flex flex-col gap-2 w-full md:w-4/12" data-v-4625d493><label for="firstName" data-v-4625d493>Prénom</label><input type="text" id="firstName"${ssrRenderAttr("value", this.clientInfos.firstName)} class="${ssrRenderClass($data.clientInfos.errors.firstName ? "border-red-400" : "")}" data-v-4625d493>`);
  if ($data.clientInfos.errors.firstName) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.clientInfos.errors.firstName)}</span></div></div><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4" data-v-4625d493><div class="relative flex flex-col gap-2 w-full md:w-6/12" data-v-4625d493><label for="phone" data-v-4625d493>Téléphone</label><input type="number" id="phone"${ssrRenderAttr("value", $data.clientInfos.phone)} class="${ssrRenderClass($data.clientInfos.errors.phone ? "border-red-400" : "")}" data-v-4625d493>`);
  if ($data.clientInfos.errors.phone) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.clientInfos.errors.phone)}</span></div><div class="relative flex flex-col gap-2 w-full md:w-6/12" data-v-4625d493><label for="email" data-v-4625d493>E mail</label><input type="email" id="email"${ssrRenderAttr("value", $data.clientInfos.email)} class="${ssrRenderClass($data.clientInfos.errors.email ? "border-red-400" : "")}" data-v-4625d493>`);
  if ($data.clientInfos.errors.email) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.clientInfos.errors.email)}</span></div></div><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4" data-v-4625d493><div class="flex flex-col gap-2 w-full md:w-4/12" data-v-4625d493><label for="logementType" data-v-4625d493>Logement Type</label><select id="logementType" data-v-4625d493><option value="maison"${ssrIncludeBooleanAttr($props.view.logementType == "maison") ? " selected" : ""} data-v-4625d493>Maison</option><option value="appartement"${ssrIncludeBooleanAttr($props.view.logementType == "appartement") ? " selected" : ""} data-v-4625d493>Appartement</option></select></div><div class="flex flex-col gap-2 w-full md:w-4/12" data-v-4625d493><label for="logementConstruction" data-v-4625d493>Logement Construction</label><select id="logementConstruction" data-v-4625d493><option value="-2"${ssrIncludeBooleanAttr($props.view.logementConstruction == "-2") ? " selected" : ""} data-v-4625d493>Moins de 2 ans</option><option value="2-15"${ssrIncludeBooleanAttr($props.view.logementConstruction == "2-15") ? " selected" : ""} data-v-4625d493>Entre 2 ans et 15 ans</option><option value="+15"${ssrIncludeBooleanAttr($props.view.logementConstruction == "+15") ? " selected" : ""} data-v-4625d493>Plus de 15 ans</option></select></div><div class="relative flex flex-col gap-2 w-full md:w-4/12" data-v-4625d493><label for="logementSurface" data-v-4625d493>Logement Surface m²</label><input type="number" id="logementSurface"${ssrRenderAttr("value", $data.clientInfos.logementSurface)} class="${ssrRenderClass($data.clientInfos.errors.logementSurface ? "border-red-400" : "")}" data-v-4625d493>`);
  if ($data.clientInfos.errors.logementSurface) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.clientInfos.errors.logementSurface)}</span></div></div><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4" data-v-4625d493><div class="flex flex-col gap-2 w-full md:w-6/12" data-v-4625d493><label for="logementEnergie" data-v-4625d493>Logement Energie</label><select id="logementEnergie" data-v-4625d493><option value="Chauffage au fioul"${ssrIncludeBooleanAttr($props.view.logementEnergie == "Chauffage au fioul") ? " selected" : ""} data-v-4625d493> Chauffage au fioul</option><option value="Chauffage électrique"${ssrIncludeBooleanAttr($props.view.logementEnergie == "Chauffage électrique") ? " selected" : ""} data-v-4625d493> Chauffage électrique</option><option value="Chauffage au gaz"${ssrIncludeBooleanAttr($props.view.logementEnergie == "Chauffage au gaz") ? " selected" : ""} data-v-4625d493>Chauffage au gaz </option><option value="Chauffage au bois"${ssrIncludeBooleanAttr($props.view.logementEnergie == "Chauffage au bois") ? " selected" : ""} data-v-4625d493>Chauffage au bois</option><option value="Pompe à chaleur"${ssrIncludeBooleanAttr($props.view.logementEnergie == "Pompe à chaleur") ? " selected" : ""} data-v-4625d493>Pompe à chaleur </option><option value="Chauffage au charbon"${ssrIncludeBooleanAttr($props.view.logementEnergie == "Chauffage au charbon") ? " selected" : ""} data-v-4625d493> Chauffage au charbon</option></select></div><div class="relative flex flex-col gap-2 w-full md:w-6/12" data-v-4625d493>`);
  if ($data.clientInfos.logementEnergie == "Chauffage au fioul" || $data.clientInfos.logementEnergie == "Chauffage électrique" || $data.clientInfos.logementEnergie == "Chauffage au gaz") {
    _push(`<label for="energieType" data-v-4625d493> Energie type</label>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.clientInfos.logementEnergie == "Chauffage au fioul") {
    _push(`<select id="energieType" class="${ssrRenderClass($data.clientInfos.errors.logementEnergieType ? "border-red-400" : "")}" data-v-4625d493><option value="Chaudière à condensation"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Chaudière à condensation") ? " selected" : ""} data-v-4625d493>Chaudière à condensation </option><option value="Chaudière classique"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Chaudière classique") ? " selected" : ""} data-v-4625d493>Chaudière classique </option><option value="Poêle"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Poêle") ? " selected" : ""} data-v-4625d493>Poêle</option></select>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.clientInfos.logementEnergie == "Chauffage électrique") {
    _push(`<select id="energieType" class="${ssrRenderClass($data.clientInfos.errors.logementEnergieType ? "border-red-400" : "")}" data-v-4625d493><option value="Chaudière électrique"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Chaudière électrique") ? " selected" : ""} data-v-4625d493>Chaudière électrique </option><option value="Plafonds ou planchers chauffants"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Plafonds ou planchers chauffants") ? " selected" : ""} data-v-4625d493>Plafonds ou planchers chauffants</option><option value="Radiateurs électriques"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Radiateurs électriques") ? " selected" : ""} data-v-4625d493>Radiateurs électriques </option></select>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.clientInfos.logementEnergie == "Chauffage au gaz") {
    _push(`<select id="energieType" class="${ssrRenderClass($data.clientInfos.errors.logementEnergieType ? "border-red-400" : "")}" data-v-4625d493><option value="Chaudière à condensation gaz"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Chaudière à condensation gaz") ? " selected" : ""} data-v-4625d493>Chaudière à condensation gaz</option><option value="Chaudière classique gaz"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Chaudière classique gaz") ? " selected" : ""} data-v-4625d493>Chaudière classique gaz </option><option value="Radiateurs électriques"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Radiateurs électriques") ? " selected" : ""} data-v-4625d493>Radiateur au gaz </option><option value="Poêle au gaz"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Poêle au gaz") ? " selected" : ""} data-v-4625d493>Poêle au gaz </option></select>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.clientInfos.errors.logementEnergieType) {
    _push(`<span class="text-red-400 text-lg absolute right-8 top-9 z-50" data-v-4625d493>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.clientInfos.errors.logementEnergieType)}</span></div></div>`);
  if (this.clientInfos.recentlySuccessful) {
    _push(`<div class="text-center font-semibold text-green-400" data-v-4625d493>Enregistrée avec succès</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input type="button" value="Enregister" class="uppercase m-auto py-4 px-12 font-bold cursor-pointer bg-slate-100 hover:bg-slate-200" data-v-4625d493></form><form class="flex flex-col gap-4 md:gap-8 p-6 border rounded relative" data-v-4625d493><legend class="text-xl capitalize font-bold bg-white px-2 absolute" style="${ssrRenderStyle({ "top": "-20px" })}" data-v-4625d493>l&#39;étude de projet </legend><div class="flex flex-col gap-4" data-v-4625d493><div class="flex gap-4 items-center" data-v-4625d493><label data-v-4625d493>Travaux demandés</label><a class="text-sm font-semibold bg-slate-50 hover:bg-slate-100 cursor-pointer p-2 rounded" data-v-4625d493> Créé travaux</a></div><div class="flex gap-4 flex-wrap" data-v-4625d493><!--[-->`);
  ssrRenderList(this.view.works, (work, i) => {
    _push(`<div class="relative p-4 bg-slate-50 rounded" data-v-4625d493>${ssrInterpolate(work.name)} <span class="absolute text-xl cursor-pointer flex leading-4 group" style="${ssrRenderStyle({ "top": "-10px", "right": "-2px" })}" data-v-4625d493><span class="text-xs text-white bg-red-400 rounded-sm opacity-0 group-hover:opacity-100" data-v-4625d493>Supprimer</span><i class="fa-solid fa-delete-left text-red-400" data-v-4625d493></i></span></div>`);
  });
  _push(`<!--]--></div>`);
  if (this.successMessage != null) {
    _push(`<span class="text-green-400 text-sm font-semibold" data-v-4625d493>${ssrInterpolate(this.successMessage)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (this.errorMessage != null) {
    _push(`<span class="text-red-400 text-sm font-semibold" data-v-4625d493>${ssrInterpolate(this.errorMessage)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-8 flex-wrap" data-v-4625d493>`);
  if (this.photovoltaique) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="ElectricityBill" data-v-4625d493>Le montant actuelle de la facture d&#39;électricité</label><input type="number" id="ElectricityBill"${ssrRenderAttr("value", $data.projectForm.currentElectricityBill)} class="${ssrRenderClass($data.projectForm.errors.currentElectricityBill ? "border-red-400" : "")}" data-v-4625d493>`);
    if ($data.projectForm.errors.currentElectricityBill) {
      _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.projectForm.errors.currentElectricityBill) {
      _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.projectForm.errors.currentElectricityBill)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.photovoltaique) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="roofType" data-v-4625d493>Vous avez quel type de toiture ?</label><select id="roofType" class="${ssrRenderClass($data.projectForm.errors.roofType ? "border-red-400" : "")}" data-v-4625d493><option disabled selected data-v-4625d493>Selectionner un type de toiture</option><option value="La toiture plate" data-v-4625d493>La toiture plate</option><option value="La toiture en pente" data-v-4625d493>La toiture en pente</option></select>`);
    if ($data.projectForm.errors.roofType) {
      _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.projectForm.errors.roofType)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.photovoltaique) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="roofOrientation" data-v-4625d493>Quel est l&#39;orientation de votre toiture ?</label><select id="roofOrientation" class="${ssrRenderClass($data.projectForm.errors.roofOrientation ? "border-red-400" : "")}" data-v-4625d493><option disabled selected data-v-4625d493>Selectionner une orientation</option><option value="Sud" data-v-4625d493>Sud</option><option value="Est - Ouest" data-v-4625d493>Est - Ouest</option><option value="Sud - Est" data-v-4625d493>Sud - Est</option><option value="Sud - Ouest" data-v-4625d493>Sud - Ouest</option></select>`);
    if ($data.projectForm.errors.roofOrientation) {
      _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.projectForm.errors.roofOrientation)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.interieur) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="interieurSurface" data-v-4625d493>Murs Intérieur Surface m²</label><input type="number" id="interieurSurface"${ssrRenderAttr("value", $data.projectForm.interieurSurface)} class="${ssrRenderClass($data.projectForm.errors.interieurSurface ? "border-red-400" : "")}" data-v-4625d493>`);
    if ($data.projectForm.errors.interieurSurface) {
      _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.projectForm.errors.interieurSurface)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.exterieur) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="exterieurSurface" data-v-4625d493>Murs Extérieur Surface m²</label><input type="number" id="exterieurSurface"${ssrRenderAttr("value", $data.projectForm.exterieurSurface)} class="${ssrRenderClass($data.projectForm.errors.exterieurSurface ? "border-red-400" : "")}" data-v-4625d493>`);
    if ($data.projectForm.errors.exterieurSurface) {
      _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.projectForm.errors.exterieurSurface)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.exterieur) {
    _push(`<div class="flex flex-col gap-2" data-v-4625d493><label for="exterieurRevetement" data-v-4625d493>Murs Extérieur Revetement</label><select id="exterieurRevetement" data-v-4625d493><option value="extérieur sous enduit"${ssrIncludeBooleanAttr($data.projectForm.exterieurRevetement == "extérieur sous enduit") ? " selected" : ""} data-v-4625d493>Extérieur sous enduit </option><option value="extérieur sous bardage"${ssrIncludeBooleanAttr($data.projectForm.exterieurRevetement == "extérieur sous bardage") ? " selected" : ""} data-v-4625d493>Extérieur sous bardage </option></select></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.pompe) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="surfaceChauffee" data-v-4625d493>Surface chauffee par la pompe à chaleur m²</label><input type="number" id="surfaceChauffee"${ssrRenderAttr("value", $data.projectForm.surfaceChauffee)} class="${ssrRenderClass($data.projectForm.errors.surfaceChauffee ? "border-red-400" : "")}" data-v-4625d493>`);
    if ($data.projectForm.errors.surfaceChauffee) {
      _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.projectForm.errors.surfaceChauffee)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.pompe) {
    _push(`<div class="flex flex-col gap-2" data-v-4625d493><label for="eauChaudeSanitaire" data-v-4625d493>Eau Chaude Sanitaire</label><select id="eauChaudeSanitaire" data-v-4625d493><option value="Chauffage seul"${ssrIncludeBooleanAttr($data.projectForm.eauChaudeSanitaire == "Chauffage seul") ? " selected" : ""} data-v-4625d493> Chauffage seul</option><option value="Chauffage eau chaude sanitaire"${ssrIncludeBooleanAttr($data.projectForm.eauChaudeSanitaire == "Chauffage eau chaude sanitaire") ? " selected" : ""} data-v-4625d493>Chauffage eau chaude sanitaire</option></select></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.pompe) {
    _push(`<div class="flex flex-col gap-2" data-v-4625d493><label for="EspaceExterieur" data-v-4625d493>Espace Extérieur pour la pompe à chaleur ?</label><select id="EspaceExterieur" data-v-4625d493><option value="1"${ssrIncludeBooleanAttr($data.projectForm.EspaceExterieur == 1) ? " selected" : ""} data-v-4625d493>Oui</option><option value="0"${ssrIncludeBooleanAttr($data.projectForm.EspaceExterieur == 0) ? " selected" : ""} data-v-4625d493>Non</option></select></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4" data-v-4625d493><div class="flex flex-col gap-2 w-full md:w-4/12" data-v-4625d493><label for="statusProjet" data-v-4625d493>Status Projet</label><select id="statusProjet" data-v-4625d493><option value="Je réfléchis à mes travaux"${ssrIncludeBooleanAttr($data.projectForm.statusProjet == "Je réfléchis à mes travaux") ? " selected" : ""} data-v-4625d493>Je réfléchis à mes travaux </option><option value="Je recherche un artisan RGE"${ssrIncludeBooleanAttr($data.projectForm.statusProjet == "Je recherche un artisan RGE") ? " selected" : ""} data-v-4625d493>Je recherche un artisan RGE </option><option value="Je vais signer mon devis"${ssrIncludeBooleanAttr($data.projectForm.statusProjet == "Je vais signer mon devis") ? " selected" : ""} data-v-4625d493>Je vais signer mon devis </option></select></div><div class="flex flex-col gap-2 w-full md:w-4/12 relative" data-v-4625d493><label for="travauxAdresse" data-v-4625d493>Travaux Adresse</label><input type="text" id="travauxAdresse"${ssrRenderAttr("value", $data.projectForm.travauxAdresse)} class="${ssrRenderClass($data.projectForm.errors.travauxAdresse ? "border-red-400" : "")}" data-v-4625d493>`);
  if ($data.projectForm.errors.travauxAdresse) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.projectForm.errors.travauxAdresse)}</span></div><div class="flex flex-col gap-2 w-full md:w-4/12" data-v-4625d493><label for="utilisateurStatus" data-v-4625d493>Utilisateur Status</label><select id="utilisateurStatus" data-v-4625d493><option value="Propriétaire occupant"${ssrIncludeBooleanAttr($data.projectForm.utilisateurStatus == "Propriétaire occupant") ? " selected" : ""} data-v-4625d493>Propriétaire occupant </option><option value="Propriétaire d&#39;une résidence secondaire"${ssrIncludeBooleanAttr($data.projectForm.utilisateurStatus == "Propriétaire d'une résidence secondaire") ? " selected" : ""} data-v-4625d493> Propriétaire d&#39;une résidence secondaire</option><option value="Propriétaire bailleur"${ssrIncludeBooleanAttr($data.projectForm.utilisateurStatus == "Propriétaire bailleur") ? " selected" : ""} data-v-4625d493>Propriétaire bailleur </option><option value="Locataire"${ssrIncludeBooleanAttr($data.projectForm.utilisateurStatus == "Locataire") ? " selected" : ""} data-v-4625d493>Locataire </option></select></div></div><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4" data-v-4625d493><div class="flex flex-col gap-2 w-full md:w-6/12 relative" data-v-4625d493><label for="menageComposition" data-v-4625d493>Menage Composition</label><input type="number" id="menageComposition"${ssrRenderAttr("value", $data.projectForm.menageComposition)} class="${ssrRenderClass($data.projectForm.errors.menageComposition ? "border-red-400" : "")}" data-v-4625d493>`);
  if ($data.projectForm.errors.menageComposition) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.projectForm.errors.menageComposition)}</span></div><div class="flex flex-col gap-2 w-full md:w-6/12" data-v-4625d493><label for="menageRevenus" data-v-4625d493>Menage Revenus</label><select id="menageRevenus" data-v-4625d493><option value="Inférieur à 16 229 €"${ssrIncludeBooleanAttr($data.projectForm.menageRevenus == "Inférieur à 16 229 €") ? " selected" : ""} data-v-4625d493> Inférieur à 16 229 €</option><option value="Entre 16 229 € et 20 805 €"${ssrIncludeBooleanAttr($data.projectForm.menageRevenus == "Entre 16 229 € et 20 805 €") ? " selected" : ""} data-v-4625d493>Entre 16 229 € et 20 805 € </option><option value="Entre 20 805 € et 29 148 €"${ssrIncludeBooleanAttr($data.projectForm.menageRevenus == "Entre 20 805 € et 29 148 €") ? " selected" : ""} data-v-4625d493>Entre 20 805 € et 29 148 € </option><option value="Supérieur à 29 148 €"${ssrIncludeBooleanAttr($data.projectForm.menageRevenus == "Supérieur à 29 148 €") ? " selected" : ""} data-v-4625d493> Supérieur à 29 148 €</option></select></div></div>`);
  if (this.projectForm.recentlySuccessful) {
    _push(`<div class="text-center font-semibold text-green-400" data-v-4625d493>Enregistrée avec succès</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input type="button" value="Enregister" class="uppercase m-auto py-4 px-12 font-bold cursor-pointer bg-slate-100 hover:bg-slate-200" data-v-4625d493></form>`);
  if ($data.viewCreateWork == true) {
    _push(`<div class="fixed top-0 left-0 right-0 bottom-0 bg-slate-100 py-2 px-12 md:px-36 md:py-6 overflow-y-scroll" style="${ssrRenderStyle({ "-ms-overflow-style": "none", "scrollbar-width": "none" })}" data-v-4625d493><span class="table cursor-pointer mb-8 bg-white hover:bg-slate-50 font-semibold py-3 px-4 rounded" data-v-4625d493> Annuler</span><form class="flex flex-col gap-6 md:w-8/12 md:mx-auto" data-v-4625d493><div class="flex flex-col gap-2 relative" data-v-4625d493><label for="travaux" class="capitalize" data-v-4625d493>Selectionner un travail</label><select id="travaux" class="${ssrRenderClass($data.createWorkForm.errors.work ? "border-red-400" : "")}" data-v-4625d493><option value="" selected disabled hidden data-v-4625d493>Choisir ici</option><!--[-->`);
    ssrRenderList(this.$page.props.works, (work) => {
      _push(`<option${ssrRenderAttr("value", work.id)} data-v-4625d493>${ssrInterpolate(work.name)}</option>`);
    });
    _push(`<!--]--></select>`);
    if ($data.createWorkForm.errors.work) {
      _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.createWorkForm.errors.work)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if (this.activeWork == 1) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="ElectricityBill" data-v-4625d493>Le montant actuelle de la facture d&#39;électricité</label><input type="number" id="ElectricityBill"${ssrRenderAttr("value", $data.createWorkForm.currentElectricityBill)} class="${ssrRenderClass($data.createWorkForm.errors.currentElectricityBill ? "border-red-400" : "")}" data-v-4625d493>`);
      if ($data.createWorkForm.errors.currentElectricityBill) {
        _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.createWorkForm.errors.currentElectricityBill) {
        _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.createWorkForm.errors.currentElectricityBill)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (this.activeWork == 1) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="roofType" data-v-4625d493>Vous avez quel type de toiture ?</label><select id="roofType" class="${ssrRenderClass($data.createWorkForm.errors.roofType ? "border-red-400" : "")}" data-v-4625d493><option disabled selected data-v-4625d493>Selectionner un type de toiture</option><option value="La toiture plate" data-v-4625d493>La toiture plate</option><option value="La toiture en pente" data-v-4625d493>La toiture en pente</option></select>`);
      if ($data.createWorkForm.errors.roofType) {
        _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.createWorkForm.errors.roofType)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (this.activeWork == 1) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="roofOrientation" data-v-4625d493>Quel est l&#39;orientation de votre toiture ?</label><select id="roofOrientation" class="${ssrRenderClass($data.createWorkForm.errors.roofOrientation ? "border-red-400" : "")}" data-v-4625d493><option disabled selected data-v-4625d493>Selectionner une orientation</option><option value="Sud" data-v-4625d493>Sud</option><option value="Est - Ouest" data-v-4625d493>Est - Ouest</option><option value="Sud - Est" data-v-4625d493>Sud - Est</option><option value="Sud - Ouest" data-v-4625d493>Sud - Ouest</option></select>`);
      if ($data.createWorkForm.errors.roofOrientation) {
        _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.createWorkForm.errors.roofOrientation)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (this.activeWork == 8) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="interieurSurface" data-v-4625d493>Murs Intérieur Surface m²</label><input type="number" id="interieurSurface"${ssrRenderAttr("value", $data.createWorkForm.interieurSurface)} class="${ssrRenderClass($data.createWorkForm.errors.interieurSurface ? "border-red-400" : "")}" data-v-4625d493>`);
      if ($data.createWorkForm.errors.interieurSurface) {
        _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.createWorkForm.errors.interieurSurface) {
        _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.createWorkForm.errors.interieurSurface)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.activeWork == 9) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="exterieurSurface" data-v-4625d493>Murs Extérieur Surface m²</label><input type="number" id="exterieurSurface"${ssrRenderAttr("value", $data.createWorkForm.exterieurSurface)} class="${ssrRenderClass($data.createWorkForm.errors.exterieurSurface ? "border-red-400" : "")}" data-v-4625d493>`);
      if ($data.createWorkForm.errors.exterieurSurface) {
        _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.createWorkForm.errors.exterieurSurface) {
        _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.createWorkForm.errors.exterieurSurface)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.activeWork == 9) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="exterieurRevetement" data-v-4625d493>Murs Extérieur Revetement</label><select id="exterieurRevetement" class="${ssrRenderClass($data.createWorkForm.errors.exterieurRevetement ? "border-red-400" : "")}" data-v-4625d493><option value="extérieur sous enduit"${ssrIncludeBooleanAttr($data.createWorkForm.exterieurRevetement == "extérieur sous enduit") ? " selected" : ""} data-v-4625d493>Extérieur sous enduit </option><option value="extérieur sous bardage"${ssrIncludeBooleanAttr($data.createWorkForm.exterieurRevetement == "extérieur sous bardage") ? " selected" : ""} data-v-4625d493>Extérieur sous bardage </option></select>`);
      if ($data.createWorkForm.errors.exterieurRevetement) {
        _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.createWorkForm.errors.exterieurRevetement)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.activeWork == 5) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="surfaceChauffee" data-v-4625d493>Surface chauffee par la pompe à chaleur m²</label><input type="number" id="surfaceChauffee"${ssrRenderAttr("value", $data.createWorkForm.surfaceChauffee)} class="${ssrRenderClass($data.createWorkForm.errors.surfaceChauffee ? "border-red-400" : "")}" data-v-4625d493>`);
      if ($data.createWorkForm.errors.surfaceChauffee) {
        _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-4625d493>*</span>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.createWorkForm.errors.surfaceChauffee) {
        _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.createWorkForm.errors.surfaceChauffee)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.activeWork == 5) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="eauChaudeSanitaire" data-v-4625d493>Eau Chaude Sanitaire</label><select id="eauChaudeSanitaire" class="${ssrRenderClass($data.createWorkForm.errors.eauChaudeSanitaire ? "border-red-400" : "")}" data-v-4625d493><option value="Chauffage seul"${ssrIncludeBooleanAttr($data.createWorkForm.eauChaudeSanitaire == "Chauffage seul") ? " selected" : ""} data-v-4625d493> Chauffage seul</option><option value="Chauffage eau chaude sanitaire"${ssrIncludeBooleanAttr($data.createWorkForm.eauChaudeSanitaire == "Chauffage eau chaude sanitaire") ? " selected" : ""} data-v-4625d493>Chauffage eau chaude sanitaire</option></select>`);
      if ($data.createWorkForm.errors.eauChaudeSanitaire) {
        _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.createWorkForm.errors.eauChaudeSanitaire)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.activeWork == 5) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-4625d493><label for="EspaceExterieur" data-v-4625d493>Espace Extérieur pour la pompe à chaleur ?</label><select id="EspaceExterieur" class="${ssrRenderClass($data.createWorkForm.errors.EspaceExterieur ? "border-red-400" : "")}" data-v-4625d493><option value="1"${ssrIncludeBooleanAttr($data.createWorkForm.EspaceExterieur == 1) ? " selected" : ""} data-v-4625d493>Oui</option><option value="0"${ssrIncludeBooleanAttr($data.createWorkForm.EspaceExterieur == 0) ? " selected" : ""} data-v-4625d493>Non</option></select>`);
      if ($data.createWorkForm.errors.EspaceExterieur) {
        _push(`<span class="text-red-400 text-sm" data-v-4625d493>${ssrInterpolate($data.createWorkForm.errors.EspaceExterieur)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<input type="button" value="Enregister" class="uppercase m-auto mt-8 py-4 px-12 font-bold cursor-pointer bg-slate-300 text-white hover:bg-slate-400" data-v-4625d493></form></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/viewOrder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OrderView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4625d493"]]);
export {
  OrderView as default
};

import { Head, useForm } from "@inertiajs/vue3";
import { G as GuestLayout } from "./GuestLayout-36a367d8.js";
import LogementType from "./LogementType-79ae6937.js";
import LogementConstruction from "./LogementConstruction-0f8027e9.js";
import LogementSurface from "./LogementSurface-24176c26.js";
import LogementEnergie from "./LogementEnergie-062f6017.js";
import EnergieType from "./EnergieType-a5c9aecf.js";
import selectTravaux from "./selectTravaux-41b5fd4b.js";
import isolationSurface from "./isolationSurface-eec36a16.js";
import isolationRevetement from "./isolationRevetement-7f1f96a3.js";
import statusProject from "./statusProject-8778bb0b.js";
import surfaceChauffe from "./surfaceChauffee-83949b9f.js";
import chaudeSanitaire from "./chaudeSanitaire-5f85fd78.js";
import spaceExterior from "./spaceExterior-c5a00d6e.js";
import travauxAddress from "./travauxAddress-c15c7680.js";
import utilisateurStatut from "./utilisateurStatut-9d26d8f0.js";
import menageComposition from "./menageCompos-6efe1109.js";
import menageRevenus from "./menageRevenus-5042a6b6.js";
import utilisateurIdentite from "./utilisateurIdentite-6ae00efb.js";
import utilisateurTelephone from "./utilisateurTelephone-e7d6107d.js";
import utilisateurEmail from "./utilisateurMail-901c89e4.js";
import electricityBill from "./ElectricityBill-e9dcd421.js";
import RoofType from "./RoofType-2947ff3f.js";
import RoofOrientation from "./RoofOrientations-887ac996.js";
import CodePostal from "./codePostal-27a1dfcd.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./btnDevis-59098679.js";
const _sfc_main = {
  props: ["currentWork"],
  layout: GuestLayout,
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
      errors_text: "",
      current: "utilisateurIdentite",
      previous: "",
      next: "",
      FormData: useForm({
        LogementType: "maison",
        LogementConstruction: "2-15",
        LogementSurface: "",
        LogementEnergie: "Chauffage électrique",
        LogementEnergieType: "",
        TravauxIds: [],
        currentElectricityBill: "",
        roofType: "",
        roofOrientation: "",
        InteriorSurface: "",
        ExteriorSurface: "",
        ExterieurRevetement: "extérieur sous enduit",
        SurfaceChauffee: "",
        EauChaudeSanitaire: "Chauffage eau chaude sanitaire",
        EspaceExterior: true,
        StatusProject: "Je recherche un artisan RGE",
        TravauxAdresse: "",
        UtilisateurStatus: "Propriétaire occupant",
        MenageComposition: 2,
        MenageRevenus: "Entre 16 229 € et 20 805 €",
        Client: {
          FirstName: "",
          LastName: "",
          Gender: "",
          PhoneNumber: "",
          CodePostal: "",
          EMail: ""
        }
      })
    };
  },
  methods: {
    fakeHeight() {
      document.getElementById("fakeButton").style.height = this.$refs.nextButton.clientHeight + "px";
    },
    getPrevious() {
      this.errors = false;
      this.next = this.current;
      this.current = this.previous;
    },
    getNext() {
      if (!this.errors) {
        this.previous = this.current;
        this.current = this.next;
      }
    },
    getLogementType(value) {
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
      if (value == "Chauffage au fioul" || value == "Chauffage électrique" || value == "Chauffage au gaz")
        this.next = "typeEnergie";
      else
        this.next = "userStatut";
      this.FormData.LogementEnergie = value;
      this.getNext();
    },
    getEnergieType(value) {
      this.FormData.LogementEnergieType = value;
      this.errors = false;
      this.getNext();
    },
    getWorksIds(value) {
      this.FormData.TravauxIds = value;
      if (this.FormData.TravauxIds.length > 0)
        this.errors = false;
      else
        this.errors = true;
      if (this.FormData.TravauxIds.includes(1))
        this.next = "electricityBill";
      else if (this.FormData.TravauxIds.includes(8))
        this.next = "interiorSurface";
      else if (this.FormData.TravauxIds.includes(9))
        this.next = "exteriorSurface";
      else if (this.FormData.TravauxIds.includes(5))
        this.next = "surfaceChauffee";
      else
        this.next = "statusProjet";
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
      this.FormData.MenageRevenus = value;
      this.getNext();
    },
    getGender(value) {
      this.FormData.Client.Gender = value;
    },
    getFirstName(value) {
      this.FormData.Client.FirstName = value;
    },
    getLastName(value) {
      this.FormData.Client.LastName = value;
    },
    getPhoneNumber(value) {
      this.FormData.Client.PhoneNumber = value;
    },
    getCodePostal(value) {
      this.FormData.Client.CodePostal = value;
    },
    getEmail(value) {
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
    if (this.currentWork != null)
      this.FormData.TravauxIds.push(this.currentWork.id);
  },
  updated() {
    if (this.current == "utilisateurIdentite") {
      if (this.FormData.Client.FirstName == "") {
        this.errors_text = "Le prénom est requis";
        this.errors = true;
      } else if (this.FormData.Client.LastName == "") {
        this.errors_text = "Le nom est requis";
        this.errors = true;
      } else if (this.FormData.Client.Gender == "") {
        this.errors_text = "Sélectionner le genre";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.next = "utilisateurTelephone";
    } else if (this.current == "utilisateurTelephone") {
      if (this.FormData.Client.PhoneNumber == "") {
        this.errors_text = "Le numero de téléphone est requis!";
        this.errors = true;
      } else if (this.FormData.Client.PhoneNumber.length < 10)
        this.errors = true;
      else {
        this.errors_text = "";
        this.errors = false;
      }
      this.previous = "utilisateurIdentite";
      this.next = "utilisateurEmail";
    } else if (this.current == "utilisateurEmail") {
      if (this.FormData.Client.EMail == "") {
        this.errors_text = "Adresse mail est requis!";
        this.errors = true;
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.FormData.Client.EMail)) {
        this.errors_text = "Adresse mail n'est pas valide!";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.previous = "utilisateurTelephone";
      this.next = "travauxAdresse";
    } else if (this.current == "travauxAdresse") {
      if (this.FormData.TravauxAdresse.length == 0) {
        this.errors_text = "Ce champ est obligatoire";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.previous = "utilisateurEmail";
      this.next = "codePostal";
    } else if (this.current == "codePostal") {
      if (this.FormData.Client.CodePostal == "") {
        this.errors_text = "Code Postal est requis!";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.previous = "travauxAdresse";
      if (this.FormData.TravauxIds.includes(10))
        this.next = "travaux";
      else
        this.next = "type";
    } else if (this.current == "type") {
      this.next = "construc";
      this.previous = "travauxAdresse";
    } else if (this.current == "construc") {
      this.next = "surface";
      this.previous = "type";
    } else if (this.current == "surface") {
      if (this.FormData.LogementSurface.length == 0) {
        this.errors_text = "Ce champ est obligatoire";
        this.errors = true;
      } else if (this.FormData.LogementSurface > 800) {
        this.errors_text = "La surface doit être comprise entre 1 et 800.";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.next = "energie";
      this.previous = "construc";
    } else if (this.current == "energie") {
      this.FormData.LogementEnergieType = "";
      let value = this.FormData.LogementEnergie;
      if (value == "Chauffage au fioul" || value == "Chauffage électrique" || value == "Chauffage au gaz")
        this.next = "typeEnergie";
      else
        this.next = "userStatut";
      this.previous = "surface";
    } else if (this.current == "typeEnergie") {
      if (this.FormData.LogementEnergieType == "")
        this.errors = true;
      else
        this.errors = false;
      this.next = "userStatut";
      this.previous = "energie";
    } else if (this.current == "userStatut") {
      this.next = "menageCompos";
      this.previous = "energie";
    } else if (this.current == "menageCompos") {
      this.previous = "userStatut";
      this.next = "menageReven";
    } else if (this.current == "menageReven") {
      this.previous = "menageCompos";
      this.next = "travaux";
    } else if (this.current == "travaux") {
      if (this.FormData.TravauxIds.length == 0)
        this.errors = true;
      else
        this.errors = false;
      if (this.FormData.TravauxIds.includes(1))
        this.next = "electricityBill";
      else if (this.FormData.TravauxIds.includes(8))
        this.next = "interiorSurface";
      else if (this.FormData.TravauxIds.includes(9))
        this.next = "exteriorSurface";
      else if (this.FormData.TravauxIds.includes(5))
        this.next = "surfaceChauffee";
      else if (this.FormData.TravauxIds.includes(10))
        this.next = "done";
      else
        this.next = "statusProjet";
      this.previous = "utilisateurEmail";
    } else if (this.current == "electricityBill") {
      if (this.FormData.currentElectricityBill.length == 0) {
        this.errors_text = "Ce champ est obligatoire";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.previous = "travaux";
      this.next = "roofType";
    } else if (this.current == "roofType") {
      if (this.FormData.roofType.length == 0) {
        this.errors = true;
      } else {
        this.errors = false;
      }
      this.previous = "travaux";
      this.next = "roofOrientation";
    } else if (this.current == "roofOrientation") {
      if (this.FormData.roofOrientation.length == 0) {
        this.errors_text = "veuillez sélectionner une orientation";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.previous = "roofType";
      if (this.FormData.TravauxIds.includes(8))
        this.next = "interiorSurface";
      else if (this.FormData.TravauxIds.includes(9))
        this.next = "exteriorSurface";
      else if (this.FormData.TravauxIds.includes(5))
        this.next = "surfaceChauffee";
      else
        this.next = "statusProjet";
    } else if (this.current == "interiorSurface") {
      if (this.FormData.InteriorSurface.length == 0) {
        this.errors_text = "Ce champ est obligatoire";
        this.errors = true;
      } else if (this.FormData.InteriorSurface > 800) {
        this.errors_text = "La surface doit être comprise entre 1 et 800.";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      if (this.FormData.TravauxIds.includes(9))
        this.next = "exteriorSurface";
      else if (this.FormData.TravauxIds.includes(5))
        this.next = "surfaceChauffee";
      else
        this.next = "statusProjet";
      this.previous = "travaux";
    } else if (this.current == "exteriorSurface") {
      if (this.FormData.ExteriorSurface.length == 0) {
        this.errors_text = "Ce champ est obligatoire";
        this.errors = true;
      } else if (this.FormData.ExteriorSurface > 800) {
        this.errors_text = "La surface doit être comprise entre 1 et 800.";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.next = "exteriorRevetement";
      this.previous = "travaux";
    } else if (this.current == "exteriorRevetement") {
      if (this.FormData.TravauxIds.includes(5)) {
        this.next = "surfaceChauffee";
        this.previous = "exteriorSurface";
      } else
        this.next = "statusProjet";
    } else if (this.current == "surfaceChauffee") {
      if (this.FormData.SurfaceChauffee.length == 0) {
        this.errors_text = "Ce champ est obligatoire";
        this.errors = true;
      } else if (this.FormData.SurfaceChauffee > 800) {
        this.errors_text = "La surface doit être comprise entre 1 et 800.";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.next = "chaudeSanitaire";
      this.previous = "travaux";
    } else if (this.current == "chaudeSanitaire") {
      this.next = "espaceExterior";
      this.previous = "surfaceChauffee";
    } else if (this.current == "espaceExterior") {
      this.next = "statusProjet";
      this.previous = "chaudeSanitaire";
    } else if (this.current == "statusProjet") {
      this.next = "done";
      this.previous = "travaux";
    } else if (this.current == "done") {
      if (this.request == true) {
        this.FormData.post(
          "/parcour",
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
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_utilisateurIdentite = resolveComponent("utilisateurIdentite");
  const _component_utilisateurTelephone = resolveComponent("utilisateurTelephone");
  const _component_utilisateurEmail = resolveComponent("utilisateurEmail");
  const _component_travauxAddress = resolveComponent("travauxAddress");
  const _component_CodePostal = resolveComponent("CodePostal");
  const _component_LogementType = resolveComponent("LogementType");
  const _component_LogementConstruction = resolveComponent("LogementConstruction");
  const _component_LogementSurface = resolveComponent("LogementSurface");
  const _component_LogementEnergie = resolveComponent("LogementEnergie");
  const _component_EnergieType = resolveComponent("EnergieType");
  const _component_utilisateurStatut = resolveComponent("utilisateurStatut");
  const _component_menageComposition = resolveComponent("menageComposition");
  const _component_menageRevenus = resolveComponent("menageRevenus");
  const _component_selectTravaux = resolveComponent("selectTravaux");
  const _component_electricityBill = resolveComponent("electricityBill");
  const _component_RoofType = resolveComponent("RoofType");
  const _component_RoofOrientation = resolveComponent("RoofOrientation");
  const _component_isolationSurface = resolveComponent("isolationSurface");
  const _component_isolationRevetement = resolveComponent("isolationRevetement");
  const _component_surfaceChauffe = resolveComponent("surfaceChauffe");
  const _component_chaudeSanitaire = resolveComponent("chaudeSanitaire");
  const _component_spaceExterior = resolveComponent("spaceExterior");
  const _component_statusProject = resolveComponent("statusProject");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Estimez votre prime énergie et demandez votre devis" }, null, _parent));
  _push(`<div class="flex"><div class="hidden md:block w-3/12 px-6 pt-12 bg-white overflow-hidden">`);
  if (this.current == "utilisateurIdentite" || this.current == "utilisateurTelephone" || this.current == "utilisateurEmail" || this.current == "travauxAdresse" || this.current == "codePostal") {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-20 bg-green-200 rounded-lg"> </span><p class="Capitalize font-bold text-black">Vos informations</p></div>`);
  } else {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-20 bg-gray-100 rounded-lg"> </span><p class="Capitalize font-bold text-gray-200">Vos informations</p></div>`);
  }
  if (this.current == "type" || this.current == "construc" || this.current == "surface" || this.current == "energie" || this.current == "typeEnergie" || this.current == "userStatut" || this.current == "menageCompos" || this.current == "menageReven") {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-12 bg-green-200 rounded-lg"> </span><p class="Capitalize font-bold text-black leading-10">Votre logement</p></div>`);
  } else {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-12 bg-gray-100 rounded-lg"> </span><p class="Capitalize font-bold text-gray-200 leading-10">Votre logement</p></div>`);
  }
  if (this.current == "travaux" || this.current == "electricityBill" || this.current == "kilowattsPerYear" || this.current == "taxIncome" || this.current == "roofType" || this.current == "roofOrientation" || this.current == "interiorSurface" || this.current == "exteriorSurface" || this.current == "exteriorRevetement" || this.current == "surfaceChauffee" || this.current == "chaudeSanitaire" || this.current == "espaceExterior" || this.current == "statusProjet") {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-12 bg-green-200 rounded-lg"> </span><p class="Capitalize font-bold text-black">Votre projet</p></div>`);
  } else {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-12 bg-gray-100 rounded-lg"> </span><p class="Capitalize font-bold text-gray-200">Votre projet</p></div>`);
  }
  if (this.current == "done") {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-4 bg-green-200 rounded-lg"> </span><p class="Capitalize font-bold text-black">Dernière étape</p></div>`);
  } else {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-20 bg-gray-100 rounded-lg"> </span><p class="Capitalize font-bold text-gray-200">Dernière étape</p></div>`);
  }
  _push(`</div><div class="relative w-full md:w-9/12 p-4 md:p-6 min-h-screen">`);
  if (this.current != "utilisateurIdentite" && this.current != "done") {
    _push(`<div class="inline-block mb-8 p-4 rounded hover:bg-slate-200 cursor-pointer"><i class="fa-solid fa-arrow-left" style="${ssrRenderStyle({ "color": "#74efa6" })}"></i>   <span class="font-semibold capitalize">retour</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div>`);
  if (this.current == "utilisateurIdentite") {
    _push(ssrRenderComponent(_component_utilisateurIdentite, {
      firstName: this.FormData.Client.FirstName,
      lastName: this.FormData.Client.LastName,
      gender: this.FormData.Client.Gender,
      error: this.errors_text,
      "onUpdate:firstName": $options.getFirstName,
      "onUpdate:lastName": $options.getLastName,
      onGenderValue: $options.getGender
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "utilisateurTelephone") {
    _push(ssrRenderComponent(_component_utilisateurTelephone, {
      phoneNumber: this.FormData.Client.PhoneNumber,
      error: this.errors_text,
      getNext: $options.getNext,
      onPhoneNumber: $options.getPhoneNumber
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "utilisateurEmail") {
    _push(ssrRenderComponent(_component_utilisateurEmail, {
      eMail: this.FormData.Client.EMail,
      error: this.errors_text,
      getNext: $options.getNext,
      onEMail: $options.getEmail
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "travauxAdresse") {
    _push(ssrRenderComponent(_component_travauxAddress, {
      TravauxAdresse: this.FormData.TravauxAdresse,
      error_address: this.errors_text,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getTravauxAdresse
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "codePostal") {
    _push(ssrRenderComponent(_component_CodePostal, {
      Code: this.FormData.Client.CodePostal,
      error_Postal: this.errors_text,
      getNext: $options.getNext,
      onCodePostal: $options.getCodePostal
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "type") {
    _push(ssrRenderComponent(_component_LogementType, {
      onLogementType: $options.getLogementType,
      LogementType: this.FormData.LogementType
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "construc") {
    _push(ssrRenderComponent(_component_LogementConstruction, {
      onLogementConstruction: $options.getLogementConstruction,
      LogementConstruction: this.FormData.LogementConstruction
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "surface") {
    _push(ssrRenderComponent(_component_LogementSurface, {
      modelValue: this.FormData.LogementSurface,
      error_surface: $data.errors_text,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getLogementSurface
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "energie") {
    _push(ssrRenderComponent(_component_LogementEnergie, {
      onLogementEnergie: $options.getLogementEnergie,
      LogementEnergie: this.FormData.LogementEnergie
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "typeEnergie") {
    _push(ssrRenderComponent(_component_EnergieType, {
      LogementEnergie: this.FormData.LogementEnergie,
      LogementEnergieType: this.FormData.LogementEnergieType,
      onEnergieType: $options.getEnergieType
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "userStatut") {
    _push(ssrRenderComponent(_component_utilisateurStatut, {
      UtilisateurStatus: this.FormData.UtilisateurStatus,
      onUtilisateurStatus: $options.getUtilisateurStatus
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "menageCompos") {
    _push(ssrRenderComponent(_component_menageComposition, {
      menageComposition: this.FormData.MenageComposition,
      "onUpdate:modelValue": $options.getMenageComposition
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "menageReven") {
    _push(ssrRenderComponent(_component_menageRevenus, {
      menageRevenus: this.FormData.MenageRevenus,
      onMenageRevenus: $options.getMenageRevenue
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "travaux") {
    _push(ssrRenderComponent(_component_selectTravaux, {
      worksIds: this.FormData.TravauxIds,
      currentWork: this.currentWork,
      onWorksIds: $options.getWorksIds
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "electricityBill") {
    _push(ssrRenderComponent(_component_electricityBill, {
      modelValue: this.FormData.currentElectricityBill,
      error: $data.errors_text,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getCurrentElectricityBill
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "roofType") {
    _push(ssrRenderComponent(_component_RoofType, {
      roofType: this.FormData.roofType,
      getNext: $options.getNext,
      onRoofType: $options.getRoofType
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "roofOrientation") {
    _push(ssrRenderComponent(_component_RoofOrientation, {
      roofOrientation: this.FormData.roofOrientation,
      getNext: $options.getNext,
      onRoofOrientation: $options.getRoofOrientation
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "interiorSurface") {
    _push(ssrRenderComponent(_component_isolationSurface, {
      murs: "intérieur",
      error_surface: this.errors_text,
      interiorSurface: this.FormData.InteriorSurface,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getInteriorSurface
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "exteriorSurface") {
    _push(ssrRenderComponent(_component_isolationSurface, {
      murs: "extérieur",
      error_surface: this.errors_text,
      interiorSurface: this.FormData.ExteriorSurface,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getExteriorSurface
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "exteriorRevetement") {
    _push(ssrRenderComponent(_component_isolationRevetement, {
      ExterieurRevetement: this.FormData.ExterieurRevetement,
      onExteriorRevetement: $options.getExteriorRevetement
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "surfaceChauffee") {
    _push(ssrRenderComponent(_component_surfaceChauffe, {
      surfaceChauffe: this.FormData.SurfaceChauffee,
      error_surface: this.errors_text,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getSurfaceChauffee
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "chaudeSanitaire") {
    _push(ssrRenderComponent(_component_chaudeSanitaire, {
      eauChaudeSanitaire: this.FormData.EauChaudeSanitaire,
      onEauChaudeSanitaire: $options.getEauChaudeSanitaire
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "espaceExterior") {
    _push(ssrRenderComponent(_component_spaceExterior, {
      EspaceExterior: this.FormData.EspaceExterior,
      onEspaceExterieur: $options.getEspaceExterieur
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "statusProjet") {
    _push(ssrRenderComponent(_component_statusProject, {
      statusProject: this.FormData.StatusProject,
      onStatusProject: $options.getStatusProject
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "done") {
    _push(`<div class="mt-6 md:mt-12"><p class="text-sm md:text-base font-bold w-full md:w-8/12 text-center p-8 md:p-12 m-auto !leading-loose text-slate-900 bg-slate-50 shadow rounded"> Merci pour le temps que vous avez consacré sur ce parcours, On va vous contacter prochainement pour vous accompagner dans votre projet. <a href="/" class="table mx-auto mt-6 p-4 text-sm rounded text-white bg-slate-500 hover:bg-slate-600">Ok Merci</a></p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (this.current != "done") {
    _push(`<div id="fakeButton"></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.current != "done") {
    _push(`<div class="fixed w-full py-4 bg-slate-100 flex left-0 bottom-0 md:left-1/4 md:w-9/12">`);
    if (this.errors == false) {
      _push(`<a class="cursor-pointer m-auto uppercase bg-gradient-to-r from-teal-500 to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-20 py-3 rounded-full font-bold text-white"> Suivant </a>`);
    } else {
      _push(`<a class="cursor-pointer m-auto uppercase bg-gradient-to-r from-gray-500 to-gray-200 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-20 py-3 rounded-full font-bold text-black"> Suivant </a>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};

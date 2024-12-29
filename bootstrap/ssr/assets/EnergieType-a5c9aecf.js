import { ssrRenderClass } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: ["LogementEnergie", "LogementEnergieType"],
  emits: ["energie-type"],
  methods: {
    goNext(value) {
      this.$emit("energie-type", value);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if ($props.LogementEnergie == "Chauffage au fioul") {
    _push(`<div><h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold">Quel type d&#39;équipement au fioul est installé ?</h3><p class="mt-8 text-center">Les chaudières installées depuis moins de 10 ans sont généralement à condensation</p><div class="md:w-10/12 grid md:grid-cols-3 gap-4 m-auto mt-8"><div class="${ssrRenderClass([this.LogementEnergieType == "Chaudière à condensation" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img class="w-24 md:w-36" src="/images/illustration/chaudiere_condensation.png" alt="fioul"><span class="font-bold md:text-sm">Chaudière à condensation</span>`);
    if (this.LogementEnergieType == "Chaudière à condensation") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Chaudière classique" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/chaudiere_classique.png" alt="fioul" class="w-24 md:w-36"><span class="font-bold md:text-sm">Chaudière classique</span>`);
    if (this.LogementEnergieType == "Chaudière classique") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Poêle" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/poele.png" alt="fioul" class="w-24 md:w-36"><span class="font-bold md:text-sm">Poêle</span>`);
    if (this.LogementEnergieType == "Poêle") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.LogementEnergie == "Chauffage électrique") {
    _push(`<div><h3 class="text-center text-lg md:text-2xl font-bold md:font-extrabold"> Quel type d&#39;équipement électrique est installé ? </h3><div class="md:w-10/12 grid md:grid-cols-3 gap-4 m-auto mt-8"><div class="${ssrRenderClass([this.LogementEnergieType == "Chaudière électrique" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/chaudiere_electrique.png" alt="electrique" class="w-24 md:w-36"><span class="font-bold md:text-sm">Chaudière électrique</span>`);
    if (this.LogementEnergieType == "Chaudière électrique") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Plafonds ou planchers chauffants" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/Plafonds_chauffants.png" alt="fioul" class="w-24 md:w-36"><span class="font-bold md:text-sm">Plafonds ou planchers chauffants</span>`);
    if (this.LogementEnergieType == "Plafonds ou planchers chauffants") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Radiateurs électriques" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/Radiateurs_électriques.png" alt="fioul" class="w-24 md:w-36"><span class="font-bold md:text-sm">Radiateurs électriques</span>`);
    if (this.LogementEnergieType == "Radiateurs électriques") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.LogementEnergie == "Chauffage au gaz") {
    _push(`<div><h3 class="text-center text-lg md:text-2xl font-bold md:font-extrabold">Quel type d&#39;équipement au gaz est installé ?</h3><p class="mt-8 text-center">Les chaudières installées depuis moins de 10 ans sont généralement à condensation</p><div class="w-full grid md:grid-cols-4 md:gap-4 gap-2 m-auto mt-8"><div class="${ssrRenderClass([this.LogementEnergieType == "Chaudière à condensation gaz" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/chaudiere_condensation_gaz.png" alt="gaz" class="w-24 md:w-36"><span class="font-bold md:text-sm">Chaudière à condensation</span>`);
    if (this.LogementEnergieType == "Chaudière à condensation gaz") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Chaudière classique gaz" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/chaudiere_classique_gaz.png" alt="gaz" class="w-24 md:w-36"><span class="font-bold md:text-sm">Chaudière classique</span>`);
    if (this.LogementEnergieType == "Chaudière classique gaz") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Radiateur au gaz" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/Radiateur_gaz.png" alt="gaz" class="w-24 md:w-36"><span class="font-bold md:text-sm">Radiateur au gaz</span>`);
    if (this.LogementEnergieType == "Radiateur au gaz") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Poêle au gaz" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/Poêle_gaz.png" alt="gaz" class="w-24 md:w-36"><span class="font-bold md:text-sm">Poêle au gaz</span>`);
    if (this.LogementEnergieType == "Poêle au gaz") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Logement/EnergieType.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const EnergieType = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  EnergieType as default
};

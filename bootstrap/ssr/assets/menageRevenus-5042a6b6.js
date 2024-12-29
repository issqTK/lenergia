import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  emits: ["menage-revenus"],
  props: ["menageRevenus"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-xl md:text-2xl font-extrabold mb-6 text-center">À combien s&#39;élève le revenu total de votre foyer fiscal ?</h3><p class="text-center mb-6">Le revenu fiscal de référence est utilisé pour calculer le montant de vos aides au plus juste.</p><div class="grid md:grid-cols-4 gap-4"><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/Inférieur à 16.png" alt="Inférieur à 16 229 €"><span class="font-bold text-center">Inférieur à 16 229 €</span>`);
  if (this.menageRevenus == "Inférieur à 16 229 €") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/Entre 16 et 20.png" alt="Entre 16 229 € et 20 805 €"><span class="font-bold text-center">Entre 16 229 € et 20 805 €</span>`);
  if (this.menageRevenus == "Entre 16 229 € et 20 805 €") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/Entre 16 et 29.png" alt="Entre 20 805 € et 29 148 €"><span class="font-bold text-center">Entre 20 805 € et 29 148 €</span>`);
  if (this.menageRevenus == "Entre 20 805 € et 29 148 €") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/Supérieur à 29.png" alt="Supérieur à 29 148 €"><span class="font-bold text-center">Supérieur à 29 148 €</span>`);
  if (this.menageRevenus == "Supérieur à 29 148 €") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/personalInfos/menageRevenus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const menageRevenus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  menageRevenus as default
};

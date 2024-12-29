import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  emits: ["logement-construction"],
  props: ["LogementConstruction"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center font-bold md:font-extrabold text-xl md:text-2xl break-word md:p-2 mb-6">De quand date la construction du logement concerné par les travaux? </h3><p class="text-center mb-6">Cela permet de nous assurer de votre éligibilité aux différentes aides.</p><div class="md:w-10/12 w-full m-auto grid md:grid-cols-3 gap-4"><div class="relative p-4 flex flex-col items-center justify-center gap-4 hover:shadow-xl cursor-pointer bg-white rounded"><img class="w-24 md:w-36" src="/images/illustration/31.png" alt="calendar"><span class="font-bold">Moins de 2 ans</span>`);
  if (this.LogementConstruction == "-2") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative p-4 flex flex-col items-center justify-center gap-4 hover:shadow-xl cursor-pointer bg-white rounded"><img class="w-24 md:w-36" src="/images/illustration/31-2.png" alt="calendar"><span class="font-bold">Entre 2 ans et 15 ans</span>`);
  if (this.LogementConstruction == "2-15") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative p-4 flex flex-col items-center justify-center gap-4 hover:shadow-xl cursor-pointer bg-white rounded"><img class="w-24 md:w-36" src="/images/illustration/31-3.png" alt="calendar"><span class="font-bold">Plus de 15 ans</span>`);
  if (this.LogementConstruction == "15+") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Logement/LogementConstruction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LogementConstruction = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LogementConstruction as default
};

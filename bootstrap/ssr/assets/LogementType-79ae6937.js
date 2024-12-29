import { ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: ["LogementType"],
  emits: ["logement-type"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="flex gap-4 items-center justify-center font-bold md:font-extrabold text-xl md:text-2xl mb-6"><img style="${ssrRenderStyle({ "width": "120px" })}" src="/images/illustration/fairy.png" alt="fairy"><span class="italic">Calculez vos aides et obtenez votre devis travaux</span></h3><span class="w-12 h-2 bg-green-200 m-auto mb-6 block rounded"></span><p class="font-bold md:font-extrabold text-lg md:text-2xl text-center mb-6">Votre projet concerne : </p><div class="flex gap-4 md:gap-6 justify-center"><div class="${ssrRenderClass([this.LogementType == "maison" ? "shadow-xl" : "", "bg-white p-4 md:p-8 w-40 md:w-auto rounded relative flex flex-col items-center gap-4 hover:shadow-xl cursor-pointer"])}"><img class="w-24 md:w-36" src="/images/illustration/house.png" alt="une maison"><span class="font-semibold md:font-bold text-sm md:text-base">Une maison</span>`);
  if (this.LogementType == "maison") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="${ssrRenderClass([this.LogementType == "appartement" ? "shadow-xl" : "", "bg-white p-4 md:p-8 w-40 md:w-auto rounded relative flex flex-col items-center gap-4 hover:shadow-xl cursor-pointer"])}"><img class="w-24 md:w-36" src="/images/illustration/apartment.png" alt="un appartement"><span class="font-semibold md:font-bold text-sm md:text-base">Un appartement</span>`);
  if (this.LogementType == "appartement") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Logement/LogementType.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LogementType = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LogementType as default
};

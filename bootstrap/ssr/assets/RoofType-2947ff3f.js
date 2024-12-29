import { ssrRenderClass } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: ["roofType", "getNext"],
  emits: ["roof-type"],
  methods: {
    goNext(value) {
      this.$emit("roof-type", value);
      return this.getNext();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="flex items-center justify-center font-bold md:font-extrabold text-xl md:text-2xl mb-6"> Vous avez quel type de toiture ? </h3><span class="w-12 h-2 bg-green-200 m-auto mb-6 block rounded"></span><p class="font-bold md:font-extrabold text-lg md:text-xl text-center mb-6">Sélectionné un type de toiture</p><div class="w-full flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 m-auto mt-8"><div class="${ssrRenderClass([this.roofType == "La toiture plate" ? "shadow-lg border" : "", "relative flex flex-row md:flex-col items-center justify-start overflow-hidden text-center gap-2 bg-white rounded hover:shadow-lg cursor-pointer md:pb-3"])}"><img src="/images/illustration/toiture-plate.png" alt="La toiture plate" class="w-32 md:w-36"><span class="font-bold text-base flex-1">La toiture plate</span>`);
  if (this.roofType == "La toiture plate") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="${ssrRenderClass([this.roofType == "La toiture en pente" ? "shadow-lg border" : "", "relative flex flex-row md:flex-col items-center justify-start overflow-hidden text-center gap-2 bg-white rounded hover:shadow-lg cursor-pointer md:pb-3"])}"><img src="/images/illustration/toiture-en-pente.png" alt="la toiture en pente" class="w-32 md:w-36"><span class="font-bold text-base flex-1">La toiture en pente</span>`);
  if (this.roofType == "La toiture en pente") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/RoofType.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RoofType = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  RoofType as default
};

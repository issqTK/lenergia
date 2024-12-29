import { ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  emits: ["update:modelValue"],
  props: ["modelValue", "error", "getNext"],
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold mb-6">Quel est le montant de votre facture d&#39;électricité actuelle ?</h3><div class="flex flex-col gap-2 justify-center md:w-8/12 w-9/12 m-auto"><label class="text-left text-sm font-semibold" for="Montant">Montant en euros</label><input type="number" id="Montant"${ssrRenderAttr("value", $props.modelValue)} class="rounded"><span class="text-red-400">${ssrInterpolate($props.error)}</span></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/ElectricityBill.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const electricityBill = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  electricityBill as default
};

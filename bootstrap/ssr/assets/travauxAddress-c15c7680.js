import { ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  emits: ["update:modelValue"],
  props: ["TravauxAdresse", "error_address", "getNext"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-extrabold mb-6">Où se situe le logement concerné par les travaux ? </h3><p class="text-center mb-6">Le montant de vos aides peut varier en fonction de votre localisation.</p><div class="flex flex-col gap-2 justify-center md:w-10/12 m-auto"><label class="text-left text-sm font-semibold" for="Address">Adresse</label><input type="text" id="Address"${ssrRenderAttr("value", $props.TravauxAdresse)} class="rounded" placeholder="35 Rue victor Hugo, 37000 Tours"><span class="text-red-400">${ssrInterpolate($props.error_address)}</span></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/travauxAddress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const travauxAddress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  travauxAddress as default
};

import { ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: ["Code", "error_Postal", "getNext"],
  emits: ["code-postal"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-xl md:text-center text-2xl font-extrabold mb-6">Quel est votre Code Postal ?</h3><div class="flex flex-col gap-2 md:w-10/12 m-auto"><label for="codePostal" class="font-semibold text-sm">Code Postal</label><input type="text" id="codePostal"${ssrRenderAttr("value", $props.Code)} class="rounded"><span class="text-red-400">${ssrInterpolate($props.error_Postal)}</span></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/personalInfos/codePostal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CodePostal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CodePostal as default
};

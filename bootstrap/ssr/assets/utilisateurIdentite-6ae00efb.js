import { ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  emits: ["update:first-name", "update:last-name", "gender-value"],
  props: ["firstName", "lastName", "gender", "error"],
  methods: {}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-xl md:text-2xl font-extrabold text-center mb-12">Comment vous appelez-vous ?</h3><div class="grid grid-cols-2 gap-6 mb-4"><span class="${ssrRenderClass([$props.gender == "Monsieur" ? "shadow-lg border-2" : "", "p-2 rounded bg-white font-bold text-center"])}">Monsieur</span><span class="${ssrRenderClass([$props.gender == "Madame" ? "shadow-lg border-2" : "", "p-2 rounded bg-white font-bold text-center"])}">Madame</span><div class="flex flex-col gap-1"><label for="firstName" class="text-sm font-semibold">Prénom</label><input type="text" id="firstName"${ssrRenderAttr("value", $props.firstName)} class="leading-3 rounded"></div><div class="flex flex-col gap-1"><label for="lastName" class="text-sm font-semibold">Nom</label><input type="text" id="lastName"${ssrRenderAttr("value", $props.lastName)} class="leading-3 rounded"></div></div><div class="text-red-400 text-center">${ssrInterpolate($props.error)}</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/personalInfos/utilisateurIdentite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const utilisateurIdentite = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  utilisateurIdentite as default
};

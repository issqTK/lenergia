import { ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  emits: ["e-mail"],
  props: ["eMail", "error", "getNext"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-xl md:text-2xl font-extrabold text-center mb-6">Entrer votre email</h3><p class="text-center mb-6">Vous bénéficierez de notre service mailing et serez accompagner dans votre projet.</p><div class="flex flex-col gap-2 md:w-10/12 m-auto"><label for="email" class="font-semibold text-sm">Email</label><input type="email" id="email"${ssrRenderAttr("value", $props.eMail)} class="rounded"><span class="text-red-400">${ssrInterpolate($props.error)}</span></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/personalInfos/utilisateurMail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const utilisateurEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  utilisateurEmail as default
};

import { ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: ["phoneNumber", "error", "getNext"],
  emits: ["phone-number"],
  methods: {
    goNext(value) {
      if (value.length == 1 && value != 0) {
        value = 0;
      }
      if (value.length > 10) {
        value = value.slice(0, 10);
        return false;
      }
      this.$emit("phone-number", value);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-xl md:text-center text-2xl font-extrabold mb-6">Quel est votre numéro de téléphone ?</h3><p class="text-center mb-6"> Vous bénéficierez de notre service d&#39;assistance téléphonique et serez rappelé gratuitement afin de vous accompagner dans votre projet. </p><div class="flex flex-col gap-2 md:w-10/12 m-auto"><label for="phone" class="font-semibold text-sm">Téléphone</label><input type="number" id="phone"${ssrRenderAttr("value", $props.phoneNumber)} class="rounded"><span class="text-red-400">${ssrInterpolate($props.error)}</span></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/personalInfos/utilisateurTelephone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const utilisateurTelephone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  utilisateurTelephone as default
};

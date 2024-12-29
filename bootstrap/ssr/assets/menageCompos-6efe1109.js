import { ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: ["menageComposition"],
  emits: ["update:modelValue"],
  methods: {
    lessOne() {
      let value = this.menageComposition;
      value--;
      this.$emit("update:modelValue", value);
    },
    moreOne() {
      let value = this.menageComposition;
      value++;
      this.$emit("update:modelValue", value);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-xl md:text-2xl text-center font-extrabold mb-6">Combien de personnes composent votre foyer, vous compris ? </h3><p class="text-center mb-6">Le montant de vos aides peut varier en fonction de la taille de votre ménage.</p><div class="flex gap-4 items-center justify-center"><span class="p-6 text-2xl font-semibold rounded bg-white leading-3">-</span><input type="number"${ssrRenderAttr("value", $props.menageComposition)} class="text-center font-semibold"><span class="p-6 text-2xl font-semibold rounded bg-white leading-3">+</span></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/personalInfos/menageCompos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const menageComposition = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  menageComposition as default
};

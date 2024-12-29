import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  data() {
    return {
      appel_label: false
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute right-8 top-8 sm:right-12 sm:top-12 md:top-16 md:right-16 flex justify-center items-center gap-3" }, _attrs))}><div class="${ssrRenderClass([{ "!right-16 !opacity-100": $data.appel_label === true }, "absolute opacity-0 -right-60 w-60 bg-amber-200 p-2 overflow-hidden transition-all rounded-l-xl"])}"><span class="grow"><span class="font-bold text-base text-amber-500">Appelez-nous!</span><br><span class="text-white font-bold text-sm">du lundi au vendredi - 8h à 19h</span></span></div><div class="z-10"><a class="${ssrRenderClass([{ "rounded-l-none": $data.appel_label === true }, "flex justify-center items-center h-16 w-16 bg-amber-400 text-white font-bold rounded-full"])}" href="tel:0985408779"> Appeler</a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AppelezNous.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Appelez_nous = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Appelez_nous as default
};

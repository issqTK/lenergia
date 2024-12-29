import { ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: ["interiorSurface", "error_surface", "murs", "getNext"],
  emits: ["update:modelValue"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-extrabold mb-6"> Quelle est la surface approximative de murs ${ssrInterpolate(this.murs)} à isoler ? </h3><p class="mb-6 text-center">Cela suffit pour estimer vos aides : votre artisan mesurera vos murs lors de sa visite.</p><div class="flex flex-col gap-2 justify-center md:w-10/12 m-auto"><label class="text-left text-sm font-semibold" for="surface">Surface en m²</label><input type="number" id="surface"${ssrRenderAttr("value", $props.interiorSurface)} class="rounded"><span class="text-red-400">${ssrInterpolate($props.error_surface)}</span></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/isolationSurface.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const isolationSurface = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  isolationSurface as default
};

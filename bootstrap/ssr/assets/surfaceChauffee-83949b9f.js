import { ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: ["surfaceChauffe", "error_surface", "getNext"],
  emits: ["update:modelValue"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="mb-6 text-center text-xl md:text-2xl font-extrabold">Quelle surface sera chauffée par la pompe à chaleur ? </h3><p class="mb-6 text-center">N&#39;indiquez que la surface des pièces que la pompe à chaleur chauffe.</p><div class="flex flex-col gap-2 justify-center md:w-10/12 m-auto"><label class="text-left text-sm font-bold" for="surface">Surface en m²</label><input type="number" id="surface"${ssrRenderAttr("value", $props.surfaceChauffe)} class="rounded"><span class="text-red-400">${ssrInterpolate($props.error_surface)}</span></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/surfaceChauffee.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const surfaceChauffe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  surfaceChauffe as default
};

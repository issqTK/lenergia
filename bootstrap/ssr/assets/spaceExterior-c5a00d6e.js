import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: ["EspaceExterior"],
  emits: ["espace-exterieur"],
  methods: {
    goNext(boolen) {
      this.$emit("espace-exterieur", boolen);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-extrabold">Un emplacement est-il disponible à l&#39;extérieur de votre logement ? </h3><p class="mt-8 text-sm text-center">L&#39;installation d&#39;une pompe à chaleur Air-eau nécessite la pose d&#39;un module extérieur (environ 2 m2).</p><div class="flex gap-4 md:gap-8 justify-center mt-8 w-9/12 m-auto"><div class="relative p-12 md:p-20 rounded bg-white hover:shadow-xl cursor-pointer"><span class="text-xl font-bold">Oui</span>`);
  if (this.EspaceExterior == true) {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative p-12 md:p-20 rounded bg-white hover:shadow-xl cursor-pointer"><span class="text-xl font-bold">Non</span>`);
  if (this.EspaceExterior == false) {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/spaceExterior.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const spaceExterior = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  spaceExterior as default
};

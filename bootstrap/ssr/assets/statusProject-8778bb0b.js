import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  emits: ["status-project"],
  props: ["statusProject"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-extrabold mb-12">Où en êtes-vous dans votre projet ?</h3><div class="grid md:grid-cols-3 gap-4"><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/lamp thinking.png" alt="réfléchis à mes travaux"><span class="font-bold">Je réfléchis à mes travaux</span>`);
  if (this.statusProject == "Je réfléchis à mes travaux") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/artisan.png" alt="chercher un artisan rge"><span class="font-bold">Je recherche un artisan RGE</span>`);
  if (this.statusProject == "Je recherche un artisan RGE") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/devis sign.png" alt="Je vais signer mon devis"><span class="font-bold">Je vais signer mon devis</span>`);
  if (this.statusProject == "Je vais signer mon devis") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/statusProject.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const statusProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  statusProject as default
};

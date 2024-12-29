import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: ["eauChaudeSanitaire"],
  emits: ["EauChaudeSanitaire"],
  methods: {
    goNext(value) {
      this.$emit("EauChaudeSanitaire", value);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-extrabold mb-12">Souhaitez-vous que votre pompe à chaleur fournisse également de l&#39;eau chaude sanitaire ? </h3><div class="grid md:grid-cols-2 gap-4"><div class="relative flex flex-col items-left justify-between gap-4 p-8 rounded bg-white hover:shadow-xl cursor-pointer"><div class="flex flex-col gap-4"><span class="font-bold text-lg">Chauffage seul</span><p class="text-xs">Installation classique de votre pompe à chaleur s&#39;intégrant parfaitement à votre système de chauffage existant. <b>C&#39;est généralement la solution la plus économique</b>.</p></div><img src="/images/works/article/heater-sanitary-water-heating-only.png" alt="chauffage eau sanitaire" class="rounded">`);
  if (this.eauChaudeSanitaire == "Chauffage seul") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative flex flex-col items-left justify-between gap-4 p-8 rounded bg-white hover:shadow-xl cursor-pointer"><div class="flex flex-col gap-4"><span class="font-bold text-lg">Chauffage eau chaude sanitaire</span><p class="text-xs">En plus de s&#39;intégrer à votre système de chauffage existant, votre pompe à chaleur peut également produire votre eau chaude sanitaire. Vous devez nécessairement habiter en maison.</p></div><img src="/images/works/article/heater-sanitary-water-heating-and-water.png" alt="chauffage eau sanitaire" class="rounded">`);
  if (this.eauChaudeSanitaire == "Chauffage eau chaude sanitaire") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/chaudeSanitaire.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chaudeSanitaire = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  chaudeSanitaire as default
};

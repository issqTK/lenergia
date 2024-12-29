import { ssrRenderClass } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  emits: ["logement-energie"],
  props: ["LogementEnergie"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold"> Quelle est l&#39;énergie de chauffage actuelle de votre logement ? </h3><p class="mt-8 text-center">Si vous avez plusieurs énergies de chauffage, indiquez-nous la principale</p><div class="md:w-10/12 grid grid-cols-3 gap-4 mt-8 m-auto"><div class="${ssrRenderClass([$props.LogementEnergie == "Chauffage au fioul" ? "shadow-xl bg-white" : "", "py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"])}"><img src="/images/illustration/fioul.png" alt="fioul" class="w-4/12 m-auto"><span>Chauffage au fioul</span></div><div class="${ssrRenderClass([$props.LogementEnergie == "Chauffage électrique" ? "!shadow-xl bg-white" : "", "py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"])}"><img src="/images/illustration/electric.png" alt="electric" class="w-4/12 m-auto"><span>Chauffage électrique</span></div><div class="${ssrRenderClass([$props.LogementEnergie == "Chauffage au gaz" ? "shadow-xl bg-white" : "", "py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"])}"><img src="/images/illustration/gaz.png" alt="gaz" class="w-4/12 m-auto"><span>Chauffage au gaz</span></div><div class="${ssrRenderClass([$props.LogementEnergie == "Chauffage au bois" ? "shadow-xl bg-white" : "", "py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"])}"><img src="/images/illustration/woodfire.png" alt="woodfire" class="w-4/12 m-auto"><span>Chauffage au bois</span></div><div class="${ssrRenderClass([$props.LogementEnergie == "Pompe à chaleur" ? "shadow-xl bg-white" : "", "py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"])}"><img src="/images/illustration/pompchaleur.png" alt="pompe a chaleur" class="w-4/12 m-auto"><span>Pompe à chaleur</span></div><div class="${ssrRenderClass([$props.LogementEnergie == "Chauffage au charbon" ? "shadow-xl bg-white" : "", "py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"])}"><img src="/images/illustration/charbon.png" alt="Chauffage au charbon" class="w-4/12 m-auto"><span>Chauffage au charbon</span></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Logement/LogementEnergie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LogementEnergie = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LogementEnergie as default
};

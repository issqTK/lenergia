import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center gap-4 py-16 bg-white" }, _attrs))}><h2 class="text-2xl md:text-4xl font-extrabold text-center mx-4"> Une équipe dévouée pour vous assurer<br class="hidden md:block"> un chantier en toute tranquillité. </h2><span class="h-2 w-12 bg-green-200 rounded-full"></span><p class="text-xl text-center mx-4"> Nos conseillers experts vous guident de A à Z pour la réussite de votre projet. </p><div class="flex flex-col md:flex-row px-4 py-8 gap-8 sm:px-20"><div class="w-full h-36 h-96 md:w-7/12 rounded-md" style="${ssrRenderStyle({ "background": "url('/images/home/section3.jpg') no-repeat\r\n                        center center" })}"></div><div class="grid grid-cols-2 w-full md:w-5/12 gap-4 text-sm md:text-md lg:text-base"><div class="flex flex-col !justify-start gap-2"><img src="/images/illustration/1_section3.png" alt="Des conseillers à votre écoute" class="w-16 h-16"><h6 class="font-bold"> Nos conseillers sont à votre disposition </h6><p class="text-gray-700"> du lundi au vendredi, de 8h à 19h, pour répondre à vos besoins. </p></div><div class="flex flex-col !justify-start gap-2"><img src="/images/illustration/2_section3.png" alt="Des conseillers à votre écoute" class="w-16 h-16"><h6 class="font-bold"> Des experts qualifiés en rénovation </h6><p class="text-gray-700"> Maintenant leur expertise à jour avec les avancées du secteur. </p></div><div class="flex flex-col justify-start gap-2"><img src="/images/illustration/3_section3.png" alt="Des conseillers à votre écoute" class="w-16 h-16"><h6 class="font-bold">Un accompagnement personnalisé</h6><p class="text-gray-700"> Nos conseils sont spécialement conçus pour s&#39;adapter aux caractéristiques de votre logement. </p></div><div class="flex flex-col !justify-start gap-2"><img src="/images/illustration/4_section3.png" alt="Des conseillers à votre écoute" class="w-16 h-16"><h6 class="font-bold">Simplifiez vos démarches</h6><p class="text-gray-700"> Une assistance personnalisée pour bénéficier de la Prime et MaPrimeRenov&#39; </p></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/home/ThirdS.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ThirdS = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ThirdS as default
};

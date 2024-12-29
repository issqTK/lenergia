import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16 px-2 bg-white" }, _attrs))}><div style="${ssrRenderStyle({ "min-height": "450px" })}" class="flex flex-col lg:flex-row gap-4 md:gap-0 max-w-xl lg:max-w-none w-full md:w-10/12 shadow-md rounded-xl overflow-hidden mx-auto border"><div class="w-full !bg-cover lg:w-6/12" style="${ssrRenderStyle({ "min-height": "400px", "background": "url('/images/home/mail-section.jpeg') no-repeat top" })}"></div><div class="mx-auto w-full lg:w-6/12"><div class="flex flex-col md:justify-center gap-12 py-6 lg:py-0 px-8 h-full"><h6 class="text-lg md:text-2xl font-bold break-word">Profitez de conseils avisés pour réaliser des économies d&#39;énergie</h6><p>Interviews d&#39;experts · Astuces · Actualités</p><form class="flex lg:flex-row flex-col gap-4"><input type="email" placeholder="Votre adresse mail*" required class="p-4 rounded-md"><input type="submit" value="Je M&#39;abonne" class="uppercase px-6 py-4 rounded-full text-white bg-slate-700 font-bold shadow"></form><span class="text-xs">Soyez tranquille, vous pouvez vous désabonner de notre newsletter à tout instant !</span></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/home/MailSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mail_section = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  mail_section as default
};

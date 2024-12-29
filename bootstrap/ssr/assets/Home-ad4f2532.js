import { Head } from "@inertiajs/vue3";
import { G as GuestLayout } from "./GuestLayout-36a367d8.js";
import FirstS from "./FirstS-8645522d.js";
import SecondeS from "./SecondeS-31c6f3a6.js";
import ThirdS from "./ThirdS-8983f490.js";
import FourthS from "./FourthS-ce357586.js";
import mail_section from "./MailSection-d20670e3.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./btnDevis-59098679.js";
import "./AppelezNous-823d57ad.js";
const Home_vue_vue_type_style_index_0_scoped_aec94240_lang = "";
const _sfc_main = {
  layout: GuestLayout,
  components: {
    Head,
    FirstS,
    SecondeS,
    ThirdS,
    FourthS,
    mail_section
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_FirstS = resolveComponent("FirstS");
  const _component_SecondeS = resolveComponent("SecondeS");
  const _component_ThirdS = resolveComponent("ThirdS");
  const _component_FourthS = resolveComponent("FourthS");
  const _component_mail_section = resolveComponent("mail_section");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Bienvenue" }, null, _parent));
  _push(ssrRenderComponent(_component_FirstS, null, null, _parent));
  _push(ssrRenderComponent(_component_SecondeS, null, null, _parent));
  _push(ssrRenderComponent(_component_ThirdS, null, null, _parent));
  _push(ssrRenderComponent(_component_FourthS, null, null, _parent));
  _push(ssrRenderComponent(_component_mail_section, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-aec94240"]]);
export {
  Home as default
};

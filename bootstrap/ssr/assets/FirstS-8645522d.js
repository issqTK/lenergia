import Appelez_nous from "./AppelezNous-823d57ad.js";
import { Link } from "@inertiajs/vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const FirstS_vue_vue_type_style_index_0_scoped_e13ce639_lang = "";
const _sfc_main = {
  components: { Appelez_nous, Link }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Appelez_nous = resolveComponent("Appelez_nous");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "header",
    class: "relative !bg-cover overflow-hidden",
    style: { "background": "url('/images/home/head-page.jpg') no-repeat top center" }
  }, _attrs))} data-v-e13ce639><div class="p-8 sm:p-12 md:p-16 text-slate-100" data-v-e13ce639><h1 class="flex flex-col gap-2 font-extrabold w-full" data-v-e13ce639><span class="text-xl sm:text-2xl md:text-3xl leading-8 sm:leading-10 md:leading-relaxed" data-v-e13ce639> Pensez vous à devenir <br data-v-e13ce639> autonome en énergie &amp; éviter <br data-v-e13ce639> de subir les augmentations des factures </span><span class="text-2xl sm:text-4xl md:text-5xl leading-10 sm:leading-relaxed md:leading-relaxed" data-v-e13ce639> L&#39;énergia vous accompagne<br data-v-e13ce639> de A à Z </span></h1>`);
  _push(ssrRenderComponent(_component_Appelez_nous, null, null, _parent));
  _push(`</div><div class="absolute bottom-0 flex flex-wrap justify-center gap-3 lg:gap-6 w-full p-3 lg:p-6 shadow-xl" style="${ssrRenderStyle({ "background-image": "linear-gradient(to bottom, rgba(255, 255, 255, 0.01), #cbd5e1)" })}" data-v-e13ce639>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("parcour", "panneaux-solaires-photovoltaiques"),
    class: "solaire-parent relative grid place-items-center text-center gap-2 lg:gap-4 w-28 lg:w-40 p-2 lg:p-4 lg:px-6 bg-white rounded-lg shadow-xl overflow-hidden"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/solaire_icon.png" alt="Passer au solaire" data-v-e13ce639${_scopeId}><span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10" data-v-e13ce639${_scopeId}>Passer au solaire</span><span class="solaire-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" data-v-e13ce639${_scopeId}></span>`);
      } else {
        return [
          createVNode("img", {
            class: "w-12 h-12 lg:w-16 lg:h-16 z-10",
            src: "/images/illustration/solaire_icon.png",
            alt: "Passer au solaire"
          }),
          createVNode("span", { class: "font-bold capitalize text-sm lg:text-base text-slate-900 z-10" }, "Passer au solaire"),
          createVNode("span", { class: "solaire-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("parcour", "pompe-à-chaleur"),
    class: "chauffage-parent relative grid place-items-center text-center gap-2 lg:gap-4 w-28 lg:w-40 p-2 lg:p-4 lg:px-6 bg-white rounded-lg shadow-xl overflow-hidden"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/chauffage_icon.png" alt="Changer mon chauffage" data-v-e13ce639${_scopeId}><span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10" data-v-e13ce639${_scopeId}>Changer mon chauffage</span><span class="chauffage-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" data-v-e13ce639${_scopeId}></span>`);
      } else {
        return [
          createVNode("img", {
            class: "w-12 h-12 lg:w-16 lg:h-16 z-10",
            src: "/images/illustration/chauffage_icon.png",
            alt: "Changer mon chauffage"
          }),
          createVNode("span", { class: "font-bold capitalize text-sm lg:text-base text-slate-900 z-10" }, "Changer mon chauffage"),
          createVNode("span", { class: "chauffage-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("parcour"),
    class: "isolation-parent relative grid place-items-center text-center gap-2 lg:gap-4 w-28 lg:w-40 p-2 lg:p-4 lg:px-6 bg-white rounded-lg shadow-xl overflow-hidden"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/isolation_icon.png" alt="Isoler ma maison" data-v-e13ce639${_scopeId}><span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10" data-v-e13ce639${_scopeId}>Isoler ma maison</span><span class="isolation-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" data-v-e13ce639${_scopeId}></span>`);
      } else {
        return [
          createVNode("img", {
            class: "w-12 h-12 lg:w-16 lg:h-16 z-10",
            src: "/images/illustration/isolation_icon.png",
            alt: "Isoler ma maison"
          }),
          createVNode("span", { class: "font-bold capitalize text-sm lg:text-base text-slate-900 z-10" }, "Isoler ma maison"),
          createVNode("span", { class: "isolation-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("parcour"),
    class: "calcule-parent relative grid place-items-center text-center gap-2 lg:gap-4 w-28 lg:w-40 p-2 lg:p-4 lg:px-6 bg-white rounded-lg shadow-xl overflow-hidden"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="\\images\\illustration/calcule_icon.png" alt="Calculer prime &amp; aides" data-v-e13ce639${_scopeId}><span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10" data-v-e13ce639${_scopeId}>Calculer prime &amp; aides</span><span class="calcule-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" data-v-e13ce639${_scopeId}></span>`);
      } else {
        return [
          createVNode("img", {
            class: "w-12 h-12 lg:w-16 lg:h-16 z-10",
            src: "\\images\\illustration/calcule_icon.png",
            alt: "Calculer prime & aides"
          }),
          createVNode("span", { class: "font-bold capitalize text-sm lg:text-base text-slate-900 z-10" }, "Calculer prime & aides"),
          createVNode("span", { class: "calcule-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("parcour"),
    class: "bilan-parent relative grid place-items-center text-center gap-2 lg:gap-4 w-28 lg:w-40 p-2 lg:p-4 lg:px-6 bg-white rounded-lg shadow-xl overflow-hidden"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/bilan_icon.png" alt="Mon bilan énergétique" data-v-e13ce639${_scopeId}><span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10" data-v-e13ce639${_scopeId}>Mon bilan énergétique*</span><span class="bilan-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" data-v-e13ce639${_scopeId}></span>`);
      } else {
        return [
          createVNode("img", {
            class: "w-12 h-12 lg:w-16 lg:h-16 z-10",
            src: "/images/illustration/bilan_icon.png",
            alt: "Mon bilan énergétique"
          }),
          createVNode("span", { class: "font-bold capitalize text-sm lg:text-base text-slate-900 z-10" }, "Mon bilan énergétique*"),
          createVNode("span", { class: "bilan-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/home/FirstS.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FirstS = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e13ce639"]]);
export {
  FirstS as default
};

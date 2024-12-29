import { Link } from "@inertiajs/vue3";
import { b as btnDevis } from "./btnDevis-59098679.js";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  components: { Link, btnDevis },
  data() {
    return {
      solair: true,
      chauffage: false,
      isolation: false
    };
  },
  methods: {
    showContent(content) {
      this.chauffage = false;
      this.isolation = false;
      this.solair = false;
      if (content == "solair")
        this.solair = true;
      else if (content == "chauffage")
        this.chauffage = true;
      else if (content == "isolation")
        this.isolation = true;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col pt-16 gap-6 bg-white" }, _attrs))}><h2 class="text-2xl md:text-4xl mx-4 font-extrabold text-center"> Envie de faire des économies d&#39;énergie </h2><p class="text-xl text-center mb-16 mx-4"> Des services conçus pour vous : </p><div class="relative flex flex-wrap justify-center gap-8 py-12 px-4 md:mx-6 bg-gradient-to-b to-slate-50 from-slate-100 md:rounded-xl"><div class="absolute grid grid-cols-3 -top-16 md:-top-12 w-11/12 lg:w-10/12"><a style="${ssrRenderStyle($data.solair ? "background-color:#a8ecff" : "")}" class="flex flex-col md:flex-row gap-0 md:gap-2 md:justify-center justify-start items-center py-2 md:p-4 md:py-4 md:px-6 rounded bg-white text-sm md:text-base font-bold cursor-pointer border transition-all duration-500"><img class="w-14 h-14" src="/images/illustration/solaire_icon.png" alt="Passer au solaire"><span class="flex-1 text-center md:text-left">Branchez-vous sur le soleil</span></a><a style="${ssrRenderStyle($data.chauffage ? "background-color:#ffd0b6" : "")}" class="flex flex-col md:flex-row gap-0 md:gap-2 md:justify-center justify-start items-center py-2 md:p-4 md:py-4 md:px-6 rounded bg-white text-sm md:text-base font-bold cursor-pointer border transition-all duration-500"><img class="w-14 h-14" src="/images/illustration/chauffage_icon.png" alt="Changer mon chauffage"><span class="flex-1 text-center md:text-left">Chauffez-vous proprement</span></a><a style="${ssrRenderStyle($data.isolation ? "background-color: #b9f8d3" : "")}" class="flex flex-col md:flex-row gap-0 md:gap-2 md:justify-center justify-start items-center py-2 md:p-4 md:py-4 md:px-6 rounded bg-white text-sm md:text-base font-bold cursor-pointer border transition-all duration-500"><img class="w-14 h-14" src="/images/illustration/isolation_icon.png" alt="Isoler ma maison"><span class="flex-1 text-center md:text-left">Limiter les déperditions thermiques</span></a></div>`);
  if ($data.solair) {
    _push(`<div class="w-full m-auto flex flex-wrap justify-center py-6 gap-8"><div class="flex flex-col md:flex-row w-96 md:w-7/12 bg-white rounded-md overflow-hidden"><div class="h-32 w-full md:h-full md:w-4/12 !bg-cover" style="${ssrRenderStyle({ "background": "url('/images/home/solaire-section2.png')\r\n                                center" })}"></div><div class="flex flex-col w-full md:w-8/12"><h6 class="font-bold p-3" style="${ssrRenderStyle({ "background-color": "#a8ecff" })}"> Jusqu&#39;à 1 600€ d&#39;économies par an </h6><div class="p-3 px-6 flex flex-col gap-2 items-start h-full text-sm"><h3 class="text-xl font-bold leading-10"> Panneaux solaires </h3><p class=""> Créez de votre toiture une source de production d&#39;électricité, et vous: </p><ul class="list-disc ml-4"><li class="mb-2"> Dites adieu aux sources d&#39;énergie traditionnelles en produisant votre propre électricité écologique </li><li> Bénéficiez d&#39;une réduction de 60 % sur vos dépenses énergétiques </li></ul><p class=""><b class="text-base">Profitez de l&#39;utilisation de panneaux hybrides ?</b><br><span class="text-sm">Alliant chauffage thermique et électricité photovoltaïque, ces panneaux novateurs s&#39;alimentent de la lumière et de la chaleur solaire pour créer une alliance parfaite.</span></p><p class="text-center mt-3"> Réaliser jusqu&#39;à 60 % d&#39;économies sur vos coûts énergétiques. </p>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("intermediate", "passer-solaire"),
      class: "text-center m-auto text-teal-500 hover:text-white text-xs uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-8 py-4 rounded-full font-bold border border-teal-500 transition-all"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` JE PASSE AU SOLAIRE `);
        } else {
          return [
            createTextVNode(" JE PASSE AU SOLAIRE ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.chauffage) {
    _push(`<div class="w-full m-auto flex flex-wrap justify-center py-6 gap-8"><div class="flex flex-col md:flex-row w-96 md:w-5/12 bg-white rounded-md overflow-hidden"><div class="h-32 w-full md:h-full md:w-5/12 !bg-cover" style="${ssrRenderStyle({ "background": "url('/images/home/chauffage1.jpg')\r\n                                center" })}"></div><div class="flex flex-col w-full md:w-7/12 h-full"><h6 class="font-bold p-3" style="${ssrRenderStyle({ "background-color": "#ffd0b6" })}"> Jusqu&#39;à 1 000€ d&#39;économies par an </h6><div class="px-6 py-4 flex flex-col gap-4 items-start"><h3 class="text-xl font-bold leading-10"> Pompe à chaleur </h3><ul class="list-disc ml-4"><li class="mb-2">Efficacité énergétique</li><li class="mb-2">Économies financières</li><li>Distribution homogène de la chaleur</li></ul>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("intermediate", "chauffage-maison"),
      class: "text-center m-auto text-teal-500 hover:text-white text-xs uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-8 py-4 rounded-full font-bold border border-teal-500 transition-all"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` J&#39;INSTALLE UNE PAC `);
        } else {
          return [
            createTextVNode(" J'INSTALLE UNE PAC ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div><div class="flex flex-col md:flex-row w-96 md:w-5/12 bg-white rounded-md overflow-hidden"><div class="h-32 w-full md:h-full md:w-5/12 !bg-cover" style="${ssrRenderStyle({ "background": "url('/images/home/chauffage-2.jpg')\r\n                                center" })}"></div><div class="flex flex-col w-full md:w-7/12"><h6 class="font-bold p-3 bg-gray-200"> Jusqu&#39;à 30% d&#39;économies d&#39;énergie </h6><div class="px-6 py-4 flex flex-col gap-4 items-start"><h3 class="text-xl font-bold leading-10"> Chaudière à Gaz </h3><ul class="list-disc ml-4"><li class="mb-2">Chauffage instantané</li><li class="mb-2">Solution économique</li><li>Faibles émissions</li></ul>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("intermediate", "chauffage-maison"),
      class: "text-center m-auto text-teal-500 hover:text-white text-xs uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-8 py-4 rounded-full font-bold border border-teal-500 transition-all"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` J&#39;INSTALLE UNE CHAUDIÈRE `);
        } else {
          return [
            createTextVNode(" J'INSTALLE UNE CHAUDIÈRE ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div><div class="flex flex-col md:flex-row w-96 md:w-5/12 bg-white rounded-md overflow-hidden"><div class="h-32 w-full md:h-full md:w-5/12 !bg-cover md:bg-auto" style="${ssrRenderStyle({ "background": "url('/images/home/chauffage-3.jpg')\r\n                                no-repeat center" })}"></div><div class="flex flex-col w-full md:w-7/12"><h6 class="font-bold p-3 bg-gray-200"> Jusqu&#39;à 3 800€ d&#39;aides </h6><div class="px-6 py-4 flex flex-col gap-4 items-start"><h3 class="text-xl font-bold leading-10"> Chauffage d&#39;appoint </h3><p class="leading-6 text-md"> Chaleur efficace et combustible écologique, faites des économies d&#39;énergie en optant pour un poêle à granulés. </p>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("intermediate", "chauffage-maison"),
      class: "text-center m-auto text-teal-500 hover:text-white text-xs uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-8 py-4 rounded-full font-bold border border-teal-500 transition-all"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` JE CHOISIS MON CHAUFFAGE `);
        } else {
          return [
            createTextVNode(" JE CHOISIS MON CHAUFFAGE ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div><div class="flex flex-col md:flex-row w-96 md:w-5/12 bg-white rounded-md overflow-hidden"><div class="h-32 w-full md:h-full md:w-5/12 !bg-right-top !bg-cover" style="${ssrRenderStyle({ "background": "url('/images/home/chauffage-4.jpeg')\r\n                                center" })}"></div><div class="flex flex-col w-full md:w-7/12"><h6 class="font-bold p-3 bg-gray-200"> Des factures divisées par trois </h6><div class="px-6 py-4 flex flex-col gap-4 items-start"><h3 class="text-xl font-bold leading-8"> Chauffe-eau thermodynamique </h3><ul class="list-disc ml-4"><li class="mb-2">Chauffage Rapide</li><li class="mb-2"> Capacité d&#39;adaptation lors de l&#39;installation </li><li>Performance tout au long de l&#39;année</li></ul>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("intermediate", "chauffage-maison"),
      class: "text-center m-auto text-teal-500 hover:text-white text-xs uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-8 py-4 rounded-full font-bold border border-teal-500 transition-all"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` J&#39;INSTALLE UN CHAUFFE-EAU `);
        } else {
          return [
            createTextVNode(" J'INSTALLE UN CHAUFFE-EAU ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.isolation) {
    _push(`<div class="w-full m-auto flex flex-wrap justify-center py-6 gap-8"><div class="flex flex-col md:flex-row w-96 md:w-7/12 bg-white rounded-md overflow-hidden"><div class="h-32 w-full md:h-full md:w-4/12 !bg-cover" style="${ssrRenderStyle({ "background": "url('/images/home/section-2-isolation.jpg')\r\n                                center" })}"></div><div class="flex flex-col w-full md:w-8/12"><h6 class="font-bold p-3" style="${ssrRenderStyle({ "background-color": "#b9f8d3" })}"> Jusqu&#39;à 25% d&#39;économies d&#39;énergie </h6><div class="p-6 md:py-8 flex flex-col gap-2 items-start h-full" style="${ssrRenderStyle({ "min-height": "330px" })}"><h3 class="text-xl font-bold leading-10"> Isolation des murs </h3><p class="leading-6"> L&#39;isolation des murs assure un confort accru, prévient les pertes d&#39;énergie et permet des économies significatives </p>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("intermediate", "isolation-maison"),
      class: "text-center m-auto text-teal-500 hover:text-white text-xs uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-8 py-4 rounded-full font-bold border border-teal-500 transition-all"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` J&#39;ISOLE MES MURS `);
        } else {
          return [
            createTextVNode(" J'ISOLE MES MURS ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/home/SecondeS.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SecondeS = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SecondeS as default
};

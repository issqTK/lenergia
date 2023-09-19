import { mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, ref, onMounted, unref, withModifiers, openBlock, createBlock, createCommentVNode, computed, onUnmounted, renderSlot, watch, withKeys, nextTick, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderTeleport } from "vue/server-renderer";
import { Link, useForm, Head, router, usePage, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _404_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$$ = {};
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><p class="mb-6 text-lg text-center text-slate-700 font-bold w-8/12 border py-8 px-4 m-auto bg-white shadow leading-10 rounded"> échec du chargement de la ressource, le serveur a répondu avec un statut de 404 (non trouvé) </p><a href="/" class="table p-4 m-auto font-bold text-white rounded border">Retour à la page d&#39;accueil</a></div>`);
}
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/404.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["ssrRender", _sfc_ssrRender$G]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _404
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$_ = {};
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden md:flex gap-2 absolute right-16 top-4 w-96 h-14 text-slate-700 text-sm bg-gradient-to-r from-white to-slate-200 shadow rounded-lg leading-4 p-2" }, _attrs))}><span class="grow"><span class="font-bold text-base text-teal-600">Appelez-nous !</span><br> du lundi au vendredi - 8h à 19h </span><div class="w-4/12 border flex justify-center items-center cursor-pointer text-slate-50 bg-slate-500 hover:shadow-lg hover:bg-slate-100 hover:text-slate-900 rounded-bl-full rounded-tr-full font-bold"><a class="block" href="tel:0587878787">Appeler</a></div></div>`);
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AppelezNous.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const Appelez_nous = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$F]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Appelez_nous
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Z = {
  components: { Link },
  props: ["text", "slug"]
};
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_Link, mergeProps({
    href: _ctx.route("parcour", $props.slug),
    class: "m-auto text-teal-500 hover:text-white uppercase bg-gradient-to-r hover:from-teal-500 hover:to-green-300 hover:shadow-gray-500 shadow-lg px-8 py-4 rounded-full font-bold border border-teal-500 transition-all !bg-white"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.text)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.text), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/customComponents/btnDevis.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const btnDevis = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["ssrRender", _sfc_ssrRender$E]]);
const PrimaryNavigation_vue_vue_type_style_index_0_scoped_efd65329_lang = "";
const _sfc_main$Y = {
  components: { btn: btnDevis, Link },
  data() {
    return {
      showingNavigation: false
    };
  },
  computed: {
    esWorks: function() {
      return this.$page.props.works.filter(function(e) {
        if (e.type == "es")
          return e;
      });
    },
    chWorks: function() {
      return this.$page.props.works.filter(function(e) {
        if (e.type == "ch")
          return e;
      });
    },
    iWorks: function() {
      return this.$page.props.works.filter(function(e) {
        if (e.type == "i")
          return e;
      });
    }
  },
  mounted() {
    this.fakeHeight();
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    showNav() {
      const mobileNav = document.getElementById("mobile-nav");
      if (window.scrollY >= 96)
        mobileNav.classList.add("top-less");
      else if (mobileNav.classList.contains("top-less"))
        mobileNav.classList.remove("top-less");
      this.showingNavigation = true;
    },
    handleScroll() {
      if (window.scrollY >= 96) {
        document.getElementById("navigation").classList.add("!h-16");
        document.getElementById("solair-lg-plus-i").style.left = "50px";
        document.getElementById("decouvre-lg-plus-i").style.left = "30px";
        document.querySelectorAll(".interior").forEach((item) => {
          item.classList.add("!top-16");
        });
        document.getElementById("mobile-nav").classList.add("top-less");
      } else {
        document.getElementById("navigation").classList.remove("!h-16");
        document.getElementById("solair-lg-plus-i").style.left = "130px";
        document.getElementById("decouvre-lg-plus-i").style.left = "90px";
        document.querySelectorAll(".interior").forEach((item) => {
          item.classList.remove("!top-16");
        });
        document.getElementById("mobile-nav").classList.remove("top-less");
      }
    },
    fakeHeight() {
      document.getElementById("fakerNavigation").style.height = this.$refs.navigation.clientHeight + "px";
    },
    showInterior(event) {
      const item = event.target.parentNode.querySelector("ul");
      if (item)
        item.classList.add("!right-0");
    },
    hideInterior(event) {
      event.target.parentNode.classList.remove("!right-0");
    }
  }
};
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_btn = resolveComponent("btn");
  _push(`<!--[--><div id="navigation" class="fix-top flex relative items-center justify-between text-sm px-4 bg-white h-24 w-full z-10" data-v-efd65329><a href="/" class="block lg:!left-0 h-full relative max-w-3/12" style="${ssrRenderStyle([{ "transition": "all 800ms ease-in-out" }, $data.showingNavigation ? "left:0" : "left: calc(50% - 155px);"])}" data-v-efd65329><img src="/images/logo.png" alt="Logo" id="logo" draggable="false" class="h-full z-10" style="${ssrRenderStyle({ "max-width": "250px" })}" data-v-efd65329></a><div class="lg:hidden cursor-pointer text-center" style="${ssrRenderStyle({ "width": "30px" })}" data-v-efd65329><i class="fa-solid fa-bars text-black text-2xl" style="${ssrRenderStyle(!$data.showingNavigation ? null : { display: "none" })}" data-v-efd65329></i><i class="fa-solid fa-xmark text-black text-2xl" style="${ssrRenderStyle($data.showingNavigation ? null : { display: "none" })}" data-v-efd65329></i></div><div id="mobile-nav" class="absolute lg:static flex-1 z-10 h-full w-full" style="${ssrRenderStyle([{ "top": "95px", "transition": "all 800ms ease-in-out" }, $data.showingNavigation ? "right:0" : "right:-100%"])}" data-v-efd65329><div class="relative bg-white lg:hidden flex flex-col gap-6 p-6 min-h-screen w-full border" data-v-efd65329><ul class="flex flex-col gap-4 font-semibold" data-v-efd65329><li data-v-efd65329><a href="javascript:void(0)" class="flex flex-1 justify-between items-center p-2 active:px-4 rounded-md transition-all bg-gradient-to-r active:from-white active:to-green-100" data-v-efd65329> Nos offres <i class="fa-solid fa-chevron-right leading-3" data-v-efd65329></i></a><ul class="absolute w-full min-h-screen top-0 -right-full flex flex-col gap-5 p-6 font-semibold bg-white" style="${ssrRenderStyle({ "transition": "all 800ms ease-in-out" })}" data-v-efd65329><a href="javascript:void(0)" data-v-efd65329><i class="fa-solid fa-chevron-left" data-v-efd65329></i> Retour </a><div class="flex flex-col" data-v-efd65329><h3 class="uppercase text-gray-500" data-v-efd65329>Les Travaux</h3><li data-v-efd65329>`);
  _push(ssrRenderComponent(_component_Link, {
    onClick: ($event) => {
      $data.showingNavigation = false;
    },
    href: _ctx.route("intermediate", "isolation-maison"),
    class: "ins-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/isolation_global.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-efd65329${_scopeId}>Isolation globale`);
      } else {
        return [
          createVNode("img", {
            src: "/images/illustration/isolation_global.png",
            style: { "max-height": "30px" }
          }),
          createTextVNode("Isolation globale")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-efd65329>`);
  _push(ssrRenderComponent(_component_Link, {
    onClick: ($event) => {
      $data.showingNavigation = false;
    },
    href: _ctx.route("landing", "panneaux-solaires-photovoltaiques"),
    class: "ins-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/Panneaux_Photovoltaïques.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-efd65329${_scopeId}>Panneaux photovoltaïques`);
      } else {
        return [
          createVNode("img", {
            src: "/images/illustration/Panneaux_Photovoltaïques.png",
            style: { "max-height": "30px" }
          }),
          createTextVNode("Panneaux photovoltaïques")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-efd65329>`);
  _push(ssrRenderComponent(_component_Link, {
    onClick: ($event) => {
      $data.showingNavigation = false;
    },
    href: _ctx.route("landing", "pompe-à-chaleur"),
    class: "ins-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/pompe-a-chaleur.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-efd65329${_scopeId}>Pompe à chaleur`);
      } else {
        return [
          createVNode("img", {
            src: "/images/illustration/pompe-a-chaleur.png",
            style: { "max-height": "30px" }
          }),
          createTextVNode("Pompe à chaleur")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-efd65329>`);
  _push(ssrRenderComponent(_component_Link, {
    onClick: ($event) => {
      $data.showingNavigation = false;
    },
    href: _ctx.route("landing", "système-solaire-combiné"),
    class: "ins-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/collaboration.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-efd65329${_scopeId}>Système solaire combiné`);
      } else {
        return [
          createVNode("img", {
            src: "/images/illustration/collaboration.png",
            style: { "max-height": "30px" }
          }),
          createTextVNode("Système solaire combiné")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></div><div class="flex flex-col" data-v-efd65329><h3 class="uppercase text-gray-500" data-v-efd65329>Les Services</h3><li data-v-efd65329><a href="#" class="ins-link" data-v-efd65329>Bilan énergétique gratuit</a></li><li data-v-efd65329><a href="#" class="ins-link" data-v-efd65329>Audit énergétique</a></li></div></ul></li><li class="w-full" data-v-efd65329><a href="javascript:void(0)" class="flex flex-1 justify-between items-center p-2 active:px-4 rounded-md transition-all bg-gradient-to-r active:from-white active:to-green-100" data-v-efd65329> Conseils travaux <i class="fa-solid fa-chevron-right" data-v-efd65329></i></a><ul class="absolute w-full min-h-screen top-0 -right-full flex flex-col gap-5 p-6 font-semibold bg-white" style="${ssrRenderStyle({ "transition": "all 800ms ease-in-out" })}" data-v-efd65329><a href="javascript:void(0)" data-v-efd65329><i class="fa-solid fa-chevron-left" data-v-efd65329></i> Retour </a><div class="flex flex-col" data-v-efd65329><h3 class="uppercase text-gray-500" data-v-efd65329>Énergie Solaire</h3><!--[-->`);
  ssrRenderList($options.esWorks, (work, i) => {
    _push(`<li data-v-efd65329>`);
    _push(ssrRenderComponent(_component_Link, {
      onClick: ($event) => {
        $data.showingNavigation = false;
      },
      href: _ctx.route("landing", work.slug),
      class: "ins-link !flex gap-2 items-center"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", "/images/illustration/" + work.svg)}${ssrRenderAttr("alt", work.img_alt)} class="w-6" data-v-efd65329${_scopeId}> ${ssrInterpolate(work.name)}`);
        } else {
          return [
            createVNode("img", {
              src: "/images/illustration/" + work.svg,
              alt: work.img_alt,
              class: "w-6"
            }, null, 8, ["src", "alt"]),
            createTextVNode(" " + toDisplayString(work.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></div><div class="flex flex-col" data-v-efd65329><h3 class="uppercase text-gray-500" data-v-efd65329>Isolation</h3><!--[-->`);
  ssrRenderList($options.iWorks, (work) => {
    _push(`<li data-v-efd65329>`);
    _push(ssrRenderComponent(_component_Link, {
      onClick: ($event) => {
        $data.showingNavigation = false;
      },
      href: _ctx.route("landing", work.slug),
      class: "ins-link !flex gap-2 items-center"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", "/images/illustration/" + work.svg)}${ssrRenderAttr("alt", work.img_alt)} class="w-6" data-v-efd65329${_scopeId}> ${ssrInterpolate(work.name)}`);
        } else {
          return [
            createVNode("img", {
              src: "/images/illustration/" + work.svg,
              alt: work.img_alt,
              class: "w-6"
            }, null, 8, ["src", "alt"]),
            createTextVNode(" " + toDisplayString(work.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></div><div class="flex flex-col" data-v-efd65329><h3 class="uppercase text-gray-500" data-v-efd65329>Chauffage</h3><!--[-->`);
  ssrRenderList($options.chWorks, (work) => {
    _push(`<li data-v-efd65329>`);
    _push(ssrRenderComponent(_component_Link, {
      onClick: ($event) => {
        $data.showingNavigation = false;
      },
      href: _ctx.route("landing", work.slug),
      class: "ins-link !flex gap-2 items-center"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", "/images/illustration/" + work.svg)}${ssrRenderAttr("alt", work.img_alt)} class="w-6" data-v-efd65329${_scopeId}> ${ssrInterpolate(work.name)}`);
        } else {
          return [
            createVNode("img", {
              src: "/images/illustration/" + work.svg,
              alt: work.img_alt,
              class: "w-6"
            }, null, 8, ["src", "alt"]),
            createTextVNode(" " + toDisplayString(work.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></div></ul></li></ul><div class="flex flex-col gap-4" data-v-efd65329><div data-v-efd65329>`);
  if (_ctx.$page.props.auth.user == null) {
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("login"),
      class: "m-auto table font-semibold px-9 py-4 rounded-full border shadow uppercase"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="fa-solid fa-circle-user mr-2 text-lg leading-4 align-middle" style="${ssrRenderStyle({ "color": "#73efa6" })}" data-v-efd65329${_scopeId}></i> Se Connecter `);
        } else {
          return [
            createVNode("i", {
              class: "fa-solid fa-circle-user mr-2 text-lg leading-4 align-middle",
              style: { "color": "#73efa6" }
            }),
            createTextVNode(" Se Connecter ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("dashboard"),
      class: "m-auto table font-semibold py-5 px-12 uppercase"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$page.props.auth.user.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  }
  _push(`</div><div class="flex" data-v-efd65329>`);
  _push(ssrRenderComponent(_component_btn, { text: "Demander un devis" }, null, _parent));
  _push(`</div></div></div><div class="hidden lg:flex justify-between h-full overflow-hidden rounded-br-2xl rounded-bl-2xl bg-white" data-v-efd65329><ul class="flex items-center h-full" data-v-efd65329><li class="show-interior" data-v-efd65329><a href="javascript:void(0)" class="link" data-v-efd65329>Nos Offres</a><ul class="absolute bg-white flex py-8 rounded border-t-4 shadow border-green-300 interior" data-v-efd65329><i class="fa-solid fa-caret-up text-green-300 text-3xl absolute" style="${ssrRenderStyle({ "top": "-23px", "left": "30px" })}" data-v-efd65329></i><div class="flex flex-col gap-2 border-r" data-v-efd65329><h3 data-v-efd65329>Les Travaux</h3><li data-v-efd65329>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("intermediate", "isolation-maison"),
    class: "!flex items-center gap-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/isolation_global.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-efd65329${_scopeId}> Isolation globale `);
      } else {
        return [
          createVNode("img", {
            src: "/images/illustration/isolation_global.png",
            style: { "max-height": "30px" }
          }),
          createTextVNode(" Isolation globale ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-efd65329>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("landing", "panneaux-solaires-photovoltaiques"),
    class: "!flex items-center gap-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/Panneaux_Photovoltaïques.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-efd65329${_scopeId}> Panneaux photovoltaïques `);
      } else {
        return [
          createVNode("img", {
            src: "/images/illustration/Panneaux_Photovoltaïques.png",
            style: { "max-height": "30px" }
          }),
          createTextVNode(" Panneaux photovoltaïques ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-efd65329>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("landing", "pompe-à-chaleur"),
    class: "!flex items-center gap-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/pompe-a-chaleur.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-efd65329${_scopeId}> Pompe à chaleur `);
      } else {
        return [
          createVNode("img", {
            src: "/images/illustration/pompe-a-chaleur.png",
            style: { "max-height": "30px" }
          }),
          createTextVNode(" Pompe à chaleur ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-efd65329>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("landing", "système-solaire-combiné"),
    class: "!flex items-center gap-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/collaboration.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-efd65329${_scopeId}> Système solaire combiné `);
      } else {
        return [
          createVNode("img", {
            src: "/images/illustration/collaboration.png",
            style: { "max-height": "30px" }
          }),
          createTextVNode(" Système solaire combiné ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></div><div class="flex flex-col gap-2" data-v-efd65329><h3 data-v-efd65329>Les Services</h3><li data-v-efd65329><a href="#" class="!flex items-center gap-2" data-v-efd65329><img src="/images/illustration/bilan_icon.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-efd65329> Bilan énergétique gratuit </a></li><li data-v-efd65329><a href="#" class="!flex items-center gap-2" data-v-efd65329><img src="/images/illustration/audi-energitique.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-efd65329> Audit énergétique </a></li></div></ul></li><li class="show-interior" data-v-efd65329><a href="javascript:void(0)" class="link" data-v-efd65329>Conseils Travaux</a><ul class="absolute bg-white flex py-8 rounded border-t-4 shadow border-green-300 interior left-1/4" data-v-efd65329><i id="solair-lg-plus-i" class="fa-solid fa-caret-up text-green-300 text-3xl absolute" style="${ssrRenderStyle({ "top": "-23px", "left": "130px" })}" data-v-efd65329></i><div class="flex flex-col gap-2 border-r" data-v-efd65329><h3 data-v-efd65329>Énergie Solaire</h3><!--[-->`);
  ssrRenderList($options.esWorks, (work) => {
    _push(`<li data-v-efd65329>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("landing", work.slug),
      class: "!flex !items-center gap-2"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", "/images/illustration/" + work.svg)} style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-efd65329${_scopeId}><span data-v-efd65329${_scopeId}>${ssrInterpolate(work.name)}</span>`);
        } else {
          return [
            createVNode("img", {
              src: "/images/illustration/" + work.svg,
              style: { "max-height": "30px" }
            }, null, 8, ["src"]),
            createVNode("span", null, toDisplayString(work.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></div><div class="flex flex-col gap-2 border-r" data-v-efd65329><h3 data-v-efd65329>Chauffage</h3><!--[-->`);
  ssrRenderList($options.chWorks, (work) => {
    _push(`<li data-v-efd65329>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("landing", work.slug),
      class: "!flex !items-center gap-2"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", "/images/illustration/" + work.svg)} style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-efd65329${_scopeId}><span class="!leading-8" data-v-efd65329${_scopeId}>${ssrInterpolate(work.name)}</span>`);
        } else {
          return [
            createVNode("img", {
              src: "/images/illustration/" + work.svg,
              style: { "max-height": "30px" }
            }, null, 8, ["src"]),
            createVNode("span", { class: "!leading-8" }, toDisplayString(work.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></div><div class="flex flex-col gap-2" data-v-efd65329><h3 data-v-efd65329>Isolation</h3><!--[-->`);
  ssrRenderList($options.iWorks, (work) => {
    _push(`<li data-v-efd65329>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("landing", work.slug),
      class: "!flex !items-center gap-2"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", "/images/illustration/" + work.svg)} style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-efd65329${_scopeId}><span data-v-efd65329${_scopeId}>${ssrInterpolate(work.name)}</span>`);
        } else {
          return [
            createVNode("img", {
              src: "/images/illustration/" + work.svg,
              style: { "max-height": "30px" }
            }, null, 8, ["src"]),
            createVNode("span", null, toDisplayString(work.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></div></ul></li><li class="show-interior" data-v-efd65329><a href="javascript:void(0)" class="link" data-v-efd65329>Découvrez-nous</a><ul class="absolute bg-white flex flex-col p-8 rounded border-t-4 shadow border-green-300 interior" style="${ssrRenderStyle({ "left": "450px" })}" data-v-efd65329><i id="decouvre-lg-plus-i" class="fa-solid fa-caret-up text-green-300 text-3xl absolute" style="${ssrRenderStyle({ "top": "-23px", "left": "90px" })}" data-v-efd65329></i><li data-v-efd65329><a href="javascript:void(0)" class="text-black" data-v-efd65329>Nos offres de travaux</a></li><li data-v-efd65329><a href="javascript:void(0)" class="text-black" data-v-efd65329>Qui sommes-nous ?</a></li><li data-v-efd65329><a href="javascript:void(0)" class="text-black" data-v-efd65329>Nous Contacter</a></li></ul></li></ul><div class="flex items-center gap-3" data-v-efd65329>`);
  if (_ctx.$page.props.auth.user == null) {
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("login"),
      class: "italic link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="fa-solid fa-circle-user mr-2 text-lg leading-4 align-middle text-teal-500" data-v-efd65329${_scopeId}></i> Se Connecter `);
        } else {
          return [
            createVNode("i", { class: "fa-solid fa-circle-user mr-2 text-lg leading-4 align-middle text-teal-500" }),
            createTextVNode(" Se Connecter ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("dashboard"),
      class: "italic link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$page.props.auth.user.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  }
  _push(ssrRenderComponent(_component_btn, {
    class: "!shadow-none",
    text: "Demander un devis"
  }, null, _parent));
  _push(`</div></div></div></div><div id="fakerNavigation" data-v-efd65329></div><!--]-->`);
}
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/customComponents/PrimaryNavigation.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const PrimaryNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["ssrRender", _sfc_ssrRender$D], ["__scopeId", "data-v-efd65329"]]);
const GuestLayout_vue_vue_type_style_index_0_scoped_7f28ea0e_lang = "";
const _sfc_main$X = {
  components: {
    PrimaryNavigation
  }
};
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PrimaryNavigation = resolveComponent("PrimaryNavigation");
  _push(`<!--[--><div class="text-slate-900" data-v-7f28ea0e>`);
  _push(ssrRenderComponent(_component_PrimaryNavigation, null, null, _parent));
  _push(`<div data-v-7f28ea0e>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
  if (!_ctx.route().current("parcour")) {
    _push(`<footer class="w-full bg-slate-500 text-slate-50 pb-8 border-t-4 border-white mt-8" data-v-7f28ea0e><div class="flex flex-col md:flex-row items-center md:mb-4 mb-8" data-v-7f28ea0e><img src="/images/logo-light.png" class="h-48" alt="" data-v-7f28ea0e><h6 class="text-2xl md:text-3xl text-center flex-1" data-v-7f28ea0e>n°1 de la rénovation énergétique en ligne</h6></div><div class="flex flex-col md:flex-row items-center md:items-start md:justify-between mx-12 mb-12 gap-4" data-v-7f28ea0e><div class="w-full md:w-3/12" data-v-7f28ea0e><div class="flex gap-2 mb-4" data-v-7f28ea0e><span class="italic" data-v-7f28ea0e>Suivez nous</span><span class="fb" data-v-7f28ea0e></span><span class="twitter" data-v-7f28ea0e></span><span class="in" data-v-7f28ea0e></span></div><div class="flex flex-col gap-4" data-v-7f28ea0e><p class="text-xl" data-v-7f28ea0e>Un projet ?</p><a${ssrRenderAttr("href", _ctx.route("parcour"))} class="border rounded-full text-center px-8 py-4" data-v-7f28ea0e>DEMANDER UN DEVIS</a></div></div><div class="md:px-4 w-full md:w-3/12" data-v-7f28ea0e><h6 class="font-bold text-lg" data-v-7f28ea0e>ÉNERGIE SOLAIRE</h6><ul class="flex flex-col gap-2" data-v-7f28ea0e><li data-v-7f28ea0e><a${ssrRenderAttr("href", _ctx.route("landing", "panneaux-solaires-photovoltaiques"))} data-v-7f28ea0e>Panneaux Solaires Photovoltaïques</a></li><li data-v-7f28ea0e><a${ssrRenderAttr("href", _ctx.route("landing", "panneau-solaire-thermique"))} data-v-7f28ea0e>Panneaux solaires thermiques</a></li><li data-v-7f28ea0e><a${ssrRenderAttr("href", _ctx.route("landing", "panneau-solaire-hybrides"))} data-v-7f28ea0e>Panneaux solaires hybrides</a></li><li data-v-7f28ea0e><a${ssrRenderAttr("href", _ctx.route("landing", "chauffe-eau-thermodynamique"))} data-v-7f28ea0e>Ballon thermodynamique</a></li></ul></div><div class="md:px-4 w-full md:w-3/12" data-v-7f28ea0e><h6 class="font-bold text-lg text-left" data-v-7f28ea0e>CHAUFFAGE</h6><ul class="flex flex-col gap-2" data-v-7f28ea0e><li data-v-7f28ea0e><a${ssrRenderAttr("href", _ctx.route("landing", "pompe-à-chaleur"))} data-v-7f28ea0e>Pompe à chaleur</a></li><li data-v-7f28ea0e><a${ssrRenderAttr("href", _ctx.route("landing", "poêle-à-granulés"))} data-v-7f28ea0e>Poêles à granulés</a></li><li data-v-7f28ea0e><a${ssrRenderAttr("href", _ctx.route("landing", "système-solaire-combiné"))} data-v-7f28ea0e>Système solaire combiné</a></li></ul></div><div class="md:px-4 w-full md:w-auto" data-v-7f28ea0e><h6 class="font-bold text-lg text-left" data-v-7f28ea0e>ISOLATION</h6><ul class="flex flex-col gap-2" data-v-7f28ea0e><li data-v-7f28ea0e><a${ssrRenderAttr("href", _ctx.route("landing", "isolation-intérieur"))} data-v-7f28ea0e>Murs intérieur</a></li><li data-v-7f28ea0e><a${ssrRenderAttr("href", _ctx.route("landing", "isolation-extérieur"))} data-v-7f28ea0e>Murs extérieur</a></li></ul></div></div><div class="flex md:justify-between mx-12 flex-wrap gap-4" data-v-7f28ea0e><a href="javascript:void(0)" data-v-7f28ea0e>Qui somme nous</a><a href="javascript:void(0)" data-v-7f28ea0e>Nous Contacter</a><span data-v-7f28ea0e>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Lenergia. Tous les droits réservés</span></div></footer>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const GuestLayout = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$C], ["__scopeId", "data-v-7f28ea0e"]]);
const _sfc_main$W = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: {
    message: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const _sfc_main$V = {
  __name: "InputLabel",
  __ssrInlineRender: true,
  props: {
    value: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block font-medium text-sm text-gray-700" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputLabel.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const _sfc_main$U = {};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center px-4 py-3 bg-amber-300 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryButton.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const PrimaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$B]]);
const _sfc_main$T = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    __expose({ focus: () => input.value.focus() });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        class: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
        value: __props.modelValue,
        ref_key: "input",
        ref: input
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const _sfc_main$S = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(GuestLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Confirm Password" }, null, _parent2, _scopeId));
            _push2(`<div class="w-full md:w-8/12 p-6 m-auto mt-6 bg-white shadow-lg rounded"${_scopeId}><div class="mb-4 text-sm text-gray-600"${_scopeId}> Il s&#39;agit d&#39;une zone sécurisée de l&#39;application. Veuillez confirmer votre mot de passe avant de continuer. </div><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$V, {
              for: "password",
              value: "Mot de passe"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$T, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$W, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirmer `);
                } else {
                  return [
                    createTextVNode(" Confirmer ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Confirm Password" }),
              createVNode("div", { class: "w-full md:w-8/12 p-6 m-auto mt-6 bg-white shadow-lg rounded" }, [
                createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Il s'agit d'une zone sécurisée de l'application. Veuillez confirmer votre mot de passe avant de continuer. "),
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$V, {
                      for: "password",
                      value: "Mot de passe"
                    }),
                    createVNode(_sfc_main$T, {
                      id: "password",
                      type: "password",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
                      autocomplete: "current-password",
                      autofocus: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$W, {
                      class: "mt-2",
                      message: unref(form).errors.password
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "flex justify-end mt-4" }, [
                    createVNode(PrimaryButton, {
                      class: ["ml-4", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Confirmer ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ], 40, ["onSubmit"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$S
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$R = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(GuestLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent2, _scopeId));
            _push2(`<div class="w-full md:w-8/12 p-6 m-auto mt-6 bg-white shadow-lg rounded"${_scopeId}><div class="mb-4 text-sm text-gray-600"${_scopeId}> Mot de passe oublié? Aucun problème. Indiquez-nous simplement votre adresse e-mail et nous vous enverrons par e-mail une réinitialisation du mot de passe lien qui vous permettra d&#39;en choisir un nouveau. </div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$V, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$T, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$W, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lien de réinitialisation du mot de passe par e-mail `);
                } else {
                  return [
                    createTextVNode(" Lien de réinitialisation du mot de passe par e-mail ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Forgot Password" }),
              createVNode("div", { class: "w-full md:w-8/12 p-6 m-auto mt-6 bg-white shadow-lg rounded" }, [
                createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Mot de passe oublié? Aucun problème. Indiquez-nous simplement votre adresse e-mail et nous vous enverrons par e-mail une réinitialisation du mot de passe lien qui vous permettra d'en choisir un nouveau. "),
                __props.status ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mb-4 font-medium text-sm text-green-600"
                }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$V, {
                      for: "email",
                      value: "Email"
                    }),
                    createVNode(_sfc_main$T, {
                      id: "email",
                      type: "email",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "username"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$W, {
                      class: "mt-2",
                      message: unref(form).errors.email
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                    createVNode(PrimaryButton, {
                      class: { "opacity-25": unref(form).processing },
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Lien de réinitialisation du mot de passe par e-mail ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ], 40, ["onSubmit"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$R
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Q = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      required: true
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit }) {
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "checkbox",
        value: __props.value,
        checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
        class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
    };
  }
};
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const _sfc_main$P = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(GuestLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent2, _scopeId));
            _push2(`<div class="w-full md:w-6/12 p-6 m-auto mt-6 bg-white shadow-lg rounded"${_scopeId}>`);
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form class=""${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$V, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$T, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$W, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$V, {
              for: "password",
              value: "Mot de passe"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$T, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$W, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$Q, {
              name: "remember",
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>Souviens de moi</span></label></div><div class="flex items-center gap-2 justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Se Connecter `);
                } else {
                  return [
                    createTextVNode(" Se Connecter ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Log in" }),
              createVNode("div", { class: "w-full md:w-6/12 p-6 m-auto mt-6 bg-white shadow-lg rounded" }, [
                __props.status ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mb-4 font-medium text-sm text-green-600"
                }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"]),
                  class: ""
                }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$V, {
                      for: "email",
                      value: "Email"
                    }),
                    createVNode(_sfc_main$T, {
                      id: "email",
                      type: "email",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "username"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$W, {
                      class: "mt-2",
                      message: unref(form).errors.email
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$V, {
                      for: "password",
                      value: "Mot de passe"
                    }),
                    createVNode(_sfc_main$T, {
                      id: "password",
                      type: "password",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
                      autocomplete: "current-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$W, {
                      class: "mt-2",
                      message: unref(form).errors.password
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "block mt-4" }, [
                    createVNode("label", { class: "flex items-center" }, [
                      createVNode(_sfc_main$Q, {
                        name: "remember",
                        checked: unref(form).remember,
                        "onUpdate:checked": ($event) => unref(form).remember = $event
                      }, null, 8, ["checked", "onUpdate:checked"]),
                      createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "Souviens de moi")
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center gap-2 justify-end mt-4" }, [
                    createVNode(PrimaryButton, {
                      class: ["ml-4", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Se Connecter ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ], 40, ["onSubmit"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$P
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$O = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(GuestLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent2, _scopeId));
            _push2(`<div class="w-full md:w-6/12 p-6 m-auto mt-6 bg-white shadow-lg rounded"${_scopeId}><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$V, {
              for: "name",
              value: "Nom complet"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$T, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$W, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$V, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$T, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$W, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$V, {
              for: "password",
              value: "Mot de passe"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$T, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$W, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$V, {
              for: "password_confirmation",
              value: "Confirmer le mot de passe"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$T, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$W, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Déjà enregistré? `);
                } else {
                  return [
                    createTextVNode(" Déjà enregistré? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` S&#39;inscrire `);
                } else {
                  return [
                    createTextVNode(" S'inscrire ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Register" }),
              createVNode("div", { class: "w-full md:w-6/12 p-6 m-auto mt-6 bg-white shadow-lg rounded" }, [
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$V, {
                      for: "name",
                      value: "Nom complet"
                    }),
                    createVNode(_sfc_main$T, {
                      id: "name",
                      type: "text",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "name"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$W, {
                      class: "mt-2",
                      message: unref(form).errors.name
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$V, {
                      for: "email",
                      value: "Email"
                    }),
                    createVNode(_sfc_main$T, {
                      id: "email",
                      type: "email",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      required: "",
                      autocomplete: "username"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$W, {
                      class: "mt-2",
                      message: unref(form).errors.email
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$V, {
                      for: "password",
                      value: "Mot de passe"
                    }),
                    createVNode(_sfc_main$T, {
                      id: "password",
                      type: "password",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$W, {
                      class: "mt-2",
                      message: unref(form).errors.password
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$V, {
                      for: "password_confirmation",
                      value: "Confirmer le mot de passe"
                    }),
                    createVNode(_sfc_main$T, {
                      id: "password_confirmation",
                      type: "password",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      required: "",
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$W, {
                      class: "mt-2",
                      message: unref(form).errors.password_confirmation
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("login"),
                      class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Déjà enregistré? ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(PrimaryButton, {
                      class: ["ml-4", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" S'inscrire ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ], 40, ["onSubmit"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$O
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$N = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.store"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(GuestLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent2, _scopeId));
            _push2(`<div class="w-full md:w-8/12 p-6 m-auto mt-6 bg-white shadow-lg rounded"${_scopeId}><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$V, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$T, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$W, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$V, {
              for: "password",
              value: "Mot de passe"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$T, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$W, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$V, {
              for: "password_confirmation",
              value: "Confirmer le mot de passe"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$T, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$W, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` réinitialiser le mot de passe `);
                } else {
                  return [
                    createTextVNode(" réinitialiser le mot de passe ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Reset Password" }),
              createVNode("div", { class: "w-full md:w-8/12 p-6 m-auto mt-6 bg-white shadow-lg rounded" }, [
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$V, {
                      for: "email",
                      value: "Email"
                    }),
                    createVNode(_sfc_main$T, {
                      id: "email",
                      type: "email",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "username"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$W, {
                      class: "mt-2",
                      message: unref(form).errors.email
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$V, {
                      for: "password",
                      value: "Mot de passe"
                    }),
                    createVNode(_sfc_main$T, {
                      id: "password",
                      type: "password",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$W, {
                      class: "mt-2",
                      message: unref(form).errors.password
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$V, {
                      for: "password_confirmation",
                      value: "Confirmer le mot de passe"
                    }),
                    createVNode(_sfc_main$T, {
                      id: "password_confirmation",
                      type: "password",
                      class: "mt-1 block w-full",
                      modelValue: unref(form).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      required: "",
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$W, {
                      class: "mt-2",
                      message: unref(form).errors.password_confirmation
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                    createVNode(PrimaryButton, {
                      class: { "opacity-25": unref(form).processing },
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" réinitialiser le mot de passe ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ], 40, ["onSubmit"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$N
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$M = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(() => props.status === "verification-link-sent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(GuestLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent2, _scopeId));
            _push2(`<div class="w-full md:w-8/12 p-6 m-auto mt-6 bg-white shadow-lg rounded"${_scopeId}><div class="mb-4 text-sm text-gray-600"${_scopeId}> Merci pour l&#39;enregistrement! Avant de commencer, pourriez-vous vérifier votre adresse e-mail en cliquant sur le lien nous venons de vous envoyer un e-mail ? Si vous n&#39;avez pas reçu l&#39;e-mail, nous vous en enverrons un autre avec plaisir. </div>`);
            if (verificationLinkSent.value) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}> Un nouveau lien de vérification a été envoyé à l&#39;adresse e-mail que vous avez fournie lors de l&#39;inscription. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Renvoyer l&#39;e-mail de vérification `);
                } else {
                  return [
                    createTextVNode(" Renvoyer l'e-mail de vérification ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Se déconnecter`);
                } else {
                  return [
                    createTextVNode("Se déconnecter")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Email Verification" }),
              createVNode("div", { class: "w-full md:w-8/12 p-6 m-auto mt-6 bg-white shadow-lg rounded" }, [
                createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Merci pour l'enregistrement! Avant de commencer, pourriez-vous vérifier votre adresse e-mail en cliquant sur le lien nous venons de vous envoyer un e-mail ? Si vous n'avez pas reçu l'e-mail, nous vous en enverrons un autre avec plaisir. "),
                verificationLinkSent.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mb-4 font-medium text-sm text-green-600"
                }, " Un nouveau lien de vérification a été envoyé à l'adresse e-mail que vous avez fournie lors de l'inscription. ")) : createCommentVNode("", true),
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"])
                }, [
                  createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                    createVNode(PrimaryButton, {
                      class: { "opacity-25": unref(form).processing },
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Renvoyer l'e-mail de vérification ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"]),
                    createVNode(unref(Link), {
                      href: _ctx.route("logout"),
                      method: "post",
                      as: "button",
                      class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Se déconnecter")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ], 40, ["onSubmit"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$M
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$L = {};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    src: "/images/logo-light.png",
    alt: "l'energia logo",
    class: "bg-slate-400 shadow-md rounded-md"
  }, _attrs))}>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$A]]);
const _sfc_main$K = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: String,
      default: "py-1 bg-white"
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      } else if (props.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _sfc_main$I = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" : "block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _sfc_main$G = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="min-h-screen bg-gray-100"><nav class="bg-white border-b border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "block h-24 w-auto fill-current text-gray-800" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "block h-24 w-auto fill-current text-gray-800" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">`);
      _push(ssrRenderComponent(_sfc_main$I, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tableau de bord `);
          } else {
            return [
              createTextVNode(" Tableau de bord ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$I, {
        href: _ctx.route("orders"),
        active: _ctx.route().current("orders")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Commandes `);
          } else {
            return [
              createTextVNode(" Commandes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:flex sm:items-center sm:ml-6"><div class="ml-3 relative">`);
      _push(ssrRenderComponent(_sfc_main$K, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$J, {
              href: _ctx.route("profile.edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$J, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Se Déconnecter `);
                } else {
                  return [
                    createTextVNode(" Se Déconnecter ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$J, {
                href: _ctx.route("profile.edit")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$J, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Se Déconnecter ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-mr-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
        hidden: showingNavigationDropdown.value,
        "inline-flex": !showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
        hidden: !showingNavigationDropdown.value,
        "inline-flex": showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ block: showingNavigationDropdown.value, hidden: !showingNavigationDropdown.value }, "sm:hidden mt-8"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$H, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tableau de bord `);
          } else {
            return [
              createTextVNode(" Tableau de bord ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$H, {
        href: _ctx.route("orders"),
        active: _ctx.route().current("orders")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Commandes `);
          } else {
            return [
              createTextVNode(" Commandes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-4 pb-1 border-t border-gray-200"><div class="px-4"><div class="font-medium text-base text-gray-800">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="font-medium text-sm text-gray-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$H, {
        href: _ctx.route("profile.edit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$H, {
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Se Déconnecter `);
          } else {
            return [
              createTextVNode(" Se Déconnecter ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow"><div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const _sfc_main$F = {
  layout: _sfc_main$G,
  components: { Head }
};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Dashboard" }, null, _parent));
  _push(`<div class="py-12"><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"><div class="p-6 text-gray-900">You&#39;re logged in!</div></div></div></div><!--]-->`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$z]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
const secondeSection_vue_vue_type_style_index_0_scoped_053add81_lang = "";
const _sfc_main$E = {
  components: { Head, Link, btnDevis },
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
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col pt-16 gap-6 bg-white" }, _attrs))} data-v-053add81><h2 class="text-2xl md:text-4xl mx-4 font-extrabold text-center" data-v-053add81>Envie de faire des économies d&#39;énergie</h2><p class="text-xl text-center mb-16 mx-4" data-v-053add81>Des services conçus pour vous :</p><div class="relative flex flex-wrap justify-center gap-8 py-12 px-4 md:mx-6 bg-gradient-to-b to-slate-50 from-slate-100 md:rounded-xl" data-v-053add81><div class="absolute grid grid-cols-3 -top-16 md:-top-12 w-11/12 lg:w-10/12" data-v-053add81><a style="${ssrRenderStyle($data.solair ? "background-color:#a8ecff" : "")}" class="flex flex-col md:flex-row gap-0 md:gap-2 md:justify-center justify-start items-center py-2 md:p-4 md:py-4 md:px-6 rounded bg-white text-sm md:text-base font-bold cursor-pointer border transition-all duration-500" data-v-053add81><img class="w-14 h-14" src="/images/illustration/solaire_icon.png" alt="Passer au solaire" data-v-053add81><span class="flex-1 text-center md:text-left" data-v-053add81>Branchez-vous sur le soleil</span></a><a style="${ssrRenderStyle($data.chauffage ? "background-color:#ffd0b6" : "")}" class="flex flex-col md:flex-row gap-0 md:gap-2 md:justify-center justify-start items-center py-2 md:p-4 md:py-4 md:px-6 rounded bg-white text-sm md:text-base font-bold cursor-pointer border transition-all duration-500" data-v-053add81><img class="w-14 h-14" src="/images/illustration/chauffage_icon.png" alt="Changer mon chauffage" data-v-053add81><span class="flex-1 text-center md:text-left" data-v-053add81>Chauffez-vous proprement</span></a><a style="${ssrRenderStyle($data.isolation ? "background-color: #b9f8d3" : "")}" class="flex flex-col md:flex-row gap-0 md:gap-2 md:justify-center justify-start items-center py-2 md:p-4 md:py-4 md:px-6 rounded bg-white text-sm md:text-base font-bold cursor-pointer border transition-all duration-500" data-v-053add81><img class="w-14 h-14" src="/images/illustration/isolation_icon.png" alt="Isoler ma maison" data-v-053add81><span class="flex-1 text-center md:text-left" data-v-053add81>Limiter les déperditions thermiques</span></a></div>`);
  if ($data.solair) {
    _push(`<div class="w-full m-auto flex flex-wrap justify-center py-6 gap-8" data-v-053add81><div class="flex flex-col md:flex-row w-96 md:w-7/12 bg-white rounded-md overflow-hidden" data-v-053add81><div class="h-32 w-full md:h-full md:w-4/12 !bg-cover" style="${ssrRenderStyle({ "background": "url('/images/home/solaire-section2.png') center" })}" data-v-053add81></div><div class="flex flex-col w-full md:w-8/12" data-v-053add81><h6 class="font-bold p-3" style="${ssrRenderStyle({ "background-color": "#a8ecff" })}" data-v-053add81>Jusqu&#39;à 1 600€ d&#39;économies par an</h6><div class="p-3 px-6 flex flex-col gap-2 items-start h-full text-sm" data-v-053add81><h3 class="text-xl font-bold leading-10" data-v-053add81>Panneaux solaires</h3><p class="" data-v-053add81>Créez de votre toiture une source de production d&#39;électricité, et vous:</p><ul class="list-disc ml-4" data-v-053add81><li class="mb-2" data-v-053add81>Dites adieu aux sources d&#39;énergie traditionnelles en produisant votre propre électricité écologique</li><li data-v-053add81>Bénéficiez d&#39;une réduction de 60 % sur vos dépenses énergétiques</li></ul><p class="" data-v-053add81><b class="text-base" data-v-053add81>Profitez de l&#39;utilisation de panneaux hybrides ?</b><br data-v-053add81><span class="text-sm" data-v-053add81>Alliant chauffage thermique et électricité photovoltaïque, ces panneaux novateurs s&#39;alimentent de la lumière et de la chaleur solaire pour créer une alliance parfaite.</span></p><p class="text-center mt-3" data-v-053add81>Réaliser jusqu&#39;à 60 % d&#39;économies sur vos coûts énergétiques. </p>`);
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
    _push(`<div class="w-full m-auto flex flex-wrap justify-center py-6 gap-8" data-v-053add81><div class="flex flex-col md:flex-row w-96 md:w-5/12 bg-white rounded-md overflow-hidden" data-v-053add81><div class="h-32 w-full md:h-full md:w-5/12 !bg-cover" style="${ssrRenderStyle({ "background": "url('/images/home/chauffage1.jpg') center" })}" data-v-053add81></div><div class="flex flex-col w-full md:w-7/12 h-full" data-v-053add81><h6 class="font-bold p-3" style="${ssrRenderStyle({ "background-color": "#ffd0b6" })}" data-v-053add81>Jusqu&#39;à 1 000€ d&#39;économies par an</h6><div class="px-6 py-4 flex flex-col gap-4 items-start" data-v-053add81><h3 class="text-xl font-bold leading-10" data-v-053add81>Pompe à chaleur</h3><ul class="list-disc ml-4" data-v-053add81><li class="mb-2" data-v-053add81>Efficacité énergétique</li><li class="mb-2" data-v-053add81>Économies financières</li><li data-v-053add81>Distribution homogène de la chaleur</li></ul>`);
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
    _push(`</div></div></div><div class="flex flex-col md:flex-row w-96 md:w-5/12 bg-white rounded-md overflow-hidden" data-v-053add81><div class="h-32 w-full md:h-full md:w-5/12 !bg-cover" style="${ssrRenderStyle({ "background": "url('/images/home/chauffage-2.jpg') center" })}" data-v-053add81></div><div class="flex flex-col w-full md:w-7/12" data-v-053add81><h6 class="font-bold p-3 bg-gray-200" data-v-053add81>Jusqu&#39;à 30% d&#39;économies d&#39;énergie</h6><div class="px-6 py-4 flex flex-col gap-4 items-start" data-v-053add81><h3 class="text-xl font-bold leading-10" data-v-053add81>Chaudière à Gaz</h3><ul class="list-disc ml-4" data-v-053add81><li class="mb-2" data-v-053add81>Chauffage instantané</li><li class="mb-2" data-v-053add81>Solution économique</li><li data-v-053add81>Faibles émissions</li></ul>`);
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
    _push(`</div></div></div><div class="flex flex-col md:flex-row w-96 md:w-5/12 bg-white rounded-md overflow-hidden" data-v-053add81><div class="h-32 w-full md:h-full md:w-5/12 !bg-cover md:bg-auto" style="${ssrRenderStyle({ "background": "url('/images/home/chauffage-3.jpg') no-repeat center" })}" data-v-053add81></div><div class="flex flex-col w-full md:w-7/12" data-v-053add81><h6 class="font-bold p-3 bg-gray-200" data-v-053add81>Jusqu&#39;à 3 800€ d&#39;aides</h6><div class="px-6 py-4 flex flex-col gap-4 items-start" data-v-053add81><h3 class="text-xl font-bold leading-10" data-v-053add81>Chauffage d&#39;appoint</h3><p class="leading-6 text-md" data-v-053add81>Chaleur efficace et combustible écologique, faites des économies d&#39;énergie en optant pour un poêle à granulés.</p>`);
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
    _push(`</div></div></div><div class="flex flex-col md:flex-row w-96 md:w-5/12 bg-white rounded-md overflow-hidden" data-v-053add81><div class="h-32 w-full md:h-full md:w-5/12 !bg-right-top !bg-cover" style="${ssrRenderStyle({ "background": "url('/images/home/chauffage-4.jpeg') center" })}" data-v-053add81></div><div class="flex flex-col w-full md:w-7/12" data-v-053add81><h6 class="font-bold p-3 bg-gray-200" data-v-053add81>Des factures divisées par trois</h6><div class="px-6 py-4 flex flex-col gap-4 items-start" data-v-053add81><h3 class="text-xl font-bold leading-8" data-v-053add81>Chauffe-eau thermodynamique</h3><ul class="list-disc ml-4" data-v-053add81><li class="mb-2" data-v-053add81>Chauffage Rapide</li><li class="mb-2" data-v-053add81>Capacité d&#39;adaptation lors de l&#39;installation</li><li data-v-053add81>Performance tout au long de l&#39;année</li></ul>`);
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
    _push(`<div class="w-full m-auto flex flex-wrap justify-center py-6 gap-8" data-v-053add81><div class="flex flex-col md:flex-row w-96 md:w-7/12 bg-white rounded-md overflow-hidden" data-v-053add81><div class="h-32 w-full md:h-full md:w-4/12 !bg-cover" style="${ssrRenderStyle({ "background": "url('/images/home/section-2-isolation.jpg') center" })}" data-v-053add81></div><div class="flex flex-col w-full md:w-8/12" data-v-053add81><h6 class="font-bold p-3" style="${ssrRenderStyle({ "background-color": "#b9f8d3" })}" data-v-053add81>Jusqu&#39;à 25% d&#39;économies d&#39;énergie</h6><div class="p-6 md:py-8 flex flex-col gap-2 items-start h-full" style="${ssrRenderStyle({ "min-height": "330px" })}" data-v-053add81><h3 class="text-xl font-bold leading-10" data-v-053add81>Isolation des murs</h3><p class="leading-6" data-v-053add81> L&#39;isolation des murs assure un confort accru, prévient les pertes d&#39;énergie et permet des économies significatives </p>`);
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
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/home/secondeSection.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const seconde_section = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$y], ["__scopeId", "data-v-053add81"]]);
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: seconde_section
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center gap-4 py-16 bg-white" }, _attrs))}><h2 class="text-2xl md:text-4xl font-extrabold text-center mx-4">Une équipe dévouée pour vous assurer<br class="hidden md:block"> un chantier en toute tranquillité.</h2><span class="h-2 w-12 bg-green-200 rounded-full"></span><p class="text-xl text-center mx-4">Nos conseillers experts vous guident de A à Z pour la réussite de votre projet.</p><div class="flex flex-col md:flex-row px-4 py-8 gap-8 sm:px-20"><div class="w-full h-36 h-96 md:w-7/12 rounded-md" style="${ssrRenderStyle({ "background": "url('/images/home/section3.jpg') no-repeat center center" })}"></div><div class="grid grid-cols-2 w-full md:w-5/12 gap-4 text-sm md:text-md lg:text-base"><div class="flex flex-col !justify-start gap-2"><img src="/images/illustration/1_section3.png" alt="Des conseillers à votre écoute" class="w-16 h-16"><h6 class="font-bold">Nos conseillers sont à votre disposition</h6><p class="text-gray-700">du lundi au vendredi, de 8h à 19h, pour répondre à vos besoins.</p></div><div class="flex flex-col !justify-start gap-2"><img src="/images/illustration/2_section3.png" alt="Des conseillers à votre écoute" class="w-16 h-16"><h6 class="font-bold">Des experts qualifiés en rénovation</h6><p class="text-gray-700">Maintenant leur expertise à jour avec les avancées du secteur.</p></div><div class="flex flex-col justify-start gap-2"><img src="/images/illustration/3_section3.png" alt="Des conseillers à votre écoute" class="w-16 h-16"><h6 class="font-bold">Un accompagnement personnalisé</h6><p class="text-gray-700">Nos conseils sont spécialement conçus pour s&#39;adapter aux caractéristiques de votre logement.</p></div><div class="flex flex-col !justify-start gap-2"><img src="/images/illustration/4_section3.png" alt="Des conseillers à votre écoute" class="w-16 h-16"><h6 class="font-bold">Simplifiez vos démarches</h6><p class="text-gray-700">Une assistance personnalisée pour bénéficier de la Prime et MaPrimeRenov&#39;</p></div></div></div></div>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/home/ThirdSection.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const third_section = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$x]]);
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: third_section
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {
  data() {
    return {
      counter: 0
    };
  }
};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full md:w-10/12 px-4 py-16 mx-auto" }, _attrs))}><h2 class="text-4xl font-extrabold text-center mb-8">Avis de nos clients</h2><div class="mb-8 flex flex-col gap-2 mx-auto" style="${ssrRenderStyle({ "max-width": "550px" })}"><img src="/images/home/5Start_slate.png" alt="4 start" style="${ssrRenderStyle({ "width": "150px", "margin": "auto" })}"><p class="font-bold text-lg break-words text-center md:text-xl"><span style="${ssrRenderStyle({ "color": "#ff9000" })}">«</span> L&#39;energia a fait un travail extraordinaire ! La qualité du service était impeccable, l&#39;équipe était très sympathique et le résultat final a dépassé mes attentes.Je les recommande chaleureusement. <span style="${ssrRenderStyle({ "color": "#ff9000" })}">»</span></p><span>Nicolas D.</span><span>le 03/06/2023</span></div>`);
  if ($data.counter == 0) {
    _push(`<div class="flex md:flex-row flex-col items-center md:justify-center md:items-stretch w-full gap-4"><div class="flex flex-col justify-between gap-2 w-full md:w-4/12 p-4 rounded bg-white dark:bg-slate-800" style="${ssrRenderStyle({ "max-width": "300px" })}"><div class="flex flex-col gap-2"><div class="cursor-pointer flex justify-start"><img src="/images/home/5Start.png" alt="4 start" style="${ssrRenderStyle({ "width": "120px" })}"></div><p class="text-base md:text-lg font-medium leading-normal text-gray-800 dark:text-white"><span style="${ssrRenderStyle({ "color": "#ff9000" })}">«</span>  Très bien  <span style="${ssrRenderStyle({ "color": "#ff9000" })}">»</span></p></div><div class="flex justify-start items-center flex-row space-x-2.5"><div><img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/21.jpg" alt="Connor Bell"></div><div class="flex flex-col justify-start items-start space-y-2"><p class="text-base font-medium leading-none text-gray-800 dark:text-white">Vincent J</p><p class="text-sm leading-none text-gray-600 dark:text-white">21/7/2023</p></div></div></div><div class="flex flex-col justify-between gap-2 w-full md:w-4/12 p-4 rounded bg-white dark:bg-slate-800" style="${ssrRenderStyle({ "max-width": "300px" })}"><div class="flex flex-col gap-2"><div class="cursor-pointer flex justify-start"><img src="/images/home/5Start.png" alt="4 start" style="${ssrRenderStyle({ "width": "120px" })}"></div><p class="text-base md:text-lg font-medium leading-normal text-gray-800 dark:text-white"><span style="${ssrRenderStyle({ "color": "#ff9000" })}">«</span>  Service compétent et réactif.  <span style="${ssrRenderStyle({ "color": "#ff9000" })}">»</span></p></div><div class="flex justify-start items-center flex-row space-x-2.5"><div><img src="https://i.ibb.co/QcqyrVG/Mask-Group.png" alt="girl-avatar"></div><div class="flex flex-col justify-start items-start space-y-2"><p class="text-base font-medium leading-none text-gray-800 dark:text-white">Anna K</p><p class="text-sm leading-none text-gray-600 dark:text-white">8/7/2023</p></div></div></div><div class="flex flex-col justify-between gap-2 w-full md:w-4/12 p-4 rounded bg-white dark:bg-slate-800" style="${ssrRenderStyle({ "max-width": "300px" })}"><div class="flex flex-col gap-2"><div class="cursor-pointer flex justify-start"><img src="/images/home/4StartAndHalf.png" alt="4 start" style="${ssrRenderStyle({ "width": "120px" })}"></div><p class="text-base md:text-lg font-medium leading-normal text-gray-800 dark:text-white"><span style="${ssrRenderStyle({ "color": "#ff9000" })}">«</span>  C&#39;est clair, respect des RDV. Bien accompagné.  <span style="${ssrRenderStyle({ "color": "#ff9000" })}">»</span></p></div><div class="flex justify-start items-center flex-row space-x-2.5"><div><img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/29.jpg" alt="Lee Fields"></div><div class="flex flex-col justify-start items-start space-y-2"><p class="text-base font-medium leading-none text-gray-800 dark:text-white">Pascal D</p><p class="text-sm leading-none text-gray-600 dark:text-white">14/6/2023</p></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/home/FourthSection.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const fourth_section = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$w]]);
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fourth_section
}, Symbol.toStringTag, { value: "Module" }));
const MailSection_vue_vue_type_style_index_0_scoped_417fab6f_lang = "";
const _sfc_main$B = {};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-16 px-2 bg-white" }, _attrs))} data-v-417fab6f><div style="${ssrRenderStyle({ "min-height": "450px" })}" class="flex flex-col lg:flex-row gap-4 md:gap-0 max-w-xl lg:max-w-none w-full md:w-10/12 shadow-md rounded-xl overflow-hidden mx-auto border" data-v-417fab6f><div class="w-full !bg-cover lg:w-6/12" style="${ssrRenderStyle({ "min-height": "400px", "background": "url('/images/home/mail-section.jpeg') no-repeat top" })}" data-v-417fab6f></div><div class="mx-auto w-full lg:w-6/12" data-v-417fab6f><div class="flex flex-col md:justify-center gap-12 py-6 lg:py-0 px-8 h-full" data-v-417fab6f><h6 class="text-lg md:text-2xl font-bold break-word" data-v-417fab6f>Profitez de conseils avisés pour réaliser des économies d&#39;énergie</h6><p data-v-417fab6f>Interviews d&#39;experts · Astuces · Actualités</p><form class="flex lg:flex-row flex-col gap-4" data-v-417fab6f><input type="email" placeholder="Votre adresse mail*" required class="p-4 rounded-md" data-v-417fab6f><input type="submit" value="Je M&#39;abonne" class="uppercase px-6 py-4 rounded-full text-white bg-slate-700 font-bold shadow" data-v-417fab6f></form><span class="text-xs" data-v-417fab6f>Soyez tranquille, vous pouvez vous désabonner de notre newsletter à tout instant !</span></div></div></div></div>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/home/MailSection.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const mail_section = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$v], ["__scopeId", "data-v-417fab6f"]]);
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mail_section
}, Symbol.toStringTag, { value: "Module" }));
const Home_vue_vue_type_style_index_0_scoped_771e497f_lang = "";
const _sfc_main$A = {
  layout: GuestLayout,
  components: {
    Appelez_nous,
    Head,
    seconde_section,
    third_section,
    fourth_section,
    mail_section,
    Link
  }
};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Appelez_nous = resolveComponent("Appelez_nous");
  const _component_Link = resolveComponent("Link");
  const _component_seconde_section = resolveComponent("seconde_section");
  const _component_third_section = resolveComponent("third_section");
  const _component_fourth_section = resolveComponent("fourth_section");
  const _component_mail_section = resolveComponent("mail_section");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Bienvenue" }, null, _parent));
  _push(`<div id="header" class="relative" data-v-771e497f><div class="p-6 md:p-16 text-slate-100" data-v-771e497f><h1 class="flex flex-col gap-2 font-extrabold md:w-9/12 w-full py-4" data-v-771e497f><span class="text-lg md:text-3xl leading-8 md:leading-10" data-v-771e497f> Pensez vous à devenir <br class="md:hidden" data-v-771e497f>autonome en énergie <br class="hidden md:block" data-v-771e497f>&amp; éviter <br class="md:hidden" data-v-771e497f>de subir les augmentations des factures </span><span class="text-2xl md:text-5xl leading-10 md:leading-relaxed" data-v-771e497f> L&#39;énergia vous accompagne<br data-v-771e497f> de A à Z </span></h1>`);
  _push(ssrRenderComponent(_component_Appelez_nous, null, null, _parent));
  _push(`</div><div class="absolute bottom-0 flex flex-wrap p-2 lg:p-4 gap-2 lg:gap-4 justify-center lg:justify-center bg-gradient-to-r from-slate-50 to-slate-100 w-full lg:w-11/12 lg:rounded-tr-3xl" data-v-771e497f>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("parcour", "panneaux-solaires-photovoltaiques"),
    class: "relative solaire-parent p-2 lg:p-4 bg-white w-28 h-32 lg:w-36 lg:h-36 grid place-items-center text-center rounded-lg shadow-xl overflow-hidden"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/solaire_icon.png" alt="Passer au solaire" data-v-771e497f${_scopeId}><span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10" data-v-771e497f${_scopeId}>Passer au solaire</span><span class="solaire-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" data-v-771e497f${_scopeId}></span>`);
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
    class: "relative chauffage-parent p-2 lg:p-4 bg-white w-28 h-32 lg:w-36 lg:h-36 grid place-items-center text-center rounded-lg shadow-xl overflow-hidden"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/chauffage_icon.png" alt="Changer mon chauffage" data-v-771e497f${_scopeId}><span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10" data-v-771e497f${_scopeId}>Changer mon chauffage</span><span class="chauffage-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" data-v-771e497f${_scopeId}></span>`);
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
    class: "relative isolation-parent p-2 lg:p-4 bg-white w-28 h-32 lg:w-36 lg:h-36 grid place-items-center text-center rounded-lg shadow-xl overflow-hidden"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/isolation_icon.png" alt="Isoler ma maison" data-v-771e497f${_scopeId}><span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10" data-v-771e497f${_scopeId}>Isoler ma maison</span><span class="isolation-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" data-v-771e497f${_scopeId}></span>`);
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
  _push(`<a href="javascript:void(0)" class="relative calcule-parent p-2 lg:p-4 bg-white w-28 h-32 lg:w-36 lg:h-36 grid place-items-center text-center rounded-lg shadow-xl overflow-hidden" data-v-771e497f><img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="\\images\\illustration/calcule_icon.png" alt="Calculer prime &amp; aides" data-v-771e497f><span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10" data-v-771e497f>Calculer prime &amp; aides</span><span class="calcule-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" data-v-771e497f></span></a><a href="javascript:void(0)" class="relative bilan-parent p-2 lg:p-4 bg-white w-28 h-32 lg:w-36 lg:h-36 grid place-items-center text-center rounded-lg shadow-xl overflow-hidden" data-v-771e497f><img class="w-12 h-12 lg:w-16 lg:h-16 z-10" src="/images/illustration/bilan_icon.png" alt="Mon bilan énergétique" data-v-771e497f><span class="font-bold capitalize text-sm lg:text-base text-slate-900 z-10" data-v-771e497f>Mon bilan énergétique*</span><span class="bilan-hover absolute w-2 h-2 rounded-full left-2 top-2 z-0" data-v-771e497f></span></a></div></div>`);
  _push(ssrRenderComponent(_component_seconde_section, null, null, _parent));
  _push(ssrRenderComponent(_component_third_section, null, null, _parent));
  _push(ssrRenderComponent(_component_fourth_section, null, null, _parent));
  _push(ssrRenderComponent(_component_mail_section, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$u], ["__scopeId", "data-v-771e497f"]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {
  props: {
    "page": Object
  },
  layout: GuestLayout,
  components: {
    Head,
    Link,
    btnDevis
  },
  data() {
    return {
      works: this.$page.props.works
    };
  },
  methods: {
    toArticle(ref2) {
      this.$refs[ref2][0].scrollIntoView({ behavior: "smooth" });
    }
  },
  computed: {
    esWorks: function() {
      return this.works.filter(function(e) {
        if (e.type == "es")
          return e;
      });
    },
    chWorks: function() {
      return this.works.filter(function(e) {
        if (e.type == "ch")
          return e;
      });
    },
    iWorks: function() {
      return this.works.filter(function(e) {
        if (e.type == "i")
          return e;
      });
    }
  }
};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_btnDevis = resolveComponent("btnDevis");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, {
    title: $props.page.title
  }, null, _parent));
  _push(`<div class="py-4 px-4 md:px-12 lg:px-16"><div class="flex gap-2 items-center text-xs"><a href="/">Accueil</a><i class="fa-solid fa-chevron-right" style="${ssrRenderStyle({ "color": "#73efa6" })}"></i> .. <i class="fa-solid fa-chevron-right" style="${ssrRenderStyle({ "color": "#73efa6" })}"></i><b class="overflow-hidden text-ellipsis leading-4 max-w-xs whitespace-nowrap">${$props.page.title}</b></div><div class="flex mt-4 gap-6"><div class="absolute md:static w-4/12 hidden md:block p-4"><div class="w-3/4 m-auto"><div class="font-semibold text-lg mb-2">Sommaire</div>`);
  if ($props.page.type == "es") {
    _push(`<ul class="flex flex-col gap-4 break-words"><!--[-->`);
    ssrRenderList($options.esWorks, (work) => {
      _push(`<li class="flex gap-2"><i class="fa-solid leading-6 fa-circle" style="${ssrRenderStyle({ "color": "#72efa6", "font-size": ".5em" })}"></i><a class="hover:font-semibold cursor-pointer">${ssrInterpolate(work.name)}</a></li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.page.type == "ch") {
    _push(`<ul class="flex flex-col gap-4 break-words"><!--[-->`);
    ssrRenderList($options.chWorks, (work) => {
      _push(`<li class="flex gap-2"><i class="fa-solid leading-6 fa-circle" style="${ssrRenderStyle({ "color": "#72efa6", "font-size": ".5em" })}"></i><a class="hover:font-semibold cursor-pointer">${ssrInterpolate(work.name)}</a></li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.page.type == "i") {
    _push(`<ul class="flex flex-col gap-4 break-words"><!--[-->`);
    ssrRenderList($options.iWorks, (work) => {
      _push(`<li class="flex gap-2"><i class="fa-solid leading-6 fa-circle" style="${ssrRenderStyle({ "color": "#72efa6", "font-size": ".5em" })}"></i><a class="hover:font-semibold cursor-pointer">${ssrInterpolate(work.name)}</a></li>`);
    });
    _push(`<!--]--></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="text-slate-800 w-full md:w-8/12 px-4 md:px-12 py-8 flex flex-col gap-8 bg-white rounded"><div class=""><h1 class="text-2xl lg:text-3xl font-bold">${ssrInterpolate($props.page.title)}</h1></div>`);
  if ($props.page.type == "es") {
    _push(`<div><!--[-->`);
    ssrRenderList($options.esWorks, (work) => {
      _push(`<div class="flex flex-col gap-4 mb-6 py-4"><h3 class="flex gap-4 p-4 items-center font-bold text-xl"><img class="w-12"${ssrRenderAttr("src", "/images/illustration/" + work.svg)}${ssrRenderAttr("alt", work.img_alt)}> ${ssrInterpolate(work.title)}</h3><div class="relative"><div class="p-4 text-lg leading-8 bg-slate-50 rounded h-32 overflow-hidden">${work.description}</div>`);
      _push(ssrRenderComponent(_component_Link, {
        href: "/" + work.slug,
        class: "absolute right-4 -bottom-6 font-bold capitalize p-4 py-2 rounded hover:bg-slate-500 bg-slate-400 text-slate-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Savoir Plus`);
          } else {
            return [
              createTextVNode("Savoir Plus")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_btnDevis, {
        text: "J'ESTIME MON DEVIS",
        slug: work.slug,
        class: "my-6"
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.page.type == "ch") {
    _push(`<div><!--[-->`);
    ssrRenderList($options.chWorks, (work) => {
      _push(`<div class="flex flex-col gap-4 mb-6 py-4"><h3 class="flex gap-4 p-4 items-center font-bold text-xl"><img class="w-12"${ssrRenderAttr("src", "/images/illustration/" + work.svg)}${ssrRenderAttr("alt", work.img_alt)}> ${ssrInterpolate(work.title)}</h3><div class="relative"><div class="p-4 text-lg leading-8 bg-slate-50 rounded h-32 overflow-hidden">${work.description}</div>`);
      _push(ssrRenderComponent(_component_Link, {
        href: "/" + work.slug,
        class: "absolute right-4 -bottom-6 font-bold capitalize p-4 py-2 rounded hover:bg-slate-500 bg-slate-400 text-slate-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Savoir Plus`);
          } else {
            return [
              createTextVNode("Savoir Plus")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_btnDevis, {
        text: "J'ESTIME MON DEVIS",
        slug: work.slug,
        class: "my-6"
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.page.type == "i") {
    _push(`<div><!--[-->`);
    ssrRenderList($options.iWorks, (work) => {
      _push(`<div class="flex flex-col gap-4 mb-6 py-4"><h3 class="flex gap-4 p-4 items-center font-bold text-xl"><img class="w-12"${ssrRenderAttr("src", "/images/illustration/" + work.svg)}${ssrRenderAttr("alt", work.img_alt)}> ${ssrInterpolate(work.title)}</h3><div class="relative"><div class="p-4 text-lg leading-8 bg-slate-50 rounded h-32 overflow-hidden">${work.description}</div>`);
      _push(ssrRenderComponent(_component_Link, {
        href: "/" + work.slug,
        class: "absolute right-4 -bottom-6 font-bold capitalize p-4 py-2 rounded hover:bg-slate-500 bg-slate-400 text-slate-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Savoir Plus`);
          } else {
            return [
              createTextVNode("Savoir Plus")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_btnDevis, {
        text: "J'ESTIME MON DEVIS",
        slug: work.slug,
        class: "my-6"
      }, null, _parent));
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><!--]-->`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/IntermediatePage.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const IntermediatePage = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$t]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: IntermediatePage
}, Symbol.toStringTag, { value: "Module" }));
const LandingPage_vue_vue_type_style_index_0_lang = "";
const _sfc_main$y = {
  props: ["work", "articles", "faqs"],
  layout: GuestLayout,
  components: {
    Head,
    btnDevis,
    ref
  },
  data() {
    return {
      sommair_interior: false
    };
  },
  methods: {
    showNext(event) {
      document.querySelectorAll("#faq p").forEach((element) => {
        if (element.classList.contains("!block"))
          element.classList.remove("!block");
        element.parentNode.classList.add("hover:bg-slate-100");
      });
      event.target.nextSibling.classList.add("!block");
      event.target.parentNode.classList.remove("hover:bg-slate-100");
    },
    showInterior(event) {
      var parent;
      if (/i/i.test(event.target.tagName))
        parent = event.target.parentNode.parentNode;
      else
        parent = event.target.parentNode;
      const ul = parent.querySelector("ul");
      if (this.sommair_interior == false) {
        ul.classList.add("!h-auto");
        ul.classList.add("!p-4");
        this.sommair_interior = true;
      } else {
        ul.classList.remove("!h-auto");
        ul.classList.remove("!p-4");
        this.sommair_interior = false;
      }
    },
    toArticle(ref2) {
      console.log(this.$refs);
      if (ref2 == "faq")
        this.$refs[ref2].scrollIntoView({ behavior: "smooth" });
      else
        this.$refs[ref2][0].scrollIntoView({ behavior: "smooth" });
    }
  }
};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_btnDevis = resolveComponent("btnDevis");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, {
    title: $props.work.meta_title
  }, null, _parent));
  _push(`<div class="py-4 px-4 md:px-12 lg:px-16"><div class="flex gap-2 items-center text-xs"><a href="/">Accueil</a><i class="fa-solid fa-chevron-right" style="${ssrRenderStyle({ "color": "#73efa6" })}"></i> .. <i class="fa-solid fa-chevron-right" style="${ssrRenderStyle({ "color": "#73efa6" })}"></i><b class="overflow-hidden text-ellipsis leading-4 max-w-xs whitespace-nowrap">${$props.work.title}</b></div><div class="flex mt-4 gap-6"><div class="absolute md:static w-4/12 hidden md:block p-4"><div class="w-3/4 m-auto"><div class="font-semibold text-lg mb-2">Sommaire</div><ul class="flex flex-col gap-4 break-words"><!--[-->`);
  ssrRenderList($props.articles, (article) => {
    _push(`<li class="flex gap-2"><i class="fa-solid leading-6 fa-circle" style="${ssrRenderStyle({ "color": "#72efa6", "font-size": ".5em" })}"></i><a class="shadow-text cursor-pointer">${ssrInterpolate(article.title)}</a></li>`);
  });
  _push(`<!--]--><li class="flex gap-2"><i class="fa-solid leading-6 fa-circle" style="${ssrRenderStyle({ "color": "#72efa6", "font-size": ".5em" })}"></i><a class="shadow-text cursor-pointer">FAQ</a></li></ul></div></div><div class="text-slate-800 w-full md:w-8/12 px-4 md:px-12 py-6 flex flex-col gap-8 bg-white rounded"><div class="md:hidden flex flex-col gap-2"><a href="javascript:void(0)" class="block font-semibold text-lg md:text-lg cursor-pointer py-2 px-8 rounded text-white bg-emerald-300"> Sommaire  <i class="fa-solid fa-caret-down"></i></a><ul class="flex flex-col gap-4 break-words p-0 rounded bg-white text-sm h-0 overflow-hidden bg-slate-100"><!--[-->`);
  ssrRenderList($props.articles, (article) => {
    _push(`<li class="flex gap-2"><i class="fa-solid leading-6 fa-circle" style="${ssrRenderStyle({ "color": "#72efa6", "font-size": ".5em" })}"></i><a class="hover:font-semibold cursor-pointer">${ssrInterpolate(article.title)}</a></li>`);
  });
  _push(`<!--]--></ul></div><div class="flex flex-col gap-6"><h1 class="text-2xl lg:text-3xl font-bold">${$props.work.title}</h1>`);
  if ($props.work.img) {
    _push(`<img${ssrRenderAttr("src", "/images/works/img/" + $props.work.img)} class="w-full">`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p class="break-words leading-8" style="${ssrRenderStyle({ "word-spacing": "1px", "letter-spacing": ".5px" })}">${$props.work.description}</p><p style="${ssrRenderStyle({ "word-spacing": ".7px", "letter-spacing": ".2px", "text-align": "center" })}">`);
  if ($props.work.id == 1) {
    _push(`<strong class="text-center">Optez pour l&#39;offre Panneaux Solaires Photovoltaïques et commencez à produire votre propre électricité !</strong>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.work.id == 2) {
    _push(`<strong class="text-center">Profitez d&#39;une simulation gratuite pour estimer votre devis solaire et découvrir le montant potentiel de vos économies.</strong>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.work.id == 3) {
    _push(`<strong class="text-center">Profitez de l&#39;utilisation de panneaux hybrides pour réaliser jusqu&#39;à 80 % d&#39;économies sur vos coûts énergétiques. 👇</strong>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.work.id == 4) {
    _push(`<strong class="text-center">Optez pour un choix gagnant avec le cumulus thermodynamique pour des économies d&#39;énergie et une empreinte carbone réduite.</strong>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.work.id == 5) {
    _push(`<strong class="text-center">Envie d&#39;installer une pompe à chaleur ? Obtenez votre devis gratuit dès maintenant !</strong>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.work.id == 6) {
    _push(`<strong class="text-center">Passez au poêle à granulés ! Obtenez votre devis gratuit aujourd&#39;hui</strong>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.work.id == 7) {
    _push(`<strong class="text-center">Dans cet article, nous allons explorer l&#39;essentiel du Système Solaire Combiné, son fonctionnement, ainsi que les coûts associés et les subventions disponibles.</strong>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.work.id == 8) {
    _push(`<strong class="text-center">Faites le calcule de vos aides pour l&#39;isolation intérieure de vos murs !</strong>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.work.id == 9) {
    _push(`<strong class="text-center">Calculez vos aides pour l&#39;isolation des murs par l&#39;extérieur !</strong>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</p></div><div class="flex flex-col">`);
  if ($props.work.type == "es") {
    _push(ssrRenderComponent(_component_btnDevis, {
      text: "JE CALCULE MES AIDES",
      slug: $props.work.slug
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.work.id == 5) {
    _push(ssrRenderComponent(_component_btnDevis, {
      text: "J'ESTIME MON DEVIS",
      slug: $props.work.slug
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.work.id == 6) {
    _push(ssrRenderComponent(_component_btnDevis, {
      text: "J'ESTIME MON DEVIS",
      slug: $props.work.slug
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.work.id == 7) {
    _push(ssrRenderComponent(_component_btnDevis, {
      text: "JE CALCULE MES AIDES",
      slug: $props.work.slug
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.work.id == 8) {
    _push(ssrRenderComponent(_component_btnDevis, {
      text: "JE CALCULE MES AIDES",
      slug: $props.work.slug
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.work.id == 9) {
    _push(ssrRenderComponent(_component_btnDevis, {
      text: "JE CALCULE MES AIDES",
      slug: $props.work.slug
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<i class="m-auto text-sm">Simulation gratuite en 2 minutes</i></div><!--[-->`);
  ssrRenderList($props.articles, (article) => {
    _push(`<div class="article flex flex-col gap-8"><h2 class="text-xl md:text-2xl font-bold">${ssrInterpolate(article.title)}</h2><div class="little-article flex flex-col gap-6">${article.article}</div>`);
    if (article.btnText) {
      _push(ssrRenderComponent(_component_btnDevis, {
        text: article.btnText
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--><div id="faq" class="flex flex-col gap-4"><h2 class="text-2xl font-bold">FAQ</h2><!--[-->`);
  ssrRenderList($props.faqs, (faq) => {
    _push(`<div class="flex flex-col gap-3 p-3 bg-slate-200 text-black rounded hover:bg-slate-100"><h3 class="cursor-pointer !font-semibold !text-base">${ssrInterpolate(faq.h3)}</h3><p class="hidden">${ssrInterpolate(faq.p)}</p></div>`);
  });
  _push(`<!--]--></div></div></div></div><!--]-->`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/LandingPage.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const LandingPage = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$s]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LandingPage
}, Symbol.toStringTag, { value: "Module" }));
const viewOrder_vue_vue_type_style_index_0_scoped_f24710b8_lang = "";
const _sfc_main$x = {
  props: ["view"],
  emits: ["current"],
  data() {
    return {
      interieur: false,
      exterieur: false,
      pompe: false,
      photovoltaique: false,
      activeWork: null,
      successMessage: null,
      errorMessage: null,
      viewCreateWork: false,
      reviewState: useForm({
        state: this.view.reviewState
      }),
      clientInfos: useForm({
        gender: this.view.client.gender,
        lastName: this.view.client.lastName,
        firstName: this.view.client.firstName,
        phone: this.view.client.phone,
        email: this.view.client.email,
        logementType: this.view.logementType,
        logementConstruction: this.view.logementConstruction,
        logementSurface: this.view.logementSurface,
        logementEnergie: this.view.logementEnergie,
        logementEnergieType: this.view.logementEnergieType
      }),
      projectForm: useForm({
        currentElectricityBill: this.view.currentElectricityBill,
        kilowattsPerYear: this.view.kilowattsPerYear,
        taxIncome: this.view.taxIncome,
        roofType: this.view.roofType,
        roofOrientation: this.view.roofOrientation,
        interieurSurface: this.view.interieurSurface,
        exterieurSurface: this.view.exterieurSurface,
        exterieurRevetement: this.view.exterieurRevetement,
        surfaceChauffee: this.view.surfaceChauffee,
        eauChaudeSanitaire: this.view.eauChaudeSanitaire,
        EspaceExterieur: this.view.EspaceExterieur,
        statusProjet: this.view.statusProjet,
        travauxAdresse: this.view.travauxAdresse,
        utilisateurStatus: this.view.utilisateurStatus,
        menageComposition: this.view.menageComposition,
        menageRevenus: this.view.menageRevenus
      }),
      createWorkForm: useForm({
        work: null,
        interieurSurface: "",
        exterieurSurface: "",
        exterieurRevetement: "",
        surfaceChauffee: "",
        eauChaudeSanitaire: "",
        EspaceExterieur: "",
        currentElectricityBill: "",
        kilowattsPerYear: "",
        taxIncome: "",
        roofType: "",
        roofOrientation: ""
      })
    };
  },
  mounted() {
    this.getActiveQuestions();
  },
  methods: {
    loadQuestions(event) {
      let workId = event.target.value;
      if (workId == 1)
        this.activeWork = 1;
      else if (workId == 5)
        this.activeWork = 5;
      else if (workId == 8)
        this.activeWork = 8;
      else if (workId == 9)
        this.activeWork = 9;
      else
        this.activeWork = null;
    },
    getActiveQuestions() {
      let works = this.view.works;
      this.interieur = false;
      this.exterieur = false;
      this.pompe = false;
      this.photovoltaique = false;
      for (let i = 0; i < works.length; i++) {
        if (works[i].name == "Panneaux Solaires Photovoltaïques")
          this.photovoltaique = true;
        if (works[i].name == "Murs intérieur")
          this.interieur = true;
        if (works[i].name == "Murs extérieur")
          this.exterieur = true;
        if (works[i].name == "Pompe à chaleur")
          this.pompe = true;
      }
    },
    delete(workId, i) {
      let orderId = this.view.id;
      router.get("/delete-work", { workID: workId, orderID: orderId }, {
        preserveState: true,
        preserveScroll: true,
        onBefore: () => confirm("Est ce que vous etes sur de vouloir supprimer le travaux?"),
        onSuccess: () => {
          this.view.works.splice(i, 1);
          this.getActiveQuestions();
          this.successMessage = this.$page.props.flash.message;
          setTimeout(() => {
            this.successMessage = null;
          }, 4e3);
        }
      });
    },
    UpdateClientInfos() {
      let form = this.clientInfos, errors = this.clientInfos.errors, pattern_text = /^[a-z ]+$/i, pattern_number = /^\d{1,3}$/, pattern_phone = /^(0)?[0-9]{9}$/, pattern_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!pattern_text.test(form.lastName)) {
        errors.lastName = "Le Nom est requis contenir des alphabets!";
        return;
      } else
        errors.lastName = null;
      if (!pattern_text.test(form.firstName)) {
        errors.firstName = "Le Prénom est requis contenir des alphabets!";
        return;
      } else
        errors.firstName = null;
      if (!pattern_phone.test(form.phone)) {
        errors.phone = "Le Téléphone est requise dois contenu 10 chiffres !";
        return;
      } else
        errors.phone = null;
      if (!pattern_email.test(form.email)) {
        errors.email = "Adresse e-mail valide requise!";
        return;
      } else
        errors.email = null;
      if (!pattern_number.test(form.logementSurface)) {
        errors.logementSurface = "Le champ Logement Surface requis contenant 3 chiffres au max!";
        return;
      } else
        errors.logementSurface = null;
      if (!pattern_number.test(form.logementSurface)) {
        errors.logementSurface = "Le champ Logement Surface requis contenant 3 chiffres au max!";
        return;
      } else
        errors.logementSurface = null;
      if (form.logementEnergie == "Chauffage au fioul" || form.logementEnergie == "Chauffage électrique" || form.logementEnergie == "Chauffage au gaz") {
        if (this.$refs.energyType.value == "") {
          errors.logementEnergieType = "Le champ Logement Energie Type est requis!";
          return;
        } else
          errors.logementEnergieType = null;
      } else
        errors.logementEnergieType = null;
      if (errors.firstName == null && errors.lastName == null && errors.phone == null && errors.email == null && errors.logementSurface == null && errors.logementEnergieType == null)
        this.clientInfos.post("/update-client/" + this.view.id, {
          preserveScroll: true,
          preserveState: true
        });
    },
    UpdateProjectForm() {
      let form = this.projectForm, errors = this.projectForm.errors, pattern_number = /^\d{1,3}$/, pattern_Adresse = /^[a-z0-9 ]+$/i;
      if (this.photovoltaique && !pattern_number.test(form.currentElectricityBill)) {
        errors.currentElectricityBill = "Le champ requis. contenant des chiffres au max!";
        return;
      } else
        errors.currentElectricityBill = null;
      if (this.photovoltaique && !pattern_number.test(form.kilowattsPerYear)) {
        errors.kilowattsPerYear = "Le champ requis. contenant des chiffres au max!";
        return;
      } else
        errors.kilowattsPerYear = null;
      if (this.photovoltaique && !pattern_number.test(form.taxIncome)) {
        errors.taxIncome = "Le champ requis. contenant des chiffres au max!";
        return;
      } else
        errors.taxIncome = null;
      if (this.photovoltaique && form.roofType == "") {
        errors.roofType = "Le champ requis!";
        return;
      } else
        errors.roofType = null;
      if (this.photovoltaique && form.roofOrientation == "") {
        errors.roofOrientation = "Le champ requis!";
        return;
      } else
        errors.roofOrientation = null;
      if (this.interieur == true && !pattern_number.test(form.interieurSurface)) {
        errors.interieurSurface = "Le champ requis. contenant 3 chiffres au max!";
        return;
      } else
        errors.interieurSurface = null;
      if (this.exterieur == true && !pattern_number.test(form.exterieurSurface)) {
        errors.exterieurSurface = "Le champ requis. contenant 3 chiffres au max!";
        return;
      } else
        errors.exterieurSurface = null;
      if (this.pompe == true && !pattern_number.test(form.surfaceChauffee)) {
        errors.surfaceChauffee = "Le champ est requis. contenant 3 chiffres au max!";
        return;
      } else
        errors.surfaceChauffee = null;
      if (!pattern_Adresse.test(form.travauxAdresse)) {
        errors.travauxAdresse = "Veuillez fournir une adresse domicile valide!";
        return;
      } else
        errors.travauxAdresse = null;
      if (!pattern_number.test(form.menageComposition)) {
        errors.menageComposition = "Le champ requis. max 3 chiffres";
        return;
      } else
        errors.menageComposition = null;
      if (errors.interieurSurface == null && errors.exterieurSurface == null && errors.surfaceChauffee == null && errors.travauxAdresse == null && errors.menageComposition == null)
        this.projectForm.post("/update-order/" + this.view.id, {
          preserveScroll: true,
          preserveState: true
        });
    },
    createWork() {
      let form = this.createWorkForm, errors = this.createWorkForm.errors, pattern_number = /^\d{1,3}$/;
      if (form.work == null) {
        errors.work = "Veuillez sélectionner un travaux!";
        return;
      } else
        errors.work = null;
      if (this.activeWork == 1 && !pattern_number.test(form.currentElectricityBill)) {
        errors.currentElectricityBill = "Le champ requis. contenant des chiffres au max!";
        return;
      } else
        errors.currentElectricityBill = null;
      if (this.activeWork == 1 && !pattern_number.test(form.kilowattsPerYear)) {
        errors.kilowattsPerYear = "Le champ requis. contenant des chiffres au max!";
        return;
      } else
        errors.kilowattsPerYear = null;
      if (this.activeWork == 1 && !pattern_number.test(form.taxIncome)) {
        errors.taxIncome = "Le champ requis. contenant des chiffres au max!";
        return;
      } else
        errors.taxIncome = null;
      if (this.activeWork == 1 && form.roofType == "") {
        errors.roofType = "Le champ requis!";
        return;
      } else
        errors.roofType = null;
      if (this.activeWork == 1 && form.roofOrientation == "") {
        errors.roofOrientation = "Le champ requis!";
        return;
      } else
        errors.roofOrientation = null;
      if (this.activeWork == 8 && !pattern_number.test(form.interieurSurface)) {
        errors.interieurSurface = "Le champ requis. contenant 3 chiffres au max!";
        return;
      } else
        errors.interieurSurface = null;
      if (this.activeWork == 9 && !pattern_number.test(form.exterieurSurface)) {
        errors.exterieurSurface = "Le champ requis. contenant 3 chiffres au max!";
        return;
      } else
        errors.exterieurSurface = null;
      if (this.activeWork == 9 && form.exterieurRevetement == "") {
        errors.exterieurRevetement = "Le champ requis!";
        return;
      } else
        errors.exterieurRevetement = null;
      if (this.activeWork == 5 && !pattern_number.test(form.surfaceChauffee)) {
        errors.surfaceChauffee = "Le champ est requis. contenant 3 chiffres au max!";
        return;
      } else
        errors.surfaceChauffee = null;
      if (this.activeWork == 5 && form.eauChaudeSanitaire == "") {
        errors.eauChaudeSanitaire = "Le champ est requis!";
        return;
      } else
        errors.eauChaudeSanitaire = null;
      if (this.activeWork == 5 && form.EspaceExterieur == "") {
        errors.EspaceExterieur = "Le champ est requis!";
        return;
      } else
        errors.EspaceExterieur = null;
      let worked = "";
      if (errors.work == null && errors.currentElectricityBill == null && errors.kilowattsPerYear == null && errors.taxIncome == null && errors.roofType == null && errors.roofOrientation == null && errors.interieurSurface == null && errors.exterieurSurface == null && errors.exterieurRevetement == null && errors.surfaceChauffee == null && errors.eauChaudeSanitaire == null && errors.EspaceExterieur == null)
        this.createWorkForm.post("/create-work/" + this.view.id, {
          preserveScroll: true,
          onSuccess: () => {
            this.viewCreateWork = false;
            if (this.$page.props.flash.message) {
              this.$page.props.works.forEach((work) => {
                if (work.id == form.work)
                  worked = work.name;
              });
              this.view.works.push({ id: form.work, name: worked });
              if (form.work == 1) {
                this.projectForm.currentElectricityBill = this.createWorkForm.currentElectricityBill;
                this.projectForm.kilowattsPerYear = this.createWorkForm.kilowattsPerYear;
                this.projectForm.taxIncome = this.createWorkForm.taxIncome;
                this.projectForm.roofType = this.createWorkForm.roofType;
                this.projectForm.roofOrientation = this.createWorkForm.roofOrientation;
                this.photovoltaique = true;
              } else if (form.work == 8) {
                this.projectForm.interieurSurface = this.createWorkForm.interieurSurface;
                this.interieur = true;
              } else if (form.work == 9) {
                this.projectForm.exterieurSurface = this.createWorkForm.exterieurSurface;
                this.projectForm.exterieurRevetement = this.createWorkForm.exterieurRevetement;
                this.exterieur = true;
              } else if (form.work == 5) {
                this.projectForm.surfaceChauffee = this.createWorkForm.surfaceChauffee;
                this.projectForm.eauChaudeSanitaire = this.createWorkForm.eauChaudeSanitaire;
                this.projectForm.EspaceExterieur = this.createWorkForm.EspaceExterieur;
                this.pompe = true;
              }
              this.successMessage = this.$page.props.flash.message;
              setTimeout(() => {
                this.successMessage = null;
              }, 4e3);
            } else if (this.$page.props.flash.error) {
              this.errorMessage = this.$page.props.flash.error;
              setTimeout(() => {
                this.errorMessage = null;
              }, 4e3);
            }
          }
        });
    },
    UpdateReviewState() {
      this.reviewState.post("/review-state/" + this.view.id, {
        preserveScroll: true
      });
    }
  }
};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><span class="table cursor-pointer mb-8 bg-slate-50 hover:bg-slate-100 font-semibold py-3 px-4 rounded" data-v-f24710b8>Retour</span><form class="flex flex-col gap-4 md:gap-8 p-6 mb-8 relative" data-v-f24710b8><div class="flex flex-col md:flex-row p-4 md:p-0 md:justify-start md:items-end rounded bg-slate-50 md:bg-white gap-4" data-v-f24710b8><div class="flex flex-col gap-2 w-full md:w-4/12" data-v-f24710b8><label for="gender" data-v-f24710b8>État d&#39;examen</label><select id="gender" data-v-f24710b8><option value="en revue"${ssrIncludeBooleanAttr($props.view.reviewState == "en revue") ? " selected" : ""} data-v-f24710b8>en revue</option><option value="confirmer"${ssrIncludeBooleanAttr($props.view.reviewState == "confirmer") ? " selected" : ""} data-v-f24710b8>confirmer</option></select></div><input type="button" value="Enregister" class="uppercase py-3 px-12 font-bold cursor-pointer bg-slate-100 hover:bg-slate-200" data-v-f24710b8>`);
  if (this.reviewState.recentlySuccessful) {
    _push(`<div class="text-center font-semibold py-3 text-green-400" data-v-f24710b8>Enregistrée avec succès</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></form><form class="flex flex-col gap-4 md:gap-8 p-6 mb-8 border rounded relative" data-v-f24710b8><legend class="text-xl capitalize font-bold bg-white px-2 absolute" style="${ssrRenderStyle({ "top": "-20px" })}" data-v-f24710b8>information client</legend><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4" data-v-f24710b8><div class="flex flex-col gap-2 w-full md:w-4/12" data-v-f24710b8><label for="gender" data-v-f24710b8>Genre</label><select id="gender" data-v-f24710b8><option value="Madame"${ssrIncludeBooleanAttr($props.view.client.gender == "Madame") ? " selected" : ""} data-v-f24710b8>Madame</option><option value="Monsieur"${ssrIncludeBooleanAttr($props.view.client.gender == "Monsieur") ? " selected" : ""} data-v-f24710b8>Monsieur</option></select></div><div class="relative flex flex-col gap-2 w-full md:w-4/12" data-v-f24710b8><label for="lastName" data-v-f24710b8>Nom</label><input type="text" id="lastName"${ssrRenderAttr("value", this.clientInfos.lastName)} class="${ssrRenderClass($data.clientInfos.errors.lastName ? "border-red-400" : "")}" data-v-f24710b8>`);
  if ($data.clientInfos.errors.lastName) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.clientInfos.errors.lastName)}</span></div><div class="relative flex flex-col gap-2 w-full md:w-4/12" data-v-f24710b8><label for="firstName" data-v-f24710b8>Prénom</label><input type="text" id="firstName"${ssrRenderAttr("value", this.clientInfos.firstName)} class="${ssrRenderClass($data.clientInfos.errors.firstName ? "border-red-400" : "")}" data-v-f24710b8>`);
  if ($data.clientInfos.errors.firstName) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.clientInfos.errors.firstName)}</span></div></div><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4" data-v-f24710b8><div class="relative flex flex-col gap-2 w-full md:w-6/12" data-v-f24710b8><label for="phone" data-v-f24710b8>Téléphone</label><input type="number" id="phone"${ssrRenderAttr("value", $data.clientInfos.phone)} class="${ssrRenderClass($data.clientInfos.errors.phone ? "border-red-400" : "")}" data-v-f24710b8>`);
  if ($data.clientInfos.errors.phone) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.clientInfos.errors.phone)}</span></div><div class="relative flex flex-col gap-2 w-full md:w-6/12" data-v-f24710b8><label for="email" data-v-f24710b8>E mail</label><input type="email" id="email"${ssrRenderAttr("value", $data.clientInfos.email)} class="${ssrRenderClass($data.clientInfos.errors.email ? "border-red-400" : "")}" data-v-f24710b8>`);
  if ($data.clientInfos.errors.email) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.clientInfos.errors.email)}</span></div></div><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4" data-v-f24710b8><div class="flex flex-col gap-2 w-full md:w-4/12" data-v-f24710b8><label for="logementType" data-v-f24710b8>Logement Type</label><select id="logementType" data-v-f24710b8><option value="maison"${ssrIncludeBooleanAttr($props.view.logementType == "maison") ? " selected" : ""} data-v-f24710b8>Maison</option><option value="appartement"${ssrIncludeBooleanAttr($props.view.logementType == "appartement") ? " selected" : ""} data-v-f24710b8>Appartement</option></select></div><div class="flex flex-col gap-2 w-full md:w-4/12" data-v-f24710b8><label for="logementConstruction" data-v-f24710b8>Logement Construction</label><select id="logementConstruction" data-v-f24710b8><option value="-2"${ssrIncludeBooleanAttr($props.view.logementConstruction == "-2") ? " selected" : ""} data-v-f24710b8>Moins de 2 ans</option><option value="2-15"${ssrIncludeBooleanAttr($props.view.logementConstruction == "2-15") ? " selected" : ""} data-v-f24710b8>Entre 2 ans et 15 ans</option><option value="+15"${ssrIncludeBooleanAttr($props.view.logementConstruction == "+15") ? " selected" : ""} data-v-f24710b8>Plus de 15 ans</option></select></div><div class="relative flex flex-col gap-2 w-full md:w-4/12" data-v-f24710b8><label for="logementSurface" data-v-f24710b8>Logement Surface m²</label><input type="number" id="logementSurface"${ssrRenderAttr("value", $data.clientInfos.logementSurface)} class="${ssrRenderClass($data.clientInfos.errors.logementSurface ? "border-red-400" : "")}" data-v-f24710b8>`);
  if ($data.clientInfos.errors.logementSurface) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.clientInfos.errors.logementSurface)}</span></div></div><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4" data-v-f24710b8><div class="flex flex-col gap-2 w-full md:w-6/12" data-v-f24710b8><label for="logementEnergie" data-v-f24710b8>Logement Energie</label><select id="logementEnergie" data-v-f24710b8><option value="Chauffage au fioul"${ssrIncludeBooleanAttr($props.view.logementEnergie == "Chauffage au fioul") ? " selected" : ""} data-v-f24710b8>Chauffage au fioul</option><option value="Chauffage électrique"${ssrIncludeBooleanAttr($props.view.logementEnergie == "Chauffage électrique") ? " selected" : ""} data-v-f24710b8>Chauffage électrique</option><option value="Chauffage au gaz"${ssrIncludeBooleanAttr($props.view.logementEnergie == "Chauffage au gaz") ? " selected" : ""} data-v-f24710b8>Chauffage au gaz</option><option value="Chauffage au bois"${ssrIncludeBooleanAttr($props.view.logementEnergie == "Chauffage au bois") ? " selected" : ""} data-v-f24710b8>Chauffage au bois</option><option value="Pompe à chaleur"${ssrIncludeBooleanAttr($props.view.logementEnergie == "Pompe à chaleur") ? " selected" : ""} data-v-f24710b8>Pompe à chaleur</option><option value="Chauffage au charbon"${ssrIncludeBooleanAttr($props.view.logementEnergie == "Chauffage au charbon") ? " selected" : ""} data-v-f24710b8>Chauffage au charbon</option></select></div><div class="relative flex flex-col gap-2 w-full md:w-6/12" data-v-f24710b8>`);
  if ($data.clientInfos.logementEnergie == "Chauffage au fioul" || $data.clientInfos.logementEnergie == "Chauffage électrique" || $data.clientInfos.logementEnergie == "Chauffage au gaz") {
    _push(`<label for="energieType" data-v-f24710b8> Energie type</label>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.clientInfos.logementEnergie == "Chauffage au fioul") {
    _push(`<select id="energieType" class="${ssrRenderClass($data.clientInfos.errors.logementEnergieType ? "border-red-400" : "")}" data-v-f24710b8><option value="Chaudière à condensation"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Chaudière à condensation") ? " selected" : ""} data-v-f24710b8>Chaudière à condensation</option><option value="Chaudière classique"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Chaudière classique") ? " selected" : ""} data-v-f24710b8>Chaudière classique</option><option value="Poêle"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Poêle") ? " selected" : ""} data-v-f24710b8>Poêle</option></select>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.clientInfos.logementEnergie == "Chauffage électrique") {
    _push(`<select id="energieType" class="${ssrRenderClass($data.clientInfos.errors.logementEnergieType ? "border-red-400" : "")}" data-v-f24710b8><option value="Chaudière électrique"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Chaudière électrique") ? " selected" : ""} data-v-f24710b8>Chaudière électrique</option><option value="Plafonds ou planchers chauffants"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Plafonds ou planchers chauffants") ? " selected" : ""} data-v-f24710b8>Plafonds ou planchers chauffants</option><option value="Radiateurs électriques"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Radiateurs électriques") ? " selected" : ""} data-v-f24710b8>Radiateurs électriques</option></select>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.clientInfos.logementEnergie == "Chauffage au gaz") {
    _push(`<select id="energieType" class="${ssrRenderClass($data.clientInfos.errors.logementEnergieType ? "border-red-400" : "")}" data-v-f24710b8><option value="Chaudière à condensation gaz"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Chaudière à condensation gaz") ? " selected" : ""} data-v-f24710b8>Chaudière à condensation gaz</option><option value="Chaudière classique gaz"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Chaudière classique gaz") ? " selected" : ""} data-v-f24710b8>Chaudière classique gaz</option><option value="Radiateurs électriques"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Radiateurs électriques") ? " selected" : ""} data-v-f24710b8>Radiateur au gaz</option><option value="Poêle au gaz"${ssrIncludeBooleanAttr($data.clientInfos.logementEnergieType == "Poêle au gaz") ? " selected" : ""} data-v-f24710b8>Poêle au gaz</option></select>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.clientInfos.errors.logementEnergieType) {
    _push(`<span class="text-red-400 text-lg absolute right-8 top-9 z-50" data-v-f24710b8>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.clientInfos.errors.logementEnergieType)}</span></div></div>`);
  if (this.clientInfos.recentlySuccessful) {
    _push(`<div class="text-center font-semibold text-green-400" data-v-f24710b8>Enregistrée avec succès</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input type="button" value="Enregister" class="uppercase m-auto py-4 px-12 font-bold cursor-pointer bg-slate-100 hover:bg-slate-200" data-v-f24710b8></form><form class="flex flex-col gap-4 md:gap-8 p-6 border rounded relative" data-v-f24710b8><legend class="text-xl capitalize font-bold bg-white px-2 absolute" style="${ssrRenderStyle({ "top": "-20px" })}" data-v-f24710b8>l&#39;étude de projet </legend><div class="flex flex-col gap-4" data-v-f24710b8><div class="flex gap-4 items-center" data-v-f24710b8><label data-v-f24710b8>Travaux demandés</label><a class="text-sm font-semibold bg-slate-50 hover:bg-slate-100 cursor-pointer p-2 rounded" data-v-f24710b8>Créé travaux</a></div><div class="flex gap-4 flex-wrap" data-v-f24710b8><!--[-->`);
  ssrRenderList(this.view.works, (work, i) => {
    _push(`<div class="relative p-4 bg-slate-50 rounded" data-v-f24710b8>${ssrInterpolate(work.name)} <span class="absolute text-xl cursor-pointer flex leading-4 group" style="${ssrRenderStyle({ "top": "-10px", "right": "-2px" })}" data-v-f24710b8><span class="text-xs text-white bg-red-400 rounded-sm opacity-0 group-hover:opacity-100" data-v-f24710b8>Supprimer</span><i class="fa-solid fa-delete-left text-red-400" data-v-f24710b8></i></span></div>`);
  });
  _push(`<!--]--></div>`);
  if (this.successMessage != null) {
    _push(`<span class="text-green-400 text-sm font-semibold" data-v-f24710b8>${ssrInterpolate(this.successMessage)}</span>`);
  } else {
    _push(`<!---->`);
  }
  if (this.errorMessage != null) {
    _push(`<span class="text-red-400 text-sm font-semibold" data-v-f24710b8>${ssrInterpolate(this.errorMessage)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-8 flex-wrap" data-v-f24710b8>`);
  if (this.photovoltaique) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="ElectricityBill" data-v-f24710b8>Le montant actuelle de la facture d&#39;électricité</label><input type="number" id="ElectricityBill"${ssrRenderAttr("value", $data.projectForm.currentElectricityBill)} class="${ssrRenderClass($data.projectForm.errors.currentElectricityBill ? "border-red-400" : "")}" data-v-f24710b8>`);
    if ($data.projectForm.errors.currentElectricityBill) {
      _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.projectForm.errors.currentElectricityBill) {
      _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.projectForm.errors.currentElectricityBill)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.photovoltaique) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="kilowattsPerYear" data-v-f24710b8>Combien de kilowatts consommer par an ?</label><input type="number" id="kilowattsPerYear"${ssrRenderAttr("value", $data.projectForm.kilowattsPerYear)} class="${ssrRenderClass($data.projectForm.errors.kilowattsPerYear ? "border-red-400" : "")}" data-v-f24710b8>`);
    if ($data.projectForm.errors.kilowattsPerYear) {
      _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.projectForm.errors.kilowattsPerYear) {
      _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.projectForm.errors.kilowattsPerYear)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.photovoltaique) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="taxIncome" data-v-f24710b8>Quel est le revenu total de votre foyer fiscal ?</label><input type="number" id="taxIncome"${ssrRenderAttr("value", $data.projectForm.taxIncome)} class="${ssrRenderClass($data.projectForm.errors.taxIncome ? "border-red-400" : "")}" data-v-f24710b8>`);
    if ($data.projectForm.errors.taxIncome) {
      _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.projectForm.errors.taxIncome) {
      _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.projectForm.errors.taxIncome)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.photovoltaique) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="roofType" data-v-f24710b8>Vous avez quel type de toiture ?</label><select id="roofType" class="${ssrRenderClass($data.projectForm.errors.roofType ? "border-red-400" : "")}" data-v-f24710b8><option disabled selected data-v-f24710b8>Selectionner un type de toiture</option><option value="La toiture plate" data-v-f24710b8>La toiture plate</option><option value="La toiture en pente" data-v-f24710b8>La toiture en pente</option></select>`);
    if ($data.projectForm.errors.roofType) {
      _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.projectForm.errors.roofType)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.photovoltaique) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="roofOrientation" data-v-f24710b8>Quel est l&#39;orientation de votre toiture ?</label><select id="roofOrientation" class="${ssrRenderClass($data.projectForm.errors.roofOrientation ? "border-red-400" : "")}" data-v-f24710b8><option disabled selected data-v-f24710b8>Selectionner une orientation</option><option value="Sud" data-v-f24710b8>Sud</option><option value="Est - Ouest" data-v-f24710b8>Est - Ouest</option><option value="Sud - Est" data-v-f24710b8>Sud - Est</option><option value="Sud - Ouest" data-v-f24710b8>Sud - Ouest</option></select>`);
    if ($data.projectForm.errors.roofOrientation) {
      _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.projectForm.errors.roofOrientation)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.interieur) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="interieurSurface" data-v-f24710b8>Murs Intérieur Surface m²</label><input type="number" id="interieurSurface"${ssrRenderAttr("value", $data.projectForm.interieurSurface)} class="${ssrRenderClass($data.projectForm.errors.interieurSurface ? "border-red-400" : "")}" data-v-f24710b8>`);
    if ($data.projectForm.errors.interieurSurface) {
      _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.projectForm.errors.interieurSurface)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.exterieur) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="exterieurSurface" data-v-f24710b8>Murs Extérieur Surface m²</label><input type="number" id="exterieurSurface"${ssrRenderAttr("value", $data.projectForm.exterieurSurface)} class="${ssrRenderClass($data.projectForm.errors.exterieurSurface ? "border-red-400" : "")}" data-v-f24710b8>`);
    if ($data.projectForm.errors.exterieurSurface) {
      _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.projectForm.errors.exterieurSurface)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.exterieur) {
    _push(`<div class="flex flex-col gap-2" data-v-f24710b8><label for="exterieurRevetement" data-v-f24710b8>Murs Extérieur Revetement</label><select id="exterieurRevetement" data-v-f24710b8><option value="extérieur sous enduit"${ssrIncludeBooleanAttr($data.projectForm.exterieurRevetement == "extérieur sous enduit") ? " selected" : ""} data-v-f24710b8>Extérieur sous enduit</option><option value="extérieur sous bardage"${ssrIncludeBooleanAttr($data.projectForm.exterieurRevetement == "extérieur sous bardage") ? " selected" : ""} data-v-f24710b8>Extérieur sous bardage</option></select></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.pompe) {
    _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="surfaceChauffee" data-v-f24710b8>Surface chauffee par la pompe à chaleur m²</label><input type="number" id="surfaceChauffee"${ssrRenderAttr("value", $data.projectForm.surfaceChauffee)} class="${ssrRenderClass($data.projectForm.errors.surfaceChauffee ? "border-red-400" : "")}" data-v-f24710b8>`);
    if ($data.projectForm.errors.surfaceChauffee) {
      _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.projectForm.errors.surfaceChauffee)}</span></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.pompe) {
    _push(`<div class="flex flex-col gap-2" data-v-f24710b8><label for="eauChaudeSanitaire" data-v-f24710b8>Eau Chaude Sanitaire</label><select id="eauChaudeSanitaire" data-v-f24710b8><option value="Chauffage seul"${ssrIncludeBooleanAttr($data.projectForm.eauChaudeSanitaire == "Chauffage seul") ? " selected" : ""} data-v-f24710b8>Chauffage seul</option><option value="Chauffage eau chaude sanitaire"${ssrIncludeBooleanAttr($data.projectForm.eauChaudeSanitaire == "Chauffage eau chaude sanitaire") ? " selected" : ""} data-v-f24710b8>Chauffage eau chaude sanitaire</option></select></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.pompe) {
    _push(`<div class="flex flex-col gap-2" data-v-f24710b8><label for="EspaceExterieur" data-v-f24710b8>Espace Extérieur pour la pompe à chaleur ?</label><select id="EspaceExterieur" data-v-f24710b8><option value="1"${ssrIncludeBooleanAttr($data.projectForm.EspaceExterieur == 1) ? " selected" : ""} data-v-f24710b8>Oui</option><option value="0"${ssrIncludeBooleanAttr($data.projectForm.EspaceExterieur == 0) ? " selected" : ""} data-v-f24710b8>Non</option></select></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4" data-v-f24710b8><div class="flex flex-col gap-2 w-full md:w-4/12" data-v-f24710b8><label for="statusProjet" data-v-f24710b8>Status Projet</label><select id="statusProjet" data-v-f24710b8><option value="Je réfléchis à mes travaux"${ssrIncludeBooleanAttr($data.projectForm.statusProjet == "Je réfléchis à mes travaux") ? " selected" : ""} data-v-f24710b8>Je réfléchis à mes travaux</option><option value="Je recherche un artisan RGE"${ssrIncludeBooleanAttr($data.projectForm.statusProjet == "Je recherche un artisan RGE") ? " selected" : ""} data-v-f24710b8>Je recherche un artisan RGE</option><option value="Je vais signer mon devis"${ssrIncludeBooleanAttr($data.projectForm.statusProjet == "Je vais signer mon devis") ? " selected" : ""} data-v-f24710b8>Je vais signer mon devis</option></select></div><div class="flex flex-col gap-2 w-full md:w-4/12 relative" data-v-f24710b8><label for="travauxAdresse" data-v-f24710b8>Travaux Adresse</label><input type="text" id="travauxAdresse"${ssrRenderAttr("value", $data.projectForm.travauxAdresse)} class="${ssrRenderClass($data.projectForm.errors.travauxAdresse ? "border-red-400" : "")}" data-v-f24710b8>`);
  if ($data.projectForm.errors.travauxAdresse) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.projectForm.errors.travauxAdresse)}</span></div><div class="flex flex-col gap-2 w-full md:w-4/12" data-v-f24710b8><label for="utilisateurStatus" data-v-f24710b8>Utilisateur Status</label><select id="utilisateurStatus" data-v-f24710b8><option value="Propriétaire occupant"${ssrIncludeBooleanAttr($data.projectForm.utilisateurStatus == "Propriétaire occupant") ? " selected" : ""} data-v-f24710b8>Propriétaire occupant</option><option value="Propriétaire d&#39;une résidence secondaire"${ssrIncludeBooleanAttr($data.projectForm.utilisateurStatus == "Propriétaire d'une résidence secondaire") ? " selected" : ""} data-v-f24710b8>Propriétaire d&#39;une résidence secondaire</option><option value="Propriétaire bailleur"${ssrIncludeBooleanAttr($data.projectForm.utilisateurStatus == "Propriétaire bailleur") ? " selected" : ""} data-v-f24710b8>Propriétaire bailleur</option><option value="Locataire"${ssrIncludeBooleanAttr($data.projectForm.utilisateurStatus == "Locataire") ? " selected" : ""} data-v-f24710b8>Locataire</option></select></div></div><div class="flex flex-col md:flex-row p-4 md:p-0 rounded bg-slate-50 md:bg-white gap-4" data-v-f24710b8><div class="flex flex-col gap-2 w-full md:w-6/12 relative" data-v-f24710b8><label for="menageComposition" data-v-f24710b8>Menage Composition</label><input type="number" id="menageComposition"${ssrRenderAttr("value", $data.projectForm.menageComposition)} class="${ssrRenderClass($data.projectForm.errors.menageComposition ? "border-red-400" : "")}" data-v-f24710b8>`);
  if ($data.projectForm.errors.menageComposition) {
    _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.projectForm.errors.menageComposition)}</span></div><div class="flex flex-col gap-2 w-full md:w-6/12" data-v-f24710b8><label for="menageRevenus" data-v-f24710b8>Menage Revenus</label><select id="menageRevenus" data-v-f24710b8><option value="Inférieur à 16 229 €"${ssrIncludeBooleanAttr($data.projectForm.menageRevenus == "Inférieur à 16 229 €") ? " selected" : ""} data-v-f24710b8>Inférieur à 16 229 €</option><option value="Entre 16 229 € et 20 805 €"${ssrIncludeBooleanAttr($data.projectForm.menageRevenus == "Entre 16 229 € et 20 805 €") ? " selected" : ""} data-v-f24710b8>Entre 16 229 € et 20 805 €</option><option value="Entre 20 805 € et 29 148 €"${ssrIncludeBooleanAttr($data.projectForm.menageRevenus == "Entre 20 805 € et 29 148 €") ? " selected" : ""} data-v-f24710b8>Entre 20 805 € et 29 148 €</option><option value="Supérieur à 29 148 €"${ssrIncludeBooleanAttr($data.projectForm.menageRevenus == "Supérieur à 29 148 €") ? " selected" : ""} data-v-f24710b8>Supérieur à 29 148 €</option></select></div></div>`);
  if (this.projectForm.recentlySuccessful) {
    _push(`<div class="text-center font-semibold text-green-400" data-v-f24710b8>Enregistrée avec succès</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input type="button" value="Enregister" class="uppercase m-auto py-4 px-12 font-bold cursor-pointer bg-slate-100 hover:bg-slate-200" data-v-f24710b8></form>`);
  if ($data.viewCreateWork == true) {
    _push(`<div class="fixed top-0 left-0 right-0 bottom-0 bg-slate-100 py-2 px-12 md:px-36 md:py-6 overflow-y-scroll" style="${ssrRenderStyle({ "-ms-overflow-style": "none", "scrollbar-width": "none" })}" data-v-f24710b8><span class="table cursor-pointer mb-8 bg-white hover:bg-slate-50 font-semibold py-3 px-4 rounded" data-v-f24710b8> Annuler</span><form class="flex flex-col gap-6 md:w-8/12 md:mx-auto" data-v-f24710b8><div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="travaux" class="capitalize" data-v-f24710b8>Selectionner un travail</label><select id="travaux" class="${ssrRenderClass($data.createWorkForm.errors.work ? "border-red-400" : "")}" data-v-f24710b8><option value="" selected disabled hidden data-v-f24710b8>Choisir ici</option><!--[-->`);
    ssrRenderList(this.$page.props.works, (work) => {
      _push(`<option${ssrRenderAttr("value", work.id)} data-v-f24710b8>${ssrInterpolate(work.name)}</option>`);
    });
    _push(`<!--]--></select>`);
    if ($data.createWorkForm.errors.work) {
      _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.createWorkForm.errors.work)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
    if (this.activeWork == 1) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="ElectricityBill" data-v-f24710b8>Le montant actuelle de la facture d&#39;électricité</label><input type="number" id="ElectricityBill"${ssrRenderAttr("value", $data.createWorkForm.currentElectricityBill)} class="${ssrRenderClass($data.createWorkForm.errors.currentElectricityBill ? "border-red-400" : "")}" data-v-f24710b8>`);
      if ($data.createWorkForm.errors.currentElectricityBill) {
        _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.createWorkForm.errors.currentElectricityBill) {
        _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.createWorkForm.errors.currentElectricityBill)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (this.activeWork == 1) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="kilowattsPerYear" data-v-f24710b8>Combien de kilowatts consommer par an ?</label><input type="number" id="kilowattsPerYear"${ssrRenderAttr("value", $data.createWorkForm.kilowattsPerYear)} class="${ssrRenderClass($data.createWorkForm.errors.kilowattsPerYear ? "border-red-400" : "")}" data-v-f24710b8>`);
      if ($data.createWorkForm.errors.kilowattsPerYear) {
        _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.createWorkForm.errors.kilowattsPerYear) {
        _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.createWorkForm.errors.kilowattsPerYear)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (this.activeWork == 1) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="taxIncome" data-v-f24710b8>Quel est le revenu total de votre foyer fiscal ?</label><input type="number" id="taxIncome"${ssrRenderAttr("value", $data.createWorkForm.taxIncome)} class="${ssrRenderClass($data.createWorkForm.errors.taxIncome ? "border-red-400" : "")}" data-v-f24710b8>`);
      if ($data.createWorkForm.errors.taxIncome) {
        _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.createWorkForm.errors.taxIncome) {
        _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.createWorkForm.errors.taxIncome)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (this.activeWork == 1) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="roofType" data-v-f24710b8>Vous avez quel type de toiture ?</label><select id="roofType" class="${ssrRenderClass($data.createWorkForm.errors.roofType ? "border-red-400" : "")}" data-v-f24710b8><option disabled selected data-v-f24710b8>Selectionner un type de toiture</option><option value="La toiture plate" data-v-f24710b8>La toiture plate</option><option value="La toiture en pente" data-v-f24710b8>La toiture en pente</option></select>`);
      if ($data.createWorkForm.errors.roofType) {
        _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.createWorkForm.errors.roofType)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (this.activeWork == 1) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="roofOrientation" data-v-f24710b8>Quel est l&#39;orientation de votre toiture ?</label><select id="roofOrientation" class="${ssrRenderClass($data.createWorkForm.errors.roofOrientation ? "border-red-400" : "")}" data-v-f24710b8><option disabled selected data-v-f24710b8>Selectionner une orientation</option><option value="Sud" data-v-f24710b8>Sud</option><option value="Est - Ouest" data-v-f24710b8>Est - Ouest</option><option value="Sud - Est" data-v-f24710b8>Sud - Est</option><option value="Sud - Ouest" data-v-f24710b8>Sud - Ouest</option></select>`);
      if ($data.createWorkForm.errors.roofOrientation) {
        _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.createWorkForm.errors.roofOrientation)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if (this.activeWork == 8) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="interieurSurface" data-v-f24710b8>Murs Intérieur Surface m²</label><input type="number" id="interieurSurface"${ssrRenderAttr("value", $data.createWorkForm.interieurSurface)} class="${ssrRenderClass($data.createWorkForm.errors.interieurSurface ? "border-red-400" : "")}" data-v-f24710b8>`);
      if ($data.createWorkForm.errors.interieurSurface) {
        _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.createWorkForm.errors.interieurSurface) {
        _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.createWorkForm.errors.interieurSurface)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.activeWork == 9) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="exterieurSurface" data-v-f24710b8>Murs Extérieur Surface m²</label><input type="number" id="exterieurSurface"${ssrRenderAttr("value", $data.createWorkForm.exterieurSurface)} class="${ssrRenderClass($data.createWorkForm.errors.exterieurSurface ? "border-red-400" : "")}" data-v-f24710b8>`);
      if ($data.createWorkForm.errors.exterieurSurface) {
        _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.createWorkForm.errors.exterieurSurface) {
        _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.createWorkForm.errors.exterieurSurface)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.activeWork == 9) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="exterieurRevetement" data-v-f24710b8>Murs Extérieur Revetement</label><select id="exterieurRevetement" class="${ssrRenderClass($data.createWorkForm.errors.exterieurRevetement ? "border-red-400" : "")}" data-v-f24710b8><option value="extérieur sous enduit"${ssrIncludeBooleanAttr($data.createWorkForm.exterieurRevetement == "extérieur sous enduit") ? " selected" : ""} data-v-f24710b8>Extérieur sous enduit</option><option value="extérieur sous bardage"${ssrIncludeBooleanAttr($data.createWorkForm.exterieurRevetement == "extérieur sous bardage") ? " selected" : ""} data-v-f24710b8>Extérieur sous bardage</option></select>`);
      if ($data.createWorkForm.errors.exterieurRevetement) {
        _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.createWorkForm.errors.exterieurRevetement)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.activeWork == 5) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="surfaceChauffee" data-v-f24710b8>Surface chauffee par la pompe à chaleur m²</label><input type="number" id="surfaceChauffee"${ssrRenderAttr("value", $data.createWorkForm.surfaceChauffee)} class="${ssrRenderClass($data.createWorkForm.errors.surfaceChauffee ? "border-red-400" : "")}" data-v-f24710b8>`);
      if ($data.createWorkForm.errors.surfaceChauffee) {
        _push(`<span class="text-red-400 text-lg absolute right-2 top-9" data-v-f24710b8>*</span>`);
      } else {
        _push(`<!---->`);
      }
      if ($data.createWorkForm.errors.surfaceChauffee) {
        _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.createWorkForm.errors.surfaceChauffee)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.activeWork == 5) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="eauChaudeSanitaire" data-v-f24710b8>Eau Chaude Sanitaire</label><select id="eauChaudeSanitaire" class="${ssrRenderClass($data.createWorkForm.errors.eauChaudeSanitaire ? "border-red-400" : "")}" data-v-f24710b8><option value="Chauffage seul"${ssrIncludeBooleanAttr($data.createWorkForm.eauChaudeSanitaire == "Chauffage seul") ? " selected" : ""} data-v-f24710b8>Chauffage seul</option><option value="Chauffage eau chaude sanitaire"${ssrIncludeBooleanAttr($data.createWorkForm.eauChaudeSanitaire == "Chauffage eau chaude sanitaire") ? " selected" : ""} data-v-f24710b8>Chauffage eau chaude sanitaire</option></select>`);
      if ($data.createWorkForm.errors.eauChaudeSanitaire) {
        _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.createWorkForm.errors.eauChaudeSanitaire)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.activeWork == 5) {
      _push(`<div class="flex flex-col gap-2 relative" data-v-f24710b8><label for="EspaceExterieur" data-v-f24710b8>Espace Extérieur pour la pompe à chaleur ?</label><select id="EspaceExterieur" class="${ssrRenderClass($data.createWorkForm.errors.EspaceExterieur ? "border-red-400" : "")}" data-v-f24710b8><option value="1"${ssrIncludeBooleanAttr($data.createWorkForm.EspaceExterieur == 1) ? " selected" : ""} data-v-f24710b8>Oui</option><option value="0"${ssrIncludeBooleanAttr($data.createWorkForm.EspaceExterieur == 0) ? " selected" : ""} data-v-f24710b8>Non</option></select>`);
      if ($data.createWorkForm.errors.EspaceExterieur) {
        _push(`<span class="text-red-400 text-sm" data-v-f24710b8>${ssrInterpolate($data.createWorkForm.errors.EspaceExterieur)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<input type="button" value="Enregister" class="uppercase m-auto mt-8 py-4 px-12 font-bold cursor-pointer bg-slate-300 text-white hover:bg-slate-400" data-v-f24710b8></form></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/viewOrder.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const OrderView = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$r], ["__scopeId", "data-v-f24710b8"]]);
const __vite_glob_0_46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OrderView
}, Symbol.toStringTag, { value: "Module" }));
const Orders_vue_vue_type_style_index_0_scoped_17c45f02_lang = "";
const _sfc_main$w = {
  layout: _sfc_main$G,
  props: ["data"],
  components: {
    Head,
    OrderView
  },
  data() {
    return {
      current: "list",
      view: null
    };
  },
  methods: {
    show(data) {
      this.view = data;
      this.current = "view";
      window.scroll(0, 0);
    },
    getCurrent(value) {
      this.current = value;
    }
  }
};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_OrderView = resolveComponent("OrderView");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Commandes" }, null, _parent));
  _push(`<div class="py-12" data-v-17c45f02><div class="max-w-7xl mx-auto sm:px-6 lg:px-8" data-v-17c45f02><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg" data-v-17c45f02><div class="p-6 text-gray-900" data-v-17c45f02><div class="overflow-x-scroll overscroll-contain scroll-y" data-v-17c45f02>`);
  if (this.current == "list") {
    _push(`<table class="orders rounded overflow-hidden" data-v-17c45f02><tr data-v-17c45f02><th data-v-17c45f02>État d&#39;examen</th><th data-v-17c45f02>nom client</th><th data-v-17c45f02>Téléphone client</th><th data-v-17c45f02>logement Type</th><th data-v-17c45f02>logement Construction</th><th data-v-17c45f02>logement Surface</th><th data-v-17c45f02>logement Energie</th><th data-v-17c45f02>travaux Adresse</th><th data-v-17c45f02>travaux demandés</th></tr><!--[-->`);
    ssrRenderList($props.data, (da) => {
      _push(`<tr class="relative cursor-pointer overflow-hidden" data-v-17c45f02><td data-v-17c45f02>${ssrInterpolate(da.reviewState)}</td><td data-v-17c45f02>${ssrInterpolate(da.client.gender == "Monsieur" ? "Mr" : "Mme")} ${ssrInterpolate(da.client.lastName)} ${ssrInterpolate(da.client.firstName)}</td><td data-v-17c45f02>${ssrInterpolate(da.client.phone)}</td><td data-v-17c45f02>${ssrInterpolate(da.logementType)}</td><td data-v-17c45f02>`);
      if (da.logementConstruction == "-2") {
        _push(`<span data-v-17c45f02>Moins de 2 ans</span>`);
      } else {
        _push(`<!---->`);
      }
      if (da.logementConstruction == "2-15") {
        _push(`<span data-v-17c45f02>Entre 2 ans et 15 ans</span>`);
      } else {
        _push(`<!---->`);
      }
      if (da.logementConstruction == "+15") {
        _push(`<span data-v-17c45f02>Plus de 15 ans</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</td><td data-v-17c45f02>${ssrInterpolate(da.logementSurface)} m²</td><td class="leading-3" data-v-17c45f02>${ssrInterpolate(da.logementEnergie)} <br data-v-17c45f02>`);
      if (da.logementEnergie == "Chauffage au fioul" || da.logementEnergie == "Chauffage électrique" || da.logementEnergie == "Chauffage au gaz") {
        _push(`<span data-v-17c45f02>- <br data-v-17c45f02>${ssrInterpolate(da.logementEnergieType)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</td><td data-v-17c45f02>${ssrInterpolate(da.travauxAdresse)}</td><td data-v-17c45f02><!--[-->`);
      ssrRenderList(da.works, (work) => {
        _push(`<span class="text-xs block text-left mb-2 p-2 bg-white shadow" data-v-17c45f02>${ssrInterpolate(work.name)} <br data-v-17c45f02></span>`);
      });
      _push(`<!--]--></td><span class="rounded" data-v-17c45f02>Afficher</span></tr>`);
    });
    _push(`<!--]--></table>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.data.length == 0) {
    _push(`<div class="px-4" data-v-17c45f02>Il n&#39;y a pas encore d&#39;enregistrements</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.current == "view") {
    _push(ssrRenderComponent(_component_OrderView, {
      view: this.view,
      onCurrent: this.getCurrent
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div><!--]-->`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Orders.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const Orders = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$q], ["__scopeId", "data-v-17c45f02"]]);
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Orders
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DangerButton.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const DangerButton = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$p]]);
const _sfc_main$u = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    watch(
      () => props.show,
      () => {
        if (props.show) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = null;
        }
      }
    );
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e) => {
      if (e.key === "Escape" && props.show) {
        close();
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="${ssrRenderClass([maxWidthClass.value, "mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto"])}">`);
        if (__props.show) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = {
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SecondaryButton.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const confirmingUserDeletion = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      nextTick(() => passwordInput.value.focus());
    };
    const deleteUser = () => {
      form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><header><h2 class="text-lg font-medium text-gray-900">Delete Account</h2><p class="mt-1 text-sm text-gray-600"> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </p></header>`);
      _push(ssrRenderComponent(DangerButton, { onClick: confirmUserDeletion }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Delete Account`);
          } else {
            return [
              createTextVNode("Delete Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$u, {
        show: confirmingUserDeletion.value,
        onClose: closeModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900"${_scopeId}> Are you sure you want to delete your account? </h2><p class="mt-1 text-sm text-gray-600"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. </p><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$V, {
              for: "password",
              value: "Password",
              class: "sr-only"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$T, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              onKeyup: deleteUser
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$W, {
              message: unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$t, { onClick: closeModal }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(DangerButton, {
              class: ["ml-3", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing,
              onClick: deleteUser
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    createTextVNode(" Delete Account ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete your account? "),
                createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                createVNode("div", { class: "mt-6" }, [
                  createVNode(_sfc_main$V, {
                    for: "password",
                    value: "Password",
                    class: "sr-only"
                  }),
                  createVNode(_sfc_main$T, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    onKeyup: withKeys(deleteUser, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                  createVNode(_sfc_main$W, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode(_sfc_main$t, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(DangerButton, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete Account ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$s
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Update Password</h2><p class="mt-1 text-sm text-gray-600"> Ensure your account is using a long, random password to stay secure. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$V, {
        for: "current_password",
        value: "Current Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$T, {
        id: "current_password",
        ref_key: "currentPasswordInput",
        ref: currentPasswordInput,
        modelValue: unref(form).current_password,
        "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "current-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        message: unref(form).errors.current_password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$V, {
        for: "password",
        value: "New Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$T, {
        id: "password",
        ref_key: "passwordInput",
        ref: passwordInput,
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        message: unref(form).errors.password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$V, {
        for: "password_confirmation",
        value: "Confirm Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$T, {
        id: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        message: unref(form).errors.password_confirmation,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Saved.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const user = usePage().props.auth.user;
    const form = useForm({
      name: user.name,
      email: user.email
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Profile Information</h2><p class="mt-1 text-sm text-gray-600"> Update your account&#39;s profile information and email address. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$V, {
        for: "name",
        value: "Name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$T, {
        id: "name",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        autofocus: "",
        autocomplete: "name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$V, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$T, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$W, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div>`);
      if (__props.mustVerifyEmail && unref(user).email_verified_at === null) {
        _push(`<div><p class="text-sm mt-2 text-gray-800"> Your email address is unverified. `);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("verification.send"),
          method: "post",
          as: "button",
          class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Click here to re-send the verification email. `);
            } else {
              return [
                createTextVNode(" Click here to re-send the verification email. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><div style="${ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}" class="mt-2 font-medium text-sm text-green-600"> A new verification link has been sent to your email address. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Saved.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$q
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Profile</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Profile")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"${_scopeId}><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$q, {
              "must-verify-email": __props.mustVerifyEmail,
              status: __props.status,
              class: "max-w-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$r, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$s, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6" }, [
                  createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [
                    createVNode(_sfc_main$q, {
                      "must-verify-email": __props.mustVerifyEmail,
                      status: __props.status,
                      class: "max-w-xl"
                    }, null, 8, ["must-verify-email", "status"])
                  ]),
                  createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [
                    createVNode(_sfc_main$r, { class: "max-w-xl" })
                  ]),
                  createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [
                    createVNode(_sfc_main$s, { class: "max-w-xl" })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$p
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {
  props: ["LogementEnergie", "LogementEnergieType"],
  emits: ["energie-type"],
  methods: {
    goNext(value) {
      this.$emit("energie-type", value);
    }
  }
};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if ($props.LogementEnergie == "Chauffage au fioul") {
    _push(`<div><h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold">Quel type d&#39;équipement au fioul est installé ?</h3><p class="mt-8 text-center">Les chaudières installées depuis moins de 10 ans sont généralement à condensation</p><div class="md:w-10/12 grid md:grid-cols-3 gap-4 m-auto mt-8"><div class="${ssrRenderClass([this.LogementEnergieType == "Chaudière à condensation" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img class="w-24 md:w-36" src="/images/illustration/chaudiere_condensation.png" alt="fioul"><span class="font-bold md:text-sm">Chaudière à condensation</span>`);
    if (this.LogementEnergieType == "Chaudière à condensation") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Chaudière classique" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/chaudiere_classique.png" alt="fioul" class="w-24 md:w-36"><span class="font-bold md:text-sm">Chaudière classique</span>`);
    if (this.LogementEnergieType == "Chaudière classique") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Poêle" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/poele.png" alt="fioul" class="w-24 md:w-36"><span class="font-bold md:text-sm">Poêle</span>`);
    if (this.LogementEnergieType == "Poêle") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.LogementEnergie == "Chauffage électrique") {
    _push(`<div><h3 class="text-center text-lg md:text-2xl font-bold md:font-extrabold"> Quel type d&#39;équipement électrique est installé ? </h3><div class="md:w-10/12 grid md:grid-cols-3 gap-4 m-auto mt-8"><div class="${ssrRenderClass([this.LogementEnergieType == "Chaudière électrique" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/chaudiere_electrique.png" alt="electrique" class="w-24 md:w-36"><span class="font-bold md:text-sm">Chaudière électrique</span>`);
    if (this.LogementEnergieType == "Chaudière électrique") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Plafonds ou planchers chauffants" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/Plafonds_chauffants.png" alt="fioul" class="w-24 md:w-36"><span class="font-bold md:text-sm">Plafonds ou planchers chauffants</span>`);
    if (this.LogementEnergieType == "Plafonds ou planchers chauffants") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Radiateurs électriques" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/Radiateurs_électriques.png" alt="fioul" class="w-24 md:w-36"><span class="font-bold md:text-sm">Radiateurs électriques</span>`);
    if (this.LogementEnergieType == "Radiateurs électriques") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.LogementEnergie == "Chauffage au gaz") {
    _push(`<div><h3 class="text-center text-lg md:text-2xl font-bold md:font-extrabold">Quel type d&#39;équipement au gaz est installé ?</h3><p class="mt-8 text-center">Les chaudières installées depuis moins de 10 ans sont généralement à condensation</p><div class="w-full grid md:grid-cols-4 md:gap-4 gap-2 m-auto mt-8"><div class="${ssrRenderClass([this.LogementEnergieType == "Chaudière à condensation gaz" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/chaudiere_condensation_gaz.png" alt="gaz" class="w-24 md:w-36"><span class="font-bold md:text-sm">Chaudière à condensation</span>`);
    if (this.LogementEnergieType == "Chaudière à condensation gaz") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Chaudière classique gaz" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/chaudiere_classique_gaz.png" alt="gaz" class="w-24 md:w-36"><span class="font-bold md:text-sm">Chaudière classique</span>`);
    if (this.LogementEnergieType == "Chaudière classique gaz") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Radiateur au gaz" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/Radiateur_gaz.png" alt="gaz" class="w-24 md:w-36"><span class="font-bold md:text-sm">Radiateur au gaz</span>`);
    if (this.LogementEnergieType == "Radiateur au gaz") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div><div class="${ssrRenderClass([this.LogementEnergieType == "Poêle au gaz" ? "shadow-lg border" : "", "relative flex flex-col items-center justify-center text-center p-4 bg-white rounded hover:shadow-lg cursor-pointer"])}"><img src="/images/illustration/Poêle_gaz.png" alt="gaz" class="w-24 md:w-36"><span class="font-bold md:text-sm">Poêle au gaz</span>`);
    if (this.LogementEnergieType == "Poêle au gaz") {
      _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
    } else {
      _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
    }
    _push(`</div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Logement/EnergieType.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const EnergieType = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o]]);
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EnergieType
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {
  emits: ["logement-construction"],
  props: ["LogementConstruction"]
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center font-bold md:font-extrabold text-xl md:text-2xl break-word md:p-2 mb-6">De quand date la construction du logement concerné par les travaux? </h3><p class="text-center mb-6">Cela permet de nous assurer de votre éligibilité aux différentes aides.</p><div class="md:w-10/12 w-full m-auto grid md:grid-cols-3 gap-4"><div class="relative p-4 flex flex-col items-center justify-center gap-4 hover:shadow-xl cursor-pointer bg-white rounded"><img class="w-24 md:w-36" src="/images/illustration/31.png" alt="calendar"><span class="font-bold">Moins de 2 ans</span>`);
  if (this.LogementConstruction == "-2") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative p-4 flex flex-col items-center justify-center gap-4 hover:shadow-xl cursor-pointer bg-white rounded"><img class="w-24 md:w-36" src="/images/illustration/31-2.png" alt="calendar"><span class="font-bold">Entre 2 ans et 15 ans</span>`);
  if (this.LogementConstruction == "2-15") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative p-4 flex flex-col items-center justify-center gap-4 hover:shadow-xl cursor-pointer bg-white rounded"><img class="w-24 md:w-36" src="/images/illustration/31-3.png" alt="calendar"><span class="font-bold">Plus de 15 ans</span>`);
  if (this.LogementConstruction == "15+") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Logement/LogementConstruction.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const LogementConstruction = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n]]);
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LogementConstruction
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {
  emits: ["logement-energie"],
  props: ["LogementEnergie"]
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold"> Quelle est l&#39;énergie de chauffage actuelle de votre logement ? </h3><p class="mt-8 text-center">Si vous avez plusieurs énergies de chauffage, indiquez-nous la principale</p><div class="md:w-10/12 grid grid-cols-3 gap-4 mt-8 m-auto"><div class="${ssrRenderClass([$props.LogementEnergie == "Chauffage au fioul" ? "shadow-xl bg-white" : "", "py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"])}"><img src="/images/illustration/fioul.png" alt="fioul" class="w-4/12 m-auto"><span>Chauffage au fioul</span></div><div class="${ssrRenderClass([$props.LogementEnergie == "Chauffage électrique" ? "!shadow-xl bg-white" : "", "py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"])}"><img src="/images/illustration/electric.png" alt="electric" class="w-4/12 m-auto"><span>Chauffage électrique</span></div><div class="${ssrRenderClass([$props.LogementEnergie == "Chauffage au gaz" ? "shadow-xl bg-white" : "", "py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"])}"><img src="/images/illustration/gaz.png" alt="gaz" class="w-4/12 m-auto"><span>Chauffage au gaz</span></div><div class="${ssrRenderClass([$props.LogementEnergie == "Chauffage au bois" ? "shadow-xl bg-white" : "", "py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"])}"><img src="/images/illustration/woodfire.png" alt="woodfire" class="w-4/12 m-auto"><span>Chauffage au bois</span></div><div class="${ssrRenderClass([$props.LogementEnergie == "Pompe à chaleur" ? "shadow-xl bg-white" : "", "py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"])}"><img src="/images/illustration/pompchaleur.png" alt="pompe a chaleur" class="w-4/12 m-auto"><span>Pompe à chaleur</span></div><div class="${ssrRenderClass([$props.LogementEnergie == "Chauffage au charbon" ? "shadow-xl bg-white" : "", "py-6 flex flex-col gap-2 text-sm font-semibold text-center bg-slate-50 rounded shadow-sm hover:shadow-xl hover:bg-white cursor-pointer"])}"><img src="/images/illustration/charbon.png" alt="Chauffage au charbon" class="w-4/12 m-auto"><span>Chauffage au charbon</span></div></div><!--]-->`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Logement/LogementEnergie.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const LogementEnergie = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m]]);
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LogementEnergie
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {
  emits: ["update:modelValue"],
  props: ["modelValue", "error_surface", "getNext"],
  methods: {}
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold mb-6">Quelle est la surface habitable de votre logement ?</h3><div class="flex flex-col gap-2 justify-center md:w-10/12 m-auto"><label class="text-left text-sm font-semibold" for="surface">Surface en m²</label><input type="number" id="surface"${ssrRenderAttr("value", $props.modelValue)} class="rounded"><span class="text-red-400">${ssrInterpolate($props.error_surface)}</span></div><!--]-->`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Logement/LogementSurface.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const LogementSurface = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l]]);
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LogementSurface
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {
  props: ["LogementType"],
  emits: ["logement-type"]
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="flex gap-4 items-center justify-center font-bold md:font-extrabold text-xl md:text-2xl mb-6"><img style="${ssrRenderStyle({ "width": "120px" })}" src="/images/illustration/fairy.png" alt="fairy"><span class="italic">Calculez vos aides et obtenez votre devis travaux</span></h3><span class="w-12 h-2 bg-green-200 m-auto mb-6 block rounded"></span><p class="font-bold md:font-extrabold text-lg md:text-2xl text-center mb-6">Votre projet concerne : </p><div class="flex gap-4 md:gap-6 justify-center"><div class="${ssrRenderClass([this.LogementType == "maison" ? "shadow-xl" : "", "bg-white p-4 md:p-8 w-40 md:w-auto rounded relative flex flex-col items-center gap-4 hover:shadow-xl cursor-pointer"])}"><img class="w-24 md:w-36" src="/images/illustration/house.png" alt="une maison"><span class="font-semibold md:font-bold text-sm md:text-base">Une maison</span>`);
  if (this.LogementType == "maison") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="${ssrRenderClass([this.LogementType == "appartement" ? "shadow-xl" : "", "bg-white p-4 md:p-8 w-40 md:w-auto rounded relative flex flex-col items-center gap-4 hover:shadow-xl cursor-pointer"])}"><img class="w-24 md:w-36" src="/images/illustration/apartment.png" alt="un appartement"><span class="font-semibold md:font-bold text-sm md:text-base">Un appartement</span>`);
  if (this.LogementType == "appartement") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Logement/LogementType.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const LogementType = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k]]);
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LogementType
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {
  emits: ["update:modelValue"],
  props: ["modelValue", "error", "getNext"],
  methods: {}
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold mb-6">Quel est le montant de votre facture d&#39;électricité actuelle ?</h3><div class="flex flex-col gap-2 justify-center md:w-8/12 w-9/12 m-auto"><label class="text-left text-sm font-semibold" for="Montant">Montant en euros</label><input type="number" id="Montant"${ssrRenderAttr("value", $props.modelValue)} class="rounded"><span class="text-red-400">${ssrInterpolate($props.error)}</span></div><!--]-->`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/ElectricityBill.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const electricityBill = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j]]);
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: electricityBill
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {
  emits: ["update:modelValue"],
  props: ["modelValue", "getNext"]
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold mb-6">Combien de kilowatts consommez-vous par an ?</h3><div class="flex flex-col gap-2 justify-center md:w-8/12 w-9/12 m-auto"><label class="text-left text-sm font-semibold" for="Kilowatts">(kilowatts)</label><input type="number" id="Kilowatts"${ssrRenderAttr("value", $props.modelValue)} class="rounded"></div><!--]-->`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/KilowattsPerYear.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const KilowattsPerYear = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i]]);
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KilowattsPerYear
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  props: ["roofOrientation", "getNext"],
  emits: ["roof-orientation"],
  methods: {
    showOtions() {
      document.getElementById("select").classList.toggle("!block");
    },
    select(text) {
      this.$emit("roof-orientation", text);
      document.getElementById("select").classList.remove("!block");
    }
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="flex items-center justify-center font-bold md:font-extrabold text-xl md:text-2xl mb-6"> Quel est l&#39;orientation de votre toiture ? </h3><span class="w-12 h-2 bg-green-200 m-auto mb-6 block rounded"></span><p class="font-bold md:font-extrabold text-lg md:text-xl text-center mb-12">Sélectionné une orientation de votre toit</p><div class="relative mt-2 md:w-8/12 w-9/12 mx-auto"><button type="button" class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label"><span class="flex items-center"><span class="ml-3 block truncate">${ssrInterpolate(this.roofOrientation.length != 0 ? this.roofOrientation : "Select un item")}</span></span><span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"><svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd"></path></svg></span></button><ul id="select" class="hidden absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3"><li class="${ssrRenderClass([this.roofOrientation == "Sud" ? "!bg-gray-100" : "", "hover:bg-gray-100 text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"])}" id="listbox-option-0" role="option"><div class="flex items-center"><span class="font-normal ml-3 block truncate">Sud</span></div><span class="${ssrRenderClass([this.roofOrientation == "Sud" ? "!inline-block" : "", "hidden text-indigo-600 absolute inset-y-1 right-3 flex justify-center items-center"])}"><svg class="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg></span></li><li class="${ssrRenderClass([this.roofOrientation == "Est - Ouest" ? "!bg-gray-100" : "", "hover:bg-gray-100 text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"])}" id="listbox-option-0" role="option"><div class="flex items-center"><span class="font-normal ml-3 block truncate">Est - Ouest</span></div><span class="${ssrRenderClass([this.roofOrientation == "Est - Ouest" ? "!inline-block" : "", "hidden text-indigo-600 absolute inset-y-1 right-3 flex justify-center items-center"])}"><svg class="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg></span></li><li class="${ssrRenderClass([this.roofOrientation == "Sud - Est" ? "!bg-gray-100" : "", "hover:bg-gray-100 text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"])}" id="listbox-option-0" role="option"><div class="flex items-center"><span class="font-normal ml-3 block truncate">Sud - Est</span></div><span class="${ssrRenderClass([this.roofOrientation == "Sud - Est" ? "!inline-block" : "", "hidden text-indigo-600 absolute inset-y-1 right-3 flex justify-center items-center"])}"><svg class="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg></span></li><li class="${ssrRenderClass([this.roofOrientation == "Sud - Ouest" ? "!bg-gray-100" : "", "hover:bg-gray-100 text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"])}" id="listbox-option-0" role="option"><div class="flex items-center"><span class="font-normal ml-3 block truncate">Sud - Ouest</span></div><span class="${ssrRenderClass([this.roofOrientation == "Sud - Ouest" ? "!inline-block" : "", "hidden text-indigo-600 absolute inset-y-1 right-3 flex justify-center items-center"])}"><svg class="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg></span></li></ul></div><!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/RoofOrientations.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const RoofOrientation = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h]]);
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RoofOrientation
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  props: ["roofType", "getNext"],
  emits: ["roof-type"],
  methods: {
    goNext(value) {
      this.$emit("roof-type", value);
      return this.getNext();
    }
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="flex items-center justify-center font-bold md:font-extrabold text-xl md:text-2xl mb-6"> Vous avez quel type de toiture ? </h3><span class="w-12 h-2 bg-green-200 m-auto mb-6 block rounded"></span><p class="font-bold md:font-extrabold text-lg md:text-xl text-center mb-6">Sélectionné un type de toiture</p><div class="w-full flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 m-auto mt-8"><div class="${ssrRenderClass([this.roofType == "La toiture plate" ? "shadow-lg border" : "", "relative flex flex-row md:flex-col items-center justify-start overflow-hidden text-center gap-2 bg-white rounded hover:shadow-lg cursor-pointer md:pb-3"])}"><img src="/images/illustration/toiture-plate.png" alt="La toiture plate" class="w-32 md:w-36"><span class="font-bold text-base flex-1">La toiture plate</span>`);
  if (this.roofType == "La toiture plate") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="${ssrRenderClass([this.roofType == "La toiture en pente" ? "shadow-lg border" : "", "relative flex flex-row md:flex-col items-center justify-start overflow-hidden text-center gap-2 bg-white rounded hover:shadow-lg cursor-pointer md:pb-3"])}"><img src="/images/illustration/toiture-en-pente.png" alt="la toiture en pente" class="w-32 md:w-36"><span class="font-bold text-base flex-1">La toiture en pente</span>`);
  if (this.roofType == "La toiture en pente") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/RoofType.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const RoofType = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RoofType
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {
  emits: ["update:modelValue"],
  props: ["modelValue", "error", "getNext"],
  methods: {}
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-bold md:font-extrabold mb-6">Quel est le revenu total de votre foyer fiscal ?</h3><div class="flex flex-col gap-2 justify-center w-9/12 md:w-8/12 m-auto"><label class="text-left text-sm font-semibold" for="TaxIncome">Revenu en (euro)</label><input type="number" id="TaxIncome"${ssrRenderAttr("value", $props.modelValue)} class="rounded"><span class="text-red-400">${ssrInterpolate($props.error)}</span></div><!--]-->`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/TaxIncome.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const TaxIncome = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TaxIncome
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  props: ["eauChaudeSanitaire"],
  emits: ["EauChaudeSanitaire"],
  methods: {
    goNext(value) {
      this.$emit("EauChaudeSanitaire", value);
    }
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/chaudeSanitaire.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const chaudeSanitaire = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: chaudeSanitaire
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  props: ["ExterieurRevetement"],
  emits: ["exterior-revetement"],
  methods: {
    goNext(value) {
      this.$emit("exterior-revetement", value);
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-extrabold mb-12">Quel type de revêtement extérieur préférez-vous pour vos murs ? </h3><div class="grid md:grid-cols-2 gap-4"><div class="relative flex flex-col items-left gap-4 p-8 rounded bg-white hover:shadow-xl cursor-pointer"><span class="font-bold text-lg">Isolation extérieur sous enduit</span><p class="text-xs">Cela consiste à poser des panneaux isolants avant de les recouvrir d&#39;un sous-enduit. On y intègre ensuite un treillis souple avant de finir par l&#39;application de l&#39;enduit de finition. <b>C&#39;est généralement la solution la plus économique</b>.</p><img src="/images/works/article/isolation-ext-sous-enduit.png" alt="enduit" class="rounded">`);
  if (this.ExterieurRevetement == "extérieur sous enduit") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative flex flex-col items-left gap-4 p-8 rounded bg-white hover:shadow-xl cursor-pointer"><span class="font-bold text-lg">Isolation extérieur sous bardage</span><p class="text-xs">Cela consiste à fixer les panneaux isolants contre une ossature en bois ou métallique. Puis, un bardage (planches de bois, briques, métal, ardoises..) <b>recouvre l&#39;ensemble pour une finition esthétique souvent plus coûteuse.</b></p><img src="/images/works/article/isolation-ext-sous-bardage.png" alt="enduit" class="rounded">`);
  if (this.ExterieurRevetement == "extérieur sous bardage") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/isolationRevetement.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const isolationRevetement = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: isolationRevetement
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  props: ["interiorSurface", "error_surface", "murs", "getNext"],
  emits: ["update:modelValue"]
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-extrabold mb-6"> Quelle est la surface approximative de murs ${ssrInterpolate(this.murs)} à isoler ? </h3><p class="mb-6 text-center">Cela suffit pour estimer vos aides : votre artisan mesurera vos murs lors de sa visite.</p><div class="flex flex-col gap-2 justify-center md:w-10/12 m-auto"><label class="text-left text-sm font-semibold" for="surface">Surface en m²</label><input type="number" id="surface"${ssrRenderAttr("value", $props.interiorSurface)} class="rounded"><span class="text-red-400">${ssrInterpolate($props.error_surface)}</span></div><!--]-->`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/isolationSurface.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const isolationSurface = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: isolationSurface
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  props: ["worksIds", "currentWork"],
  emits: ["works-ids"],
  data() {
    return {
      error: false,
      works: this.$page.props.works
    };
  },
  methods: {
    select(work_id) {
      let array = this.worksIds;
      if (array.length >= 5) {
        this.error = true;
        window.scrollTo(0, 0);
      } else
        this.error = false;
      if (!array.includes(work_id) && this.error == false) {
        array.push(work_id);
      } else {
        const index2 = array.indexOf(work_id);
        if (index2 > -1) {
          array.splice(index2, 1);
        }
      }
      this.$emit("works-ids", this.worksIds);
    }
  },
  computed: {
    esWorks: function() {
      return this.works.filter(function(e) {
        if (e.type == "es")
          return e;
      });
    },
    chWorks: function() {
      return this.works.filter(function(e) {
        if (e.type == "ch")
          return e;
      });
    },
    iWorks: function() {
      return this.works.filter(function(e) {
        if (e.type == "i")
          return e;
      });
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.currentWork == null) {
    _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-center text-xl md:text-2xl font-extrabold mb-6">Quels travaux souhaitez-vous réaliser dans votre logement ? </h3><p class="mb-6 text-center">Vous pouvez sélectionner plusieurs réponses.</p>`);
    if (this.error) {
      _push(`<div class="flex gap-4 rounded items-center z-10 bg-slate-200 p-6 mb-6"><i class="fa-solid fa-circle-exclamation text-red-300 text-2xl"></i><span class="text-slate-900 font-semibold">Vous pouvez sélectionner au maximum 5 types de travaux.</span></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="mb-4 w-10/12 mx-auto"><h4 class="mb-4 text-md text-slate-500 uppercase font-bold">Solaire</h4><div class="grid md:grid-cols-3 gap-4"><!--[-->`);
    ssrRenderList($options.esWorks, (work) => {
      _push(`<div><div class="relative h-full bg-white flex flex-col gap-2 py-4 items-center justify-between rounded-lg cursor-pointer shadow hover:shadow-lg"><img${ssrRenderAttr("src", "/images/illustration/" + work.svg)}${ssrRenderAttr("alt", work.img_alt)} style="${ssrRenderStyle({ "width": "120px" })}"><span class="text-sm font-semibold text-center">${ssrInterpolate(work.name)}</span>`);
      if (this.worksIds.includes(work.id)) {
        _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
      } else {
        _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
      }
      _push(`</div></div>`);
    });
    _push(`<!--]--></div></div><div class="mb-4 w-10/12 mx-auto"><h4 class="mb-4 text-md text-slate-500 uppercase font-bold">Chauffage</h4><div class="grid md:grid-cols-3 gap-4"><!--[-->`);
    ssrRenderList($options.chWorks, (work) => {
      _push(`<div><div class="relative h-full bg-white flex flex-col gap-2 py-4 items-center justify-between rounded-lg cursor-pointer shadow hover:shadow-lg"><img${ssrRenderAttr("src", "/images/illustration/" + work.svg)}${ssrRenderAttr("alt", work.img_alt)} style="${ssrRenderStyle({ "width": "120px" })}"><span class="text-sm font-semibold text-center">${ssrInterpolate(work.name)}</span>`);
      if (this.worksIds.includes(work.id)) {
        _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
      } else {
        _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
      }
      _push(`</div></div>`);
    });
    _push(`<!--]--></div></div><div class="w-10/12 mx-auto"><h4 class="mb-4 text-md text-slate-500 uppercase font-bold">Isolation</h4><div class="grid md:grid-cols-3 gap-4"><!--[-->`);
    ssrRenderList($options.iWorks, (work) => {
      _push(`<div><div class="relative h-full bg-white flex flex-col gap-2 py-4 items-center justify-between rounded-lg cursor-pointer shadow hover:shadow-lg"><img${ssrRenderAttr("src", "/images/illustration/" + work.svg)}${ssrRenderAttr("alt", work.img_alt)} style="${ssrRenderStyle({ "width": "120px" })}"><span class="text-sm font-semibold text-center">${ssrInterpolate(work.name)}</span>`);
      if (this.worksIds.includes(work.id)) {
        _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
      } else {
        _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
      }
      _push(`</div></div>`);
    });
    _push(`<!--]--></div></div></div>`);
  } else {
    _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-center text-xl md:text-2xl font-extrabold mb-12">Vous avez demandé Travaux ${ssrInterpolate(this.currentWork.name)}</h3><div class="table mb-4 mx-auto">`);
    if (this.currentWork.type == "es") {
      _push(`<h4 class="mb-4 text-md text-slate-500 uppercase font-bold">Solaire</h4>`);
    } else {
      _push(`<!---->`);
    }
    if (this.currentWork.type == "ch") {
      _push(`<h4 class="mb-4 text-md text-slate-500 uppercase font-bold">Chauffage</h4>`);
    } else {
      _push(`<!---->`);
    }
    if (this.currentWork.type == "i") {
      _push(`<h4 class="mb-4 text-md text-slate-500 uppercase font-bold">Isolation</h4>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="relative flex flex-col gap-4 justify-between items-center p-4 bg-white rounded-lg"><img${ssrRenderAttr("src", "/images/illustration/" + this.currentWork.svg)}${ssrRenderAttr("alt", this.currentWork.img_alt)} style="${ssrRenderStyle({ "width": "120px" })}"><span class="text-sm font-semibold text-center">${ssrInterpolate(this.currentWork.name)}</span><span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span></div></div></div>`);
  }
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/selectTravaux.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const selectTravaux = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const __vite_glob_0_34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: selectTravaux
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  props: ["EspaceExterior"],
  emits: ["espace-exterieur"],
  methods: {
    goNext(boolen) {
      this.$emit("espace-exterieur", boolen);
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/spaceExterior.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const spaceExterior = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const __vite_glob_0_35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: spaceExterior
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  emits: ["status-project"],
  props: ["statusProject"]
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/statusProject.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const statusProject = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const __vite_glob_0_36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: statusProject
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  props: ["surfaceChauffe", "error_surface", "getNext"],
  emits: ["update:modelValue"]
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="mb-6 text-center text-xl md:text-2xl font-extrabold">Quelle surface sera chauffée par la pompe à chaleur ? </h3><p class="mb-6 text-center">N&#39;indiquez que la surface des pièces que la pompe à chaleur chauffe.</p><div class="flex flex-col gap-2 justify-center md:w-10/12 m-auto"><label class="text-left text-sm font-bold" for="surface">Surface en m²</label><input type="number" id="surface"${ssrRenderAttr("value", $props.surfaceChauffe)} class="rounded"><span class="text-red-400">${ssrInterpolate($props.error_surface)}</span></div><!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/surfaceChauffee.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const surfaceChauffe = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const __vite_glob_0_37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: surfaceChauffe
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  emits: ["update:modelValue"],
  props: ["TravauxAdresse", "error_address", "getNext"]
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-center text-xl md:text-2xl font-extrabold mb-6">Où se situe le logement concerné par les travaux ? </h3><p class="text-center mb-6">Le montant de vos aides peut varier en fonction de votre localisation.</p><div class="flex flex-col gap-2 justify-center md:w-10/12 m-auto"><label class="text-left text-sm font-semibold" for="Address">Adresse</label><input type="text" id="Address"${ssrRenderAttr("value", $props.TravauxAdresse)} class="rounded" placeholder="35 Rue victor Hugo, 37000 Tours"><span class="text-red-400">${ssrInterpolate($props.error_address)}</span></div><!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/travauxAddress.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const travauxAddress = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const __vite_glob_0_38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: travauxAddress
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  props: ["UtilisateurStatus"],
  emits: ["utilisateur-status"]
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-xl md:text-2xl text-center font-extrabold mb-6">Dans ce logement, vous êtes :</h3><div class="grid md:grid-cols-4 gap-4"><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/house principal.png" alt="Propriétaire occupant"><span class="font-bold text-center">Propriétaire occupant</span>`);
  if (this.UtilisateurStatus == "Propriétaire occupant") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/house secondaire.png" alt="Propriétaire d&#39;une résidence secondaire"><span class="font-bold text-center">Propriétaire d&#39;une résidence secondaire</span>`);
  if (this.UtilisateurStatus == "Propriétaire d'une résidence secondaire") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/contrat_paper.png" alt="Propriétaire bailleur"><span class="font-bold text-center">Propriétaire bailleur</span>`);
  if (this.UtilisateurStatus == "Propriétaire bailleur") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/keys.png" alt="Locataire"><span class="font-bold text-center">Locataire</span>`);
  if (this.UtilisateurStatus == "Locataire") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/personalInfos/utilisateurStatut.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const utilisateurStatut = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const __vite_glob_0_44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: utilisateurStatut
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  props: ["menageComposition"],
  emits: ["update:modelValue"],
  methods: {
    lessOne() {
      let value = this.menageComposition;
      value--;
      this.$emit("update:modelValue", value);
    },
    moreOne() {
      let value = this.menageComposition;
      value++;
      this.$emit("update:modelValue", value);
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-xl md:text-2xl text-center font-extrabold mb-6">Combien de personnes composent votre foyer, vous compris ? </h3><p class="text-center mb-6">Le montant de vos aides peut varier en fonction de la taille de votre ménage.</p><div class="flex gap-4 items-center justify-center"><span class="p-6 text-2xl font-semibold rounded bg-white leading-3">-</span><input type="number"${ssrRenderAttr("value", $props.menageComposition)} class="text-center font-semibold"><span class="p-6 text-2xl font-semibold rounded bg-white leading-3">+</span></div><!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/personalInfos/menageCompos.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const menageComposition = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const __vite_glob_0_40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: menageComposition
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  emits: ["menage-revenus"],
  props: ["menageRevenus"]
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-xl md:text-2xl font-extrabold mb-6 text-center">À combien s&#39;élève le revenu total de votre foyer fiscal ?</h3><p class="text-center mb-6">Le revenu fiscal de référence est utilisé pour calculer le montant de vos aides au plus juste.</p><div class="grid md:grid-cols-4 gap-4"><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/Inférieur à 16.png" alt="Inférieur à 16 229 €"><span class="font-bold text-center">Inférieur à 16 229 €</span>`);
  if (this.menageRevenus == "Inférieur à 16 229 €") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/Entre 16 et 20.png" alt="Entre 16 229 € et 20 805 €"><span class="font-bold text-center">Entre 16 229 € et 20 805 €</span>`);
  if (this.menageRevenus == "Entre 16 229 € et 20 805 €") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/Entre 16 et 29.png" alt="Entre 20 805 € et 29 148 €"><span class="font-bold text-center">Entre 20 805 € et 29 148 €</span>`);
  if (this.menageRevenus == "Entre 20 805 € et 29 148 €") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div><div class="relative flex flex-col items-center gap-4 p-4 rounded bg-white hover:shadow-xl cursor-pointer"><img class="w-24 md:w-36" src="/images/illustration/Supérieur à 29.png" alt="Supérieur à 29 148 €"><span class="font-bold text-center">Supérieur à 29 148 €</span>`);
  if (this.menageRevenus == "Supérieur à 29 148 €") {
    _push(`<span class="block w-6 h-6 rounded-full absolute top-2 right-2 flex justify-center items-center bg-green-300"><i class="fa-solid fa-check text-white"></i></span>`);
  } else {
    _push(`<span class="block w-6 h-6 absolute top-2 right-2 rounded-full shadow border"></span>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/personalInfos/menageRevenus.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const menageRevenus = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: menageRevenus
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  emits: ["update:first-name", "update:last-name", "gender-value"],
  props: ["firstName", "lastName", "gender", "error"],
  methods: {}
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-xl md:text-2xl font-extrabold text-center mb-12">Comment vous appelez-vous ?</h3><div class="grid grid-cols-2 gap-6 mb-4"><span class="${ssrRenderClass([$props.gender == "Monsieur" ? "shadow-lg border-2" : "", "p-2 rounded bg-white font-bold text-center"])}">Monsieur</span><span class="${ssrRenderClass([$props.gender == "Madame" ? "shadow-lg border-2" : "", "p-2 rounded bg-white font-bold text-center"])}">Madame</span><div class="flex flex-col gap-1"><label for="firstName" class="text-sm font-semibold">Prénom</label><input type="text" id="firstName"${ssrRenderAttr("value", $props.firstName)} class="leading-3 rounded"></div><div class="flex flex-col gap-1"><label for="lastName" class="text-sm font-semibold">Nom</label><input type="text" id="lastName"${ssrRenderAttr("value", $props.lastName)} class="leading-3 rounded"></div></div><div class="text-red-400 text-center">${ssrInterpolate($props.error)}</div><!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/personalInfos/utilisateurIdentite.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const utilisateurIdentite = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: utilisateurIdentite
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  props: ["phoneNumber", "error", "getNext"],
  emits: ["phone-number"],
  methods: {
    goNext(value) {
      if (value.length == 1 && value != 0) {
        value = 0;
      }
      if (value.length > 10) {
        value = value.slice(0, 10);
        return false;
      }
      this.$emit("phone-number", value);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-xl md:text-center text-2xl font-extrabold mb-6">Quel est votre numéro de téléphone ?</h3><p class="text-center mb-6"> Vous bénéficierez de notre service d&#39;assistance téléphonique et serez rappelé gratuitement afin de vous accompagner dans votre projet. </p><div class="flex flex-col gap-2 md:w-10/12 m-auto"><label for="phone" class="font-semibold text-sm">Téléphone</label><input type="number" id="phone"${ssrRenderAttr("value", $props.phoneNumber)} class="rounded"><span class="text-red-400">${ssrInterpolate($props.error)}</span></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/personalInfos/utilisateurTelephone.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const utilisateurTelephone = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: utilisateurTelephone
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  emits: ["e-mail"],
  props: ["eMail", "error", "getNext"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h3 class="text-xl md:text-2xl font-extrabold text-center mb-6">Entrer votre email</h3><p class="text-center mb-6">Vous bénéficierez de notre service mailing et serez accompagner dans votre projet.</p><div class="flex flex-col gap-2 md:w-10/12 m-auto"><label for="email" class="font-semibold text-sm">Email</label><input type="email" id="email"${ssrRenderAttr("value", $props.eMail)} class="rounded"><span class="text-red-400">${ssrInterpolate($props.error)}</span></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/personalInfos/utilisateurMail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const utilisateurEmail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: utilisateurEmail
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  props: ["currentWork"],
  layout: GuestLayout,
  components: {
    Head,
    useForm,
    GuestLayout,
    LogementType,
    LogementConstruction,
    LogementSurface,
    LogementEnergie,
    EnergieType,
    selectTravaux,
    isolationSurface,
    isolationRevetement,
    statusProject,
    surfaceChauffe,
    chaudeSanitaire,
    spaceExterior,
    travauxAddress,
    utilisateurStatut,
    menageComposition,
    menageRevenus,
    utilisateurIdentite,
    utilisateurTelephone,
    utilisateurEmail,
    electricityBill,
    KilowattsPerYear,
    TaxIncome,
    RoofType,
    RoofOrientation
  },
  data() {
    return {
      request: true,
      errors: false,
      errors_text: "",
      current: "type",
      previous: "",
      next: "construc",
      FormData: useForm({
        LogementType: "maison",
        LogementConstruction: "2-15",
        LogementSurface: "",
        LogementEnergie: "Chauffage électrique",
        LogementEnergieType: "",
        TravauxIds: [],
        currentElectricityBill: "",
        kilowattsPerYear: "",
        taxIncome: "",
        roofType: "",
        roofOrientation: "",
        InteriorSurface: "",
        ExteriorSurface: "",
        ExterieurRevetement: "extérieur sous enduit",
        SurfaceChauffee: "",
        EauChaudeSanitaire: "Chauffage eau chaude sanitaire",
        EspaceExterior: true,
        StatusProject: "Je recherche un artisan RGE",
        TravauxAdresse: "",
        UtilisateurStatus: "Propriétaire occupant",
        MenageComposition: 2,
        MenageRevenus: "Entre 16 229 € et 20 805 €",
        Client: {
          FirstName: "",
          LastName: "",
          Gender: "",
          PhoneNumber: "",
          EMail: ""
        }
      })
    };
  },
  methods: {
    fakeHeight() {
      document.getElementById("fakeButton").style.height = this.$refs.nextButton.clientHeight + "px";
    },
    getPrevious() {
      this.errors = false;
      this.next = this.current;
      this.current = this.previous;
    },
    getNext() {
      if (!this.errors) {
        this.previous = this.current;
        this.current = this.next;
      }
    },
    getLogementType(value) {
      this.FormData.LogementType = value;
      this.getNext();
    },
    getLogementConstruction(value) {
      this.FormData.LogementConstruction = value;
      this.getNext();
    },
    getLogementSurface(value) {
      this.FormData.LogementSurface = value;
      this.errors = false;
    },
    getLogementEnergie(value) {
      if (value == "Chauffage au fioul" || value == "Chauffage électrique" || value == "Chauffage au gaz")
        this.next = "typeEnergie";
      else
        this.next = "userStatut";
      this.FormData.LogementEnergie = value;
      this.getNext();
    },
    getEnergieType(value) {
      this.FormData.LogementEnergieType = value;
      this.errors = false;
      this.getNext();
    },
    getWorksIds(value) {
      this.FormData.TravauxIds = value;
      if (this.FormData.TravauxIds.length > 0)
        this.errors = false;
      else
        this.errors = true;
      if (this.FormData.TravauxIds.includes(1))
        this.next = "electricityBill";
      else if (this.FormData.TravauxIds.includes(8))
        this.next = "interiorSurface";
      else if (this.FormData.TravauxIds.includes(9))
        this.next = "exteriorSurface";
      else if (this.FormData.TravauxIds.includes(5))
        this.next = "surfaceChauffee";
      else
        this.next = "statusProjet";
    },
    getInteriorSurface(value) {
      this.FormData.InteriorSurface = value;
      this.errors = false;
    },
    getExteriorSurface(value) {
      this.FormData.ExteriorSurface = value;
      this.errors = false;
    },
    getExteriorRevetement(value) {
      this.FormData.ExterieurRevetement = value;
      this.getNext();
    },
    getSurfaceChauffee(value) {
      this.FormData.SurfaceChauffee = value;
    },
    getEauChaudeSanitaire(value) {
      this.FormData.EauChaudeSanitaire = value;
      this.getNext();
    },
    getEspaceExterieur(value) {
      this.FormData.EspaceExterior = value;
      this.getNext();
    },
    getStatusProject(value) {
      this.FormData.StatusProject = value;
      this.getNext();
    },
    getTravauxAdresse(value) {
      this.FormData.TravauxAdresse = value;
      this.errors = false;
    },
    getUtilisateurStatus(value) {
      this.FormData.UtilisateurStatus = value;
      this.getNext();
    },
    getMenageComposition(value) {
      this.FormData.MenageComposition = value;
    },
    getMenageRevenue(value) {
      this.FormData.MenageRevenus = value;
      this.getNext();
    },
    getGender(value) {
      this.FormData.Client.Gender = value;
    },
    getFirstName(value) {
      this.FormData.Client.FirstName = value;
    },
    getLastName(value) {
      this.FormData.Client.LastName = value;
    },
    getPhoneNumber(value) {
      this.FormData.Client.PhoneNumber = value;
    },
    getEmail(value) {
      this.FormData.Client.EMail = value;
    },
    getCurrentElectricityBill(value) {
      this.FormData.currentElectricityBill = value;
    },
    getKilowattsPerYear(value) {
      this.FormData.kilowattsPerYear = value;
    },
    getTaxIncome(value) {
      this.FormData.taxIncome = value;
    },
    getRoofType(value) {
      this.FormData.roofType = value;
    },
    getRoofOrientation(value) {
      this.FormData.roofOrientation = value;
    }
  },
  mounted() {
    this.fakeHeight();
    if (this.currentWork != null)
      this.FormData.TravauxIds.push(this.currentWork.id);
  },
  updated() {
    if (this.current == "construc") {
      this.next = "surface";
      this.previous = "type";
    } else if (this.current == "surface") {
      if (this.FormData.LogementSurface.length == 0) {
        this.errors_text = "Ce champ est obligatoire";
        this.errors = true;
      } else if (this.FormData.LogementSurface > 800) {
        this.errors_text = "La surface doit être comprise entre 1 et 800.";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.next = "energie";
      this.previous = "construc";
    } else if (this.current == "energie") {
      this.FormData.LogementEnergieType = "";
      let value = this.FormData.LogementEnergie;
      if (value == "Chauffage au fioul" || value == "Chauffage électrique" || value == "Chauffage au gaz")
        this.next = "typeEnergie";
      else
        this.next = "userStatut";
      this.previous = "surface";
    } else if (this.current == "typeEnergie") {
      if (this.FormData.LogementEnergieType == "")
        this.errors = true;
      else
        this.errors = false;
      this.next = "userStatut";
      this.previous = "energie";
    } else if (this.current == "userStatut") {
      this.next = "menageCompos";
      this.previous = "energie";
    } else if (this.current == "menageCompos") {
      this.previous = "userStatut";
      this.next = "menageReven";
    } else if (this.current == "menageReven") {
      this.previous = "menageCompos";
      this.next = "utilisateurIdentite";
    } else if (this.current == "utilisateurIdentite") {
      if (this.FormData.Client.FirstName == "") {
        this.errors_text = "Le prénom est requis";
        this.errors = true;
      } else if (this.FormData.Client.LastName == "") {
        this.errors_text = "Le nom est requis";
        this.errors = true;
      } else if (this.FormData.Client.Gender == "") {
        this.errors_text = "Sélectionner le genre";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.previous = "menageReven";
      this.next = "utilisateurTelephone";
    } else if (this.current == "utilisateurTelephone") {
      if (this.FormData.Client.PhoneNumber == "") {
        this.errors_text = "Le numero de téléphone est requis!";
        this.errors = true;
      } else if (this.FormData.Client.PhoneNumber.length < 10)
        this.errors = true;
      else {
        this.errors_text = "";
        this.errors = false;
      }
      this.previous = "utilisateurIdentite";
      this.next = "utilisateurEmail";
    } else if (this.current == "utilisateurEmail") {
      if (this.FormData.Client.EMail == "") {
        this.errors_text = "Adresse mail est requis!";
        this.errors = true;
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.FormData.Client.EMail)) {
        this.errors_text = "Adresse mail n'est pas valide!";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.previous = "utilisateurTelephone";
      this.next = "travaux";
    } else if (this.current == "travaux") {
      if (this.FormData.TravauxIds.length == 0)
        this.errors = true;
      else
        this.errors = false;
      if (this.FormData.TravauxIds.includes(1))
        this.next = "electricityBill";
      else if (this.FormData.TravauxIds.includes(8))
        this.next = "interiorSurface";
      else if (this.FormData.TravauxIds.includes(9))
        this.next = "exteriorSurface";
      else if (this.FormData.TravauxIds.includes(5))
        this.next = "surfaceChauffee";
      else
        this.next = "statusProjet";
      this.previous = "utilisateurEmail";
    } else if (this.current == "electricityBill") {
      if (this.FormData.currentElectricityBill.length == 0) {
        this.errors_text = "Ce champ est obligatoire";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.previous = "travaux";
      this.next = "kilowattsPerYear";
    } else if (this.current == "kilowattsPerYear") {
      this.previous = "electricityBill";
      this.next = "taxIncome";
    } else if (this.current == "taxIncome") {
      if (this.FormData.taxIncome.length == 0) {
        this.errors_text = "Ce champ est obligatoire";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.previous = "kilowattsPerYear";
      this.next = "roofType";
    } else if (this.current == "roofType") {
      if (this.FormData.roofType.length == 0) {
        this.errors = true;
      } else {
        this.errors = false;
      }
      this.previous = "taxIncome";
      this.next = "roofOrientation";
    } else if (this.current == "roofOrientation") {
      if (this.FormData.roofOrientation.length == 0) {
        this.errors_text = "veuillez sélectionner une orientation";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.previous = "roofType";
      if (this.FormData.TravauxIds.includes(8))
        this.next = "interiorSurface";
      else if (this.FormData.TravauxIds.includes(9))
        this.next = "exteriorSurface";
      else if (this.FormData.TravauxIds.includes(5))
        this.next = "surfaceChauffee";
      else
        this.next = "statusProjet";
    } else if (this.current == "interiorSurface") {
      if (this.FormData.InteriorSurface.length == 0) {
        this.errors_text = "Ce champ est obligatoire";
        this.errors = true;
      } else if (this.FormData.InteriorSurface > 800) {
        this.errors_text = "La surface doit être comprise entre 1 et 800.";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      if (this.FormData.TravauxIds.includes(9))
        this.next = "exteriorSurface";
      else if (this.FormData.TravauxIds.includes(5))
        this.next = "surfaceChauffee";
      else
        this.next = "statusProjet";
      this.previous = "travaux";
    } else if (this.current == "exteriorSurface") {
      if (this.FormData.ExteriorSurface.length == 0) {
        this.errors_text = "Ce champ est obligatoire";
        this.errors = true;
      } else if (this.FormData.ExteriorSurface > 800) {
        this.errors_text = "La surface doit être comprise entre 1 et 800.";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.next = "exteriorRevetement";
      this.previous = "travaux";
    } else if (this.current == "exteriorRevetement") {
      if (this.FormData.TravauxIds.includes(5)) {
        this.next = "surfaceChauffee";
        this.previous = "exteriorSurface";
      } else
        this.next = "statusProjet";
    } else if (this.current == "surfaceChauffee") {
      if (this.FormData.SurfaceChauffee.length == 0) {
        this.errors_text = "Ce champ est obligatoire";
        this.errors = true;
      } else if (this.FormData.SurfaceChauffee > 800) {
        this.errors_text = "La surface doit être comprise entre 1 et 800.";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.next = "chaudeSanitaire";
      this.previous = "travaux";
    } else if (this.current == "chaudeSanitaire") {
      this.next = "espaceExterior";
      this.previous = "surfaceChauffee";
    } else if (this.current == "espaceExterior") {
      this.next = "statusProjet";
      this.previous = "chaudeSanitaire";
    } else if (this.current == "statusProjet") {
      this.next = "travauxAdresse";
      this.previous = "travaux";
    } else if (this.current == "travauxAdresse") {
      if (this.FormData.TravauxAdresse.length == 0) {
        this.errors_text = "Ce champ est obligatoire";
        this.errors = true;
      } else {
        this.errors_text = "";
        this.errors = false;
      }
      this.next = "done";
      this.previous = "statusProjet";
    } else if (this.current == "done") {
      if (this.request == true) {
        this.FormData.post(
          "/parcour",
          {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => this.FormData.reset()
          }
        );
        this.request = false;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_LogementType = resolveComponent("LogementType");
  const _component_LogementConstruction = resolveComponent("LogementConstruction");
  const _component_LogementSurface = resolveComponent("LogementSurface");
  const _component_LogementEnergie = resolveComponent("LogementEnergie");
  const _component_EnergieType = resolveComponent("EnergieType");
  const _component_utilisateurStatut = resolveComponent("utilisateurStatut");
  const _component_menageComposition = resolveComponent("menageComposition");
  const _component_menageRevenus = resolveComponent("menageRevenus");
  const _component_utilisateurIdentite = resolveComponent("utilisateurIdentite");
  const _component_utilisateurTelephone = resolveComponent("utilisateurTelephone");
  const _component_utilisateurEmail = resolveComponent("utilisateurEmail");
  const _component_selectTravaux = resolveComponent("selectTravaux");
  const _component_electricityBill = resolveComponent("electricityBill");
  const _component_KilowattsPerYear = resolveComponent("KilowattsPerYear");
  const _component_TaxIncome = resolveComponent("TaxIncome");
  const _component_RoofType = resolveComponent("RoofType");
  const _component_RoofOrientation = resolveComponent("RoofOrientation");
  const _component_isolationSurface = resolveComponent("isolationSurface");
  const _component_isolationRevetement = resolveComponent("isolationRevetement");
  const _component_surfaceChauffe = resolveComponent("surfaceChauffe");
  const _component_chaudeSanitaire = resolveComponent("chaudeSanitaire");
  const _component_spaceExterior = resolveComponent("spaceExterior");
  const _component_statusProject = resolveComponent("statusProject");
  const _component_travauxAddress = resolveComponent("travauxAddress");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Estimez votre prime énergie et demandez votre devis" }, null, _parent));
  _push(`<div class="flex"><div class="hidden md:block w-3/12 px-6 pt-12 bg-white overflow-hidden">`);
  if (this.current == "type" || this.current == "construc" || this.current == "surface" || this.current == "energie" || this.current == "typeEnergie") {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-12 bg-green-200 rounded-lg"> </span><p class="Capitalize font-bold text-black leading-10">Votre logement</p></div>`);
  } else {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-12 bg-gray-100 rounded-lg"> </span><p class="Capitalize font-bold text-gray-200 leading-10">Votre logement</p></div>`);
  }
  if (this.current == "travaux" || this.current == "electricityBill" || this.current == "kilowattsPerYear" || this.current == "taxIncome" || this.current == "roofType" || this.current == "roofOrientation" || this.current == "interiorSurface" || this.current == "exteriorSurface" || this.current == "exteriorRevetement" || this.current == "surfaceChauffee" || this.current == "chaudeSanitaire" || this.current == "espaceExterior" || this.current == "statusProjet" || this.current == "travauxAdresse") {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-12 bg-green-200 rounded-lg"> </span><p class="Capitalize font-bold text-black">Votre projet</p></div>`);
  } else {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-12 bg-gray-100 rounded-lg"> </span><p class="Capitalize font-bold text-gray-200">Votre projet</p></div>`);
  }
  if (this.current == "userStatut" || this.current == "menageCompos" || this.current == "menageReven" || this.current == "utilisateurIdentite" || this.current == "utilisateurTelephone" || this.current == "utilisateurEmail") {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-20 bg-green-200 rounded-lg"> </span><p class="Capitalize font-bold text-black">Vos informations</p></div>`);
  } else {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-20 bg-gray-100 rounded-lg"> </span><p class="Capitalize font-bold text-gray-200">Vos informations</p></div>`);
  }
  if (this.current == "done") {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-4 bg-green-200 rounded-lg"> </span><p class="Capitalize font-bold text-black">Dernière étape</p></div>`);
  } else {
    _push(`<div class="flex items-center gap-2 mb-4"><span class="w-2 h-20 bg-gray-100 rounded-lg"> </span><p class="Capitalize font-bold text-gray-200">Dernière étape</p></div>`);
  }
  _push(`</div><div class="relative w-full md:w-9/12 p-4 md:p-6 min-h-screen">`);
  if (this.current != "type" && this.current != "done") {
    _push(`<div class="inline-block mb-8 p-4 rounded hover:bg-slate-200 cursor-pointer"><i class="fa-solid fa-arrow-left" style="${ssrRenderStyle({ "color": "#74efa6" })}"></i>   <span class="font-semibold capitalize">retour</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div>`);
  if (this.current == "type") {
    _push(ssrRenderComponent(_component_LogementType, {
      onLogementType: $options.getLogementType,
      LogementType: this.FormData.LogementType
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "construc") {
    _push(ssrRenderComponent(_component_LogementConstruction, {
      onLogementConstruction: $options.getLogementConstruction,
      LogementConstruction: this.FormData.LogementConstruction
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "surface") {
    _push(ssrRenderComponent(_component_LogementSurface, {
      modelValue: this.FormData.LogementSurface,
      error_surface: $data.errors_text,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getLogementSurface
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "energie") {
    _push(ssrRenderComponent(_component_LogementEnergie, {
      onLogementEnergie: $options.getLogementEnergie,
      LogementEnergie: this.FormData.LogementEnergie
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "typeEnergie") {
    _push(ssrRenderComponent(_component_EnergieType, {
      LogementEnergie: this.FormData.LogementEnergie,
      LogementEnergieType: this.FormData.LogementEnergieType,
      onEnergieType: $options.getEnergieType
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "userStatut") {
    _push(ssrRenderComponent(_component_utilisateurStatut, {
      UtilisateurStatus: this.FormData.UtilisateurStatus,
      onUtilisateurStatus: $options.getUtilisateurStatus
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "menageCompos") {
    _push(ssrRenderComponent(_component_menageComposition, {
      menageComposition: this.FormData.MenageComposition,
      "onUpdate:modelValue": $options.getMenageComposition
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "menageReven") {
    _push(ssrRenderComponent(_component_menageRevenus, {
      menageRevenus: this.FormData.MenageRevenus,
      onMenageRevenus: $options.getMenageRevenue
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "utilisateurIdentite") {
    _push(ssrRenderComponent(_component_utilisateurIdentite, {
      firstName: this.FormData.Client.FirstName,
      lastName: this.FormData.Client.LastName,
      gender: this.FormData.Client.Gender,
      error: this.errors_text,
      "onUpdate:firstName": $options.getFirstName,
      "onUpdate:lastName": $options.getLastName,
      onGenderValue: $options.getGender
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "utilisateurTelephone") {
    _push(ssrRenderComponent(_component_utilisateurTelephone, {
      phoneNumber: this.FormData.Client.PhoneNumber,
      error: this.errors_text,
      getNext: $options.getNext,
      onPhoneNumber: $options.getPhoneNumber
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "utilisateurEmail") {
    _push(ssrRenderComponent(_component_utilisateurEmail, {
      eMail: this.FormData.Client.EMail,
      error: this.errors_text,
      getNext: $options.getNext,
      onEMail: $options.getEmail
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "travaux") {
    _push(ssrRenderComponent(_component_selectTravaux, {
      worksIds: this.FormData.TravauxIds,
      currentWork: this.currentWork,
      onWorksIds: $options.getWorksIds
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "electricityBill") {
    _push(ssrRenderComponent(_component_electricityBill, {
      modelValue: this.FormData.currentElectricityBill,
      error: $data.errors_text,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getCurrentElectricityBill
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "kilowattsPerYear") {
    _push(ssrRenderComponent(_component_KilowattsPerYear, {
      modelValue: this.FormData.kilowattsPerYear,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getKilowattsPerYear
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "taxIncome") {
    _push(ssrRenderComponent(_component_TaxIncome, {
      modelValue: this.FormData.taxIncome,
      error: $data.errors_text,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getTaxIncome
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "roofType") {
    _push(ssrRenderComponent(_component_RoofType, {
      roofType: this.FormData.roofType,
      getNext: $options.getNext,
      onRoofType: $options.getRoofType
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "roofOrientation") {
    _push(ssrRenderComponent(_component_RoofOrientation, {
      roofOrientation: this.FormData.roofOrientation,
      getNext: $options.getNext,
      onRoofOrientation: $options.getRoofOrientation
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "interiorSurface") {
    _push(ssrRenderComponent(_component_isolationSurface, {
      murs: "intérieur",
      error_surface: this.errors_text,
      interiorSurface: this.FormData.InteriorSurface,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getInteriorSurface
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "exteriorSurface") {
    _push(ssrRenderComponent(_component_isolationSurface, {
      murs: "extérieur",
      error_surface: this.errors_text,
      interiorSurface: this.FormData.ExteriorSurface,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getExteriorSurface
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "exteriorRevetement") {
    _push(ssrRenderComponent(_component_isolationRevetement, {
      ExterieurRevetement: this.FormData.ExterieurRevetement,
      onExteriorRevetement: $options.getExteriorRevetement
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "surfaceChauffee") {
    _push(ssrRenderComponent(_component_surfaceChauffe, {
      surfaceChauffe: this.FormData.SurfaceChauffee,
      error_surface: this.errors_text,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getSurfaceChauffee
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "chaudeSanitaire") {
    _push(ssrRenderComponent(_component_chaudeSanitaire, {
      eauChaudeSanitaire: this.FormData.EauChaudeSanitaire,
      onEauChaudeSanitaire: $options.getEauChaudeSanitaire
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "espaceExterior") {
    _push(ssrRenderComponent(_component_spaceExterior, {
      EspaceExterior: this.FormData.EspaceExterior,
      onEspaceExterieur: $options.getEspaceExterieur
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "statusProjet") {
    _push(ssrRenderComponent(_component_statusProject, {
      statusProject: this.FormData.StatusProject,
      onStatusProject: $options.getStatusProject
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "travauxAdresse") {
    _push(ssrRenderComponent(_component_travauxAddress, {
      TravauxAdresse: this.FormData.TravauxAdresse,
      error_address: this.errors_text,
      getNext: $options.getNext,
      "onUpdate:modelValue": $options.getTravauxAdresse
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if (this.current == "done") {
    _push(`<div><p class="break-word text-base md:text-lg text-center text-slate-900 font-bold w-10/12 md:w-8/12 md:p-10 p-4 m-auto bg-slate-50 shadow leading-10 rounded"> Merci pour le temps que vous avez consacré sur ce parcours, On va vous contacter prochainement pour vous accompagner dans votre projet.<br><br><a href="/" class="p-4 rounded text-white bg-slate-800">Ok Merci</a></p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (this.current != "done") {
    _push(`<div id="fakeButton"></div>`);
  } else {
    _push(`<!---->`);
  }
  if (this.current != "done") {
    _push(`<div class="fixed w-full py-4 bg-slate-100 flex left-0 bottom-0 md:left-1/4 md:w-9/12">`);
    if ($data.errors == false) {
      _push(`<a class="cursor-pointer m-auto uppercase bg-gradient-to-r from-teal-500 to-green-300 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-20 py-3 rounded-full font-bold text-white"> Suivant </a>`);
    } else {
      _push(`<a class="cursor-pointer m-auto uppercase bg-gradient-to-r from-gray-500 to-gray-200 hover:shadow-gray-500 shadow-lg shadow-gray-500/50 px-20 py-3 rounded-full font-bold text-black"> Suivant </a>`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/404.vue": __vite_glob_0_0, "./Pages/AppelezNous.vue": __vite_glob_0_1, "./Pages/Auth/ConfirmPassword.vue": __vite_glob_0_2, "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_3, "./Pages/Auth/Login.vue": __vite_glob_0_4, "./Pages/Auth/Register.vue": __vite_glob_0_5, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_6, "./Pages/Auth/VerifyEmail.vue": __vite_glob_0_7, "./Pages/Dashboard.vue": __vite_glob_0_8, "./Pages/Home.vue": __vite_glob_0_9, "./Pages/IntermediatePage.vue": __vite_glob_0_10, "./Pages/LandingPage.vue": __vite_glob_0_11, "./Pages/Orders.vue": __vite_glob_0_12, "./Pages/Profile/Edit.vue": __vite_glob_0_13, "./Pages/Profile/Partials/DeleteUserForm.vue": __vite_glob_0_14, "./Pages/Profile/Partials/UpdatePasswordForm.vue": __vite_glob_0_15, "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": __vite_glob_0_16, "./Pages/home/FourthSection.vue": __vite_glob_0_17, "./Pages/home/MailSection.vue": __vite_glob_0_18, "./Pages/home/ThirdSection.vue": __vite_glob_0_19, "./Pages/home/secondeSection.vue": __vite_glob_0_20, "./Pages/project/Logement/EnergieType.vue": __vite_glob_0_21, "./Pages/project/Logement/LogementConstruction.vue": __vite_glob_0_22, "./Pages/project/Logement/LogementEnergie.vue": __vite_glob_0_23, "./Pages/project/Logement/LogementSurface.vue": __vite_glob_0_24, "./Pages/project/Logement/LogementType.vue": __vite_glob_0_25, "./Pages/project/Work/ElectricityBill.vue": __vite_glob_0_26, "./Pages/project/Work/KilowattsPerYear.vue": __vite_glob_0_27, "./Pages/project/Work/RoofOrientations.vue": __vite_glob_0_28, "./Pages/project/Work/RoofType.vue": __vite_glob_0_29, "./Pages/project/Work/TaxIncome.vue": __vite_glob_0_30, "./Pages/project/Work/chaudeSanitaire.vue": __vite_glob_0_31, "./Pages/project/Work/isolationRevetement.vue": __vite_glob_0_32, "./Pages/project/Work/isolationSurface.vue": __vite_glob_0_33, "./Pages/project/Work/selectTravaux.vue": __vite_glob_0_34, "./Pages/project/Work/spaceExterior.vue": __vite_glob_0_35, "./Pages/project/Work/statusProject.vue": __vite_glob_0_36, "./Pages/project/Work/surfaceChauffee.vue": __vite_glob_0_37, "./Pages/project/Work/travauxAddress.vue": __vite_glob_0_38, "./Pages/project/index.vue": __vite_glob_0_39, "./Pages/project/personalInfos/menageCompos.vue": __vite_glob_0_40, "./Pages/project/personalInfos/menageRevenus.vue": __vite_glob_0_41, "./Pages/project/personalInfos/utilisateurIdentite.vue": __vite_glob_0_42, "./Pages/project/personalInfos/utilisateurMail.vue": __vite_glob_0_43, "./Pages/project/personalInfos/utilisateurStatut.vue": __vite_glob_0_44, "./Pages/project/personalInfos/utilisateurTelephone.vue": __vite_glob_0_45, "./Pages/viewOrder.vue": __vite_glob_0_46 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);

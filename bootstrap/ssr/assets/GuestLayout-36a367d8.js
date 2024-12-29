import { Link, usePage } from "@inertiajs/vue3";
import { useSSRContext, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, resolveComponent, ref, computed, onMounted, onUnmounted } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { b as btnDevis } from "./btnDevis-59098679.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const BigScreen_vue_vue_type_style_index_0_scoped_29ccdf34_lang = "";
const _sfc_main$3 = {
  __name: "BigScreen",
  __ssrInlineRender: true,
  props: ["esWorks", "chWorks", "iWorks"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden lg:flex justify-between h-full overflow-hidden bg-white" }, _attrs))} data-v-29ccdf34><ul class="flex items-center h-full gap-4" data-v-29ccdf34><li class="show-interior" data-v-29ccdf34><a href="javascript:void(0)" class="py-8 block" data-v-29ccdf34>Nos Offres</a><ul class="absolute bg-white flex py-6 rounded border-t-4 shadow border-green-300 interior" data-v-29ccdf34><i class="fa-solid fa-caret-up text-green-300 text-3xl absolute" style="${ssrRenderStyle({ "top": "-23px", "left": "30px" })}" data-v-29ccdf34></i><div class="flex flex-col gap-6 px-9 border-r" data-v-29ccdf34><h3 class="uppercase text-gray-700 font-semibold" data-v-29ccdf34> Les Travaux </h3><li data-v-29ccdf34>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("intermediate", "isolation-maison"),
        class: "!flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/illustration/isolation_global.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-29ccdf34${_scopeId}> Isolation globale `);
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
      _push(`</li><li data-v-29ccdf34>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route(
          "landing",
          "panneaux-solaires-photovoltaiques"
        ),
        class: "!flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/illustration/Panneaux_Photovoltaïques.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-29ccdf34${_scopeId}> Panneaux photovoltaïques `);
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
      _push(`</li><li data-v-29ccdf34>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("landing", "pompe-à-chaleur"),
        class: "!flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/illustration/pompe-a-chaleur.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-29ccdf34${_scopeId}> Pompe à chaleur `);
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
      _push(`</li><li data-v-29ccdf34>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("landing", "système-solaire-combiné"),
        class: "!flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/illustration/collaboration.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-29ccdf34${_scopeId}> Système solaire combiné `);
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
      _push(`</li></div><div class="flex flex-col gap-6 px-9" data-v-29ccdf34><h3 class="uppercase text-gray-700 font-semibold" data-v-29ccdf34> Les Services </h3><li data-v-29ccdf34>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("parcour"),
        class: "!flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/illustration/bilan_icon.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-29ccdf34${_scopeId}> Bilan énergétique gratuit `);
          } else {
            return [
              createVNode("img", {
                src: "/images/illustration/bilan_icon.png",
                style: { "max-height": "30px" }
              }),
              createTextVNode(" Bilan énergétique gratuit ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-29ccdf34>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("parcour"),
        class: "!flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/illustration/audi-energitique.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-29ccdf34${_scopeId}> Audit énergétique `);
          } else {
            return [
              createVNode("img", {
                src: "/images/illustration/audi-energitique.png",
                style: { "max-height": "30px" }
              }),
              createTextVNode(" Audit énergétique ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></div></ul></li><li class="show-interior" data-v-29ccdf34><a href="javascript:void(0)" class="py-8 block" data-v-29ccdf34>Conseils Travaux</a><ul class="absolute bg-white flex py-6 rounded border-t-4 shadow border-green-300 interior" data-v-29ccdf34><i id="solair-lg-plus-i" class="fa-solid fa-caret-up text-green-300 text-3xl absolute" style="${ssrRenderStyle({ "top": "-23px", "left": "40px" })}" data-v-29ccdf34></i><div class="flex flex-col gap-6 px-9 border-r" data-v-29ccdf34><h3 class="uppercase text-gray-700 font-semibold" data-v-29ccdf34> Énergie Solaire </h3><!--[-->`);
      ssrRenderList(props.esWorks, (work) => {
        _push(`<li data-v-29ccdf34>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("landing", work.slug),
          class: "!flex !items-center gap-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", "/images/illustration/" + work.svg)} style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-29ccdf34${_scopeId}><span data-v-29ccdf34${_scopeId}>${ssrInterpolate(work.name)}</span>`);
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
      _push(`<!--]--></div><div class="flex flex-col gap-6 px-9 border-r" data-v-29ccdf34><h3 class="uppercase text-gray-700 font-semibold" data-v-29ccdf34> Chauffage </h3><!--[-->`);
      ssrRenderList(props.chWorks, (work) => {
        _push(`<li data-v-29ccdf34>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("landing", work.slug),
          class: "!flex !items-center gap-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", "/images/illustration/" + work.svg)} style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-29ccdf34${_scopeId}><span class="!leading-8" data-v-29ccdf34${_scopeId}>${ssrInterpolate(work.name)}</span>`);
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
      _push(`<!--]--></div><div class="flex flex-col gap-6 px-9" data-v-29ccdf34><h3 class="uppercase text-gray-700 font-semibold" data-v-29ccdf34> Isolation </h3><!--[-->`);
      ssrRenderList(props.iWorks, (work) => {
        _push(`<li data-v-29ccdf34>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("landing", work.slug),
          class: "!flex !items-center gap-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", "/images/illustration/" + work.svg)} style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-29ccdf34${_scopeId}><span data-v-29ccdf34${_scopeId}>${ssrInterpolate(work.name)}</span>`);
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
      _push(`<!--]--></div></ul></li><li class="thermostat" data-v-29ccdf34>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("landing", "thermostat-connecté"),
        class: "py-8 block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-29ccdf34${_scopeId}>Thermostat Connecté</span>`);
          } else {
            return [
              createVNode("span", null, "Thermostat Connecté")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="show-interior" data-v-29ccdf34><a href="javascript:void(0)" class="py-8 block" data-v-29ccdf34>Découvrez-nous</a><ul class="absolute bg-white flex flex-col gap-6 p-6 rounded border-t-4 shadow border-green-300 interior" data-v-29ccdf34><i id="decouvre-lg-plus-i" class="fa-solid fa-caret-up text-green-300 text-3xl absolute" style="${ssrRenderStyle({ "top": "-23px", "left": "40px" })}" data-v-29ccdf34></i><li data-v-29ccdf34>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("about"),
        class: "text-black flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Qui sommes-nous ? `);
          } else {
            return [
              createTextVNode(" Qui sommes-nous ? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-29ccdf34>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("contact"),
        class: "text-black flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nous Contacter `);
          } else {
            return [
              createTextVNode(" Nous Contacter ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li></ul><div class="flex items-center" data-v-29ccdf34>`);
      _push(ssrRenderComponent(btnDevis, {
        class: "!shadow-none",
        text: "Demander un devis"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/customComponents/BigScreen.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SmallScreenMenu = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-29ccdf34"]]);
const SmallScreen_vue_vue_type_style_index_0_scoped_b12940b9_lang = "";
const _sfc_main$2 = {
  props: ["esWorks", "chWorks", "iWorks", "ShowingNavigation"],
  emits: ["showing-navigation"],
  components: { Link, btn: btnDevis },
  methods: {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_btn = resolveComponent("btn");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white lg:hidden flex flex-col gap-9 p-9 min-h-screen w-full border" }, _attrs))} data-v-b12940b9><ul class="flex flex-col gap-6" data-v-b12940b9><li data-v-b12940b9><a href="javascript:void(0)" class="flex justify-between items-center" data-v-b12940b9> Nos offres <i class="fa-solid fa-chevron-right leading-3" data-v-b12940b9></i></a><ul class="absolute w-full min-h-screen top-0 -right-full flex flex-col gap-6 p-9 bg-white transi" data-v-b12940b9><a href="javascript:void(0)" data-v-b12940b9><i class="fa-solid fa-chevron-left" data-v-b12940b9></i> Retour </a><div class="flex flex-col gap-4" data-v-b12940b9><h3 class="uppercase text-gray-700 font-semibold" data-v-b12940b9>Les Travaux</h3><li data-v-b12940b9>`);
  _push(ssrRenderComponent(_component_Link, {
    onClick: ($event) => this.$emit("showing-navigation", false),
    href: _ctx.route("intermediate", "isolation-maison"),
    class: "flex gap-4 items-center pl-4 ins-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/isolation_global.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-b12940b9${_scopeId}> Isolation globale `);
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
  _push(`</li><li data-v-b12940b9>`);
  _push(ssrRenderComponent(_component_Link, {
    onClick: ($event) => this.$emit("showing-navigation", false),
    href: _ctx.route("landing", "panneaux-solaires-photovoltaiques"),
    class: "flex gap-4 items-center pl-4 ins-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/Panneaux_Photovoltaïques.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-b12940b9${_scopeId}>Panneaux photovoltaïques `);
      } else {
        return [
          createVNode("img", {
            src: "/images/illustration/Panneaux_Photovoltaïques.png",
            style: { "max-height": "30px" }
          }),
          createTextVNode("Panneaux photovoltaïques ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-b12940b9>`);
  _push(ssrRenderComponent(_component_Link, {
    onClick: ($event) => this.$emit("showing-navigation", false),
    href: _ctx.route("landing", "pompe-à-chaleur"),
    class: "flex gap-4 items-center pl-4 ins-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/pompe-a-chaleur.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-b12940b9${_scopeId}> Pompe à chaleur `);
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
  _push(`</li><li data-v-b12940b9>`);
  _push(ssrRenderComponent(_component_Link, {
    onClick: ($event) => this.$emit("showing-navigation", false),
    href: _ctx.route("landing", "système-solaire-combiné"),
    class: "flex gap-4 items-center pl-4 ins-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/collaboration.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-b12940b9${_scopeId}> Système solaire combiné `);
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
  _push(`</li></div><div class="flex flex-col gap-4" data-v-b12940b9><h3 class="uppercase text-gray-700 font-semibold" data-v-b12940b9>Les Services</h3><li data-v-b12940b9>`);
  _push(ssrRenderComponent(_component_Link, {
    onClick: ($event) => this.$emit("showing-navigation", false),
    href: _ctx.route("parcour"),
    class: "flex gap-4 items-center pl-4 ins-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/bilan_icon.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-b12940b9${_scopeId}> Bilan énergétique gratuit `);
      } else {
        return [
          createVNode("img", {
            src: "/images/illustration/bilan_icon.png",
            style: { "max-height": "30px" }
          }),
          createTextVNode(" Bilan énergétique gratuit ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-b12940b9>`);
  _push(ssrRenderComponent(_component_Link, {
    onClick: ($event) => this.$emit("showing-navigation", false),
    href: _ctx.route("parcour"),
    class: "flex gap-4 items-center pl-4 ins-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="/images/illustration/audi-energitique.png" style="${ssrRenderStyle({ "max-height": "30px" })}" data-v-b12940b9${_scopeId}> Audit énergétique `);
      } else {
        return [
          createVNode("img", {
            src: "/images/illustration/audi-energitique.png",
            style: { "max-height": "30px" }
          }),
          createTextVNode(" Audit énergétique ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></div></ul></li><li data-v-b12940b9><a href="javascript:void(0)" class="flex justify-between items-center" data-v-b12940b9> Conseils travaux <i class="fa-solid fa-chevron-right" data-v-b12940b9></i></a><ul class="absolute w-full min-h-screen top-0 -right-full flex flex-col gap-6 p-9 bg-white transi" data-v-b12940b9><a href="javascript:void(0)" data-v-b12940b9><i class="fa-solid fa-chevron-left" data-v-b12940b9></i> Retour </a><div class="flex flex-col gap-4" data-v-b12940b9><h3 class="uppercase text-gray-700 font-semibold" data-v-b12940b9>Énergie Solaire</h3><!--[-->`);
  ssrRenderList($props.esWorks, (work, i) => {
    _push(`<li data-v-b12940b9>`);
    _push(ssrRenderComponent(_component_Link, {
      onClick: ($event) => this.$emit("showing-navigation", false),
      href: _ctx.route("landing", work.slug),
      class: "ins-link flex gap-4 pl-4 items-center"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", "/images/illustration/" + work.svg)}${ssrRenderAttr("alt", work.img_alt)} class="w-6" data-v-b12940b9${_scopeId}> ${ssrInterpolate(work.name)}`);
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
  _push(`<!--]--></div><div class="flex flex-col gap-4" data-v-b12940b9><h3 class="uppercase text-gray-700 font-semibold" data-v-b12940b9>Isolation</h3><!--[-->`);
  ssrRenderList($props.iWorks, (work) => {
    _push(`<li data-v-b12940b9>`);
    _push(ssrRenderComponent(_component_Link, {
      onClick: ($event) => this.$emit("showing-navigation", false),
      href: _ctx.route("landing", work.slug),
      class: "ins-link flex gap-4 pl-4 items-center"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", "/images/illustration/" + work.svg)}${ssrRenderAttr("alt", work.img_alt)} class="w-6" data-v-b12940b9${_scopeId}> ${ssrInterpolate(work.name)}`);
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
  _push(`<!--]--></div><div class="flex flex-col gap-4" data-v-b12940b9><h3 class="uppercase text-gray-700 font-semibold" data-v-b12940b9>Chauffage</h3><!--[-->`);
  ssrRenderList($props.chWorks, (work) => {
    _push(`<li data-v-b12940b9>`);
    _push(ssrRenderComponent(_component_Link, {
      onClick: ($event) => this.$emit("showing-navigation", false),
      href: _ctx.route("landing", work.slug),
      class: "ins-link flex gap-4 pl-4 items-center"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", "/images/illustration/" + work.svg)}${ssrRenderAttr("alt", work.img_alt)} class="w-6" data-v-b12940b9${_scopeId}> ${ssrInterpolate(work.name)}`);
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
  _push(`<!--]--></div></ul></li><li data-v-b12940b9>`);
  _push(ssrRenderComponent(_component_Link, {
    onClick: ($event) => this.$emit("showing-navigation", false),
    href: _ctx.route("landing", "thermostat-connecté"),
    class: "ins-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-b12940b9${_scopeId}>Thermostat Connecté</span>`);
      } else {
        return [
          createVNode("span", null, "Thermostat Connecté")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-b12940b9><a href="javascript:void(0)" class="flex justify-between items-center" data-v-b12940b9> Découvrez-nous <i class="fa-solid fa-chevron-right" data-v-b12940b9></i></a><ul class="absolute w-full min-h-screen top-0 -right-full flex flex-col gap-6 p-9 bg-white transi" data-v-b12940b9><a href="javascript:void(0)" data-v-b12940b9><i class="fa-solid fa-chevron-left" data-v-b12940b9></i> Retour </a><li data-v-b12940b9>`);
  _push(ssrRenderComponent(_component_Link, {
    onClick: ($event) => this.$emit("showing-navigation", false),
    href: _ctx.route("about"),
    class: "flex gap-4 items-center pl-4 ins-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Qui sommes-nous ? `);
      } else {
        return [
          createTextVNode(" Qui sommes-nous ? ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-b12940b9>`);
  _push(ssrRenderComponent(_component_Link, {
    onClick: ($event) => this.$emit("showing-navigation", false),
    href: _ctx.route("contact"),
    class: "flex gap-4 items-center pl-4 ins-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Nous Contacter `);
      } else {
        return [
          createTextVNode(" Nous Contacter ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li></ul><div class="flex gap-4 !text-xs" data-v-b12940b9><div data-v-b12940b9>`);
  if (_ctx.$page.props.auth.user == null) {
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("login"),
      class: "m-auto table font-semibold px-9 py-4 rounded-full border shadow uppercase"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="fa-solid fa-circle-user mr-2 text-lg leading-4 align-middle" style="${ssrRenderStyle({ "color": "#73efa6" })}" data-v-b12940b9${_scopeId}></i> Se Connecter `);
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
  _push(`</div><div class="flex" data-v-b12940b9>`);
  _push(ssrRenderComponent(_component_btn, {
    text: "Demander un devis",
    onClick: ($event) => this.$emit("showing-navigation", false)
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/customComponents/SmallScreen.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BigScreenMenu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b12940b9"]]);
const PrimaryNavigation_vue_vue_type_style_index_0_scoped_4a64dd81_lang = "";
const _sfc_main$1 = {
  __name: "PrimaryNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const showMenu = ref(false);
    const menu = ref(false);
    const shadowMenu = ref(false);
    const mobile = ref(false);
    const esWorks = computed(() => page.props.works.filter((e) => e.type === "es"));
    const chWorks = computed(() => page.props.works.filter((e) => e.type === "ch"));
    const iWorks = computed(() => page.props.works.filter((e) => e.type === "i"));
    const fakeHeight = () => {
      if (menu.value)
        shadowMenu.value.style.height = `${menu.value.clientHeight}px`;
    };
    const handleScroll = () => {
      if (typeof window === "undefined")
        return;
      if (window.scrollY >= 96) {
        menu.value.classList.add("!h-16");
        document.querySelectorAll(".interior").forEach((item) => item.classList.add("!top-16"));
        mobile.value.classList.add("top-less");
      } else {
        menu.value.classList.remove("!h-16");
        document.querySelectorAll(".interior").forEach((item) => item.classList.remove("!top-16"));
        mobile.value.classList.remove("top-less");
      }
    };
    const getShowingNav = (value) => showMenu.value = value;
    onMounted(() => {
      fakeHeight();
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll);
      }
    });
    onUnmounted(() => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="!fixed top-0 left-0 flex relative items-center justify-between text-sm px-4 bg-white h-24 w-full z-20" data-v-4a64dd81>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("home"),
        class: "block lg:!left-0 h-full relative max-w-3/12",
        style: [{ "transition": "all 800ms ease-in-out" }, showMenu.value ? "left:0" : "left: calc(50% - 155px);"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/logo.png" alt="Lenergia" id="logo" draggable="false" class="h-full z-10" style="${ssrRenderStyle({ "max-width": "250px" })}" data-v-4a64dd81${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/logo.png",
                alt: "Lenergia",
                id: "logo",
                draggable: "false",
                class: "h-full z-10",
                style: { "max-width": "250px" }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="lg:hidden cursor-pointer text-center" style="${ssrRenderStyle({ "width": "30px" })}" data-v-4a64dd81><i class="fa-solid fa-bars text-black text-2xl" style="${ssrRenderStyle(!showMenu.value ? null : { display: "none" })}" data-v-4a64dd81></i><i class="fa-solid fa-xmark text-black text-2xl" style="${ssrRenderStyle(showMenu.value ? null : { display: "none" })}" data-v-4a64dd81></i></div><div class="absolute lg:static lg:ml-6 flex-1 z-10 h-full w-full" style="${ssrRenderStyle([{ "top": "95px", "transition": "all 800ms ease-in-out" }, showMenu.value ? "right:0" : "right:-100%"])}" data-v-4a64dd81>`);
      _push(ssrRenderComponent(SmallScreenMenu, {
        onShowingNavigation: getShowingNav,
        showingNavigation: showMenu.value,
        esWorks: esWorks.value,
        chWorks: chWorks.value,
        iWorks: iWorks.value
      }, null, _parent));
      _push(ssrRenderComponent(BigScreenMenu, {
        esWorks: esWorks.value,
        chWorks: chWorks.value,
        iWorks: iWorks.value
      }, null, _parent));
      _push(`</div></div><div data-v-4a64dd81></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/customComponents/PrimaryNavigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PrimaryNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4a64dd81"]]);
const GuestLayout_vue_vue_type_style_index_0_scoped_187d7240_lang = "";
const _sfc_main = {
  components: {
    Link,
    PrimaryNavigation
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PrimaryNavigation = resolveComponent("PrimaryNavigation");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[--><div class="text-slate-900" data-v-187d7240>`);
  _push(ssrRenderComponent(_component_PrimaryNavigation, null, null, _parent));
  _push(`<div data-v-187d7240>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
  if (!_ctx.route().current("parcour")) {
    _push(`<footer class="w-full bg-slate-500 text-slate-50 pb-8 border-t-4 border-white mt-8" data-v-187d7240><div class="flex flex-col md:flex-row items-center md:mb-4 mb-8" data-v-187d7240><img src="/images/logo-light.png" class="h-48" alt="" data-v-187d7240><h6 class="text-2xl md:text-3xl text-center flex-1" data-v-187d7240>n°1 de la rénovation énergétique en ligne</h6></div><div class="flex flex-col md:flex-row items-center md:items-start md:justify-between mx-12 mb-12 gap-4" data-v-187d7240><div class="w-full md:w-3/12" data-v-187d7240><div class="flex gap-2 mb-4" data-v-187d7240><span class="italic" data-v-187d7240>Suivez nous</span><span class="fb" data-v-187d7240><img src="/images/socieux/fb-light.png" data-v-187d7240></span><span class="in" data-v-187d7240><img src="/images/socieux/in-light.png" data-v-187d7240></span></div><div class="flex flex-col gap-4" data-v-187d7240><p class="text-xl" data-v-187d7240>Un projet ?</p>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("parcour"),
      class: "border rounded-full text-center px-8 py-4"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`DEMANDER UN DEVIS`);
        } else {
          return [
            createTextVNode("DEMANDER UN DEVIS")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div><div class="md:px-4 w-full md:w-3/12" data-v-187d7240><h6 class="font-bold text-lg" data-v-187d7240>ÉNERGIE SOLAIRE</h6><ul class="flex flex-col gap-2" data-v-187d7240><li data-v-187d7240><a${ssrRenderAttr("href", _ctx.route("landing", "panneaux-solaires-photovoltaiques"))} data-v-187d7240>Panneaux Solaires Photovoltaïques</a></li><li data-v-187d7240><a${ssrRenderAttr("href", _ctx.route("landing", "panneau-solaire-thermique"))} data-v-187d7240>Panneaux solaires thermiques</a></li><li data-v-187d7240><a${ssrRenderAttr("href", _ctx.route("landing", "panneau-solaire-hybrides"))} data-v-187d7240>Panneaux solaires hybrides</a></li><li data-v-187d7240><a${ssrRenderAttr("href", _ctx.route("landing", "chauffe-eau-thermodynamique"))} data-v-187d7240>Ballon thermodynamique</a></li></ul></div><div class="md:px-4 w-full md:w-3/12" data-v-187d7240><h6 class="font-bold text-lg text-left" data-v-187d7240>CHAUFFAGE</h6><ul class="flex flex-col gap-2" data-v-187d7240><li data-v-187d7240><a${ssrRenderAttr("href", _ctx.route("landing", "pompe-à-chaleur"))} data-v-187d7240>Pompe à chaleur</a></li><li data-v-187d7240><a${ssrRenderAttr("href", _ctx.route("landing", "poêle-à-granulés"))} data-v-187d7240>Poêles à granulés</a></li><li data-v-187d7240><a${ssrRenderAttr("href", _ctx.route("landing", "système-solaire-combiné"))} data-v-187d7240>Système solaire combiné</a></li></ul></div><div class="md:px-4 w-full md:w-auto" data-v-187d7240><h6 class="font-bold text-lg text-left" data-v-187d7240>ISOLATION</h6><ul class="flex flex-col gap-2" data-v-187d7240><li data-v-187d7240><a${ssrRenderAttr("href", _ctx.route("landing", "isolation-intérieur"))} data-v-187d7240>Murs intérieur</a></li><li data-v-187d7240><a${ssrRenderAttr("href", _ctx.route("landing", "isolation-extérieur"))} data-v-187d7240>Murs extérieur</a></li></ul></div></div><div class="flex md:justify-between mx-12 flex-wrap gap-4" data-v-187d7240>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("about")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Qui somme nous`);
        } else {
          return [
            createTextVNode("Qui somme nous")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("contact")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Nous Contacter`);
        } else {
          return [
            createTextVNode("Nous Contacter")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<span data-v-187d7240>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Lenergia. Tous les droits réservés</span></div></footer>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GuestLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-187d7240"]]);
export {
  GuestLayout as G
};

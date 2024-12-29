import { Head, Link } from "@inertiajs/vue3";
import { G as GuestLayout } from "./GuestLayout-36a367d8.js";
import { b as btnDevis } from "./btnDevis-59098679.js";
import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
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
    toArticle(ref) {
      this.$refs[ref][0].scrollIntoView({ behavior: "smooth" });
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
            _push2(` Savoir Plus`);
          } else {
            return [
              createTextVNode(" Savoir Plus")
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
            _push2(` Savoir Plus`);
          } else {
            return [
              createTextVNode(" Savoir Plus")
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
            _push2(` Savoir Plus`);
          } else {
            return [
              createTextVNode(" Savoir Plus")
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/IntermediatePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IntermediatePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  IntermediatePage as default
};

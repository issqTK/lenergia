import { Head } from "@inertiajs/vue3";
import { G as GuestLayout } from "./GuestLayout-36a367d8.js";
import { b as btnDevis } from "./btnDevis-59098679.js";
import { ref, resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const LandingPage_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_btnDevis = resolveComponent("btnDevis");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, {
    title: $props.work.meta_title
  }, null, _parent));
  _push(`<div class="py-4 px-4 md:px-12 lg:px-16"><div class="flex gap-2 items-center text-xs"><a href="/">Accueil</a><i class="fa-solid fa-chevron-right" style="${ssrRenderStyle({ "color": "#73efa6" })}"></i> .. <i class="fa-solid fa-chevron-right" style="${ssrRenderStyle({ "color": "#73efa6" })}"></i><b class="overflow-hidden text-ellipsis leading-4 max-w-xs whitespace-nowrap">${$props.work.title}</b></div><div class="flex mt-4 gap-6"><div class="absolute md:static w-4/12 hidden md:block p-4"><div class="w-3/4 m-auto"><div class="font-semibold text-lg mb-2">Sommaire</div><ul class="flex flex-col gap-4 break-words"><!--[-->`);
  ssrRenderList($props.articles, (article) => {
    _push(`<li class="flex gap-2"><i class="fa-solid leading-6 fa-circle" style="${ssrRenderStyle({ "color": "#72efa6", "font-size": "0.5em" })}"></i><a class="shadow-text cursor-pointer">${ssrInterpolate(article.title)}</a></li>`);
  });
  _push(`<!--]--><li class="flex gap-2"><i class="fa-solid leading-6 fa-circle" style="${ssrRenderStyle({ "color": "#72efa6", "font-size": "0.5em" })}"></i><a class="shadow-text cursor-pointer">FAQ</a></li></ul></div></div><div class="text-slate-800 w-full md:w-8/12 px-4 md:px-12 py-12 flex flex-col gap-8 bg-white rounded"><div class="md:hidden flex flex-col gap-2"><a href="javascript:void(0)" class="block font-semibold text-lg md:text-lg cursor-pointer py-2 px-8 rounded text-white bg-emerald-300"> Sommaire  <i class="fa-solid fa-caret-down"></i></a><ul class="flex flex-col gap-4 break-words p-0 rounded bg-white text-sm h-0 overflow-hidden bg-slate-100"><!--[-->`);
  ssrRenderList($props.articles, (article) => {
    _push(`<li class="flex gap-2"><i class="fa-solid leading-6 fa-circle" style="${ssrRenderStyle({ "color": "#72efa6", "font-size": "0.5em" })}"></i><a class="hover:font-semibold cursor-pointer">${ssrInterpolate(article.title)}</a></li>`);
  });
  _push(`<!--]--></ul></div><div class="flex flex-col gap-8"><h1 class="text-2xl lg:text-3xl text-center font-bold">${$props.work.title}</h1>`);
  if ($props.work.img) {
    _push(`<img${ssrRenderAttr("src", "/images/works/img/" + $props.work.img)} class="w-full">`);
  } else {
    _push(`<!---->`);
  }
  _push(`<p class="break-words text-justify leading-8" style="${ssrRenderStyle({ "word-spacing": "1px", "letter-spacing": "0.5px" })}">${$props.work.description}</p><p style="${ssrRenderStyle({ "word-spacing": "0.7px", "letter-spacing": "0.2px", "text-align": "center" })}"><strong class="text-center">${ssrInterpolate($props.work.line_text)}</strong></p></div><div class="flex flex-col">`);
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
  if ($props.work.id == 10) {
    _push(ssrRenderComponent(_component_btnDevis, {
      text: "Commandez dès maintenant",
      slug: $props.work.slug
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<i class="m-auto text-sm">Simulation gratuite en 2 minutes</i></div><!--[-->`);
  ssrRenderList($props.articles, (article) => {
    _push(`<div class="article flex flex-col gap-8"><h2 class="text-xl md:text-2xl font-bold">${ssrInterpolate(article.title)}</h2><div class="little-article flex flex-col gap-6">${article.article}</div>`);
    if (article.btnText) {
      _push(`<div class="flex items-center">`);
      if ([1, 5, 10].includes($props.work.id)) {
        _push(ssrRenderComponent(_component_btnDevis, {
          text: article.btnText,
          slug: $props.work.slug
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_btnDevis, {
          text: article.btnText
        }, null, _parent));
      }
      _push(`</div>`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/LandingPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LandingPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LandingPage as default
};

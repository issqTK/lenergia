import { _ as _sfc_main$1 } from "./AuthenticatedLayout-01c35298.js";
import { Head } from "@inertiajs/vue3";
import OrderView from "./viewOrder-781f9428.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const Orders_vue_vue_type_style_index_0_scoped_d16a5c54_lang = "";
const _sfc_main = {
  layout: _sfc_main$1,
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_OrderView = resolveComponent("OrderView");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Commandes" }, null, _parent));
  _push(`<div class="py-12" data-v-d16a5c54><div class="max-w-7xl mx-auto sm:px-6 lg:px-8" data-v-d16a5c54><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg" data-v-d16a5c54><div class="p-6 text-gray-900" data-v-d16a5c54><div class="overflow-x-scroll overscroll-contain scroll-y" data-v-d16a5c54>`);
  if (this.current == "list") {
    _push(`<table class="orders rounded overflow-hidden" data-v-d16a5c54><tr data-v-d16a5c54><th data-v-d16a5c54>État d&#39;examen</th><th data-v-d16a5c54>nom client</th><th data-v-d16a5c54>Téléphone client</th><th data-v-d16a5c54>logement Type</th><th data-v-d16a5c54>logement Construction</th><th data-v-d16a5c54>logement Surface</th><th data-v-d16a5c54>logement Energie</th><th data-v-d16a5c54>travaux Adresse</th><th data-v-d16a5c54>travaux demandés</th></tr><!--[-->`);
    ssrRenderList($props.data, (da) => {
      _push(`<tr class="relative cursor-pointer overflow-hidden" data-v-d16a5c54><td data-v-d16a5c54>${ssrInterpolate(da.reviewState)}</td><td data-v-d16a5c54>${ssrInterpolate(da.client.gender == "Monsieur" ? "Mr" : "Mme")} ${ssrInterpolate(da.client.lastName)} ${ssrInterpolate(da.client.firstName)}</td><td data-v-d16a5c54>${ssrInterpolate(da.client.phone)}</td><td data-v-d16a5c54>${ssrInterpolate(da.logementType)}</td><td data-v-d16a5c54>`);
      if (da.logementConstruction == "-2") {
        _push(`<span data-v-d16a5c54>Moins de 2 ans</span>`);
      } else {
        _push(`<!---->`);
      }
      if (da.logementConstruction == "2-15") {
        _push(`<span data-v-d16a5c54>Entre 2 ans et 15 ans</span>`);
      } else {
        _push(`<!---->`);
      }
      if (da.logementConstruction == "+15") {
        _push(`<span data-v-d16a5c54>Plus de 15 ans</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</td><td data-v-d16a5c54>${ssrInterpolate(da.logementSurface)} m²</td><td class="leading-3" data-v-d16a5c54>${ssrInterpolate(da.logementEnergie)} <br data-v-d16a5c54>`);
      if (da.logementEnergie == "Chauffage au fioul" || da.logementEnergie == "Chauffage électrique" || da.logementEnergie == "Chauffage au gaz") {
        _push(`<span data-v-d16a5c54>- <br data-v-d16a5c54>${ssrInterpolate(da.logementEnergieType)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</td><td data-v-d16a5c54>${ssrInterpolate(da.travauxAdresse)}</td><td data-v-d16a5c54><!--[-->`);
      ssrRenderList(da.works, (work) => {
        _push(`<span class="text-xs block text-left mb-2 p-2 bg-white shadow" data-v-d16a5c54>${ssrInterpolate(work.name)} <br data-v-d16a5c54></span>`);
      });
      _push(`<!--]--></td><span class="rounded" data-v-d16a5c54>Afficher</span></tr>`);
    });
    _push(`<!--]--></table>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.data.length == 0) {
    _push(`<div class="px-4" data-v-d16a5c54>Il n&#39;y a pas encore d&#39;enregistrements</div>`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Orders = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d16a5c54"]]);
export {
  Orders as default
};

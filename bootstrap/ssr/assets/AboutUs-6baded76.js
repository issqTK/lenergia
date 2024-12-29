import { Head } from "@inertiajs/vue3";
import { G as GuestLayout } from "./GuestLayout-36a367d8.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./btnDevis-59098679.js";
const AboutUs_vue_vue_type_style_index_0_scoped_2bd41acb_lang = "";
const _sfc_main = {
  props: {},
  layout: GuestLayout,
  components: {
    Head
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "about us" }, null, _parent));
  _push(`<div class="flex flex-col gap-6 text-sm md:text-base lg:w-9/12 lg:rounded-lg lg:shadow-xl p-8 md:py-12 md:px-16 mx-auto mt-8 bg-white page" data-v-2bd41acb><h1 class="text-xl md:text-2xl font-bold capitalize" data-v-2bd41acb>Qui sommes-nous ?</h1><p class="text-justify leading-8" data-v-2bd41acb>Bienvenue chez <strong data-v-2bd41acb>Lenergia</strong>, votre partenaire de confiance pour vos projets d&#39;énergie renouvelable et de rénovation énergétique. Nous sommes une plateforme innovante dédiée à la génération de solutions durables et économiques pour les particuliers et les entreprises souhaitant améliorer leur efficacité énergétique.</p><p class="text-justify leading-8" data-v-2bd41acb>Chez <strong data-v-2bd41acb>Lenergia</strong>, nous croyons que la transition énergétique est essentielle pour un avenir plus vert. C&#39;est pourquoi nous facilitons l&#39;accès à des projets d&#39;économies d&#39;énergie tels que l&#39;installation de panneaux solaires, l&#39;isolation thermique, les pompes à chaleur, et bien plus encore.</p><p class="text-justify leading-8" data-v-2bd41acb>Notre mission est simple : <strong data-v-2bd41acb>vous accompagner à chaque étape de votre projet, du diagnostic à l&#39;installation</strong>, en passant par la recherche des meilleures subventions disponibles. Grâce à notre réseau de sous-traitants certifiés et à nos équipes spécialisées, nous nous assurons que vos travaux sont réalisés dans les meilleures conditions et conformément aux normes les plus exigeantes.</p><p class="text-justify leading-8" data-v-2bd41acb>En choisissant <strong data-v-2bd41acb>Lenergia</strong>, vous bénéficiez :</p><ul class="list-disc ml-9 text-justify leading-8" data-v-2bd41acb><li data-v-2bd41acb><strong data-v-2bd41acb>D&#39;une expertise technique :</strong> Nos experts vous conseillent et assurent le suivi de votre projet, de l&#39;audit initial à la mise en œuvre.</li><li data-v-2bd41acb><strong data-v-2bd41acb>D&#39;un réseau de professionnels qualifiés :</strong> Nous travaillons avec des partenaires reconnus pour leur savoir-faire, qui se chargeront des visites techniques, des audits, et des installations.</li><li data-v-2bd41acb><strong data-v-2bd41acb>D&#39;un accompagnement personnalisé :</strong> Nous analysons vos besoins pour vous proposer les solutions les plus adaptées à votre situation.</li></ul><p class="text-justify leading-8" data-v-2bd41acb>Notre vision est de devenir une référence en matière de conseil énergétique et de vous offrir des solutions performantes pour réduire votre consommation, alléger vos factures, et contribuer à la préservation de l&#39;environnement.</p><p class="text-justify leading-8" data-v-2bd41acb><strong data-v-2bd41acb>Lenergia</strong> est plus qu&#39;une simple plateforme : c&#39;est un acteur engagé pour une transition énergétique accessible à tous. Ensemble, construisons un avenir énergétique durable !</p></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AboutUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2bd41acb"]]);
export {
  AboutUs as default
};

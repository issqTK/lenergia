import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: ["ExterieurRevetement"],
  emits: ["exterior-revetement"],
  methods: {
    goNext(value) {
      this.$emit("exterior-revetement", value);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/isolationRevetement.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const isolationRevetement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  isolationRevetement as default
};

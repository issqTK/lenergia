import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
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
        const index = array.indexOf(work_id);
        if (index > -1) {
          array.splice(index, 1);
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/Work/selectTravaux.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const selectTravaux = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  selectTravaux as default
};

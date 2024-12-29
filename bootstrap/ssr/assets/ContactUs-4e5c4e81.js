import { Head } from "@inertiajs/vue3";
import { G as GuestLayout } from "./GuestLayout-36a367d8.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./btnDevis-59098679.js";
const ContactUs_vue_vue_type_style_index_0_scoped_f651f96c_lang = "";
const _sfc_main = {
  layout: GuestLayout,
  components: { Head },
  data() {
    return {
      emailCopied: false
    };
  },
  methods: {
    copy() {
      document.getElementById("mail").select();
      document.execCommand("copy");
      this.emailCopied = true;
      setTimeout(() => {
        this.emailCopied = false;
      }, 2e3);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Contact us" }, null, _parent));
  _push(`<div class="flex flex-col justify-around lg:w-9/12 lg:rounded-lg lg:shadow-xl py-8 px-12 md:py-12 md:px-24 mx-auto mt-8 bg-white page" data-v-f651f96c><h1 class="capitalize text-xl font-bold" data-v-f651f96c>nous contacter :</h1><div class="flex gap-4 items-center relative" data-v-f651f96c><label for="mail" class="text-sm uppercase" data-v-f651f96c>email</label><textarea name="email" id="mail" class="rounded-sm w-full border-none ring-1 ring-slate-100 resize-none" rows="1" readonly data-v-f651f96c>contact@lenergia.fr</textarea><span style="${ssrRenderStyle(this.emailCopied ? null : { display: "none" })}" class="absolute right-2 bottom-2 text-green-500 font-semibold" data-v-f651f96c>Copied!</span></div><hr data-v-f651f96c><div class="flex flex-col gap-1 relative" data-v-f651f96c><a class="flex justify-center items-center h-24 w-24 bg-amber-400 text-white font-bold rounded-full" href="tel:0985408779" data-v-f651f96c> Appeler</a></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ContactUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f651f96c"]]);
export {
  ContactUs as default
};

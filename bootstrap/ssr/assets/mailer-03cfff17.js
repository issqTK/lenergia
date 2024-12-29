import { _ as _sfc_main$1 } from "./AuthenticatedLayout-01c35298.js";
import { Head, useForm, router } from "@inertiajs/vue3";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: ["mails"],
  layout: _sfc_main$1,
  components: { Head },
  data() {
    return {
      addNew: false,
      new: useForm({
        name: "",
        email: ""
      }),
      errorName: null,
      errorEmail: null,
      successMessage: null,
      successDelete: null
    };
  },
  methods: {
    delete(ID) {
      router.get(
        "/mailer/delete",
        { mailID: ID },
        {
          preserveState: true,
          preserveScroll: true,
          onSuccess: () => {
            this.successDelete = this.$page.props.flash.message;
            setTimeout(() => {
              this.successDelete = null;
            }, 4e3);
          }
        }
      );
    },
    createNew() {
      if (!/^[a-z ]+$/i.test(this.new.name)) {
        this.errorName = "seules les lettres et les espaces blancs sont autorisés !";
        return;
      } else
        this.errorName = null;
      if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.new.email
      )) {
        this.errorEmail = "addresse e-mail n'est pas valide !";
        return;
      } else
        this.errorEmail = null;
      this.new.post("/mailer/create", {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.new.reset();
          this.addNew = false;
          this.successMessage = this.$page.props.flash.message;
          setTimeout(() => {
            this.successMessage = null;
          }, 4e3);
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Mailer" }, null, _parent));
  _push(`<div class="py-12"><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"><ul class="table mx-auto mt-4 mb-4"><li><h1 class="text-2xl font-bold mb-4"> Liste d&#39;adresse mail </h1></li><!--[-->`);
  ssrRenderList($props.mails, (mail) => {
    _push(`<li class="leading-10 ml-4"><a><i class="fa-solid fa-trash" style="${ssrRenderStyle({ "color": "#d20404" })}"></i></a>    ${ssrInterpolate(mail.mailAdress)}</li>`);
  });
  _push(`<!--]-->`);
  if (this.successDelete) {
    _push(`<li><span class="text-green-700 font-semibold">${ssrInterpolate($data.successDelete)}</span></li>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</ul><hr class="table w-10/12 mx-auto"><div class="table mx-auto my-4"><a href="javascript:void(0)" class="font-bold text-slate-700"> Ajouter un nouvel e-mail </a>`);
  if ($data.addNew) {
    _push(`<form class="flex flex-col gap-2 mt-4"><input type="text" placeholder="Le Nom"${ssrRenderAttr("value", this.new.name)} class="${ssrRenderClass([$data.errorName ? "border-red-600 " : "", "rounded"])}">`);
    if (this.errorName) {
      _push(`<span class="text-sm text-red-600">${ssrInterpolate($data.errorName)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<input type="email" placeholder="Email Addresse"${ssrRenderAttr("value", this.new.email)} class="${ssrRenderClass([$data.errorEmail ? "border-red-600 " : "", "rounded"])}">`);
    if ($data.errorEmail) {
      _push(`<span class="text-sm text-red-600">${ssrInterpolate($data.errorEmail)}</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<input type="submit" value="Enregister" class="p-3 rounded bg-slate-700 text-white font-bold"></form>`);
  } else {
    _push(`<!---->`);
  }
  if (this.successMessage) {
    _push(`<span class="block text-green-700 font-semibold">${ssrInterpolate($data.successMessage)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><hr class="table w-10/12 mx-auto"><div class="flex flex-col gap-3 items-center justify-center my-4">`);
  if (this.$page.props.flash.otherMSG) {
    _push(`<span class="text-green-700 font-semibold">${ssrInterpolate(_ctx.$page.props.flash.otherMSG)}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<a${ssrRenderAttr("href", _ctx.route("mailer.send"))} class="block w-10/12 text-center py-3 bg-blue-400 hover:bg-blue-500 text-white font-bold uppercase text-sm rounded">Envoyer les emails</a></div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/mailer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mailer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  mailer as default
};

import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: ["UtilisateurStatus"],
  emits: ["utilisateur-status"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/project/personalInfos/utilisateurStatut.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const utilisateurStatut = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  utilisateurStatut as default
};

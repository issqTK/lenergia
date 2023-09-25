<template>
    <Head title="Mailer" />

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <ul class="table mx-auto mt-4 mb-4">
                    <li>
                        <h1 class="text-2xl font-bold mb-4">
                            Liste d'adresse mail
                        </h1>
                    </li>

                    <li v-for="mail in mails" :key="mail.id" class="leading-10 ml-4">
                        <a @click.prevent="this.delete(mail.id)">
                            <i class="fa-solid fa-trash" style="color: #d20404"></i>
                        </a>

                        &nbsp;&nbsp;

                        {{ mail.mailAdress }}
                    </li>

                    <li v-if="this.successDelete">
                        <span class="text-green-700 font-semibold">{{
                            successDelete
                        }}</span>
                    </li>
                </ul>
                <hr class="table w-10/12 mx-auto" />
                <div class="table mx-auto my-4">
                    <a href="javascript:void(0)" @click="addNew = !addNew" class="font-bold text-slate-700">
                        Ajouter un nouvel e-mail
                    </a>

                    <form class="flex flex-col gap-2 mt-4" v-if="addNew">
                        <input type="text" placeholder="Le Nom" v-model="this.new.name" class="rounded"
                            :class="errorName ? 'border-red-600 ' : ''" />

                        <span v-if="this.errorName" class="text-sm text-red-600">{{ errorName }}</span>

                        <input type="email" placeholder="Email Addresse" v-model="this.new.email" class="rounded"
                            :class="errorEmail ? 'border-red-600 ' : ''" />

                        <span v-if="errorEmail" class="text-sm text-red-600">{{
                            errorEmail
                        }}</span>

                        <input type="submit" @click.prevent="createNew" value="Enregister"
                            class="p-3 rounded bg-slate-700 text-white font-bold" />
                    </form>

                    <span v-if="this.successMessage" class="block text-green-700 font-semibold">{{ successMessage }}</span>
                </div>

                <hr class="table w-10/12 mx-auto" />

                <div class="flex flex-col gap-3 items-center justify-center my-4">
                    <span v-if="this.$page.props.flash.otherMSG" class="text-green-700 font-semibold">{{
                        $page.props.flash.otherMSG }}</span>

                    <a :href="route('increasingSolution')"
                        class="block w-10/12 text-center py-3 bg-blue-400 hover:bg-blue-500 text-white font-bold uppercase text-sm rounded">Envoyer
                        les emails</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link } from "@inertiajs/vue3";
import { useForm } from "@inertiajs/vue3";
import { router } from "@inertiajs/vue3";

export default {
    props: ["mails"],
    layout: AuthenticatedLayout,
    components: { Head },
    data() {
        return {
            addNew: false,
            new: useForm({
                name: "",
                email: "",
            }),
            errorName: null,
            errorEmail: null,
            successMessage: null,
            successDelete: null,
        };
    },
    methods: {
        delete(ID) {
            router.get(
                "delete",
                { mailID: ID },
                {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: () => {
                        this.successDelete = this.$page.props.flash.message;
                        setTimeout(() => {
                            this.successDelete = null;
                        }, 4000);
                    },
                }
            );
        },
        createNew() {
            if (!/^[a-z ]+$/i.test(this.new.name)) {
                this.errorName =
                    "seules les lettres et les espaces blancs sont autorisés !";
                return;
            } else this.errorName = null;

            if (
                !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    this.new.email
                )
            ) {
                this.errorEmail = "addresse e-mail n'est pas valide !";
                return;
            } else this.errorEmail = null;

            this.new.post("/create-new", {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    this.new.reset();
                    this.addNew = false;
                    this.successMessage = this.$page.props.flash.message;
                    setTimeout(() => {
                        this.successMessage = null;
                    }, 4000);
                },
            });
        },
    },
};
</script>

<template>
    <div class="container">

        <div class="flex flex-col items-center">
            <h1 class="text-3xl text-gray-700 font-medium mb-10 mt-10">
                Hello Guest.
            </h1>

            <form
                action="#"
                class="bg-white p-8 rounded w-full md:w-6/12 lg:w-4/12 mb-6"
                @submit.prevent="submit"
            >
                <div class="mb-6">
                    <label
                        for="email"
                        class="block text-gray-600 font-medium mb-2"
                        :class="{
                            'text-red-500': validation.email
                        }"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        class="border-2 border-gray-400 rounded block w-full p-3"
                        :class="{
                            'border-red-500': validation.email
                        }"
                        v-model="form.email"
                    >
                    <div class="text-red-500 mb-4 text-sm mt-1 font-medium" v-if="validation.email">
                        {{ validation.email[0] }}
                    </div>
                </div>
                <div class="mb-6">
                    <label
                        for="name"
                        class="block text-gray-600 font-medium mb-2"
                        :class="{
                            'text-red-500': validation.name
                        }"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        class="border-2 border-gray-400 rounded block w-full p-3"
                        :class="{
                            'border-red-500': validation.name
                        }"
                        v-model="form.name"
                    >
                    <div class="text-red-500 mb-4 text-sm mt-1 font-medium" v-if="validation.name">
                        {{ validation.name[0] }}
                    </div>
                </div>
                <div class="mb-6">
                    <label
                        for="name"
                        class="block text-gray-600 font-medium mb-2"
                        :class="{
                            'text-red-500': validation.username
                        }"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        class="border-2 border-gray-400 rounded block w-full p-3"
                        :class="{
                            'border-red-500': validation.username
                        }"
                        v-model="form.username"
                    >
                    <div class="text-red-500 mb-4 text-sm mt-1 font-medium" v-if="validation.username">
                        {{ validation.username[0] }}
                    </div>
                </div>
                <div class="mb-6">
                    <label
                        for="password"
                        class="block text-gray-600 font-medium mb-2"
                        :class="{
                            'text-red-500': validation.password
                        }"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        class="border-2 border-gray-400 rounded block w-full p-3"
                        :class="{
                            'border-red-500': validation.password
                        }"
                        v-model="form.password"
                    >
                    <div class="text-red-500 mb-4 text-sm mt-1 font-medium" v-if="validation.password">
                        {{ validation.password[0] }}
                    </div>
                </div>
                <div class="mb-6">
                    <label
                        for="password_confirmation"
                        class="block text-gray-600 font-medium mb-2"
                        :class="{
                            'text-red-500': validation.password_confirmation
                        }"
                    >
                        Password Confirmation
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        class="border-2 border-gray-400 rounded block w-full p-3"
                        :class="{
                            'border-red-500': validation.password_confirmation
                        }"
                        v-model="form.password_confirmation"
                    >
                    <div class="text-red-500 mb-4 text-sm mt-1 font-medium" v-if="validation.password_confirmation">
                        {{ validation.password_confirmation[0] }}
                    </div>
                </div>
                <div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data: () => ({
            form: {
                name: '',
                username: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            validation: []
        }),
        methods: {
            async submit() {
                try {
                    await this.$axios.$post('auth/register', this.form)
                    await this.$auth.loginWith('local', {
                        data: {
                            email: this.form.email,
                            password: this.form.password
                        }
                    })
                } catch (e) {
                    if (e.response.status === 422) {
                        this.validation = e.response.data.errors
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="container">
        <div class="flex flex-col items-center">
            <h1 class="text-3xl text-gray-700 font-medium mb-10 mt-6">
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
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/12">
                        Login
                    </button>
                    <nuxt-link
                        :to="{ name: 'forgot-password' }"
                        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    >
                        Forgot Password?
                    </nuxt-link>
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
                email: '',
                password: ''
            },
            validation: []
        }),
        methods: {
            async submit() {
                try {
                    await this.$auth.loginWith('local', {
                        data: this.form
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

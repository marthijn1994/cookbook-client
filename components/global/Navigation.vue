<template>
    <div class="bg-white flex items-center py-3 lg:py-0">
        <div class="container flex flex-wrap items-center lg:flex-no-wrap">

            <logo/>

            <a
                href="#"
                class="lg:hidden ml-auto flex flex-col relative justify-center w-8 h-8"
                @click.prevent="mobileNavOpen = !mobileNavOpen"
            >
                <span
                    class="bg-gray-900 h-1 w-8 rounded mb-1"
                    :class="{
                        'rotate-45 absolute right-0': mobileNavOpen
                    }"
                ></span>
                <span
                    class="bg-gray-900 h-1 w-8 rounded mb-1"
                    :class="{
                        '-rotate-45 absolute right-0': mobileNavOpen
                    }"
                ></span>
                <span
                    class="bg-gray-900 h-1 w-8 rounded mb-1"
                    :class="{
                        'hidden': mobileNavOpen
                    }"
                ></span>
            </a>

            <nav
                class="w-full flex flex-wrap lg:flex-no-wrap text-center"
                :class="{
                    'hidden lg:flex': !mobileNavOpen,
                    'pt-2': mobileNavOpen
                }"
            >

                <ul class="lg:h-24 lg:flex items-center w-full lg:w-auto">
                    <li>
                        <nuxt-link
                            :to="{ name: 'index' }"
                            class="text-lg text-gray-700 lg:py-8 lg:px-4 py-4"
                        >
                            Home
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            :to="{ name: 'recipes' }"
                            class="text-lg text-gray-700 lg:py-8 lg:px-4 py-4"
                        >
                            Recipes
                        </nuxt-link>
                    </li>
                </ul>

                <ul class="lg:h-24 lg:flex items-center lg:ml-auto lg:text-right w-full lg:w-auto">
                    <template v-if="$auth.loggedIn">
                        <li>
                            <nuxt-link
                                :to="{ name: 'dashboard' }"
                                class="text-lg text-gray-700 lg:py-8 lg:px-4 py-4"
                            >
                                Dashboard
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link
                                :to="{ name: 'index' }"
                                class="text-lg text-gray-700 lg:py-8 lg:px-4 py-4"
                            >
                                {{ $auth.user.name }}
                            </nuxt-link>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="text-lg text-gray-700 lg:py-8 lg:px-4 py-4"
                                @click.prevent="logout"
                            >
                                Logout
                            </a>
                        </li>
                    </template>
                    <template v-else>
                        <li>
                            <nuxt-link
                                :to="{ name: 'login' }"
                                class="text-lg text-gray-700 lg:py-8 lg:px-4 py-4"
                            >
                                Login
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link
                                :to="{ name: 'register' }"
                                class="text-lg text-gray-700 lg:py-8 lg:px-4 py-4"
                            >
                                Register
                            </nuxt-link>
                        </li>
                    </template>
                </ul>

            </nav>

        </div>
    </div>
</template>

<script>
    import Logo from "./Logo";

    export default {
        name: "Navigation",
        components: { Logo },
        data() {
            return {
                mobileNavOpen: false
            }
        },
        methods: {
            async logout() {
                await this.$auth.logout()
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <nuxt-link :to="{ name: 'index' }" class="flex items-center text-gray-900 mr-10 flex-shrink-0">
        <img
            data-src="~/assets/logo.png"
            alt="Cookbook Logo"
            title="Cookbook Logo"
            class="h-8 w-auto"
            v-lazy-load
        >
        <span class="font-semibold text-xl tracking-tight ml-2">Cookbook</span>
    </nuxt-link>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped>

</style>

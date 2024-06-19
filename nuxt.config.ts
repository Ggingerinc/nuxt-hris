// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["nuxt-auth-sanctum", "@nuxtjs/tailwindcss"],
    sanctum: {
        baseUrl: "http://localhost",
    }
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    css: ['~/assets/css/app.css'],
    modules: ['usebootstrap', '@nuxt/icon'],
    devtools: {enabled: true}
})
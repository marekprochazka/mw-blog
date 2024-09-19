// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/color-mode', 'nuxt-twemoji'],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    },
    css: ['~/assets/styles/entry.css'],
    twemoji: {
        expiresIn: 3.154e+7 // SVG cache expiration time in seconds (1 year)
    }
})
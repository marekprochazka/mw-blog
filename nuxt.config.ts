// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {},
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    'nuxt-twemoji',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'nuxt-easy-lightbox',
    '@nuxt/image',
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  content: {
    experimental: {
      clientDB: true,
    },
  },
  css: ['~/assets/styles/entry.scss'],
  twemoji: {
    expiresIn: 3.154e7, // SVG cache expiration time in seconds (1 year)
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
});

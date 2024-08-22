// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    "@nuxt/image",
    "nuxt-time"
  ],
  app: {
    baseURL: '/nomnomPortfolio-v2/',
  },
  routeRules: {
    '/': { prerender: true }
  },
  css: ["@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },

  compatibilityDate: '2024-08-13'
})
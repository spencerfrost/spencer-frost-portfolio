// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    '~/assets/styles/tailwind.css',
    '~/assets/styles/global.scss'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: [],
  },

  modules: ['shadcn-nuxt'],
});
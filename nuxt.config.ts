// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: [
    "~/assets/styles/tailwind.css",
    "~/assets/styles/global.css",
    "~/assets/styles/catppuccin.css"
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  fonts: {
    families: [
      {
        name: "Inter",
        provider: "google",
        weights: [400, 500, 600, 700],
      },
      {
        name: "Newsreader",
        provider: "google",
        weights: [400, 500, 600],
        styles: ["italic", "normal"],
      },
      {
        name: "JetBrains Mono",
        provider: "google",
        weights: [400, 500, 700],
      },
      {
        name: 'Nunito',
        provider: 'google',
        weights: [400, 500, 600, 700]
      }
    ],
  },

  modules: [
    "shadcn-nuxt",
    "@nuxt/devtools",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/fonts",
    '@vee-validate/nuxt',
    "@nuxt/content",
  ],

  eslint: {
    config: {
    }
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
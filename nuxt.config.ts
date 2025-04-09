// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: ["~/assets/styles/tailwind.css", "~/assets/styles/global.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: [],
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

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  modules: [
    "shadcn-nuxt",
    "@nuxt/devtools",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/fonts",
  ],
});

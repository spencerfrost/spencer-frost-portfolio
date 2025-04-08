import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  vite: {
    define: {
      global: {},
    },
    esbuild: {
      define: {
        global: "globalThis",
      },
    },
    resolve: {
      dedupe: ["vue"],
    },
    plugins: [
    ],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    'shadcn-nuxt'
  ],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    "/**": {
      headers: {
        "Accept-CH": "Sec-CH-Prefers-Color-Scheme",
        "Critical-CH": "Sec-CH-Prefers-Color-Scheme",
      },
    },
  },
  app: {
    head: {
      title: "Spencer Frost Portfolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Spencer Frost - Software Engineer Portfolio",
        },
        { name: "theme-color", content: "#1e1e2e" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});

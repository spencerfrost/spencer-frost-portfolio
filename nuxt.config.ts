// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  devtools: {
    enabled: true,
    vscode: {
      reuseExistingServer: true,
    },
    timeline: {
      enabled: true,
    },
  },
  css: ['~/assets/styles/tailwind.css', '~/assets/styles/global.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [400, 500, 600, 700],
      },
      {
        name: 'Newsreader',
        provider: 'google',
        weights: [400, 500, 600],
        styles: ['italic', 'normal'],
      },
      {
        name: 'JetBrains Mono',
        provider: 'google',
        weights: [400, 500, 700],
      },
      {
        name: 'Nunito',
        provider: 'google',
        weights: [400, 500, 600, 700],
      },
    ],
  },
  modules: [
    'shadcn-nuxt',
    '@nuxt/devtools',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@vee-validate/nuxt',
    '@nuxt/content',
    'v-gsap-nuxt',
    'vue3-carousel-nuxt',
  ],
  eslint: {
    config: {},
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
})

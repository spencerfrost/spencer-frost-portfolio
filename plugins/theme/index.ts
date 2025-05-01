import { defineNuxtPlugin, useHead } from 'nuxt/app'
import { useThemeSettings } from './settings'

// Plugin to inject theme functionality
export default defineNuxtPlugin(nuxtApp => {
  const $settings = useThemeSettings()

  // Apply theme class to HTML element
  useHead({
    htmlAttrs: {
      class: () => [
        // Apply the active Catppuccin flavour directly as class
        $settings.active.value ?? '',
        // Apply the 'dark' class for all dark themes for Tailwind compatibility
        $settings.isDark.value ? 'dark' : '',
      ],
    },
  })

  // Make the theme settings available globally
  return {
    provide: {
      theme: $settings,
    },
  }
})

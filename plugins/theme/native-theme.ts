import { ref, computed } from 'vue'
import type { LightTheme } from './themes'

// Define SystemTheme directly in this file to avoid import issues
type SystemTheme = LightTheme | 'mocha'

// Stub for SSR
export function useNativeTheme() {
  return computed<SystemTheme>(() => 'mocha')
}

// Client-side implementation
export function useNativeThemeClient() {
  const lightPreference = window.matchMedia('(prefers-color-scheme: light)')
  const isLight = ref(lightPreference.matches)

  const updateIsLight = () => {
    isLight.value = lightPreference.matches
  }

  if (typeof window !== 'undefined') {
    // Add listener
    lightPreference.addEventListener('change', updateIsLight)
  }

  return computed<SystemTheme>(() => (isLight.value ? 'latte' : 'mocha'))
}

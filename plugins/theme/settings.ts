import { useCookie, useState } from 'nuxt/app';
import { ref, computed, watch } from 'vue';
import type { Theme, ThemePreference } from './themes';
import { isLightTheme, isDarkTheme } from './themes';
import { useNativeTheme } from './native-theme';

export function useThemeSettings() {
  // Get the system theme preference
  const systemTheme = useNativeTheme();

  // Use the Nuxt useState for reactivity across components
  const themePreference = useState<ThemePreference>(
    'theme-preference', 
    () => {
      // Try to load from cookie if available
      const cookiePref = useCookie<ThemePreference>('theme-preference');
      return cookiePref.value || 'system';
    }
  );

  // Compute the active theme
  const active = computed<Theme>(() => {
    if (themePreference.value === 'system') {
      return systemTheme.value;
    }
    return themePreference.value as Theme; // Type assertion
  });

  // Computed properties to determine theme state
  const isLight = computed(() => isLightTheme(active.value));
  const isDark = computed(() => isDarkTheme(active.value));

  // Save preference to cookie
  watch(themePreference, (newPreference) => {
    const cookiePref = useCookie<ThemePreference>('theme-preference');
    cookiePref.value = newPreference;
  });

  // Function to set the preferred theme
  function setPreferredTheme(preference: ThemePreference) {
    themePreference.value = preference;
  }

  return {
    preferred: themePreference,
    active,
    isLight,
    isDark,
    setPreferredTheme,
  };
}

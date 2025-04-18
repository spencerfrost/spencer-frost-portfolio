import { useCookie, useState } from 'nuxt/app';
import { computed } from 'vue';
import type { Theme, ThemePreference } from './themes';
import { isDarkTheme, isLightTheme } from './themes';

export function useThemeSettings() {
  const themePreference = useState<ThemePreference>(
    'theme-preference', 
    () => {
      const cookiePref = useCookie<ThemePreference>('theme-preference');
      return cookiePref.value;
    }
  );

  const active = computed<Theme>(() => {
    return themePreference.value as Theme;
  });

  const isLight = computed(() => isLightTheme(active.value));
  const isDark = computed(() => isDarkTheme(active.value));

  function setCookiePreference(newPreference: ThemePreference) {
    const cookiePref = useCookie<ThemePreference>('theme-preference');
    cookiePref.value = newPreference;
  }

  function setPreferredTheme(preference: ThemePreference) {
    themePreference.value = preference;
    setCookiePreference(preference);
  }

  return {
    preferred: themePreference,
    active,
    isLight,
    isDark,
    setPreferredTheme,
  };
}

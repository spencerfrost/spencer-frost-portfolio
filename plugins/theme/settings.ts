// plugins/theme/settings.ts
import { useCookie, useState } from 'nuxt/app';
import { computed } from 'vue';
import type { Theme, ThemePreference } from './themes';
import { isDarkTheme, isLightTheme } from './themes';

const DEFAULT_THEME: Theme = 'mocha';

export function useThemeSettings() {
  const themePreference = useState<ThemePreference>(
    'theme-preference',
    () => {
      const cookiePref = useCookie<ThemePreference>('theme-preference');
      return cookiePref.value ?? DEFAULT_THEME;
    }
  );

  const active = computed<Theme>(() => {
    return themePreference.value;
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
// Theme definitions using Catppuccin flavours
export const LightThemes = ["latte"] as const;
export const DarkThemes = ["mocha", "macchiato", "frappe"] as const;

export type LightTheme = typeof LightThemes[number];
export type DarkTheme = typeof DarkThemes[number];
export type Theme = LightTheme | DarkTheme;
export type SystemTheme = LightTheme | "mocha"; // System only provides light/dark

export type ThemePreference = Theme;

export const isLightTheme = (theme: Theme): theme is LightTheme => {
  return LightThemes.includes(theme as LightTheme);
};

export const isDarkTheme = (theme: Theme): theme is DarkTheme => {
  return DarkThemes.includes(theme as DarkTheme);
};

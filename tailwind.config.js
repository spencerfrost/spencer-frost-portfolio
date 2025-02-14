const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  content: [
    './pages/**/*.{js,jsx,vue}',
    './components/**/*.{js,jsx,vue}',
    './app/**/*.{js,jsx,vue}',
    './src/**/*.{js,jsx,vue}',
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'rgb(var(--overlay0) / <alpha-value>)', // Changed from surface1 to overlay0 as it's more commonly used for borders
        input: 'rgb(var(--surface2) / <alpha-value>)', // Changed to surface2 for better contrast
        ring: 'rgb(var(--lavender) / <alpha-value>)', // Changed from mauve to lavender per Catppuccin's UI guidelines
        background: 'rgb(var(--base) / <alpha-value>)', // This is correct
        foreground: 'rgb(var(--text) / <alpha-value>)', // This is correct
        primary: {
          DEFAULT: 'rgb(var(--blue) / <alpha-value>)', // Changed from mauve to blue as it's the primary action color in Catppuccin
          foreground: 'rgb(var(--crust) / <alpha-value>)', // Changed to crust for better contrast
        },
        secondary: {
          DEFAULT: 'rgb(var(--surface2) / <alpha-value>)', // Changed to surface2 for better contrast
          foreground: 'rgb(var(--text) / <alpha-value>)', // This is correct
        },
        destructive: {
          DEFAULT: 'rgb(var(--red) / <alpha-value>)', // This is correct
          foreground: 'rgb(var(--crust) / <alpha-value>)', // Changed to crust for better contrast
        },
        muted: {
          DEFAULT: 'rgb(var(--surface1) / <alpha-value>)', // Changed to surface1 for subtle contrast
          foreground: 'rgb(var(--subtext1) / <alpha-value>)', // Changed to subtext1 for better readability
        },
        accent: {
          DEFAULT: 'rgb(var(--mauve) / <alpha-value>)', // Changed from pink to mauve as it's more commonly used for accents
          foreground: 'rgb(var(--crust) / <alpha-value>)', // Changed to crust for better contrast
        },
        popover: {
          DEFAULT: 'rgb(var(--mantle) / <alpha-value>)', // Changed to mantle for proper layering
          foreground: 'rgb(var(--text) / <alpha-value>)', // This is correct
        },
        card: {
          DEFAULT: 'rgb(var(--mantle) / <alpha-value>)', // Changed to mantle for proper layering
          foreground: 'rgb(var(--text) / <alpha-value>)', // This is correct
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
    },
  },
  plugins: [
    animate,
    require('@catppuccin/tailwindcss')({
      prefix: '',
      defaultFlavour: 'latte',
    }),
  ],
}

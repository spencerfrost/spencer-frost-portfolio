/** @type {import('tailwindcss').Config} */
import catppuccin from "@catppuccin/tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  darkMode: ["class", "class"],
  theme: {
    extend: {
			fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'ui-serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        rounded: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Add these additional utility classes for more specific usage
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        code: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        heading: "rgb(var(--ctp-text))",
        inactive: "rgb(var(--ctp-overlay1))",
        dark: "rgb(var(--ctp-subtext1))",
        inverted: "rgb(var(--ctp-base))",
        bg: "rgb(var(--ctp-base))",
        "raised-bg": "rgb(var(--ctp-surface0))",
        "overlay-bg": "rgb(var(--ctp-surface1))",
        "hover-bg": "rgb(var(--ctp-surface2))",
        red: "rgb(var(--ctp-red))",
        orange: "rgb(var(--ctp-peach))",
        yellow: "rgb(var(--ctp-yellow))",
        green: "rgb(var(--ctp-green))",
        mint: "rgb(var(--ctp-teal))",
        teal: "rgb(var(--ctp-teal))",
        cyan: "rgb(var(--ctp-sky))",
        blue: "rgb(var(--ctp-blue))",
        indigo: "rgb(var(--ctp-lavender))",
        violet: "rgb(var(--ctp-lavender))",
        purple: "rgb(var(--ctp-mauve))",
        pink: "rgb(var(--ctp-pink))",
        border: "hsl(var(--border))",
        "border-bright": "rgb(var(--ctp-overlay1))",
        "input-bg": "rgb(var(--ctp-surface0))",
        "input-border": "rgb(var(--ctp-overlay0))",
        "selection-bg": "rgba(var(--ctp-overlay2), 0.3)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "latte",
    }),
    require("tailwindcss-animate"),
  ],
  corePlugins: {
    preflight: false,
  },
};

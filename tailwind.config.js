/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Newsreader", "ui-serif", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        rounded: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        code: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        background: 'rgba(var(--background), 1)',
        foreground: "rgba(var(--foreground), 1)",
        "semantic-foreground": "rgba(var(--semantic-foreground), 1)",

        // Main Colors (for Shadcn UI)
        // These colors are used for the main components of the UI
        primary: {
          DEFAULT: "rgba(var(--primary), 1)",
          foreground: "rgba(var(--semantic-foreground), 1)",
        },
        secondary: {
          DEFAULT: "rgba(var(--secondary), 1)",
          foreground: "rgba(var(--semantic-foreground), 1)",
        },
        muted: {
          DEFAULT: "rgba(var(--muted), 1)",
          foreground: "rgba(var(--muted-foreground), 1)",
        },
        accent: {
          DEFAULT: "rgba(var(--accent), 1)",
          foreground: "rgba(var(--accent-foreground), 1)",
        },
        success: {
          DEFAULT: "rgba(var(--success), 1)",
          foreground: "rgba(var(--semantic-foreground), 1)",
        },
        warning: {
          DEFAULT: "rgba(var(--warning), 1)",
          foreground: "rgba(var(--semantic-foreground), 1)",
        },
        destructive: {
          DEFAULT: "rgba(var(--destructive), 1)",
          foreground: "rgba(var(--semantic-foreground), 1)",
        },
        card: {
          DEFAULT: "rgba(var(--card), 1)",
          foreground: "rgba(var(--card-foreground), 1)",
        },
        "card-nested": {
          DEFAULT: "rgba(var(--card-nested), 1)",
          foreground: "rgba(var(--card-foreground), 1)",
        },
        popover: {
          DEFAULT: "rgba(var(--popover), 1)",
          foreground: "rgba(var(--popover-foreground), 1)",
        },

        // Semantic Colors (from Catppuccin)
        // These colors are used for specific semantic elements of the UI
        rosewater: "rgba(var(--rosewater), 1)",
        flamingo: "rgba(var(--flamingo), 1)",
        pink: "rgba(var(--pink), 1)",
        mauve: "rgba(var(--mauve), 1)",
        red: "rgba(var(--red), 1)",
        maroon: "rgba(var(--maroon), 1)",
        peach: "rgba(var(--peach), 1)",
        yellow: "rgba(var(--yellow), 1)",
        green: "rgba(var(--green), 1)",
        teal: "rgba(var(--teal), 1)",
        sky: "rgba(var(--sky), 1)",
        sapphire: "rgba(var(--sapphire), 1)",
        blue: "rgba(var(--blue), 1)",
        lavender: "rgba(var(--lavender), 1)",

        // Utility Colors (for Shadcn UI)
        // These colors are used for utility components of the UI
        crust: "rgba(var(--crust), 1)",
        mantle: "rgba(var(--mantle), 1)",
        "surface-0": "rgba(var(--surface-0), 1)",
        "surface-1": "rgba(var(--surface-1), 1)",
        "surface-2": "rgba(var(--surface-2), 1)",
        input: "rgba(var(--input), 1)",
        ring: "rgba(var(--ring), 1)",
        chart: {
          1: "rgba(var(--chart-1), 1)",
          2: "rgba(var(--chart-2), 1)",
          3: "rgba(var(--chart-3), 1)",
          4: "rgba(var(--chart-4), 1)",
          5: "rgba(var(--chart-5), 1)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionDuration: {
        DEFAULT: "500ms",
      }
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "latte",
    }),
    require("tailwindcss-animate"),
  ],
};

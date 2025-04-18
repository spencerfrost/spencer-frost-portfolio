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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "semantic-foreground": "var(--semantic-foreground)",

        // Main Colors (for Shadcn UI)
        // These colors are used for the main components of the UI
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--semantic-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--semantic-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--semantic-foreground)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--semantic-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--semantic-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        "card-nested": {
          DEFAULT: "var(--card-nested)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },

        // Semantic Colors (from Catppuccin)
        // These colors are used for specific semantic elements of the UI
        rosewater: "var(--rosewater)",
        flamingo: "var(--flamingo)",
        pink: "var(--pink)",
        mauve: "var(--mauve)",
        red: "var(--red)",
        maroon: "var(--maroon)",
        peach: "var(--peach)",
        yellow: "var(--yellow)",
        green: "var(--green)",
        teal: "var(--teal)",
        sky: "var(--sky)",
        sapphire: "var(--sapphire)",
        blue: "var(--blue)",
        lavender: "var(--lavender)",

        // Utility Colors (for Shadcn UI)
        // These colors are used for utility components of the UI
        crust: "var(--crust)",
        mantle: "var(--mantle)",
        "surface-0": "var(--surface-0)",
        "surface-1": "var(--surface-1)",
        "surface-2": "var(--surface-2)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
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

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./assets/**/*.css",
  ],
  theme: {
    extend: {
      // Any additional theme extensions can go here
    },
  },
  darkMode: "class",
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "latte",
    })
  ],
  corePlugins: {
    preflight: false,
  },
};

export default config;
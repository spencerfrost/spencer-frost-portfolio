/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(0 173 169)',
        'secondary': '#efca08',
        'background': '#2a2d34',
      },
    },
  },
  plugins: [],
}
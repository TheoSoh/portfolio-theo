/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      /** Färger inte fastställda! */
      'test': '#eefcff',
      'gray': '#DCE1E1',
      'graphite': '#333333',
      'blue': '#EFEDE9',
      'green': '#A3BCA5',
      'light-green': '#BFD9C1',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      mono: ['Roboto Mono', 'Consolas']
    },
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      gray: '#EFEDE9',
      graphite: '#333333',
      blue: '#DCE1E1',
      green: '#A3BCA5',
      'light-green': '#BFD9C1',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      mono: ['Roboto Mono', 'Consolas'],
    },
    extend: {},
  },
  plugins: [],
};

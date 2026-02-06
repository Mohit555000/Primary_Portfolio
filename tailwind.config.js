/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#0a0a0a',
        'secondary': '#f5f5f5',
        'accent': '#ff6b35',
        'accent-light': '#ffa07a',
      }
    },
  },
  plugins: [],
}

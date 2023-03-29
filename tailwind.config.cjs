/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FE4946',
        'dark': '#2D3142',
        'secondary': '#BFC0C0'
      }
    }
  },
  plugins: [],
}

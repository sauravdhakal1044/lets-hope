/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  darkMode:"class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "4xl":["4rem","4rem"],
        "edu":["3.45rem","3.45rem"]
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),require('tailwind-scrollbar'),require('tailwind-scrollbar-hide')]
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Montserrat": ["'Montserrat', sans-serif;"],
      "Volkhov": ["'Volkhov', serif;"],
    },
    extend: {
      colors: {
        "button-red": "#DB202C",
        "bg-color": "#1A1C22"
      }
    },
  },
  plugins: [require("daisyui")],
}


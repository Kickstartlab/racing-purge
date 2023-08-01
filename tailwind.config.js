/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      blue: {
        "50": "#F5F9FF",
        "100": "#4177DC",
        "200": "#222223",
      },
      black: {
        "50": "#BABEC4",
        "100": "#0A0A0B",
      },
      white: {
        "100": "#fff",
        "50": "#FFFFFF1A"
      },
      pink: {
        "100": "#FFE7DB",
        "200": "#FA7436"
      },
    },
    fontFamily: {
      'exo': ["'Exo', sans-serif;"],
    }
  },
  plugins: [],
}

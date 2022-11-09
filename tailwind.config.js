/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"Trebuchet MS"', "sans-serif"],
    },
    colors: {
      background: "#f5f4ef",
      black: "#000305",
      white: "#fff",
      primaryred: "#c74350",
    },
    extend: {},
  },
  plugins: [],
};

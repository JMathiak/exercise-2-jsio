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
      gray: "rgba(235, 235, 235)",
      highlight: "#f6cf74",
    },
    extend: {},
  },
  plugins: [],
};

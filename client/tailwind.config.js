/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#040726",
        "secondary" : "#EA7826",
        "tertiary" : "#60BEF8",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-white": "#fefae0",
        "custom-orange-light": "#f17f29",
        "custom-gray": "#dce2c8",
      }
    },
  },
  plugins: [],
}

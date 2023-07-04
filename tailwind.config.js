/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        text: '#e3e4e8',
        backgorund: '#000000',
        primary: '#635f54',
        secondary: '#0e0f11',
        accent: '#d4a216'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/App.{js,jsx,ts,tsx}", 
  "./src/components/**/*.{js,jsx,ts,tsx}",
  "./src/features/**/*.{js,jsx,ts,tsx}",
  "./src/Layouts/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {},
  },
  plugins: [],
}

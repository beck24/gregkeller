/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.antlers.html",
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(255, 192, 0)',
        secondary: 'rgb(0, 242, 222)',
      },
    },
  },
  plugins: [],
}

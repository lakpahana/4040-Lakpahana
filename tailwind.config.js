/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://wallpapercave.com/wp/wp9607754.jpg')",
        'logo': "url('./assets/logo.png')",
      }
    },
  },
  plugins: [],
}
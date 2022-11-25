const { Container } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        poppins : ['Poppins','sans-serif']
      },
      container : {
        center : true,
        padding: '1rem',
        screens: {
          'sm' : "512px",
          'md' : "720px",
          'lg' : "1024px",
          'xl' : "1140px",
          '2xl' : "1320px"
        }
      },
      backgroundImage: {
        'hero-img': "url('/src/images/bg-image.png')"
      }
    },
  },
  plugins: [],
}

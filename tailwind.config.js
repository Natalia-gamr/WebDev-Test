/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif']
    },
    colors: {
      'lime': '#9CC634',
      'dark-lime': '#A6C34F',
      'blue': '#072446',
      'dark-blue': '#0D2444',
      'white': 'white',
      'black': 'black'
    },
    borderRadius: {
      'none': '0',
      'sm': '5px',
      'md': '10px',
      'lg': '270px'
    }
  },
  plugins: [],
}

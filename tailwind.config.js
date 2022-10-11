/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {      
    },
    screens: {
      'xs': {'max':'416px'},
      ...defaultTheme.screens,
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif']
    },
    colors: {
      'lime': '#9CC634',
      'dark-lime': '#A6C34F',
      'pale-lime': '#BFD093',
      'transparent-lime': '#FEFFFB',
      'blue': '#072446',
      'dark-blue': '#0D2444',
      'white': 'white',
      'black': 'black',
      'gray': '#CCCCCC'
    },
    borderRadius: {
      'none': '0',
      'sm': '5px',
      'md': '10px',
      'lg': '270px'
    },
    fontSize: {
      'xs': ['10px', '12px'],
      'sm': ['12px', '14px'],
      'base': ['14px', '16px'],
      'lg': ['15px', '17px'],
      'xl': ['16px', '18px'],
      '2xl': ['18px', '21px'],
      '3xl': ['24px', '28px'],
      '4xl': ['48px', '55px']      
    }
  },
  plugins: [],
}

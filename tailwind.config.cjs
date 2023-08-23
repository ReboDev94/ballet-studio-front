/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fcf4f4',
          100: '#f9e7e7',
          200: '#f6d2d2',
          300: '#eeb3b3',
          400: '#e28787',
          500: '#d36060',
          600: '#bf4343',
          700: '#a03535',
          800: '#8c3232', //main
          900: '#6f2d2d',
        },
        base: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#4c4c4c', //main
          700: '#434343',
          800: '#383838',
          900: '#313131',
        },
        error: {
          50: '#fef3f2',
          100: '#fee5e2',
          200: '#fecfca',
          300: '#fcaea5',
          400: '#f87060', //main
          500: '#f05543',
          600: '#dd3825',
          700: '#ba2c1b',
          800: '#9a271a',
          900: '#80271c',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

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
          800: '#8c3232',
          900: '#6f2d2d',
        },
        base: {
          400: '#E2E2E2',
          100: '#D7D7D7',
          300: '#D4D4D4',
          200: '#BDBDBD',
          500: '#4C4C4C',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF7F7',
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
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc5c5',
          300: '#ff9d9d',
          400: '#ff6464',
          500: '#ff3333', //main
          600: '#ed1515',
          700: '#c80d0d',
          800: '#a50f0f',
          900: '#881414',
        },
        success: {
          50: '#ecfdf7',
          100: '#d1faec',
          200: '#a7f3da',
          300: '#6ee7bf',
          400: '#34d39e',
          500: '#10b981',
          600: '#059666',
          700: '#047852',
          800: '#065f42',
          900: '#064e36',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

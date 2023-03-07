/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#582020',
          800: '#8c3232',
          700: '#982649',
        },
        secondary: {
          900: '#F2E2DF',
        },
        accent: {
          900: '#0E7C7B',
        },
        success: {
          900: '#aebe97',
          800: '#c4d5aa',
          700: '#DAEDBD',
        },
        warning: {
          900: '#c2b663',
          800: '#dbcc70',
          700: '#f3e37c',
        },
        base: '#F2F2F2',
        default: '#582020',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};

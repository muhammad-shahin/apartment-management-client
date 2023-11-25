/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: {
        50: '#f8f6ee',
        100: '#ede8d4',
        200: '#ddd0ab',
        300: '#cab27a',
        400: '#b99755',
        500: '#aa8448',
        600: '#926a3c',
        700: '#755133',
        800: '#634430',
        900: '#563a2d',
        950: '#311e17',
      },
    },
    extend: {},
  },
  plugins: [],
};

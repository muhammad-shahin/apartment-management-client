/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xsm: '318px',
      // => @media (min-width: 318px) { ... }
      sm: '425px',
      // => @media (min-width: 425px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
      black: { 50: '#000' },
      white: { 50: '#ffffff' },
      transparent: { 50: 'transparent' },
    },
    extend: {
      fontFamily: {
        QuickSand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

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
      green: {
        50: '#f0fdf5',
        100: '#dcfce8',
        200: '#bbf7d1',
        300: '#86efad',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803c',
        800: '#166533',
        900: '#14532b',
        950: '#052e14',
      },
      red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
        950: '#450a0a',
      },
      gray: {
        50: '#f7f8f8',
        100: '#edeef1',
        200: '#d8dbdf',
        300: '#b6bac3',
        400: '#8e95a2',
        500: '#6b7280',
        600: '#5b616e',
        700: '#4a4e5a',
        800: '#40444c',
        900: '#383a42',
        950: '#25272c',
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

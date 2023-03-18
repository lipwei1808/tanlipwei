/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        2: '.5rem',
      },
      colors: {
        terminal: {
          light: 'rgb(223, 239, 136)',
          base: 'rgb(183, 199, 96)',
          dark: 'rgb(143, 159, 56)',
        },
        'iterm-green': {
          100: '#c8d6e5',
          200: '#a7b9c9',
          300: '#859bb0',
          400: '#073642',
          500: '#002b36',
          600: '#002129',
          700: '#001c22',
          800: '#00171c',
          900: '#001215',
        },
      },
    },
  },
  plugins: [],
};

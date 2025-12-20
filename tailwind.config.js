/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0a0a0b',
        gold: {
          DEFAULT: '#c5a059',
          light: '#e2c99d',
          dark: '#a37f3d',
        },
        champagne: '#f7f3eb',
      },
    },
  },
  plugins: [],
};

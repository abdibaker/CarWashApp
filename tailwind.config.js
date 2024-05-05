/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  important: true,

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};

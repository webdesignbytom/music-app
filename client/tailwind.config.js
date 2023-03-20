/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        reg: 'auto 1fr',
      },
      gridTemplateColumns: {
        'reg': 'auto 1fr',
      }
    },
  },
  plugins: [],
};

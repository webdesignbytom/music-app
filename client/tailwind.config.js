/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        reg: 'auto 1fr',
        rev: '1fr 0.4fr',
      },
      gridTemplateColumns: {
        'reg': 'auto 1fr',
      }
    },
  },
  plugins: [],
};

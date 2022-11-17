/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#83D1A6',
          200: '#86DCCA',
          DEFAULT: '#65BC67',
        },
      },
    },
  },
  plugins: [],
}

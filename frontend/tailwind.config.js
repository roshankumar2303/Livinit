/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Playfair Display', 'serif']
    },
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#2862ee',
          0: '#ebf5ff',
          50: '#d2e7ff',
          100: '#b9d8fe',
          200: '#8ab7fc',
          300: '#6197fa',
          400: '#407af5',
          500: '#2862ee',
          600: '#164ddf',
          700: '#0937ba',
          800: '#021f72',
          900: '#000d33'
        },
        'warning': '#FEB139',
        'success': '#14C38E',
        'error': '#e02b2b'
      }
    },
  },
  plugins: [],
}

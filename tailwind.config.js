
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        sage: {
          100: '#E8F0EA',
          200: '#C8DCC9',
          400: '#7C9A82',
        },
        navy: {
          400: '#2D4066',
          500: '#1B2A4A',
        },
        cream: {
          100: '#FAF8F5',
          200: '#F5F2ED',
        },
        warm: {
          400: '#D4A574',
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
}

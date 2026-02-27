
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
          100: '#FFE8F5',
          200: '#FFC8E8',
          400: '#FF50AA',
        },
        navy: {
          400: '#4560E0',
          500: '#3246C8',
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

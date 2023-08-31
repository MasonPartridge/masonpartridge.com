/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik Iso', 'cursive'],
        tech: ['Share Tech Mono', 'monospace'],
        handjet: ['Handjet', 'cursive'],
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IRANSansXFaNum'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

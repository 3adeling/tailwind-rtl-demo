module.exports = {
  theme: {
    extend: {}
  },
  variants: {
    float: ['responsive', 'direction'],
    margin: ['responsive', 'direction'],
    padding: ['responsive', 'direction'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-dir')(),
  ]
}

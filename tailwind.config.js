/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
      extend: {
          fontFamily: {
              header: ['Rubik', 'sans-serif']
          }
      },

      rotate: {
          '45': '45deg',
          '-45': '-45deg'
      }
  },
  variants: {},
  plugins: [
      require('tailwindcss-transforms')({
          // options
      })
  ]
}

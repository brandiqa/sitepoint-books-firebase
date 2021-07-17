const forms = require('windicss/plugin/forms')
const { transform } = require('windicss/helpers')

module.exports = {
  plugins: [forms, transform('daisyui')],
  purge: {
    content: ['*.html'],
    options: {
      safelist: [/data-theme$/],
    },
  },
}

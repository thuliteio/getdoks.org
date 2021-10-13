const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h5',
        'aria-selected',
        ...whitelister([
          './assets/scss/components/_carbonads.scss',
          './assets/scss/components/_buttons.scss',
          './assets/scss/components/_code.scss',
          './assets/scss/components/_syntax.scss',
          './node_modules/@docsearch/css/dist/style.css',
          './assets/scss/components/_search.scss',
          // './assets/scss/common/_ads.scss',
          './assets/scss/common/_dark.scss',
        ]),
      ],
    }),
  ],
}

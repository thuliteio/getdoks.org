const autoprefixer = require('autoprefixer');
const { purgeCSSPlugin } = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
    plugins: [
        autoprefixer(),
        purgeCSSPlugin({
            content: ['./hugo_stats.json'],
            extractors: [
                {
                    extractor: (content) => {
                        const els = JSON.parse(content).htmlElements;
                        return els.tags.concat(els.classes, els.ids);
                    },
                    extensions: ['json']
                }
            ],
            dynamicAttributes: [
                'aria-expanded',
                'aria-selected',
                'data-bs-popper',
                'data-bs-target',
                'data-bs-theme',
                'data-dark-mode',
                'data-global-alert',
                'data-pane', // tabs.js
                'data-popper-placement',
                'data-sizes',
                'data-toggle-tab', // tabs.js
                'id',
                'size',
                'type',
                'data-ea-type',
                'data-ea-publisher'
            ],
            safelist: [
                'active',
                'btn-clipboard', // clipboards.js
                'clipboard', // clipboards.js
                'disabled',
                'hidden',
                'modal-backdrop', // search-modal.js
                'selected', // search-modal.js
                'show',
                'img-fluid',
                'blur-up',
                'lazyloaded',
                'alert-link',
                'container-fw ',
                'container-lg',
                'container-fluid',
                'offcanvas-backdrop',
                'img-fluid',
                'lazyload',
                'blur-up',
                'figcaption',
                'dt',
                'dd',
                'showing',
                'hiding',
                'page-item',
                'page-link',
                'ms-auto',
                ...whitelister(['./assets/scss/**/*.scss', './node_modules/@docsearch/css/dist/modal.css', './node_modules/@thulite/doks-core/assets/scss/components/_code.scss', './node_modules/@thulite/doks-core/assets/scss/components/_expressive-code.scss', './node_modules/@thulite/doks-core/assets/scss/common/_syntax.scss'])
            ]
        })
    ]
};

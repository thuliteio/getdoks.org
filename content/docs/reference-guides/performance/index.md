---
title: "Performance"
description: "Get 100 scores on Google Lighthouse by default. Hyas removes unused css, prefetches links, and lazy loads images."
lead: "Get 100 scores on Google Lighthouse by default. Hyas removes unused css, prefetches links, and lazy loads images."
date: 2020-09-17T15:37:44+02:00
lastmod: 2020-09-17T15:37:44+02:00
draft: false
images: ["google-lighthouse-scan-results-doks.gif"]
menu:
  docs:
    parent: "reference-guides"
weight: 320
toc: true
---

{{< img-simple src="google-lighthouse-scan-results-doks.gif" alt="Google Lighthouse Scan Results Doks">}}

See also Google Lighthouse: [Scan Results for doks.netlify.app](https://googlechrome.github.io/lighthouse/viewer/?gist=92eaa982d7dbf92f94fe8ecc03987c9a)

## Unused CSS removal

`./config/postcss.config.js`:

```js
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
        ...whitelister([
          './assets/scss/components/_doks.scss',
          './assets/scss/components/_code.scss',
          './assets/scss/components/_search.scss',
          './assets/scss/common/_dark.scss',
          './node_modules/katex/dist/katex.css',
        ]),
      ],
    }),
  ],
}
```

See also the PurgeCSS docs: [Configuration](https://purgecss.com/configuration.html), and the Purgecss Whitelister [Readme](https://github.com/qodesmith/purgecss-whitelister#readme).

## Asset minification

Hyas uses [Hugo](https://gohugo.io/hugo-pipes/minification/) to minify CSS, JS and HTML.

## Link prefetching

Hyas uses [instant.page](https://instant.page/) with default settings for link prefetching. By default, instant.page preloads 65 ms after hovering a link and when a mobile user starts touching their display.

See also the instant.page website: [Intensity](https://instant.page/intensity).

## Lazy loading images

Hyas uses [lazysizes](https://github.com/aFarkas/lazysizes) with a Low Quality Image Placeholder (LQIP) to lazyload images added with the [image shortcode]({{< relref "layouts" >}}). The LQIP is blurred with a CSS filter.

See also the lazysizes [Readme](https://github.com/aFarkas/lazysizes#readme)

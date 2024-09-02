---
title: "Upgrade to v1.2"
description: ""
summary: ""
date: 2023-12-23T20:02:32+01:00
lastmod: 2023-12-23T20:02:32+01:00
draft: true
weight: 100
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

This guide will help you migrate from Doks v1.1 to Doks v1.2.

## Upgrade Doks

You can upgrade to Doks 1.2 by running the folowing command:

{{< tabs "update-doks" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/doks-core@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade @thulite/doks-core --latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade @thulite/doks-core --latest
```

{{< /tab >}}
{{< /tabs >}}

## Update PostCSS settings

Add the highlighted lines to `config/postcss.config.js`:

{{< details "PostCSS" >}}

```js {title=postcss.config.js lineNos=true hl_lines=[46,"51-53"]}
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");
const whitelister = require("purgecss-whitelister");

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: ["./hugo_stats.json"],
      extractors: [
        {
          extractor: (content) => {
            const els = JSON.parse(content).htmlElements;
            return els.tags.concat(els.classes, els.ids);
          },
          extensions: ["json"]
        }
      ],
      dynamicAttributes: [
        "aria-expanded",
        "data-bs-popper",
        "data-bs-target",
        "data-bs-theme",
        "data-dark-mode",
        "data-global-alert",
        "data-pane", // tabs.js
        "data-popper-placement",
        "data-sizes",
        "data-toggle-tab", // tabs.js
        "id",
        "size",
        "type"
      ],
      safelist: [
        "active",
        "btn-clipboard", // clipboards.js
        "clipboard", // clipboards.js
        "disabled",
        "hidden",
        "modal-backdrop", // search-modal.js
        "selected", // search-modal.js
        "show",
        "img-fluid",
        "blur-up",
        "lazyloaded",
        "container-fw ",
        ...whitelister([
          "./assets/scss/**/*.css",
          "./assets/scss/**/*.scss",
          // './node_modules/katex/dist/katex.css',
          "./node_modules/@thulite/doks-core/assets/scss/components/_code.scss",
          "./node_modules/@thulite/doks-core/assets/scss/components/_expressive-code.scss",
          "./node_modules/@thulite/doks-core/assets/scss/common/_syntax.scss"
        ])
      ]
    })
  ]
};
```

{{< /details >}}

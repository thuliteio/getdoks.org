---
title: "DocSearch"
description: ""
summary: ""
date: 2023-11-20T14:41:29+01:00
lastmod: 2023-11-20T14:41:29+01:00
draft: false
weight: 640
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Doks comes with FlexSearch preconfigured out of the box. If you want to use [DocSearch](https://docsearch.algolia.com/) in stead, this guide will explain how.

## Set up DocSearch

To follow this guide, you'll need an existing [Doks](https://getdoks.org/) site and a [DocSearch](https://docsearch.algolia.com/) project.

{{< callout context="note" icon="outline/info-circle" >}}

If a file does not exist in your projects' root, copy the file over from `node_modules/@thulite/doks-core/`. Make sure to use the same directory structure in your root.

{{< /callout >}}

### Add parameters

Add the following parameters to `config/_default/params.toml`:

```toml
# Add-ons
[add_ons]
  docSearch = true # false (default) or true

# Doks (@thulite/doks-core)
[doks]
  # FlexSearch
  flexSearch = false # true (default) or false
```

### Install dependencies

DocSearch provides a UI component, bundled as JavaScript and CSS packages. You'll need both of these packages to display the widget:

{{< tabs "install-docsearch" >}}
{{< tab "npm" >}}

```bash
npm install @docsearch/js @docsearch/css
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install @docsearch/js @docsearch/css
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @docsearch/js @docsearch/css
```

{{< /tab >}}
{{< /tabs >}}

This will install the required dependencies.

### Add buttons

Add to `layouts/partials/header/header.html` buttons for mobile and desktop to trigger the DocSearch modal.

#### Button mobile

Add (around line 38) after `<!-- FlexSearch mobile -->`:

{{< details "Button mobile" >}}

```html
<!-- DocSearch mobile -->
{{ if site.Params.add_ons.docSearch -}}
<div id="docsearch" class="d-none" tabindex="-1" aria-disabled="true"></div>
<button type="button" id="searchToggleMobile" class="btn btn-link nav-link mx-2 d-lg-none" aria-label="Search website">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <circle cx="10" cy="10" r="7"></circle>
    <line x1="21" y1="21" x2="15" y2="15"></line>
  </svg>
</button>
{{ end -}}
```

{{< /details >}}

#### Button desktop

Add (around line 170) after `<!-- FlexSearch desktop -->`:

{{< details "Button desktop" >}}

```html
<!-- DocSearch desktop -->
{{ if site.Params.add_ons.docSearch -}}
<button type="button" id="searchToggleDesktop" class="btn btn-link nav-link mx-2 d-none d-lg-block" aria-label="Search website">
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <circle cx="10" cy="10" r="7"></circle>
    <line x1="21" y1="21" x2="15" y2="15"></line>
  </svg>
</button>
{{ end -}}
```

{{< /details >}}

### Add script

#### Create script

Add the following to `assets/js/docsearch.js` and update with your `appId`, `indexName`, and `apiKey`:

```js
import docsearch from "@docsearch/js";

docsearch({
  container: "#docsearch",
  appId: "YOUR_APP_ID",
  indexName: "YOUR_INDEX_NAME",
  apiKey: "YOUR_SEARCH_API_KEY",
  insights: true
});

const onClick = function () {
  document.getElementsByClassName("DocSearch-Button")[0].click();
};

document.getElementById("searchToggleMobile").onclick = onClick;
document.getElementById("searchToggleDesktop").onclick = onClick;
```

#### Load script

Add to `layouts/partials/footer/script-footer-custom.html`:

```html
{{ if site.Params.add_ons.docSearch -}} {{ partial "footer/esbuild" (dict "src" "js/docsearch.js" "load" "async" "transpile" false) -}} {{ end -}}
```

### Add styles

#### Create variables

Add to `assets/scss/common/_variables-docsearch.scss` and (optionally) override:

{{< details "Variables DocSearch" >}}

```scss
/* DocSearch Variables */

:root {
  --docsearch-primary-color: rgb(84, 104, 255);
  --docsearch-text-color: rgb(28, 30, 33);
  --docsearch-spacing: 12px;
  --docsearch-icon-stroke-width: 1.4;
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-muted-color: rgb(150, 159, 175);
  --docsearch-container-background: rgba(101, 108, 133, 0.8);
  --docsearch-logo-color: rgba(84, 104, 255);

  /* modal */
  --docsearch-modal-width: 560px;
  --docsearch-modal-height: 600px;
  --docsearch-modal-background: rgb(245, 246, 247);
  --docsearch-modal-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.5), 0 3px 8px 0 rgba(85, 90, 100, 1);

  /* searchbox */
  --docsearch-searchbox-height: 56px;
  --docsearch-searchbox-background: rgb(235, 237, 240);
  --docsearch-searchbox-focus-background: #fff;
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);

  /* hit */
  --docsearch-hit-height: 56px;
  --docsearch-hit-color: rgb(68, 73, 80);
  --docsearch-hit-active-color: #fff;
  --docsearch-hit-background: #fff;
  --docsearch-hit-shadow: 0 1px 3px 0 rgb(212, 217, 225);

  /* key */
  --docsearch-key-gradient: linear-gradient(-225deg, rgb(213, 219, 228) 0%, rgb(248, 248, 248) 100%);
  --docsearch-key-shadow: inset 0 -2px 0 0 rgb(205, 205, 230), inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, 0.4);
  --docsearch-key-pressed-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 1px 0 rgba(30, 35, 90, 0.4);
  /* footer */
  --docsearch-footer-height: 44px;
  --docsearch-footer-background: #fff;
  --docsearch-footer-shadow: 0 -1px 0 0 rgb(224, 227, 232), 0 -3px 6px 0 rgba(69, 98, 155, 0.12);
}

/* Darkmode */

html[data-bs-theme="dark"] {
  --docsearch-text-color: rgb(245, 246, 247);
  --docsearch-container-background: rgba(9, 10, 17, 0.8);
  --docsearch-modal-background: rgb(21, 23, 42);
  --docsearch-modal-shadow: inset 1px 1px 0 0 rgb(44, 46, 64), 0 3px 8px 0 rgb(0, 3, 9);
  --docsearch-searchbox-background: rgb(9, 10, 17);
  --docsearch-searchbox-focus-background: #000;
  --docsearch-hit-color: rgb(190, 195, 201);
  --docsearch-hit-shadow: none;
  --docsearch-hit-background: rgb(9, 10, 17);
  --docsearch-key-gradient: linear-gradient(-26.5deg, rgb(86, 88, 114) 0%, rgb(49, 53, 91) 100%);
  --docsearch-key-shadow: inset 0 -2px 0 0 rgb(40, 45, 85), inset 0 0 1px 1px rgb(81, 87, 125), 0 2px 2px 0 rgba(3, 4, 9, 0.3);
  --docsearch-key-pressed-shadow: inset 0 -2px 0 0 #282d55, inset 0 0 1px 1px #51577d, 0 1px 1px 0 #0304094d;
  --docsearch-footer-background: rgb(30, 33, 54);
  --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5), 0 -4px 8px 0 rgba(0, 0, 0, 0.2);
  --docsearch-logo-color: rgb(255, 255, 255);
  --docsearch-muted-color: rgb(127, 132, 151);
}
```

{{< /details >}}

#### Update styles

Add to `assets/scss/common/_custom.scss`:

{{< details "Custom styles" >}}

```scss
// DocSearch

.DocSearch-Container {
  z-index: 2000 !important;
}

.DocSearch-Hit-icon {
  display: flex;
  align-items: center;
}

.DocSearch-Hits mark {
  padding: 0;
}

@media (max-width: 768px) {
  .DocSearch-Modal {
    position: fixed !important;
  }
}
```

{{< /details >}}

#### Load styles

Add (around line 98) to `assets/scss/app.scss` after `// 9. Custom styles`:

```scss
// 10. DocSearch
@import "common/variables-docsearch";
@import "@docsearch/css/dist/modal";
```

### Update PurgeCSS

In `config/postcss.config.js` update `dynamicAttributes` and `...whitelister`:

```js
module.exports = {
  plugins: [
    purgecss({
      dynamicAttributes: ["aria-selected"],
      safelist: [...whitelister(["./node_modules/@docsearch/css/dist/modal.css"])]
    })
  ]
};
```

## Next steps

- [Performance optimization](https://docsearch.algolia.com/docs/docsearch-v3/#performance-optimization)
- [Content security policy](https://www.algolia.com/doc/guides/security/security-best-practices/#content-security-policy)
- [`translations`](https://docsearch.algolia.com/docs/api/#translations)

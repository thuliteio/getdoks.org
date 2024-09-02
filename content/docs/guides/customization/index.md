---
title: "Customizing Doks"
description: ""
summary: ""
date: 2023-11-13T16:51:11+01:00
lastmod: 2023-11-13T16:51:11+01:00
draft: false
weight: 710
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
slug: "customization"
---

## Custom fonts

By default, Doks uses the [Jost](https://indestructibletype.com/Jost.html) font created by indestructible type\* for all text.

If you want to add a custom font to your Doks site, you can set up fonts to use in custom CSS files.

### System fonts

Using system fonts ensures documentation loads quickly in a font that is familiar to each user, without requiring extra bandwidth to download large font files.

If you'd like to use system fonts, add to `assets/scss/common/_variables-custom.scss`:

```scss {title="_variables-custom.scss"}
// $font-family-sans-serif:      "Jost", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
$font-family-sans-serif:
  system-ui,
  -apple-system,
  "Segoe UI",
  Roboto,
  "Helvetica Neue",
  "Noto Sans",
  "Liberation Sans",
  Arial,
  sans-serif,
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "Noto Color Emoji";
```

### Google Fonts

If you'd like to use [Google Fonts](https://fonts.google.com/), the recommended way (for performance reasons) is to self-host the fonts with the help of a tool like for example [google-webfonts-helper](https://gwfh.mranftl.com/fonts) or [Fontsource](https://fontsource.org/).

If you'd like to use the "Montserrat" font for example:

1. Visit [google-webfonts-helper](https://gwfh.mranftl.com/fonts), select "Monserrat", charset "latin", styles "regular" and "500".

2. Copy CSS for modern browsers (use folder prefix `/fonts/montserrat/`) and paste in `assets/scss/common/custom.scss`:

   ```scss {title="custom.scss"}
   // Put your custom SCSS code here

   /* montserrat-regular - latin */
   @font-face {
     font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
     font-family: "Montserrat";
     font-style: normal;
     font-weight: 400;
     src: url("/fonts/montserrat/montserrat-v26-latin-regular.woff2") format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
   }
   /* montserrat-500 - latin */
   @font-face {
     font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
     font-family: "Montserrat";
     font-style: normal;
     font-weight: 500;
     src: url("/fonts/montserrat/montserrat-v26-latin-500.woff2") format("woff2"); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
   }
   ```

3. Download files, extract, and paste fonts in `/static/fonts/montserrat/`.

4. Add to `assets/scss/common/_variables-custom.scss`:

   ```scss {title="_variables-custom.scss"}
   // $font-family-sans-serif:      "Jost", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   $font-family-sans-serif:
     "Montserrat",
     system-ui,
     -apple-system,
     "Segoe UI",
     Roboto,
     "Helvetica Neue",
     "Noto Sans",
     "Liberation Sans",
     Arial,
     sans-serif,
     "Apple Color Emoji",
     "Segoe UI Emoji",
     "Segoe UI Symbol",
     "Noto Color Emoji";
   ```

5. Avoid [Cumulative Layout Shift](https://web.dev/articles/cls) by preloading the fonts: copy `node_modules/@thulite/doks-core/layouts/partials/head/resource-hints.html` to `layouts/partials/head/resource-hints.html` and add — for example:

   ```html {title="resource-hints.html"}
   <link rel="preload" href="{{ "fonts/montserrat/montserrat-v26-latin-regular.woff2" | absURL }}" as="font" type="font/woff2" crossorigin>
   <link rel="preload" href="{{ "fonts/montserrat/montserrat-v26-latin-500.woff2" | absURL }}" as="font" type="font/woff2" crossorigin>
   ```

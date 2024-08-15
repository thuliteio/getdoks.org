---
title: "Styles"
description: ""
summary: ""
date: 2023-11-15T09:03:55+01:00
lastmod: 2023-11-15T09:03:55+01:00
draft: false
weight: 720
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
slug: "styles"
---

You can style your Doks site with custom CSS files or use the Thulite Bootstrap plugin.

## Custom CSS

Customize the styles applied to your Doks site by providing additional CSS files to modify or extend Doks' default styles.

### Custom variables

Add custom CSS or SCSS variables to `assets/scss/common/_variables-custom.scss`. For example, you could set a text size variable:

```scss
:root {
  --doks-text-lg: 1.5rem;
}
```

### Custom styles

Add custom SCSS or CSS to `assets/scss/common/_custom.scss`. For example, you could add a larger text size for page titles:

```scss
h1 {
  font-size: calc(var(--doks-text-lg) + 1.5vw);
}
```

## Bootstrap

## Color theme

Doks' color theme can be controlled by overriding its default custom properties. These variables are used throughout the UI with a range of gray shades used for text and background colors and an accent color used for links and to highlight current items in navigation.

In `assets/scss/common/_variables-custom.scss` — for example:

```scss {title="_variables-custom.scss"}
// Put your custom SCSS variables here

// Light mode
$primary: blue;

// Dark mode
$link-color-dark: aquamarine;
$button-color-dark: aquamarine;

:root,
::backdrop {
  --sl-color-accent-high: aquamarine;
}
```

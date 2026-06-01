---
title: "Styles"
description: "Customize Thulite styling with SCSS variables and custom stylesheets, then rely on the build pipeline for compiled and optimized CSS output."
summary: "Customize Thulite styling with SCSS variables and custom stylesheets, then rely on the build pipeline for compiled and optimized CSS output."
date: 2026-05-15T16:27:22+02:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 235
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Thulite uses SCSS for styling and includes sensible defaults out of the box.

## Stylesheet organization

Stylesheets live in `assets/scss/`:

- `app.scss` is the main entry point that imports framework and custom styles
- `common/_variables-custom.scss` is where you override default variables
- `common/_custom.scss` is where you add your own custom CSS

The build process compiles SCSS to CSS and bundles it with your site.

PostCSS (configured in `config/postcss.config.js`) adds vendor prefixes automatically and removes unused CSS to optimize the final bundle.

## Customize variables

Edit `assets/scss/common/_variables-custom.scss` to change colors, fonts, sizing, and other global values:

```scss
// Example: change the base font size
$font-size-base: 1.125rem;

// Example: change heading font weight
$headings-font-weight: 400;
```

Variables are inherited from the framework and applied globally.

## Add custom styles

Add new CSS to `assets/scss/common/_custom.scss`:

```scss
// Custom styles for your site
.my-component {
  background: var(--bs-primary);
  padding: 1rem;
}
```

Keep custom styles scoped to specific components or sections.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/sass.svg" title="SCSS documentation" description="Learn the SCSS language features." href="https://sass-lang.com/documentation/" target="_blank" class="w-50" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

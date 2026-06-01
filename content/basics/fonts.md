---
title: "Fonts"
description: "Self-host fonts in Thulite with Fontsource, Hugo mounts, and SCSS variables to improve privacy, consistency, and performance across your site."
summary: "Self-host fonts in Thulite with Fontsource, Hugo mounts, and SCSS variables to improve privacy, consistency, and performance across your site."
date: 2026-05-15T16:27:22+02:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 250
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Thulite recommends hosting fonts in your project with [Fontsource](https://fontsource.org).

This keeps font delivery local, predictable, and privacy-friendly.

## Recommended setup (Fontsource)

{{< steps >}}
{{< step >}}
Add a Fontsource package:

{{< tabs "install-fontsource-package" >}}
{{< tab "npm" >}}

```bash
npm install @fontsource-variable/geist
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm add @fontsource-variable/geist
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @fontsource-variable/geist
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun add @fontsource-variable/geist
```

{{< /tab >}}
{{< /tabs >}}

{{< /step >}}
{{< step >}}

Mount the package to `static/fonts` in `config/_default/module.toml`:

```toml {title="module.toml"}
[[mounts]]
  source = "node_modules/@fontsource-variable/geist"
  target = "static/fonts/geist"
```

{{< /step >}}
{{< step >}}
Define `@font-face` in `assets/scss/common/_fonts.scss`:

```scss {title="_fonts.scss"}
@font-face {
  font-family: "Geist Variable";
  font-style: normal;
  font-display: swap;
  font-weight: 100 900;
  src: url(fonts/geist/files/geist-latin-wght-normal.woff2) format("woff2-variations");
}
```

{{< /step >}}
{{< step >}}
Apply it in `assets/scss/common/_variables-custom.scss`:

```scss {title="_variables-custom.scss"}
$font-family-sans-serif:
  "Geist Variable",
  system-ui,
  -apple-system,
  "Segoe UI",
  Roboto,
  "Helvetica Neue",
  Arial,
  sans-serif;
```

{{< /step >}}
{{< /steps >}}

This project already follows this pattern with Geist and Geist Mono.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/fontsource.svg" title="Fontsource" description="Install and self-host open source fonts." href="https://fontsource.org/" target="_blank" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Hugo Module Mounts" description="Map files from node_modules into your Hugo project." href="https://gohugo.io/configuration/module/#mounts" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

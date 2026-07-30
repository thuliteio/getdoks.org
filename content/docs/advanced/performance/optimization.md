---
title: "Optimization"
description: "Optimize Thulite output with production builds, lean CSS/JS, deferred non-critical work, and verification practices for better Core Web Vitals."
summary: "Optimize Thulite output with production builds, lean CSS/JS, deferred non-critical work, and verification practices for better Core Web Vitals."
date: 2026-05-18T08:11:22+02:00
lastmod: 2026-05-28T11:21:22+02:00
draft: false
weight: 313
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Optimization in Thulite is mostly about shipping less code and doing less work on first load.

## Build for production

Use a production build with garbage collection and minification (`hugo build --gc --minify`):

{{< tabs "build-command" >}}
{{< tab "npm" >}}

```bash
npm run build
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run build
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn build
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run build
```

{{< /tab >}}
{{< /tabs >}}

This removes unused build artifacts and compresses generated output.

## Keep CSS lean

Thulite uses PostCSS and can remove unused selectors in production (via `hugo_stats.json` + PurgeCSS). Keep your safelist current for dynamic classes.

## Ship optimized assets

Thulite Core compiles and fingerprints CSS/JS bundles. This gives:

- Smaller assets in production
- Stable integrity hashes
- Efficient browser caching with automatic cache busting on content change

## Defer non-critical work

Thulite Core supports async script loading, link prefetching using [Quicklink](https://getquick.link/), and native image lazy loading. These reduce main-thread and network pressure during initial render.

## Verify with real checks

After each change, run a production build and validate:

- Lighthouse / PageSpeed scores
- JavaScript and CSS payload size
- No regressions in Core Web Vitals

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="hugo build" description="Command reference for production builds with minification and cleanup flags." href="https://gohugo.io/commands/hugo_build/" target="_blank" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="resources.Minify" description="Minify CSS, JavaScript, JSON, HTML, and SVG resources in Hugo pipelines." href="https://gohugo.io/functions/resources/minify/" target="_blank" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/purgecss.svg" title="PurgeCSS" description="Remove unused CSS selectors from production bundles." href="https://purgecss.com" target="_blank" class="w-50" >}}
{{< link-card src="svgs/quicklink.svg" title="Quicklink" description="Prefetch in-viewport links during idle time to speed up navigation." href="https://getquick.link" target="_blank" class="w-50" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

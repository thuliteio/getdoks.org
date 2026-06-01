---
title: "Verification"
description: "Verify your Thulite build by checking generated HTML, assets, metadata, and runtime behavior before deployment with browser and audit tools."
summary: "Verify your Thulite build by checking generated HTML, assets, metadata, and runtime behavior before deployment with browser and audit tools."
date: 2026-04-27T12:46:43+02:00
lastmod: 2026-05-28T11:16:22+02:00
draft: false
weight: 125
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This page helps you verify that Thulite is generating the expected pages, assets, and metadata.

## Build your site

Create a production build before inspecting the generated output.

{{< tabs "verification-build-command" >}}
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

Check for:

- A successful build with no unresolved content, template, or asset errors
- Generated output in `public/`
- Bundled CSS and JavaScript assets
- Generated `robots.txt`, `sitemap.xml`, and other expected top-level output files

If the build fails, continue to [Troubleshooting](/start-here/troubleshooting/).

## Inspect generated HTML

Open page source in your browser or inspect files in `public/` to confirm the generated HTML matches your expectations.

Check for:

- A valid page `<title>` and meta description
- Expected headings, navigation, and page content
- Canonical, Open Graph, and Twitter metadata when you use the SEO integration
- Correct stylesheet and script references
- Expected language, robots, and structured-data output for your configuration

If you use Thulite Images or Inline SVG, also confirm that generated image and SVG markup appears correctly where expected.

## Inspect generated site output

Review the build output in `public/` and confirm that important files and sections are present.

Check for:

- `index.html` files for the pages and sections you expect to publish
- `sitemap.xml` and section sitemap files where configured
- `search-index.json` when your site uses search
- `manifest.webmanifest`, `robots.txt`, icons, fonts, and other static assets
- Fingerprinted CSS and JavaScript files for cache-friendly production builds

Also verify that pages, static files, and section outputs use the expected URLs for your current `baseurl` and environment configuration.

## Validate in the browser

Preview the built site locally and verify behavior in real conditions.

{{< tabs "verification-preview-command" >}}
{{< tab "npm" >}}

```bash
npm run preview
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run preview
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn preview
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run preview
```

{{< /tab >}}
{{< /tabs >}}

Check for:

- No broken internal links or missing pages
- No 404 responses for stylesheets, scripts, images, fonts, or icons
- Correct navigation, menus, and sidebar behavior
- Responsive layout behavior on desktop and mobile widths
- No unexpected console errors or visible rendering issues

If your project includes optional integrations, validate those behaviors as well using the dedicated guides for [Thulite SEO](https://seo.thulite.io/docs/start-here/verification/), [Thulite Images](https://images.thulite.io/docs/start-here/verification/), and [Thulite SVG](https://svg.thulite.io/docs/start-here/verification/).

## Use tools

Use browser and auditing tools to validate output quality before deployment.

For example:

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
- [Nu Html Checker](https://validator.w3.org/nu/)

If anything looks incorrect, continue to [Troubleshooting](/start-here/troubleshooting/).

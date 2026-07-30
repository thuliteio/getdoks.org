---
title: "Layouts"
description: "Understand Thulite layout files, partial structure, and Hugo template lookup so you can customize how home, list, and single pages are rendered."
summary: "Understand Thulite layout files, partial structure, and Hugo template lookup so you can customize how home, list, and single pages are rendered."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 225
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Layouts are templates in `layouts/` that control how your content is rendered.

In Thulite, content comes from `content/` and layout logic comes from `layouts/`.

## Core layout files

This project uses three main layout entry points:

- `layouts/home.html` for the home page
- `layouts/list.html` for section and list pages
- `layouts/single.html` for regular content pages

Shared template pieces live in `layouts/_partials/`.

## Examples

`single.html` defines the main docs page structure and renders page content:

```html {title="layouts/single.html"}
{{ define "main" }}
<div class="page-header d-flex flex-row justify-content-between align-items-start">
  <div>
    <h1>{{ .Title }}</h1>
  </div>
</div>
{{ .Content }} {{ end }}
```

## How layout selection works

Hugo picks the most specific matching template for each page type.

In practice:

- Home page content uses `home.html`
- Section pages use `list.html`
- Regular pages use `single.html`

Start by editing these files, then extract repeated UI into partials.

## Learn more

Thulite leverages Hugo's [templates](https://gohugo.io/templates/). Here are some relevant topics:
{.mb-4}

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Introduction to templating" description="Understand Hugo template fundamentals." href="https://gohugo.io/templates/introduction/" target="_blank" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Template lookup order" description="See how Hugo selects a template for each page." href="https://gohugo.io/templates/lookup-order/" target="_blank" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Template types" description="Reference for home, list, single, and more." href="https://gohugo.io/templates/types/" target="_blank" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Partials" description="Build reusable template fragments." href="https://gohugo.io/templates/types/#partial" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

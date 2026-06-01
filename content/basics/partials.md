---
title: "Partials"
description: "Build reusable partial templates in Thulite layouts to share rendering logic, reduce duplication, and keep template code maintainable."
summary: "Build reusable partial templates in Thulite layouts to share rendering logic, reduce duplication, and keep template code maintainable."
date: 2026-05-15T16:27:22+02:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 230
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

<!-- markdownlint-disable MD012 -->

Partials are reusable template fragments you include from layouts.

In this project, partials live in `layouts/_partials/` (for example `header/`, `head/`, `main/`, and `sidebar/`).

## Use a partial

Call a partial from a layout and pass the current page context:

```go-html-template
{{ partial "sidebar/section-menu.html" . }}
```

You can also pass a custom dictionary when a partial needs specific values:

```go-html-template
{{ partial "inline-svg" (dict "src" "file-text" "class" "text-muted") }}
```

## Create a partial

Add a file to `layouts/_partials/`, then include it from `home.html`, `list.html`, `single.html`, or another partial.

Use partials for repeated UI blocks and shared rendering logic. Keep them small and focused.

<!-- markdownlint-disable MD034 -->

## Learn more

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Partials" description="Build reusable template fragments." href="https://gohugo.io/templates/types/#partial" target="_blank" class="w-50" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Partial caching" description="Use partialCached for expensive partials." href="https://gohugo.io/functions/partials/includecached/" target="_blank" class="w-50" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->
<!-- markdownlint-enable MD012 -->

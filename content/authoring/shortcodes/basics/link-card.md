---
title: "Link Card"
description: ""
summary: ""
date: 2025-08-15T19:26:35+02:00
lastmod: 2025-08-15T19:26:35+02:00
draft: false
weight: 320
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

Use the `{{</* link-card */>}}` shortcode to link prominently to different pages.

A `{{</* link-card */>}}` requires a `title` and an [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href) attribute. You can optionally include a short `description` or other link attributes such as `target`.

{{< link-card
title="Showcase"
description="Explore the infinite possibilities of Doks"
href="/showcase/"
target="_blank"
>}}

```md
{{</* link-card
  title="Showcase"
  description="Explore the infinite possibilities of Doks"
  href="/showcase/"
  target="_blank"
*/>}}
```

{{< link-card title="Showcase" href="/showcase/" >}}

```md
{{</* link-card title="Showcase" href="/showcase/" */>}}
```

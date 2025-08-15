---
title: "Card Grid"
description: ""
summary: ""
date: 2025-08-15T19:26:52+02:00
lastmod: 2025-08-15T19:26:52+02:00
draft: false
weight: 325
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

Group multiple `{{</* link-card */>}}` shortcodes in `{{</* card-grid */>}}` to display cards side-by-side when there's enough space.

{{< card-grid >}}
{{< link-card title="Showcase" href="/showcase/" >}}
{{< link-card title="Showcase" href="/showcase/" >}}
{{< /card-grid >}}

```md
{{</* card-grid */>}}
{{</* link-card title="Showcase" href="/showcase/" */>}}
{{</* link-card title="Showcase" href="/showcase/" */>}}
{{</* /card-grid */>}}
```

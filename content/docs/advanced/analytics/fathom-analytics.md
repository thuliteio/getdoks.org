---
title: "Fathom Analytics"
description: "Integrate Fathom Analytics with Thulite to measure traffic using a privacy-focused script setup and minimal implementation overhead."
summary: "Integrate Fathom Analytics with Thulite to measure traffic using a privacy-focused script setup and minimal implementation overhead."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:21:22+02:00
draft: false
weight: 342
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

[Fathom Analytics](https://usefathom.com/) is a Google Analytics alternative that doesn't compromise visitor privacy for data.

## Prerequisites

To follow this guide, you'll need an existing [Thulite](https://thulite.io/) site and a [Fathom](https://usefathom.com/docs/start/create) project.

## Add script

Add to `layouts/partials/head/script-header.html`:

```html
<script src="https://cdn.usefathom.com/script.js" data-site="SITE_ID" defer></script>
```

## Resources

- [Advanced embed script settings](https://usefathom.com/docs/script/script-advanced)
- [If Fathom isn't working on your site](https://usefathom.com/docs/troubleshooting/not-working)

---
title: "Cabin Analytics"
description: "Add Cabin Analytics to Thulite with a lightweight script integration for privacy-first, low-footprint website measurement and reporting."
summary: "Add Cabin Analytics to Thulite with a lightweight script integration for privacy-first, low-footprint website measurement and reporting."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:21:22+02:00
draft: false
weight: 711
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

[Cabin Analytics](https://withcabin.com/) is a privacy-first, carbon conscious web analytics service.

## Prerequisites

To follow this guide, you'll need an existing [Thulite](https://thulite.io/) site and a [Cabin](https://withcabin.com/signin) project.

## Add script

Add to `layouts/partials/head/script-header.html`:

```html
<script async defer src="https://scripts.withcabin.com/hello.js"></script>
```

## Resources

- [Cabin Analytics Documentation](https://docs.withcabin.com/)
- [Privacy law compliance](https://docs.withcabin.com/privacy)

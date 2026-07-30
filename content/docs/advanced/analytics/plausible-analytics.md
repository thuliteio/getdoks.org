---
title: "Plausible Analytics"
description: "Integrate Plausible Analytics with Thulite using domain parameters and script injection for privacy-friendly traffic tracking in production."
summary: "Integrate Plausible Analytics with Thulite using domain parameters and script injection for privacy-friendly traffic tracking in production."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:21:22+02:00
draft: false
weight: 344
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

[Plausible Analytics](https://plausible.io/) ia an easy to use and privacy-friendly Google Analytics alternative.

## Prerequisites

To follow this guide, you'll need an existing [Thulite](https://thulite.io/) site and a [Plausible](https://plausible.io/) project.

## Add parameters

Add the following parameters to `config/_default/params.toml` and update with your `plausibleDomain`:

```toml
# Add-ons
[add_ons]
  plausibleDomain = "example.com" # "example.com" (default)
```

## Add script

Add to `layouts/partials/head/script-header.html`:

```html
{{ $plausibleDomain := site.Params.add_ons.plausibleDomain -}}
<script defer data-domain="{{ $plausibleDomain }}" src="https://plausible.io/js/script.js"></script>
```

## Resources

- [Improve CSP instructions](https://github.com/plausible/docs/issues/20)
- [Plausible Analytics Docs](https://plausible.io/docs)

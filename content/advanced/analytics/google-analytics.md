---
title: "Google Analytics"
description: "Set up Google Analytics 4 in Thulite by enabling Hugo analytics templates, configuring the measurement ID, and aligning CSP settings."
summary: "Set up Google Analytics 4 in Thulite by enabling Hugo analytics templates, configuring the measurement ID, and aligning CSP settings."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:21:22+02:00
draft: false
weight: 715
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

[Google Analytics](https://marketingplatform.google.com/about/analytics/) is an analytics service that enables you to measure traffic and engagement across your websites and apps.

{{< callout context="note" title="Using Google Analytics GA4 with CSP" icon="info-circle" >}}

Don't forget to update your `Content-Security-Policy` HTTP response header when using Google Analytics. [See an example](https://content-security-policy.com/examples/google-analytics/)

{{< /callout >}}

## Prerequisites

To follow this guide, you'll need an existing [Thulite](https://thulite.io/) site and a [Google Analytics 4](https://support.google.com/analytics/answer/10089681) property.

## Add script

Add to `layouts/partials/head/script-header.html`:

```html
{{ template "_internal/google_analytics.html" . }}
```

## Add tracking ID

Add your tracking ID to `config/_default/hugo.toml`:

```toml
[services]
  [services.googleAnalytics]
    ID = 'G-MEASUREMENT_ID'
```

## Resources

- [Set up Analytics for a website and/or app](https://support.google.com/analytics/answer/9304153)
- [Tagging for Google Analytics](https://developers.google.com/analytics/devguides/collection/ga4/tag-options)
- [Google Analytics for developers](https://developers.google.com/analytics/devguides/collection/ga4)

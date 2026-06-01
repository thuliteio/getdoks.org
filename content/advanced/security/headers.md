---
title: "Headers"
description: "Set a secure header baseline for Thulite deployments, including HSTS, nosniff, framing controls, and policies for safer browser behavior."
summary: "Set a secure header baseline for Thulite deployments, including HSTS, nosniff, framing controls, and policies for safer browser behavior."
date: 2026-05-18T08:13:33+02:00
lastmod: 2026-05-28T11:21:22+02:00
draft: false
weight: 513
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Security headers are a low-cost way to harden your site at the edge.

## Start with a safe baseline

Use these headers for all routes (example for Netlify):

```toml {title="netlify.toml"}
[[headers]]
  for = "/*"
  [headers.values]
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    Referrer-Policy = "strict-origin"
    Permissions-Policy = "geolocation=(self), microphone=(), camera=()"
```

## Add CSP separately and keep it strict

Treat CSP as its own policy and iterate carefully as scripts and integrations evolve.

- Start with `default-src 'self'`
- Add only required origins
- Prefer nonces/hashes over `unsafe-inline`

## Be intentional with cache headers

Apply long-lived caching to fingerprinted static assets, and shorter/revalidated caching to HTML.

## Validate after deployment

In browser dev tools and scanners, confirm:

- Headers are present on HTML and static assets
- HTTPS and HSTS are active
- No unexpected framing or MIME issues
- No CSP violations on critical pages

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/mdnwebdocs.svg" title="Strict-Transport-Security header" description="Force HTTPS and prevent protocol downgrade attacks." href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security" target="_blank" >}}
{{< link-card src="svgs/simple-icons/mdnwebdocs.svg" title="X-Content-Type-Options header" description="Disable MIME sniffing to reduce content-type confusion risks." href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options" target="_blank" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/mdnwebdocs.svg" title="X-Frame-Options header" description="Control framing behavior to mitigate clickjacking." href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options" target="_blank" >}}
{{< link-card src="svgs/simple-icons/mdnwebdocs.svg" title="Referrer-Policy header" description="Limit referrer data sent to external origins." href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy" target="_blank" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/mdnwebdocs.svg" title="Permissions-Policy header" description="Restrict browser features like camera, mic, and geolocation." href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy" target="_blank" class="w-50" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

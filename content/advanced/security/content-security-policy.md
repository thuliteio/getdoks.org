---
title: "Content Security Policy"
description: "Create and enforce a strict Content Security Policy in Thulite to limit resource origins, reduce XSS risk, and validate changes safely."
summary: "Create and enforce a strict Content Security Policy in Thulite to limit resource origins, reduce XSS risk, and validate changes safely."
date: 2026-05-18T08:13:01+02:00
lastmod: 2026-05-28T11:21:22+02:00
draft: false
weight: 511
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Content Security Policy (CSP) reduces XSS risk by restricting where scripts, styles, fonts, and other resources can load from.

## Start with a strict baseline

Use `self` by default and add only domains your site actually needs.

```toml {title="netlify.toml"}
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; manifest-src 'self'; connect-src 'self'; font-src 'self'; img-src 'self' data:; script-src 'self'; style-src 'self'; frame-ancestors 'none'; base-uri 'self'; object-src 'none'"
```

## Handle inline and third-party scripts explicitly

If inline scripts are required, prefer nonces or hashes instead of `unsafe-inline`.

- Nonce: good when values are generated per response
- Hash: good for stable inline snippets
- Third-party sources: add only exact hosts you trust

## Roll out with report-only first

Deploy a `Content-Security-Policy-Report-Only` header, review violations, then enforce once clean.

## Keep CSP aligned with asset strategy

Thulite/Core generates fingerprinted assets and SRI attributes, which work well with a strict CSP. When integrations change, re-check CSP so new endpoints and assets are explicitly allowed.

## Verify after every release

In browser dev tools, confirm:

- No blocked first-party scripts or styles
- No unexpected external domains
- No CSP violations on key pages

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/mdnwebdocs.svg" title="Content Security Policy (CSP)" description="MDN guide for CSP directives, rollout strategy, and common pitfalls." href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

---
title: "Security Overview"
linkTitle: "Overview"
description: "Apply core security protections in Thulite with practical guidance for CSP, secure headers, and anti-scraping techniques for public websites."
summary: "Apply core security protections in Thulite with practical guidance for CSP, secure headers, and anti-scraping techniques for public websites."
date: 2026-05-18T08:14:51+02:00
lastmod: 2026-05-28T11:21:22+02:00
draft: false
weight: 320
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use this section to apply essential security protections at the framework and hosting layer.

## Security Guides

{{< card-grid >}}
{{< link-card title="Content Security Policy" description="Restrict allowed resource sources to reduce XSS and injection risk." href="/thulite/advanced/security/content-security-policy/" >}}
{{< link-card title="Headers" description="Set secure HTTP headers such as HSTS, nosniff, and permissions policy." href="/thulite/advanced/security/headers/" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card title="Email Obfuscation" description="Protect published email addresses from basic scraping bots." href="/thulite/advanced/security/email-obfuscation/" class="w-50" >}}
{{< /card-grid >}}

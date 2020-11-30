---
title: "Security"
description: "Get A+ scores on Mozilla Observatory out of the box. Easily change the default Security Headers to suit your needs."
lead: "Get A+ scores on Mozilla Observatory out of the box. Easily change the default Security Headers to suit your needs."
date: 2020-09-17T13:48:09+02:00
lastmod: 2020-09-17T13:48:09+02:00
draft: false
images: ["mozilla-observatory-scan-summary-doks.png", "mozilla-observatory-scan-recommendations-doks.png"]
menu: 
  docs:
    parent: "reference-guides"
weight: 310
toc: true
---

{{< img-simple src="mozilla-observatory-scan-summary-doks.png" alt="Mozilla Observatory Scan Summary Doks">}}

See also Mozilla Observatory: [Scan Results for doks.netlify.app](https://observatory.mozilla.org/analyze/doks.netlify.app)

## Netlify

See also the Netlify website: [Security at Netlify](https://www.netlify.com/security/).

### Security Headers

`./layouts/index.headers` excerpt:

```bash
/*
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Content-Security-Policy: default-src 'none'; manifest-src 'self'; connect-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin
```

See also: [Headers]({{< ref "netlify#headers" >}}).

#### Content Security Policy

{{< alert icon="💡" text="<a href=\"https://addons.mozilla.org/nl/firefox/addon/laboratory-by-mozilla/\">Laboratory</a> is an experimental Firefox extension that helps you generate a Content Security Policy (CSP) header for your website." >}}

## Subresource Integrity

[Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) is applied to Doks CSS and JS files when building your Doks site for production:

- `./layouts/partials/head/stylesheet.html`
- `./layouts/partials/footer/script-footer.html`

See also the Hugo Docs: [Fingerprinting and SRI](https://gohugo.io/hugo-pipes/fingerprint/).

## Doks Codebase

The Doks Codebase is regularly checked for vulnarabilites with an automated CodeQL workflow.

See also the GitHub docs: [Finding security vulnerabilities and errors in your code](https://docs.github.com/en/free-pro-team@latest/github/finding-security-vulnerabilities-and-errors-in-your-code)

## Dok Dependencies

The Doks Dependencies are regularly checked for updates with an automated Dependabot process.

See also the GitHub docs: [Keeping your dependencies updated automatically](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/keeping-your-dependencies-updated-automatically)

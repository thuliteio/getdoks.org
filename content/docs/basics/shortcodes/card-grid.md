---
title: "Card Grid"
description: "Use the Doks card grid shortcode to arrange related cards in a responsive layout that keeps navigation choices and supporting content easy to scan."
summary: "Arrange cards side by side in a responsive grid layout."
date: 2026-08-21T10:52:41+02:00
lastmod: 2026-08-21T10:52:41+02:00
draft: false
weight: 227

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use the `card-grid` shortcode to wrap [`card`](../card/) or [`link-card`](../link-card/) shortcodes in a responsive side-by-side layout. On smaller screens the cards stack vertically.

## Usage

```go-html-template
{{</* card-grid */>}}
{{</* card title="…" */>}}…{{</* /card */>}}
{{</* card title="…" */>}}…{{</* /card */>}}
{{</* /card-grid */>}}
```

`card-grid` has no parameters of its own — all configuration lives on the child cards.

## Examples

### With cards

{{< preview >}}
{{< card-grid >}}
{{< card title="Fast" icon="brand-speedtest" color="yellow" >}}
Optimized for performance out of the box.
{{< /card >}}
{{< card title="Secure" icon="shield" color="green" >}}
Security best practices built in.
{{< /card >}}
{{< /card-grid >}}
{{< /preview >}}

```go-html-template
{{</* card-grid */>}}
{{</* card title="Fast" icon="brand-speedtest" color="yellow" */>}}
Optimized for performance out of the box.
{{</* /card */>}}
{{</* card title="Secure" icon="shield" color="green" */>}}
Security best practices built in.
{{</* /card */>}}
{{</* /card-grid */>}}
```

### With link cards

{{< preview >}}
{{< card-grid >}}
{{< link-card title="Install" description="Set up a new Doks project." href="/docs/start-here/installation/" >}}
{{< link-card title="Configuration" description="Customize your site settings." href="/docs/start-here/configuration/" >}}
{{< /card-grid >}}
{{< /preview >}}

```go-html-template
{{</* card-grid */>}}
{{</* link-card title="Install" description="Set up a new Doks project." href="/docs/start-here/installation/" */>}}
{{</* link-card title="Configuration" description="Customize your site settings." href="/docs/start-here/configuration/" */>}}
{{</* /card-grid */>}}
```

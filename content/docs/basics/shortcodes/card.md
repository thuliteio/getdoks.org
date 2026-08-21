---
title: "Card"
description: "Display content in a styled card with an optional icon, color, and body text."
summary: "Display content in a styled card with an optional icon, color, and body text."
date: 2026-08-21T10:52:35+02:00
lastmod: 2026-08-21T10:52:35+02:00
draft: false
weight: 223

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use the `card` shortcode to present information in a visually distinct card. Cards can stand alone or be grouped inside a [`card-grid`](../card-grid/).

## Usage

```go-html-template
{{</* card title="Getting started" icon="rocket" color="blue" */>}}
Everything you need to get up and running.
{{</* /card */>}}
```

Group multiple cards side by side with `card-grid`:

```go-html-template
{{</* card-grid */>}}
{{</* card title="Install" icon="download" color="green" */>}}
Install Doks with a single command.
{{</* /card */>}}
{{</* card title="Configure" icon="settings" color="purple" */>}}
Adjust your project settings.
{{</* /card */>}}
{{</* /card-grid */>}}
```

## Parameters

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `title` | string | — | Card heading text. |
| `icon` | string | — | Name or path of an SVG icon. |
| `color` | string | `yellow` | Icon accent color. One of `yellow`, `purple`, `green`, `red`, or `blue`. |

Inner content is optional and supports Markdown.

## Examples

### Standalone card

{{< preview >}}
{{< card title="Deploy" icon="cloud-upload" color="blue" >}}
Push your site to any static hosting provider.
{{< /card >}}
{{< /preview >}}

```go-html-template
{{</* card title="Deploy" icon="cloud-upload" color="blue" */>}}
Push your site to any static hosting provider.
{{</* /card */>}}
```

### Card grid

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

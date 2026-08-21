---
title: "Link Card"
description: "Display a clickable card that links to another page or URL."
summary: "Display a clickable card that links to another page or URL."
date: 2026-08-21T11:18:43+02:00
lastmod: 2026-08-21T11:18:43+02:00
draft: false
weight: 225

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use the `link-card` shortcode to create a navigational card with a title, optional description, and an arrow pointing to a URL. Link cards can stand alone or be grouped inside a [`card-grid`](../card-grid/).

## Usage

```go-html-template
{{</* link-card title="Getting started" href="/docs/start-here/" */>}}
```

With a description:

```go-html-template
{{</* link-card
  title="Getting started"
  description="Install Doks and set up your first project."
  href="/docs/start-here/"
*/>}}
```

## Parameters

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `href` | string | — | **Required.** Destination URL. |
| `title` | string | — | **Required.** Card heading text. |
| `description` | string | — | Short subtitle displayed below the title. |
| `target` | string | — | Link target, e.g. `_blank` to open in a new tab. |
| `rel` | string | — | Link `rel` attribute, e.g. `noopener noreferrer`. |
| `class` | string | — | Additional CSS classes on the card element, e.g. `w-50`. |

## Examples

### Standalone link card

{{< preview >}}
{{< card-grid >}}
{{< link-card title="Shortcodes" description="Explore all available shortcodes." href="/docs/basics/shortcodes/" >}}
{{< /card-grid >}}
{{< /preview >}}

```go-html-template
{{</* link-card
  title="Shortcodes"
  description="Explore all available shortcodes."
  href="/docs/basics/shortcodes/"
*/>}}
```

### Link card grid

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

### Open in a new tab

```go-html-template
{{</* link-card
  title="Hugo docs"
  description="Official Hugo documentation."
  href="https://gohugo.io/documentation/"
  target="_blank"
  rel="noopener noreferrer"
*/>}}
```

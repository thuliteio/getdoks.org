---
title: "Callout"
description: "Display highlighted notes, warnings, and other notices inline with your content."
summary: "Display highlighted notes, warnings, and other notices inline with your content."
date: 2026-08-21T10:52:30+02:00
lastmod: 2026-08-21T10:52:30+02:00
draft: false
weight: 221

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use the `callout` shortcode to draw attention to important information. Four context types are available: `note` (default), `info`, `warning`, and `danger`.

## Usage

```go-html-template
{{</* callout "note" */>}}
Your message here.
{{</* /callout */>}}
```

Or with named parameters:

```go-html-template
{{</* callout context="warning" title="Watch out" */>}}
This action cannot be undone.
{{</* /callout */>}}
```

## Parameters

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `context` (or positional `0`) | string | `note` | Sets the callout style. One of `note`, `info`, `warning`, or `danger`. |
| `title` | string | — | Optional heading displayed above the body. Supports Markdown. |
| `icon` | string | — | Optional path to an SVG icon to display. |

## Examples

### Note

{{< preview >}}
{{< callout >}}
This is a default note callout.
{{< /callout >}}
{{< /preview >}}

```go-html-template
{{</* callout */>}}
This is a default note callout.
{{</* /callout */>}}
```

### Info

{{< preview >}}
{{< callout "info" >}}
Doks uses npm and Hugo mounts to manage dependencies.
{{< /callout >}}
{{< /preview >}}

```go-html-template
{{</* callout "info" */>}}
Doks uses npm and Hugo mounts to manage dependencies.
{{</* /callout */>}}
```

### Warning

{{< preview >}}
{{< callout context="warning" title="Heads up" icon="alert-triangle" >}}
Changing this setting requires a full rebuild.
{{< /callout >}}
{{< /preview >}}

```go-html-template
{{</* callout context="warning" title="Heads up" icon="alert-triangle" */>}}
Changing this setting requires a full rebuild.
{{</* /callout */>}}
```

### Danger

{{< preview >}}
{{< callout "danger" >}}
Deleting this record is **permanent** and cannot be reversed.
{{< /callout >}}
{{< /preview >}}

```go-html-template
{{</* callout "danger" */>}}
Deleting this record is **permanent** and cannot be reversed.
{{</* /callout */>}}
```

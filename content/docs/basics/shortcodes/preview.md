---
title: "Preview"
description: "Use the Doks preview shortcode to show a labeled live rendering beside its source, making it easier to explain shortcode behavior and expected output."
summary: "Wrap shortcode output in a labeled preview box to show a live render alongside its code."
date: 2026-08-21T11:18:56+02:00
lastmod: 2026-08-21T11:18:56+02:00
draft: false
weight: 231

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use the `preview` shortcode to render a labeled "Preview" box around any content. It has no parameters — place any shortcodes or Markdown inside it.

## Usage

```go-html-template
{{</* preview */>}}
{{</* callout "info" */>}}
This is rendered inside a preview box.
{{</* /callout */>}}
{{</* /preview */>}}
```

Pair it with a code block immediately after to show both the live output and the source:

````go-html-template
{{</* preview */>}}
{{</* callout "info" */>}}
This is rendered inside a preview box.
{{</* /callout */>}}
{{</* /preview */>}}

```go-html-template
{{</* callout "info" */>}}
This is rendered inside a preview box.
{{</* /callout */>}}
```
````

## Example

{{< preview >}}
{{< card title="Preview" icon="eye" color="blue" >}}
This card is rendered live inside the preview box.
{{< /card >}}
{{< /preview >}}

```go-html-template
{{</* preview */>}}
{{</* card title="Preview" icon="eye" color="blue" */>}}
This card is rendered live inside the preview box.
{{</* /card */>}}
{{</* /preview */>}}
```

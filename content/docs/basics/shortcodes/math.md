---
title: "Math"
description: "Render LaTeX math expressions as SVG images using the Math API service."
summary: "Render LaTeX math expressions as SVG images using the Math API service."
date: 2026-08-21T11:18:49+02:00
lastmod: 2026-08-21T11:18:49+02:00
draft: false
weight: 243

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use the `math` shortcode to render LaTeX expressions as SVG images via the [Math API](https://math.vercel.app/) service. Display mode (block vs. inline) is controlled by the LaTeX delimiters you use inside the shortcode.

{{< callout "info" >}}
Requires Hugo v0.147.0 or later. Expressions are fetched from `https://math.vercel.app/` at build time.
{{< /callout >}}

## Usage

Wrap your LaTeX in `\[...\]` for block (display) mode, or `$...$` for inline mode:

```go-html-template
{{</* math */>}}\[\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}\]{{</* /math */>}}
```

```go-html-template
{{</* math */>}}$E = mc^2${{</* /math */>}}
```

`$$...$$` and `\(...\)` are also supported, but `$$...$$` conflicts with the Goldmark passthrough extension configured in `markup.toml` — avoid it inside the shortcode.

## Parameters

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `color` | string | `black` | Foreground color as a CSS named color or hex value, e.g. `red` or `#0d6efd`. |
| `class` | string | auto | Additional CSS class on the wrapping `<span>`. |
| `id` | string | auto | ID attribute on the wrapping `<span>`. |

## Examples

### Block expression

```go-html-template
{{</* math */>}}\[\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}\]{{</* /math */>}}
```

### Inline expression

```go-html-template
The quadratic formula is {{</* math */>}}$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}${{</* /math */>}}.
```

### Custom color

```go-html-template
{{</* math color="#0d6efd" */>}}\[F = ma\]{{</* /math */>}}
```

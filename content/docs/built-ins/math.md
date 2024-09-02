---
title: "Mathematical Expressions"
description: ""
summary: ""
date: 2023-12-12T08:30:43+01:00
lastmod: 2023-12-12T08:30:43+01:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
slug: math
---

You can use a fenced code block or shortcode to embed an SVG image of a [LaTeX](https://www.latex-project.org/) mathematical expression or equation in your Doks site using the free [Math API](https://math.vercel.app/home) service.

{{< callout context="note" icon="outline/info-circle" >}}
Unlike JavaScript solutions such as [KaTeX](https://katex.org/) or [MathJax](https://www.mathjax.org/), this approach embeds an SVG image in your page.
{{< /callout >}}

## Fenced code block

Include a LaTeX expression or equation in your markdown using a fenced code block.

### Examples

````md
```math
$$
\frac{1}{\Gamma(s)}\int_{0}^{\infty}\frac{u^{s-1}}{e^{u}-1}\mathrm{d}u
$$
```
````

```math
$$
\frac{1}{\Gamma(s)}\int_{0}^{\infty}\frac{u^{s-1}}{e^{u}-1}\mathrm{d}u
$$
```

You can add [markdown attributes](https://www.veriphor.com/articles/markdown-attributes/) like `class` and `id` to the `div` element that wraps the SVG image — for example:
{.mt-4}

````md
```math {.text-center}
$$
\frac{1}{\Gamma(s)}\int_{0}^{\infty}\frac{u^{s-1}}{e^{u}-1}\mathrm{d}u
$$
```
````

```math {.text-center}
$$
\frac{1}{\Gamma(s)}\int_{0}^{\infty}\frac{u^{s-1}}{e^{u}-1}\mathrm{d}u
$$
```

## Shortcode

Include a LaTeX expression or equation in your markdown using a shortcode, either as a block or inline.

### Examples

#### Block

```md
{{</* math class=text-center */>}}

$$
x^n + y^n = z^n
$$

{{</* /math */>}}
```

{{< math class=text-center >}}

$$
x^n + y^n = z^n
$$

{{< /math >}}

#### Inline

```md
An inline {{</* math */>}}${(x+y)}^2${{</* /math */>}} expression.
```

An inline {{< math >}}${(x+y)}^2${{< /math >}} expression.

## Performance

The render hook and shortcode call Hugo's `resources.GetRemote` function to request the SVG image from the Math API. Hugo caches the result, and invalidates the cache when (a) you edit the LaTeX markup, or (b) the cache expires.

To optimize performance in a CI/CD environment such as [Cloudflare Pages](https://pages.cloudflare.com/), [GitHub Pages](https://pages.github.com/), or [Netlify](https://www.netlify.com/), you should:

1. Edit your site configuration to store the `getresource` cache in the project's `resources` directory, setting the cache to never expire:

   ```toml {title=hugo.toml}
   [getresource]
   dir = ':resourceDir/_gen'
   maxAge = -1
   ```

2. Check the `resources` directory into source control.

In this configuration, Hugo will use the cached resources when building your site locally and remotely, invalidating the cache when you change the LaTeX markup.

---
title: "Mathematics"
description: "Display mathematical expressions and equations in Doks with LaTeX and Markdown, including inline notation and larger formulas that remain clear for readers."
summary: "Display mathematical expressions and equations with LaTeX in Markdown."
date: 2026-08-25T11:50:33+02:00
lastmod: 2026-08-25T11:50:33+02:00
draft: false
weight: 315

params:
  math: true
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Write mathematical expressions in LaTeX. To enable math rendering on a page, set `math: true` in its front matter.

## Usage

Use the configured delimiters for inline and block equations:

| Delimiters | Use |
| ---------- | --- |
| `\(...\)` | Inline math within a sentence. |
| `\[...\]` | A standalone block equation. |
| `$$...$$` | An alternative block equation. |

## Examples

### Inline math

{{< preview render=markdown class="math-wrapper" >}}
Use `\(` and `\)` for expressions within a sentence, such as \(a^2 + b^2 = c^2\).
{{< /preview>}}

````md
Use `\(` and `\)` for inline math: \(a^2 + b^2 = c^2\).
````

### Block math

Use `\[` and `\]`, or `$$`, for standalone equations.

{{< preview render=markdown class="math-wrapper" >}}
\[
E = mc^2
\]
{{< /preview>}}

````md
\[
E = mc^2
\]
````

The `$$` delimiters are also supported:

{{< preview render=markdown class="math-wrapper" >}}
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$
{{< /preview>}}

```md
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$
```

## Configuration

Math rendering is enabled on a page with the `math` parameter:

````md
---
params:
  math: true
---
````

The site-wide default is disabled, so enable `math` in the front matter of each page that contains equations. Set it to `true` globally to enable math on every page, or set it to `false` on individual pages to override the global setting.

```toml {title="params.toml"}
# Enable mathematical rendering on every page (unless you set the `math` parameter to `false` in front matter)
math = false # false (default) or true
mathEngine = "KaTeX" # "KaTeX" (default) or "MathJax"
```

You can choose either KaTeX or MathJax by setting `mathEngine` to `"KaTeX"` or `"MathJax"`.

The Goldmark passthrough extension preserves the delimiters configured in `config/_default/markup.toml`.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/latex.svg" title="KaTeX" description="Fast, browser-based rendering for TeX and LaTeX mathematics." href="https://katex.org/" target="_blank">}}
{{< link-card src="svgs/simple-icons/latex.svg" title="MathJax" description="Accessible, browser-based rendering for TeX and MathML mathematics." href="https://www.mathjax.org" target="_blank">}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Mathematics in Markdown" description="Hugo guide to rendering LaTeX expressions and equations with MathJax or KaTeX." href="https://gohugo.io/content-management/mathematics/" target="_blank" class="w-50">}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

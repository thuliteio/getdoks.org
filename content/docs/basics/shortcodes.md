---
title: "Shortcodes"
description: "Use and create Hugo shortcodes in Thulite to embed reusable UI patterns in Markdown, keeping content expressive and template logic reusable."
summary: "Use and create Hugo shortcodes in Thulite to embed reusable UI patterns in Markdown, keeping content expressive and template logic reusable."
date: 2026-05-15T16:27:08+02:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 215
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Shortcodes let you use reusable template snippets inside Markdown content.

In Thulite, shortcode templates live in `layouts/_shortcodes/` and are called from page content with Hugo shortcode syntax.

{{< callout context="note" icon="bulb" >}}
Install the VS Code extension for shortcode snippets and completions: [Hugo Shortcodes for VS Code](https://marketplace.visualstudio.com/items?itemName=thuliteio.hugo-shortcodes).
{{< /callout >}}

## Use shortcodes in Markdown

Examples used in this project:

```md
{{</* preview */>}}

### Example output

This block is rendered as a preview.
{{</* /preview */>}}

{{</* link-card src="svgs/simple-icons/hugo.svg" title="Hugo Docs" href="https://gohugo.io/" */>}}

Contact: {{</* email "hello@example.com" */>}}
```

## Create a custom shortcode

Create a template in `layouts/_shortcodes/`.

Example file: `layouts/_shortcodes/note.html`

```html {title="note.html"}
<div class="callout callout-info">{{ .Inner | markdownify }}</div>
```

Use it in Markdown:

```md
{{</* note */>}}
Use shortcodes when plain Markdown is not enough.
{{</* /note */>}}
```

Keep shortcodes focused and reusable. If logic becomes complex, move it to a partial and call that from the shortcode.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Shortcodes" description="Write and use Hugo shortcodes in content files." href="https://gohugo.io/content-management/shortcodes/" target="_blank" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Shortcode templates" description="Build shortcode templates and pass arguments." href="https://gohugo.io/templates/shortcode/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

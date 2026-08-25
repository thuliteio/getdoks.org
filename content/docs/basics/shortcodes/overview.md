---
title: "Shortcodes Overview"
description: ""
summary: ""
date: 2026-08-21T10:39:08+02:00
lastmod: 2026-08-21T10:39:08+02:00
draft: false
weight: 217

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

## Doks

{{< card-grid >}}
{{< link-card title="Callout" description="Display highlighted notes, warnings, and other notices inline with your content." href="/docs/basics/shortcodes/callout/" >}}
{{< link-card title="Card" description="Display content in a styled card with an optional icon, color, and body text." href="/docs/basics/shortcodes/card/" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card title="Link Card" description="Display a clickable card that links to another page or URL." href="/docs/basics/shortcodes/link-card/" >}}
{{< link-card title="Card Grid" description="Arrange cards side by side in a responsive grid layout." href="/docs/basics/shortcodes/card-grid/" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card title="Details" description="Display a collapsible disclosure widget with a summary and hidden body content." href="/docs/basics/shortcodes/details/" >}}
{{< link-card title="Preview" description="Wrap shortcode output in a labeled preview box to show a live render alongside its code." href="/docs/basics/shortcodes/preview/" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card title="Steps" description="Display a numbered list of steps with styled step indicators." href="/docs/basics/shortcodes/steps/" >}}
{{< link-card title="Tabs" description="Display content in a tabbed interface using tabs and tab shortcodes." href="/docs/basics/shortcodes/tabs/" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card title="Tree" description="Render a file and folder tree from a Markdown list with optional SVG icons." href="/docs/basics/shortcodes/tree/" >}}
{{< link-card title="Video" description="Embed a self-hosted video using the HTML video element." href="/docs/basics/shortcodes/video/" >}}
{{< /card-grid >}}

## Integrations

### Images

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card
  title="img"
  description="Render a responsive image with lazy loading and LQIP support."
  href="https://docs.thulite.io/images/shortcodes/img/"
>}}
{{< link-card
  title="picture"
  description="Render a responsive image with format negotiation (e.g. WebP with JPEG fallback)."
  href="https://docs.thulite.io/images/shortcodes/picture/"
>}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card
  title="figure"
  description="Render a responsive, lazy-loaded image with an optional caption."
  href="https://docs.thulite.io/images/shortcodes/figure/"
  class="w-50"
>}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

### SVGs

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card
  title="SVGs"
  description="Embed SVG files directly in your Markdown content."
  href="https://docs.thulite.io/svg/basics/shortcode/svgs/"
>}}
{{< link-card
  title="Icons"
  description="Insert icon symbols inline with a simple shortcode."
  href="https://docs.thulite.io/svg/basics/shortcode/icons/"
>}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

## Custom shortcodes

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

### Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Shortcodes" description="Write and use Hugo shortcodes in content files." href="https://gohugo.io/content-management/shortcodes/" target="_blank" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Shortcode templates" description="Build shortcode templates and pass arguments." href="https://gohugo.io/templates/shortcode/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

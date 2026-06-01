---
title: "Markdown"
description: "Write Thulite content with Markdown syntax, frontmatter, code blocks, and media patterns that keep documentation readable and easy to maintain."
summary: "Write Thulite content with Markdown syntax, frontmatter, code blocks, and media patterns that keep documentation readable and easy to maintain."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 210
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use Markdown to write page content in `content/`.

Thulite uses Hugo's Markdown renderer, so standard Markdown works out of the box.

## Everyday syntax

```md
# H1 heading

## H2 heading

This is a paragraph with a [link](/start-here/getting-started/).

- Unordered list item
- Another item

1. Ordered item
2. Next item

**Bold** and _italic_ text.

`inline code`

> Blockquote
```

## Code blocks

Use fenced code blocks with a language for syntax highlighting.

````md
```bash
npm run dev
```
````

## Images

```md
![Alt text](/images/example.png)
```

Use clear alt text and keep image paths stable.

## Front matter and body

Markdown pages usually contain:

- Front matter for metadata (`title`, `description`, `draft`, and more)
- A Markdown body for the actual content

### Example

{{< preview >}}

```md
---
title: "About"
description: "Write Thulite content with Markdown syntax, frontmatter, code blocks, and media patterns that keep documentation readable and easy to maintain."
summary: "Write Thulite content with Markdown syntax, frontmatter, code blocks, and media patterns that keep documentation readable and easy to maintain."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-03-24T08:10:51+01:00
draft: false
weight: 210
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

# About us

We build fast, accessible documentation sites with Thulite.

- Clear structure
- Reusable components
- Great performance

Read the [Getting Started guide](/start-here/getting-started/) to learn more.
```

{{< /preview >}}

If you're creating a new page, use the [`create` command](/reference/commands/#create) so front matter is scaffolded automatically.

## Learn more

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/markdown.svg" title="Basic Syntax" description="Learn the core Markdown elements like headings, lists, links, images, and code blocks." href="/reference/markdown/basic-syntax/" >}}
{{< link-card src="svgs/simple-icons/markdown.svg" title="Extended Syntax" description="Explore advanced Markdown features such as tables, footnotes, task lists, and definition lists." href="/reference/markdown/extended-syntax/" >}}
{{< /card-grid >}}

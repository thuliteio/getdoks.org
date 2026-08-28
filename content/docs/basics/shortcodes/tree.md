---
title: "Tree"
description: "Use the Doks tree shortcode to render a clear file and folder structure from a Markdown list, with optional icons that improve visual scanning."
summary: "Render a file and folder tree from a Markdown list with optional SVG icons."
date: 2026-08-21T11:19:19+02:00
lastmod: 2026-08-21T11:19:19+02:00
draft: false
weight: 237

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use the `tree` shortcode to render a file system tree from a Markdown list. Prefix any item with `{icon-name}` to inject an inline SVG from the configured [Tabler Icons](https://tabler.io/icons) set.

## Usage

```go-html-template
{{</* tree */>}}
- {folder} src
  - {markdown} index.md
  - {markdown} about.md
- {json} package.json
{{</* /tree */>}}
```

The `{icon-name}` token is replaced with the matching SVG icon. Any valid Tabler icon name works.

## Parameters

`tree` has no parameters. Content is a standard Markdown unordered list.

## Example

{{< preview >}}
{{< tree >}}

- {folder} content
  - {folder} docs
    - {markdown} \_index.md
    - {markdown} getting-started.md
  - {markdown} \_index.md
- {folder} config
  - {folder} \_default
    - {toml} hugo.toml
    - {toml} params.toml
- {json} package.json

{{< /tree >}}
{{< /preview >}}

```go-html-template
{{</* tree */>}}
- {folder} content
  - {folder} docs
    - {markdown} \_index.md
    - {markdown} getting-started.md
  - {markdown} \_index.md
- {folder} config
  - {folder} \_default
    - {toml} hugo.toml
    - {toml} params.toml
- {json} package.json
{{</* /tree */>}}
```

### Common icons

| Token | Icon |
| ------- | ------ |
| `{folder}` | Folder |
| `{markdown}` | Markdown file |
| `{toml}` | TOML file |
| `{json}` | JSON file |
| `{html}` | HTML file |
| `{svg}` | SVG file |
| `{png}` | PNG image |
| `{brand-sass}` | Sass/SCSS file |

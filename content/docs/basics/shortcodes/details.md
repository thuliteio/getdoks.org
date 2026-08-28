---
title: "Details"
description: "Use the Doks details shortcode to add accessible collapsible sections with a clear summary and hidden supporting content that readers can reveal when needed."
summary: "Display a collapsible disclosure widget with a summary and hidden body content."
date: 2026-08-21T10:52:47+02:00
lastmod: 2026-08-21T10:52:47+02:00
draft: false
weight: 229

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use the `details` shortcode to render a native HTML `<details>` disclosure element. The summary is always visible; the body is revealed on click.

## Usage

```go-html-template
{{</* details "Summary text" */>}}
Body content goes here.
{{</* /details */>}}
```

Pass `open` as a second positional argument to expand the element by default:

```go-html-template
{{</* details "Summary text" "open" */>}}
This content is visible by default.
{{</* /details */>}}
```

## Parameters

| Position | Required | Description |
| ---------- | ---------- | ------------- |
| `0` | Yes | Summary label. Supports Markdown. |
| `1` | No | HTML attributes added to the `<details>` element, e.g. `open`. |

Inner content is required and supports Markdown.

## Examples

### Collapsed (default)

{{< preview >}}
{{< details "What is Doks?" >}}
Doks is a Hugo theme for building documentation websites.
{{< /details >}}
{{< /preview >}}

```go-html-template
{{</* details "What is Doks?" */>}}
Doks is a Hugo theme for building documentation websites.
{{</* /details */>}}
```

### Expanded by default

{{< preview >}}
{{< details "Prerequisites" "open" >}}

- [Hugo](https://github.com/gohugoio/hugo/releases/latest) (latest extended or extended/deploy edition)
- [Thulite](https://github.com/thuliteio/thulite/releases/latest) (latest version)
- [Node.js/npm](https://nodejs.org/en/download) (latest LTS version)
{.mb-0}
{{< /details >}}
{{< /preview >}}

```go-html-template
{{</* details "Prerequisites" "open" */>}}

- [Hugo](https://github.com/gohugoio/hugo/releases/latest) (latest extended or extended/deploy edition)
- [Thulite](https://github.com/thuliteio/thulite/releases/latest) (latest version)
- [Node.js/npm](https://nodejs.org/en/download) (latest LTS version)
{.mb-0}
{{</* /details */>}}
```

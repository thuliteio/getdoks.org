---
title: "Tabs"
description: "Use the Doks tabs shortcode to group related content in an accessible tabbed interface, keeping alternative instructions and examples compact and organized."
summary: "Display content in a tabbed interface using tabs and tab shortcodes."
date: 2026-08-21T11:19:12+02:00
lastmod: 2026-08-21T11:19:12+02:00
draft: false
weight: 235

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use the `tabs` shortcode with `tab` children to render a tabbed interface. Each `tab` becomes a clickable panel; its inner content supports Markdown.

## Usage

```go-html-template
{{</* tabs "unique-id" */>}}
{{</* tab "Tab one" */>}}
Content for the first tab.
{{</* /tab */>}}
{{</* tab "Tab two" */>}}
Content for the second tab.
{{</* /tab */>}}
{{</* /tabs */>}}
```

## Parameters

| Shortcode | Position | Required | Description |
| ----------- | ---------- | ---------- | ------------- |
| `tabs` | `0` | Yes | Unique ID for this tab group. Must be distinct per page when using multiple tab groups. |
| `tab` | `0` | Yes | Label shown on the tab button. |

`tab` must always be a direct child of `tabs`.

## Synced tabs

Tab selection is persisted in `localStorage` and synced across all tab groups on the page and across pages. When a user clicks a tab, every other tab group that contains a tab with the same label (case-insensitive) switches to that tab automatically — including on subsequent page visits. Use consistent labels across groups — e.g. always `"npm"`, `"pnpm"`, `"yarn"` — to take advantage of this.

## Example

{{< preview >}}
{{< tabs "install" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/doks-core
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm add @thulite/doks-core
```

{{< /tab >}}
{{< tab "yarn" >}}

```bash
yarn add @thulite/doks-core
```

{{< /tab >}}
{{< /tabs >}}
{{< /preview >}}

````go-html-template
{{</* tabs "install" */>}}
{{</* tab "npm" */>}}
```bash
npm install @thulite/doks-core
```
{{</* /tab */>}}
{{</* tab "pnpm" */>}}
```bash
pnpm add @thulite/doks-core
```
{{</* /tab */>}}
{{</* tab "yarn" */>}}
```bash
yarn add @thulite/doks-core
```
{{</* /tab */>}}
{{</* /tabs */>}}
````

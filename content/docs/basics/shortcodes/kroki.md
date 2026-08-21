---
title: "Kroki"
description: "Render diagrams from text using the Kroki diagram service."
summary: "Render diagrams from text using the Kroki diagram service."
date: 2026-08-21T11:18:35+02:00
lastmod: 2026-08-21T11:18:35+02:00
draft: false
weight: 241

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use the `kroki` shortcode to render diagrams from a textual description via the [Kroki](https://kroki.io/) service. The result is an inline SVG image.

{{< callout "info" >}}
Requires Hugo v0.147.0 or later. Diagrams are fetched from `https://kroki.io/` at build time.
{{< /callout >}}

## Usage

```go-html-template
{{</* kroki type="mermaid" */>}}
flowchart LR
  A --> B --> C
{{</* /kroki */>}}
```

## Parameters

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `type` | string | — | **Required.** Diagram language. See supported types below. |
| `alt` | string | `diagram` | Alt text for the rendered `<img>`. |
| `title` | string | — | Title attribute for the rendered `<img>`. |
| `class` | string | auto | CSS class on the `<img>` element. |
| `id` | string | auto | ID on the `<img>` element. |

### Supported diagram types

`actdiag`, `blockdiag`, `bpmn`, `bytefield`, `d2`, `dbml`, `ditaa`, `erd`, `excalidraw`, `graphviz`, `mermaid`, `nomnoml`, `nwdiag`, `packetdiag`, `pikchr`, `plantuml`, `rackdiag`, `seqdiag`, `structurizr`, `svgbob`, `symbolator`, `tikz`, `umlet`, `vega`, `vegalite`, `wavedrom`, `wireviz`

## Examples

### Mermaid flowchart

{{< preview >}}
{{< kroki type="mermaid" >}}
flowchart LR
  Install --> Configure --> Build --> Deploy
{{< /kroki >}}
{{< /preview >}}

```go-html-template
{{</* kroki type="mermaid" */>}}
flowchart LR
  Install --> Configure --> Build --> Deploy
{{</* /kroki */>}}
```

### Mermaid sequence diagram

{{< preview >}}
{{< kroki type="mermaid" >}}
sequenceDiagram
  Browser->>Hugo: Build request
  Hugo->>Kroki: POST diagram source
  Kroki-->>Hugo: SVG response
  Hugo-->>Browser: Rendered page
{{< /kroki >}}
{{< /preview >}}

```go-html-template
{{</* kroki type="mermaid" */>}}
sequenceDiagram
  Browser->>Hugo: Build request
  Hugo->>Kroki: POST diagram source
  Kroki-->>Hugo: SVG response
  Hugo-->>Browser: Rendered page
{{</* /kroki */>}}
```

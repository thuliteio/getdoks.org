---
title: "Diagrams"
description: "Add Mermaid diagrams to your Doks documentation with fenced code blocks."
summary: "Add Mermaid diagrams to your Doks documentation with fenced code blocks."
date: 2026-08-25T11:56:57+02:00
lastmod: 2026-08-25T11:56:57+02:00
draft: false
weight: 310

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use a fenced code block with the `mermaid` language identifier to add a diagram.

## Usage

````md
```mermaid
flowchart LR
  A[Write content] --> B[Build site]
  B --> C[Publish]
```
````

No additional page or site settings are required.

## Examples

Mermaid supports many [diagram types](https://mermaid.ai/open-source/intro/#diagram-types).

### Flowcharts

Use `flowchart` to show processes and relationships:

{{< preview render=markdown >}}

```mermaid
flowchart LR
  A[Write content] --> B[Build site]
  B --> C[Publish]
```

{{< /preview>}}

````md
```mermaid
flowchart LR
  A[Write content] --> B[Build site]
  B --> C[Publish]
```
````

### Sequence diagrams

Use `sequenceDiagram` for interactions between participants:

{{< preview render=markdown >}}

```mermaid
sequenceDiagram
  participant Browser
  participant Server
  Browser->>Server: Request page
  Server-->>Browser: Return HTML
```

{{< /preview >}}

````md
```mermaid
sequenceDiagram
  participant Browser
  participant Server
  Browser->>Server: Request page
  Server-->>Browser: Return HTML
```
````

### Gantt charts

Use `gantt` to show project tasks and dependencies:

{{< preview render=markdown >}}

```mermaid
gantt
  title Documentation release
  dateFormat YYYY-MM-DD
  axisFormat %d/%m
  section Content
  Write guide       :done, content, 2026-08-01, 5d
  Review guide      :review, after content, 3d
  Publish           :publish, after review, 1d
```

{{< /preview >}}

````md
```mermaid
gantt
  title Documentation release
  dateFormat YYYY-MM-DD
  axisFormat %d/%m
  section Content
  Write guide       :done, content, 2026-08-01, 5d
  Review guide      :review, after content, 3d
  Publish           :publish, after review, 1d
```
````

### Class diagrams

Use `classDiagram` to describe relationships between types:

{{< preview render=markdown >}}

```mermaid
classDiagram
  class User
  class Account
  User "1" --> "1" Account : owns
```

{{< /preview >}}

````md
```mermaid
classDiagram
  class User
  class Account
  User "1" --> "1" Account : owns
```
````

### Git graphs

Use `gitGraph` to document branches and commits:

{{< preview render=markdown >}}

```mermaid
gitGraph
  commit
  branch develop
  checkout develop
  commit
  checkout main
  merge develop
```

{{< /preview >}}

````md
```mermaid
gitGraph
  commit
  branch develop
  checkout develop
  commit
  checkout main
  merge develop
```
````

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/mermaid.svg" title="Mermaid" description="Create diagrams and visualizations from text with Mermaid's open-source syntax." href="https://mermaid.js.org" target="_blank">}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Mermaid diagrams" description="Hugo guide to adding Mermaid diagrams with a code block render hook." href="https://gohugo.io/content-management/diagrams/#mermaid-diagrams" target="_blank">}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

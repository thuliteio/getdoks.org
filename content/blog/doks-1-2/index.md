---
title: "Doks 1.2"
url: "/blog/doks-1-2/"
description: "Doks 1.2 is out! This release features support for diagrams, extended code blocks formatting, and more."
summary: "Doks 1.2 is out! This release features support for diagrams, extended code blocks formatting, and more."
date: 2023-12-23T14:33:10+01:00
lastmod: 2023-12-23T14:33:10+01:00
draft: false
weight: 50
categories: []
tags: []
contributors: ["Henk Verlinde"]
pinned: false
homepage: false
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Doks 1.2 is out! This release features support for diagrams, extended code blocks formatting, and more.

To upgrade an existing project, see the [Upgrade Doks](/docs/start-here/upgrade-doks/) guide.

<!-- omit in toc -->
## Highlights

- [Diagrams Support](#diagrams-support)
- [Code blocks formatting](#code-blocks-formatting)

## Diagrams Support

Diagrams are now available in 1.2. You can use a fenced code block to embed an SVG image of a diagram in your Doks site using the free [Kroki](https://kroki.io/) service.

Kroki generates diagrams from textual descriptions, and provides a unified API with support for [D2](https://d2lang.com/), [Mermaid](https://mermaid.js.org/intro/), [PlantUML](https://plantuml.com/), and [other diagram types](https://kroki.io/#support)

<!--
{{< callout context="caution" title="Update August 15, 2024" icon="outline/alert-triangle" >}}
Unfortunately, the Kroki service no longer is that robust. Use at your own risk! We will most likely remove Kroki support from Doks core in an upcoming release.
{{< /callout >}}
-->

```kroki {type=mermaid}
gantt
    title A Gantt Diagram
    dateFormat YYYY-MM-DD
    section Section
        A task          :a1, 2014-01-01, 30d
        Another task    :after a1, 20d
    section Another
        Task in Another :2014-01-12, 12d
        another task    :24d
```

````md
```kroki {type=mermaid}
gantt
    title A Gantt Diagram
    dateFormat YYYY-MM-DD
    section Section
        A task          :a1, 2014-01-01, 30d
        Another task    :after a1, 20d
    section Another
        Task in Another :2014-01-12, 12d
        another task    :24d
```
````

Read more about [diagrams](/docs/built-ins/diagrams/) in our documentation.

## Code blocks formatting

Doks now extends the formatting possibilities for code blocks. Code blocks can be rendered inside a window-like frame. A frame that looks like a terminal window will be used for shell scripting languages (e.g. `bash` or `sh`). Other languages display inside a code editor-style frame if they include a title.

A code block's optional title can be set with a `title="..."` attribute following the code block’s opening backticks and language identifier.

```bash
npm install @thulite/doks-core@latest
```

````md
```bash
npm install @thulite/doks-core@latest
```
````

```js {title="count.js"}
if ([1, "one", 2, "two"].includes(value)) {
  console.log("Number is either 1 or 2."); // comment
}
```

````md
```js {title="count.js"}
if ([1, "one", 2, "two"].includes(value)) {
  console.log("Number is either 1 or 2."); // comment
}
```
````

Also, you now can add [line numbers](/docs/built-ins/code-blocks/#line-numbers) and [line highlighting](/docs/built-ins/code-blocks/#highlight). Read more about [code blocks](/docs/built-ins/code-blocks/) in our documentation.

<!-- omit in toc -->
## Bug Fixes

Additional bug fixes are included in this release. Check out the [release notes](https://github.com/thuliteio/doks-core/releases/tag/v1.2.0) to learn more.

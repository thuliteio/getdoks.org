---
title: "Doks 1.9"
url: "/blog/doks-1-9/"
description: "Doks 1.9 introduces AI-friendly docs, a refreshed navigation UX, and first-class math and diagrams."
summary: "Doks 1.9 introduces AI-friendly docs, a refreshed navigation UX, and first-class math and diagrams."
date: 2026-03-06T08:56:37+01:00
lastmod: 2026-03-06T08:56:44+01:00
draft: false
weight: 50
categories: []
tags: []
contributors: ["Henk Verlinde"]
pinned: false
homepage: false
params:
  math: false # enable mathematical rendering
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Doks 1.9 introduces AI-friendly documentation, a refreshed navigation experience, first-class math and diagrams, new content shortcodes, and lightbox support.

To upgrade an existing project, see the [Doks v1.9](https://getdoks.org/docs/upgrade/guides/doks-v1.9/) upgrade guide.

<!-- omit in toc -->
## Highlights

- [AI-friendly documentation](#ai-friendly-documentation)
- [Navigation UX](#navigation-ux)
- [New content shortcodes](#new-content-shortcodes)
- [Images and lightbox](#images-and-lightbox)
- [Math and diagrams](#math-and-diagrams)

## AI-friendly documentation

Doks 1.9 makes your docs easier to consume by AI tools. AI page buttons let readers open the current page directly in ChatGPT, Claude, or Perplexity, and the new `llms.txt` and markdown output formats help LLMs discover and ingest your content more reliably.

## Navigation UX

The navbar now uses a fluid container by default, the docs table of contents sticks to the top on mobile, and the footer navigation is left aligned for better readability. A new section switcher makes it easier to jump between docs sections, and 404 handling now uses a markdown-based `404.md` page wired to your hosting redirects.

## New content shortcodes

Create richer guides with new cards, tree, and preview shortcodes. Use cards to highlight key resources, trees to visualise navigation hierarchies, and preview blocks to surface related content inline.

{{< tree >}}

- {folder} assets/
  - {folder} js/
    - {file-type-js} custom.js
- {folder} config/
  - {folder} _default/
    - {toml} hugo.toml
    - {toml} menus.toml
    - {toml} params.toml
- {folder} content/
  - {markdown} _index.md
- {folder} layouts/
- {folder} static/
- {json} package.json

{{< /tree >}}

```md
{{</* tree */>}}

- {folder} assets/
  - {folder} js/
    - {file-type-js} custom.js
- {folder} config/
  - {folder} _default/
    - {toml} hugo.toml
    - {toml} menus.toml
    - {toml} params.toml
- {folder} content/
  - {markdown} _index.md
- {folder} layouts/
- {folder} static/
- {json} package.json

{{</* /tree */>}}
```

## Images and lightbox

Image-heavy pages now look better on every screen. Doks 1.9 adds responsive lightbox support that works with the `srcset` attribute, so visitors can zoom into screenshots and diagrams without leaving the page.

## Math and diagrams

Mathematical expressions and diagrams now have first-class support. Configure KaTeX or MathJax as your math engine, and render Mermaid diagrams directly from fenced code blocks — all wired to respect Doks dark and light mode.

<!-- omit in toc -->
## Bug Fixes

Doks 1.9 also includes updated build tooling (Hugo 0.156.0, Node 24.13.1, npm 11.8.0), improved taxonomy pages, and several bug fixes. Check out the [release notes](https://github.com/thuliteio/doks-core/releases/tag/v1.9.0) to learn more.

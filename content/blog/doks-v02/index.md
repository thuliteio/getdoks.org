---
title: "Doks v0.2"
description: ""
lead: "Really excited to release Doks 0.2. The biggest update yet."
date: 2021-03-26T10:05:04+01:00
lastmod: 2021-03-26T10:05:04+01:00
draft: true
weight: 50
images: ["doks-v02.png"]
contributors: ["Henk Verlinde"]
---

## Doks child theme

Doks is now also available as a [child theme](https://github.com/h-enk/doks-child-theme), making it super easy to update when a new Doks version is released. Just run `npm update` — that's all. Of course you can still use Doks as a starter, if that fits your use case better.

Read more about [Doks child theme](/)

## Syntax highlighting

```json
// Default Doks style
[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]
```

Doks now comes with [highlight.js](https://highlightjs.org/) as the default syntax highlighter. Use the default Doks style, or use one of the other available [higlight.js themes](https://highlightjs.org/static/demo/).

Note that you can still use [Chroma](https://github.com/alecthomas/chroma) — the Hugo default — if you like.

Read more about [Syntax highlighting](/)

## Math typesetting

Doks now supports math typesetting by making use of the [KaTeX](https://katex.org/) library. It is switched off per default. Activate it by setting `kaTex = true` in `./config/_default/params.toml`.

Read more about [Math typesetting](/)

## Breadcrumb navigation

Doks now comes with breadcrumb navigation. It is switched off per default. Activate it by setting `breadCrumb = true` in `./config/_default/params.toml`.

Read more about [Breadcrumb navigation](/)

## Options

Now you easily switch the main functionalities on/off in `./config/_default/params.toml`:

```toml
[options]
  lazySizes = true
  clipBoard = false
  instantPage = true
  flexSearch = true
  darkMode = true
  bootStrapJs = false
  breadCrumb = false
  highLight = true
  kaTex = false
```

## Tables

## Other features and fixes

- Update to [Bootstrap 5 Beta 2](https://blog.getbootstrap.com/2021/02/10/bootstrap-5-beta-2/)
- Add [tables](/) support in markdown
- Improve contrast searchbar text in dark mode
- Update for [Netlify CLI](https://docs.netlify.com/cli/get-started/) use

## What's next

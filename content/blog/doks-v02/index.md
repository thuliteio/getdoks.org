---
title: "Doks v0.2"
description: "Version 0.2 is here! Introducing the Doks child theme, several DX + UX updates, and easily switching the main functionalities on/off (also optimizing your CSS + JS footprint)."
lead: "Version 0.2 is here! Introducing the Doks child theme, several DX + UX updates, and easily switching the main functionalities on/off (also optimizing your CSS + JS footprint)."
date: 2021-03-28T10:05:04+01:00
lastmod: 2021-03-28T10:05:04+01:00
draft: false
weight: 50
images: []
contributors: ["Henk Verlinde"]
---

## Doks child theme

Doks is now also released as a [npm package](https://www.npmjs.com/package/@hyas/doks), making it available as a dependency in the new [Doks child theme](https://github.com/h-enk/doks-child-theme). This means it's super easy to update when a new Doks version is released. Just run `npm update` — that's all. Of course, you can still use Doks as a starter, if that fits your use case better.

[Create a new site →]({{< relref "quick-start#create-a-new-site" >}})

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

Doks now comes with [highlight.js](https://highlightjs.org/) as the default syntax highlighter. Use the default Doks style, or use one of the other available [higlight.js themes](https://highlightjs.org/static/demo/). Or you can still use [Chroma](https://gohugo.io/content-management/syntax-highlighting/) — the Hugo default — if you like.

[How to add highlight.js →]({{< relref "highlight-js" >}})

## Math typesetting

Doks now supports math typesetting by making use of the [KaTeX](https://katex.org/) library. It is switched off per default. Activate it by setting `kaTex = true` in `./config/_default/params.toml`.

[How to add KaTeX →]({{< relref "docs/extensions/katex" >}})

## Breadcrumb navigation

Doks now comes with breadcrumb navigation. It is switched off per default. Activate it by setting `breadCrumb = true` in `./config/_default/params.toml`.

[How to add breadcrumb navigation →]({{< relref "breadcrumb-navigation" >}})

## Options

Now you can easily switch the main functionalities on/off in `./config/_default/params.toml` (also optimizing your CSS + JS footprint):

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

[Options →]({{< relref "project-configuration#options" >}})

## Tables

Doks now supports [Bootstrap styling](https://getbootstrap.com/docs/5.0/content/tables/) for tables in markdown.

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
{.table-striped}

[Tables →]({{< relref "bootstrap#tables" >}})

## Other features and fixes

- Update to [Hugo v0.82](https://gohugo.io/news/0.82.0-relnotes/) (via [hugo-bin](https://www.npmjs.com/package/hugo-bin))
- Update to [Bootstrap 5 Beta 3](https://blog.getbootstrap.com/2021/03/23/bootstrap-5-beta-3/)
- Make [development server]({{< relref "development-tools#development-server" >}}) accessible by local IP address (handy for e.g. testing locally on mobile devices)
- Add [Netlify DEV]({{< relref "development-tools#netlify-dev" >}}) support

[Full changelog →](https://github.com/h-enk/doks/blob/master/CHANGELOG.md)

## What's next

- Better UX menus (both mobile + desktop)
- Add multilingual support
- Replace FlexSearch with Algolia Search + [Autocomplete v1](https://github.com/algolia/autocomplete)
- Update documentation

[Milestones →](https://github.com/h-enk/doks/milestones)

## 250+ GitHub stars :star2::tada:

Thanks for all contributions to documentation, features, bugfixes and discussions so far! Doks is going fast on its mission to make the easiest and most fun Hugo theme for building modern documentation websites.

[Stargazers →](https://github.com/h-enk/doks/stargazers)

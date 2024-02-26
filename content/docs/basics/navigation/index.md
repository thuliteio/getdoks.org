---
title: "Navigation"
description: ""
summary: ""
date: 2023-11-13T16:52:40+01:00
lastmod: 2023-11-13T16:52:40+01:00
draft: false
weight: 340
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
slug: "navigation"
---



## Sidebar

A well-organized sidebar is key to a good documentation as it is one of the main ways users will navigate your site. Doks provides a complete set of options to customize your sidebar layout and content.

### Default sidebar

## Main

Define main entries in `config/_default/menus/menus.<language>.toml`:

```toml {title="menus.en.toml"}
[[main]]
  name = "Docs"
  url = "/docs/guides/example-guide/"
  weight = 10

[[main]]
  name = "Blog"
  url = "/blog/"
  weight = 30
```

## Social

Define social entries in `config/_default/menus/menus.<language>.toml`:

```toml {title="menus.en.toml"}
[[social]]
  name = "GitHub"
  pre = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>'
  url = "https://github.com/gethyas/doks"
  weight = 30
```

{{< callout icon="info-circle" >}}
Copy the icon SVG from [Tabler Icons](https://tabler-icons.io/) by clicking "Copy SVG".
{{< /callout >}}

## Footer

Define footer entries in `config/_default/menus/menus.<language>.toml`:

```toml {title="menus.en.toml"}
[[footer]]
  name = "Privacy Policy"
  url = "/privacy/"
  weight = 10
```

## Page

The "On this page" (Table of Contents) section is automatically generated. You can set the levels you'd like to show in `./config/_default/markup.toml`:

```toml {title="markup.toml"}
[tableOfContents]
  endLevel = 3
  ordered = false
  startLevel = 2
```

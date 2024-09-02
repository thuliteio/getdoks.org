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

This guide will show you how you can customize your Doks project's navigation.

## Sidebar

A well-organized sidebar is key to a good documentation as it is one of the main ways users will navigate your site. Doks provides a complete set of options to customize your sidebar layout and content.

### Default navigation

By default, Doks will automatically generate a sidebar based on the filesystem structure of your documentation, using each file's `title` property as the sidebar entry.

For example, given the following file structure:

```md
.
└──content/
└───docs/
├───guides/
│ ├───_index.md
│ └───example.md
reference/
│ ├───_index.md
│ └───example.md
└───_index.md
```

The following sidebar will be automatically generated:

{{< img src="images/section-navigation-light.png" alt="Section navigation light variant" class="img-lightmode border" >}}
{{< img src="images/section-navigation-dark.png" alt="Section navigation dark variant" class="img-darkmode border" >}}

### Menu navigation

{{< callout context="note" icon="outline/info-circle" >}}
Make sure to:

- use `pageRef` in stead of `url` and
- omit the trailing slash
  {{< /callout >}}

In stead of using the default navigation, you can define `sidebar_<section>` entries in `config/_default/menus/menus.<language>.toml` — for example:

```toml {title="menus.en.toml"}
[[sidebar_docs]]
  name = "Guides"
  pageRef = "/docs/guides"
  weight = 10

[[sidebar_docs]]
  name = "Reference"
  pageRef = "/docs/reference"
  weight = 20

[[sidebar_docs]]
  name = "Resources"
  pageRef = "/docs/resources"
  weight = 30
```

Child sections — like `guides` and `reference` in the example above — will get automatically generated.

{{< img src="images/section-navigation-menu-light.png" alt="Section navigation menu light variant" class="img-lightmode border" >}}
{{< img src="images/section-navigation-menu-dark.png" alt="Section navigation menu dark variant" class="img-darkmode border" >}}

### Settings

Sections can be collapsed by default by setting the `collapsed` property to `true` in the frontmatter of a section's `_index.md`:

```md {title="_index.md"}
---
sidebar:
  collapsed: true
---
```

### Other main sections

Sidebar navigation is also available for other `docs` based sections you create — for example when you run the following command:

{{< tabs "create-new-section" >}}
{{< tab "npm" >}}

```bash
npm run create -- --kind docs tutorials
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run create --kind docs tutorials
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run create --kind docs tutorials
```

{{< /tab >}}
{{< /tabs >}}

And add the new `tutorials` section to `config/_default/params.toml`:

```toml {title="params.toml"}
# Doks (@thulite/doks-core)
[doks]
  # Nav
  sectionNav = ["docs", "tutorials"] # ["docs"] (default) or list of sections (e.g. ["docs", "guides"])
```

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
  url = "https://github.com/thuliteio/doks"
  weight = 30
```

{{< callout icon="outline/info-circle" >}}
Copy the icon SVG from [Tabler Icons](https://tabler.io/icons) by clicking "Copy SVG".
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

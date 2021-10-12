---
title: "4. Add Menus"
description: "Add pages or links to the main, social, docs, or footer menu. Set page level navigation."
lead: "Add pages or links to the main, social, docs, or footer menu. Set page level navigation."
date: 2020-11-30T14:27:39+01:00
lastmod: 2020-11-30T14:27:39+01:00
draft: false
images: []
menu:
  tutorial:
    parent: "tutorial"
weight: 060
toc: true
---

{{< img-simple src="navigation-mobile.png" alt="Navigation Mobile" class="d-block mx-auto shadow my-5" >}}
{{< img-simple src="navigation-structure-mobile.png" alt="Navigation Structure Mobile" class="d-block mx-auto my-5 shadow" >}}

Open `./config/_default/menus/menus.en.toml` in your code editor.

## Global navigation

### Add to main menu

```toml
[[main]]
  name = "Docs"
  url = "/docs/prologue/introduction/"
  weight = 10

[[main]]
  name = "Blog"
  url = "/blog/"
  weight = 20

[[main]]
  name = "Community"
  url = "https://github.com/h-enk/doks/discussions"
  weight = 50
```

### Add to social menu

{{< alert icon="👉" text="Doks uses <a href=\"https://feathericons.com/\">Feather Icons</a>" />}}

```toml
[[social]]
  name = "Twitter"
  pre = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-twitter\"><path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path></svg>"
  url = "https://twitter.com/gethyas"
  weight = 10

[[social]]
  name = "GitHub"
  pre = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-github\"><path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path></svg>"
  url = "https://github.com/h-enk/doks"
  post = "v0.1.0"
  weight = 20
```

## Section navigation

### Add to docs menu

Add first level menu items (make sure the identifiers are unique):

```toml
[[docs]]
  name = "Prologue"
  weight = 10
  identifier = "prologue"
  url = "/docs/prologue/"

[[docs]]
  name = "Recipes"
  weight = 20
  identifier = "recipes"
  url = "/docs/recipes/"

[[docs]]
  name = "Help"
  weight = 50
  identifier = "help"
  url = "/docs/help/"
```

Add second level menu items in the frontmatter of a [documentation page]({{< relref "add-pages#add-a-documentation-page" >}}), by referencing a first level menu item (using it's identifier):

```md
..
menu:
  docs:
    parent: "prologue"
weight: 010
..
```

## Page navigation

### Set levels

The On this page (Table of Contents) section is automatically generated. In `./config/_default/markup.toml`, set the levels you'd like to show (default only `<h2>` and `<h3>` headings are shown):

```toml
[tableOfContents]
  endLevel = 3
  ordered = false
  startLevel = 2
```

## Footer navigation

### Add to footer menu

```toml
[[footer]]
  name = "Privacy"
  url = "/privacy-policy/"
  weight = 10
```

---
title: "Menus"
description: "Configure multilingual navigation menus in Thulite with menu files, weights, and page references for clear main, social, and footer navigation."
summary: "Configure multilingual navigation menus in Thulite with menu files, weights, and page references for clear main, social, and footer navigation."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 231
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Define navigation in `config/_default/menus/`.

In a Thulite project:

- `menus.en.toml` defines English menus
- `menus.nl.toml` defines Dutch menus
- Add `menus.<lang>.toml` for additional languages when needed

## Common menu sections

- `main`: top navigation
- `social`: social/profile links
- `footer`: footer links

Entries are ordered by `weight` (lower first).

## Example

Add a top-level item and a child item in `menus.en.toml`:

```toml {title="config/_default/menus/menus.en.toml"}
[[main]]
  name = "Documentation"
  url = "https://docs.thulite.io/"
  weight = 10

[[main]]
  identifier = "thulite-docs"
  name = "Thulite"
  url = "https://docs.thulite.io/"
  parent = "Documentation"
  weight = 11
```

Use `pageRef` for internal pages and `url` for external links.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Menus" description="Hugo guide to defining and working with menu entries." href="https://gohugo.io/content-management/menus/" target="_blank" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Menu localization" description="How to translate menus for multilingual sites." href="https://gohugo.io/content-management/multilingual/#menus" target="_blank" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Menu templates" description="Template reference for rendering menus in layouts." href="https://gohugo.io/templates/menu/" target="_blank" class="w-50">}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

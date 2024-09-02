---
title: "Doks 1.4"
url: "/blog/doks-1-4/"
description: "Doks 1.4 is now available! This release includes a new shortcode for link cards, improved sidebar navigation, and more."
summary: "Doks 1.4 is now available! This release includes a new shortcode for link cards, improved sidebar navigation, and more."
date: 2024-03-02T12:13:08+01:00
lastmod: 2024-03-02T12:13:08+01:00
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

Doks 1.4 is now available! This release includes a new shortcode for link cards, improved sidebar navigation, and more.

To upgrade an existing project, see the [Upgrade Doks](/docs/start-here/upgrade-doks/) guide.

<!-- omit in toc -->
## Highlights

- [Link cards shortcode](#link-cards-shortcode)
- [Improved sidebar navigation](#improved-sidebar-navigation)

## Link cards shortcode

You can now use the `{{</* link-card */>}}` shortcode to link prominently to different pages.

A `{{</* link-card */>}}` requires a `title` and an [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href) attribute. You can optionally include a short `description` or other link attributes such as `target`.

{{< link-card
  title="Showcase"
  description="Explore the infinite possibilities of Doks"
  href="/showcase/"
  target="_blank"
>}}

```md
{{</* link-card
  title="Showcase"
  description="Explore the infinite possibilities of Doks"
  href="/showcase/"
  target="_blank"
*/>}}
```

Read more about [link cards](https://getdoks.org/docs/basics/shortcodes/#link-cards) in our documentation.

## Improved sidebar navigation

By default, Doks will automatically generate a sidebar based on the filesystem structure of your documentation, using each file's `title` property as the sidebar entry.

For example, given the following file structure:

```md
.
└──content/
   └───docs/
       ├───guides/
       │   ├───_index.md
       │   └───example.md
       reference/
       │   ├───_index.md
       │   └───example.md
       └───_index.md
```

The following sidebar will be automatically generated:

{{< img src="images/section-navigation-light.png" alt="Section navigation light variant" class="img-lightmode border" >}}
{{< img src="images/section-navigation-dark.png" alt="Section navigation dark variant" class="img-darkmode border" >}}

Sections can be collapsed by default by setting the `collapsed` property to `true` in the frontmatter of a section’s `_index.md`.

Sidebar navigation is also available for other `docs` based sections you create. Read more about [sidebar navigation](https://getdoks.org/docs/basics/navigation/#sidebar) in our documentation.

<!-- omit in toc -->
## Bug Fixes

As always, additional bug fixes are included in this release. Check out the [release notes](https://github.com/thuliteio/doks-core/releases/tag/v1.4.0) to learn more.

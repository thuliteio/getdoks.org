---
title: "Page Frontmatter"
description: "Reference page frontmatter fields in Thulite content files, including metadata, draft state, ordering, and page-specific SEO options."
summary: "Reference page frontmatter fields in Thulite content files, including metadata, draft state, ordering, and page-specific SEO options."
date: 2026-03-25T13:02:07+01:00
lastmod: 2026-05-28T11:23:00+02:00
draft: false
weight: 417
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This reference guide describes page frontmatter fields in `./content/*.md` files.

## Example

```md {title="_index.md"}
---
title: "Welcome to Doks"
description: "Discover how the Doks Hugo theme helps you build fast, modern, and searchable documentation sites with a clean UI, dark mode, and powerful extras."
summary: "Congrats on setting up a new Doks project!"
date: 2023-09-07T16:33:54+02:00
lastmod: 2026-02-16T16:10:57+01:00
draft: false
weight: 999

type: "docs" # Reuse layouts/docs/{list,single}.html for this section and its child pages.

cascade:
  type: "docs"

params:
  toc: false
---
```

## title

The page title used in rendered content and metadata. A string — for example `"First Indexed Page"`.

## description

The page description used for metadata and previews. A string — default is `""` (recommended to set).

## summary

The short summary used in lists and cards. A string — default is `""` (recommended to set).

## date

The original publication date of the page. A datetime value.

## lastmod

The last modified date of the page. A datetime value.

## draft

Whether the page is excluded from production builds. A boolean — default is `true` in the archetype.

## weight

The sort order for pages within a section. A number — lower values sort first.

## type

The content type used to select the page layout. A string — for example `"docs"`.

## cascade

Frontmatter values inherited by descendant pages. An object containing the fields to apply to child pages.

<!-- markdownlint-disable MD024 -->

### type

The content type inherited by descendant pages. A string — for example `"docs"`.

<!-- markdownlint-enable MD024 -->

## params

### toc

Whether to show the table of contents on the page. A boolean — default is `true`.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Front matter" description="Official guide to front matter fields and formats in Hugo." href="https://gohugo.io/content-management/front-matter/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

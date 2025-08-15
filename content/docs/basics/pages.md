---
title: "Pages"
description: ""
summary: ""
date: 2025-08-01T08:19:56+02:00
lastmod: 2025-08-01T08:19:56+02:00
draft: false
weight: 250
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

## Add content

Doks is ready for you to add new content, or bring your existing files!

### File formats

Doks supports authoring content in Markdown and HTML with no configuration required. You can add support for Emacs Org-Mode, AsciiDoc, RST, and Pandoc by installing [additional parsers](https://gohugo.io/content-management/formats/#list-of-content-formats).

### Add pages

Add new pages to your site by creating `.md` or `.html` files in `content/docs/`. Use sub-folders to organize your files and to create multiple path segments.

For example, the following command will generate a page at `example.com/docs/guides/faq`:

```bash {frame="none"}
hugo new content docs/guides/faq.md
```

#### Frontmatter

All Doks pages share a customizable [common set of frontmatter properties](/docs/reference/frontmatter/) to control how the page appears — for documentation pages:

```md
---
title: "Example Guide"
description: ""
summary: ""
date: 2023-09-07T16:04:48+02:00
lastmod: 2023-09-07T16:04:48+02:00
draft: true
weight: 999
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---
```

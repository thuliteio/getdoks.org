---
title: "Project Structure"
description: ""
summary: ""
date: 2023-09-22T12:17:19+02:00
lastmod: 2023-09-22T12:17:19+02:00
draft: false
weight: 310
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

This guide will show you how a Doks project is organized and what the different files in your project do.

Doks projects generally follow the same file and directory structure as other Thulite projects. See [Thulite' project structure documentation](https://docs.thulite.io/basics/project-structure/) for more detail.

## Files and directories

- `config/_default/hugo.toml` — The Hugo/site configuration file.
- `config/_default/module.toml` — The Hugo mounts configuration file.
- `config/_default/params.toml` — The Doks + Thulite integrations (Images, Inline SVG, and SEO) configuration file.
- `content/` — Content files.
- `i18n/` (optional) — Translation data to support [internationalization](/docs/guides/i18n/),
- `assets/` — Assets (scripts, styles, images, etc.) for your project.
- `static/` — Static assets (fonts, favicon, PDFs, etc.) that will not be processed.

## Example project contents

A Doks project directory might look like this:

```bash {frame="none"}
.
├── assets/
├── config/
│   └───_default/
│       ├───hugo.toml
│       ├───menus.toml
│       ├───module.toml
│       └───params.toml
├── content/
│   └───docs/
│       ├───guides/
│       │   ├───_index.md
│       │   └───getting-started.md
│       └───_index.md
├── i18n/
├── layouts/
├── static/
└── package.json
```

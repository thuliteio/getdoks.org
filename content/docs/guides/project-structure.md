---
title: "Project Structure"
description: ""
summary: ""
date: 2023-09-22T12:17:19+02:00
lastmod: 2023-09-22T12:17:19+02:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "project-structure-d6552f67aec02a338ca05eb79bcda91a"
weight: 860
toc: true
---

This guide will show you how a Doks project is organized and what the different files in your project do.

Doks projects generally follow the same file and directory structure as other Hyas projects. See [Hyas' project structure documentation](https://docs.gethyas.com/guides/project-structure/) for more detail.

## Files and directories

- `config/_default/hyas/doks.toml` — The Doks configuration file.
- `config/_default/params.yml` — The integrations configuration file.
- `content/` — Content files.
- `i18n/` (optional) — Translation data to support [internationalization.](/guides/i18n/)
- `static/` — Static assets (fonts, favicon, PDFs, etc.) that will not be processed.
- `themes/my-doks-theme/`(optional) — Customizations for the [Doks Core](https://github.com/gethyas/doks-core) integration.

## Example project contents

A Doks project directory might look like this:

```bash
.
├── config/
│   └───_default/
│       ├───hyas/
│       │   └───doks.toml
│       ├───hugo.toml
│       ├───menus.toml
│       ├───module.toml
│       └───params.yml
├── content/
│   └───docs/
│       ├───guides/
│       │   ├───_index.md
│       │   └───getting-started.md
│       └───_index.md
├── i18n/
├── static/
├── themes/
│   └───my-doks-theme/
│       ├───assets/
│       └───layouts/
└── package.json
```

---
title: "Project Structure"
description: "Understand the Thulite project structure and where to place content, configuration, templates, assets, and static files for smooth workflows."
summary: "Understand the Thulite project structure and where to place content, configuration, templates, assets, and static files for smooth workflows."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 200
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Your project created with `create thulite` comes with a practical default structure.
This page explains what each top-level directory is for and where to put your files.

## At a glance

Thulite follows the Hugo [directory structure](https://gohugo.io/getting-started/directory-structure/).
Most projects include these key directories and files:

- `assets` - processed assets (styles, scripts, images)
- `config` - Hugo/Thulite/Doks configuration
- `content` - pages and section content
- `layouts` - templates, partials, and shortcodes
- `static` - files copied as-is to output
- `package.json` - npm dependencies and scripts

## Example tree

Typical starter structure:

{{< tree >}}

- {folder} assets
  - {folder} scss
    - {folder} common
      - {brand-sass} \_custom.scss
      - {brand-sass} \_variables-custom.scss
  - {png} favicon.png
  - {svg} favicon.svg
- {folder} config
  - {folder} \_default
    - {toml} hugo.toml
    - {toml} module.toml
    - {toml} params.toml
- {folder} content
  - {folder} docs
    - {folder} guides
      - {markdown} example.md
      - {markdown} \_index.md
    - {markdown} \_index.md
  - {markdown} \_index.md
- {folder} layouts
  - {html} home.html
- {folder} static
  - {png} cover.png
- {json} package.json

{{< /tree >}}

### `assets`

`favicon.png`, `favicon.svg`

Use `assets/` for files that should be bundled, transformed, or optimized.

#### `scss`

Storing styles in `assets/scss/` is conventional, but not required. Any stylesheet in `assets/` can be processed when imported correctly.

Put custom variables in `common/_variables-custom.scss` and custom styles in `common/_custom.scss`.

### `config`

#### `_default`

- `hugo.toml`: core [Hugo configuration](https://gohugo.io/configuration/all/)
- `module.toml`: [Hugo mounts](https://gohugo.io/configuration/module/#mounts), including links from `node_modules` to project directories
- `params.toml`: site-level [Doks settings](/docs/start-here/configuration/#update-parameters), including Thulite and integration options

### `content`

Use `content/` for [pages](/docs/basics/pages/), sections, and page bundles (including page resources).

### `layouts`

[Layouts](/docs/basics/layouts/) define shared page structure and rendering templates.

### `static`

Files in `static/` are copied to the output unchanged.

This is ideal for assets like fonts or icons, and special files like `robots.txt` and `manifest.webmanifest`.

You can place CSS and JavaScript here, but they will not be bundled or optimized.

{{< callout context="note" icon="bulb" >}}

As a rule, keep your own CSS and JavaScript in `assets/`.

{{< /callout >}}

### `package.json`

`package.json` defines dependencies and scripts such as `npm run dev` and `npm run build`.

You can use [dependencies and devDependencies](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file/). For most Thulite projects, placing packages in `dependencies` is a practical default.

---
title: "Configuration Structure"
description: "Understand the Thulite configuration layout, including default, environment-specific, and tooling files used to control build and site behavior."
summary: "Understand the Thulite configuration layout, including default, environment-specific, and tooling files used to control build and site behavior."
date: 2026-05-27T16:36:35+02:00
lastmod: 2026-05-28T11:23:00+02:00
draft: false
weight: 423
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Here's how a Thulite project configuration is organized, and the configuration files you will find in your new project.

## Example

A common Thulite project configuration directory might look like this:

{{< tree >}}

- {folder} config
  - {folder} \_default
    - {toml} hugo.toml
    - {toml} markup.toml
    - {toml} menus.toml
    - {toml} module.toml
    - {toml} params.toml
  - {folder} next
    - {toml} hugo.toml
    - {toml} params.toml
  - {folder} production
    - {toml} hugo.toml
    - {toml} params.toml
- {brand-javascript} babel.config.js
- {brand-javascript} postcss.config.js

{{< /tree >}}

## `config/_default/`

### `hugo.toml`

The `hugo.toml` file includes [Hugo configuration](https://gohugo.io/configuration/all/) options for your Thulite project. Here you can specify taxonomies to use, build options, server options, and more.

### `markup.toml`

The `markup.toml` file is where you [configure rendering](https://gohugo.io/configuration/markup/) of markup to HTML.

### `menus.toml`

The `menus.toml` file is where you [define menu entries](https://gohugo.io/content-management/menus/).

### `module.toml`

The `module.toml` file specifies the [Hugo mounts](https://gohugo.io/configuration/module/#mounts), logically linking `node_modules` directories to component folders (ex: `assets`, `layouts`) — making Thulite Integrations available in your Thulite project.

### `params.toml`

The `params.toml` file is where you set [Thulite configuration](/reference/configuration/) options like e.g. options for themes and integrations.

## `config/next/`

Overrides for your next environment.

## `config/production/`

Overrides for your production environment.

<!-- markdownlint-disable MD034 -->

{{< callout context="tip" icon="rocket" >}}
Set `baseurl` in `hugo.toml` to the absolute URL (protocol, host, path, and trailing slash) of your published site (e.g., https://www.example.org/docs/).
{{< /callout >}}

<!-- markdownlint-enable MD034 -->

## `babel.config.js`

The `babel.config.js` file is where you configure [Babel](https://babeljs.io/). Thulite supports processing JavaScript files with Babel.

## `postcss.config.js`

The `postcss.config.js` file is where you configure [PostCSS](https://postcss.org/). Thulite uses PostCSS to add vendor prefixes to CSS rules using [Autoprefixer](https://github.com/postcss/autoprefixer) and to remove unused CSS from your project using [PurgeCSS](https://purgecss.com/).

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Configuration" description="Overview of Hugo configuration concepts and file formats." href="https://gohugo.io/configuration/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

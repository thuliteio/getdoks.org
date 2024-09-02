---
title: "Installation"
description: ""
summary: ""
date: 2024-05-13T20:51:12+02:00
lastmod: 2024-05-13T20:51:12+02:00
draft: false
weight: 115
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Doks is a full-featured documentation theme built on top of the [Thulite](https://thulite.io/) framework. This guide will help you get started with a new project.

## Quick Start

### Create a new project

Create a new Thulite + Doks project by running the following command in your terminal:

{{< tabs "create-new-site" >}}
{{< tab "npm" >}}

```bash
npm create thulite@latest -- --template doks
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create thulite@latest --template doks
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create thulite@latest --template doks
```

{{< /tab >}}
{{< /tabs >}}

This will create a new [project directory](/docs/basics/project-structure/) with all the necessary files and configurations for your site.

{{< callout context="tip" title="See it in action" icon="outline/rocket" >}}
Try Doks in your browser: [open the template on Gitpod](https://gitpod.io/#https://github.com/thuliteio/doks).
{{< /callout >}}

### Install dependencies

`cd` into your new project directory and install the dependencies before continuing.

{{< tabs "install dependencies" >}}
{{< tab "npm" >}}

```bash
npm install
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn install
```

{{< /tab >}}
{{< /tabs >}}

### Start the development server

When working locally, [Hugo's development server](https://gohugo.io/commands/hugo_server/) lets you preview your work and automatically refreshes your browser when you make changes.

Inside your project directory, run the following command to start the development server:

{{< tabs "start-development-server" >}}
{{< tab "npm" >}}

```bash
npm run dev
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm dev
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn dev
```

{{< /tab >}}
{{< /tabs >}}

This will log a message to your terminal with the URL of your local preview. Open this URL to start browsing your site.

### Add content

Doks is ready for you to add new content, or bring your existing files!

#### File formats

Doks supports authoring content in Markdown and HTML with no configuration required. You can add support for Emacs Org-Mode, AsciiDoc, RST, and Pandoc by installing [additional parsers](https://gohugo.io/content-management/formats/#list-of-content-formats).

#### Add pages

Add new pages to your site by creating `.md` or `.html` files in `content/docs/`. Use sub-folders to organize your files and to create multiple path segments.

For example, the following command will generate a page at `example.com/docs/guides/faq`:

{{< tabs "create-new-page" >}}
{{< tab "npm" >}}

```bash
npm run create docs/guides/faq.md
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run create docs/guides/faq.md
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run create docs/guides/faq.md
```

{{< /tab >}}
{{< /tabs >}}

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
  noindex: false # false (default) or true
---
```

### Next steps

- **Configure**: Learn about common options in ["Customizing Doks"](/docs/guides/customization/).
- **Navigate**: Set up your sidebar with the ["Sidebar Navigation"](/docs/basics/navigation/#sidebar) guide.
- **Shortcodes**: Discover built-in callouts, tabs, and more in the ["Shortcodes"](/docs/basics/shortcodes/) guide.
- **Deploy**: Publish your work with the ["Deploy your site"](https://docs.thulite.io/guides/deploy/) guide in the Thulite docs.

## Updating Doks

Doks is a Thulite theme, and is updated like any `@thulite/*` theme (or integration):

{{< tabs "update-doks" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/doks-core@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade @thulite/doks-core --latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade @thulite/doks-core --latest
```

{{< /tab >}}
{{< /tabs >}}

See the [Doks changelog](https://github.com/thuliteio/doks-core/blob/main/CHANGELOG.md) for a full list of the changes made in each release.

## Troubleshooting Doks

Use the [project configuration](/docs/reference/configuration/) and [individual page frontmatter configuration](/docs/reference/frontmatter/) reference pages to ensure that your Doks site is configured and functioning properly. See the guides in the sidebar for help adding content and customizing your Doks site.

If your answer cannot be found in these docs, please visit the [full Thulite Docs](https://docs.thulite.io/) for complete Thulite documentation. Your question may be answered by understanding how Thulite works in general, underneath this Doks theme.

You can also check for any known [Doks issues on GitHub](https://github.com/thuliteio/doks/issues), and get help in [Doks Discussions](https://github.com/thuliteio/doks/discussions) from our active, friendly community!

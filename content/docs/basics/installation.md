---
title: "Installation"
description: "This guide covers creating a new project with the Thulite CLI, installing dependencies, and starting the development server."
summary: "This guide covers creating a new project with the Thulite CLI, installing dependencies, and starting the development server."
date: 2024-05-13T20:51:12+02:00
lastmod: 2025-07-28T12:00:00+02:00
draft: false
weight: 210
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

## Prerequisites

- Node.js —[latest LTS version](https://nodejs.org/en/download)
- Hugo —[latest extended version](https://github.com/gohugoio/hugo/releases/latest)

## Create a new project

The following commands will start an interactive CLI that guides you through the setup process. Choose the package manager you have installed:

{{< tabs "create-new-site" >}}
{{< tab "npm" >}}

```bash
npm create thulite@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create thulite
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create thulite
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun create thulite
```

{{< /tab >}}
{{< /tabs >}}

This will guide you through an interactive setup process where you'll select your project name, choose the Doks template, and pick your preferred variant. Follow the prompts as shown below:

{{< steps >}}
{{< step >}}

Enter your project name —this also is the installation directory

```txt {frame="none"}
│
◆  Project name:
│  thulite-project
└
```

{{< /step >}}
{{< step >}}

Select the Doks theme template

```txt {frame="none"}
◆  Select a template:
│  ● Doks theme
│  ○ Bolt theme
│  ○ Tailwind CSS starter
│  ○ Bootstrap starter
│  ○ Basic starter
└
```

{{< /step >}}
{{< step >}}

Select a variant

```txt {frame="none"}
◆  Select a variant:
│  ● With recommended integrations (SEO and Images)
└
```

{{< /step >}}
{{< step >}}

Scaffolding project

```txt {frame="none"}
◇  Scaffolding project in D:\TEST\thulite-project...
│
└  Done. Now run:

  cd thulite-project
  npm install
  npm run dev
```

{{< /step >}}
{{< /steps >}}

You'll now have a new [project directory](/docs/basics/project-structure/) with all the necessary files and configurations for your site.
{.mt-3}

## Install dependencies

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
{{< tab "bun" >}}

```bash
bun install
```

{{< /tab >}}
{{< /tabs >}}

## Start the development server

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
{{< tab "bun" >}}

```bash
bun dev
```

{{< /tab >}}
{{< /tabs >}}

This will log a message to your terminal with the URL of your local preview. Open this —clickable— URL to start browsing your site.

```txt {frame="none"}
Watching for changes in D:\TEST\thulite-project\{assets,content,layouts,node_modules,package.json,static}
Watching for config changes in D:\TEST\thulite-project\config\_default, D:\TEST\thulite-project\config\_default\menus
Start building sites …
hugo v0.148.1-98ba786f2f5dca0866f47ab79f394370bcb77d2f+extended windows/amd64 BuildDate=2025-07-11T12:56:21Z VendorInfo=gohugoio


                  │ EN
──────────────────┼────
 Pages            │ 28
 Paginator pages  │  0
 Non-page files   │  0
 Static files     │ 17
 Processed images │  4
 Aliases          │  4
 Cleaned          │  0

Built in 480 ms
Environment: "development"
Serving pages from disk
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

<!--
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
-->

## Next steps

- **Configure**: Learn about common options in [Customizing Doks](/docs/guides/customization/).
- **Navigate**: Set up your sidebar with the [Sidebar Navigation](/docs/basics/navigation/#sidebar) guide.
- **Shortcodes**: Discover built-in callouts, tabs, and more in the [Shortcodes](/docs/basics/shortcodes/) guide.
- **Deploy**: Publish your work with the [Deploy your site](https://docs.thulite.io/guides/deploy/) guide in the Thulite docs.

<!--
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
pnpm update @thulite/doks-core@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade @thulite/doks-core@latest
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun add @thulite/doks-core@latest
```

{{< /tab >}}
{{< /tabs >}}

See the [Doks release notes](https://github.com/thuliteio/doks-core/releases) for a full list of the changes made in each release.

Our [Upgrade Doks](/docs/start-here/upgrade-doks/) has step-by-step instructions for upgrading Doks.
-->

<!--
## Troubleshooting Doks

Use the [project configuration](/docs/reference/configuration/) and [individual page frontmatter configuration](/docs/reference/frontmatter/) reference pages to ensure that your Doks site is configured and functioning properly. See the guides in the sidebar for help adding content and customizing your Doks site.

If your answer cannot be found in these docs, please visit the [full Thulite Docs](https://docs.thulite.io/) for complete Thulite documentation. Your question may be answered by understanding how Thulite works in general, underneath this Doks theme.

You can also check for any known [Doks issues on GitHub](https://github.com/thuliteio/doks/issues), and get help in [Doks Discussions](https://github.com/thuliteio/doks/discussions) from our active, friendly community!
-->

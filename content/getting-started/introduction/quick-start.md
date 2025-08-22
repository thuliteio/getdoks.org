---
title: "Quick Start"
description: "Doks is a modern documentation theme for Hugo. In this quick start, you’ll install Doks, create your first page, and run your site locally — in under 5 minutes."
summary: "Doks is a modern documentation theme for Hugo. In this quick start, you’ll install Doks, create your first page, and run your site locally — in under 5 minutes."
date: 2023-09-12T12:07:48+02:00
lastmod: 2025-07-28T12:00:00+02:00
draft: false
weight: 110
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

{{< callout context="tip" title="Try it online" icon="outline/rocket" >}}

Want to explore before installing? Try Doks directly in your browser with [CodeSandbox](https://codesandbox.io/p/sandbox/github/thuliteio/doks?on=codesandbox) or [Gitpod](https://gitpod.io/#https://github.com/thuliteio/doks).

{{< /callout >}}

## Prerequisites

- Node.js —[latest LTS version](https://nodejs.org/en/download)
- Hugo —[latest extended version](https://github.com/gohugoio/hugo/releases/latest)

{{< callout context="note" title="System requirements" icon="outline/info-circle" >}}

Need specific version details? Check our [full system requirements](/docs/help/requirements/) for complete compatibility information.

{{< /callout >}}

## Install Doks

Choose your preferred package manager and run the command to scaffold a new Doks project with all the necessary files and dependencies:

{{< tabs "create-new-site" >}}
{{< tab "npm" >}}

```bash
npm create thulite@latest my-project -- --template doks
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create thulite my-project --template doks
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create thulite my-project --template doks
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun create thulite my-project --template doks
```

{{< /tab >}}
{{< /tabs >}}

After running the command, you'll see output similar to this.

```txt {frame="none"}
> npx
> create-thulite my-project doks

│
◇  Scaffolding project in D:\TEST\my-project...
│
└  Done. Now run:

  cd my-project
  npm install
  npm run dev

```

Follow the instructions in your terminal to install your project's dependencies and start your development server.

This will log a message to your terminal with the URL of your local preview. Open this—clickable—URL to start browsing your site.

{{< preview >}}

{{< img lqip="16x webp q20" loading="lazy" src="images/doks-screenshot.jpg" alt="Doks screenshot" >}}

{{< /preview >}}

{{< callout context="note" title="Need more help?" icon="outline/info-circle" >}}

For a more guided experience, check out our detailed [Installation guide](/docs/basics/installation/) with step-by-step instructions using the CLI wizard.

{{< /callout >}}

## Project Structure

{{< tree >}}

- {folder} assets/
- {folder} config/
  - {folder} _default/
    - {toml} hugo.toml
    - {toml} menus.toml
    - {toml} params.toml
- {folder} content/
  - {markdown} _index.md
- {folder} layouts/
- {folder} static/
- {json} package.json

{{< /tree >}}

## Quick links

{{< card-grid >}}
{{< card title="Learn Doks" icon="outline/book" color="yellow" >}}

- [Project structure](/docs/basics/project-structure/)
- [Configuration](/docs/basics/configuration/)
- [Deploy](https://docs.thulite.io/guides/deploy/)

{{< /card >}}
{{< card title="Extend Doks" icon="outline/puzzle" color="purple" >}}

- [Analytics](https://docs.thulite.io/guides/analytics/)
- [CMS](https://docs.thulite.io/guides/cms/)
- [DocSearch](/docs/recipes/docsearch/)

{{< /card >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< card title="What's going on?" icon="outline/info-circle" color="green" >}}

- [Roadmap 2024](https://github.com/orgs/thuliteio/discussions/462)
- [Discussions](https://github.com/thuliteio/doks/discussions)
- [Blog](/blog/)

{{< /card >}}
{{< card title="Other docs" icon="outline/books" color="red" >}}

- [Thulite](https://docs.thulite.io/)
- [Images](https://images.thulite.io/)
- [SEO](https://seo.thulite.io/)

{{< /card >}}
{{< /card-grid >}}

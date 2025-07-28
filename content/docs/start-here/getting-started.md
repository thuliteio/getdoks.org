---
title: "Getting Started"
description: ""
summary: ""
date: 2023-09-12T12:07:48+02:00
lastmod: 2025-07-28T12:00:00+02:00
draft: false
weight: 110
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Doks is a full-featured documentation theme built on top of the [Thulite](https://thulite.io/) framework. Here you'll find guides, resources, and references to help you build with Doks.

{{< callout context="tip" title="See it in action" icon="outline/rocket" >}}
Try Doks in your browser: [open in CodeSandbox](https://codesandbox.io/p/sandbox/github/thuliteio/doks?on=codesandbox) or [open in Gitpod](https://gitpod.io/#https://github.com/thuliteio/doks).
{{< /callout >}}

## Quick Start

Need to create a new documentation site? The commands below will scaffold a new Doks project with all the necessary files and dependencies to get you started quickly. Just choose your preferred package manager:

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

Our [Installation Guide](/docs/start-here/installation/) has step-by-step instructions for installing Doks using our CLI wizard.

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

---
title: "Pages"
description: "Create and organize Thulite pages with regular files, leaf bundles, and branch bundles while controlling URL structure through content paths."
summary: "Create and organize Thulite pages with regular files, leaf bundles, and branch bundles while controlling URL structure through content paths."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 205
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Pages are content files in the `content/` directory of your Thulite project.

In Hugo (and therefore Thulite), each content file becomes a page. The file path and filename determine the URL, while layouts determine how that page is rendered.

## How pages map to URLs

Some common patterns:

- `content/about.md` -> `/about/`
- `content/docs/getting-started.md` -> `/docs/getting-started/`
- `content/docs/_index.md` -> `/docs/` (the section page)
- `content/_index.md` -> `/` (the home page)

## Create new content

Use the [`create` command](/reference/commands/#create) to scaffold content from your archetypes.

{{< callout context="note" icon="info-circle" >}}

Paths are relative to the `content/` directory.

{{< /callout >}}

### Examples

Create a regular page:

{{< tabs "create-regular-page" >}}
{{< tab "npm" >}}

```bash
npm run create about.md
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run create about.md
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run create about.md
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run create about.md
```

{{< /tab >}}
{{< /tabs >}}

Create a page using a [leaf bundle](https://gohugo.io/content-management/page-bundles/#leaf-bundles):

{{< tabs "create-leaf-bundle" >}}
{{< tab "npm" >}}

```bash
npm run create about/index.md
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run create about/index.md
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run create about/index.md
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run create about/index.md
```

{{< /tab >}}
{{< /tabs >}}

Create a section (or home page) using a [branch bundle](https://gohugo.io/content-management/page-bundles/#branch-bundles):

{{< tabs "create-branch-bundle" >}}
{{< tab "npm" >}}

```bash
npm run create docs/_index.md
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run create docs/_index.md
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run create docs/_index.md
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run create docs/_index.md
```

{{< /tab >}}
{{< /tabs >}}

To create the home page itself, use `_index.md` at the content root:

{{< tabs "create-home-page" >}}
{{< tab "npm" >}}

```bash
npm run create _index.md
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run create _index.md
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run create _index.md
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run create _index.md
```

{{< /tab >}}
{{< /tabs >}}

## Learn more

Thulite leverages Hugo's [content management](https://gohugo.io/content-management/). Start with these topics:

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Content organization" description="Organize your content in a manner that reflects the rendered website." href="https://gohugo.io/content-management/organization/" target="_blank" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Page bundles" description="Use page bundles to logically associate one or more resources with content." href="https://gohugo.io/content-management/page-bundles/" target="_blank" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Content formats" description="Create your content using multiple content formats." href="https://gohugo.io/content-management/formats/" target="_blank" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Front matter" description="Use front matter to add metadata to your content." href="https://gohugo.io/content-management/front-matter/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

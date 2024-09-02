---
title: "Doks 1.6"
url: "/blog/doks-1-6/"
description: "Doks 1.6 is out! This release includes a new Hugo requirement, an improved scripts setup, new development tools, and more."
summary: "Doks 1.6 is out! This release includes a new Hugo requirement, an improved <code>scripts</code> setup, new development tools, and more."
date: 2024-05-16T09:03:10+02:00
lastmod: 2024-05-16T09:03:10+02:00
draft: false
weight: 50
categories: []
tags: []
contributors: ["Henk Verlinde"]
pinned: false
homepage: false
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Doks 1.6 is out! This release includes a new Hugo requirement, an improved `scripts` setup, new development tools, and more.

To upgrade an existing project, see the [Upgrade Doks](/docs/start-here/upgrade-doks/) guide.

<!-- omit in toc -->
## Highlights

- [New Hugo requirement](#new-hugo-requirement)
- [Improved `scripts` setup](#improved-scripts-setup)
- [New development tools](#new-development-tools)

## New Hugo requirement

Doks 1.6 now requires you to have the [latest Hugo extended version](https://github.com/gohugoio/hugo/releases/latest) installed globally on your system. See Hugo's documentation for [installation](https://gohugo.io/installation/) instructions.

## Improved `scripts` setup

Doks 1.6 introduces a cleaner `scripts` section in your projects' `package.json`:

```json
{
  "name": "doks",
  "version": "0.0.0",
  "description": "Doks theme",
  "author": "Thulite",
  "license": "MIT",
  "scripts": {
    "create": "hugo new",
    "dev": "hugo server --disableFastRender --noHTTPCache",
    "format": "prettier **/** -w -c",
    "build": "hugo --minify --gc",
    "preview": "vite preview --outDir public"
  },
  "dependencies": {
    "@thulite/doks-core": "^1.6.1",
    "@thulite/images": "^3.2.0",
    "@thulite/inline-svg": "^1.1.0",
    "@thulite/seo": "^2.3.0",
    "@tabler/icons": "^3.2.0",
    "gethyas": "^2.4.2"
  },
  "devDependencies": {
    "prettier": "^3.2.5",
    "vite": "^5.2.10"
  },
  "engines": {
    "node": ">=20.11.0"
  }
}

```

## New development tools

Thulite/Doks now uses [Prettier](https://prettier.io/) as a code formatter and [Vite](https://vitejs.dev/) to preview your project's build. You can configure Prettier in the `.prettierrc.yaml` and `.prettierignore` files in the root of your project. With Vite, when you use the `--host` flag, you can preview the build on your local network — for example on your mobile phone — here's how:

{{< tabs "create-new-site" >}}
{{< tab "npm" >}}

```bash
npm run build -- --baseURL=/ && npm run preview -- --host
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm build --baseURL=/ && pnpm preview --host
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run build --baseURL=/ && yarn run preview --host
```

{{< /tab >}}
{{< /tabs >}}

<!-- omit in toc -->
## Bug Fixes

Doks 1.6 also includes several bug fixes. Check out the [release notes](https://github.com/thuliteio/doks-core/releases/tag/v1.6.0) to learn more.

---
title: "Upgrade to v1"
description: ""
summary: ""
date: 2023-09-22T16:15:46+02:00
lastmod: 2023-09-22T16:15:46+02:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "upgrade-to-v1-0759044a0c123f8852d4a7b22b02838e"
weight: 805
toc: true
---

This guide will walk you through the steps to manually migrate from Doks v0.5 to Doks v1.

## Upgrading

You can upgrade your project by following the steps below.

### 1. Clean dependencies

Clean dependencies currently installed to avoid conflicts.

{{< tabs "clean-dependencies" >}}
{{< tab "npm" >}}

```bash
npm run clean:install
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run clean:install
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run clean:install
```

{{< /tab >}}
{{< /tabs >}}

### 2. Update `package.json`

Replace the contents of your project's `package.json` with the following:

```json
{
  "name": "doks",
  "version": "0.0.0",
  "description": "Doks theme",
  "author": "Hyas",
  "license": "MIT",
  "scripts": {
    "dev": "exec-bin node_modules/.bin/hugo/hugo server --bind=0.0.0.0 --disableFastRender --baseURL=http://localhost --noHTTPCache",
    "dev:drafts": "exec-bin node_modules/.bin/hugo/hugo server --bind=0.0.0.0 --disableFastRender --baseURL=http://localhost --noHTTPCache --buildDrafts",
    "create": "exec-bin node_modules/.bin/hugo/hugo new",
    "lint": "npm run lint:markdown",
    "lint:scripts": "eslint --cache themes/doks/assets/js",
    "lint:styles": "stylelint --cache \"themes/doks/assets/scss/**/*.{css,sass,scss}\"",
    "lint:markdown": "markdownlint-cli2 \"*.md\" \"content/**/*.md\"",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "exec-bin node_modules/.bin/hugo/hugo --minify",
    "preview": "http-server --gzip --brotli --ext=html --cors",
    "clean": "npm run clean:build && npm run clean:lint && npm run clean:install",
    "clean:build": "shx rm -rf public resources .hugo_build.lock",
    "clean:install": "shx rm -rf node_modules package-lock.json yarn.lock pnpm-lock.yaml",
    "clean:lint": "shx rm -rf .eslintcache .stylelintcache",
    "preinfo": "npm version",
    "info": "npm list",
    "postinfo": "exec-bin node_modules/.bin/hugo/hugo version",
    "postinstall": "shx rm -rf node_modules/.bin/hugo && shx mkdir node_modules/.bin/hugo && shx cp node_modules/gethyas/node_modules/.bin/hugo/* node_modules/.bin/hugo"
  },
  "engines": {
    "node": ">=16.12.0"
  }
}
```

### 3. Install Doks

First, add an `.npmrc` file to your project root with the following:

```ini
enable-pre-post-scripts = true
auto-install-peers = true
node-linker = hoisted
prefer-symlinked-executables = false
```

Next, install the latest version of Doks in your project.

{{< tabs "install-doks" >}}
{{< tab "npm" >}}

```bash
npm install @hyas/doks-core@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install @hyas/doks-core@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @hyas/doks-core@latest
```

{{< /tab >}}
{{< /tabs >}}

{{< callout context="note" title="Need to continue?" icon="info-circle" >}}
After upgrading Doks to the latest version, you may not need to make any changes to your project at all!

But, if you notice errors or unexpected behavior, please check below for what has changed that might need updating in your project.
{.mb-0}
{{< /callout >}}

## Configuration

Update your configuration files for the integrations included in Doks v1:

- [Bootstrap](https://github.com/gethyas/bootstrap/blob/main/README.md)
- [Images](https://github.com/gethyas/images/blob/main/README.md)
- [Inline SVG](https://github.com/gethyas/inline-svg/blob/main/README.md)
- [SEO](https://github.com/gethyas/seo/blob/main/README.md)

## Known Issues

### ENOENT

When you get an `ENOENT` error message, clean and reinstall your projects' dependencies:

{{< tabs "reinstall-doks" >}}
{{< tab "npm" >}}

```bash
npm run clean:install && npm install
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run clean:install && pnpm install
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run clean:install && yarn install
```

{{< /tab >}}
{{< /tabs >}}

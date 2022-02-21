---
title: "1. Start New Project"
description: "Create a new site, change directories, install dependencies, and start development server."
lead: "Create a new site, change directories, install dependencies, and start development server."
date: 2020-11-30T14:24:13+01:00
lastmod: 2020-11-30T14:24:13+01:00
draft: false
images: []
menu:
  tutorial:
    parent: "tutorial"
weight: 030
toc: true
---

## Create a new site

Doks is available as a child theme and a starter theme.

### Child theme

- Intended for novice to intermediate users
- Intended for minor customizations
- [Easily update npm packages]({{< relref "how-to-update" >}}) — __including__ [Doks](https://www.npmjs.com/package/@hyas/doks)

```bash
git clone https://github.com/h-enk/doks-child-theme.git my-doks-site
```

### Starter theme

- Intended for intermediate to advanced users
- Intended for major customizations
- [Easily update npm packages]({{< relref "how-to-update" >}})

```bash
git clone https://github.com/h-enk/doks.git my-doks-site
```

{{< img-simple src="git-clone.gif" alt="git clone" >}}

{{< details "Help me choose" >}}
Not sure which one is for you? Pick the child theme.
{{< /details >}}

## Change directories

```bash
cd my-doks-site
```

## Install dependencies

```bash
npm install
```

Installing dependencies can take a minute. Warnings can be ignored.

## Start development server

```bash
npm run start
```

{{< img-simple src="npm-run-start.gif" alt="git clone" >}}

Doks will start the Hugo development webserver accessible by default at `http://localhost:1313`. Saved changes will live reload in the browser.

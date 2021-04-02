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

Doks is available as a child theme, and a starter theme:

- Use the Doks child theme, if you do __not__ plan to customize a lot, and/or need future Doks updates.
- Use the Doks starter theme, if you plan to customize a lot, and/or do __not__ need future Doks updates.

Not quite sure? Use the Doks child theme.

### Doks child theme

{{< btn-copy text="git clone https://github.com/h-enk/doks-child-theme.git my-doks-site" >}}

```bash
git clone https://github.com/h-enk/doks-child-theme.git my-doks-site
```

### Doks starter theme

{{< btn-copy text="git clone https://github.com/h-enk/doks.git my-doks-site" >}}

```bash
git clone https://github.com/h-enk/doks.git my-doks-site
```

{{< img-simple src="git-clone.gif" alt="git clone" >}}

## Change directories

{{< btn-copy text="cd my-doks-site" >}}

```bash
cd my-doks-site
```

## Install dependencies

{{< btn-copy text="npm install" >}}

```bash
npm install
```

Installing dependencies can take a minute. Warnings can be ignored.

## Start development server

{{< btn-copy text="npm run start" >}}

```bash
npm run start
```

{{< img-simple src="npm-run-start.gif" alt="git clone" >}}

Doks will start the Hugo development webserver accessible by default at `http://localhost:1313`. Saved changes will live reload in the browser.

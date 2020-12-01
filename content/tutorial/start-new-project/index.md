---
title: "1. Start New Project"
description: "Create a new site, change directories, install npm packages, and start development server."
lead: "Create a new site, change directories, install npm packages, and start development server."
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

### Create a new site

{{< btn-copy text="git clone https://github.com/h-enk/doks.git my-doks-site" >}}

```bash
git clone https://github.com/h-enk/doks.git my-doks-site
```

{{< img-simple src="git-clone.gif" alt="git clone" >}}

### Change directories

{{< btn-copy text="cd my-doks-site" >}}

```bash
cd my-doks-site
```

### Install npm packages

{{< btn-copy text="npm install" >}}

```bash
npm install
```

Installing npm packages can take a minute. Warnings can be ignored.

### Start development server

{{< btn-copy text="npm run start" >}}

```bash
npm run start
```

{{< img-simple src="npm-run-start.gif" alt="git clone" >}}

Doks will start the Hugo development webserver accessible by default at `http://localhost:1313`. Saved changes will live reload in the browser.

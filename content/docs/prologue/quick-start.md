---
title: "Quick Start"
description: ""
lead: "This quick start is intended for intermediate to advanced users."
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu: 
  docs:
    parent: "prologue"
weight: 020
toc: true
---

{{< alert icon="👉" text="For a gentler intro to Doks, <a href=\"\">head to the tutorial</a>." >}}

## Requirements

{{< alert icon="👉" text="Node.js is needed to install npm packages and run commands." >}}

Make sure all dependencies have been installed:

- [Hugo](https://gohugo.io/getting-started/installing/) >= 0.75.0/extended
- [Node.js](https://nodejs.org/) >= 14.15.0

## Create a new site

```bash
git clone https://github.com/h-enk/doks.git my-doks-site
```

## Change directories into site folder

```bash
cd my-doks-site
```

## Install npm packages

```bash
npm install
```

## Start development server

```bash
npm run start
```

Doks will start the Hugo live reloading development environment accessible by default at `http://localhost:1313`.

Try editing the home page in `.\layouts\index.html`. Saved changes will live reload in the browser.

## Other commands

Doks comes with [commands for most used tasks]({{< ref "commands" >}}).

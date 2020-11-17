---
title: "Prerequisites"
description: "To get started with Doks, make sure all dependencies have been installed."
lead: "To get started with Doks, make sure all dependencies have been installed."
date: 2020-11-12T13:21:50+01:00
lastmod: 2020-11-12T13:21:50+01:00
draft: false
images: []
menu: 
  docs:
    parent: "tutorial"
weight: 110
toc: true
---

{{< alert icon="👉" text="Node.js is needed to install npm packages and run commands." >}}

Doks requires:

- [Hugo](https://gohugo.io/getting-started/installing/) >= 0.75.0/extended
- [Node.js](https://nodejs.org/) >= 14.15.0

## Hugo

{{< alert icon="👉" text="The `extended` version is needed for `scss` processing support." >}}

Visit the [Hugo site](https://gohugo.io/getting-started/installing/) and follow the instructions to download and install Hugo for your operating system.

### Check Hugo install

```bash
hugo version
```

## Node.js

{{< alert icon="👉" text="npm is installed with Node.js." >}}

Visit the [Node.js site](https://nodejs.org/) and follow the instructions to download and install the recommended version for your operating system.

### Check Node.js install

```bash
node -v
```

### Check npm install

```bash
npm -v
```

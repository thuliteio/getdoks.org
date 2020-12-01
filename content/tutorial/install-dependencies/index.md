---
title: "0. Install Dependencies"
description: "Install Hugo and Node.js to get started with Doks."
lead: "Install Hugo and Node.js to get started with Doks."
date: 2020-11-18T08:20:35+01:00
lastmod: 2020-11-18T08:20:35+01:00
draft: false
images: []
menu: 
  tutorial:
    parent: "tutorial"
weight: 020
toc: true
---

{{< alert icon="👉" text="Node.js is needed to install npm packages and run commands." >}}

Doks requires:

- [Hugo](https://gohugo.io/getting-started/installing/) >= 0.75.0/extended
- [Node.js](https://nodejs.org/) >= 14.15.0

## Hugo

{{< alert icon="👉" text="The `extended` version is needed for `SCSS` processing support." >}}

Visit the [Hugo site](https://gohugo.io/getting-started/installing/) and follow the instructions to download and install Hugo for your operating system.

### Check Hugo install

{{< btn-copy text="hugo version" >}}

```bash
hugo version
```

{{< img-simple src="hugo-version.png" alt="hugo version" >}}

## Node.js

{{< alert icon="👉" text="npm is installed with Node.js." >}}

Visit the [Node.js site](https://nodejs.org/) and follow the instructions to download and install the recommended version for your operating system.

### Check Node.js install

{{< btn-copy text="node --version" >}}

```bash
node --version
```

### Check npm install

{{< btn-copy text="npm --version" >}}

```bash
npm --version
```

{{< img-simple src="node-npm-version.png" alt="node npm version" >}}

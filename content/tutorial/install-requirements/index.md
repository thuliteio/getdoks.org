---
title: "0. Install Requirements"
description: "Install Git and Node.js to get started with Doks."
lead: "Install Git and Node.js to get started with Doks."
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

## Git

Install the latest source release of [Git](https://git-scm.com/).

### Check Git install

```bash
git --version
```

## Node.js

Install the latest LTS version or newer of [Node.js](https://nodejs.org/).

{{< details "Why Node.js?" >}}
Doks uses npm (included with Node.js) to centralize dependency management, making it [easy to update]({{< relref "how-to-update" >}}) resources, build tooling, plugins, and build scripts.
{{< /details >}}

### Check Node.js install

```bash
node --version
```

### Check npm install

```bash
npm --version
```

---
title: "0. Install Requirements"
description: "Install Node.js to get started with Doks."
lead: "Install Node.js to get started with Doks."
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

## Node.js

Doks uses npm to centralize dependency management, making it [easy to update]({{< relref "how-to-update" >}}) resources, build tooling, plugins, and build scripts:

- Download and install [Node.js](https://nodejs.org/) (it includes npm) for your platform.

{{< alert icon="👉" text="Check that you minimally have installed the <strong>latest</strong> long term support (LTS) version of <a href=\"https://nodejs.org/\">Node.js</a>, by running <code>node --version</code> in your terminal." />}}

### Check Node.js install

```bash
node --version
```

### Check npm install

```bash
npm --version
```

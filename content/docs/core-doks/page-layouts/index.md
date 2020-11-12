---
title: "Page Layouts"
description: "Build pages with a landing page, blog, or documentation layout. Add custom sections and components to suit your needs."
lead: "Build pages with a landing page, blog, or documentation layout. Add custom sections and components to suit your needs."
date: 2020-11-10T11:38:43+01:00
lastmod: 2020-11-10T11:38:43+01:00
draft: false
images: []
menu: 
  docs:
    parent: "core-doks"
weight: 280
toc: true
---


## Documentation

{{< img src="screen.png" alt="Page Layouts" class="border rounded p-1" >}}

### main
The main section contains the page content and an _Edit this page on GitHub_ link.

{{< alert icon="👉" text="Set `docsRepo` in `./config/_default/params.toml`." >}}

### toc
A table of contents is automatically generated from the headings of the main section of a page.

{{< alert icon="💡" text="Disable the toc by setting it to false in the front matter of a page." >}}


### nav
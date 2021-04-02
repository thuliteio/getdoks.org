---
title: "Breadcrumb Navigation"
description: "How to add breadcrumb navigation to your Doks website."
lead: "How to add breadcrumb navigation to your Doks website."
date: 2021-04-02T15:14:38+02:00
lastmod: 2021-04-02T15:14:38+02:00
draft: false
images: []
menu:
  docs:
    parent: "extensions"
weight: 410
toc: true
---

## Enable

Breadcrumb navigation support is switched off per default. Activate it by setting `breadCrumb = true` in `./config/_default/params.toml`.

## Example

{{< img-simple src="breadcrumb-navigation.png" alt="Breadcrumb Navigation" class="border-0" >}}

### HTML

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="https://getdoks.org/">Home</a></li>
    <li class="breadcrumb-item"><a href="https://getdoks.org/docs/">Docs</a></li>
    <li class="breadcrumb-item"><a href="https://getdoks.org/docs/prologue/">Prologue</a></li>
    <li class="breadcrumb-item active" aria-current="page">Introduction</li>
  </ol>
</nav>
```

_Note, this is an optional user breadcrumb trail — next to the already implemented JSON-LD for [rich results](https://developers.google.com/search/docs/data-types/breadcrumb)._

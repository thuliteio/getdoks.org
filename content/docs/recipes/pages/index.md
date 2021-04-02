---
title: "Pages"
description: "Add a default page, documentation page, blog post or contributor page. Customize the homepage and 404 page."
lead: "Add a default page, documentation page, blog post or contributor page. Customize the homepage and 404 page."
date: 2020-11-23T11:55:16+01:00
lastmod: 2020-11-23T11:55:16+01:00
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 130
toc: true
---

```bash
..
├── blog/
│   ├── say-hello-to-doks/
│   │   ├── index.md
│   │   └── say-hello-to-doks.png
│   └── _index.md
├── about/
│   └── index.md
├── contributors/
│   ├── henk-verlinde/
│   │   └── _index.md
│   └── _index.md
├── docs/
│   ├── help/
│   │   ├── _index.md
│   │   └── faq.md
│   ├── prologue/
│   │   ├── _index.md
│   │   ├── commands.md
│   │   └── introduction.md
│   └── _index.md
└── _index.md
```

See also the Hugo docs: [Content Organization](https://gohugo.io/content-management/organization/).

## Add a default page

### Example

```bash
npm run create about/index.md
```

## Add a documentation page

### Example

```bash
npm run create docs/prologue/introduction.md
```

## Add a blog post

### Example

```bash
npm run create blog/say-hello-to-doks/index.md
```

## Add a contributor page

### Example

```bash
npm run create contributors/henk-verlinde/_index.md
```

## Customize homepage

See: [Page Layouts]({{< relref "page-layouts" >}}).

## Customize 404 page

See: [Page Layouts]({{< relref "page-layouts" >}}).

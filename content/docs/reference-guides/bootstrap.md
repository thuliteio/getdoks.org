---
title: "Bootstrap"
description: "Build robust, flexible, and intuitive websites with Bootstrap 5. Easily customize your Doks site with the source Sass files."
lead: "Build robust, flexible, and intuitive websites with Bootstrap 5. Easily customize your Doks site with the source Sass files."
date: 2020-09-21T16:00:43+02:00
lastmod: 2020-09-21T16:00:43+02:00
draft: false
images: []
menu:
  docs:
    parent: "reference-guides"
weight: 350
toc: true
---

## Tables

{{< alert icon="💡" text="<a href=\"https://www.tablesgenerator.com/markdown_tables\">Tables Generator</a> is a handy tool to generate tables in Markdown format." />}}

Doks supports [Bootstrap styling](https://getbootstrap.com/docs/5.0/content/tables/) for tables in markdown.

### Example

#### Markdown

```md
| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
{.table-striped}
```

#### HTML

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
{.table-striped}

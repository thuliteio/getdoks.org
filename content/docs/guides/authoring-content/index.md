---
title: "Authoring Content in Markdown"
description: ""
summary: ""
date: 2023-09-12T16:10:28+02:00
lastmod: 2023-09-12T16:10:28+02:00
draft: false
menu:
  docs:
    parent: ""
    identifier: "authoring-content-c8eb05af83475c21365e023a6eee3ef0"
weight: 510
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
slug: "authoring-content"
---

Doks supports the full range of [Markdown](https://daringfireball.net/projects/markdown/) syntax in `.md` files as well as frontmatter [YAML](https://yaml.org/spec/1.2.2/), [TOML](https://toml.io/en/), or [JSON](https://www.json.org/json-en.html) to define metadata such as a title and description.

## Inline styles

Text can be **bold**, _italic_, or ~~strikethrough~~.

```md
Text can be **bold**, _italic_, or ~~strikethrough~~.
```

You can [link to another page](/docs/start-here/getting-started/).

```md
You can [link to another page](/docs/start-here/getting-started/).
```

You can highlight `inline code` with backticks.

```md
You can highlight `inline code` with backticks.
```

## Images

Images in Doks use [Hyas' Images integration](https://images.gethyas.com/).

Hyas Images supports the [Markdown syntax for displaying images](https://www.markdownguide.org/basic-syntax/#images-1) that includes alt-text for screen readers and assistive technology.

![A small bird standing on the ground next to a body of water](vincent-van-zalinge-ip3v0lN8rQg-unsplash.jpg)

```md
![A small bird standing on the ground next to a body of water](vincent-van-zalinge-ip3v0lN8rQg-unsplash.jpg)
```

You can [store your images](https://images.gethyas.com/docs/guides/resources/) as a page resource, global resource, or remote resource.

## Headings

You can structure content using a heading. Headings in Markdown are indicated by a number of `#` at the start of the line.

### How to structure page content in Doks

Doks is configured to automatically use your page title as a top-level heading. We recommend starting each page with regular paragraph text content and using on-page headings from `<h2>` and down:

```md
---
title: Markdown Guide
description: How to use Markdown in Doks
---

This page describes how to use Markdown in Doks.

## Inline Styles

## Headings
```

### Automatic heading anchor links

Using headings in Markdown will automatically give you anchor links so you can link directly to certain sections of your page:

```md
---
title: My page of content
description: How to use Doks' built-in anchor links
---

## Introduction

I can link to [my conclusion](#conclusion) lower on the same page.

## Conclusion

`https://my-site.com/page1/#introduction` navigates directly to my Introduction.

```

Level 2 (`<h2>`) and Level 3 (`<h3>`) headings will automatically appear in the page table of contents.

## Blockquotes

> This is a blockquote, which is commonly used when quoting another person or document.
>
> Blockquotes are indicated by a `>` at the start of each line.

```md
> This is a blockquote, which is commonly used when quoting another person or document.
>
> Blockquotes are indicated by a `>` at the start of each line.
```

## Code blocks

A code block is indicated by a block with three backticks `` ``` `` at the start and end. You can indicate the programming language being used after the opening backticks.

```go
// Go code with syntax highlighting.
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

````md
```go
// Go code with syntax highlighting.
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```
````

```md
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

## Other common Markdown features

Doks supports all other Markdown authoring syntax, such as lists and tables. See [Markdown Basic Syntax](/docs/reference/markdown-basic-syntax/) and [Markdown Extended Syntax](/docs/reference/markdown-extended-syntax/) for a quick overview of all the Markdown syntax elements.

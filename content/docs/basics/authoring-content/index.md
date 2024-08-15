---
title: "Authoring Content"
description: ""
summary: ""
date: 2023-09-12T16:10:28+02:00
lastmod: 2023-09-12T16:10:28+02:00
draft: false
weight: 320
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
slug: "authoring-content"
---

Doks supports the full range of [Markdown](https://daringfireball.net/projects/markdown/) syntax in `.md` files as well as frontmatter [YAML](https://yaml.org/spec/1.2.2/), [TOML](https://toml.io/en/), or [JSON](https://www.json.org/json-en.html) to define metadata such as a title and description.

## Frontmatter

You can customize individual pages in Doks by setting values in their frontmatter. Frontmatter is set at the top of your files between `---` separators:

```md {title="content/docs/example.md"}
---
title: My page title
---

Page content follows the second `---`.
```

Every page must include at least a `title`. See the [frontmatter reference](/docs/reference/frontmatter/) for all available fields and how to add custom fields.

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

{{< callout context="note" icon="outline/info-circle" >}}
Images in Doks use [Thulite' Images integration](https://images.thulite.io/).
{{< /callout >}}

Thulite Images supports the [Markdown syntax for displaying images](https://www.markdownguide.org/basic-syntax/#images-1) that includes alt-text for screen readers and assistive technology.

![A small bird standing on the ground next to a body of water](vincent-van-zalinge-ip3v0lN8rQg-unsplash.jpg)

```md
![A small bird standing on the ground next to a body of water](vincent-van-zalinge-ip3v0lN8rQg-unsplash.jpg)
```

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

Level 2 (`<h2>`) and Level 3 (`<h3>`) headings will automatically appear in the page table of contents — the "On this page" section.

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

A code block is indicated by a block with three backticks ` ``` ` at the start and end. You can indicate the programming language being used after the opening backticks.

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

{{< callout context="note" title="Extended code formatting" icon="outline/info-circle" >}}
Need extended code formatting? See our [Code blocks guides](/docs/built-ins/code-blocks/).
{{< /callout >}}

## Other common Markdown features

Doks supports all other Markdown authoring syntax, such as lists and tables. See [Markdown Basic Syntax](/docs/reference/markdown-basic-syntax/) and [Markdown Extended Syntax](/docs/reference/markdown-extended-syntax/) for a quick overview of all Markdown syntax elements.

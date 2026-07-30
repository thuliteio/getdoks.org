---
title: "Extended Syntax"
description: "Reference extended Markdown syntax like tables, footnotes, task lists, and fenced code blocks, plus unsupported elements in Hugo Markdown."
summary: "Reference extended Markdown syntax like tables, footnotes, task lists, and fenced code blocks, plus unsupported elements in Hugo Markdown."
date: 2026-05-12T12:44:29+02:00
lastmod: 2026-05-28T11:23:00+02:00
draft: false
weight: 435
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

A reference to the extended Markdown syntax elements that add features beyond the basic syntax.

{{< callout icon="info-circle" >}}
Refer to the [Extended Syntax](https://markdownguide.offshoot.io/extended-syntax/) reference guide from The Markdown Guide for more information.
{{< /callout >}}

## Table

```md
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
```

{{< preview markdown=true >}}

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

{{< /preview >}}

## Fenced Code Block

````md
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````

{{< preview markdown=true >}}

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

{{< /preview >}}

## Footnote

```md
Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
```

{{< preview markdown=true >}}

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

{{< /preview >}}

## Heading ID

```md
### My Great Heading{#custom-id}
```

{{< preview markdown=true >}}

### My Great Heading{#custom-id}

{{< /preview >}}

### Rendered HTML

```html
<h3 id="custom-id">My Great Heading</h3>
```

## Definition List

```md
term
: definition
```

{{< preview markdown=true >}}

term
: definition

{{< /preview >}}

## Strikethrough

```md
~~The world is flat.~~
```

{{< preview markdown=true >}}

~~The world is flat.~~

{{< /preview >}}

## Task List

<!-- prettier-ignore-start -->
```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
{.list-unstyled}
```

{{< preview markdown=true >}}

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
{.list-unstyled}

{{< /preview >}}
<!-- prettier-ignore-end -->

## Emoji

{{< callout icon="info-circle" >}}
Copy the emoji shortcode from [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) by clicking on the emoji.
{{< /callout >}}

<!-- markdownlint-disable MD033 -->
<div class="expressive-code">
  <figure class="frame not-content">
  <figcaption class="header">
    <span class="title"></span>
  </figcaption>
  <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-md" data-lang="md"><span class="line"><span class="cl">That is so funny! &#58;joy:</span></span></code></pre></div>
  </figure>
</div>

{{< preview markdown=true >}}

That is so funny! :joy:

{{< /preview >}}

## Unsupported elements

{{< callout icon="info-circle" >}}
Hugo does not [support](https://www.markdownguide.org/tools/hugo/#hugo-markdown-support) the highlight, subscript, and superscript elements. Use the HTML element itself instead.
{{< /callout >}}

### Highlight

```md
I need to highlight these <mark>very important words</mark>.
```

{{< preview markdown=true >}}

I need to highlight these <mark>very important words</mark>.

{{< /preview >}}

### Subscript

```md
H<sub>2</sub>O
```

{{< preview markdown=true >}}

H<sub>2</sub>O

{{< /preview >}}

### Superscript

```md
X<sup>2</sup>
```

{{< preview markdown=true >}}

X<sup>2</sup>

{{< /preview >}}

<!-- markdownlint-enable MD033 -->

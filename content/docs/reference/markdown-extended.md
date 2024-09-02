---
title: "Markdown Extended Syntax"
description: ""
summary: ""
date: 2023-09-12T19:57:52+02:00
lastmod: 2023-09-12T19:57:52+02:00
draft: false
weight: 940
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

A quick reference to the Markdown extended syntax.

{{< callout icon="outline/info-circle" >}}
Refer to the [Extended Syntax](https://markdownguide.offshoot.io/extended-syntax/) reference guide from The Markdown Guide for more information.
{{< /callout >}}

## Table

```md
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
```

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

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

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

## Footnote

```md
Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
```

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

## Heading ID

```md
### My Great Heading{#custom-id}
```

### My Great Heading{#custom-id}

```html
<h3 id="custom-id">My Great Heading</h3>
```

## Definition List

```md
term
: definition
```

term
: definition

## Strikethrough

```md
~~The world is flat.~~
```

~~The world is flat.~~

## Task List

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
      {.list-unstyled}
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
      {.list-unstyled}

## Emoji

{{< callout icon="outline/info-circle" >}}
Copy the emoji shortcode from [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) by clicking on the emoji.
{{< /callout >}}

<div class="expressive-code">
  <figure class="frame not-content">
  <figcaption class="header">
    <span class="title"></span>
  </figcaption>
  <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-md" data-lang="md"><span class="line"><span class="cl">That is so funny! &#58;joy:</span></span></code></pre></div>
  </figure>
</div>

That is so funny! :joy:

## Unsupported elements

{{< callout icon="outline/info-circle" >}}
Hugo does not [support](https://www.markdownguide.org/tools/hugo/#hugo-markdown-support) the highlight, subscript, and superscript elements. Use the HTML element itself instead.
{{< /callout >}}

### Highlight

```md
I need to highlight these <mark>very important words</mark>.
```

I need to highlight these <mark>very important words</mark>.

### Subscript

```md
H<sub>2</sub>O
```

H<sub>2</sub>O

### Superscript

```md
X<sup>2</sup>
```

X<sup>2</sup>

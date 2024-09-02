---
title: "Code Blocks"
description: ""
summary: ""
date: 2023-12-22T20:30:04+01:00
lastmod: 2023-12-22T20:30:04+01:00
draft: false
weight: 430
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

A code block is indicated by a block with three backticks ` ``` ` at the start and end. You can indicate the programming language being used after the opening backticks.

```js
if ([1, "one", 2, "two"].includes(value)) {
  console.log("Number is either 1 or 2."); // comment
}
```

````md
```js
if ([1, "one", 2, "two"].includes(value)) {
  console.log("Number is either 1 or 2."); // comment
}
```
````

## Frames and titles

Code blocks can be rendered inside a window-like frame. A frame that looks like a terminal window will be used for shell scripting languages (e.g. `bash` or `sh`). Other languages display inside a code editor-style frame if they include a title.

A code block’s optional title can be set with a `title="..."` attribute following the code block’s opening backticks and language identifier.

### File name tab

```js {title="count.js"}
if ([1, "one", 2, "two"].includes(value)) {
  console.log("Number is either 1 or 2."); // comment
}
```

````md
```js {title="count.js"}
if ([1, "one", 2, "two"].includes(value)) {
  console.log("Number is either 1 or 2."); // comment
}
```
````

### Terminal window

The default:

```bash
npm install @thulite/doks-core@latest
```

````md
```bash
npm install @thulite/doks-core@latest
```
````

With a `title` attribute:

```bash {title="Installing dependencies…"}
npm install
```

````md
```bash {title="Installing dependencies…"}
npm install
```
````

No frame:

```bash {frame="none"}
npm install @thulite/doks-core@latest
```

````md
```bash {frame="none"}
npm install @thulite/doks-core@latest
```
````

## Line numbers

```js {lineNos=true lineNoStart=32}
if ([1, "one", 2, "two"].includes(value)) {
  console.log("Number is either 1 or 2."); // comment
}
```

````md
```js {lineNos=true lineNoStart=32}
if ([1, "one", 2, "two"].includes(value)) {
  console.log("Number is either 1 or 2."); // comment
}
```
````

## Highlight

```js {hl_lines=2}
if ([1, "one", 2, "two"].includes(value)) {
  console.log("Number is either 1 or 2."); // comment
}
```

````md
```js {hl_lines=2}
if ([1, "one", 2, "two"].includes(value)) {
  console.log("Number is either 1 or 2."); // comment
}
```
````

With line numbers:

```go {linenos=true,hl_lines=[8,"15-17"],linenostart=199}
// GetTitleFunc returns a func that can be used to transform a string to
// title case.
//
// The supported styles are
//
// - "Go" (strings.Title)
// - "AP" (see https://www.apstylebook.com/)
// - "Chicago" (see https://www.chicagomanualofstyle.org/home.html)
//
// If an unknown or empty style is provided, AP style is what you get.
func GetTitleFunc(style string) func(s string) string {
  switch strings.ToLower(style) {
  case "go":
    return strings.Title
  case "chicago":
    return transform.NewTitleConverter(transform.ChicagoStyle)
  default:
    return transform.NewTitleConverter(transform.APStyle)
  }
}
```

````md
```go {linenos=true,hl_lines=[8,"15-17"],linenostart=199}
// GetTitleFunc returns a func that can be used to transform a string to
// title case.
//
// The supported styles are
//
// - "Go" (strings.Title)
// - "AP" (see https://www.apstylebook.com/)
// - "Chicago" (see https://www.chicagomanualofstyle.org/home.html)
//
// If an unknown or empty style is provided, AP style is what you get.
func GetTitleFunc(style string) func(s string) string {
  switch strings.ToLower(style) {
  case "go":
    return strings.Title
  case "chicago":
    return transform.NewTitleConverter(transform.ChicagoStyle)
  default:
    return transform.NewTitleConverter(transform.APStyle)
  }
}
```
````

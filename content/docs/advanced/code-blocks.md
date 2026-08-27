---
title: "Code Blocks"
description: "Display code with syntax highlighting, frames, titles, line numbers, and highlighted lines."
summary: "Display code with syntax highlighting, frames, titles, line numbers, and highlighted lines."
date: 2026-08-25T12:02:58+02:00
lastmod: 2026-08-25T12:02:58+02:00
draft: false
weight: 305

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use fenced code blocks to display source code. Add a language identifier after the opening backticks for syntax highlighting.

## Usage

````md
```js
const message = "Hello, Doks!";
console.log(message);
```
````

No additional page or site settings are required.

## Examples

### Basic code block

Use a [language identifier](https://gohugo.io/content-management/syntax-highlighting/#languages) to enable syntax highlighting.

{{< preview render=markdown class="ec-wrapper">}}

```js
const message = "Hello, Doks!";
console.log(message);
```

{{< /preview >}}

````md
```js
const message = "Hello, Doks!";
console.log(message);
```
````

### Frames and titles

Code blocks with a title use an editor-style frame. The renderer uses a terminal-style frame for `bash`, `sh`, `shell`, and `powershell`.

{{< preview render=markdown class="ec-wrapper">}}

```js {title="app.js"}
const message = "Hello, Doks!";
console.log(message);
```

{{< /preview >}}

````md
```js {title="app.js"}
const message = "Hello, Doks!";
console.log(message);
```
````

{{< preview render=markdown class="ec-wrapper">}}

```bash {title="Install dependencies"}
npm install
```

{{< /preview >}}

````md
```bash {title="Install dependencies"}
npm install
```
````

To hide the frame, set `frame="none"`:

{{< preview render=markdown class="ec-wrapper">}}

```bash {frame="none"}
npm install
```

{{< /preview >}}

````md
```bash {frame="none"}
npm install
```
````

### Line numbers

Use `lineNos=true` to show line numbers. Set the first number with `lineNoStart`.

{{< preview render=markdown class="ec-wrapper">}}

```js {lineNos=true lineNoStart=10}
const message = "Hello, Doks!";
console.log(message);
```

{{< /preview >}}

````md
```js {lineNos=true lineNoStart=10}
const message = "Hello, Doks!";
console.log(message);
```
````

### Highlight lines

Use `hl_lines` to highlight one or more lines.

{{< preview render=markdown class="ec-wrapper">}}

```go {lineNos=true hl_lines=[3]}
package main

import "fmt"

func main() {
  fmt.Println("Hello, Doks!")
}
```

{{< /preview >}}

````md
```go {lineNos=true hl_lines=[3]}
package main

import "fmt"

func main() {
  fmt.Println("Hello, Doks!")
}
```
````

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Syntax highlighting" description="Hugo guide to highlighting fenced code blocks and configuring code block options." href="https://gohugo.io/content-management/syntax-highlighting/" target="_blank">}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

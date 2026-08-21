---
title: "Steps"
description: "Display a numbered list of steps with styled step indicators."
summary: "Display a numbered list of steps with styled step indicators."
date: 2026-08-21T11:19:05+02:00
lastmod: 2026-08-21T11:19:05+02:00
draft: false
weight: 233

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use the `steps` shortcode with `step` children to render a styled ordered list. Each `step` becomes a numbered list item and its inner content supports Markdown.

## Usage

```go-html-template
{{</* steps */>}}
{{</* step */>}}
First step content.
{{</* /step */>}}
{{</* step */>}}
Second step content.
{{</* /step */>}}
{{</* /steps */>}}
```

## Parameters

Neither `steps` nor `step` accept parameters. All content goes inside the `step` body.

## Example

{{< preview >}}
{{< steps >}}
{{< step >}}
**Install dependencies**

```bash
npm install
```

{{< /step >}}
{{< step >}}
**Start the development server**

```bash
npm run dev
```

{{< /step >}}
{{< step >}}
Open `http://localhost:1313` in your browser.
{{< /step >}}
{{< /steps >}}
{{< /preview >}}

````go-html-template
{{</* steps */>}}
{{</* step */>}}
**Install dependencies**

```bash
npm install
```

{{</* /step */>}}
{{</* step */>}}
**Start the development server**

```bash
npm run dev
```

{{</* /step */>}}
{{</* step */>}}
Open `http://localhost:1313` in your browser.
{{</* /step */>}}
{{</* /steps */>}}

````

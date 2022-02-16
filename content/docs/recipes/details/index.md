---
title: "Details"
description: "Add a disclosure widget with the Doks details shortcode. Information is visible only when the widget is toggled into open state."
lead: "Add a disclosure widget with the Doks details shortcode. Information is visible only when the widget is toggled into open state."
date: 2022-02-15T14:14:29+01:00
lastmod: 2022-02-15T14:14:29+01:00
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 156
toc: true
---

## Usage

```md
{{</* details <summary> [state] */>}}
<content>
{{</* /details */>}}
```

## Examples

### Markdown and HTML

```md
{{</* details "Markdown and HTML" */>}}
_Markdown_ and <em>HTML</em> will be rendered.
{{</* /details */>}}
```

{{< details "Markdown and HTML" >}}
_Markdown_ and <em>HTML</em> will be rendered.
{{< /details >}}

### Ordered list

```md
{{</* details "Ordered list" */>}}

1. step 1
2. step 2
3. step 3

{{</* /details */>}}
```

{{< details "Ordered list" >}}

1. step 1
2. step 2
3. step 3

{{< /details >}}

### Nested details

```md
{{</* details "Parent" */>}}
Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize.
{{</* details "Child" */>}}
Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize.
{{</* details "Grandchild" */>}}
Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize.
{{</* /details */>}}
{{</* /details */>}}
{{</* /details */>}}
```

{{< details "Parent" >}}
Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize.
{{< details "Child" >}}
Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize.
{{< details "Grandchild" >}}
Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize.
{{< /details >}}
{{< /details >}}
{{< /details >}}

### Start in open state

```md
{{</* details "Start in open state" open */>}}
Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize.
{{</* /details */>}}
```

{{< details "Start in open state" open >}}
Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize.
{{< /details >}}

### Custom HTML styled summary</span>

```md
{{</* details "<span class=\"fw-bold\">Custom HTML styled summary</span>" */>}}
Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize.
{{</* /details */>}}
```

{{< details "<span class=\"fw-bold\">Custom HTML styled summary</span>" >}}
Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize.
{{< /details >}}

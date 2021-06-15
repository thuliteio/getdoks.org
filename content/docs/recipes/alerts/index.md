---
title: "Alerts"
description: "Add an alert with a Doks shortcode. Use the named parameter or paired version."
lead: "Add an alert with a Doks shortcode. Use the named parameter or paired version."
date: 2021-06-15T09:39:10+02:00
lastmod: 2021-06-15T09:39:10+02:00
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 155
toc: true
---

```bash
./layouts/shortcode/alert.html
```

See also the Hugo docs: [Shortcodes](https://gohugo.io/content-management/shortcodes/)

## Named parameter

```md
{{</* alert icon="👉" text="Make sure to always self-close the alert shortcode." /*/>}}
```

Will be processed into:

{{< alert icon="👉" text="Make sure to always self-close the alert shortcode." />}}

## Paired

```md
{{</* alert icon="👉" */>}}
_Markdown_ and <em>HTML</em> will be rendered.
{{</* /alert */>}}
```

Will be processed into:

{{< alert icon="👉" >}}
_Markdown_ and <em>HTML</em> will be rendered.
{{< /alert >}}

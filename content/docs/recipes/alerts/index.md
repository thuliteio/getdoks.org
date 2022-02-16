---
title: "Alerts"
description: "Add a page alert with a Doks shortcode (named parameter or paired). Add a (dismissible) global alert, visible on all pages."
lead: "Add a page alert with a Doks shortcode (named parameter or paired). Add a (dismissible) global alert, visible on all pages."
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

## Global alert

The global alert is visible on all pages when activated (at the top). Switch it on by setting `alert = true` and make it dismissible by setting `alertDismissable = true` in `./config/_default/params.toml`, like so:

```toml
# Alert
alert = true
alertDismissable = true
alertText = "Help Doks grow by supporting us on Open Collective. <a class=\"alert-link stretched-link\" href=\"https://opencollective.com/doks\" target=\"_blank\" rel=\"noopener\">Become a backer!</a>"
```

Will be processed into:

{{< img-simple src="global-dismissible-alert.png" alt="Global Dismissable Alert" class="d-block mx-auto shadow my-5" >}}

## Page alert

```bash
./layouts/shortcode/alert.html
```

See also the Hugo docs: [Shortcodes](https://gohugo.io/content-management/shortcodes/)

### Named parameter

```md
{{</* alert icon="👉" text="Make sure to always self-close the alert shortcode." /*/>}}
```

Will be processed into:

{{< alert icon="👉" text="Make sure to always self-close the alert shortcode." />}}

### Paired

```md
{{</* alert icon="👉" */>}}
_Markdown_ and <em>HTML</em> will be rendered.
{{</* /alert */>}}
```

Will be processed into:

{{< alert icon="👉" >}}
_Markdown_ and <em>HTML</em> will be rendered.
{{< /alert >}}

### Context

Add context to page alerts (info, success, warning, or danger).

```md
{{</* alert icon="👉" context="info" text="A simple info alert — check it out!" /*/>}}
```

Will be processed into:

{{< alert icon="👉" context="info" text="A simple info alert — check it out!" />}}

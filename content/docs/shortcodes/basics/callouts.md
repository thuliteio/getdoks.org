---
title: "Callouts"
description: ""
summary: ""
date: 2025-08-15T19:24:36+02:00
lastmod: 2025-08-15T19:24:36+02:00
draft: false
weight: 310
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

Callouts (also known as "admonitions" or "asides") are useful for displaying secondary information alongside a page's main content.

Callout blocks are indicated using `{{</* callout */>}}{{</* /callout */>}}` to wrap your content, and can be of type `note`, `tip`, `caution` or `danger`.

```md
{{</* callout note */>}} This is a note callout. Example text to show it in action. {{</* /callout */>}}
```

You can nest any other Markdown content types inside a callout, but callouts are best suited to short and concise chunks of content.

### Note callout

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
Doks is a documentation website toolkit built with Thulite. You can get started with this command:

```bash
npm create thulite@latest -- --template doks
```

{{< /callout >}}

````md
{{</* callout context="note" title="Note" icon="outline/info-circle" */>}}
Doks is a documentation website toolkit built with Thulite. You can get started with this command:

```bash
npm create thulite@latest -- --template doks
```

{{</* /callout */>}}
````

### Custom callout titles

You can specify a custom title for the callout using the `title` parameter.

{{< callout context="tip" title="Did you know?" icon="outline/rocket" >}}
Thulite simplifies developer on boarding time and makes for faster collaboration by using a single declaration manifest for [dependencies](https://docs.thulite.io/concepts/dependencies/).
{{< /callout >}}

```md
{{</* callout context="tip" title="Did you know?" icon="outline/rocket" */>}}
Thulite simplifies developer on boarding time and makes for faster collaboration by using a single declaration manifest for [dependencies](https://docs.thulite.io/concepts/dependencies/).
{{</* /callout */>}}
```

### More callout types

Caution and danger callouts are helpful for drawing a user's attention to details that may trip them up. If you find yourself using these a lot, it may also be a sign that the thing you are documenting could benefit from being redesigned.

{{< callout context="caution" title="Caution" icon="outline/alert-triangle" >}}
If you are not sure you want an awesome docs site, think twice before using [Doks](https://getdoks.org/).
{{< /callout >}}

{{< callout context="danger" title="Danger" icon="outline/alert-octagon" >}}
Your users may be more productive and find your product easier to use thanks to helpful Doks features.

- Clear navigation
- User-configurable color theme
- [i18n support](/docs/guides/i18n/)
  {{< /callout >}}

```md
{{</* callout context="caution" title="Caution" icon="outline/alert-triangle" */>}}
If you are not sure you want an awesome docs site, think twice before using [Doks](https://getdoks.org/).
{{</* /callout */>}}

{{</* callout context="danger" title="Danger" icon="outline/alert-octagon" */>}}
Your users may be more productive and find your product easier to use thanks to helpful Doks features.

- Clear navigation
- User-configurable color theme
- [i18n support](/docs/guides/i18n/)
  {{</* /callout */>}}
```

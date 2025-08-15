---
title: "Details"
description: ""
summary: ""
date: 2025-08-15T19:26:06+02:00
lastmod: 2025-08-15T19:26:06+02:00
draft: false
weight: 330
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

You can insert a [details HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) using the `{{</* details */>}}` shortcode.

```md
{{</* details "Details" */>}}
Something small enough to escape casual notice.
{{</* /details */>}}
```

{{< details "Details" >}}
Something small enough to escape casual notice.
{{< /details >}}

### Start in open state

You can add the `open` attribute to start details in open state.

```md
{{</* details "Start in open state" open */>}}
This Boolean attribute indicates whether the details — that is, the contents of the <details> element — are currently visible. The details are shown when this attribute exists, or hidden when this attribute is absent. By default this attribute is absent which means the details are not visible.
{{</* /details */>}}
```

{{< details "Start in open state" open >}}
This Boolean attribute indicates whether the details — that is, the contents of the `<details>` element — are currently visible. The details are shown when this attribute exists, or hidden when this attribute is absent. By default this attribute is absent which means the details are not visible.
{{< /details >}}

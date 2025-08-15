---
title: "Images"
description: ""
summary: ""
date: 2025-08-15T19:27:14+02:00
lastmod: 2025-08-15T19:27:14+02:00
draft: false
weight: 340
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

{{< callout context="note" icon="outline/info-circle" >}}
Images in Doks use [Thulite' Images integration](https://images.thulite.io/).
{{< /callout >}}

Display an image using the [`{{</* img */>}}`](https://images.thulite.io/docs/shortcodes/img/), [`{{</* picture */>}}`](https://images.thulite.io/docs/shortcodes/picture/), or [`{{</* figure */>}}`](https://images.thulite.io/docs/shortcodes/figure/) shortcode.

### Page resource

Display a page resource image:

```md
{{</* picture src="images/vincent-van-zalinge-OVCICfR9gXo-unsplash.jpg" alt="A bird flying through a field of tall grass" */>}}
```

{{< picture src="images/vincent-van-zalinge-OVCICfR9gXo-unsplash.jpg" alt="A bird flying through a field of tall grass" >}}

### Assets directory

Display an image from the assets directory:

```md
{{</* figure
  src="images/vincent-van-zalinge-kK6c4Bkw-unsplash.jpg"
  alt="A small bird sitting on top of a dry grass field"
  caption="A small bird sitting on top of a dry grass field. Photo by Vincent van Zalinge"
*/>}}
```

{{< figure
  src="images/vincent-van-zalinge-kK6c4Bkw-unsplash.jpg"
  alt="A small bird sitting on top of a dry grass field"
  caption="A small bird sitting on top of a dry grass field. Photo by Vincent van Zalinge"
>}}

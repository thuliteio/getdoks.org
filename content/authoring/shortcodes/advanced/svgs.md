---
title: "SVGs"
description: ""
summary: ""
date: 2025-08-15T19:27:30+02:00
lastmod: 2025-08-15T19:27:30+02:00
draft: false
weight: 350
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

{{< callout context="note" icon="outline/info-circle" >}}
SVG's in Doks use [Thulite' SVG integration](https://svg.thulite.io/).
{{< /callout >}}

Display an SVG using the `{{</* inline-svg */>}}` shortcode. The SVG gets inlined (embedded) into the pages' HTML.

### Page resource

You can add a monochrome monogram that respects darkmode/lightmode:

```md
{{</* inline-svg src="svgs/logo-netlify-monogram-monochrome-lightmode.svg" width="64px" height="57px" class="svg-inline-custom svg-monochrome" */>}}
```

{{< inline-svg src="svgs/logo-netlify-monogram-monochrome-lightmode.svg" width="64px" height="57px" class="svg-inline-custom svg-monochrome" >}}

### Assets directory

You can add a logo that respects darkmode/lightmode:

```md
{{</* inline-svg src="svgs/logos/logo-netlify-large-fullcolor-lightmode.svg" width="192px" height="79px" class="svg-inline-custom svg-lightmode" */>}}
{{</* inline-svg src="svgs/logos/logo-netlify-large-fullcolor-darkmode.svg" width="192px" height="79px" class="svg-inline-custom svg-darkmode" */>}}
```

{{< inline-svg src="svgs/logos/logo-netlify-large-fullcolor-lightmode.svg" width="192px" height="79px" class="svg-inline-custom svg-lightmode" >}}
{{< inline-svg src="svgs/logos/logo-netlify-large-fullcolor-darkmode.svg" width="192px" height="79px" class="svg-inline-custom svg-darkmode" >}}

### Tabler icons

{{< callout icon="outline/info-circle" >}}
Copy the icon name from [Tabler Icons](https://tabler.io/icons) by clicking on it's name.
{{< /callout >}}

You can add a outline/coffee icon:

```md
{{</* inline-svg "outline/coffee" */>}}
```

{{< inline-svg "outline/coffee" >}}

You can specify [SVG attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute), for example:

```md
{{</* inline-svg src="outline/hand-love-you" stroke-width="1" stroke="#ee52b7" height="3rem" width="3rem" class="svg-inline-custom" */>}}
```

{{< inline-svg src="outline/hand-love-you" stroke-width="1" stroke="#ee52b7" height="3rem" width="3rem" class="svg-inline-custom" >}}

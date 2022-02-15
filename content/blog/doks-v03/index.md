---
title: "Doks v0.3"
description: "Version 0.3 is finally here! Better UX navigation, multilingual and i18n support, versioned documentation support, dismissible global alert, Mermaid diagrams and visualizations, and more!"
lead: "Version 0.3 is finally here! Better UX navigation, multilingual and i18n support, versioned documentation support, dismissible global alert, Mermaid diagrams and visualizations, and more!"
date: 2021-10-06T11:16:21+02:00
lastmod: 2021-10-06T11:16:21+02:00
draft: false
weight: 50
images: []
contributors: ["Henk Verlinde"]
---

## Better UX navigation

{{< img-simple src="navigation-mobile.png" alt="Navigation Mobile" class="d-block mx-auto shadow my-5" >}}
{{< img-simple src="navigation-structure-mobile.png" alt="Navigation Structure Mobile" class="d-block mx-auto my-5 shadow" >}}

No more scrolling to the bottom of a page  to get to the next page! The navigation parts (global, section, and page) are now all available at the top of a browser window (all screen sizes). This setup also provides for more room for additional navigation elements (all navigation parts).

[Menus →]({{< relref "menus" >}})

## Multilingual and i18n support

{{< img-simple src="multilingual-support.png" alt="Multilingual Support" class="d-block mx-auto shadow my-5" >}}

Doks now is fully prepared for multilingual and i18n support.

[Multilingual Mode →]({{< relref "multilingual-mode" >}})

## Versioned documentation support

{{< img-simple src="versioned-docs-support.png" alt="Versioned Documentation Support" class="d-block mx-auto shadow my-5" >}}

Doks now is fully prepared for versioned documentation support.

[Versioned Documentation →]({{< relref "versioned-documentation" >}})

## Global alert

{{< img-simple src="global-dismissible-alert.png" alt="Global Dismissable Alert" class="d-block mx-auto shadow my-5" >}}

The global alert is now visible on all pages (not only the homepage) when activated. Switch it on by setting `alert = true` and make it dismissible by setting `alertDismissable = true` in `./config/_default/params.toml`.

[Alerts →]({{< relref "alerts" >}})

## Mermaid diagrams

You can now add Mermaid diagrams and visualizations by using a shortcode (handy for adding extra classes) or code fences. Mermaid support is switched off per default. Activate it by setting `mermaid = true` in the front matter of a page.

````md
```mermaid
graph TD
  A[Hard] -->|Text| B(Round)
  B --> C{Decision}
  C -->|One| D[Result 1]
  C -->|Two| E[Result 2]
```
````

![Mermaid Code Fences](mermaid-code-fences.png)

_Note, this is an image, because Mermaid support is switched off on this site._

[Mermaid →]({{< relref "docs/extensions/mermaid" >}})

## Videos shortcode

You can now add locally hosted videos by using a shortcode.

```md
{{</* video ratio="16x9" attributes="controls autoplay muted" webm-src="videos/flower.webm" mp4-src="videos/flower.mp4" */>}}
```

{{< video ratio="16x9" attributes="controls autoplay muted" webm-src="videos/flower.webm" mp4-src="/videos/flower.mp4" >}}

[Videos →]({{< relref "videos" >}})

## Images markdown support

Now, you can also (next to using the image shortcodes) add an image using markdown (portability!). An `<img>` element is used for small images, a `<figure>` element for large images.

```md
![Image](day-and-night-escher.jpg "Day and Night, 1938 — M.C. Escher")
```

![Image](day-and-night-escher.jpg "Day and Night, 1938 — M.C. Escher")

[Images →]({{< relref "images" >}})

## Other features and fixes

- Update meta tags (following setup [Yoast](https://developer.yoast.com/))
- Make section navigation collapsible (optionally)
- Extend alert shortcode (inline, next to named parameter)
- Automatically add copy button for code blocks (dropped copy shortcode)
- Better dark mode support (no more [FART](https://css-tricks.com/flash-of-inaccurate-color-theme-fart/))
- Replace [hugo-bin](https://github.com/fenneclab/hugo-bin) with [hugo installer](https://github.com/dominique-mueller/hugo-installer) (verifies checksum & runs health check when installing)
- Migrate to [FlexSearch v0.7.2](https://github.com/nextapps-de/flexsearch)
- Migrate to [highlight.js v11.2.0](https://github.com/highlightjs/highlight.js)
- Update to [Hugo v0.88.1](https://gohugo.io/news/0.88.1-relnotes/)
- Update to [Bootstrap 5.1.2](https://blog.getbootstrap.com/2021/10/05/bootstrap-5-1-2/)

[Full changelog →](https://github.com/h-enk/doks/blob/master/CHANGELOG.md)

## What's next

- Add subnavigation to menus (main + section)
- Automatically generate menus (main + section)
- Add Algolia Search (next to FlexSearch) as an option
- Update blog pages (list + single)
- Docs docs docs!

[Milestones →](https://github.com/h-enk/doks/milestones)

## Contributors

Thanks for all contributions to discussions, bugfixes, features, and documentation!

[32u2](https://github.com/32u2), [AsbjornOlling](https://github.com/AsbjornOlling), [deining](https://github.com/deining), [FileFabrik](https://github.com/FileFabrik), [limichange](https://github.com/limichange), [LunaticMuch](https://github.com/LunaticMuch), [mikepianka](https://github.com/mikepianka), [mroswell](https://github.com/mroswell), [OCram85](https://github.com/OCram85), [rslifka](https://github.com/rslifka), [sharjeelaziz](https://github.com/sharjeelaziz), [soichih](https://github.com/soichih), [TheTimeWalker](https://github.com/TheTimeWalker), [umatare5](https://github.com/umatare5), [Yvand](https://github.com/Yvand), and [Zerotask](https://github.com/Zerotask) :muscle:

## Become a backer

Help Doks grow further by supporting us on [Open Collective](https://opencollective.com/doks). Thanks!

---
title: "Shortcodes"
description: ""
summary: ""
date: 2023-09-12T19:58:01+02:00
lastmod: 2023-09-12T19:58:01+02:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "shortcodes-8ac2041973478ffa22bad1f7446be3df"
weight: 950
toc: true
---

A quick reference to the Doks shortcodes.

{{< callout icon="info-circle" >}}
Refer to [components](https://getdoks.org/docs/components/) for more information.
{{< /callout >}}

## SVG

Insert an [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) from the assets directory, page resources, or Tabler Icons.

{{< callout icon="info-circle" >}}
The [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) gets embedded into the pages' HTML.
{{< /callout >}}

### Assets directory

Add e.g. a logo from the `assets` directory:

```md
{{</* inline-svg src="svgs/logos/logo-netlify-large-fullcolor-lightmode.svg" width="192px" height="79px" class="svg-inline-custom svg-lightmode" */>}}

{{</* inline-svg src="svgs/logos/logo-netlify-large-fullcolor-darkmode.svg" width="192px" height="79px" class="svg-inline-custom svg-darkmode" */>}}
```

{{< inline-svg src="svgs/logos/logo-netlify-large-fullcolor-lightmode.svg" width="192px" height="79px" class="svg-inline-custom svg-lightmode" >}}

{{< inline-svg src="svgs/logos/logo-netlify-large-fullcolor-darkmode.svg" width="192px" height="79px" class="svg-inline-custom svg-darkmode" >}}

### Page resource

{{< callout src="info-circle" >}}
Refer to [page resources](https://gohugo.io/content-management/page-resources/) and [page bundles](https://gohugo.io/content-management/page-bundles/) for more information.
{{< /callout >}}

Add e.g a monogram:

```md
{{</* inline-svg src="logo-netlify-monogram-monochrome-lightmode.svg" width="64px" height="57px" class="svg-inline-custom svg-monochrome" */>}}
```

{{< inline-svg src="logo-netlify-monogram-monochrome-lightmode.svg" width="64px" height="57px" class="svg-inline-custom svg-monochrome" >}}

### Tabler icons

{{< callout src="copy" >}}
Copy the icon name from [Tabler Icons](https://tabler-icons.io/) by clicking on it's name.
{{< /callout >}}

Add a Tabler icon:

```md
{{</* inline-svg "coffee" */>}}
```

{{< inline-svg "coffee" >}}

Specify [SVG attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute), for example:

```md
{{</* inline-svg src="hand-rock" stroke-width="1" stroke="#ee52b7" height="3rem" width="3rem" class="svg-inline-custom" */>}}
```

{{< inline-svg src="hand-rock" stroke-width="1" stroke="#ee52b7" height="3rem" width="3rem" class="svg-inline-custom" >}}

## Callouts

```md
{{</* callout */>}} This is a default callout. Example text to show it in action. {{</* /callout */>}}
```

{{< callout >}} This is a default callout. Example text to show it in action. {{< /callout >}}

```md
{{</* callout note */>}} This is a note callout. Example text to show it in action. {{</* /callout */>}}
```

{{< callout note >}} This is a note callout. Example text to show it in action. {{< /callout >}}

```md
{{</* callout tip */>}} This is a tip callout. Example text to show it in action. {{</* /callout */>}}
```

{{< callout tip >}} This is a tip callout. Example text to show it in action. {{< /callout >}}

```md
{{</* callout caution */>}} This is a caution callout. Example text to show it in action. {{</* /callout */>}}
```

{{< callout caution >}} This is a caution callout. Example text to show it in action. {{< /callout >}}

```md
{{</* callout danger */>}} This is a danger callout. Example text to show it in action. {{</* /callout */>}}
```

{{< callout danger >}} This is a danger callout. Example text to show it in action. {{< /callout >}}

### Tabler icons

{{< callout icon="copy" >}}
Copy the icon name from [Tabler Icons](https://tabler-icons.io/) by clicking on it's name.
{{< /callout >}}

```md
{{</* callout context="tip" icon="rocket" */>}} This is an **tip** callout. Example text to show it in action. {{</* /callout */>}}
```

{{< callout context="tip" icon="rocket" >}} This is an **tip** callout. Example text to show it in action.{{< /callout >}}

```md
{{</* callout context="note" icon="info-circle" */>}}
Aww yeah, you successfully read this important tip callout. This example text is going to run a bit longer so that you can see how spacing within a callout works with this kind of content.
{{</* /callout */>}}
```

{{< callout context="note" icon="info-circle" >}}
Aww yeah, you successfully read this important tip callout. This example text is going to run a bit longer so that you can see how spacing within a callout works with this kind of content.
{{< /callout >}}

### Title

```md
{{</* callout context="tip" title="Callout title" */>}} This is a tip callout. Example text to show it in action. {{</* /callout */>}}
```

{{< callout context="tip" title="Callout title" >}} This is a tip callout. Example text to show it in action. {{< /callout >}}

```md
{{</* callout context="tip" title="Callout title" icon="rocket" */>}} This is a tip callout. Example text to show it in action. {{</* /callout */>}}
```

{{< callout context="tip" title="Callout title" icon="rocket" >}} This is a tip callout. Example text to show it in action. {{< /callout >}}

### Inline code

{{< callout context="note" icon="info-circle" >}}
You can change the commands in the scripts section of `./package.json`.
{{< /callout >}}

{{< callout context="tip" icon="rocket" >}}
You can change the commands in the scripts section of `./package.json`.
{{< /callout >}}

{{< callout context="caution" icon="alert-triangle" >}}
You can change the commands in the scripts section of `./package.json`.
{{< /callout >}}

{{< callout context="danger" icon="alert-octagon" >}}
You can change the commands in the scripts section of `./package.json`.
{{< /callout >}}

## Details

```md
{{</* details "Details" */>}}
Something small enough to escape casual notice.
{{</* /details */>}}
```

{{< details "Details" >}}
Something small enough to escape casual notice.
{{< /details >}}

### Start in open state

```md
{{</* details "Start in open state" open */>}}
This Boolean attribute indicates whether the details — that is, the contents of the <details> element — are currently visible. The details are shown when this attribute exists, or hidden when this attribute is absent. By default this attribute is absent which means the details are not visible.
{{</* /details */>}}
```

{{< details "Start in open state" open >}}
This Boolean attribute indicates whether the details — that is, the contents of the `<details>` element — are currently visible. The details are shown when this attribute exists, or hidden when this attribute is absent. By default this attribute is absent which means the details are not visible.
{{< /details >}}

## Tabs

````md
{{</* tabs "create-new-site" */>}}
{{</* tab "npm" */>}}

```bash
npm create hyas@latest
```

{{</* /tab */>}}
{{</* tab "pnpm" */>}}

```bash
pnpm create hyas@latest
```

{{</* /tab */>}}
{{</* tab "Yarn" */>}}

```bash
yarn create hyas
```

{{</* /tab */>}}
{{</* /tabs */>}}
````

{{< callout icon="info-circle" >}}
The selected tab is remembered in and across pages.
{{< /callout >}}

Run the following command in your terminal to start our handy install wizard, `create-hyas`.

{{< tabs "create-new-site" >}}
{{< tab "npm" >}}

```bash
npm create hyas@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create hyas@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create hyas
```

{{< /tab >}}
{{< /tabs >}}

`cd` into your new project directory to begin using Hyas. Install your dependencies before continuing.

{{< tabs "install-dependencies" >}}
{{< tab "npm" >}}

```bash
npm install
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn install
```

{{< /tab >}}
{{< /tabs >}}

## Image

### Assets directory

Add an image from the assets directory:

```md
{{</* picture src="assets/images/bozhin-karaivanov-3HnVKfQZGTQ-unsplash.jpg" alt="Red raspberry" */>}}
```

{{< picture src="assets/images/bozhin-karaivanov-3HnVKfQZGTQ-unsplash.jpg" alt="Red raspberry" >}}

### Page resource

```md
{{</* picture src="bozhin-karaivanov-zs6GW81O538-unsplash.jpg" alt="Red apples on a tree" */>}}
```

{{< picture src="bozhin-karaivanov-zs6GW81O538-unsplash.jpg" alt="Red apples on a tree" >}}

## Video

```md
{{</* video src="flower" autoplay="true" muted="true" */>}}
```

{{< video src="flower" autoplay="true" muted="true" >}}

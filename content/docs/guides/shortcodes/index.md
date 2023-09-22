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
weight: 820
toc: true
---

Shortcodes let you easily reuse a piece of UI or styling consistently. Examples might include a callout or a YouTube embed. Doks supports the use of shortcodes in Markdown files and provides some common shortcodes for you to use.

{{< callout icon="info-circle" >}}
Learn more about [Shortcodes](https://gohugo.io/content-management/shortcodes/) in the Hugo Docs.
{{< /callout >}}

## SVG

You can display an [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) from the assets directory, page resources, or Tabler Icons by using the `{{</* inline-svg */>}}` shortcode.

{{< callout icon="info-circle" >}}
The [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) gets embedded into the pages' HTML.
{{< /callout >}}

```html
<svg class="logo-netlify-monogram-monochrome-lightmode svg-inline svg-inline-custom svg-monochrome" height="57px" width="64px" viewBox="0 0 128 113" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_236_179)"><path d="M34.593 94.2052H33.3844l-6.033-6.033V86.9637L36.5743 77.7409h6.3896L43.8158 78.5928v6.3896L34.593 94.2052z" fill="#181a1c"></path><path d="M27.3514 25.9703V24.7617l6.033-6.033H34.593l9.2228 9.2228v6.3896L42.9639 35.1931H36.5743l-9.2229-9.2228z" fill="#181a1c"></path><path d="M80.4594 74.759h-8.777L70.9493 74.026V53.4802C70.9493 49.8248 69.5129 46.9915 65.1046 46.8925 62.836 46.833 60.2405 46.8925 57.4668 47.0014L57.0507 47.4274V74.0161L56.3176 74.7491h-8.777L46.8075 74.0161V38.9179l.7331-.7331H67.2939C74.9713 38.1848 81.1925 44.406 81.1925 52.0834V74.026L80.4594 74.759z" fill="#181a1c"></path><path d="M35.8412 61.6034H.73307L0 60.8703V52.0735l.73307-.7331H35.8412l.7331.7331v8.7968l-.7331.7331z" fill="#181a1c"></path><path d="M127.277 61.6034H92.1687L91.4356 60.8703V52.0735L92.1687 51.3404H127.277L128.01 52.0735v8.7968L127.277 61.6034z" fill="#181a1c"></path><path d="M58.9428 27.2185V.887367l.7331-.73307H68.4727L69.2058.887367V27.2185L68.4727 27.9515H59.6759L58.9428 27.2185z" fill="#181a1c"></path><path d="M58.9428 112.056V85.7254L59.6759 84.9923H68.4727L69.2058 85.7254V112.056L68.4727 112.79H59.6759L58.9428 112.056z" fill="#181a1c"></path></g><defs><clipPath id="clip0_236_179"><rect width="128" height="112.635" fill="#fff" transform="translate(0 0.154297)"></rect></clipPath></defs></svg>
```

### Assets directory

You can add a logo that respects darkmode/lightmode:

```md
{{</* inline-svg src="svgs/logos/logo-netlify-large-fullcolor-lightmode.svg" width="192px" height="79px" class="svg-inline-custom svg-lightmode" */>}}
{{</* inline-svg src="svgs/logos/logo-netlify-large-fullcolor-darkmode.svg" width="192px" height="79px" class="svg-inline-custom svg-darkmode" */>}}
```

{{< inline-svg src="svgs/logos/logo-netlify-large-fullcolor-lightmode.svg" width="192px" height="79px" class="svg-inline-custom svg-lightmode" >}}
{{< inline-svg src="svgs/logos/logo-netlify-large-fullcolor-darkmode.svg" width="192px" height="79px" class="svg-inline-custom svg-darkmode" >}}

### Page resources

{{< callout icon="info-circle" >}}
Learn more about [Page resources](https://gohugo.io/content-management/page-resources/) and [Page bundles](https://gohugo.io/content-management/page-bundles/) in the Hugo Docs.
{{< /callout >}}

You can add a monochrome monogram that respects darkmode/lightmode:

```md
{{</* inline-svg src="logo-netlify-monogram-monochrome-lightmode.svg" width="64px" height="57px" class="svg-inline-custom svg-monochrome" */>}}
```

{{< inline-svg src="logo-netlify-monogram-monochrome-lightmode.svg" width="64px" height="57px" class="svg-inline-custom svg-monochrome" >}}

### Tabler icons

{{< callout icon="info-circle" >}}
Copy the icon name from [Tabler Icons](https://tabler-icons.io/) by clicking on it's name.
{{< /callout >}}

You can add a coffee icon:

```md
{{</* inline-svg "coffee" */>}}
```

{{< inline-svg "coffee" >}}

You can specify [SVG attributes](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute), for example:

```md
{{</* inline-svg src="hand-rock" stroke-width="1" stroke="#ee52b7" height="3rem" width="3rem" class="svg-inline-custom" */>}}
```

{{< inline-svg src="hand-rock" stroke-width="1" stroke="#ee52b7" height="3rem" width="3rem" class="svg-inline-custom" >}}

## Callouts

Callouts (also known as "admonitions" or "asides") are useful for displaying secondary information alongside a page's main content.

Callout blocks are indicated using `{{</* callout */>}}{{</* /callout */>}}` to wrap your content, and can be of type `note`, `tip`, `caution` or `danger`.

```md
{{</* callout note */>}} This is a note callout. Example text to show it in action. {{</* /callout */>}}
```

You can nest any other Markdown content types inside a callout, but callouts are best suited to short and concise chunks of content.

### Note callout

{{< callout context="note" title="Note" icon="info-circle" >}}
Doks is a documentation website toolkit built with Hyas. You can get started with this command:

```bash
npm create hyas@latest -- --template doks
```

{{< /callout >}}

````md
{{</* callout context="note" title="Note" icon="info-circle" */>}}
Doks is a documentation website toolkit built with Hyas. You can get started with this command:

```bash
npm create hyas@latest -- --template doks
```

{{</* /callout */>}}
````

### Custom callout titles

You can specify a custom title for the callout using the `title` parameter.

{{< callout context="tip" title="Did you know?" icon="rocket" >}}
Hyas simplifies developer on boarding time and makes for faster collaboration by using a single declaration manifest for [dependencies](https://docs.gethyas.com/concepts/dependencies/).
{{< /callout >}}

````md
{{</* callout context="tip" title="Did you know?" icon="rocket" */>}}
Hyas simplifies developer on boarding time and makes for faster collaboration by using a single declaration manifest for [dependencies](https://docs.gethyas.com/concepts/dependencies/).
{{</* /callout */>}}
````

### More callout types

Caution and danger callouts are helpful for drawing a user's attention to details that may trip them up. If you find yourself using these a lot, it may also be a sign that the thing you are documenting could benefit from being redesigned.

{{< callout context="caution" title="Caution" icon="alert-triangle" >}}
If you are not sure you want an awesome docs site, think twice before using [Doks](https://getdoks.org/).
{{< /callout >}}

{{< callout context="danger" title="Danger" icon="alert-octagon" >}}
Your users may be more productive and find your product easier to use thanks to helpful Doks features.

- Clear navigation
- User-configurable color theme
- [i18n support](/guides/i18n/)
{{< /callout >}}

```md
{{</* callout context="caution" title="Caution" icon="alert-triangle" */>}}
If you are not sure you want an awesome docs site, think twice before using [Doks](https://getdoks.org/).
{{</* /callout */>}}

{{</* callout context="danger" title="Danger" icon="alert-octagon" */>}}
Your users may be more productive and find your product easier to use thanks to helpful Doks features.

- Clear navigation
- User-configurable color theme
- [i18n support](/guides/i18n/)
{{</* /callout */>}}
```

## Details

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

## Tabs

You can display a tabbed interface using the `{{</* tabs */>}}` and `{{</* tab */>}}` shortcodes. The `{{</* tabs */>}}` item must have a unique identifier, a descriptive one is recommended. Each `{{</* tab */>}}` item must have a label to display to users.

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

You can display an image from the assets directory or page resources by using the `{{</* img */>}}` or `{{</* picture */>}}` shortcodes.

### Assets directory

Display an image from the assets directory:

```md
{{</* picture src="assets/images/bozhin-karaivanov-3HnVKfQZGTQ-unsplash.jpg" alt="Red raspberry" */>}}
```

{{< picture src="assets/images/bozhin-karaivanov-3HnVKfQZGTQ-unsplash.jpg" alt="Red raspberry" >}}

### Page resources

Display an image from page resources:

```md
{{</* picture src="bozhin-karaivanov-zs6GW81O538-unsplash.jpg" alt="Red apples on a tree" */>}}
```

{{< picture src="bozhin-karaivanov-zs6GW81O538-unsplash.jpg" alt="Red apples on a tree" >}}

## Video

You can insert a [Video Embed HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) using the `{{</* video */>}}` shortcode.

```md
{{</* video src="flower" autoplay="true" muted="true" */>}}
```

{{< video src="flower" autoplay="true" muted="true" >}}

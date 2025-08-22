---
title: "Tabs"
description: ""
summary: ""
date: 2025-08-15T19:26:15+02:00
lastmod: 2025-08-15T19:26:15+02:00
draft: false
weight: 335
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

You can display a tabbed interface using the `{{</* tabs */>}}` and `{{</* tab */>}}` shortcodes. The `{{</* tabs */>}}` item must have a unique identifier, a descriptive one is recommended. Each `{{</* tab */>}}` item must have a label to display to users.

````md
{{</* tabs "create-new-site" */>}}
{{</* tab "npm" */>}}

```bash
npm create thulite@latest
```

{{</* /tab */>}}
{{</* tab "pnpm" */>}}

```bash
pnpm create thulite@latest
```

{{</* /tab */>}}
{{</* tab "Yarn" */>}}

```bash
yarn create thulite
```

{{</* /tab */>}}
{{</* /tabs */>}}
````

{{< callout icon="outline/info-circle" >}}
The selected tab is remembered in and across pages.
{{< /callout >}}

Run the following command in your terminal to start our handy install wizard, `create-thulite`.

{{< tabs "create-new-site" >}}
{{< tab "npm" >}}

```bash
npm create thulite@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create thulite@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create thulite
```

{{< /tab >}}
{{< /tabs >}}

`cd` into your new project directory to begin using Thulite. Install your dependencies before continuing.

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

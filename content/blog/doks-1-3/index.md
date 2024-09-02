---
title: "Doks 1.3"
url: "/blog/doks-1-3/"
description: "Doks 1.3 — our first release of the new year — is here! This release includes restructured dependencies, deduplicated Bootstrap variables, and more."
summary: "Doks 1.3 — our first release of the new year — is here! This release includes restructured dependencies, deduplicated Bootstrap variables, and more."
date: 2024-01-17T09:03:26+01:00
lastmod: 2024-01-17T09:03:26+01:00
draft: false
weight: 50
categories: []
tags: []
contributors: ["Henk Verlinde"]
pinned: false
homepage: false
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Doks 1.3 — our first release of the new year — is here! This release includes restructured dependencies, deduplicated Bootstrap variables, and more.

To upgrade an existing project, see the [Upgrade Doks](/docs/start-here/upgrade-doks/) guide.

<!-- omit in toc -->
## Highlights

- [Restructured dependencies](#restructured-dependencies)
- [Deduplicated Bootstrap variables](#deduplicated-bootstrap-variables)

## Restructured dependencies

Doks main dependencies are now specified in Doks' `package.json` — in stead of in `@thulite/doks-core`'s `package.json` — so you can easily update for example Hugo, Thulite Images, and Thulite SEO yourself.

```json
{
  "scripts": {
    "postinstall": "hugo-installer --version otherDependencies.hugo --extended --destination node_modules/.bin/hugo"
  },
  "dependencies": {
    "@thulite/doks-core": "^1.3.0",
    "@thulite/images": "^2.0.3",
    "@thulite/inline-svg": "^1.0.5",
    "@thulite/seo": "^2.1.0",
    "@tabler/icons": "^2.40.0",
    "exec-bin": "^1.0.0",
    "gethyas": "^2.2.2",
    "hugo-installer": "^4.0.1"
  },
  "devDependencies": {
    "shx": "^0.3.4"
  },
  "otherDependencies": {
    "hugo": "0.121.1"
  }
}
```

Thulite Images for example is updated like any `@thulite/*` integration (or theme):

{{< tabs "update-doks" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/images@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade @thulite/images --latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade @thulite/images --latest
```

{{< /tab >}}
{{< /tabs >}}

## Deduplicated Bootstrap variables

Doks now only specifies customized Bootstrap SCSS variables in [`_variables-overrides.scss`](https://github.com/thuliteio/doks-core/blob/main/assets/scss/common/_variables-overrides.scss) — instead of overriding _all_ Bootstrap SCSS variables — making customizations [easier and more robust](https://github.com/thuliteio/doks-core/blob/main/assets/scss/app.scss).

Add your customizations in `assets/scss/common/`:

```scss {title="_variables-custom.scss"}
/* Put your custom SCSS variables here */
```

```scss {title="_custom.scss"}
/* Put your custom SCSS code here */
```

<!-- omit in toc -->
## Bug Fixes

Additional bug fixes are included in this release. Check out the [release notes](https://github.com/thuliteio/doks-core/releases/tag/v1.3.0) to learn more.

---
title: "Parameters"
description: "Reference key Thulite site parameters in params.toml, including metadata defaults and render hook behavior for links and images."
summary: "Reference key Thulite site parameters in params.toml, including metadata defaults and render hook behavior for links and images."
date: 2026-05-11T11:14:33+02:00
lastmod: 2026-05-28T11:23:00+02:00
draft: false
weight: 427
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This reference guide describes the main site parameters in `config/_default/params.toml`.

## Example

```toml {title="params.toml"}
# Hugo
title = "My Thulite site"
description = "Congrats on setting up a new Thulite project!"
images = ["cover.png"]

# Debug
[render_hooks.image]
  errorLevel = 'ignore' # ignore (default), warning, or error (fails the build)

[render_hooks.link]
  errorLevel = 'ignore' # ignore (default), warning, or error (fails the build)
  highlightBroken = false # true or false (default)
```

## title

The website title used across the site output. A string — for example `"Thulite"`.

## description

The default website description used for metadata and previews. A string — for example `"Everything you need to make your Thulite website more visible in search results."`.

## images

Default site images used for social cards and metadata fallbacks. An array of strings — for example `["cover.png"]`.

## render_hooks

### image

#### errorLevel

Controls how image render hook issues are handled. A string — `ignore`, `warning`, or `error`.

### link

<!-- markdownlint-disable MD024 -->

#### errorLevel

<!-- markdownlint-enable MD024 -->

Controls how link render hook issues are handled. A string — `ignore`, `warning`, or `error`.

#### highlightBroken

Whether broken links are highlighted in rendered content. A boolean — `false` (default) or `true`.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Configure params" description="Official reference for site parameters in Hugo configuration." href="https://gohugo.io/configuration/params/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

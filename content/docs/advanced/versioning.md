---
title: "Versioning"
description: "Publish multiple release-specific docs versions with Hugo's versioning system and set a default content version."
summary: "Publish multiple release-specific docs versions with Hugo's versioning system and set a default content version."
date: 2026-08-25T12:10:17+02:00
lastmod: 2026-08-27T00:00:00+02:00
draft: false
weight: 325

toc: true
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Hugo supports versioned content for docs sites that need to publish multiple releases side by side. Each version is treated as a separate site dimension, with a default version selected for visitors who have not chosen a release.

## Quick setup

{{< steps >}}
{{< step >}}
Set the default version and define your releases in `hugo.toml`.
{{< /step >}}
{{< step >}}
Keep the same relative page paths across versions.
{{< /step >}}
{{< step >}}
Decide whether the default version should live at the root URL or in a version subdirectory.
{{< /step >}}
{{< /steps >}}

```toml {title=hugo.toml}
defaultContentVersion = "v2.0.0"
defaultContentVersionInSubdir = false

[versions]
  [versions.'v1.5.0']
    weight = 10
  [versions.'v2.0.0']
    weight = 20
  [versions.'v3.0.0']
    weight = 30
```

Hugo sorts versions by `weight`, then by semantic version. If `defaultContentVersionInSubdir` is `true`, the default release is published under its own directory, for example `/v2.0.0/`.

## Example URLs

- `/docs/getting-started/` → default version
- `/v1.5.0/docs/getting-started/` → older release
- `/v3.0.0/docs/getting-started/` → newer release

A simple docs layout is usually:

{{< tree >}}

- {folder} content
  - {folder} docs
    - {markdown} \_index.md
    - {markdown} getting-started.md
  - {markdown} \_index.md

{{< /tree >}}

Then repeat the same structure for each release you want to expose. Hugo keeps the versioned URLs aligned while allowing readers to switch between versions.

## Unversioned content

Versioning is a site dimension, so not every page should be versioned. A homepage, blog, or shared landing page often needs to be mounted outside the versioned content tree if you do not want it to inherit a version prefix. In other words, Hugo treats language × version × role as separate sites, so unversioned sections need extra care.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Configure versions" description="Official Hugo docs for defining default versions, sort order, and release-specific content." href="https://gohugo.io/configuration/versions/" target="_blank" >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Multidimensional content model" description="Discussion on how Hugo handles versioned and unversioned content in multilingual docs sites." href="https://discourse.gohugo.io/t/question-about-the-multi-dimensional-content-model/57494/8" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

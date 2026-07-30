---
title: "Settings"
description: "Reference core Hugo settings used by Thulite, including URLs, outputs, caching, taxonomies, minification, and related-content options."
summary: "Reference core Hugo settings used by Thulite, including URLs, outputs, caching, taxonomies, minification, and related-content options."
date: 2026-05-11T11:14:27+02:00
lastmod: 2026-05-28T11:23:00+02:00
draft: false
weight: 425
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This reference guide describes the main site settings in `config/_default/hugo.toml`

## Example

```toml {title="hugo.toml"}
title = "Thulite"
baseurl = "http://localhost/"
disableAliases = true
disableHugoGeneratorInject = true
disableKinds = ["taxonomy", "term"]
enableEmoji = true
enableGitInfo = false
enableRobotsTXT = true
languageCode = "en-US"
rssLimit = 10
summarylength = 20 # 70 (default)

copyRight = "Copyright (c) 2020-2026 Thulite"

[build.buildStats]
  enable = true

[outputs]
  home = ["HTML"]

[caches]
  [caches.getresource]
    dir = ":cacheDir/:project"
    maxAge = "30m"

[taxonomies]
  category = "categories"

[permalinks]
  blog = "/:title/"

[minify.tdewolff.html]
  keepComments = true # If set to false, build signatures are removed
  keepWhitespace = false

[related]
  threshold = 80
  includeNewer = true
  toLower = false
    [[related.indices]]
      name = "categories"
      weight = 100
    [[related.indices]]
      name = "tags"
      weight = 80
    [[related.indices]]
      name = "date"
      weight = 10
```

## title

The website title used across the site output. A string — for example `"Thulite"`.

## baseurl

The base URL used when generating absolute URLs. A string.

## disableAliases

Whether Hugo disables alias page generation. A boolean.

## disableHugoGeneratorInject

Whether Hugo omits the generator meta tag from rendered HTML. A boolean.

## disableKinds

Page kinds to disable during build. An array of strings.

## enableEmoji

Whether Hugo converts emoji shortcodes to emoji characters. A boolean.

## enableGitInfo

Whether Hugo adds Git metadata (for example commit date) to pages. A boolean.

## enableRobotsTXT

Whether Hugo generates a `robots.txt` file. A boolean — default is `true`.

## languageCode

The default site language code. A string — for example `"en-US"`.

## rssLimit

Maximum number of items in RSS feeds. A number.

## summarylength

The word count used for automatically generated summaries. A number.

## copyRight

Copyright text used by templates and metadata. A string.

## build.buildStats

### enable

Whether Hugo writes build statistics used by tooling. A boolean.

## outputs

### home

Output formats generated for the home page. An array of strings.

## caches

### getresource

Configuration for the resource cache directory and cache duration.

## taxonomies

Defines taxonomy names and their pluralized output paths.

## permalinks

Defines URL patterns per section or content type.

## minify.tdewolff.html

Controls HTML minification behavior, including comment and whitespace handling.

## related

Settings for Hugo related content matching and index weights.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="All settings" description="Complete list of Hugo configuration settings and defaults." href="https://gohugo.io/configuration/all/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

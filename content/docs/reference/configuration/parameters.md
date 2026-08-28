---
title: "Parameters"
description: "Reference key Thulite site parameters in params.toml, including metadata defaults and render hook behavior for links and images."
summary: "Reference key Thulite site parameters in params.toml, including metadata defaults and render hook behavior for links and images."
date: 2026-05-11T11:14:33+02:00
lastmod: 2026-05-28T11:23:00+02:00
draft: false
weight: 415
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
title = "My Docs"
description = "Congrats on setting up a new Doks project!"
images = ["cover.png"]

# mainSections
mainSections = ["docs"]

# Enable mathematical rendering on every page (unless you set the `math` parameter to `false` in front matter)
math = false # false (default) or true
mathEngine = "KaTeX" # "KaTeX" (default) or "MathJax"

[social]
  twitter = "getdoks"

# Doks (@thulite/doks-core)
[doks]
  # Color mode
  colorMode = "auto" # auto (default), light or dark
  colorModeToggler = true # true (default) or false (this setting is only relevant when colorMode = auto)

  # Navbar
  navbarSticky = true # true (default) or false
  containerBreakpoint = "fluid" # "", "sm", "md", "lg", "xl", "xxl", or "fluid" (default)

  ## Button
  navBarButton = false # false (default) or true
  navBarButtonUrl = "/docs/prologue/introduction/"
  navBarButtonText = "Get started"

  # FlexSearch
  flexSearch = true # true (default) or false
  searchExclKinds = [] # list of page kinds to exclude from search indexing (e.g. ["home", "taxonomy", "term"] )
  searchExclTypes = [] # list of content types to exclude from search indexing (e.g. ["blog", "docs", "legal", "contributors", "categories"])
  showSearch = [] # [] (all pages, default) or homepage (optionally) and list of sections (e.g. ["homepage", "blog", "guides"])
  indexSummary = false # true or false (default); whether to index only the `.Summary` instead of the full `.Content`; limits the respective JSON field size and thus increases loading time

  ## Search results
  showDate = false # false (default) or true
  showSummary = true # true (default) or false
  searchLimit = 99 # 0 (no limit, default) or natural number

  # Global alert
  alert = false # false (default) or true
  alertDismissable = true # true (default) or false

  # Bootstrap
  bootstrapJavascript = false # false (default) or true

  # Nav
  sectionSwitcher = false # true or false (default)
  sectionNav = ["docs"] # ["docs"] (default) or list of sections (e.g. ["docs", "guides"])
  toTopButton = false # false (default) or true
  breadcrumbTrail = false # false (default) or true
  headlineHash = true # true (default) or false
  scrollSpy = true # true (default) or false

  # Multilingual
  multilingualMode = false # false (default) or true
  showMissingLanguages = true # whether or not to show untranslated languages in the language menu; true (default) or false

  # Versioning
  docsVersioning = false # false (default) or true
  docsVersion = "1.0"

  # UX
  headerBar = false # true (default) or false
  backgroundDots = true # true (default) or false
  aiButtons = true # true (default) or false

  # Homepage
  sectionFooter = false # false (default) or true

  # Blog
  relatedPosts = false # false (default) or true
  imageList = true # true (default) or false
  imageSingle = true # true (default) or false

  # Repository
  editPage = false # false (default) or true
  lastMod = false # false (default) or true
  repoHost = "GitHub" # GitHub (default), Gitea, GitLab, Bitbucket, or BitbucketServer
  docsRepo = "https://github.com/h-enk/doks"
  docsRepoBranch = "main" # main (default), master, or <branch name>
  docsRepoSubPath = "" # "" (none, default) or <sub path>

  krokiURL = "https://kroki.io" # "https://kroki.io" (default) or custom URL like http://localhost:8000.
```

## title

The website title used across the site output. A string — for example `"Thulite"`.

## description

The default website description used for metadata and previews. A string — for example `"Everything you need to make your Thulite website more visible in search results."`.

## images

Default site images used for social cards and metadata fallbacks. An array of strings — for example `["cover.png"]`.

## mainSections

Sections used as the site's main content sections. An array of section names — for example `["docs"]`.

## math

Whether mathematical rendering is enabled by default. A boolean — `false` (default) or `true`. This can be overridden per page in front matter.

## mathEngine

The mathematical rendering engine. A string — `"KaTeX"` (default) or `"MathJax"`.

## social

Social profile settings.

### twitter

The Twitter or X username used for social metadata. A string — for example `"getdoks"`.

## doks

Theme and site behavior settings provided by Doks.

### colorMode

The default color mode. A string — `"auto"` (default), `"light"`, or `"dark"`.

### colorModeToggler

Whether the color mode toggle is displayed when `colorMode` is `"auto"`. A boolean — `true` (default) or `false`.

### navbarSticky

Whether the navbar remains visible while scrolling. A boolean — `true` (default) or `false`.

### containerBreakpoint

The responsive breakpoint at which the main container becomes fluid. A string — `""`, `"sm"`, `"md"`, `"lg"`, `"xl"`, `"xxl"`, or `"fluid"` (default).

### navBarButton

Whether the navbar button is displayed. A boolean — `false` (default) or `true`.

### navBarButtonUrl

The URL used by the navbar button. A string — for example `"/docs/prologue/introduction/"`.

### navBarButtonText

The label used by the navbar button. A string — for example `"Get started"`.

### flexSearch

Whether FlexSearch is enabled. A boolean — `true` (default) or `false`.

### searchExclKinds

Page kinds excluded from search indexing. An array of page kinds — for example `["home", "taxonomy", "term"]`.

### searchExclTypes

Content types excluded from search indexing. An array of content types — for example `["blog", "docs"]`.

### showSearch

Pages and sections included in the search interface. An array — `[]` (all pages, default), optionally including `"homepage"` and section names.

### indexSummary

Whether search indexes only each page's `.Summary` instead of its full `.Content`. A boolean — `false` (default) or `true`.

### showDate

Whether search results display page dates. A boolean — `false` (default) or `true`.

### showSummary

Whether search results display page summaries. A boolean — `true` (default) or `false`.

### searchLimit

The maximum number of search results. A number — `0` (no limit, default) or a natural number.

### alert

Whether the global alert is displayed. A boolean — `false` (default) or `true`.

### alertDismissable

Whether visitors can dismiss the global alert. A boolean — `true` (default) or `false`.

### bootstrapJavascript

Whether Bootstrap JavaScript is loaded. A boolean — `false` (default) or `true`.

### sectionSwitcher

Whether the section switcher is displayed in the navigation. A boolean — `false` (default) or `true`.

### sectionNav

The sections displayed in the section navigation. An array of section names — `["docs"]` (default) or a custom list.

### toTopButton

Whether the back-to-top button is displayed. A boolean — `false` (default) or `true`.

### breadcrumbTrail

Whether the breadcrumb trail is displayed. A boolean — `false` (default) or `true`.

### headlineHash

Whether headings include anchor links. A boolean — `true` (default) or `false`.

### scrollSpy

Whether the navigation tracks the heading visible in the viewport. A boolean — `true` (default) or `false`.

### multilingualMode

Whether multilingual navigation is enabled. A boolean — `false` (default) or `true`.

### showMissingLanguages

Whether untranslated languages are shown in the language menu. A boolean — `true` (default) or `false`.

### docsVersioning

Whether documentation versioning is enabled. A boolean — `false` (default) or `true`.

### docsVersion

The documentation version displayed by the versioning interface. A string — for example `"1.0"`.

### headerBar

Whether the header bar is displayed. A boolean — `true` (default) or `false`.

### backgroundDots

Whether the background dot pattern is displayed. A boolean — `true` (default) or `false`.

### aiButtons

Whether AI action buttons are displayed. A boolean — `true` (default) or `false`.

### sectionFooter

Whether section footer content is displayed on the homepage. A boolean — `false` (default) or `true`.

### relatedPosts

Whether related posts are displayed on blog pages. A boolean — `false` (default) or `true`.

### imageList

Whether images are displayed in blog lists. A boolean — `true` (default) or `false`.

### imageSingle

Whether images are displayed on individual blog posts. A boolean — `true` (default) or `false`.

### editPage

Whether an edit-page link is displayed. A boolean — `false` (default) or `true`.

### lastMod

Whether the last modification date is displayed. A boolean — `false` (default) or `true`.

### repoHost

The hosting service for the documentation repository. A string — `"GitHub"` (default), `"Gitea"`, `"GitLab"`, `"Bitbucket"`, or `"BitbucketServer"`.

### docsRepo

The URL of the documentation repository. A string — for example `"https://github.com/h-enk/doks"`.

### docsRepoBranch

The documentation repository branch. A string — `"main"` (default), `"master"`, or a branch name.

### docsRepoSubPath

The path to the documentation within the repository. A string — `""` (none, default) or a subpath.

### krokiURL

The URL of the Kroki service used to render diagrams. A string — `"https://kroki.io"` (default) or a custom URL.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Configure params" description="Official reference for site parameters in Hugo configuration." href="https://gohugo.io/configuration/params/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

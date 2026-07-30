---
title: "Configuration"
description: "Configure Doks by updating Hugo settings, project parameters, and page frontmatter, then apply integration-specific options when needed."
summary: "Configure Doks by updating Hugo settings, project parameters, and page frontmatter, then apply integration-specific options when needed."
date: 2026-04-27T12:46:23+02:00
lastmod: 2026-05-28T11:16:22+02:00
draft: false
weight: 115
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This page covers the main configuration tasks for a Doks project.

## Update settings

Update your [settings](/docs/reference/configuration/settings/) in `./config/_default/hugo.toml`:

```toml {title="hugo.toml"}
title = "My Docs"
baseurl = "http://localhost/"
disableAliases = true
disableHugoGeneratorInject = true
# disableKinds = ["taxonomy", "term"]
enableEmoji = true
enableGitInfo = false
enableRobotsTXT = true
languageCode = "en-US"
rssLimit = 10
summarylength = 20 # 70 (default)

# Multilingual
defaultContentLanguage = "en"
disableLanguages = ["de", "nl"]
defaultContentLanguageInSubdir = false

copyRight = "Copyright (c) 2020-2026 Thulite"

[build.buildStats]
  enable = true

[sitemap]
  changefreq = "monthly"
  filename = "sitemap.xml"
  priority = 0.5

[caches]
  [caches.getresource]
    dir = ":cacheDir/:project"
    maxAge = -1 # "30m"

[taxonomies]
  contributor = "contributors"
  category = "categories"
  tag = "tags"

[permalinks]
  blog = "/blog/:slug/"
  docs = "/docs/:sections[1:]/:slug/"
# docs = "/docs/1.0/:sections[1:]/:slug/"

[minify.tdewolff.html]
  keepComments = true # If set to false, build signatures are removed
  keepWhitespace = false

[pagination]
  pagerSize = 10

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

## Update parameters

Update your [parameters](/docs/reference/configuration/parameters/) in `./config/_default/params.toml`:

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

## Update page frontmatter

Update your [page frontmatter](/docs/reference/configuration/page-frontmatter/) in `./content/*.md` files:

```md {title="_index.md"}
---
title: "Welcome to Doks"
description: "Discover how the Doks Hugo theme helps you build fast, modern, and searchable documentation sites with a clean UI, dark mode, and powerful extras."
lead: "Congrats on setting up a new Doks project!"
date: 2023-09-07T16:33:54+02:00
lastmod: 2026-02-16T16:10:57+01:00
draft: false
---
```

## Integrations

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card title="Thulite SEO" description="Update settings, parameters, and page frontmatter." href="https://docs.thulite.io/seo/start-here/configuration/" >}}
{{< link-card title="Thulite Images" description="Update settings and parameters." href="https://docs.thulite.io/images/start-here/configuration/" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card title="Thulite SVG" description="Update your project's parameters" href="https://docs.thulite.io/svg/start-here/configuration/" class="w-50" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

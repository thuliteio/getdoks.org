---
title: "Manual Setup"
description: ""
summary: ""
date: 2023-09-12T14:03:48+02:00
lastmod: 2023-09-12T14:03:48+02:00
draft: true
weight: 120
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

The quickest way to create a new Doks site is using `create thulite` as shown in the [Getting Started guide](/docs/start-here/getting-started/#creating-a-new-project). If you want to add Doks to an existing Thulite project, this guide will explain how.

## Set up Doks

To follow this guide, you’ll need an existing Thulite project.

### Add the Doks integration

Doks is a [Thulite integration](https://docs.thulite.io/guides/integrations/). Add it to your site by running the following command in your project's root directory:

{{< tabs "install-doks" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/doks-core
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install @thulite/doks-core
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @thulite/doks-core
```

{{< /tab >}}
{{< /tabs >}}

This will install the required dependencies.

### Configure the integration

#### Add site configuration

Add the following settings to `config/_default/hugo.toml`:

{{< details "Settings" >}}

```toml {title="hugo.toml"}
# Multilingual
defaultContentLanguage = "en"
disableLanguages = ["de", "nl"]
defaultContentLanguageInSubdir = false

[outputs]
  home = ["HTML", "RSS", "searchIndex"]
  section = ["HTML", "RSS", "SITEMAP"]

[outputFormats.searchIndex]
  mediaType = "application/json"
  baseName = "search-index"
  isPlainText = true
  notAlternative = true

# Add output format for section sitemap.xml
[outputFormats.SITEMAP]
mediaType = "application/xml"
baseName = "sitemap"
isHTML = false
isPlainText = true
noUgly = true
rel  = "sitemap"
```

{{< /details >}}

#### Update mounts

Update the mounts configuration in `config/_default/module.toml`:

{{< details "Mounts" >}}

```toml {title="module.toml"}
# mounts
## archetypes
[[mounts]]
  source = "node_modules/@thulite/doks-core/archetypes"
  target = "archetypes"

[[mounts]]
  source = "archetypes"
  target = "archetypes"

## assets
[[mounts]]
  source = "node_modules/@thulite/core/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/@thulite/images/assets"
  target = "assets"
  excludeFiles = "/scss/**.scss"

[[mounts]]
  source = "node_modules/@thulite/doks-core/assets"
  target = "assets"
  excludeFiles = ["scss/common/_variables-custom.scss", "scss/common/_custom.scss"]

[[mounts]]
  source = "node_modules/flexsearch"
  target = "assets/js/vendor/flexsearch"

[[mounts]]
  source = "node_modules/katex"
  target = "assets/js/vendor/katex"

[[mounts]]
  source = "node_modules/mermaid"
  target = "assets/js/vendor/mermaid"

[[mounts]]
  source = "node_modules/@tabler/icons/icons"
  target = "assets/svgs/tabler-icons"

[[mounts]]
  source = "assets"
  target = "assets"

## content
[[mounts]]
  source = "content"
  target = "content"

## data
[[mounts]]
  source = "node_modules/@thulite/doks-core/data"
  target = "data"

[[mounts]]
  source = "data"
  target = "data"

## i18n
[[mounts]]
  source = "node_modules/@thulite/doks-core/i18n"
  target = "i18n"

[[mounts]]
  source = "i18n"
  target = "i18n"

## layouts
[[mounts]]
  source = "node_modules/@thulite/core/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@thulite/seo/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@thulite/images/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@thulite/doks-core/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@thulite/inline-svg/layouts"
  target = "layouts"

[[mounts]]
  source = "layouts"
  target = "layouts"

## static
[[mounts]]
  source = "node_modules/@thulite/doks-core/static"
  target = "static"

[[mounts]]
  source = "static"
  target = "static"
```

{{< /details >}}

#### Add parameters

Add the following parameters to `config/_default/params.toml`:

{{< details "Parameters" >}}

```toml {title="params.toml"}
# Doks (@thulite/doks-core)
[doks]
  # Color mode
  colorMode = "auto" # auto (default), light or dark
  colorModeToggler = true # true (default) or false (this setting is only relevant when colorMode = auto)

  # Navbar
  navbarSticky = true # true (default) or false
  containerBreakpoint = "lg" # "", "sm", "md", "lg" (default), "xl", "xxl", or "fluid"

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

  # Homepage
  sectionFooter = false # false (default) or true

  # Blog
  relatedPosts = false # false (default) or true
  imageList = true # true (default) or false
  imageSingle = true # true (default) or false

  # KaTex
  katex = false

  # Repository
  editPage = false # false (default) or true
  lastMod = false # false (default) or true
  repoHost = "GitHub" # GitHub (default), Gitea, GitLab, Bitbucket, or BitbucketServer
  docsRepo = "https://github.com/h-enk/doks"
  docsRepoBranch = "main" # main (default), master, or <branch name>
  docsRepoSubPath = "" # "" (none, default) or <sub path>

  # SCSS colors
  # backGround = "yellowgreen"
  ## Dark theme
  # textDark = "#dee2e6" # "#dee2e6" (default), "#dee2e6" (orignal), or custom color
  # accentDark = "#5d2f86" # "#5d2f86" (default), "#5d2f86" (original), or custom color
  ## Light theme
  # textLight = "#1d2d35" # "#1d2d35" (default), "#1d2d35" (orignal), or custom color
  # accentLight = "#8ed6fb" # "#8ed6fb" (default), "#8ed6fb" (orignal), or custom color

  [doks.menu]
    [doks.menu.section]
      auto = true # true (default) or false
      collapsibleSidebar = true # true (default) or false

# Debug
[render_hooks.image]
  errorLevel = 'ignore' # ignore (default), warning, or error (fails the build)

[render_hooks.link]
  errorLevel = 'ignore' # ignore (default), warning, or error (fails the build)
  highlightBroken = false # true or false (default)

# Images (@thulite/images)
[thulite_images]
  [thulite_images.landscape]
    normalize = "1360x765" # "1600x900" (default)
    lqip = "16x9" # "16x9" (default)
    widths = [480, 640, 800, 1024]
  [thulite_images.portrait]
    normalize = "765x1360" # "900x1600" (default)
    lqip = "9x16" # "9x16" (default)
    widths = [480, 640, 800, 1024]

# Inline SVG (@thulite/inline-svg)
[inline_svg]
  iconSetDir = "tabler-icons" # "tabler-icons" (default)

# SEO (@thulite/seo)
[seo]
  [seo.title]
    separator = " | "
    suffix = ""
  [seo.favicons]
    sizes = []
    icon = "favicon.png" # favicon.png (default)
    svgIcon = "favicon.svg" # favicon.svg (default)
    maskIcon = "mask-icon.svg" # mask-icon.svg (default)
    maskIconColor = "white" # white (default)
  [seo.schemas]
    type = "Organization" # Organization (default) or Person
    logo = "favicon-512x512.png" # Logo of Organization — favicon-512x512.png (default)
    name = "Thulite" # Name of Organization or Person
    sameAs = [] # E.g. ["https://github.com/thuliteio/thulite", "https://fosstodon.org/@thulite"]
    images = ["cover.png"] # ["cover.png"] (default)
    article = [] # Article sections
    newsArticle = [] # NewsArticle sections
    blogPosting = ["blog"] # BlogPosting sections
    product = [] # Product sections
```

{{< /details >}}

### Add fonts

Download the Doks source code of the [latest release](https://github.com/thuliteio/doks/releases/latest). Extract the archive and copy the `static` directory into your project's root.

### Add content

Doks is now set up and it’s time to add some content!

Add new pages to your site by creating `.md` or `.html` files in `content/docs/`. Use sub-folders to organize your files and to create multiple path segments.

For example, the following command will generate a page at `example.com/docs/guides/faq`:

{{< tabs "create-new-page" >}}
{{< tab "npm" >}}

```bash
npm run create docs/guides/faq.md
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run create docs/guides/faq.md
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run create docs/guides/faq.md
```

{{< /tab >}}
{{< /tabs >}}

{{< callout context="tip" title="Add default content" icon="outline/rocket" >}}
Download the Doks source code of the [latest release](https://github.com/thuliteio/doks/releases/latest). Extract the archive and copy the `content` directory into your project's root.
{{< /callout >}}

## Next steps

- **Configure**: Learn about common options in ["Customizing Doks"](/docs/guides/customization/).
- **Navigate**: Set up your sidebar with the ["Sidebar Navigation"](/docs/basics/navigation/#sidebar) guide.
- **Shortcodes**: Discover built-in callouts, tabs, and more in the ["Shortcodes"](/docs/basics/shortcodes/) guide.
- **Deploy**: Publish your work with the ["Deploy your site"](https://docs.thulite.io/guides/deploy/) guide in the Thulite docs.

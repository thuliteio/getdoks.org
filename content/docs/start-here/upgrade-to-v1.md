---
title: "Upgrade to v1"
description: ""
summary: ""
date: 2023-09-22T16:15:46+02:00
lastmod: 2023-09-22T16:15:46+02:00
draft: false
menu:
  docs:
    parent: ""
    identifier: "upgrade-to-v1-0759044a0c123f8852d4a7b22b02838e"
weight: 140
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

This guide will whelp you migrate from Doks v0.5 to Doks v1.

## Upgrade Doks

To follow this guide, you'll need an existing Doks v0.5 project.

### Clean dependencies

Clean dependencies currently installed to avoid conflicts.

{{< tabs "clean-dependencies" >}}
{{< tab "npm" >}}

```bash
npm run clean:install
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run clean:install
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run clean:install
```

{{< /tab >}}
{{< /tabs >}}

### Update `package.json`

Replace the contents of your project's `package.json` with the following:

```json {title="package.json"}
{
  "name": "doks",
  "version": "0.0.0",
  "description": "Doks theme",
  "author": "Hyas",
  "license": "MIT",
  "scripts": {
    "dev": "exec-bin node_modules/.bin/hugo/hugo server --bind=0.0.0.0 --disableFastRender --baseURL=http://localhost --noHTTPCache",
    "dev:drafts": "exec-bin node_modules/.bin/hugo/hugo server --bind=0.0.0.0 --disableFastRender --baseURL=http://localhost --noHTTPCache --buildDrafts",
    "create": "exec-bin node_modules/.bin/hugo/hugo new",
    "lint": "npm run lint:markdown",
    "lint:scripts": "eslint --cache themes/doks/assets/js",
    "lint:styles": "stylelint --cache \"themes/doks/assets/scss/**/*.{css,sass,scss}\"",
    "lint:markdown": "markdownlint-cli2 \"*.md\" \"content/**/*.md\"",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "exec-bin node_modules/.bin/hugo/hugo --minify",
    "preview": "http-server --gzip --brotli --ext=html --cors",
    "clean": "npm run clean:build && npm run clean:lint && npm run clean:install",
    "clean:build": "shx rm -rf public resources .hugo_build.lock",
    "clean:install": "shx rm -rf node_modules package-lock.json yarn.lock pnpm-lock.yaml",
    "clean:lint": "shx rm -rf .eslintcache .stylelintcache",
    "preinfo": "npm version",
    "info": "npm list",
    "postinfo": "exec-bin node_modules/.bin/hugo/hugo version",
    "postinstall": "shx rm -rf node_modules/.bin/hugo && shx mkdir node_modules/.bin/hugo && shx cp node_modules/gethyas/node_modules/.bin/hugo/* node_modules/.bin/hugo"
  },
  "engines": {
    "node": ">=16.12.0"
  }
}
```

### Add ``.npmrc``

Add an `.npmrc` file to your project root with the following:

```ini {title=".npmrc"}
enable-pre-post-scripts = true
auto-install-peers = true
node-linker = hoisted
prefer-symlinked-executables = false
```

### Add the Doks integration

Doks is a [Hyas integration](https://docs.gethyas.com/guides/integrations/). Add it to your site by running the following command in your project’s root directory:

{{< tabs "install-doks" >}}
{{< tab "npm" >}}

```bash
npm install @hyas/doks-core@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install @hyas/doks-core@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @hyas/doks-core@latest
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
  source = "node_modules/@hyas/doks-core/archetypes"
  target = "archetypes"

[[mounts]]
  source = "archetypes"
  target = "archetypes"

## assets
[[mounts]]
  source = "node_modules/@hyas/core/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/@hyas/images/assets"
  target = "assets"
  excludeFiles = "/scss/**.scss"

[[mounts]]
  source = "node_modules/@hyas/doks-core/assets"
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
  source = "node_modules/@hyas/doks-core/data"
  target = "data"

[[mounts]]
  source = "config/_default/hyas"
  target = "data"

[[mounts]]
  source = "data"
  target = "data"

## i18n
[[mounts]]
  source = "node_modules/@hyas/doks-core/i18n"
  target = "i18n"

[[mounts]]
  source = "i18n"
  target = "i18n"

## layouts
[[mounts]]
  source = "node_modules/@hyas/core/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/seo/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/images/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/doks-core/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/inline-svg/layouts"
  target = "layouts"

[[mounts]]
  source = "layouts"
  target = "layouts"

## static
[[mounts]]
  source = "node_modules/@hyas/doks-core/static"
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
# Doks (@hyas/doks-core)
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

# Images (@hyas/images)
[hyas_images]
  [hyas_images.landscape]
    normalize = "1360x765" # "1600x900" (default)
    lqip = "16x9" # "16x9" (default)
    widths = [480, 640, 800, 1024]
  [hyas_images.portrait]
    normalize = "765x1360" # "900x1600" (default)
    lqip = "9x16" # "9x16" (default)
    widths = [480, 640, 800, 1024]

# Inline SVG (@hyas/inline-svg)
[inline_svg]
  iconSetDir = "tabler-icons" # "tabler-icons" (default)

# SEO (@hyas/seo)
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
    name = "Hyas" # Name of Organization or Person
    sameAs = [] # E.g. ["https://github.com/gethyas/hyas", "https://fosstodon.org/@hyas"]
    images = ["cover.png"] # ["cover.png"] (default)
    article = [] # Article sections
    newsArticle = [] # NewsArticle sections
    blogPosting = ["blog"] # BlogPosting sections
    product = [] # Product sections
```

{{< /details >}}

{{< callout context="note" title="Need to continue?" icon="info-circle" >}}
After upgrading Doks to the latest version, you may not need to make any changes to your project at all!

But, if you notice errors or unexpected behavior, please check below for what has changed that might need updating in your project.
{{< /callout >}}

## Next steps

- **Configure**: Learn about common options in ["Customizing Doks"](/docs/guides/customization/).
- **Menus**: Set up your menus with the ["Menus"](/docs/basics/menus/) guide.
- **Shortcodes**: Discover built-in callouts, tabs, and more in the ["Shortcodes"](/docs/basics/shortcodes/) guide.
- **Deploy**: Publish your work with the ["Deploy your site"](https://docs.gethyas.com/guides/deploy/) guide in the Hyas docs.

## Known Issues

### ENOENT

When you get an `ENOENT` error message, clean and reinstall your projects' dependencies:

{{< tabs "reinstall-doks" >}}
{{< tab "npm" >}}

```bash
npm run clean:install && npm install
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run clean:install && pnpm install
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run clean:install && yarn install
```

{{< /tab >}}
{{< /tabs >}}

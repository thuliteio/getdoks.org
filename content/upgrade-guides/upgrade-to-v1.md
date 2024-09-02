---
title: "Upgrade to Doks v1"
description: ""
summary: ""
date: 2023-09-22T16:15:46+02:00
lastmod: 2023-09-22T16:15:46+02:00
draft: false
weight: 140
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

This guide will help you migrate from Doks v0.5 to Doks v1.

## Upgrade Doks

You can update your project by following the steps below.

### 1. Clean dependencies

Clean dependencies currently installed to avoid conflicts.

{{< tabs "clean-dependencies" >}}
{{< tab "npm" >}}

```bash
npx shx rm -rf node_modules package-lock.json
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm dlx shx rm -rf node_modules pnpm-lock.yaml
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn dlx shx rm -rf node_modules yarn.lock
```

{{< /tab >}}
{{< /tabs >}}

### 2. Update `package.json`

Replace the contents of your project's `package.json` with the following:

```json {title="package.json"}
{
  "name": "doks",
  "version": "0.0.0",
  "description": "Doks theme",
  "author": "Thulite",
  "license": "MIT",
  "scripts": {
    "create": "hugo new",
    "dev": "hugo server --disableFastRender --noHTTPCache",
    "format": "prettier **/** -w -c",
    "build": "hugo --minify --gc",
    "preview": "vite preview --outDir public"
  },
  "engines": {
    "node": ">=20.11.0"
  }
}

```

### 3. Install dependencies

Install the latest versions of Doks and other dependencies in your project:

{{< tabs "install-dependencies" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/doks-core@latest @thulite/images@latest @thulite/inline-svg@latest @thulite/seo@latest @tabler/icons@latest thulite@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install @thulite/doks-core@latest @thulite/images@latest @thulite/inline-svg@latest @thulite/seo@latest @tabler/icons@latest thulite@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @thulite/doks-core@latest @thulite/images@latest @thulite/inline-svg@latest @thulite/seo@latest @tabler/icons@latest thulite@latest
```

{{< /tab >}}
{{< /tabs >}}

### 4. Install Prettier and Vite

Install the latest versions of Prettier and Vite — as `devDependencies`:

{{< tabs "install-dev-dependencies" >}}
{{< tab "npm" >}}

```bash
npm install -D prettier@latest vite@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install -D prettier@latest vite@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add -D prettier@latest vite@latest
```

{{< /tab >}}
{{< /tabs >}}

### 5. Configure Doks

#### Add site configuration

Rename `config/_default/config.toml` to `config/_default/hugo.toml` and add the following settings:

{{< details "Settings" >}}

```toml {title="hugo.toml"}
title = "My Docs"
baseurl = "http://localhost/"
canonifyURLs = false
disableAliases = true
disableHugoGeneratorInject = true
# disableKinds = ["taxonomy", "term"]
enableEmoji = true
enableGitInfo = false
enableRobotsTXT = true
languageCode = "en-US"
paginate = 10
rssLimit = 10
summarylength = 20 # 70 (default)

# Multilingual
defaultContentLanguage = "en"
disableLanguages = ["de", "nl"]
defaultContentLanguageInSubdir = false

copyRight = "Copyright (c) 2020-2024 Thulite"

[build.buildStats]
  enable = true

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

[sitemap]
  changefreq = "monthly"
  filename = "sitemap.xml"
  priority = 0.5

[caches]
  [caches.getjson]
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

[imaging]
  anchor = "Center"
  bgColor = "#ffffff"
  hint = "photo"
  quality = 85
  resampleFilter = "Lanczos"
```

{{< /details >}}

#### Add mounts

Create `config/_default/module.toml` and add the following mounts:

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

[[mounts]]
  source = "node_modules/@thulite/doks-core/assets"
  target = "assets"

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
# Hugo
title = "My Docs"
description = "Congrats on setting up a new Doks project!"
images = ["cover.png"]

# mainSections
mainSections = ["docs"]

[social]
  twitter = "getdoks"

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

  # [doks.menu]
  #   [doks.menu.section]
  #     auto = true # true (default) or false
  #     collapsibleSidebar = true # true (default) or false

# Debug
[render_hooks.image]
  errorLevel = 'ignore' # ignore (default), warning, or error (fails the build)

[render_hooks.link]
  errorLevel = 'ignore' # ignore (default), warning, or error (fails the build)
  highlightBroken = false # true or false (default)

# Images (@thulite/images)
[thulite_images]
  [thulite_images.defaults]
    decoding = "async" # sync, async, or auto (default)
    fetchpriority = "auto" # high, low, or auto (default)
    loading = "lazy" # eager or lazy (default)
    widths = [480, 576, 768, 1025, 1200, 1440] # [640, 768, 1024, 1366, 1600, 1920] for example
    sizes = "auto" # 100vw (default), 75vw, or auto for example
    process = "" # "fill 1600x900" or "fill 2100x900" for example
    lqip = "16x webp q20" # "16x webp q20" or "21x webp q20" for example

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

#### Add PostCSS settings

Add the following settings to `config/postcss.config.js`:

{{< details "PostCSS" >}}

```js {title="postcss.config.js"}
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
    plugins: [
        autoprefixer(),
        purgecss({
            content: ['./hugo_stats.json'],
            extractors: [
                {
                    extractor: (content) => {
                        const els = JSON.parse(content).htmlElements;
                        return els.tags.concat(els.classes, els.ids);
                    },
                    extensions: ['json']
                }
            ],
            dynamicAttributes: [
                'aria-expanded',
                'data-bs-popper',
                'data-bs-target',
                'data-bs-theme',
                'data-dark-mode',
                'data-global-alert',
                'data-pane', // tabs.js
                'data-popper-placement',
                'data-sizes',
                'data-toggle-tab', // tabs.js
                'id',
                'size',
                'type'
            ],
            safelist: [
                'active',
                'btn-clipboard', // clipboards.js
                'clipboard', // clipboards.js
                'disabled',
                'hidden',
                'modal-backdrop', // search-modal.js
                'selected', // search-modal.js
                'show',
                'img-fluid',
                'blur-up',
                'lazyload',
                'lazyloaded',
                'alert-link',
                'container-fw ',
                'container-lg',
                'container-fluid',
                'offcanvas-backdrop',
                'figcaption',
                'dt',
                'dd',
                'showing',
                'hiding',
                'page-item',
                'page-link',
                ...whitelister(['./assets/scss/**/*.scss', './node_modules/@thulite/doks-core/assets/scss/components/_code.scss', './node_modules/@thulite/doks-core/assets/scss/components/_expressive-code.scss', './node_modules/@thulite/doks-core/assets/scss/common/_syntax.scss'])
            ]
        })
    ]
};
```

{{< /details >}}

### 6. Update assets

Rename the current `assets` directory to `assets-backup`. Download the Doks source code of the [latest release](https://github.com/thuliteio/doks/releases/latest). Extract the archive and copy the `assets` directory into your project's root.

### 7. Update layouts

Rename the current `layouts` directory to `layouts-backup`. Download the Doks source code of the [latest release](https://github.com/thuliteio/doks/releases/latest). Extract the archive and copy the `layouts` directory into your project's root.

{{< callout context="tip" title="Add default content" icon="outline/rocket" >}}
Rename the current `content` directory to `content-backup`. Download the Doks source code of the [latest release](https://github.com/thuliteio/doks/releases/latest). Extract the archive and copy the `content` directory into your project's root.
{{< /callout >}}

{{< callout context="note" title="Need to continue?" icon="outline/info-circle" >}}
After upgrading Doks to the latest version, you may not need to make any changes to your project at all!

But, if you notice errors or unexpected behavior, please check below for what has changed that might need updating in your project.
{{< /callout >}}

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

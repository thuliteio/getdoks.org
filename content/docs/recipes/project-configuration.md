---
title: "Project Configuration"
description: "Configure your Doks site. Doks uses Hugo's default config/ directory structure."
lead: "Configure your Doks site. Doks uses Hugo's default <code>config/</code> directory structure."
date: 2020-09-21T12:19:02+02:00
lastmod: 2020-09-21T12:19:02+02:00
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 110
toc: true
---

```bash
..
├── _default/
│   ├── config.toml
│   ├── menus.toml
│   └── params.toml
├── next/
│   └── config.toml
├── production/
│   └── config.toml
└── postcss.config.js
```

See also the Hugo docs: [Configure Hugo](https://gohugo.io/getting-started/configuration/).

## _default

Environments default configuration.

### config.toml

#### Basics

```toml
baseurl = "/"
canonifyURLs = false
disableAliases = true
disableHugoGeneratorInject = true
enableEmoji = true
enableGitInfo = false
enableRobotsTXT = true
languageCode = "en-US"
paginate = 7
rssLimit = 10
```

#### Netlify

```toml
# add redirects/headers
[outputs]
home = ["HTML", "RSS", "REDIRECTS", "HEADERS"]
section = ["HTML", "RSS", "SITEMAP"]

# remove .{ext} from text/netlify
[mediaTypes."text/netlify"]
suffixes = [""]
delimiter = ""

# add output format for netlify _redirects
[outputFormats.REDIRECTS]
mediaType = "text/netlify"
baseName = "_redirects"
isPlainText = true
notAlternative = true

# add output format for netlify _headers
[outputFormats.HEADERS]
mediaType = "text/netlify"
baseName = "_headers"
isPlainText = true
notAlternative = true
```

#### Markup

```toml
[markup]
  [markup.goldmark]
    [markup.goldmark.extensions]
      linkify = false
    [markup.goldmark.parser]
      autoHeadingID = true
      autoHeadingIDType = "github"
      [markup.goldmark.parser.attribute]
        block = true
        title = true
    [markup.goldmark.renderer]
      unsafe = true
  [markup.highlight]
    codeFences = false
    guessSyntax = false
    hl_Lines = ""
    lineNoStart = 1
    lineNos = false
    lineNumbersInTable = true
    noClasses = false
    style = "dracula"
    tabWidth = 4
```

#### Sitemap

```toml
[sitemap]
  changefreq = "weekly"
  filename = "sitemap.xml"
  priority = 0.5
```

#### Taxonomies

```toml
[taxonomies]
  contributor = "contributors"
```

#### RelPermalinks

```toml
[permalinks]
  blog = "/blog/:title/"
```

#### Modules

##### Doks child theme

```toml
[module]
  [[module.mounts]]
    source = "node_modules/@hyas/doks/archetypes"
    target = "archetypes"
  [[module.mounts]]
    source = "node_modules/@hyas/doks/assets"
    target = "assets"
#  [[module.mounts]]
#    source = "node_modules/@hyas/doks/content"
#    target = "content"
  [[module.mounts]]
    source = "node_modules/@hyas/doks/data"
    target = "data"
  [[module.mounts]]
    source = "node_modules/@hyas/doks/layouts"
    target = "layouts"
  [[module.mounts]]
    source = "node_modules/@hyas/doks/static"
    target = "static"
  [[module.mounts]]
    source = "node_modules/flexsearch"
    target = "assets/js/vendor/flexsearch"
  [[module.mounts]]
    source = "node_modules/katex"
    target = "assets/js/vendor/katex"
  [[module.mounts]]
    source = "assets"
    target = "assets"
  [[module.mounts]]
    source = "static"
    target = "static"
  [[module.mounts]]
    source = "content"
    target = "content"
  [[module.mounts]]
    source = "layouts"
    target = "layouts"
  [[module.mounts]]
    source = "archetypes"
    target = "archetypes"
  [[module.mounts]]
    source = "data"
    target = "data"
```

##### Doks starter theme

```toml
[module]
  [[module.mounts]]
    source = "assets"
    target = "assets"
  [[module.mounts]]
    source = "static"
    target = "static"
  [[module.mounts]]
    source = "node_modules/flexsearch"
    target = "assets/js/vendor/flexsearch"
  [[module.mounts]]
    source = "node_modules/katex"
    target = "assets/js/vendor/katex"
```

### menus.toml

See: [Menus]({{< relref "menus" >}})

### params.toml

#### Meta data

See also: [SEO]({{< relref "seo" >}})

##### Homepage

```toml
title = "Doks"
titleSeparator = "-"
titleAddition = "Modern Documentation Theme"
description = "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
```

##### Open Graph + Twitter Cards

```toml
images = ["doks.png"]
twitterSite = "henkverlinde"
twitterCreator = "henkverlinde"
facebookAuthor = "verlinde.henk"
facebookPublisher = "verlinde.henk"
ogLocale = "en_US"
```

##### JSON-LD

```toml
schemaType = "Organization"
schemaLogo = "logo-doks.png"
schemaTwitter = "https://twitter.com/henkverlinde"
schemaLinkedIn = "https://www.linkedin.com/in/henkverlinde/"
schemaGitHub = "https://github.com/h-enk"
schemaSection = "blog"
```

##### Sitelinks Search Box

```toml
siteLinksSearchBox = false
```

##### Chrome Browser

```toml
themeColor = "#fff"
```

#### Images

```toml
quality = 85
bgColor = "#fff"
landscapePhotoWidths = [900, 800, 700, 600, 500]
portraitPhotoWidths = [800, 700, 600, 500]
lqipWidth = "20x"
smallLimit = "300"
```

#### Footer

```toml
footer = "Powered by <a href=\"https://www.netlify.com/\">Netlify</a>, <a href=\"https://gohugo.io/\">Hugo</a>, and <a href=\"https://getdoks.org/\">Doks</a>"
```

#### Alert

```toml
alert = false
alertText = "Like Doks? <a class=\"alert-link\" href=\"https://github.com/h-enk/doks/stargazers\">Star on GitHub</a>. Thanks!</a>"
```

#### Edit page

```toml
# repoHost [Github | Gitea | GitLab | Bitbucket | BitbucketServer ] is used for building the edit link based on git hoster
repoHost = "GitHub"
#repoHost = "Gitea"
docsRepo = "https://github.com/h-enk/doks"
docsRepoBranch = "master"
docsRepoSubPath = ""
editPage = false
lastMod = false
```

{{< details "How to show the last modified date" >}}
If you'd like to show the last modified date (the last Git revision date), make sure that both `lastMod = true` and `enableGitInfo = true` (see also [Basics]({{< relref "docs/recipes/project-configuration#basics" >}}))
{{< /details >}}

#### Options

Switch main functionalities on/off — also optimizing CSS + JS footprint.

```toml
[options]
  lazySizes = true
  clipBoard = true
  instantPage = true
  flexSearch = true
  darkMode = true
  bootStrapJs = false
  breadCrumb = false
  highLight = true
  kaTex = false
  fullWidth = false
```

## next

Next environment specific configuration.

### config.toml

```toml
baseurl = "https://next.example.com/"
canonifyURLs = true
```

## production

Production environment specific configuration.

### config.toml

```toml
baseurl = "https://example.com/"
canonifyURLs = true
```

## postcss.config.js

Non development environments PostCSS configuration.

### Doks child theme

```js
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './node_modules/@hyas/doks/layouts/**/*.html',
        './node_modules/@hyas/doks/content/**/*.md',
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        ...whitelister([
          './node_modules/@hyas/doks/assets/scss/common/_variables.scss',
          './node_modules/@hyas/doks/assets/scss/components/_doks.scss',
          './node_modules/@hyas/doks/assets/scss/components/_code.scss',
          './node_modules/@hyas/doks/assets/scss/components/_buttons.scss',
          './node_modules/@hyas/doks/assets/scss/components/_search.scss',
          './node_modules/@hyas/doks/assets/scss/common/_dark.scss',
          './node_modules/katex/dist/katex.css',
        ]),
      ],
    }),
  ],
}
```

### Doks starter theme

```js
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        ...whitelister([
          './assets/scss/components/_doks.scss',
          './assets/scss/components/_code.scss',
          './assets/scss/components/_search.scss',
          './assets/scss/common/_dark.scss',
          './node_modules/katex/dist/katex.css',
        ]),
      ],
    }),
  ],
}
```

See also: [Unused CSS removal]({{< relref "performance#unused-css-removal" >}}).

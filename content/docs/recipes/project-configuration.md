---
title: "Project Configuration"
description: "Set and customize the Doks project configuration."
lead: "Set and customize the Doks project configuration."
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
├── production/
├── staging/
└── postcss.config.js
```

See also the Hugo docs: [Configure Hugo](https://gohugo.io/getting-started/configuration/).

## Set configuration

### params.toml

#### Meta data

See also: [SEO]({{< ref "seo" >}})

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
landscapePhotoWidths = [1000, 800, 700, 600, 500]
portraitPhotoWidths = [800, 700, 600, 500]
lqipWidth = "20x"
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
docsRepo = "https://github.com/h-enk/doks"
editPage = true
```

### menus.toml

See: [Menus]({{< ref "menus" >}})

## Customize configuration

### config.toml

#### Basics

```toml
baseurl = "/"
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
    [markup.goldmark.renderer]
      unsafe = true
  [markup.highlight]
    codeFences = true
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

#### Permalinks

```toml
[permalinks]
  blog = "/blog/:title/"
```

#### Modules

```toml
[module]
  [[module.mounts]]
    source = "assets"
    target = "assets"
  [[module.mounts]]
    source = "static"
    target = "static"
  [[module.mounts]]
    source = "node_modules/lazysizes"
    target = "assets/js/vendor/lazysizes"
  [[module.mounts]]
    source = "node_modules/instant.page"
    target = "assets/js/vendor/instant.page"
  [[module.mounts]]
    source = "node_modules/lazysizes"
    target = "assets/js/vendor/lazysizes"
  [[module.mounts]]
    source = "node_modules/flexsearch"
    target = "assets/js/vendor/flexsearch"
```

### postcss.config.js

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
        ...whitelister([
          './assets/scss/components/_code.scss',
          './assets/scss/components/_search.scss',
          './assets/scss/common/_dark.scss',
        ]),
      ],
    }),
  ],
}
```

See also: [Unused CSS removal]({{< ref "performance#unused-css-removal" >}}).

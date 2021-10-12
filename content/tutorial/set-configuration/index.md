---
title: "2. Set Configuration"
description: "Set configuration for Meta data, Images, Footer, Feed, Global alert, Edit page, and Options."
lead: "Set configuration for Meta data, Images, Footer, Feed, Global alert, Edit page, and Options."
date: 2020-11-30T14:27:14+01:00
lastmod: 2020-11-30T14:27:14+01:00
draft: false
images: []
menu:
  tutorial:
    parent: "tutorial"
weight: 040
toc: true
---

{{< alert icon="💡" text="<a href=\"https://code.visualstudio.com/\">Visual Studio Code</a> is a free code editor for Linux, macOS, and Windows." />}}

Open `./config/_default/params.toml` in your code editor.

## Meta data

Set meta data for Search Engine Optimization (SEO) and Social Media.

### Title + Description

Change these settings:

```toml
## Homepage
title = "Doks"
titleSeparator = "-"
titleAddition = "Modern Documentation Theme"
description = "Doks is a Hugo theme for building secure, fast, and SEO-ready documentation websites, which you can easily update and customize."
```

### Open Graph + Twitter Cards

Change these settings:

```toml
## Open Graph
images = ["doks.png"]
ogLocale = "en_US"
domainTLD = "doks.netlify.app"
titleHome = "Doks Theme"

## Twitter Cards
twitterSite = "@getdoks"
twitterCreator = "@henkverlinde"
```

{{< alert icon="👉" text="Put your image in the static folder." />}}

### JSON-LD

Change these settings:

```toml
## JSON-LD
# schemaType = "Person"
schemaType = "Organization"
schemaName = "Doks"
schemaAuthor = "Henk Verlinde"
schemaAuthorTwitter = "https://twitter.com/henkverlinde"
schemaAuthorLinkedIn = "https://www.linkedin.com/in/henkverlinde/"
schemaAuthorGitHub = "https://github.com/h-enk"
schemaLocale = "en-US"
schemaLogo = "logo-doks.png"
schemaLogoWidth = 512
schemaLogoHeight = 512
schemaImage = "doks.png"
schemaImageWidth = 1280
schemaImageHeight = 640
schemaTwitter = "https://twitter.com/getdoks"
schemaLinkedIn = ""
schemaGitHub = "https://github.com/h-enk/doks"
schemaSection = "blog"
```

{{< alert icon="👉" text="Put your logo in the static folder." />}}

### Sitelinks Search Box

Optionally, change sitelink search box setting — currently not supported by Doks:

```toml
## Sitelinks Search Box
siteLinksSearchBox = false
```

### Chrome Browser

Optionally, change Chrome browser theme color:

```toml
## Chrome Browser
themeColor = "#fff"
```

## Images

Optionally, change configuration for image shortcodes:

```toml
# Images
quality = 85
bgColor = "#fff"
landscapePhotoWidths = [900, 800, 700, 600, 500]
portraitPhotoWidths = [800, 700, 600, 500]
lqipWidth = "20x"
smallLimit = "300"
```

## Footer

Optionally, change footer message — please leave as is:

```toml
# Footer
footer = "Powered by <a href=\"https://www.netlify.com/\">Netlify</a>, <a href=\"https://gohugo.io/\">Hugo</a>, and <a href=\"https://getdoks.org/\">Doks</a>"
```

## Feed

Change RSS feed copyright notice:

```toml
# Feed
copyRight = "Copyright (c) 2020-2021 Henk Verlinde"
```

## Global alert

Optionally, change the global alert message (visible on all pages when activated). Switch it on by setting `alert = true` and make it dismissible by setting `alertDismissable = true`:

```toml
# Alert
alert = true
alertDismissable = true
alertText = "Help Doks grow by supporting us on Open Collective. <a class=\"alert-link stretched-link\" href=\"https://opencollective.com/doks\" target=\"_blank\" rel=\"noopener\">Become a backer!</a>"
```

## Edit page

Optionally, change edit page settings — you need a git repository to enable:

```toml
# Edit Page
docsRepo = "https://github.com/h-enk/doks"
docsRepoBranch = "master"
editPage = false
```

## Options

```toml
[options]
  lazySizes = true
  clipBoard = true
  instantPage = true
  flexSearch = true
  darkMode = true
  bootStrapJs = true
  breadCrumb = false
  highLight = true
  kaTex = false
  collapsibleSidebar = true
  multilingualMode = false
  docsVersioning = false
```

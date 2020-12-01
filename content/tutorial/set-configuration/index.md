---
title: "2. Set Configuration"
description: "Set configuration for Meta data, Images, Footer, Alert, and Edit page."
lead: "Set configuration for Meta data, Images, Footer, Alert, and Edit page."
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

{{< alert icon="💡" text="<a href=\"https://code.visualstudio.com/\">Visual Studio Code</a> is a free code editor for Linux, macOS, and Windows." >}}

Open `./config/_default/params.toml` in your code editor.

## Meta data

Set meta data for Search Engine Optimization (SEO) and Social Media sharing.

### Title + Description

Change these settings:

```toml
title = "Doks"
titleSeparator = "-"
titleAddition = "Modern Documentation Theme"
description = "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
```

### Open Graph + Twitter Cards

Change these settings:

```toml
images = ["doks.png"]
twitterSite = "henkverlinde"
twitterCreator = "henkverlinde"
facebookAuthor = "verlinde.henk"
facebookPublisher = "verlinde.henk"
ogLocale = "en_US"
```

{{< alert icon="👉" text="Put your image in the static folder." >}}

### JSON-LD

Change these settings:

```toml
schemaType = "Organization"
schemaLogo = "logo-doks.png"
schemaTwitter = "https://twitter.com/henkverlinde"
schemaLinkedIn = "https://www.linkedin.com/in/henkverlinde/"
schemaGitHub = "https://github.com/h-enk"
schemaSection = "blog"
```

{{< alert icon="👉" text="Put your logo in the static folder." >}}

### Sitelinks Search Box

Optionally, change sitelink search box setting — currently not supported by Doks:

```toml
siteLinksSearchBox = false
```

### Chrome Browser

Optionally, change Chrome browser theme color:

```toml
themeColor = "#fff"
```

## Images

Optionally, change configuration for image shortcodes:

```toml
quality = 85
bgColor = "#fff"
landscapePhotoWidths = [1000, 800, 700, 600, 500]
portraitPhotoWidths = [800, 700, 600, 500]
lqipWidth = "20x"
```

## Footer

Optionally, change footer message — please leave as is:

```toml
footer = "Powered by <a href=\"https://www.netlify.com/\">Netlify</a>, <a href=\"https://gohugo.io/\">Hugo</a>, and <a href=\"https://getdoks.org/\">Doks</a>"
```

## Alert

Optionally, change alert message settings — alert shown on homepage only:

```toml
alert = false
alertText = "Like Doks? <a class=\"alert-link\" href=\"https://github.com/h-enk/doks/stargazers\">Star on GitHub</a>. Thanks!</a>"
```

## Edit page

Optionally, change edit page settings — you need a git repository to enable:

```toml
docsRepo = "https://github.com/h-enk/doks"
editPage = false
```

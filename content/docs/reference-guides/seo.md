---
title: "SEO"
description: "Use sensible defaults for structured data, open graph, and Twitter cards. Or easily change the SEO settings to your liking."
lead: "Use sensible defaults for structured data, open graph, and Twitter cards. Or easily change the SEO settings to your liking."
date: 2020-09-18T14:25:19+02:00
lastmod: 2020-09-18T14:25:19+02:00
draft: false
images: []
menu: 
  docs:
    parent: "reference-guides"
weight: 330
toc: true
---

`./config/_default/params.toml`

## Homepage

```toml
title = "Doks"
titleSeparator = "-"
titleAddition = "Modern Documentation Theme"
description = "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
```

See also: [The Document Title element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)

## Open Graph + Twitter Cards

```toml
images = ["doks.png"]
twitterSite = "henkverlinde"
twitterCreator = "henkverlinde"
facebookAuthor = "verlinde.henk"
facebookPublisher = "verlinde.henk"
ogLocale = "en_US"
```

See also: [The Open Graph protocol](https://ogp.me/) and [Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

## JSON-LD

```toml
schemaType = "Organization"
schemaLogo = "logo-doks.png"
schemaTwitter = "https://twitter.com/henkverlinde"
schemaLinkedIn = "https://www.linkedin.com/in/henkverlinde/"
schemaGitHub = "https://github.com/h-enk"
schemaSection = "blog"
```

See also: [schema.org](https://schema.org/)

## Sitelinks Search Box

```toml
siteLinksSearchBox = false
```

See also: [Sitelinks search box](https://developers.google.com/search/docs/data-types/sitelinks-searchbox)

## Chrome Browser

```toml
themeColor = "#fff"
```

See also: [theme-color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color)

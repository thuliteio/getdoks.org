---
title: "Multilingual Mode"
description: "Doks is fully prepared for multilingual and i18n support."
lead: "Doks is fully prepared for multilingual and i18n support."
date: 2021-10-08T15:15:48+02:00
lastmod: 2021-10-08T15:15:48+02:00
draft: false
images: []
menu:
  docs:
    parent: "reference-guides"
weight: 395
toc: true
---

## Demo

- Available soon

## Configuration

### Enable

In `./config/_default/params.toml`, enable Multilinguage Mode:

```toml
[options]
  ..
  multilingualMode = true
  ..
```

### Set languages

In `./config/_default/config.toml`, set languages:

```toml
# Multilingual
defaultContentLanguage = "en"
disableLanguages = ["de", "nl"]
# defaultContentLanguageInSubdir = true
```

### Set language settings

In `./config/_default/languages.toml`, set language settings (for each language):

```toml
[en]
  languageName = "English"
  contentDir = "content/en"
  weight = 10
  [en.params]
    languageISO = "EN"

[de]
  languageName = "German"
  contentDir = "content/de"
  weight = 15
  [de.params]
    languageISO = "DE"
```

### Set menu entries

In `./config/_default/menus/menus.<ISO country code lowercase>.toml` (so, e.g. in `./config/_default/menus/menus.en.toml`), set menu entries (for each language).

### Set translation strings

In `./i18n/<ISO country code lowercase>.toml` (so, e.g. in `./i18n/en.toml`), set translation strings (for each language).

## Add content

In `./content.<ISO country code lowercase>/` (so, e.g. in `./content/en/`), add content (for each language).

## Build content

The content is build automatically with `npm run start` or `npm run build`.

```bash
..
Start building sites …
hugo v0.88.1-5BC54738+extended windows/amd64 BuildDate=2021-09-04T09:39:19Z VendorInfo=gohugoio

                   | EN | DE | NL
-------------------+----+----+-----
  Pages            | 29 |  7 | 24
  Paginator pages  |  0 |  0 |  0
  Non-page files   |  1 |  0 |  0
  Static files     | 89 | 89 | 89
  Processed images |  0 |  0 |  0
  Aliases          |  2 |  0 |  0
  Sitemaps         |  2 |  1 |  1
  Cleaned          |  0 |  0 |  0

Built in 985 ms
..
```

## Switch content

{{< img-simple src="multilingual-support.png" alt="Multilingual Support" class="d-block mx-auto shadow my-5" >}}

The language switch is part of the global navigation (available on all pages).

- If the current page is __available__ in the newly selected language, the corresponding page in the newly selected language is shown.
- If the current page is __not available__ in the newly selected language, the homepage of the newly selected language is shown.

## Resources

- [Multilingual Mode](https://gohugo.io/content-management/multilingual/)
- [Go multilingual with Hugo](https://xdeb.org/post/2018/04/05/go-multilingual-with-hugo/)
- [Hugo Multilingual Part 1: Content translation](https://www.regisphilibert.com/blog/2018/08/hugo-multilingual-part-1-managing-content-translation/)
- [Hugo Multilingual Part 2: Strings localization](https://www.regisphilibert.com/blog/2018/08/hugo-multilingual-part-2-i18n-string-localization/)
- [ISO 3166 country codes](https://www.iso.org/iso-3166-country-codes.html)
- [ISO 639 language codes](https://www.iso.org/iso-639-language-codes.html)

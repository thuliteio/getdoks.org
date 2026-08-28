---
title: "Internationalization"
description: "Set up multilingual Thulite sites using Hugo language config, translated content paths, and i18n string files for consistent localized experiences."
summary: "Set up multilingual Thulite sites using Hugo language config, translated content paths, and i18n string files for consistent localized experiences."
date: 2026-03-25T08:23:03+01:00
lastmod: 2026-05-28T11:21:22+02:00
draft: false
weight: 320
toc: true
params:
  toc: true
  math: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Internationalization (i18n) in Thulite is powered by Hugo's multilingual mode.

{{< callout context="tip" title="Looking for an example?" icon="bulb" >}}
Check out the [Doks Multilingual example project](https://github.com/thuliteio/doks-multilingual) and [demo site](https://profound-caramel-63661a.netlify.app/).
{{< /callout >}}

## Quick setup

{{< steps >}}
{{< step >}}
Enable multilingual mode in your Doks config.
{{< /step >}}
{{< step >}}
Define the default language and each supported language in your config.
{{< /step >}}
{{< step >}}
Create language-specific content folders and matching translated pages.
{{< /step >}}
{{< step >}}
Add translated UI strings and per-language menus if needed.
{{< /step >}}
{{< /steps >}}

## Enable multilingual mode

In `config/_default/params.toml`, turn on the Doks multilingual settings:

```toml {title="params.toml"}
[doks]
  multilingualMode = true
  showMissingLanguages = true
```

Then configure the default language in `config/_default/hugo.toml`:

```toml {title="hugo.toml"}
defaultContentLanguage = "en"
disableLanguages = []
defaultContentLanguageInSubdir = false
```

## Configure languages

In `config/_default/languages.toml`, add one block per language:

```toml {title="languages.toml"}
[en]
  contentDir = "content/en"
  languageCode = "en-US"
  languageName = "English"
  weight = 10

[de]
  contentDir = "content/de"
  languageCode = "de-DE"
  languageName = "Deutsch"
  weight = 20

[nl]
  contentDir = "content/nl"
  languageCode = "nl-NL"
  languageName = "Nederlands"
  weight = 30
```

`contentDir` tells Hugo where to look for that language's pages. This is the key setting for keeping each language isolated.

## Use language-specific content directories

Keep the same relative path for each translation:

- English: `content/en/docs/getting-started.md`
- German: `content/de/docs/getting-started.md`
- Dutch: `content/nl/docs/getting-started.md`

This keeps URLs and page structure aligned across translations.

## Mount content by language

If you use separate content folders with Doks, mount each folder into Hugo's content tree:

```toml {title="module.toml"}
[[mounts]]
  source = "content/en"
  target = "content"
  lang = "en"

[[mounts]]
  source = "content/de"
  target = "content"
  lang = "de"

[[mounts]]
  source = "content/nl"
  target = "content"
  lang = "nl"
```

This is especially useful when you want each language to share the same site structure while keeping content separate.

## Translate interface strings

Store shared UI translations in `i18n` files, such as:

- `i18n/en.toml`
- `i18n/de.toml`
- `i18n/nl.toml`

Example:

```toml
[read_more]
other = "Read more"
```

Use Hugo's `i18n` function in templates to render the correct language string.

## Optional: fill missing translations

If one language is incomplete, you can reuse content from the default language:

```toml {title="module.toml"}
[[mounts]]
  source = "content/en"
  target = "content"
  lang = "de"
```

This lets a translated site fall back to the default language for pages that are not yet available.

## Per-language menus

If your site has different navigation, create menu files like:

- `config/_default/menus/menus.en.toml`
- `config/_default/menus/menus.de.toml`
- `config/_default/menus/menus.nl.toml`

This keeps menu labels and links aligned with each language.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Multilingual mode" description="Official Hugo guide to configure and manage multilingual sites." href="https://gohugo.io/content-management/multilingual/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

---
title: "Internationalization"
description: "Set up multilingual Thulite sites using Hugo language config, translated content paths, and i18n string files for consistent localized experiences."
summary: "Set up multilingual Thulite sites using Hugo language config, translated content paths, and i18n string files for consistent localized experiences."
date: 2026-03-25T08:23:03+01:00
lastmod: 2026-05-28T11:21:22+02:00
draft: false
weight: 305
toc: true
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Internationalization (i18n) in Thulite is powered by Hugo's multilingual mode.

## Quick setup

{{< steps >}}
{{< step >}}
Define your languages in `config/_default/languages.toml`.
{{< /step >}}
{{< step >}}
Create language-specific content directories (for example, `content/en`, `content/de`, `content/nl`).
{{< /step >}}
{{< step >}}
Add translated pages with matching paths in each language directory.
{{< /step >}}
{{< step >}}
Add UI string translations in `i18n/*.toml`.
{{< /step >}}
{{< /steps >}}

## Configure languages

In `config/_default/languages.toml`, each language has its own settings:

```toml {title="languages.toml"}
[en]
  languageName = "English"
  contentDir = "content/en"
  weight = 10

[de]
  languageName = "German"
  contentDir = "content/de"
  weight = 15
```

`contentDir` tells Hugo where to find content for each language.

## Add translated content

Keep the same relative path for each translation.

- English: `content/en/docs/getting-started.md`
- German: `content/de/docs/getting-started.md`

This keeps URLs and page structure aligned across languages.

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

Use Hugo's `i18n` function in templates to render translated strings.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Multilingual mode" description="Official Hugo guide to configure and manage multilingual sites." href="https://gohugo.io/content-management/multilingual/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

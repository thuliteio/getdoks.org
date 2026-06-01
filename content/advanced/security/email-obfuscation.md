---
title: "Email Obfuscation"
description: "Protect published email addresses in Thulite using CSS-based obfuscation that remains readable for users while reducing basic scraping."
summary: "Protect published email addresses in Thulite using CSS-based obfuscation that remains readable for users while reducing basic scraping."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:21:22+02:00
draft: false
weight: 515
toc: true
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This guide shows how to obfuscate email addresses in Thulite using a simple, effective CSS technique.

## Background

The article [Email address obfuscation: What works in 2026?](https://spencermortensen.com/articles/email-obfuscation/) by Spencer Mortensen reviews ways to hide email addresses from spam bots while keeping them readable for users. It compares plain text, HTML entities, CSS display properties, JavaScript techniques, and other methods.

Results suggest that methods like CSS `display: none` and some JavaScript approaches are highly effective, while options like HTML comments and symbol substitution offer limited protection.

## Setup

{{< steps >}}
{{< step >}}

Add a default (fallback) email address to `config/_default/params.toml`:

```toml {title="params.toml"}
# defaultEmail
defaultEmail = "email@example.com"
```

{{< /step >}}
{{< step >}}

Add the following CSS to `assets/scss/common/_custom.scss`:

```scss {title="_custom.scss"}
span.email b {
  display: none;
}
```

{{< /step >}}
{{< step >}}

Create the shortcode file `layouts/shortcodes/email.html` with the following content:

```html {title="email.html"}
{{- /* Set defaults and get args. */}} {{- $address := index .Params 0 | default site.Params.defaultEmail }} {{- /* Get parts. */}} {{- $addressParts := split $address "@" }} {{- $userName := (index $addressParts 0) }} {{- $rootDomain := (index $addressParts 1) }} {{- $rootDomainParts := split $rootDomain "." }} {{- $domainName := (index $rootDomainParts 0) }} {{- $topLevelDomain := (index $rootDomainParts 1) }} {{- /* Render. */}} <span class="email"> {{- printf "%s@%s<b>.%s</b>.%s" $userName $domainName $domainName $topLevelDomain | safeHTML -}} </span>
```

This shortcode uses the provided email address or falls back to `defaultEmail`. It then splits the address into `userName`, `domainName`, and `topLevelDomain` and renders the obfuscated HTML.
{{< /step >}}
{{< /steps >}}

## Usage

You can now use the shortcode in Markdown with `defaultEmail`:

```md
{{</* email */>}}
```

Rendering:

```html
<span class="email">email@example<b>.example</b>.com</span>
```

Or provide an email address explicitly:

```md
{{</* email "team@example.com" */>}}
```

Rendering:

```html
<span class="email">team@example<b>.example</b>.com</span>
```

## Resources

- [Email address obfuscation: What works in 2026?](https://spencermortensen.com/articles/email-obfuscation/)

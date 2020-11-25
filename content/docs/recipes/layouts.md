---
title: "Layouts"
description: "Customize layouts."
lead: "Customize layouts."
date: 2020-09-21T14:13:01+02:00
lastmod: 2020-09-21T14:13:01+02:00
draft: false
images: []
menu: 
  docs:
    parent: "recipes"
weight: 140
toc: true
---

```bash
..
├── _default/
│   ├── baseof.html
│   ├── list.html
│   └── single.html
├── blog/
│   └── single.html
├── categories/
│   ├── list.html
│   └── terms.html
├── partials/
│   ├── content/
│   ├── footer/
│   │   ├── footer.html
│   │   └── script-footer.html
│   ├── head/
│   │   ├── favicons.html
│   │   ├── head.html
│   │   ├── opengraph.html
│   │   ├── resource-hints.html
│   │   ├── script-header.html
│   │   ├── seo.html
│   │   ├── structured-data.html
│   │   ├── stylesheet.html
│   │   └── twitter_cards.html
│   ├── header/
│   │   ├── alert.html
│   │   └── header.html
│   └── sidebar/
├── shortcodes/
│   ├── alert.html
│   ├── email.html
│   ├── img-simple.html
│   └── img.html
├── 404.html
├── index.headers
├── index.html
├── index.redirects
├── robots.txt
├── rss.xml
└── sitemap.xml
```

See also the Hugo docs: [Templates](https://gohugo.io/templates/).

## Customize _default

See the Hugo docs: [Base Templates and Blocks](https://gohugo.io/templates/base/)

## Customize blog

See the Hugo docs: [Single Page Templates](https://gohugo.io/templates/single-page-templates/)

## Customize categories

See the Hugo docs: [Taxonomy Templates](https://gohugo.io/templates/taxonomy-templates/)

## Customize partials

See the Hugo docs: [Partial Templates](https://gohugo.io/templates/partials/)

## Customize shortcodes

See the Hugo docs: [Create Your Own Shortcodes](https://gohugo.io/templates/shortcode-templates/)

## Customize 404.html

See the Hugo docs: [Custom 404 Page](https://gohugo.io/templates/404/)

## Customize index.headers

See: [Netlify]({{< ref "netlify#headers" >}}).

## Customize index.html

See the Hugo docs: [Homepage Template](https://gohugo.io/templates/homepage/)

## Customize index.redirects

See: [Netlify]({{< ref "netlify#redirects" >}}).

## Customize robots.txt

```txt
User-agent: *
{{ if eq (hugo.Environment) "production" -}}
Allow: /
{{ else -}}
Disallow: /
{{ end }}
Sitemap: {{ "sitemap.xml" | absURL -}}
```

See also the Hugo docs: [Robots.txt File](https://gohugo.io/templates/robots/)

## Customize rss.xml

See the Hugo docs: [RSS Templates](https://gohugo.io/templates/rss/)

## Customize sitemap.xml

See the Hugo docs: [Sitemap Template](https://gohugo.io/templates/sitemap-template/)

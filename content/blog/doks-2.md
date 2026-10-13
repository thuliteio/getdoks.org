---
title: "Doks 2"
url: "/blog/doks-2/"
description: "Doks 2 brings Hugo 0.166.0 support, requires Dart Sass instead of LibSass, and adds Portless for stable local development URLs."
summary: "Doks 2 brings Hugo 0.166.0 support, requires Dart Sass instead of LibSass, and adds Portless for stable local development URLs."
date: 2026-10-13T11:48:32+02:00
lastmod: 2026-10-13T11:48:32+02:00
draft: false
weight: 50
categories: []
tags: []
contributors: ["Henk Verlinde"]
pinned: false
homepage: false
params:
  math: false # enable mathematical rendering
  seo:
    title: "Doks 2 brings Hugo 0.166.0 support, requires Dart Sass instead of LibSass, and adds Portless for stable local development URLs." # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
Doks 2 is now available, with support for the latest Hugo release, a modern Sass compiler, and simpler local development URLs.

## Highlights

- Hugo 0.166.0
- Dart Sass
- Portless support

## Get started

To upgrade, follow the [Upgrade to Doks v2](/docs/start-here/updating/v2/) guide. See the [v2.0.0 release notes](https://github.com/thuliteio/doks/releases/tag/v2.0.0) for the full changelog.

## Hugo 0.166.0

Doks 2 is updated for [Hugo 0.166.0](https://github.com/gohugoio/hugo/releases/tag/v0.166.0).

## Dart Sass

LibSass support has been removed. Install [Dart Sass](https://sass-lang.com/install/) to compile your stylesheets.

## Portless

Use [Portless](/docs/start-here/usage/#start-portless-development-server) to develop at a stable, named `.localhost` URL over HTTPS instead of a port-numbered localhost URL.

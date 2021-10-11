---
title: "Versioned Documentation"
description: "Doks is fully prepared for versioned documentation support."
lead: "Doks is fully prepared for versioned documentation support."
date: 2021-10-11T16:42:11+02:00
lastmod: 2021-10-11T16:42:11+02:00
draft: false
images: []
menu:
  docs:
    parent: "extensions"
weight: 437
toc: true
---

## Demo

- Available soon

## Configuration

### Enable

In `./config/_default/params.toml`, enable Versioned Documentation:

```toml
[options]
  ..
  docsVersioning = true
  ..
```

### Set version

In `./config/_default/params.toml`, set version:

```toml
..
## Documentation
docsVersion = "1.0"
..
```

### Set permalink structure

In `./config/_default_/config.toml`, set permalink structure:

```toml
[permalinks]
  ..
  docs = "/docs/1.0/:sections[1:]/:title/"
```

### Set redirects

In `./layouts/index.redirects`, set redirects:

```bash
..
/docs/1.0/prologue/   /docs/1.0/prologue/introduction/
/docs/1.0/help/       /docs/1.0/help/how-to-update/
/docs/1.0/            /docs/1.0/prologue/introduction/
/docs/                /docs/1.0/prologue/introduction/

/docs/0.1/*           https://v0-1-0--doks-versioning-poc.netlify.app/docs/0.1/:splat  200
/docs/0.2/*           https://v0-2-0--doks-versioning-poc.netlify.app/docs/0.2/:splat  200
```

### Set menu entry

In `./config/_default/menus.en.toml`, set menu entry:

```toml
[[main]]
  name = "Docs"
  url = "/docs/1.0/prologue/introduction/"
  weight = 10
```

### Set version switch

In `./layouts/partials/header/header.html` (lines 109..123), set version switch:

```html
{{ if eq .Site.Params.options.docsVersioning true -}}
<div class="dropdown ms-3">
  <button class="btn btn-doks-light dropdown-toggle" id="doks-versions" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static" aria-label="Toggle version menu">
    <span class="d-none d-lg-inline">Doks</span> v{{ .Site.Params.docsVersion }}
  </button>
  <ul class="dropdown-menu dropdown-menu-end shadow rounded border-0" aria-labelledby="doks-versions">
    <li><a class="dropdown-item current" aria-current="true" href="/docs/{{ .Site.Params.docsVersion }}/prologue/introduction/">Latest ({{ .Site.Params.docsVersion }}.x)</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="/docs/0.2/prologue/introduction/">v0.2.x</a></li>
    <li><a class="dropdown-item" href="/docs/0.1/prologue/introduction/">v0.1.x</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="/docs/versions/">All versions</a></li>
  </ul>
</div>
{{ end -}}
```

### Set versions page

In `./content/en/versions.md`, set `draft: false`.

### Set branch deploys

In Netlify, under Site Settings > Build & deploy > Branches, set Branch deploys to All.

{{< img-simple src="deploy-all-branches.png" alt="Deploy All Branches" class="d-block mx-auto shadow my-5" >}}

## Process

1. Prepare new release in local code
2. Push changes
2. Add new release in Github

### Notes

- When pushing changes to the master or main branch, the changes will be part of the next release, and already visible on the live website.
- Use a next branch (merge when issuing the next release), when you do __not__ want future release changes already visible on the live website.
- Use a separate branch or repo, if would like to be able to update previous releases.

## Switch content

### Header switch

{{< img-simple src="versioned-docs-support.png" alt="Versioned Documentation Support" class="d-block mx-auto shadow my-5" >}}

### All versions page

{{< img-simple src="all-versions-page.png" alt="All Versions Page" class="d-block mx-auto shadow my-5" >}}

## Resources

- [Proxy to another service](https://docs.netlify.com/routing/redirects/rewrites-proxies/#proxy-to-another-service)

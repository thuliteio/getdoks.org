---
title: "Page Layouts"
description: "Build pages with a landing page, blog, or documentation layout. Add custom sections and components to suit your needs."
lead: "Build pages with a landing page, blog, or documentation layout. Add custom sections and components to suit your needs."
date: 2020-11-10T11:38:43+01:00
lastmod: 2020-11-10T11:38:43+01:00
draft: false
images: []
menu: 
  docs:
    parent: "reference-guides"
weight: 380
toc: true
---

## Default structure

See also: `./layouts/_default/baseof.html`

### Sections

{{< img-simple src="landing-page-layout.png" alt="Landing page layout" class="border rounded p-1" >}}

See also the Bootstrap documentation: [Layout](https://getbootstrap.com/docs/4.5/layout/overview/)

### Components

See the Bootstrap documentation: [Components](https://getbootstrap.com/docs/4.5/components/alerts/)

## Landing page

The homepage and 404 page have a landing page layout.

### Example

`./layouts/index.html` excerpt:

```html
{{ define "sidebar-prefooter" }}
<section class="section section-sm">
  <div class="container">
    <div class="row justify-content-center text-center mt-lg-3">
      <div class="col-lg-5">
        <h2 class="h4">Full text search</h2>
        <p>Search your Doks site with FlexSearch. Easily customize index settings and search options to your liking.</p>
      </div>
      <div class="col-lg-5">
        <h2 class="h4">Page layouts</h2>
        <p>Build pages with a landing page, blog, or documentation layout. Add custom sections and components to suit your needs.</p>
      </div>
      <div class="col-lg-5">
        <h2 class="h4">Dark mode</h2>
        <p>Switch to a low-light UI with the click of a button. Change colors with variables to match your branding.</p>
      </div>
    </div>
  </div>
</section>
{{ end }}
```

### Alert homepage

The homepage contains an alert component.

{{< alert icon="👉" text="Set `alert` and `alertText` in `./config/_default/params.toml`." >}}

## Blog page

### Example

`./layouts/blog/single.html`:

```html
{{ define "main" }}
<div class="row justify-content-center">
  <div class="col-md-12 col-lg-10 col-xl-8">
    <article>
      <div class="blog-header">
        <h1>{{ .Title }}</h1>
        {{ partial "main/blog-meta.html" . }}
      </div>
      <p class="lead">{{ .Params.lead | safeHTML }}</p>
      {{ .Content }}
    </article>
  </div>
</div>
{{ end }}
```

## Documentation page

### Example

`./layouts/docs/single.html`:

```html
{{ define "main" }}
 <div class="row flex-xl-nowrap">
  <div class="col-lg-5 col-xl-4 docs-sidebar">
   <nav class="docs-links" aria-label="Main navigation">
    {{ partial "sidebar/docs-menu.html" . }}
   </nav>
  </div>
  {{ if ne .Params.toc false -}}
  <nav class="docs-toc d-none d-xl-block col-xl-3" aria-label="Secondary navigation">
   {{ partial "sidebar/docs-toc.html" . }}
  </nav>
  {{ end -}}
  {{ if .Params.toc -}}
  <main class="docs-content col-lg-11 col-xl-9">
  {{ else -}}
  <main class="docs-content col-lg-11 col-xl-9 mx-xl-auto">
  {{ end -}}
   <h1>{{ .Title }}</h1>
   <p class="lead">{{ .Params.lead | safeHTML }}</p>
   {{ partial "main/headline-hash.html" .Content }}
   {{ if .Site.Params.editPage -}}
    {{ partial "main/edit-page.html" . }}
   {{ end -}}
   {{ partial "main/docs-navigation.html" . }}
  </main>
 </div>
{{ end }}
```

### main

The main section contains an _Edit this page on GitHub_ link.

{{< alert icon="👉" text="Set `editPage` and `docsRepo` in `./config/_default/params.toml`." >}}

### toc

A table of contents — the _On this page_ section — is automatically generated from the headings of the main section of a page.

{{< alert icon="💡" text="Disable the toc by setting it to false in the front matter of a page." >}}

### nav

See also: [Menus]({{< ref "menus" >}}).

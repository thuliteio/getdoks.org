---
title: "3. Add Pages"
description: "Customize the homepage, add a blog post, and add a documentation page."
lead: "Customize the homepage, add a blog post, and add a documentation page."
date: 2020-11-30T14:27:30+01:00
lastmod: 2020-11-30T14:27:30+01:00
draft: false
images: []
menu: 
  tutorial:
    parent: "tutorial"
weight: 050
toc: true
---

## Customize the homepage

Open `./layouts/index.html` in your code editor.

### Sections

The homepage consists of three sections:

{{< img-simple src="landing-page-layout.png" alt="Landing page layout" class="border rounded p-1" >}}

In `index.html`:

```html
{{ define "main" }}
..
{{ end }}

{{ define "sidebar-prefooter" }}
..
{{ end }}

{{ define "sidebar-footer" }}
..
{{ end }}
```

Per section, you can customize the [layout](https://getbootstrap.com/docs/4.5/layout/overview/):

1. optionally, add a [section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) element
2. add a [container](https://getbootstrap.com/docs/4.5/layout/overview/#containers)
3. add a [grid](https://getbootstrap.com/docs/4.5/layout/grid/)

### Components

Within a grid, you can use components like [buttons](https://getbootstrap.com/docs/4.5/components/buttons/), [forms](https://getbootstrap.com/docs/4.5/components/forms/), or [cards](https://getbootstrap.com/docs/4.5/components/card/). See the Bootstrap documentation for all available [components](https://getbootstrap.com/docs/4.5/components/alerts/).

### Example

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

## Add a blog post

Add a blog post using the `hugo new` command.

### Example

```bash
hugo new blog/say-hello-to-doks/index.md
```

#### index.md

```md
---
title: "Say hello to Doks 👋"
description: "Introducing Doks, a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Introducing Doks, a Hyas theme build by the creator of Hyas. Doks helps you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-11-04T09:19:42+01:00
lastmod: 2020-11-04T09:19:42+01:00
draft: false
weight: 50
images: ["say-hello-to-doks.png"]
contributors: ["Henk Verlinde"]
---

## Solid as a rock

Some website projects require a solid starting point. With a great developer experience and a sound user experience. Sometimes you just don’t want to start from scratch. That’s why I created Hyas 💚
```

#### Result

{{< img-simple src="say-hello-to-doks.png" alt="Say hello to Doks" class="border rounded p-1" >}}

## Add a documentation page

Add a documentation page using the `hugo new` command.

### Example

```bash
hugo new docs/prologue/introduction/index.md
```

#### index.md

```md
---
title: "Introduction"
description: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
lead: "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default."
date: 2020-10-06T08:48:57+00:00
lastmod: 2020-10-06T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "prologue"
weight: 010
toc: true
---

## Get started

There are two main ways to get started with Doks:
..
```

#### Result

{{< img-simple src="add-documentation-page.png" alt="Add documentation page" class="border rounded p-1" >}}

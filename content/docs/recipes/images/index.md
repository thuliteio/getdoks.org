---
title: "Images"
description: ""
lead: "Easily add an image with a Doks shortcode. The image is lazyloaded, blurred up, and responsive."
date: 2020-11-23T11:53:06+01:00
lastmod: 2020-11-23T11:53:06+01:00
draft: false
images: []
menu: 
  docs:
    parent: "recipes"
weight: 160
toc: true
---

{{< alert icon="💡" text="Valid image formats are: jpg, png, tiff, bmp, and gif." >}}

## Add a small image

Using `img`, `src`, and `data-src`.

### Prerequisites

- [Image shortcode configuration]({{< ref "project-configuration/#image-shortcode" >}}) set
- A small image in a Page Bundle

### Directions

1. Add the image to your page using shortcode `img-simple`.

### Example

```bash
{{</* img-simple src="square.png" alt="Square" class="border-0 rounded-circle" */>}}
```

Will be processed into:

{{< img-simple src="square.png" alt="Square" class="border-0 rounded-circle" >}}

## Add a large image

Using `figure` and `figcaption` with `img`, `src`, and `data-srcset`. With `noscript` fallback.

### Prerequisites

- [Image shortcode configuration]({{< ref "project-configuration/#image-shortcode" >}}) set
- A large image in a Page Bundle

### Directions

1. Add the image to your page using shortcode `img`.

### Example

```bash
{{</* img src="rectangle.png" alt="Rectangle" caption="<em>Rectangle</em>" class="border-0" */>}}
```

Will be processed into:

{{< img src="rectangle.png" alt="Rectangle" caption="<em>Rectangle</em>" class="border-0" >}}

## Additional resources

- [Page Bundles](https://gohugo.io/content-management/page-bundles/)
- [Image Processing Config](https://gohugo.io/content-management/image-processing/#image-processing-config)
- [Image Processing](https://gohugo.io/content-management/image-processing/)

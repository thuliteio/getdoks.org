---
title: "Images"
description: "Organize and reference images in Thulite using practical paths, accessible alt text, and asset guidelines that keep pages clear and performant."
summary: "Organize and reference images in Thulite using practical paths, accessible alt text, and asset guidelines that keep pages clear and performant."
date: 2026-05-15T16:27:22+02:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 245
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use images to support content and make pages easier to scan.

## Where to put images

- Put page and content images in `assets/images/`
- Reference them as `/images/<file-name>` in Markdown and templates
- Keep filenames descriptive and stable

Example from this project:

- `assets/images/vincent-van-zalinge-e5VzJJDODbQ-unsplash.jpg`

## Use images in Markdown

```md
![A yellow and black bird sitting on top of a body of water](/images/vincent-van-zalinge-e5VzJJDODbQ-unsplash.jpg)
```

Use meaningful alt text that describes the image content, not just the filename.

## Tips

- Prefer modern, web-friendly formats and reasonable file sizes
- Avoid very large originals when a smaller version is enough
- Keep decorative icons in `static/` when they are not content images

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/thulite.svg" title="Thulite Images" description="Optimization and responsive image delivery for Thulite." href="/images/" class="w-50" >}}
{{< link-card src="svgs/thulite.svg" title="Thulite SVG" description="Inline and optimize SVG usage in Thulite." href="/svg/" class="w-50" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

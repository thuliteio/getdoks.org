---
title: "Videos"
description: "Add a video with a Doks shortcode."
lead: "Add a video with a Doks shortcode."
date: 2021-06-15T13:08:44+02:00
lastmod: 2021-06-15T13:08:44+02:00
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 165
toc: true
---

```bash
./layouts/shortcode/video.html
```

## Usage

```md
{{</* video ratio="16x9" attributes="controls autoplay muted" webm-src="videos/flower.webm" mp4-src="videos/flower.mp4" */>}}
```

| Parameters | Values |
|----------|-------------|------|
| ratio | <1x1 \| 4x3 \| 16x9 \| 21x9> |
| attributes | [[Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attributes)] |
| webm-src | [path/to/file.webm] |
| mp4-src | [path/to/file.mp4] |
{.table-striped}

## Renders

```html
<div class="ratio ratio-16x9">
  <video controls autoplay muted>
    <source src="/videos/flower.webm" type="video/webm">
    <source src="/videos/flower.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
  </video>
</div>
```

{{< video ratio="16x9" attributes="controls autoplay muted" webm-src="videos/flower.webm" mp4-src="/videos/flower.mp4" >}}

## Resources

- [\<video\>: The Video Embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [Ratios](https://getbootstrap.com/docs/5.0/helpers/ratio/)
- [Custom aspect ratios](https://getbootstrap.com/docs/5.0/helpers/ratio/#sass-map)

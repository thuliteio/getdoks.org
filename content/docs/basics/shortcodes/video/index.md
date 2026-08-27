---
title: "Video"
description: "Use the Doks video shortcode to embed self-hosted HTML video with a consistent presentation, giving readers helpful visual context without external embeds."
summary: "Embed a self-hosted video using the HTML video element."
date: 2026-08-21T11:19:24+02:00
lastmod: 2026-08-21T11:19:24+02:00
draft: false
weight: 239

params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use the `video` shortcode to embed a self-hosted video from the page bundle. Place the video file(s) in the same folder as your `index.md` and reference them by filename without extension.

Supported formats: `.mp4` / `.m4v`, `.webm`, `.ogv`. Multiple formats can coexist — the shortcode adds a `<source>` for each one found.

## Usage

```go-html-template
{{</* video src="my-video" */>}}
```

## Parameters

| Parameter | Type | Default | Description |
| ----------- | ------ | --------- | ------------- |
| `src` | string | — | **Required.** Filename without extension, matched against page bundle resources. |
| `controls` | string | `"true"` | Set to `"false"` to hide the player controls. |
| `width` | string | `"100%"` | Width of the video element. |
| `height` | string | — | Height of the video element. |
| `autoplay` | string | — | Set to `"true"` to autoplay. |
| `loop` | string | — | Set to `"true"` to loop. |
| `muted` | string | — | Set to `"true"` to mute. |

A poster image is detected automatically if an image file with the same name exists in the page bundle.

## Example

{{< preview >}}
{{< video src="robin_-_21723 (540p)" autoplay="true" muted="true" >}}
{{< /preview >}}

```go-html-template
{{</* video src="robin_-_21723 (540p)" autoplay="true" muted="true" */>}}
```

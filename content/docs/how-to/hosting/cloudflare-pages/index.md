---
title: "Cloudflare Pages"
description: ""
lead: "Follow the <a href=\"https://developers.cloudflare.com/pages/get-started/\">Get Started</a> guide of the <a href=\"https://developers.cloudflare.com/pages/\">Cloudflare Pages documentation</a>."
date: 2022-06-13T15:07:55+02:00
lastmod: 2022-06-13T15:07:55+02:00
draft: false
images: []
menu:
  docs:
    parent: "hosting"
weight: 272
toc: true
---

{{< alert icon="👉" >}}
Make sure to set environment variable `NODE_VERSION` to the latest LTS version (or newer) as per the Doks [Requirements](https://getdoks.org/docs/overview/quick-start/#requirements).
{{< /alert >}}

## 1. Connect your Git provider to Pages

See the Cloudflare Pages documentation: [Connect your Git provider to Pages](https://developers.cloudflare.com/pages/get-started/#connect-your-git-provider-to-pages)

## 2. Configure your deployment

{{< img-simple src="deployment-configuration.png" alt="Deployment Configuration" class="d-block mx-auto shadow my-5" >}}

See also the Cloudflare Pages documentation: [Configure your deployment](https://developers.cloudflare.com/pages/get-started/#configure-your-deployment)

### Set environment variable

Set environment variable `NODE_VERSION` with as value the [latest LTS version](https://nodejs.org/) — currently (June 13, 2022): `16.15.1`.

{{< details "Why do I need to set the Node.js version?" >}}
Currently (June 13, 2022), Cloudflare Pages uses Node.js __12.18.0__ per default (see also the Cloudflare Pages documentation: [Language support and tools](https://developers.cloudflare.com/pages/platform/build-configuration/#language-support-and-tools)). However, Doks needs the [latest LTS version](https://nodejs.org/) or newer (see also the Doks [Requirements](https://getdoks.org/docs/overview/quick-start/#requirements)).
{{< /details >}}

## 3. Save and deploy

Select _Save and Deploy_.

## Example

- [doks-child-theme.pages.dev](https://doks-child-theme.pages.dev/)

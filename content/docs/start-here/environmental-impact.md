---
title: "Environmental Impact"
description: ""
summary: ""
date: 2023-09-12T14:09:18+02:00
lastmod: 2023-09-12T14:09:18+02:00
draft: true
weight: 130
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Estimates for the climate impact of the web industry range from between [2%](https://www.sciencefocus.com/science/what-is-the-carbon-footprint-of-the-internet/) and [4% of global carbon emissions](https://www.bbc.com/future/article/20200305-why-your-internet-habits-are-not-as-clean-as-you-think), roughly equivalent to the emissions of the airline industry. There are many complex factors in calculating the ecological impact of a website, but this guide includes a few tips for reducing the environmental footprint of your docs site.

The good news is, choosing Doks is a great start. According to the Website Carbon Calculator, this site is [cleaner than 97% of web pages tested](https://www.websitecarbon.com/website/images-gethyas-com-docs-start-here-getting-started/), producing 0.03g of CO₂ per page visit.

## Page weight

The more data a web page transfers, the more energy resources it requires. In April 2023, the median web page required a user to download more than 2,000 KB according to [data from the HTTP Archive](https://httparchive.org/reports/state-of-the-web).

Doks builds pages that are as lightweight as possible. For example, on a first visit, a user will download less than 50 KB of compressed data — just 2.5% of the HTTP archive median. With a good caching strategy, subsequent navigations can download as little as 10 KB.

### Images

While Doks provides a good baseline, images you add to your docs pages can quickly increase your page weight. Doks uses [Thulite' Images integration](https://images.thulite.io/) to optimize local images in your Markdown and HTML files.

### Caching

Caching is used to control how long a browser stores and reuses data it already downloaded. A good caching strategy makes sure that a user gets new content as soon as possible when it changes, but also avoids pointlessly downloading the same content over and over when it hasn't changed.

The most common way to configure caching is with the [`Cache-Control` HTTP header](https://csswizardry.com/2019/03/cache-control-for-civilians/). When using Doks, you can set a long cache time for everything in the `/public/` directory. This directory contains CSS, JavaScript, and other bundled assets that can be safely cached forever, reducing unnecessary downloads:

```bash
Cache-Control: public, max-age=31536000
```

How to configure caching depends on your web host. For example, Vercel applies this caching strategy for you with no config required, while you can set [custom headers for Netlify](https://docs.netlify.com/routing/headers/) by adding a `headers` section to your `netlify.toml` file:

```toml {title="netlify.toml"}
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control= '''
    public,
    max-age=31536000'''
```

## Power consumption

How a web page is built can impact the power it takes to run on a user's device. By using minimal JavaScript, Doks reduces the amount of processing power a user's phone, tablet, or computer needs to load and render pages.

Be mindful when adding features like analytics tracking scripts or JavaScript-heavy content like video embeds as these can increase the page power usage. If you need analytics, consider choosing a lightweight option like [Cabin](https://withcabin.com/), [Fathom](https://usefathom.com/), or [Plausible](https://plausible.io/). Embeds like YouTube and Vimeo videos can be improved by waiting to [load the video on user interaction](https://web.dev/iframe-lazy-loading/).

{{< callout context="tip" title="Did you know?" icon="outline/rocket" >}}
Parsing and compiling JavaScript is one of the most expensive tasks browsers have to do. Compared to rendering a JPEG image of the same size, [JavaScript can take more than 30 times longer to process](https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e).
{{< /callout >}}

## Hosting

Where a web page is hosted can have a big impact on how environmentally friendly your documentation site is. Data centers and server farms can have a large ecological impact, including high electricity consumption and intensive use of water.

Choosing a host that uses renewable energy will mean lower carbon emissions for your site. The [Green Web Directory](https://www.thegreenwebfoundation.org/directory/) is one tool that can help you find hosting companies.

## Comparisons

Curious how other docs frameworks compare?
These tests with the [Website Carbon Calculator][wcc] compare similar pages built with different tools.

| Framework                   | CO₂ per page visit |
| --------------------------- | ------------------ |
| [Doks][dk-carbon]           | 0.03g              |
| [VitePress][vp-carbon]      | 0.05g              |
| [Docus][dc-carbon]          | 0.09g              |
| [Sphinx][sx-carbon]         | 0.09g              |
| [MkDocs][mk-carbon]         | 0.11g              |
| [Nextra][nx-carbon]         | 0.11g              |
| [docsify][dy-carbon]        | 0.12g              |
| [Docusaurus][ds-carbon]     | 0.18g              |
| [Read the Docs][rtd-carbon] | 0.27g              |
| [GitBook][gb-carbon]        | 0.60g              |

{.mb-4}

<small>Data collected on 12 Dec 2023. Click a link to see up-to-date figures.</small>

[dk-carbon]: https://www.websitecarbon.com/website/images-gethyas-com-docs-start-here-getting-started/
[vp-carbon]: https://www.websitecarbon.com/website/vitepress-dev-guide-what-is-vitepress/
[dc-carbon]: https://www.websitecarbon.com/website/docus-dev-introduction-getting-started/
[sx-carbon]: https://www.websitecarbon.com/website/sphinx-doc-org-en-master-usage-quickstart-html/
[mk-carbon]: https://www.websitecarbon.com/website/mkdocs-org-getting-started/
[nx-carbon]: https://www.websitecarbon.com/website/nextra-site-docs-docs-theme-start/
[dy-carbon]: https://www.websitecarbon.com/website/docsify-js-org/
[ds-carbon]: https://www.websitecarbon.com/website/docusaurus-io-docs/
[rtd-carbon]: https://www.websitecarbon.com/website/docs-readthedocs-io-en-stable-index-html/
[gb-carbon]: https://www.websitecarbon.com/website/docs-gitbook-com/

## More resources

### Tools

- [Website Carbon Calculator][wcc]
- [GreenFrame](https://greenframe.io/)
- [Ecograder](https://ecograder.com/)
- [WebPageTest Carbon Control](https://www.webpagetest.org/carbon-control/)
- [Ecoping](https://ecoping.earth/)

### Articles and talks

- ["Building a greener web"](https://youtu.be/EfPoOt7T5lg), talk by Michelle Barker
- ["Sustainable Web Development Strategies Within An Organization"](https://www.smashingmagazine.com/2022/10/sustainable-web-development-strategies-organization/), article by Michelle Barker
- ["A sustainable web for everyone"](https://2021.stateofthebrowser.com/speakers/tom-greenwood/), talk by Tom Greenwood
- ["How Web Content Can Affect Power Usage"](https://webkit.org/blog/8970/how-web-content-can-affect-power-usage/), article by Benjamin Poulain and Simon Fraser

[wcc]: https://www.websitecarbon.com/

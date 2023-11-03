---
title: "Environmental impact"
description: ""
summary: ""
date: 2023-09-12T14:09:18+02:00
lastmod: 2023-09-12T14:09:18+02:00
draft: false
menu:
  docs:
    parent: ""
    identifier: "environmental-impact-c766394c949d7276e59449b61b67d532"
weight: 130
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Estimates for the climate impact of the web industry range from between [2%](https://www.sciencefocus.com/science/what-is-the-carbon-footprint-of-the-internet/) and [4% of global carbon emissions](https://www.bbc.com/future/article/20200305-why-your-internet-habits-are-not-as-clean-as-you-think), roughly equivalent to the emissions of the airline industry. There are many complex factors in calculating the ecological impact of a website, but this guide includes a few tips for reducing the environmental footprint of your docs site.

The good news is, choosing Doks is a great start. According to the Website Carbon Calculator, this site is [cleaner than 97% of web pages tested](https://www.websitecarbon.com/website/doks-netlify-app/), producing 0.03g of CO₂ per page visit.

## Page weight

The more data a web page transfers, the more energy resources it requires. In April 2023, the median web page required a user to download more than 2,000 KB according to [data from the HTTP Archive](https://httparchive.org/reports/state-of-the-web).

Doks builds pages that are as lightweight as possible. For example, on a first visit, a user will download less than 50 KB of compressed data — just 2.5% of the HTTP archive median. With a good caching strategy, subsequent navigations can download as little as 10 KB.

### Images

While Doks provides a good baseline, images you add to your docs pages can quickly increase your page weight. Doks uses [Hyas' Images integration](https://docs.gethyas.com/guides/integrations-guide/images/) to optimize local images in your Markdown and HTML files.

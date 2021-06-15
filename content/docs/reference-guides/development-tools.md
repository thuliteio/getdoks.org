---
title: "Development Tools"
description: "Code with confidence. Check styles, scripts, and markdown for errors and fix automatically or manually."
lead: "Code with confidence. Check styles, scripts, and markdown for errors and fix automatically or manually."
date: 2020-09-21T14:26:38+02:00
lastmod: 2020-09-21T14:26:38+02:00
draft: false
images: []
menu:
  docs:
    parent: "reference-guides"
weight: 340
toc: true
---

## Linting

See also: [lint]({{< relref "commands#lint" >}})

## Development server

{{< alert icon="💡" text="Get your local IP address by running <code>netstat -r</code> from the command line. Your IP address will be in the first (Destination) column." />}}

Doks makes the Hugo development webserver accessible by default at `http://localhost:1313` and `http://<local-ip-address>:1313`. The latter is handy for e.g. testing locally on mobile devices. Saved changes will live reload in the browser.

### Netlify DEV

Doks' `./netlify.toml` excerpt:

```toml
[dev]
  framework = "#custom"
  command = "npx rimraf public resources functions && npx hugo server --bind=0.0.0.0 --disableFastRender"
  targetPort = 1313
  port = 8888
  publish = "public"
  autoLaunch = false
```

See also the Netlify docs: [What is Netlify Dev?](https://cli.netlify.com/netlify-dev)

## Hyas CLI

See also the Hyas docs:

- [Hyas CLI](https://gethyas.com/docs/prologue/hyas-cli/)

## GitHub CLI

See also the GitHub docs:

- [Take GitHub to the command line](https://cli.github.com/)
- [Manual](https://cli.github.com/manual/)

## Netlify CLI

See also the Netlify docs:

- [Get started with Netlify CLI](https://docs.netlify.com/cli/get-started/)
- [Netlify CLI Command List](https://cli.netlify.com/)

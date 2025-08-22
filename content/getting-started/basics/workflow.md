---
title: "Workflow"
description: "Learn how to edit, build, preview, and deploy your Doks project using popular package managers."
summary: "Learn how to edit, build, preview, and deploy your Doks project using popular package managers."
date: 2024-10-10T09:06:42+02:00
lastmod: 2025-08-08T09:06:42+02:00
draft: false
weight: 230
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

## Edit your project

To make changes to your project, open your project folder in your code editor. Working in development mode with the development server running allows you to see updates to your site as you edit the code.

When working locally, [Hugo's development server](https://gohugo.io/commands/hugo_server/) lets you preview your work and automatically refreshes your browser when you make changes.

Inside your project directory, run the following command to start the development server:

{{< tabs "start-development-server" >}}
{{< tab "npm" >}}

```bash
npm run dev
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm dev
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn dev
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun dev
```

{{< /tab >}}
{{< /tabs >}}

This will log a message to your terminal with the URL of your local preview. Open this—clickable—URL to start browsing your site.

```txt {frame="none"}
Watching for changes in D:\THULITE\getdoks.org\{archetypes,assets,content,i18n,layouts,node_modules,package.json,static}
Watching for config changes in D:\THULITE\getdoks.org\config\_default, D:\THULITE\getdoks.org\config\_default\menus
Start building sites …
hugo v0.148.2-40c3d8233d4b123eff74725e5766fc6272f0a84d+extended windows/amd64 BuildDate=2025-07-27T12:43:24Z VendorInfo=gohugoio


                  │ EN
──────────────────┼─────
 Pages            │ 121
 Paginator pages  │   3
 Non-page files   │  49
 Static files     │  17
 Processed images │ 480
 Aliases          │   6
 Cleaned          │   0

Built in 780 ms
Environment: "development"
Serving pages from disk
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

## Build your site

To check the version of your site that will be created at build time, quit the development server (<kbd>Ctrl + C</kbd>) and run the appropriate build command for your package manager in your terminal.

{{< tabs "build-production-site" >}}
{{< tab "npm" >}}

```bash
npm run build
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm build
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn build
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run build
```

{{< /tab >}}
{{< /tabs >}}

Hugo will build a deploy-ready version of your site in a separate folder (`public/` by default) and you can watch its progress in the terminal. This will alert you to any build errors in your project before you deploy to production.

```txt {frame="none"}
Start building sites …
hugo v0.148.2-40c3d8233d4b123eff74725e5766fc6272f0a84d+extended windows/amd64 BuildDate=2025-07-27T12:43:24Z VendorInfo=gohugoio


                  │ EN
──────────────────┼─────
 Pages            │ 121
 Paginator pages  │   3
 Non-page files   │  49
 Static files     │  17
 Processed images │ 480
 Aliases          │   6
 Cleaned          │   2

Total in 1456 ms
```

## Preview your site

To preview the built version of your site locally, run the appropriate preview command for your package manager in your terminal.

{{< tabs "preview-production-build" >}}
{{< tab "npm" >}}

```bash
npm run preview
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm preview
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn preview
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun preview
```

{{< /tab >}}
{{< /tabs >}}

Note that, this previews your code as it existed when the build command was last run. This is meant to give you a preview of how your site will look when it is [deployed to the web](#deploy-your-site). Any later changes you make to your code after building will not be reflected while you preview your site until you run the build command again.

{{< callout context="note" title="Note" icon="outline/info-circle" >}}

Preview the build on your local network—for example on your mobile phone—by using the `--host` flag:

{{< tabs "preview-your-site" >}}
{{< tab "npm" >}}

```bash
npm run build -- --baseURL / && npm run preview -- --host
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm build --baseURL / && pnpm preview --host
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn build --baseURL / && yarn preview --host
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run build --baseURL / && bun preview --host
```

{{< /tab >}}
{{< /tabs >}}

{{< /callout >}}

```txt {frame="none"}
$ vite preview --outDir public --host
  ➜  Local:   http://localhost:4173/
  ➜  Network: http://192.168.1.23:4173/
  ➜  Network: http://192.168.144.1:4173/
  ➜  press h + enter to show help
```

## Deploy your site

You may wish to [deploy your new site right away](https://docs.thulite.io/guides/deploy/), before you begin to add or change too much code. This is helpful to get a minimal, working version of your site published and can save you extra time and effort troubleshooting your deployment later.

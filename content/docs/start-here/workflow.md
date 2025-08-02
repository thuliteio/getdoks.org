---
title: "Workflow"
description: "Learn how to edit, build, preview, and deploy your Doks project using popular package managers."
summary: "Learn how to edit, build, preview, and deploy your Doks project using popular package managers."
date: 2024-10-10T09:06:42+02:00
lastmod: 2024-10-10T09:06:42+02:00
draft: false
weight: 150
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

This will log a message to your terminal with the URL of your local preview. Open this URL to start browsing your site.

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

Use (<kbd>Ctrl + C</kbd>) to quit the preview and run another terminal command, such as restarting the development server to go back to [working in development mode](#edit-your-project) which does update as you edit to show a live preview of your code changes.

## Deploy your site

You may wish to [deploy your new site right away](https://docs.thulite.io/guides/deploy/), before you begin to add or change too much code. This is helpful to get a minimal, working version of your site published and can save you extra time and effort troubleshooting your deployment later.

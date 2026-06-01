---
title: "Usage"
description: "Follow the day-to-day Thulite workflow to create content, run the dev server, format files, build production output, and preview locally."
summary: "Follow the day-to-day Thulite workflow to create content, run the dev server, format files, build production output, and preview locally."
date: 2026-04-27T12:46:32+02:00
lastmod: 2026-05-28T11:16:22+02:00
draft: false
weight: 120
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This guide covers the standard development workflow for a Thulite project.

{{< callout context="note" icon="info-circle" >}}

See [Commands](/reference/commands/) for full command details.

{{< /callout >}}

## Create content

Add new pages with the `create` script. This command creates files in your `content/` directory using your project's archetypes.

{{< tabs "create-content-command" >}}
{{< tab "npm" >}}

```bash
npm run create about.md
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run create about.md
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run create about.md
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run create about.md
```

{{< /tab >}}
{{< /tabs >}}

Set `draft: false` in front matter when the page is ready to publish.

## Start development server

Open your project folder in your editor and run the development server so your browser refreshes while you work.

{{< tabs "start-development-server-command" >}}
{{< tab "npm" >}}

```bash
npm run dev
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run dev
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn dev
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run dev
```

{{< /tab >}}
{{< /tabs >}}

When the server starts, open the local URL shown in your terminal (for example, `http://localhost:1313/`).

## Format

Run the formatter before building or opening a pull request to keep Markdown, styles, and scripts consistent.

{{< tabs "format-command" >}}
{{< tab "npm" >}}

```bash
npm run format
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run format
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn format
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run format
```

{{< /tab >}}
{{< /tabs >}}

## Build

Before deploying, stop the development server (`Ctrl + C`) and create a production build.

{{< tabs "build-command" >}}
{{< tab "npm" >}}

```bash
npm run build
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run build
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

This generates deploy-ready output in `public/` and surfaces build errors early.

## Preview

Preview the built site locally to validate what will actually be deployed.

{{< tabs "preview-command" >}}
{{< tab "npm" >}}

```bash
npm run preview
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run preview
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn preview
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run preview
```

{{< /tab >}}
{{< /tabs >}}

Preview uses your most recent build. If you make code changes after building, run the build command again before previewing.

To test on other devices in your local network (for example, a phone), use `--host` with preview:

{{< tabs "preview-network-command" >}}
{{< tab "npm" >}}

```bash
npm run build && npm run preview -- --host
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run build && pnpm run preview --host
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn build && yarn preview --host
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run build && bun run preview --host
```

{{< /tab >}}
{{< /tabs >}}

## Deploy

Once everything looks good in preview, deploy your site.

- Follow the deployment guides in [Deploy overview](/basics/deployment/overview/).
- Use [Verification](/start-here/verification/) to validate quality and output before production updates.

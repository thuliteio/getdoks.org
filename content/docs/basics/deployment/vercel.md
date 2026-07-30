---
title: "Vercel"
description: "Deploy Thulite to Vercel with automatic project detection via UI or CLI, then use preview and production deployments from your Git workflow."
summary: "Deploy Thulite to Vercel with automatic project detection via UI or CLI, then use preview and production deployments from your Git workflow."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 289
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use [Vercel](https://vercel.com/) to deploy a Thulite site to its global edge network with minimal setup.

This guide shows how to deploy with the Vercel web UI or Vercel CLI.

## How to deploy

Deploy to Vercel using the web UI or Vercel CLI.

### Website UI Deployment

{{< steps >}}
{{< step >}}
Push your code to a remote Git repository (GitHub, GitLab, or Bitbucket).
{{< /step >}}
{{< step >}}
[Import your project](https://vercel.com/new) into Vercel.
{{< /step >}}
{{< step >}}
Vercel automatically detects Thulite and configures the correct settings.
{{< /step >}}
{{< step >}}
Your application is deployed!
{{< /step >}}
{{< /steps >}}

After your project is imported and deployed, subsequent branch pushes generate [Preview Deployments](https://vercel.com/docs/deployments/environments#preview-environment-pre-production), and changes to the production branch (commonly "main") trigger a [Production Deployment](https://vercel.com/docs/deployments/environments#production-environment).

{{< callout context="note" icon="bulb" >}}
Learn more about Vercel's [Git Integration](https://vercel.com/docs/git).
{{< /callout >}}

### CLI Deployment

{{< steps >}}
{{< step >}}
Install the [Vercel CLI](https://vercel.com/docs/cli), then run `vercel` to deploy.

{{< tabs "install-vercel-cli" >}}
{{< tab "npm" >}}

```bash
npm install --global vercel && vercel
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm add --global vercel && vercel
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn global add vercel && vercel
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun add --global vercel && vercel
```

{{< /tab >}}
{{< /tabs >}}

{{< /step >}}
{{< step >}}
Vercel automatically detects Thulite and configures the correct settings.
{{< /step >}}
{{< step >}}
When asked `Want to override the settings? [y/N]`, choose `N`.
{{< /step >}}
{{< step >}}
Your application is deployed!
{{< /step >}}
{{< /steps >}}

### Project config with vercel.json

Use `vercel.json` to override Vercel defaults and configure additional settings. For example, you can attach headers to HTTP responses from your deployments.

{{< callout context="note" icon="bulb" >}}
Learn more about [Vercel's project configuration](https://vercel.com/docs/project-configuration).
{{< /callout >}}

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Host on Vercel" description="Official Hugo guide for deploying sites on Vercel." href="https://gohugo.io/host-and-deploy/host-on-vercel/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

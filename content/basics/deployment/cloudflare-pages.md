---
title: "Cloudflare Pages"
description: "Deploy Thulite to Cloudflare Pages using Git integration or Wrangler, with correct build commands, output settings, and optional local preview."
summary: "Deploy Thulite to Cloudflare Pages using Git integration or Wrangler, with correct build commands, output settings, and optional local preview."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 512
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Deploy your Thulite project on [Cloudflare Pages](https://pages.cloudflare.com/), a JAMstack platform for building and shipping frontend sites.

## Prerequisites

To get started, you need:

- A Cloudflare account. If you do not already have one, you can create a free account during setup.
- Your app code pushed to a [GitHub](https://github.com/) or [GitLab](https://about.gitlab.com/) repository.

## Deploy with Git

{{< steps >}}
{{< step >}}
Set up a new project on Cloudflare Pages.
{{< /step >}}
{{< step >}}
Push your code to your Git repository (GitHub or GitLab).
{{< /step >}}
{{< step >}}
Log in to the Cloudflare dashboard, then select your account in Account Home > Pages.
{{< /step >}}
{{< step >}}
Select Create a new project, then choose Connect Git.
{{< /step >}}
{{< step >}}
Select the Git project you want to deploy, then click Begin setup.
{{< /step >}}
{{< step >}}
Use the following build settings:

- Framework preset: `exit 0`
- Build command: `npm run build`
- Build output directory: `public`
  {{< /step >}}
  {{< step >}}
  Click the Save and Deploy button.
  {{< /step >}}
  {{< /steps >}}

## Deploy with Wrangler

{{< steps >}}
{{< step >}}
Install the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) in your project:
{{< tabs "install-wrangler" >}}
{{< tab "npm" >}}

```bash
npm install wrangler --save-dev
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm add wrangler --save-dev
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add --dev wrangler
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun install wrangler --save-dev
```

{{< /tab >}}
{{< /tabs >}}
{{< /step >}}
{{< step >}}
Authorize Wrangler with your Cloudflare account using OAuth:

```bash
wrangler login
```

{{< /step >}}
{{< step >}}
Run your build command:

{{< tabs "run-build" >}}
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
yarn run build
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run build
```

{{< /tab >}}
{{< /tabs >}}

{{< /step >}}
{{< step >}}
Deploy the build output directory to Cloudflare Pages:

```bash
wrangler pages deploy public
```

{{< /step >}}
{{< /steps >}}

After Wrangler uploads your assets, it provides a preview URL so you can inspect your site. You will also see the new project in the Cloudflare Pages dashboard.

### Enable local preview with Wrangler

Update the preview script to run `wrangler` instead of Thulite's built-in preview command:

```json title="package.json"
"preview": "wrangler pages dev ./public"
```

## Troubleshooting

If you run into errors, check whether your local `node` version (`node -v`) matches the `NODE_VERSION` environment variable in Cloudflare Pages settings.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Host on Cloudflare" description="Official Hugo guide for deploying sites on Cloudflare Pages." href="https://gohugo.io/host-and-deploy/host-on-cloudflare/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

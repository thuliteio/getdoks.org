---
title: "Netlify"
description: "Deploy Thulite to Netlify through the web UI or CLI, configure build and publish settings, and manage runtime versions for reliable builds."
summary: "Deploy Thulite to Netlify through the web UI or CLI, configure build and publish settings, and manage runtime versions for reliable builds."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 521
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

[Netlify](https://www.netlify.com/) provides hosting and serverless backend services for web apps and static sites. You can host any Thulite site on Netlify.

This guide shows how to deploy with the Netlify web UI or Netlify CLI.

## How to deploy

Deploy to Netlify using the web UI or Netlify CLI.

### Website UI Deployment

If your project is in GitHub, GitLab, Bitbucket, or Azure DevOps, you can deploy from the Netlify web UI.

{{< steps >}}
{{< step >}}
Click Add a new site in your [Netlify dashboard](https://app.netlify.com/)
{{< /step >}}
{{< step >}}
Choose Import an existing project

When you import your Thulite repository from your Git provider, Netlify should automatically detect and pre-fill the correct configuration settings for you.
{{< /step >}}
{{< step >}}
Confirm these settings, then click Deploy:

- Build Command: `npm run build`
- Publish directory: `public`

{{< /step >}}
{{< /steps >}}

After deployment, you are redirected to the site overview page, where you can edit site details.

Future changes to your repository trigger preview and production deploys based on your configuration.

#### `netlify.toml` file

You can optionally add a `netlify.toml` file at the root of your repository to configure the build command, publish directory, and other settings such as environment variables and redirects. Netlify reads this file and applies the configuration automatically.

To configure default settings, create a `netlify.toml` file with the following content:

```toml {title="netlify.toml"}
[build]
  publish = "public"
  command = """\
  git config core.quotepath false && \
  npm install && \
  hugo build --gc --minify --baseURL "${URL}"
  """
```

{{< callout context="tip" icon="bulb" >}}
Learn more about [deploying with Git](https://docs.netlify.com/deploy/create-deploys/#deploy-with-git) in the Netlify docs.
{{< /callout >}}

### CLI Deployment

You can also create a new Netlify site and link your Git repository with the [Netlify CLI](https://cli.netlify.com/).

{{< steps >}}
{{< step >}}
Install Netlify's CLI globally

{{< tabs "install-netlify-cli" >}}
{{< tab "npm" >}}

```bash
npm install --global netlify-cli
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm add --global netlify-cli
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn global add netlify-cli
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun add --global netlify-cli
```

{{< /tab >}}
{{< /tabs >}}

{{< /step >}}
{{< step >}}
Run `netlify login`, then follow the prompts to authenticate.
{{< /step >}}
{{< step >}}
Run `netlify init` and follow the prompts.
{{< /step >}}
{{< step >}}
Confirm your build command (`npm run build`)

The CLI detects the build command (`npm run build`) and publish directory (`public`), and offers to generate a [`netlify.toml` file](#netlifytoml-file) with those settings.
{{< /step >}}
{{< step >}}
Build and deploy by pushing to Git

The CLI adds a deploy key to your repository, so Netlify rebuilds your site automatically on each `git push`.

{{< /step >}}
{{< /steps >}}

{{< callout context="tip" icon="bulb" >}}
Learn more about the [Netlify CLI](https://docs.netlify.com/deploy/create-deploys/#netlify-cli) in the Netlify docs.
{{< /callout >}}

### Set a Node.js Version

If you use the legacy [build image](https://docs.netlify.com/build/configure-builds/overview/#build-image-selection) (Focal) on Netlify, make sure your Node.js version is set. Thulite requires `v24.0.4` or later.

You can [specify your Node.js version in Netlify](https://docs.netlify.com/build/configure-builds/manage-dependencies/#nodejs-and-javascript) using:

- a [`.nvmrc`](https://github.com/nvm-sh/nvm#nvmrc) file in your base directory.
- a `NODE_VERSION` environment variable in your site's settings using the Netlify project dashboard.
- a `NODE_VERSION` environment variable in your site's `netlify.toml`, for example:

```toml {title="netlify.toml"}
[build.environment]
  DART_SASS_VERSION = "1.97.3"
  GO_VERSION = "1.26.0"
  HUGO_VERSION = "0.156.0"
  NODE_VERSION = "24.13.1"
  NPM_VERSION = "11.8.0"
  TZ = "Europe/Amsterdam"
```

## Using Netlify Functions

No special configuration is required to use Netlify Functions with Thulite. Add a `netlify/functions` directory to your project root, then follow [the Netlify Functions documentation](https://docs.netlify.com/build/functions/overview/) to get started.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Host on Netlify" description="Official Hugo guide for deploying sites on Netlify." href="https://gohugo.io/host-and-deploy/host-on-netlify/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

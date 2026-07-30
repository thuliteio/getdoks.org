---
title: "Github Pages"
description: "Host a Thulite site on GitHub Pages with a GitHub Actions workflow that builds, publishes artifacts, and deploys automatically on pushes."
summary: "Host a Thulite site on GitHub Pages with a GitHub Actions workflow that builds, publishes artifacts, and deploys automatically on pushes."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 283
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use [GitHub Pages](https://docs.github.com/en/pages) to host a Thulite site directly from a repository on [GitHub.com](https://github.com/).

{{< callout context="note" icon="bulb" >}}
Looking for an example? Check out the [official GitHub Pages Doks example project](https://github.com/thuliteio/doks-gh-pages)!
{{< /callout >}}

## How to deploy

Deploy your Thulite site to GitHub Pages with [GitHub Actions](https://github.com/features/actions), which builds and publishes your site automatically. Your source code must be hosted on GitHub.

Follow these steps:

{{< steps >}}
{{< step >}}

Create `.github/workflows/deploy.yml` in your project and paste in the workflow below.

```yaml {title="deploy.yml"}
# Sample workflow for building and deploying a Thulite site to GitHub Pages
name: Deploy Thulite site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches:
      - main

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

# Default to bash
defaults:
  run:
    shell: bash

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.161.1
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Install Dart Sass
        run: sudo snap install dart-sass
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
          fetch-depth: 0
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "24"
          cache: "npm"
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: "[[ -f package-lock.json || -f npm-shrinkwrap.json ]] && npm ci || true"
      - name: Build production website
        env:
          # For maximum backward compatibility with Hugo modules
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
          TZ: America/Los_Angeles
        run: |
          npm run build \
            -- \
            --baseURL "${{ steps.pages.outputs.base_url }}/"
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

{{< /step >}}
{{< step >}}

In GitHub, open your repository's Settings and go to Pages.
{{< /step >}}
{{< step >}}

Set Source to GitHub Actions.
{{< /step >}}
{{< step >}}

Commit the workflow file and push to GitHub.
{{< /step >}}
{{< step >}}

Copy the "Your site is published at" URL and set it as `baseurl` in `./config/production/hugo.toml`.
{{< /step >}}
{{< step >}}

Push the changes and wait for the action to complete successfully (about 30 seconds).
{{< /step >}}
{{< /steps >}}

That's it. After about a minute, your site is available at the "Your site is published at" URL. Each push to your Thulite repository triggers an automatic deployment.

{{< callout context="note" icon="bulb" title="Set up a custom domain" >}}
You can optionally set up a custom domain by adding the following `./public/CNAME` file to your project:

```txt
sub.mydomain.com
```

This will deploy your site at your custom domain instead of `user.github.io`. Don't forget to also [configure DNS for your domain provider](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain).
{{< /callout >}}

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Host on GitHub Pages" description="Official Hugo guide for deploying sites on GitHub Pages." href="https://gohugo.io/host-and-deploy/host-on-github-pages/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

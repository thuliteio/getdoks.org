---
title: "Deployment"
description: "Deploy your Doks site to Netlify or any other static web host."
lead: "Deploy your Doks site to Netlify or any other static web host."
date: 2020-04-20T12:46:25+02:00
lastmod: 2020-04-20T12:46:25+02:00
draft: false
images: []
menu:
  docs:
    parent: "recipes"
weight: 180
toc: true
---

{{< alert icon="👉" >}}
Make sure to set `baseURL` in `./config/production/config.toml` to the URL of your Doks website in production.
{{< /alert >}}

## Deploy to Netlify

See [Netlify]({{< relref "netlify" >}}).

## Deploy to GitHub Pages

{{< alert icon="💡" text="Check the <a href=\"https://github.com/h-enk/doks-gh-pages\">example repo</a> showing how to publish to GitHub Pages." />}}

1. Add `.github/workflows/deploy-github.yml`:

```yml
# Deploy your Hyas site to GitHub Pages

name: GitHub Pages

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-20.04
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Check for linting errors
        run: npm test

      - name: Build production website
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

2. Click on the __Actions__ tab of your GitHub repo and wait for the action to finish successfully (after approximately 30 seconds).

{{< img-simple src="select-branch.png" alt="Select branch" class="border-0" >}}

3. Go to the __Settings__ tab of your GitHub repo, and next to the __Pages__ section. Select branch `gh-pages` and click __Save__.
4. Copy the __Your site is published at__ URL and paste it as `baseurl` in `./config/production/config.toml`.
5. Set `canonifyURLs = true` in `./config/production/config.toml`.
6. Push the changes to GitHub and wait for the action to finish successfully (after approximately 30 seconds).
7. That's it. After a minute or so, you site is available at the __Your site is published at__ URL.

Now, after every push to the master branch, your site will be updated — automatically.

## Deploy to other hosts

See the Hugo Docs: [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/).

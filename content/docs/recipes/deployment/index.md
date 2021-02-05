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

## Deploy to Netlify

See [Netlify]({{< ref "netlify" >}}).

## Deploy to GitHub Pages

{{< alert icon="💡" text="Check the <a href=\"https://github.com/h-enk/doks-gh-pages\">example repo</a> showing how to publish to GitHub Pages." >}}

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
        runs-on: ubuntu-18.04
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v2
            with:
              node-version: '14'

          - name: Install dependencies
            run: npm ci

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
2. Click on the __Actions__ tab of your GitHub repo and wait for the action to finish succesfully (after approximately 30 seconds).

{{< img-simple src="select-branch.png" alt="Select branch" class="border-0" >}}

3. Go to the __Sections__ tab of your GitHub repo and scroll down to the __GitHub Pages__ section. Select branche `gh-pages` and click __Save__.
4. Copy the __Your site is published at__ URL and paste it as `baseurl` in `./config/production/config.toml`.
5. Push the changes to GitHub and wait for the action to finish succesfully (after approximately 30 seconds).
6. That's it. After a minute or so, you site is avaliable at the __Your site is published at__ URL.

Now, after every push to the master branch, your site will be updated — automatically.

## Deploy to other hosts

See the Hugo Docs: [Hosting & Deployment](https://gohugo.io/hosting-and-deployment/).

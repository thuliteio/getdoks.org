---
title: "Microsoft Azure"
description: "Deploy Thulite to Azure Static Web Apps from GitHub using the VS Code extension, generated workflows, and compatible Node and Hugo versions."
summary: "Deploy Thulite to Azure Static Web Apps from GitHub using the VS Code extension, generated workflows, and compatible Node and Hugo versions."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 519
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use [Azure](https://azure.microsoft.com/en-us) and its [Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static/) service to deploy your Thulite site.

{{< callout context="tip" icon="bulb" >}}
Looking for an example? Check out the [official Microsoft Azure Doks example project](https://github.com/thuliteio/doks-microsoft-azure)!
{{< /callout >}}

This guide shows how to deploy a Thulite site hosted on GitHub using Visual Studio Code. For other setups, see Microsoft's guide for the [Azure Pipelines Task](https://learn.microsoft.com/en-us/azure/devops/pipelines/tasks/reference/azure-static-web-app-v0?view=azure-pipelines).

## Prerequisites

To follow this guide, you need:

- An Azure account and subscription key. You can create a [free Azure account here](https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account?icid=azurefreeaccount).
- Your app code pushed to [GitHub](https://github.com/).
- The [SWA Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps) in [Visual Studio Code](https://code.visualstudio.com/).

## How to deploy

{{< steps >}}
{{< step >}}
Open your project in VS Code.
{{< /step >}}
{{< step >}}
Open the Static Web Apps extension, sign in to Azure, and click + to create a new Static Web App. You will be prompted to choose a subscription key.
{{< /step >}}
{{< step >}}
Follow the wizard to name your app, choose a framework preset, and set the app root (usually `/`) and build output location (use `/public`). Because Thulite is not in Azure's built-in templates, select `custom`. The wizard then creates a [GitHub Action](https://github.com/features/actions) in your repo's `.github` folder (created automatically if needed).

The GitHub Action deploys your app. You can track progress in your repository's Actions tab on GitHub. When it completes successfully, click Browse Website in the SWA extension progress window to open the deployed site.
{{< /step >}}
{{< /steps >}}

## Known Issues

Builds can fail if your Node or Hugo version is outdated.

### Node version

To resolve this, update your project's `package.json` with this snippet:

```json {title="package.json"}
{
  "engines": {
    "node": ">=24.13.0"
  }
}
```

### Hugo version

To resolve this, update your workflow file by providing a value for `HUGO_VERSION` in the `env` section:

```yaml {title="workflow.yml"}
jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    env:
      HUGO_VERSION: 0.157.0
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
          lfs: false
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: ${{ env.HUGO_VERSION }}
          extended: true
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: "npm"
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_NICE_BUSH_0D736421E }}
          repo_token: ${{ secrets.GITHUB_TOKEN }} # Used for Github integrations (i.e. PR comments)
          action: "upload"
          ###### Repository/Build Configurations - These values can be configured to match your app requirements. ######
          # For more information regarding Static Web App workflow configurations, please visit: https://aka.ms/swaworkflowconfig
          app_location: "public" # Pre-built app content directory
          api_location: "api" # Api source code path - optional
          output_location: "" # Already built, no further build needed
          skip_app_build: true
          ###### End of Repository/Build Configurations ######
```

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Host on Azure Static Web Apps" description="Official Hugo guide for deploying sites on Azure Static Web Apps." href="https://gohugo.io/host-and-deploy/host-on-azure-static-web-apps/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

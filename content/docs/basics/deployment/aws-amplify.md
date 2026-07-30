---
title: "AWS Amplify"
description: "Deploy Thulite to AWS Amplify with Git-based continuous deployment, custom amplify.yml settings, and correct build output from the public folder."
summary: "Deploy Thulite to AWS Amplify with Git-based continuous deployment, custom amplify.yml settings, and correct build output from the public folder."
date: 2026-05-28T08:24:49+02:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 281
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use AWS Amplify to deploy your Thulite site from a Git repository.

This project builds with `npm run build` and publishes the generated `public/` directory.

## How to deploy

{{< steps >}}
{{< step >}}
Push your project to GitHub, GitLab, or Bitbucket.
{{< /step >}}
{{< step >}}
In the AWS Amplify console, choose Deploy an app.
{{< /step >}}
{{< step >}}
Connect your repository and select the branch to deploy.
{{< /step >}}
{{< step >}}
Add an `amplify.yml` file so Amplify uses the correct build settings.
{{< /step >}}
{{< /steps >}}

## Example `amplify.yml`

```yml {title="amplify.yml"}
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: public
    files:
      - "**/*"
```

Amplify reads this file during deployment instead of relying on guessed defaults.

## Notes

- Thulite requires Node.js `24.13.0` or later
- If you need specific Hugo tooling versions, define them in Amplify environment settings or expand `amplify.yml`
- Each push to the connected branch triggers a new deploy

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Host on AWS Amplify" description="Official Hugo guide for deploying sites on AWS Amplify." href="https://gohugo.io/host-and-deploy/host-on-aws-amplify/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

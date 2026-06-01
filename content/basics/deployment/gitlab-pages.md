---
title: "Gitlab Pages"
description: "Deploy Thulite to GitLab Pages using a CI pipeline that installs dependencies, runs production builds, and publishes the public directory."
summary: "Deploy Thulite to GitLab Pages using a CI pipeline that installs dependencies, runs production builds, and publishes the public directory."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 515
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Use [GitLab Pages](https://docs.gitlab.com/user/project/pages/) to host a Thulite site for your [GitLab](https://about.gitlab.com/) projects, groups, or user account.

{{< callout context="tip" icon="bulb" >}}
Looking for an example? Check out the [GitLab Pages Doks example project](https://gitlab.com/h-enk/doks-gitlab-pages)!
{{< /callout >}}

## How to deploy

Follow these steps to deploy your Thulite site to GitLab Pages.

{{< steps >}}
{{< step >}}

Create `.gitlab-ci.yml` in the root of your project with the content below. This pipeline builds and deploys your site when you push changes:

```yaml {title=".gitlab-ci.yml"}
# The Docker image that will be used to build your app
image: node:lts
# Functions that should be executed before the build script is run
before_script:
  - npm ci
pages:
  script:
    - npm run build
  artifacts:
    paths:
      # The folder that contains the files to be exposed at the Page URL
      - public
  rules:
    # This ensures that only pushes to the default branch will trigger
    # a pages deploy
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
```

{{< /step >}}
{{< step >}}

In GitLab, open your repository's Deploy tab and go to Pages.
{{< /step >}}
{{< step >}}

Copy the Access pages URL and set it as `baseurl` in `./config/production/hugo.toml`.
{{< /step >}}
{{< step >}}

Push the changes to GitLab.
{{< /step >}}
{{< /steps >}}

That's it. After about a minute, your site is available at the Access pages URL.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Host on GitLab Pages" description="Official Hugo guide for deploying sites on GitLab Pages." href="https://gohugo.io/host-and-deploy/host-on-gitlab-pages/" target="_blank" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

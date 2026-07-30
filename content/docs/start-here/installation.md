---
title: "Installation"
description: "Create a new Doks project with the CLI, choose a template and variant, and bootstrap a ready-to-run site with optional integrations."
summary: "Create a new Doks project with the CLI, choose a template and variant, and bootstrap a ready-to-run site with optional integrations."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:16:22+02:00
draft: false
weight: 110
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This page guides you through creating a new Doks project with a template and recommended integrations.

## Create a new project

Run the command for your package manager to start an interactive [CLI](https://docs.thulite.io/thulite/reference/cli/) setup:

{{< tabs "create-new-site" >}}
{{< tab "npm" >}}

```bash
npm create thulite@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create thulite
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create thulite
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun create thulite
```

{{< /tab >}}
{{< /tabs >}}

This will guide you through an interactive setup process where you'll select your project name, [choose a template](https://thulite.io/templates/), and pick your preferred variant. Follow the prompts as shown below:

{{< steps >}}
{{< step >}}

Enter your project name /installation directory

```txt {frame="none"}
│
◆  Project name:
│  thulite-project
└
```

{{< /step >}}
{{< step >}}

Select a template

```txt {frame="none"}
◆  Select a template:
│  ● Doks theme
│  ○ Bolt theme
│  ○ Tailwind CSS starter
│  ○ Bootstrap starter
│  ○ Basic starter
└
```

{{< /step >}}
{{< step >}}

Select a variant

```txt {frame="none"}
◆  Select a variant:
│  ● With recommended integrations (SEO and Images)
└
```

{{< /step >}}
{{< step >}}

Install and start now?

```txt {frame="none"}
◆  Install with npm and start now?
│  ● Yes / ○ No
└
```

{{< /step >}}
{{< step >}}

Scaffolding project

```txt {frame="none"}
◇  Scaffolding project in /home/h-enk/thulite-project...
│
◇  Installing dependencies with npm...
│
◇  Starting dev server...
```

{{< /step >}}
{{< /steps >}}

You'll now have a new [project directory](/docs/basics/project-structure/) with all the necessary files and configurations for your site.
{.mt-3}

## Configure Doks

{{< link-card title="Configure Doks" description="Update settings, parameters, and page front matter." href="/docs/start-here/configuration/" >}}

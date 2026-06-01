---
title: "Tina CMS"
description: "Set up Tina CMS in a Thulite project, configure collections and scripts, and enable Git-backed editing for local and production workflows."
summary: "Set up Tina CMS in a Thulite project, configure collections and scripts, and enable Git-backed editing for local and production workflows."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:21:22+02:00
draft: false
weight: 815
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

[Tina CMS](https://tina.io/) is a Git-backed headless content management system.

## Prerequisites

To follow this guide, you'll need an existing [Thulite](https://thulite.io/) site.

## Setup

{{< steps >}}
{{< step >}}

Run one of the following commands to initialize Tina in your Thulite project.

{{< tabs "initialize-tina-command" >}}
{{< tab "npm" >}}

```bash
npx @tinacms/cli@latest init
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm dlx @tinacms/cli@latest init
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn dlx @tinacms/cli@latest init
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bunx @tinacms/cli@latest init
```

{{< /tab >}}
{{< /tabs >}}

<!-- markdownlint-disable MD033 -->

- When prompted for a Cloud ID, press <kbd>Enter</kbd> to skip. You can generate one later if you decide to use Tina Cloud.
- When prompted with "What framework are you using?", choose `Other`.
- When asked where public assets are stored, press <kbd>Enter</kbd>.
<!-- markdownlint-enable MD033 -->

After the command finishes, you should have a `.tina` folder in the project root and a generated `hello-world.md` file in `content/posts`.

{{< /step >}}
{{< step >}}

Update the `dev` script in `package.json`:

```json {title="package.json"}
{
  "scripts": {
    "dev": "tinacms dev -c \"hugo server --disableFastRender --noHTTPCache\""
  }
}
```

{{< /step >}}
{{< step >}}

Tina CMS is now set up in local mode. Test it by running the `dev` script, then navigating to `/admin/index.html#/collections/post`.

Editing the “Hello, World!” post will update the `content/posts/hello-world.md` file in your project directory.

{{< /step >}}
{{< step >}}

Set up your Tina collections by editing the `schema.collections` property in `.tina/config.ts`.

For example, you can add a required `posted` front matter field to posts:

```js {title=".tina/config.ts"}
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "posts",
        label: "Posts",
        path: "src/content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "posted",
            label: "Date Posted",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
```

Learn more about collections in the [Tina docs](https://tina.io/docs/reference/collections).
{{< /step >}}
{{< step >}}

In production, Tina CMS can commit changes directly to your GitHub repository. For production setup, you can use [TinaCloud](https://tina.io/docs/tinacloud) or self-host the [Tina Data Layer](https://tina.io/docs/self-hosted/overview).

{{< /step >}}
{{< /steps >}}

## Resources

- [Hugo + TinaCMS Setup Guide](https://tina.io/docs/frameworks/hugo)

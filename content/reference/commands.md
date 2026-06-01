---
title: "Commands"
description: "Reference Thulite project scripts for creating content, running development, formatting, building production output, and previewing locally."
summary: "Reference Thulite project scripts for creating content, running development, formatting, building production output, and previewing locally."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:23:00+02:00
draft: false
weight: 410
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

You can use the `scripts` in `package.json` to create new content and develop, format, build, and preview your project from a terminal window.

## `package.json` scripts

{{< callout context="note" icon="info-circle" >}}

You can add scripts to the `scripts` section for any commands you use frequently.

{{< /callout >}}

The following scripts for the most common commands (`create`, `dev`, `format`, `build`, and `preview`) are added for you automatically when you [create a new project](/start-here/installation/#create-a-new-project).

```json {title="package.json"}
{
  "scripts": {
    "create": "hugo new",
    "dev": "hugo server --disableFastRender --noHTTPCache",
    "format": "prettier **/** -w -c",
    "build": "hugo --minify --gc",
    "preview": "vite preview --outDir public"
  }
}
```

You will often use these commands, or the scripts that run them, without any flags. Add flags to the command when you want to customize the command’s behavior. For example, you may wish to start the development server on a different port, or build your site with verbose logs for debugging.

{{< tabs "command-flags" >}}
{{< tab "npm" >}}

```bash
# run the dev server on port 3000 using the `dev` script in `package.json`
npm run dev -- --port 3000

# build your site with verbose logs using the `build` script in `package.json`
npm run build -- --verbose
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
# run the dev server on port 3000 using the `dev` script in `package.json`
pnpm dev --port 3000

# build your site with verbose logs using the `build` script in `package.json`
pnpm build --verbose
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
# run the dev server on port 3000 using the `dev` script in `package.json`
yarn dev --port 3000

# build your site with verbose logs using the `build` script in `package.json`
yarn build --verbose
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
# run the dev server on port 3000 using the `dev` script in `package.json`
bun run dev --port 3000

# build your site with verbose logs using the `build` script in `package.json`
bun run build --verbose
```

{{< /tab >}}
{{< /tabs >}}

{{< callout context="note" icon="info-circle" >}}

The extra `--` before any flag is necessary for `npm` to pass your flags to the script.

{{< /callout >}}

{{< callout context="note" icon="info-circle" >}}

You can find the available flags for a command on the command's linked script page below.

{{< /callout >}}

### `create`

Run the following command in your terminal to [create new content](https://gohugo.io/commands/hugo_new_content/):

{{< tabs "create-command" >}}

{{< tab "npm" >}}

```bash
# npm run create [path] [flags]
npm run create
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
# pnpm run create [path] [flags]
pnpm run create
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
# yarn run create [path] [flags]
yarn run create
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
# bun run create [path] [flags]
bun run create
```

{{< /tab >}}
{{< /tabs >}}

For example, create an about page in the `content` directory of your project:

{{< tabs "create-page-command" >}}

{{< tab "npm" >}}

```bash
npm run create about.md
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run create about.md
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run create about.md
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run create about.md
```

{{< /tab >}}
{{< /tabs >}}

### `dev`

Run the following command in your terminal to start the [Hugo development server](https://gohugo.io/commands/hugo_server/):

{{< tabs "dev-command" >}}
{{< tab "npm" >}}

```bash
# npm run dev [flags]
npm run dev
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
# pnpm dev [flags]
pnpm dev
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
# yarn dev [flags]
yarn dev
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
# bun run dev [flags]
bun run dev
```

{{< /tab >}}
{{< /tabs >}}

### `format`

Run the following command in your terminal to run the [Prettier code formatter](https://prettier.io/docs/cli):

{{< tabs "format-command" >}}
{{< tab "npm" >}}

```bash
# npm run format [flags]
npm run format
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
# pnpm format [flags]
pnpm format
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
# yarn format [flags]
yarn format
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
# bun run format [flags]
bun run format
```

{{< /tab >}}
{{< /tabs >}}

### `build`

Run the following command in your terminal to [create a production build](https://gohugo.io/commands/hugo/):

{{< tabs "build-command" >}}
{{< tab "npm" >}}

```bash
# npm run build [flags]
npm run build
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
# pnpm build [flags]
pnpm build
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
# yarn build [flags]
yarn build
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
# bun run build [flags]
bun run build
```

{{< /tab >}}
{{< /tabs >}}

### `preview`

Run the following command in your terminal to [locally preview the production build](https://vite.dev/guide/cli.html#vite-preview):

{{< tabs "preview-command" >}}
{{< tab "npm" >}}

```bash
# npm run preview [flags]
npm run preview
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
# pnpm preview [flags]
pnpm preview
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
# yarn preview [flags]
yarn preview
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
# bun run preview [flags]
bun run preview
```

{{< /tab >}}
{{< /tabs >}}

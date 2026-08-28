---
title: "Editor Setup"
description: "Set up your editor for Thulite with recommended VS Code extensions and formatting commands to keep Markdown, styles, and scripts consistent."
summary: "Set up your editor for Thulite with recommended VS Code extensions and formatting commands to keep Markdown, styles, and scripts consistent."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:16:22+02:00
draft: false
weight: 145
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This page covers the editor and formatting tools we recommend for Thulite projects.

## Editor choice

Thulite works with any code editor, but we recommend [VS Code](https://code.visualstudio.com/) for the best experience. The VS Code engine also powers in-browser editors such as [GitHub Codespaces](https://github.com/features/codespaces).

If you use VS Code, install these extensions:

- [Hugo Language and Syntax Support](https://marketplace.visualstudio.com/items?itemName=budparr.language-hugo-vscode)
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Hugo Shortcodes](https://marketplace.visualstudio.com/items?itemName=thuliteio.hugo-shortcodes)

## Formatting

Thulite includes Prettier and a `format` script for formatting JavaScript, HTML, CSS, and other supported files. You can customize the defaults by updating the `.prettierrc.yaml` and `.prettierignore` files in your project root.

Use the command that matches your package manager:

{{< tabs "package-manager-1" >}}
{{< tab "npm" >}}

```bash
npm run format
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run format
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn format
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun run format
```

{{< /tab >}}
{{< /tabs >}}

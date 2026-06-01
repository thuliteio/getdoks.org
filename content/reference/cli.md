---
title: "CLI"
description: "Reference all create-thulite CLI arguments and options, including templates, interactive mode, overwrite behavior, and usage examples."
summary: "Reference all create-thulite CLI arguments and options, including templates, interactive mode, overwrite behavior, and usage examples."
date: 2026-04-28T14:55:21+02:00
lastmod: 2026-05-28T11:23:00+02:00
draft: false
weight: 405
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This reference guide describes the `create-thulite` CLI and all of its options.

## Usage

{{< tabs "usage" >}}
{{< tab "npm" >}}

```bash
npm create thulite@latest [DIRECTORY] [TEMPLATE] -- [OPTIONS]
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create thulite@latest [DIRECTORY] [TEMPLATE] [OPTIONS]
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create thulite@latest [DIRECTORY] [TEMPLATE] [OPTIONS]
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun create thulite@latest [DIRECTORY] [TEMPLATE] [OPTIONS]
```

{{< /tab >}}
{{< /tabs >}}

The CLI creates a new Thulite project in the specified directory, using the specified template. When running in a TTY (interactive terminal), it starts in interactive mode and prompts for any missing information.

## Arguments

### `DIRECTORY`

The name of the directory to create the project in. A string — for example `"my-project"`. Defaults to `"thulite-project"` when not provided in non-interactive mode, or prompted for in interactive mode.

### `TEMPLATE`

The template to scaffold the project from. A string — must be one of the [available template names](#--template). Can be passed as the second positional argument as a shorthand for `--template`.

## Options

### `--template`

**Alias:** `-t`

The template to scaffold the project from. A string — must be one of the available template names listed below. When omitted in interactive mode, the CLI will prompt for a framework and variant selection. When omitted in non-interactive mode, defaults to `"basic"`.

**Templates with recommended integrations (SEO and Images):**

| Name              | Description          |
| ----------------- | -------------------- |
| `doks`            | Doks theme           |
| `bolt`            | Bolt theme           |
| `tailwindcss-rec` | Tailwind CSS starter |
| `bootstrap-rec`   | Bootstrap starter    |
| `basic-rec`       | Basic starter        |

**Templates without recommended integrations:**

| Name          | Description          |
| ------------- | -------------------- |
| `tailwindcss` | Tailwind CSS starter |
| `bootstrap`   | Bootstrap starter    |
| `basic`       | Basic starter        |

**Examples:**

{{< tabs "examples" >}}
{{< tab "npm" >}}

```bash
npm create thulite@latest my-project -- --template doks
npm create thulite@latest my-project -- -t tailwindcss-rec
npm create thulite@latest my-project doks
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create thulite@latest my-project --template doks
pnpm create thulite@latest my-project -t tailwindcss-rec
pnpm create thulite@latest my-project doks
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create thulite@latest my-project --template doks
yarn create thulite@latest my-project -t tailwindcss-rec
yarn create thulite@latest my-project doks
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun create thulite@latest my-project --template doks
bun create thulite@latest my-project -t tailwindcss-rec
bun create thulite@latest my-project doks
```

{{< /tab >}}
{{< /tabs >}}

### `--immediate`

**Alias:** `-i`

A boolean flag. When set, the CLI will automatically install dependencies and start the development server after scaffolding. When omitted in interactive mode, the CLI will prompt whether to install and start now. When omitted in non-interactive mode, defaults to `false`.

**Example:**

{{< tabs "immediate" >}}
{{< tab "npm" >}}

```bash
npm create thulite@latest my-project -- --template basic-rec --immediate
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create thulite@latest my-project --template basic-rec --immediate
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create thulite@latest my-project --template basic-rec --immediate
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun create thulite@latest my-project --template basic-rec --immediate
```

{{< /tab >}}
{{< /tabs >}}

### `--overwrite`

A boolean flag. When set, any existing files in the target directory will be removed before scaffolding. When omitted in interactive mode, the CLI will prompt how to proceed if the target directory is not empty. When omitted in non-interactive mode, the operation is cancelled if the target directory is not empty.

**Example:**

{{< tabs "overwrite" >}}
{{< tab "npm" >}}

```bash
npm create thulite@latest my-project -- --overwrite
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create thulite@latest my-project --overwrite
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create thulite@latest my-project --overwrite
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun create thulite@latest my-project --overwrite
```

{{< /tab >}}
{{< /tabs >}}

### `--interactive` / `--no-interactive`

A boolean flag. Forces the CLI to run in interactive or non-interactive mode, overriding the automatic TTY detection. Use `--no-interactive` to run without prompts, for example in CI/CD environments. Defaults to the result of TTY detection.

**Example:**

{{< tabs "no-interactive" >}}
{{< tab "npm" >}}

```bash
npm create thulite@latest my-project -- --template doks --no-interactive
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create thulite@latest my-project --template doks --no-interactive
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create thulite@latest my-project --template doks --no-interactive
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun create thulite@latest my-project --template doks --no-interactive
```

{{< /tab >}}
{{< /tabs >}}

### `--help`

**Alias:** `-h`

A boolean flag. Prints the help message describing usage, available options, and templates, then exits.

**Example:**

{{< tabs "help" >}}
{{< tab "npm" >}}

```bash
npm create thulite@latest -- --help
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create thulite@latest --help
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create thulite@latest --help
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun create thulite@latest --help
```

{{< /tab >}}
{{< /tabs >}}

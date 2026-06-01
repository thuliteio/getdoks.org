---
title: "Dependencies"
description: "Understand how Thulite manages dependencies with npm and Hugo modules, why this approach was chosen, and the trade-offs versus alternatives."
summary: "Understand how Thulite manages dependencies with npm and Hugo modules, why this approach was chosen, and the trade-offs versus alternatives."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:16:22+02:00
draft: false
weight: 153
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Thulite helps you [build scalable and maintainable websites](/start-here/concepts/why-thulite/#solid-architecture) and leverages npm to [explicitly declare and isolate dependencies](https://12factor.net/dependencies).

## Explicit declaration and isolation

The [Dependencies](https://12factor.net/dependencies) section of the Twelve-Factor App encourages every app to declare and isolate all required dependencies.

In practice, this means:

- Use a dependency manifest to list what your project needs.
- Use a package manager or module system to install dependencies in a reproducible way.
- Avoid hidden dependencies from the host machine.

This improves reliability across environments and makes onboarding easier for new contributors.

## JavaScript

For JavaScript projects, this usually means declaring dependencies in `package.json` and installing them with [npm](https://www.npmjs.com/).

npm installs packages into a local `node_modules` directory, so your project does not depend on globally installed system packages. This keeps builds consistent between local development, CI, and production.

## Thulite

In Thulite, [integrations](https://thulite.io/integrations/) are npm packages declared in your project's `package.json`.

Thulite then uses Hugo's module configuration to [mount](https://gohugo.io/configuration/module/#mounts) relevant files from dependency `node_modules` directories into Hugo [component](https://gohugo.io/quick-reference/glossary/#component) directories. This makes those assets available to Hugo during the build process.

### Pros

- Centralizes dependency management in `package.json`.
- Familiar workflow for teams already using npm.
- Access to the broader JavaScript ecosystem and tooling.

### Cons

- Different from the default Hugo dependency workflow.

## Hugo

You can also manage dependencies with [Hugo Modules](https://gohugo.io/hugo-modules/use-modules/). In that approach:

1. Declare dependencies in a `go.mod` file.
2. Use Hugo's module system to pin and resolve versions consistently.

Hugo also provides [`hugo mod npm pack`](https://gohugo.io/commands/hugo_mod_npm_pack/), which generates a composite `package.json` from `package.hugo.json` files in your project and modules.

<!-- markdownlint-disable MD024 -->

### Pros

- Aligns with the standard Hugo module workflow.

### Cons

<!-- markdownlint-enable MD024 -->

- Using Hugo Modules requires you to have [Go](https://go.dev/dl/) installed.
- Using npm alongside Hugo Modules introduces _two_ dependency systems.
- Hugo's integrated npm support is still _experimental_.
- Hugo's integrated npm support is _limited_. For example, `scripts` in `package.json` are not supported.

## Chosen approach

Thulite chooses npm as the primary dependency manager because it keeps integrations and frontend tooling in one familiar workflow, without requiring Go or maintaining two parallel dependency systems. Hugo Modules are still used for mounting and composition, but npm-first dependency management gives most teams a simpler and more predictable setup.

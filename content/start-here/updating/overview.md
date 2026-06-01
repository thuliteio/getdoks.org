---
title: "Updating Overview"
linkTitle: "Overview"
description: "Learn how to update Thulite, track release changes, and use semantic versioning to plan safe upgrades across patch, minor, and major releases."
summary: "Learn how to update Thulite, track release changes, and use semantic versioning to plan safe upgrades across patch, minor, and major releases."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:16:22+02:00
draft: false
weight: 131
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

This page explains how to update Thulite, where to check what changed between releases, and how version numbers affect your upgrade path.

## Quick links

- Release notes: [all releases](https://github.com/thuliteio/thulite/releases) or [latest release](https://github.com/thuliteio/thulite/releases/latest)
- Full change history: [CHANGELOG.md](https://github.com/thuliteio/thulite/blob/main/CHANGELOG.md)
- Breaking-change instructions: [Upgrade Guides](#upgrade-guides)

## Update to the latest version

Use the command that matches your package manager.

{{< tabs "update-thulite-command" >}}
{{< tab "npm" >}}

```bash
npm install thulite@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade thulite --latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade thulite --latest
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun update thulite --latest
```

{{< /tab >}}
{{< /tabs >}}

### Install a specific version

To install a specific [Thulite version](https://www.npmjs.com/package/thulite?activeTab=versions), run one of the following commands.

{{< tabs "package-manager-1" >}}
{{< tab "npm" >}}

```bash
npm install thulite@2.6.5
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install thulite@2.6.5
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add thulite@2.6.5
```

{{< /tab >}}
{{< tab "bun" >}}

```bash
bun install thulite@2.6.5
```

{{< /tab >}}
{{< /tabs >}}

## Documentation updates

The documentation tracks the latest Thulite behavior, including [minor](#minor-changes) and [major](#major-changes) releases.

If your project is behind, you may see differences between docs and runtime behavior. Check `Added in:` version notes in the docs before using newer features, and make sure your project version supports them.

Projects that stay on older major versions can diverge significantly from the current docs. To reduce confusion and avoid unsupported setups, upgrade to the latest major version when possible.

### Upgrade Guides

Each [major release](#major-changes) includes an upgrade guide with migration steps and breaking-change details.

Main docs describe the latest version only. They do not compare historical behavior. Use upgrade guides when moving from one major version to another.

Upgrade guides focus on changes that can require code updates, including breaking changes, deprecations, removals, replacements, and updated usage guidance.

- [Upgrade to v2](/start-here/updating/v2/)

## Semantic versioning

Thulite follows [semantic versioning](https://semver.org/) to signal the impact of each release.

Version numbers use the `X.Y.Z` pattern:

- `X` = major
- `Y` = minor
- `Z` = patch

### Patch changes

Patch releases are the least disruptive. They typically require no changes in your project code.

When a patch is released, only the last number increases (for example, `thulite@2.4.1` -> `thulite@2.4.2`).

Patch releases can include:

- Internal changes that do not alter public behavior:
  - refactors
  - performance improvements
  - test coverage changes
  - alignment with documented behavior
- Improvements to logging and error messages.
- Re-releases after a failed release.

Most bug fixes are also released as patches, including cases where behavior previously relied on unintended implementation details.

### Minor changes

Minor releases usually add features and improvements without requiring changes to your code.

A minor release can also mark features as `deprecated`, meaning they still work now but are planned for removal in a future major release.

Minor releases can include:

- Deprecations of existing features/options with a warning that they will be removed in an upcoming major release.
- New features.
- New options in integration hooks.

A minor release may also bundle patch-level fixes.

### Major changes

Major releases include breaking changes for at least some existing projects.

These releases can change public behavior, APIs, and usage patterns. Main docs are updated to the latest version, while older docs are kept only as historical references.

Major releases can include:

- Removal of previously deprecated functionalities.
- Changes to existing features.
- Changes to existing options in integration hooks.

A major release may also include non-breaking improvements in the same release.

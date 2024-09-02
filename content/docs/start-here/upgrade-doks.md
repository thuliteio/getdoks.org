---
title: "Upgrade Doks"
description: ""
summary: ""
date: 2023-09-22T16:15:46+02:00
lastmod: 2023-09-22T16:15:46+02:00
draft: false
weight: 140
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

This guide covers how to update your version of Doks and related dependencies, how to learn what has changed from one version to the next, and how to understand Doks' versioning system and corresponding documentation updates.

## What has changed?

See [all release notes](https://github.com/thuliteio/doks/releases) or the [latest release notes](https://github.com/thuliteio/doks/releases/latest).

You can find an exhaustive list of all changes in [Doks' changelog](https://github.com/thuliteio/doks/blob/main/CHANGELOG.md), and important instructions for upgrading to each new [major version](#major-changes) in our [upgrade guides](#upgrade-guides).

## Upgrade to the latest version

To update Doks and integrations to their current versions, use the appropriate command for your package manager. For example, upgrade Doks with Images and SEO integrations:

{{< tabs "upgrade-latest-version" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/doks-core@latest @thulite/images@latest @thulite/seo@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install @thulite/doks-core@latest @thulite/images@latest @thulite/seo@latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @thulite/doks-core@latest @thulite/images@latest @thulite/seo@latest
```

{{< /tab >}}
{{< /tabs >}}

### Install a specific version

To install a specific version of Doks or integrations, use the appropriate command for your package manager.

{{< tabs "upgrade-specific-version" >}}
{{< tab "npm" >}}

```bash
npm install @thulite/doks-core@1.6.0 @thulite/images@3.1.0
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm install @thulite/doks-core@1.6.0 @thulite/images@3.1.0
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn add @thulite/doks-core@1.6.0 @thulite/images@3.1.0
```

{{< /tab >}}
{{< /tabs >}}

## Documentation updates

This documentation is updated for each [minor release](#minor-changes) and [major version](#major-changes) release. When new features are added, or existing usage changes, the docs will update to reflect the __current behavior of Doks__. If your project is not updated, then you may notice some behaviors do not match the up-to-date documentation.

New features are added to docs with the specific version number in which they were added. This means that if you have not updated to the latest release of Doks, some documented features may be unavailable. Always check the `Added in:` version number and make sure your project is updated before attempting to use new features!

If you have not upgraded to the latest major version of Doks, you may encounter significant differences between the Doks documentation and your project's behavior. We strongly recommend upgrading to the current major version of Doks as soon as you are able. Both the code and the documentation for earlier versions is unsupported.

### Upgrade Guides

After every [major version release](#major-changes), you will find an __upgrade guide__ with information about important changes and instructions for upgrading your project code.

The main Doks documentation pages are always __accurate for the latest released version of Doks__. They do not describe or compare to how things worked in previous versions, nor do they highlight updated or changed behavior.

See the upgrade guides below for an explanation of changes, comparing the new version to the old. The upgrade guides include everything that could require you to change your own code: breaking changes, deprecations, feature removals and replacements as well as updated usage guidance. Each change to Doks includes a "What should I do?" section to help you successfully update your project code.

- [Upgrade to v1](/upgrade-guides/upgrade-to-v1/)

### Older docs (unmaintained)

Documentation for older versions of Doks is not maintained, but is available as a static snapshot. Use these versions of docs if you are unable to upgrade your project, but still wish to consult guides and reference:

- [unmaintained v0.5.0 snapshot](https://deploy-preview-329--getdoks.netlify.app/)

## Semantic versioning

Doks attempts to adhere as much as possible to [semantic versioning](https://semver.org/), which is a set of rules developers use to determine how to assign a version number to a release. Semantic version follows a predictable pattern to inform users of the kind of changes they can expect from one version to the next.

Semantic versioning enforces a pattern of `X.Y.Z` for software version numbers. These values represent __major (X)__, __minor (Y)__, and __patch (Z)__ updates.

### Patch changes

Patch changes are the least disruptive changes. They do not change the way you use Doks, and no change to your own code is required when you update.

When Doks issues a "patch" version, the last number increases. (e.g. `@thulite/doks-core@1.6.0` -> `@thulite/doks-core@1.6.1`)

Patches may be released for reasons such as:

- Internal changes that do not change Doks' functionality:
  - refactors
  - performance improvements
  - increase or change in test coverage
  - aligning with stated documentation and expected behavior
- Improvements to logging and error messages.
- Re-releases after a failed release.

Patch changes also include __most bug fixes__, even in cases where users were taking advantage of existing unintended or undesirable behavior.

### Minor changes

Minor releases primarily introduce new features and improvements that you may wish to try, but require no changes to your code. Some existing features may also be `deprecated` (marked for deletion in a future version while continuing to function) in a minor release, giving you the opportunity to prepare for their eventual removal.

Minor releases include changes such as:

- __Deprecations__ of existing features/options with a warning that they will be removed in an upcoming major release.
- Introduction of new functionalities.
- Introduction of new options in the integration hooks.

A minor release may also include smaller, patch changes at the same time.

### Major changes

Major releases will include breaking changes to at least some existing code. These breaking changes are always documented in an ["Upgrade to vX"](#upgrade-guides) guide in Doks.

Major releases allow Doks to make significant changes not only to internal logic, but also to intended behavior and usage. Documentation will be updated to reflect the latest version only, and __static, unmaintained snapshots of older docs__ are available as a historical record for older projects that are not yet upgraded.

Major releases include changes such as:

- Removal of previously deprecated functionalities.
- Changes of existing functionalities.
- Changes of existing options in the integration hooks.

A major release may also include some non-breaking changes and improvements that would normally be released separately in a minor or patch release.

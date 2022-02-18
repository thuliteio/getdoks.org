---
title: "How to Update"
description: "Regularly update the installed npm packages to keep your Doks website stable, usable, and secure."
lead: "Regularly update the installed npm packages to keep your Doks website stable, usable, and secure."
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu:
  docs:
    parent: "help"
weight: 610
toc: true
---

{{< alert icon="💡" text="Learn more about <a href=\"https://docs.npmjs.com/about-semantic-versioning\">semantic versioning</a> and <a href=\"https://docs.npmjs.com/cli/v6/using-npm/semver#advanced-range-syntax\">advanced range syntax</a>." />}}

## Check for outdated packages

The [`npm outdated`](https://docs.npmjs.com/cli/v7/commands/npm-outdated) command will check the registry to see if any (or, specific) installed packages are currently outdated:

```bash
npm outdated [[<@scope>/]<pkg> ...]
```

{{< details "Example result">}}

```bash
Package      Current  Wanted  Latest  Location                  Depended by
@babel/cli    7.17.0  7.17.3  7.17.3  node_modules/@babel/cli   doks
@babel/core   7.17.0  7.17.5  7.17.5  node_modules/@babel/core  doks
eslint         8.8.0   8.9.0   8.9.0  node_modules/eslint       doks
mermaid      8.13.10  8.14.0  8.14.0  node_modules/mermaid      doks
stylelint     14.3.0  14.5.1  14.5.1  node_modules/stylelint    doks
```

{{< /details >}}

## Update packages

The [`npm update`](https://docs.npmjs.com/cli/v7/commands/npm-update) command will update all the packages listed to the latest version (specified by the tag config), respecting semver:

```bash
npm update [<pkg>...]
```

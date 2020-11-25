---
title: "Directory Structure"
description: "The Doks project directory structure extends Hugo's."
lead: "The Doks project directory structure extends Hugo's."
date: 2020-04-20T14:14:16+02:00
lastmod: 2020-04-20T14:14:16+02:00
draft: false
images: []
menu: 
  docs:
    parent: "prologue"
weight: 040
toc: true
---

```bash
.
├── archetypes/
├── assets/
├── config/
├── content/
├── data/
├── layouts/
├── static/
├── .eslintignore
├── .eslintrc.json
├── .markdownlint.json
├── .markdownlintignore
├── .stylelintignore
├── .stylelintrc.json
├── babel.config.js
├── netlify.toml
└── package.json
```

See also the Hugo docs: [Directory Structure](https://gohugo.io/getting-started/directory-structure/).

## Root directories

### archetypes

```bash
..
├── blog.md
├── default.md
└── docs.md
```

See also: [Archetypes]({{< ref "archetypes" >}}).

### assets

```bash
..
├── fonts/
├── images/
├── js/
│   ├── vendor/
│   └── app.js
├── lambda/
└── scss/
    ├── common/
    ├── components/
    ├── layouts/
    ├── vendor/
    └── app.scss
```

See also: [Assets]({{< ref "assets" >}})

### config

```bash
..
├── _default/
│   ├── config.toml
│   ├── menus.toml
│   └── params.toml
├── production/
├── staging/
└── postcss.config.js
```

See also: [Project Configuration]({{< ref "project-configuration" >}}).

### content

```bash
..
├── blog/
├── contributors/
├── docs/
└── _index.md
```

See also: [Pages]({{< ref "pages" >}}).

### data

See the Hugo docs: [Data Templates](https://gohugo.io/templates/data-templates/).

### layouts

```bash
..
├── _default/
│   ├── baseof.html
│   ├── list.html
│   └── single.html
├── blog/
│   └── single.html
├── categories/
│   ├── list.html
│   └── terms.html
├── partials/
│   ├── content/
│   ├── footer/
│   │   ├── footer.html
│   │   └── script-footer.html
│   ├── head/
│   │   ├── favicons.html
│   │   ├── head.html
│   │   ├── opengraph.html
│   │   ├── resource-hints.html
│   │   ├── script-header.html
│   │   ├── seo.html
│   │   ├── structured-data.html
│   │   ├── stylesheet.html
│   │   └── twitter_cards.html
│   ├── header/
│   │   ├── alert.html
│   │   └── header.html
│   └── sidebar/
├── shortcodes/
│   ├── alert.html
│   ├── email.html
│   ├── img-simple.html
│   └── img.html
├── 404.html
├── index.headers
├── index.html
├── index.redirects
├── robots.txt
├── rss.xml
└── sitemap.xml
```

See also: [Layouts]({{< ref "layouts" >}}).

### static

See the Hugo docs: [Static Files](https://gohugo.io/content-management/static-files/)

## Root files

### .eslintignore

See the ESLint docs: [Ignoring Files and Directories](https://eslint.org/docs/user-guide/configuring#ignoring-files-and-directories).

### .eslintrc.json

See the ESLint docs: [Configuring ESLint](https://eslint.org/docs/user-guide/configuring).

### .markdownlint.json

See the markdownlint Readme: [Rules / Aliases](https://github.com/DavidAnson/markdownlint#rules--aliases).

### .markdownlintignore

See the markdownlint-cli Readme: [Ignoring Files](https://github.com/igorshubovych/markdownlint-cli#ignoring-files).

### .stylelintignore

See the stylelint docs: [Ignoring code](https://stylelint.io/user-guide/ignore-code).

### .stylelintrc.json

See the stylelint docs: [Configuration](https://stylelint.io/user-guide/configure).

### babel.config.js

See the Babel docs: [Configure Babel](https://babeljs.io/docs/en/configuration).

### netlify.toml

See the Netlify docs: [File-based configuration](https://docs.netlify.com/configure-builds/file-based-configuration/).

### package.json

See the npm Docs: [package.json](https://docs.npmjs.com/cli/v6/configuring-npm/package-json).

---
title: "Doks v0.4"
emoji: ":tada:"
description: "Version 0.4 is here! Multi level section menu (three levels deep), auto generated section menu, new docs based tree — with a single command, sub navigation main menu (one level deep), and more."
lead: "Version 0.4 is here! Multi level section menu (three levels deep), auto generated section menu, new docs based tree — with a single command, sub navigation main menu (one level deep), and more."
date: 2022-02-14T11:58:45+01:00
lastmod: 2022-02-14T11:58:45+01:00
draft: false
weight: 50
images: []
contributors: ["Henk Verlinde"]
---

## Multi level section menu

{{< img-simple src="multi-level-section-menu.png" alt="Multi level section menu" class="d-block mx-auto shadow my-5" >}}

Now you can have a multi level section menu (three levels deep). Available for both the collapsibile section menu and the default one.

{{< img-simple src="multi-level-breadcrumb.png" alt="Multi level breadcrumb" class="d-block mx-auto shadow my-5" >}}

Works with the breadcrumb option if set.

[Menus →]({{< relref "docs/recipes/menus#add-to-docs-menu" >}})

## Auto generated section menu

```toml
[menu]
  [menu.section]
    auto = true
    collapsibleSidebar = true
```

You now have the option to let Doks auto generate the section menu from the directory folder (tree) structure. No manual configuration needed and respects set weight. Available for both the collapsibile section menu and the default one.

[Menus →]({{< relref "docs/recipes/menus#configure" >}})

## New docs based tree

Create a docs based tree — with a single command:

```bash
npm run create -- --kind docs [section]
```

For example, create a docs based tree named guides:

```bash
npm run create -- --kind docs guides
```

[Commands →]({{< relref "docs/prologue/commands#docs-based-tree" >}})

## Sub navigation main menu

{{< img-simple src="sub-navigation-main-menu.png" alt="Sub navigation main menu" class="d-block mx-auto shadow my-5" >}}

Doks now also supports sub navigation for the main menu (one level deep).

[Menus →]({{< relref "docs/recipes/menus#add-to-main-menu" >}})

## Details shortcode

{{< img-simple src="details-shortcode.png" alt="Details shortcode" class="d-block mx-auto shadow my-5" >}}

Add a disclosure widget with the Doks details shortcode. Information is visible only when the widget is toggled into open state.

```md
{{</* details "Markdown and HTML" */>}}
_Markdown_ and <em>HTML</em> will be rendered.
{{</* /details */>}}
```

[Details →]({{< relref "docs/recipes/details" >}})

## Alert types

{{< img-simple src="alert-types.png" alt="Alert types" class="d-block mx-auto shadow my-5" >}}

You can now add context to page alerts (info, success, warning, or danger).

```md
{{</* alert icon="👉" context="info" text="A simple info alert — check it out!" /*/>}}
```

[Alerts →]({{< relref "docs/recipes/alerts#context" >}})

## Last modified date

{{< img-simple src="last-modified.png" alt="Alert types" class="d-block mx-auto shadow my-5" >}}

You can now show the last modified date (using the last Git revision date).

[Edit page →]({{< relref "docs/recipes/project-configuration#edit-page" >}})

## Other features and fixes

### UX

- Add scroll position lock to default docs sidebar
- Set font weight active page to 500
- Add [full width]({{< relref "docs/recipes/project-configuration#options" >}}) as an option
- Support local Jost font from both [Google Fonts](https://fonts.google.com/specimen/Jost) and [indestructible type*](https://indestructibletype.com/Jost.html)
- Fix searchable copy button text (when hidden)

### Edit page link

- Support [docs repository subpath]({{< relref "docs/recipes/project-configuration#edit-page" >}})
- Support [repository hosts]({{< relref "docs/recipes/project-configuration#edit-page" >}}) Bitbucket and BitbucketServer

### Rendering

- Simplify heading rendering
- Fix error import Mermaid script
- Add error handling image not found
- Add [remote image]({{< relref "docs/recipes/images#add-a-remote-image" >}}) support

### Global alert

- Make global alert uniquely dismissible (using MD5 hash on alert text)
- Fix [Cumulative Layout Shift](https://web.dev/cls/) global alert

### FlexSearch

- Improve feedback no search results found
- Plainify index values
- Fix arrow key navigation error
- Add `.Summary` as fallback for `.Description` search results

[Full changelog →](https://github.com/h-enk/doks/blob/master/CHANGELOG.md)

## What's next

- Better blog pages
- Add site wide search as an option

[Milestones →](https://github.com/h-enk/doks/milestones)

## Contributors

Thank for all contributions to discussions, bugfixes, features, or documentation!

[How to Contribute →](/docs/contributing/how-to-contribute/)

### Support Doks :green_heart:

Help support the team developing Doks by [becoming a financial contributor](/docs/contributing/financial-contributions/).

[Contribute on Open Collective →](https://opencollective.com/doks)

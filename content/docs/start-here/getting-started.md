---
title: "Getting Started"
description: ""
summary: ""
date: 2023-09-12T12:07:48+02:00
lastmod: 2023-09-12T12:07:48+02:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "getting-started-cefa9dc0267d0e3bb7a88365c6178eb1"
weight: 110
toc: true
---

{{< callout context="tip" title="Doks version 1 is here!" icon="rocket" >}}
- What’s new in Doks v1? [Find out in the announcement blog post](/blog/doks-1/).
- Ready to upgrade? [Follow our upgrade guide](/docs/guides/upgrade-to-v1/).
{{< /callout >}}

## Creating a new project

Doks is a full-featured documentation theme built on top of the [Hyas](https://gethyas.com/) framework.

You can create a new Hyas + Doks project using the following command:

{{< tabs "create-new-site" >}}
{{< tab "npm" >}}

```bash
npm create hyas@latest -- --template doks
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm create hyas@latest -- --template doks
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn create hyas@latest -- --template doks
```

{{< /tab >}}
{{< /tabs >}}

This will create a new [project directory](/docs/guides/project-structure/) with all the necessary files and configurations for your site.

{{< callout context="tip" title="See it in action" icon="rocket" >}}
Try Doks in your browser: [open the template on Gitpod](https://gitpod.io/#https://github.com/gethyas/doks).
{{< /callout >}}

## Creating content with Doks

Doks is ready for you to add new content, or bring your existing files!

### File formats

Doks supports authoring content in Markdown and HTML. Also, Emacs Org-Mode, AsciiDoc, RST, and Pandoc are supported, but require installing [additional parsers](https://gohugo.io/content-management/formats/#list-of-content-formats).

### Add pages

Add new pages to your site by creating `.md` or `.html` files in `content/docs/`. Add sub-folders to organize your files, and to create multiple path segments:

{{< tabs "create-new-page" >}}
{{< tab "npm" >}}

```bash
npm run create docs/guides/faq.md
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm run create docs/guides/faq.md
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn run create docs/guides/faq.md
```

{{< /tab >}}
{{< /tabs >}}

### Frontmatter

All Doks pages share a customizable [common set of frontmatter properties](/reference/frontmatter/) to control how the page appears — for documentation pages:

```md
---
title: "Example Guide"
description: ""
summary: ""
date: 2023-09-07T16:04:48+02:00
lastmod: 2023-09-07T16:04:48+02:00
draft: false
images: []
menu:
  docs:
    parent: ""
    identifier: "example-6a1a6be4373e933280d78ea53de6158e"
weight: 810
toc: true
---
```

## Deploying your Doks website

Once you have created and customized your Doks website, you can deploy it to a web server or hosting platform of your choice including Netlify, Vercel, GitHub Pages and many more.

[Learn about deploying a Hyas site in the Hyas docs.](https://docs.gethyas.com/guides/deploy/)

## Updating Doks

Doks is a Hyas theme, and is updated like any `@hyas/*` theme (or integration):

{{< tabs "update-doks" >}}
{{< tab "npm" >}}

```bash
npm install @hyas/doks-core@latest
```

{{< /tab >}}
{{< tab "pnpm" >}}

```bash
pnpm upgrade @hyas/doks-core --latest
```

{{< /tab >}}
{{< tab "Yarn" >}}

```bash
yarn upgrade @hyas/doks-core --latest
```

{{< /tab >}}
{{< /tabs >}}

You can see a full list of the changes made in each release in the [Doks changelog](https://github.com/gethyas/doks-core/blob/main/CHANGELOG.md).

## Troubleshooting Doks

Both Doks [project configuration](/reference/configuration/) and [individual page frontmatter configuration](/reference/frontmatter/) information are available in the Reference section of this site. Use these pages to ensure that your Doks site is configured and functioning properly.

See the growing list of guides in the sidebar for help adding content and customizing your Doks site.

If your answer cannot be found in these docs, please visit the [full Hyas Docs](https://docs.gethyas.com/) for complete Hyas documentation. Your question may be answered by understanding how Hyas works in general, underneath this Doks theme.

You can also check for any known [Doks issues on GitHub](https://github.com/gethyas/doks/issues), and get help in [Doks Discussions](https://github.com/gethyas/doks/discussions) from our active, friendly community!

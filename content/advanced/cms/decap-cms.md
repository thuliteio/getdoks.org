---
title: "Decap Cms"
description: "Integrate Decap CMS with Thulite using Git-backed content editing and configurable collections that map directly to your Markdown structure."
summary: "Integrate Decap CMS with Thulite using Git-backed content editing and configurable collections that map directly to your Markdown structure."
date: 2026-03-24T08:10:51+01:00
lastmod: 2026-05-28T11:21:22+02:00
draft: false
weight: 813
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

[Decap CMS](https://decapcms.org/) (formerly Netlify CMS) is an open-source, Git-based content management system.

## Example

Here is a simple `config.yml` configuration example:

```yml {title="config.yml"}
locale: 'fr'
backend:
  name: gitea
  repo: *********/******** # Path to your Gitea repository
  app_id: ********-****-****-****-************
  api_root: https://*****.*****.***/api/v1 # API URL of your Gitea instance
  base_url: https://*****.*****.*** # Root URL of your Gitea instance
  branch: main
media_folder: static/img
public_folder: /img
collections:
  - name: 'docs'
    label: 'Docs'
    folder: 'content/docs'
    nested: { depth: 5 }
    create: true
    slug: '{{slug}}'
    editor:
      preview: false
    fields:
      - { label: 'Titre', name: 'title', widget: 'string' }
      - { label: 'Description', name: 'description', widget: 'string' }
      - { label: 'Résumé', name: 'summary', widget: 'string' }
      - { label: 'Date de publication', name: 'date', widget: 'datetime' }
      - { label: 'Date de mise à jour', name: 'lastmod', widget: 'datetime' }
      - { label: 'Brouillon', name: 'draft', widget: 'boolean', default: true }
      - {
          label: 'Menu', name: 'menu', widget: 'object', required: false, collapsed: true,
          fields: [
            {
              label: 'docs', name: 'docs', widget: 'object', required: false, collapsed: true,
              fields: [
                { label: 'Parent', name: 'parent', widget: 'string' },
                { label: 'Identifiant', name: 'identifier', widget: 'string' }
              ]
            }
          ]
        }
      - { label: 'Poid', name: 'weight', widget: 'number', value_type: 'integer' }
      - { label: 'toc', name: 'toc', widget: 'boolean', default: true }
      - {
          label: 'SEO', name: 'seo', widget: 'object', required: false, collapsed: true,
          fields: [
            { label: 'Titre', name: 'title', widget: 'string' },
            { label: 'Description', name: 'description', widget: 'string' },
            { label: 'Canonical', name: 'canonical', widget: 'string' },
            { label: 'noindex', name: 'noindex', widget: 'boolean', default: false }
          ]
        }
      - { label: 'Body', name: 'body', widget: 'markdown' }
```

## Resources

- [How to integrate Decap CMS with Hugo](https://decapcms.org/docs/hugo/)
- [Hugo template with Decap CMS](https://github.com/decaporg/one-click-hugo-cms)

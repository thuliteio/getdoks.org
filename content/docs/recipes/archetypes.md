---
title: "Archetypes"
description: "Customize archetype templates for blog, default, and docs."
lead: "Customize archetype templates for blog, default, and docs."
date: 2020-09-21T13:58:42+02:00
lastmod: 2020-09-21T13:58:42+02:00
draft: false
images: []
menu: 
  docs:
    parent: "recipes"
weight: 120
toc: true
---

```bash
..
├── blog.md
├── default.md
└── docs.md
```

See also the Hugo docs: [Archetypes](https://gohugo.io/content-management/archetypes/).

## Customize archetypes

### blog.md

```md
---
title: "{{ replace .Name "-" " " | title }}"
description: ""
lead: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
weight: 50
images: ["{{ .Name | urlize }}.jpg"]
contributors: []
---

{{</* img src="{{ .Name | urlize }}.jpg" alt="{{ replace .Name "-" " " | title }}" caption="{{ replace .Name "-" " " | title }}" class="wide" */>}}
```

### default.md

```md
---
title: "{{ replace .Name "-" " " | title }}"
description: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
images: []
---
```

### docs.md

```md
---
title: "{{ replace .Name "-" " " | title }}"
description: ""
lead: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
images: []
menu:
  docs:
    parent: ""
weight: 999
toc: true
---

{{</* img src="{{ .Name | urlize }}.jpg" alt="{{ replace .Name "-" " " | title }}" caption="{{ replace .Name "-" " " | title }}" */>}}
```

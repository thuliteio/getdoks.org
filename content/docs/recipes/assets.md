---
title: "Assets"
description: "Customize Doks SCSS, Doks JS, or the FlexSearch index. Add a Lambda function."
lead: "Customize Doks SCSS, Doks JS, or the FlexSearch index. Add a Lambda function."
date: 2020-09-21T14:41:53+02:00
lastmod: 2020-09-21T14:41:53+02:00
draft: false
images: []
menu: 
  docs:
    parent: "recipes"
weight: 170
toc: true
---

```bash
..
├── fonts/
├── images/
├── js/
│   ├── vendor/
│   ├── app.js
│   └── index.js
├── lambda/
└── scss/
    ├── common/
    ├── components/
    ├── layouts/
    ├── vendor/
    └── app.scss
```

See also the Hugo docs: [Hugo Pipes](https://gohugo.io/hugo-pipes/).

## Customize Doks SCSS

{{< alert icon="👉" text="Set variables in `./assets/scss/common/_variables.scss`." >}}

See also the Bootstrap code: [Variables](https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss).

```bash
./assets/scss/app.scss
```

## Customize Doks JS

```bash
./assets/js/app.js
```

## Customize FlexSearch index

See also: [FlexSearch]({{< ref "flexsearch" >}})

```bash
./assets/js/index.js
```

```js
var docs = [
{{ range $index, $page := (where .Site.Pages "Section" "docs") -}}
  {
    id: {{ $index }},
    href: "{{ .Permalink | absURL }}",
    title: {{ .Title | jsonify }},
    description: {{ .Params.description | jsonify }},
    content: {{ .Content | jsonify }}
  },
{{ end -}}
];
```

## Add a Lambda function

See also: [Functions]({{< ref "netlify#functions" >}})

### Example

```bash
./assets/lambda/hi-from-lambda.js
```

```js
exports.handler = (event, context, callback) => {
  callback (null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Hi from Lambda.',
    }),
  });
}
```

---
title: "highlight.js"
description: "How to add highlight.js to your Doks website."
lead: "How to add highlight.js to your Doks website."
date: 2021-04-02T14:16:45+02:00
lastmod: 2021-04-02T14:16:45+02:00
draft: false
images: []
menu:
  docs:
    parent: "extensions"
weight: 420
toc: true
---

## 1. Enable

highlight.js support is switched on per default.

_Like [Chroma](https://gohugo.io/content-management/syntax-highlighting/) — the Hugo default code highlighter — better? Deactivate highlight.js support by setting `highLight = false` in `./config/_default/params.toml`._

## 2. Pick style

 Use the default Doks style, or use one of the other available [higlight.js themes](https://highlightjs.org/static/demo/).

### Example

If you would like to use the Dracula style, in `./assets/scss/app.scss` uncomment the default doks style, and add the Dracula style, like so:

 ```scss
 /** Import highlight.js */
@import "highlight.js/scss/dracula";

..

// @import "components/doks";
 ```

## 3. Configure

Customize Doks' default configuration (if needed) in `./assets/js/highlight.js`:

```js
import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import htmlbars from 'highlight.js/lib/languages/htmlbars';
import ini from 'highlight.js/lib/languages/ini';
import yaml from 'highlight.js/lib/languages/yaml';
import markdown from 'highlight.js/lib/languages/markdown';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('html', htmlbars);
hljs.registerLanguage('ini', ini);
hljs.registerLanguage('toml', ini);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('md', markdown);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
});
```

## Example

```json
// Default Doks style
[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]
```

## Resources

- [highlight.js](https://highlightjs.org/)

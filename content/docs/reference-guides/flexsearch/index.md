---
title: "FlexSearch"
description: "Search your Doks site with FlexSearch. Easily customize index settings and search options to your liking."
lead: "Search your Doks site with FlexSearch. Easily customize index settings and search options to your liking."
date: 2020-11-10T11:36:31+01:00
lastmod: 2020-11-10T11:36:31+01:00
draft: false
images: []
menu:
  docs:
    parent: "reference-guides"
weight: 370
toc: true
---

{{< img-simple src="flexsearch.gif" alt="FlexSearch Doks" >}}

## Language settings

Insert after line 82 in `./assets/js/index.js` the language specific settings, like so:

```js
..

var index = new FlexSearch({
  preset: 'score',
  cache: true,
  doc: {
      id: 'id',
      field: [
        'title',
        'description',
        'content',
      ],
      store: [
        'href',
        'title',
        'description',
      ],
  },
  // Insert language specific settings below — e.g. Latin
  encode: "simple",
  tokenize: "forward"
});

..
```

### Latin

```js
..
  encode: "simple",
  tokenize: "forward"
..
```

### Arabic

```js
..
  encode: false,
  rtl: true,
  split: /\s+/,
  tokenize: "forward"
..
```

### Cyrilic, Indian

Any word separated by space language:

```js
..
  encode: false,
  split: /\s+/,
  tokenize: "forward"
..
```

### Chinese, Japanese or Korean

With dedicated chars w/o spaces:

```js
..
  encode: false,
  tokenize: function(str){
      return str.replace(/[\x00-\x7F]/g, "").split("");
  }
..
```

### Source

- [51#issuecomment-630094955](https://github.com/nextapps-de/flexsearch/issues/51#issuecomment-630094955)

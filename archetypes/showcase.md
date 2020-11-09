---
title: "{{ replace .Name "-" " " | title }}"
description: ""
lead: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
images: []
link: ""
menu: 
  showcase:
    parent: "browse"
weight: 999
toc: false
---

<div class="card my-3">
  {{< img src="{{ .Name | urlize }}.jpg" alt="{{ replace .Name "-" " " | title }}" class="card-img-top m-0 p-1" >}}
</div>

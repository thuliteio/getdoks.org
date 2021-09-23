---
title: "KaTeX"
description: "How to add KaTeX to your Doks website."
lead: "How to add KaTeX to your Doks website."
date: 2020-11-30T11:57:29+01:00
lastmod: 2020-11-30T11:57:29+01:00
draft: false
images: []
menu:
  docs:
    parent: "extensions"
weight: 430
toc: true
---

{{< alert icon="💡" text="<a href=\"https://latex.codecogs.com/\">Equation Editor</a> by CodeCogs is an online LaTeX equation editor, where you can create, integrate, and download equations." />}}

## 1. Enable

KaTeX support is switched off per default. Activate it by setting `kaTex = true` in `./config/_default/params.toml`.

## 2. Copy fonts

Copy KaTeX fonts from `./node_modules/katex/dist/fonts/` to `./static/fonts/`:

```bash
npm run copy:katex-fonts
```

## 3. Configure

Customize Doks' default configuration (if needed) in `./assets/js/katex.js`:

```js
document.addEventListener('DOMContentLoaded', function() {
  renderMathInElement(document.body, {
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false},
      {left: '\\(', right: '\\)', display: false},
      {left: '\\[', right: '\\]', display: true},
    ],
  });
});
```

## Example

_Excerpt taken from [Supernova Neutrinos](https://neutrino.leima.is/book/introduction/supernova-neutrinos/) by Lei Ma._

### Markdown

```md
The average energy of the neutrinos $\langle E \rangle$ emitted during a supernova explosion is of the order of 10MeV, and the neutrino luminosity at the early epoch of the explosion is approximately $10^{52}\mathrm{ergs\cdot s^{-1}}$.
Therefore, the number density of the neutrinos at the radius $R$ is

$$
\begin{equation*}
   n \sim  10^{18} \mathrm{cm^{-3}} \left(\frac{100\mathrm{km}}{R}\right)^2 \left(\frac{10\mathrm{MeV}}{\langle E \rangle}\right).
\end{equation*}
$$
```

### HTML

{{< img-simple src="katex-example.jpg" alt="KaTeX Example" class="border-0" >}}

_Note, this is an image, because KaTeX support is switched off on this site._

## Resources

- [KaTeX](https://katex.org/)

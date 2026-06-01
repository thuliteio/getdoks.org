---
title: "Scripts"
description: "Add custom JavaScript in Thulite using assets/js, DOM-ready patterns, and focused behaviors that improve interactivity without slowing pages."
summary: "Add custom JavaScript in Thulite using assets/js, DOM-ready patterns, and focused behaviors that improve interactivity without slowing pages."
date: 2026-05-15T16:27:22+02:00
lastmod: 2026-05-28T11:19:41+02:00
draft: false
weight: 240
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---

Add JavaScript code to enhance your site with interactivity and custom behavior.

## Script organization

JavaScript files live in `assets/js/`:

- `custom.js` is for your custom JavaScript
- Other files are bundled with your site during the build process

## Add custom JavaScript

Edit `assets/js/custom.js` to add your own scripts:

```javascript {title="custom.js"}
// Run code when the page loads
document.addEventListener("DOMContentLoaded", () => {
  // Example: Toggle behavior for FAQ accordions
  const details = document.querySelectorAll("details");

  details.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open) {
        // Close other details when one opens
        details.forEach((other) => {
          if (other !== detail) other.open = false;
        });
      }
    });
  });
});
```

Keep scripts focused and avoid blocking page load. Use `DOMContentLoaded` to ensure the DOM is ready before running code.

## Learn more

<!-- markdownlint-disable MD034 -->

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/mdnwebdocs.svg" title="Document Object Model" description="Learn about the DOM API and how to interact with HTML elements." href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" target="_blank" class="w-50" >}}
{{< link-card src="svgs/simple-icons/mdnwebdocs.svg" title="DOM events" description="Reference for all available DOM events and event handling." href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events" target="_blank" class="w-50" >}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card src="svgs/simple-icons/hugo.svg" title="Hugo asset processing" description="Process and bundle assets in your Hugo site." href="https://gohugo.io/hugo-pipes/" target="_blank" class="w-50" >}}
{{< /card-grid >}}

<!-- markdownlint-enable MD034 -->

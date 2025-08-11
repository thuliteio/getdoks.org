// Put your custom JS code here

const copyMarkdownBtn = document.getElementById('copy-markdown-btn');
if (copyMarkdownBtn) {
  copyMarkdownBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default button behavior
    const button = this;

    // Get the current page URL and construct the path to the markdown file
    const currentPath = window.location.pathname;
    const markdownPath = currentPath.endsWith('/')
      ? currentPath + 'index.md'
      : currentPath + '/index.md';

    // Update button to show loading state
    button.textContent = '⏳ Loading...';

    // Fetch the markdown file from the public directory
    fetch(markdownPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(markdown => {
        return navigator.clipboard.writeText(markdown);
      })
      .then(() => {
        button.textContent = '✅ Copied';
        setTimeout(() => {
          button.textContent = 'Copy Markdown';
        }, 2000);
      })
      .catch(err => {
        button.textContent = '❌ Error';
        console.error('Failed to copy markdown:', err);

        // Reset button after a delay
        setTimeout(() => {
          button.textContent = 'Copy Markdown';
        }, 2000);
      });
  });
}

// Close mobile TOC details when clicking on a link
document.addEventListener('click', function (e) {
  // Check if the clicked element is a link within the mobile TOC
  const tocMobile = e.target.closest('.toc-mobile');
  if (tocMobile && e.target.tagName === 'A') {
    // Find the details element within the mobile TOC
    const details = tocMobile.querySelector('details');
    if (details && details.open) {
      // Close the details element
      details.open = false;
    }
  }
});

// Source: https://github.com/electerious/basicLightbox/issues/10#issuecomment-346898146
import * as basicLightbox from 'basiclightbox'

const images = document.querySelectorAll('.lightbox img, img.lightbox')

images.forEach(img => {
  const html = img.outerHTML

  // Function to handle escape key
  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      instance.close()
    }
  }

  const instance = basicLightbox.create(html, {
    onShow: () => {
      // Add escape key listener when lightbox is shown
      document.addEventListener('keydown', handleEscapeKey)
    },
    onClose: () => {
      // Remove escape key listener when lightbox is closed
      document.removeEventListener('keydown', handleEscapeKey)
    }
  })

  img.onclick = () => {
    instance.show()
  }
})

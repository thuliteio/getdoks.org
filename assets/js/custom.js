// Put your custom JS code here

// Auto-close mobile TOC details when clicking on a link
document.addEventListener('click', function(e) {
  // Check if the clicked element is a link inside the mobile TOC
  if (e.target.tagName === 'A' && e.target.closest('.toc-mobile .page-links')) {
    const details = e.target.closest('details');
    if (details) {
      // Close the details element after a short delay to allow navigation
      setTimeout(() => {
        details.open = false;
      }, 100);
    }
  }
});

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

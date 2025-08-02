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

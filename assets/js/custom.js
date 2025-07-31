// Put your custom JS code here

  document.getElementById('copy-markdown-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    const link = this;

    // Get the current page URL and construct the path to the markdown file
    const currentPath = window.location.pathname;
    const markdownPath = currentPath.endsWith('/') ?
      currentPath + 'index.md' :
      currentPath + '/index.md';

    // Update link to show loading state
    link.textContent = '⏳ Loading...';

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
        link.textContent = '✅ Copied';
        setTimeout(() => {
          link.textContent = 'Copy Markdown';
        }, 2000);
      })
      .catch(err => {
        link.textContent = '❌ Error';
        console.error('Failed to copy markdown:', err);

        // Reset link after a delay
        setTimeout(() => {
          link.textContent = 'Copy Markdown';
        }, 2000);
      });
  });

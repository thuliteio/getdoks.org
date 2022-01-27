import docsearch from '@docsearch/js';

var searchPlaceholder = document.getElementById('search-placeholder');

if (searchPlaceholder !== null) {
  searchPlaceholder.className = 'd-none';
}

docsearch({
  container: '#docsearch',
  appId: 'KMWY81ZWS3',
  indexName: 'getdoks',
  apiKey: '56b742bf9ec666576cea28d77030d54b',
  debug: false,
});

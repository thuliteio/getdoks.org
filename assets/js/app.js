document.getElementById('mode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

/* eslint-disable */
window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }

if (document.querySelector('#deploy-to-netlify') !== null) {

  document.getElementById('deploy-to-netlify').addEventListener('click', function(){
    plausible('Deploy to Netlify');
  });

}
/* eslint-enable */

/* eslint-disable */
var clipboard = new ClipboardJS('.btn-clipboard');

clipboard.on('success', function(e) {
    /*
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    */

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
/* eslint-enable */

document.addEventListener('keydown', inputFocus);

function inputFocus(e) {
  if (e.keyCode == 191 ) {
    e.preventDefault();
    document.getElementById('search').focus();
  }
  if (e.keyCode == 27 ) {
    document.getElementById('search').blur();
  }
}

/* eslint-disable */
docsearch({
  apiKey: '978789745e8a1cf3e9a3f0fa321dbdb9',
  indexName: 'getdoks',
  inputSelector: '#search',
  debug: false,
});
/* eslint-enable */

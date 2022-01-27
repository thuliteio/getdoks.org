/* eslint-disable */
window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }

if (document.querySelector('#deploy-to-netlify') !== null) {

  document.getElementById('deploy-to-netlify').addEventListener('click', function(){
    plausible('Deploy to Netlify');
  });

}
/* eslint-enable */

/*
var docsearch = document.getElementById('docsearch');

if (docsearch !== null) {
  document.addEventListener('click', buttonBlur);
}

function buttonBlur() {
  docsearch.firstElementChild.blur();
}
*/

/*
var search = document.getElementById('search');

if (search !== null) {
  document.addEventListener('keydown', inputFocus);
}

function inputFocus(e) {
  if (e.ctrlKey && e.key === '/' ) {
    e.preventDefault();
    search.focus();
  }
  if (e.key === 'Escape' ) {
    search.blur();
  }
}
*/

/* eslint-disable */
/*
if (document.querySelector('#search') !== null) {
  docsearch({
    apiKey: '978789745e8a1cf3e9a3f0fa321dbdb9',
    indexName: 'getdoks',
    inputSelector: '#search',
    debug: false,
  });
}
*/
/* eslint-enable */

/*
 * https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/
 * https://answers.netlify.com/t/how-to-include-dependencies-in-netlify-lambda-functions/2323/38
*/

/* eslint-disable */
const processForm = form => {
  const data = new FormData(form)
  data.append('form-name', 'newsletter');
  fetch('/', {
    method: 'POST',
    body: data,
  })
  .then(() => {
    form.innerHTML = '<p class="form--success"><strong>Almost there!</strong> Check your inbox for a confirmation e-mail.</p>';
  })
  .catch(error => {
    form.innerHTML = '<p class="form--error"><strong>Error:</strong> ${error}</p>';
  })
}

const emailForm = document.querySelector('.email-form')
if (emailForm) {
  emailForm.addEventListener('submit', e => {
    e.preventDefault();
    processForm(emailForm);
  })
}
/* eslint-enable */

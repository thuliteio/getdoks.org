import Plausible from 'plausible-tracker'

import * as params from '@params';
const plausibleDomain = params.plausibleDomain;

const { trackPageview, trackEvent } = Plausible({
  domain: plausibleDomain,
})

trackPageview()

/*
if (document.querySelector('#subscribeButton') !== null) {
  document.getElementById('subscribeButton').addEventListener('click', function(){
    trackEvent('Signup');
  });
}
*/

if (document.querySelector('#subscribeButton') !== null) {
  const button = document.getElementById('subscribeButton');
  const page = button.getAttribute('data-title');

  button.addEventListener('click', function(){
    trackEvent('Signup', { props: { Page: `${page}`} });
  });
}

var div = document.querySelector('[data-ea-publisher]');

if (div !== null) {
  /* eslint-disable no-undef */
  ethicalads.wait.then((placements) => {
    if (!placements.length) {
      // console.debug('Loading backup content');
      div.innerHTML = '<div class="card card-ad-vertical"><div class="card-body"><img class="ad-dark" src="/images/hyas-ad-dark.png" width="120" height="90" alt="Hyas ad dark"><img class="ad-light" src="/images/hyas-ad-light.png" width="120" height="90" alt="Hyas ad light"><p class="card-text"><a class="stretched-link" href="https://gethyas.com/?utm_campaign=hyas&utm_source=website-ethical-ads&utm_medium=display" target="_blank" rel="noopener">Build</a> modern Hugo websites that are secure, fast, and SEO-ready — by default.</p></div></div><p class="ad-footer">Advertisement</p>'
    } else {
      // console.debug('EthicalAds are loaded');
    }
  });
  /* eslint-enable no-undef */
}

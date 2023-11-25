import Plausible from 'plausible-tracker'

import * as params from '@params';
const plausibleDomain = params.plausibleDomain;

const { trackPageview, trackEvent } = Plausible({
  domain: plausibleDomain,
})

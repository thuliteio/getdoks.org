import Plausible from 'plausible-tracker'

const { trackPageview } = Plausible({
  domain: 'getdoks.org',
})

trackPageview()

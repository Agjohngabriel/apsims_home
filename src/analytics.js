function gtag(...args) {
  if (typeof window.gtag === 'function') window.gtag(...args);
}

export function trackWaitlistJoin(source) {
  gtag('event', 'waitlist_join', { event_category: 'conversion', source });
}

export function trackContactSubmit(topic) {
  gtag('event', 'contact_submit', { event_category: 'conversion', topic });
}

export function trackOutboundClick(channel, destination) {
  gtag('event', 'outbound_click', { event_category: 'engagement', channel, destination });
}

export function trackInvestorCTA(action) {
  gtag('event', 'investor_cta', { event_category: 'conversion', action });
}

/* Shared settings. Leave draftMode true until the church confirms its details.
   To add social links: { label: 'Facebook', url: 'https://...' }
   Keep special-event dates in Auckland local time: YYYY-MM-DDTHH:MM. */
window.ICF_CONFIG = {
  draftMode: true,
  email: '', // Replace with the confirmed church email. The original is only a placeholder.
  socialLinks: [],
  specialEvents: [
    {
      title: 'Christmas service',
      start: '2026-12-25T10:30',
      end: '2026-12-25T23:59', // Original expiry retained; service finish time is not supplied.
      details: '25 December 2026 · Christmas service at 10:30am',
      href: 'visit.html'
    },
    {
      title: 'New year service',
      start: '2026-12-31T22:30',
      end: '2027-01-01T02:00',
      details: '31 December 2026, 10:30pm to 1 January 2027, 2:00am',
      href: 'visit.html'
    }
  ]
};

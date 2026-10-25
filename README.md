# Immanuel Christian Fellowship — five-page website

No build step, framework, or hosting migration is needed.

URL at - https://immanuelchristianfellowshipnz.github.io/ICF-website-project/

## Latest updates

- The annual Bible verses appear below the homepage photographs, in three aligned columns on wider screens and a single column on phones.
- Language-specific descriptions have been replaced with a welcome for everyone.
- Verse links now point to the homepage, including redirects from old About-page verse bookmarks.
- Existing leadership roles, photographs, beliefs, and gathering schedules are retained.


All internal URLs are relative, so the `/ICF-website-project/` path continues to work. Previously shared links such as `/#beliefs`, `/#visit`, and `/#events` redirect to their new page when JavaScript is enabled.

## Pages

| File | Content |
| --- | --- |
| `index.html` | Short homepage: welcome, photographs, compact 2026 Bible verses, Sunday details, church introduction, ministry previews, next three gatherings. |
| `visit.html` | What to expect, children, address, parking, directions, full regular timetable. |
| `about.html` | Who we are, beliefs, Jesus Christ card, overseers. |
| `ministries.html` | Church ministries, preschool, global connections, worship videos. |
| `events.html` | Special gatherings and the next eight dates. |

The footer on every page includes directions and contact information. The mobile menu supports keyboard navigation and Escape. With JavaScript disabled, navigation remains available and the event areas show the regular timetable.

## Finish the original draft details

Source marked the logo, email, and social links as placeholders. They remain visibly marked here; the email is not presented as a verified mail link.

## To-do

- set `draftMode: false` in `assets/site-config.js` to hide the yellow draft banner oncr correct email ids are obtained.
- The source's `<meta name="robots" content="noindex, nofollow">` has been retained in all five files. Remove that line from every page when the church is ready for search indexing. Turning off draft mode does not remove it.

## Updating content

- Page wording is directly editable in its HTML file.
- Shared colours, typography, and layouts are in `assets/styles.css`.
- Contact settings and special events are in `assets/site-config.js`.
- Regular-event calculation is in `assets/events.js`; update the timetable in `visit.html` and related descriptions if gathering times change.
- If adding a main navigation item, update both desktop and mobile navigation on all five pages.

## Event behaviour

Upcoming dates are calculated using `Pacific/Auckland`, independently of the visitor's timezone, including daylight saving. They refresh while the page is open. The calendar includes Sundays, Fridays except the first Friday, first-Saturday fasting prayer, and third-Sunday ministry gatherings.

Special-event dates use Auckland local time (`YYYY-MM-DDTHH:MM`). They are included in the chronological upcoming list and removed when their configured end time passes. The special-events panel hides when no special events remain.

The original Christmas and New Year details are retained. Christmas's `23:59` expiry is inherited from the original file; it is not a stated service finish time. Regular events are not automatically cancelled on holidays. If the church changes a gathering for a public holiday, update the schedule/content accordingly.

The static fallback special-event text in `events.html` should also be updated when changing special events so readers without JavaScript receive the same information.

## Checks completed

- All five pages and their internal links, image paths, anchors, unique IDs, and active navigation.
- Desktop and phone-width layout review, mobile menu, page navigation, and beliefs section.
- Auckland event dates, first-Friday exception, first-Saturday and third-Sunday meetings, daylight saving transitions, event expiry, and New Year rollover.


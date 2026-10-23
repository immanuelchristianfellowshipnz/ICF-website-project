# Immanuel Christian Fellowship — five-page website

This is the revised version of your supplied HTML, prepared for your existing GitHub Pages site. No build step, framework, or hosting migration is needed.

## Latest updates

- The annual Bible verses appear below the homepage photographs, in three aligned columns on wider screens and a single column on phones.
- Language-specific descriptions have been replaced with a welcome for everyone.
- Verse links now point to the homepage, including redirects from old About-page verse bookmarks.
- Existing leadership roles, photographs, beliefs, and gathering schedules are retained.

## Preview

Extract the ZIP completely, then open `index.html` in a browser. Keep all five HTML files and the `assets` folder together. The photos are included. Google Fonts and the YouTube player need an internet connection; fallback fonts remain available offline.

## Update your GitHub Pages site

1. Keep a backup of the existing site, or use the repository's version history.
2. Copy the contents of this ZIP into the same published folder that currently contains your `index.html` in `ICF-website-project`.
3. Replace `index.html`, add `visit.html`, `about.html`, `ministries.html`, and `events.html`, and merge the included `assets` folder with the existing one. Do not delete other repository files.
4. Commit the files. Keep the existing GitHub Pages publishing source. Upload the extracted files, not the ZIP itself and not an extra enclosing folder.
5. Open the site after GitHub Pages finishes updating and check the navigation. If an older design appears, refresh without the browser cache.

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

Your source marked the logo, email, and social links as placeholders. They remain visibly marked here; the email is not presented as a verified mail link.

- In `assets/site-config.js`, enter the confirmed `email` and `socialLinks`. These are used on all five pages. Do not enter passwords or API keys in this file.
- Replace the placeholder logo in the header and footer of each HTML page with the approved church logo.
- When those details are ready, set `draftMode: false` in `assets/site-config.js` to hide the yellow draft banner. Empty social links will disappear, and an empty email will show an invitation to speak at a Sunday gathering.
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

This package has not been published to your GitHub repository.

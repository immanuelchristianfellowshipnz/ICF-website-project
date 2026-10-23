# Immanuel Christian Fellowship website

The draft website for Immanuel Christian Fellowship, a church in Mangere, Auckland, New Zealand.

**Live site:** https://immanuelchristianfellowshipnz.github.io/ICF-website-project/

This is a draft for review by the church overseers. Once the content is approved, the site is planned to move to a website builder.

## What's in this repository

| File or folder | What it is |
|---|---|
| `index.html` | The whole website: content, styling and the small scripts it uses |
| `assets/` | Photos and the placeholder logo |
| `README.md` | This file |

There is nothing to install or build. Open `index.html` in a browser to preview it.

## Making changes

1. Edit `index.html` (or add files to `assets/`) and save.
2. Open `index.html` in a browser to check the change.
3. Publish it:

```bash
git add -A
git commit -m "Short note on what changed"
git push
```

The live site updates a minute or two after each push.

## Editing tips

**Find what still needs filling in.** Search `index.html` for `EDIT:` to find every spot that needs church details.

**Placeholder highlighting.** Yellow highlighted text is still a placeholder. The highlight comes from these tags around the text:

```html
<em class="ph">Placeholder text</em>
```

Delete `<em class="ph">` and `</em>` to remove the highlight, and keep the text in between.

**Special events.** Each special event disappears from the site by itself after its end time (Auckland time). Set the end with `data-end`, written as year, month, day, then the time in 24-hour format:

```html
<li data-end="2027-04-04T13:30">
  <h3>Easter Sunday</h3>
  <p>Easter service at 10:30 am</p>
</li>
```

When every special event has passed, the Special events card hides itself. Past events stay in the file, so remove old ones now and then.

**Regular gatherings.** The upcoming events list (Sunday service, Friday Bible study and prayer, first Saturday fasting prayer, third Sunday ministries) is worked out automatically from the church schedule. It only needs changing if the schedule changes.

## Before going fully live

- Get the overseers' approval of the content, especially "What we believe".
- Confirm everyone in the photos, including the children's parents, is happy for them to be on a public website.
- Replace the placeholder logo and email address.
- Remove the yellow "Draft for review" bar at the top of the page.
- Remove this line from `index.html` so search engines can list the site:

```html
<meta name="robots" content="noindex, nofollow">
```

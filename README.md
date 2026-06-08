# OAO Course Overviews

A browsable directory of one-page family course overviews for Optima Academy Online (127+ courses, K–12), served from this repo via GitHub Pages.

**Live:** https://optimaondemand.github.io/Course-Overviews/

- **`index.html`** — the widget: grade-level menu → course list → Open / Download selected.
- **`manifest.js`** — the data that drives the menus. The widget reads this file; nothing is hard-coded.
- **`pdfs/`** — the one-page overview PDFs (`lowercase-with-hyphens.pdf`), currently 106 courses.

## Adding a course

1. Drop the PDF into `pdfs/` (e.g. `grade-4-science.pdf`).
2. Add one entry to `manifest.js`:
   ```js
   { title: "Grade 4 Science", grades: ["4"], file: "pdfs/grade-4-science.pdf" },
   ```
   A course may list several grades — `grades: ["6","7","8"]` shows it under each.
3. Commit and push. GitHub Pages redeploys in ~60 seconds; the widget updates itself.

## Embedding in Canvas

Once published with GitHub Pages enabled, embed via iframe:

```html
<iframe src="https://optimaondemand.github.io/Course-Overviews/"
        style="width:100%; height:680px; border:1px solid #D0D9E8; border-radius:10px;"
        title="OAO Course Overviews"></iframe>
```

The same URL works as a standalone link for families (email, newsletter, website).

## Notes

- Each course row has an **Open ↗** button (new tab). Checking courses reveals a floating bar with **Download** — one download per PDF; the browser asks once to allow multiple downloads. There is deliberately no bulk "open in tabs" action: pop-up blockers only allow one new tab per click, so a bulk-open button can never work reliably.

# open-security-summit.sgit.ai

The next version of the Open Security Summit's website, built in the open. The official site
stays at https://open-security-summit.org until this one replaces it.

Live: https://open-security-summit.sgit.ai (GitHub Pages, from `dev` and `main`).

## Layout

```
admin/content/pages/*.md      the pages: front matter (path, title, heading, summary, lead) + Markdown
admin/content/articles/*.md   the articles: front matter (title, date, author, summary, status) + Markdown
admin/content/llms-intro.md   the head of llms.txt
admin/data/*.json             the records: summits, sessions, events, projects, numbers
admin/build/build.py          builds every page into the repo root (stdlib only)
admin/build/md.py             the Markdown subset the site writes
admin/build/validate.py       the gate CI runs
admin/build/version.txt       the site version, printed on every page
admin/notes/                  research and decisions, dated
assets/                       site.css, theme.js, favicon.svg
```

Everything outside `admin/` and `assets/` is generated. Do not edit it by hand.

## Build and check

```
python3 admin/build/build.py
python3 admin/build/validate.py
python3 -m http.server 8000      # then http://localhost:8000
```

## The rules

The previous site was a Hugo site that did a lot that was new and then stalled under its
own exceptions. These rules are the lesson (see `about/` and the first article):

1. **One template.** Every page is rendered by `page()` in `build.py`. A page that seems to need
   its own template means the data is missing a field: add the field.
2. **Data in JSON, prose in Markdown.** A page pulls records in with a line `!block <name>`;
   each block is one function in `BLOCKS`, and works on any page.
3. **No per-year or per-page exceptions.** A new summit is new data, never new code.
4. **Stdlib only.** Nothing to install; Python 3.10+.
5. **Built pages are committed and never edited by hand.** `validate.py` rebuilds and fails if
   anything changed.
6. **Refactor in the same change.** When a new need does not fit the model, change the model then.
7. **Every push is a release.** Bump `admin/build/version.txt`; commit subject `site vX.Y.Z: ...`.

## Licence

Content CC BY 4.0, code Apache 2.0. Run by Open Security Summit CIC (UK, company 11935098).

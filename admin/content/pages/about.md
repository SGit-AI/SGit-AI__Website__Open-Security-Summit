---
path: about/index.html
title: About this site
heading: The next version of open-security-summit.org, <em>built in the open.</em>
kicker: About this site
summary: What open-security-summit.sgit.ai is, how it relates to open-security-summit.org, what runs today and what does not, and the rules this site keeps so it does not drift into the technical debt that stalled the last one.
lead: This is where the next version of the Open Security Summit's website is being built. The official site stays at open-security-summit.org until this one is ready to replace it.
---

## What runs today {#status}

The honest line, for v0.1.0:

- **Runs:** these pages; the history of the summits; a first cut of the archive, with links to the session pages and recordings on open-security-summit.org; the hosted-projects proposal; this site's build and its gate.
- **Planned, not running:** participant pages; the full archive read into data; follow-ups after sessions; personalised paths; event registration.
- **Not decided:** dates for London and for the remote sessions.

## The rules this site keeps {#rules}

The last website was a Hugo site that did a lot that was new, and then stalled under its own exceptions (the story is in [the first article](/articles/when-the-website-stalled-the-summit.html)). These rules are the lesson, written down so an agent or a person working here can keep them:

1. **One template.** Every page uses the same one. A page that seems to need its own is a sign the data is missing a field.
2. **Data in JSON, prose in Markdown.** Summits, sessions, events and projects are records in `admin/data/`. Pages pull them in with a `!block` line.
3. **No per-year exceptions.** A new summit is new data, never new code.
4. **Stdlib only.** The build is two short Python files with no dependencies to install, update or break.
5. **The built pages are committed and never edited by hand.** The gate rebuilds and fails if anything changed.
6. **Refactor in the same change.** When a new need does not fit, the model is changed then, not worked around.
7. **Every push is a release.** The version is in `admin/build/version.txt` and on every page.

## How it is made {#how}

Pages are written from Dinis Cruz's voice memos and the summit's own records, by an agent working on the site, with the editorial responsibility his. The source is [on GitHub](https://github.com/SGit-AI/SGit-AI__Website__Open-Security-Summit), Apache 2.0 for the code and CC BY 4.0 for the content. It is one of the sites of the [sgit.ai](https://sgit.ai/) family, alongside the [newsroom](https://newsroom.sgit.ai/).

## Who runs the summit {#who}

The Open Security Summit is run by Open Security Summit CIC, a UK community interest company, [company 11935098](https://find-and-update.company-information.service.gov.uk/company/11935098), incorporated on 9 April 2019. Its director is Dinis Cruz.

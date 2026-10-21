# The legacy Open Security Summit sites: an analysis (21 October 2026)

Read from full-history clones of github.com/OpenSecuritySummit on 21 October 2026, and from the
live open-security-summit.org. Paths are relative to each repo. Counts are of files and front
matter, so they include placeholders and cancelled sessions: treat them as approximate.

## Repos

| Repo | What | Commits | Span | Notes |
|---|---|---|---|---|
| oss2018 | 2018 summit, `2018.open-security-summit.org` | 3,589 | 2018-02 → 2020-11 | theme as submodule; Hugo `latest` |
| oss2019 | 2019 summit, `2019.open-security-summit.org` | 2,152 | 2018-10 → 2020-11 | notebooks/api/oss_hugo (GSheets sync) |
| oss2020 | 2020 online summit, `2020.open-security-summit.org` | 2,472 | 2019-11 → 2020-10 | HeySummit data, 94 curated videos |
| oss2021 (= oss-website) | the live open-security-summit.org, Oct 2020 → Dec 2024 | 6,466 (3,005 merged PRs) | 2020-09 → 2025-07 | Hugo 0.139.3; last real activity 2024-12-17 |
| oss-bot | Slack bot on AWS Lambda | 34 | 2019-05 → 2020-05 | private OSBot submodules |

Not found (or private): oss2017, oss2022–oss2025, and ~30 other plausible names.

All four sites: Hugo + `devcows/hugo-universal-theme` renamed `themes/oss-owasp`, deployed to
`gh-pages` with `peaceiris/actions-hugo`. oss2021's workflow keeps five older Hugo versions as comments.

## Content model

- 2018–2019: sessions in `content/tracks/<Track>/`, `type` picks the layout (seven session types in
  2018). Participants in `content/participant/`. People are linked to sessions by **name as text**,
  no IDs. Schedule from `data/schedule/{rooms,times,main_hall,villas}.yaml`.
- 2020+: sessions at `content/sessions/<year>/mini-summits/<Month>/<Track>/<slug>.md` (template
  `content/sessions/_template.md`: title, track, type, topics, event, when_year, when_month,
  when_day, when_time, hey_summit, session_slack, organizers, youtube_link, zoom_link). Each month's
  `_index.md` (layout `mini-summit`) selects sessions by `when_year`/`when_month`. Tracks (12) and
  projects (13) overlap. Only Hugo taxonomy: `topics`.

## Numbers

- 2018: ~299 sessions (129 working), 143 onsite + 69 remote participants, 194 outcomes.
- 2019: 150 sessions (123 working), 130 onsite + 28 remote, 40 outcomes.
- 2020: 73 working + 66 training + 20 user sessions + 3 keynotes; ~92 participants. Live homepage
  stats: summit week 60 sessions / 516 attendees / 62 speakers; training 50 / 722 / 62.
- Mini-summits (oss2021): 27 events. Session pages per year: 2020 87 (62 are June-2020 training
  pages), 2021 91, 2022 110, 2023 70, 2024 51. 407–411 session pages, ~216 participant pages,
  241 distinct organisers (53 without a participant page), 219 unique YouTube IDs.
- Top organisers: Dinis Cruz 132, Petra Vukmirovic 24, Abbas Haidar 19, Mario Platt 15, James Bore 14.

## Tech debt evidence

- Layout files: 171 (2018) → 190 (2019) → 258 (2020) → 297 (2021; 199 partials, 14 shortcodes,
  8,740 lines). 183 of oss2021's layouts are byte-identical to oss2020's.
- Dead page types still templated: `admin/oss_2018/villas-mappings.html`, product/private/dynamic/
  summit-session layouts, `page/onedaysummit.html` ("03/July/2018"), `page/about2017.html`.
- Year-specific partials with hard-coded dates: `partials/home-after-summit/summit-2019.html`,
  `home-during-summit/today-schedule.html`, `home-page/hero.html` ("June 14 to 18, 2021"), etc.
- "Current edition" set in four places that disagree: `params.toml` 2023, `config.toml` 2025,
  `about-2021.html` 2022, `data/schedule/next_event.yaml` Dec 2024.
- `partials/schedule/table/table.html` always reads `days_next_summit`, so every archived event
  page on the live site shows Dec 2024's day headers (confirmed on /sessions/2024/mini-summits/sep/).
- 19 partial calls inside HTML comments (still executed by Hugo).
- Track names hard-coded in `partials/tracks/body.html` and `partials/projects/body.html`
  ("todo: refactor styles below to decouple it from the tracks names").
- `track` has ~38–40 spellings for ~12 tracks; folder `content/tracks/Screms-ii`; `#status`
  commented in 301 files; duplicate `youtube_link` keys; 26 `when_time` codes.
- 12 content files without `.md` (ignored by Hugo); `sessions/2024/mini-summits/Jun/_index.md`
  titled "Mini-Summit April 2024"; ~158 TODO-style matches; `partials/debugprint.html`.
- Binaries in git: 23 MB and 17 MB participant PNGs; `.git` is 353 MB.
- 3,121 of oss2021's non-merge commits were committed by "GitHub", i.e. the web editor; commit
  subjects are mostly "Update …" (2,248) and "Create …" (539).

## What this site does differently

See README.md, "The rules": one template, data in JSON, no per-year code, stdlib-only build,
built pages checked by a gate, refactor in the same change, IDs rather than names (to come with
the participant data).

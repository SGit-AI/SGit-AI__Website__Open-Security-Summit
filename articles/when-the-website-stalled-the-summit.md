---
title: When the website stalled the summit: what technical debt did to the Open Security Summit, and why now is the time to restart it
date: 2026-10-21
author: Dinis Cruz
summary: The Open Security Summit has some of the best material in application security, and it stalled. Not for lack of ideas or people, but because its website drifted into complexity and technical debt that nobody had the time to refactor, and because there was never the capacity to follow up. The numbers from its repositories, what was lost, and why, with agents now able to do the follow-up, it is time to restart it, in London and online.
teaser: Why the summit stalled under its own website's technical debt, what was lost, and why agents doing the follow-up make it time to restart, in London and online.
status: published
---

## In short {#in-short}

- **The summit had some of the best assets in technology.** Three in-person weeks, 27 online mini-summits, more than a thousand session pages and 219 recordings.
- **Its website got us there and then stopped us.** A Hugo site with real innovation in its structure, that grew to 297 templates and nearly forty spellings of a dozen tracks.
- **Every new summit added exceptions and none was refactored away.** There was no development team, so there was never the time.
- **What was really lost was the follow-up.** The sessions happened; connecting them to the people, and giving each person a path, did not.
- **That follow-up can now be done.** By agents that read the recordings and the pages, under a person's responsibility.
- **So it restarts.** In-person events in London, remote sessions, and a home for open projects. It needs funding.

## What we built {#built}

The Open Security Summit started in 2018 as the continuation of the OWASP Summit 2017, a week at Woburn Forest Center Parcs with over 170 working sessions. The idea, from the OWASP summits of 2008 and 2011, was that there are no attendees: everybody who comes is a participant, every session is a working session, and the outcome is written down. It is still one of the best things I have organised.

The website was part of that. We nailed its structure in the first couple of summits: a page for every session, with its track, its organisers and its participants; a page for every participant, with the sessions they were in; and outcome pages for what each session produced. The schedule was built by the participants themselves, by adding a page. In 2018 that gave us about 300 session pages, 212 participant pages and 194 outcome pages, for one week. It was a good example of what a Hugo site could do, and I did a lot of the programming on it myself.

## How it drifted {#drift}

Then every summit asked for something new, and every change was made in a hurry, before the next event. The repositories show what that does over seven years:

- **The templates kept growing.** 171 layout files in 2018, 190 in 2019, 258 in 2020, 297 on the live site, 8,740 lines of templates. Each year's site was a copy of the last one: 183 of today's layout files are identical to 2020's.
- **The exceptions were never removed.** Partials named for one year, with its dates written in them ("Summit 2019 : 3-7 June"); templates for kinds of session that no longer exist; a page for a one-day summit in July 2018.
- **The data drifted.** People are linked to sessions by matching their names as text, with no identifiers, so a typo breaks the link: 53 of the 241 people who organised a session online have no page. The `track` field has nearly forty spellings for about a dozen tracks.
- **The current edition was in four places, and they disagreed.** One file said 2023, one 2025, one 2022, and the schedule said December 2024. Because past event pages read their dates from "the next summit", every archived mini-summit on the site today shows the days of December 2024.
- **The content was edited by many hands, without a model to hold it.** Around 3,000 merged pull requests on the live site, most of them single-page edits in GitHub's web editor.

None of that is anyone's fault. It is what happens to any system that keeps changing when nobody has the time to change its model with it. It is the drift of complexity, and the technical debt that comes with it.

## Why it stalled {#stalled}

The typical pattern: whenever we had a new summit we wanted to make changes, and we never had the time to refactor first. So each change was another exception, each exception made the next change harder, and the debt kept growing until changing anything took longer than we had. The last mini-summit ran in December 2024. One was announced for March 2025, and never happened.

Underneath the website there was a harder problem: scale. What made the in-person summits powerful was that we treated every participant as a presenter. That works in a room, for a week. Online it needed something the website could not do and we had no people to do by hand: follow-up. After a session, sending the outcome and the next steps to the people who were in it. Connecting the sessions to each other and to the people. Giving each participant a personalised path through the summit, rather than one schedule for everybody.

I kept funding it, and kept it alive at some cost to me, but it was not scalable. The summit never fulfilled its potential as a web environment people could come back to, because of the follow-up.

## What it has {#assets}

And the crazy thing is how good the material is. Keynotes from Adam Shostack, Simon Wardley, Jane Frankland, Dave Snowden, Jim Manico and Bjoern Kimminich. Years of threat-modelling, SAMM, DevSecOps and governance sessions. In 2023, when the whole AI thing started, some of the first sessions on what generative AI and agents would do to security teams. A lot of what I know is in those videos, including some of my own history, and most of it is lost in plain sight: online, but not findable, not connected, and not followed up. The [archive](/archive/) is a first selection.

## What changes now {#now}

What has changed is the workflow. I can now put an agent on the case: to read everything that is there, map the data, and connect the dots. To read the session pages and the recordings, and say who said what. To build a much better page for every participant, from what they actually did. To follow up with people. The follow-up that did not scale with people scales now, as long as a person stays responsible for what it says.

And this time the website is built so it does not drift the same way. One template; the summits, sessions, events and projects as data; no per-year exceptions; the build checked on every push; and the model changed in the same change that needs it, not worked around. The rules are on [the about page](/about/#rules), so that whoever works on this site next, person or agent, can keep them.

## What is next {#next}

- **In-person events in London.** Working sessions, in a room, with the same rule as Woburn.
- **Remote sessions.** Shorter and more condensed, each with an owner, an outcome and a follow-up. I am going to bring a lot more people in to run them.
- **A home for open projects.** Projects that want an independent hub, away from the company or environment they grew up in. The first is [Agent Behaviour Policies](/projects/), a proposal for discussion and legal review.

I would argue that if we organised an Open Security Summit in person now, with the capability we have today to capture what is said and follow it up, it would be pretty spectacular. We just need somebody to fund it. [This is how](/fund/).

## What this does not claim {#limits}

- **The counts are approximate.** They are pages in the repositories, which include placeholders and cancelled sessions.
- **No dates are set.** For London or for the remote sessions.
- **The agent work is not running yet.** Participant pages, the archive as data and the follow-ups are the first things to build. [What runs today](/about/#status).
- **Hosting Agent Behaviour Policies is a proposal.** Not an adopted charter.

## Where this comes from {#sources}

A voice memo of mine of 21 October 2026. The repositories of the summit's sites, [oss2018](https://github.com/OpenSecuritySummit/oss2018), [oss2019](https://github.com/OpenSecuritySummit/oss2019), [oss2020](https://github.com/OpenSecuritySummit/oss2020) and [oss2021](https://github.com/OpenSecuritySummit/oss2021) (open-security-summit.org), and the live site, read the same day; the analysis is in this site's repository at `admin/notes/2026-10-21__legacy-sites-analysis.md`. The history of the OWASP summits from [diniscruz.ai](https://diniscruz.ai/2025/06/07/history-and-analysis-of-owasp-in-person-summits.html). Related: [Agent Behaviour Policies move to the Open Security Summit](https://newsroom.sgit.ai/articles/agent-behaviour-policies-move-to-the-open-security-summit.html), newsroom.sgit.ai. Written up and checked by this site's agent; the editorial responsibility is mine.

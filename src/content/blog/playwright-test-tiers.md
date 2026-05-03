When our Playwright suite hit around 1,000 tests across four production domains, CI started feeling less like a safety net and more like a daily lottery. Some days everything was green; some days a third of jobs would fail for reasons that had nothing to do with the code under test.

Treating every test as equally important was the root of the problem. So we split the suite into three tiers — and the daily picture cleared up almost immediately.

## The three tiers

**Tier 1 — Smoke.** The handful of flows that absolutely must work for the site to be useful: search, hotel detail page load, checkout entry. Runs on every merge request. Fast, ruthless, low tolerance for flake.

**Tier 2 — Regression.** The wide net. Covers every meaningful user journey across the four domains. Runs nightly and on release candidates. Allowed slightly more retry tolerance because of cross-browser webkit weirdness.

**Tier 3 — Extended.** Edge cases, rarely-changed flows, locale-specific behaviour. Runs weekly or on demand. Failures here trigger an investigation, not a rollback.

## What this actually changed

Before tiering, a single flaky checkout test could block a developer's MR for an hour while we re-ran the whole suite. After tiering, only Tier 1 gates merges — and Tier 1 is small enough to keep genuinely stable.

The bigger shift was in how the team talked about failures. Before, every red build felt equally urgent. After, a Tier 3 failure on a weekly run was a backlog item; a Tier 1 failure on an MR was a blocker. That vocabulary change reduced the noise more than any technical fix did.

## What I'd do differently

Tier assignment isn't a one-time exercise. We started with my best guesses and adjusted over the next two sprints based on actual flake data from our results parser. If I started over, I'd build the parser **first** and let the data drive the initial tiering rather than intuition.

> The real win wasn't the categorisation. It was giving the team a vocabulary to talk about which failures actually matter.

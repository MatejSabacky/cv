I've been cautious about giving AI tools direct write access to our Git repo, but the temptation of having an AI agent read a Jira ticket and produce a starter test was too useful to ignore. Here's how I built a pragmatic POC that kept humans firmly in the driver's seat.

## The shape of the pipeline

The flow looks like this:

1. A developer assigns a ticket to the QA workflow lane
2. A script pulls the ticket text plus any linked GitLab MR diffs
3. An AI agent generates a draft Playwright test that follows our project's POM conventions
4. The draft lands as a **suggestion** in a separate branch — no auto-merge, no auto-push
5. I review, edit, and only then open an MR

The non-negotiable rule: the AI never directly modifies the main branch, never has push access, and never opens MRs on its own.

## What worked

The test agent setup with custom instruction files turned out to be the unlock. By giving the agent our project's POM patterns, fixture conventions, and naming style as context, the generated drafts followed our architecture closely enough that editing them was *faster* than writing from scratch.

The biggest time saving was on repetitive flows — login sequences, form setups, navigation to a specific page state. The AI handled that scaffolding well every time.

## What surprised me

- **Selectors were the weak link.** The agent guessed locators based on visible text, which broke as soon as we ran in a non-Czech locale. Data attributes or explicit test IDs are the only reliable anchor.
- **It was great at scaffolding, bad at edge cases.** Happy paths came out clean. Boundary cases needed me to spell them out explicitly in the prompt.
- **Reading the MR diff helped more than the ticket alone.** Tickets describe intent; diffs describe reality. Both context sources together produced better tests than either alone.

## Where I drew the line

I won't let an AI:
- Push directly to main or any protected branch
- Open MRs without human review
- Have access to production credentials, even read-only
- Run code outside a sandboxed environment

The human gate isn't just a safety measure — it's where most of the actual QA thinking happens. The AI removes the blank-page problem; the reviewer ensures the test actually validates the right thing.

> AI in QA isn't about replacing the test author. It's about removing the boilerplate that makes writing tests feel like a chore.

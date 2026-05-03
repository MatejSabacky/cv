## What it does

Playwright Results Parser is a single-file HTML tool that gives you a clear picture of your test suite's health after each CI run — no server, no build step, no install required.

Drop in a `results.json` from Playwright and it answers the questions that actually drive improvement:

- **Which tests are flaky?** Flaky-rate calculation across retries so you can prioritise stabilisation work.
- **Which tests fail most often?** A ranked failure view to separate genuine regressions from noise.
- **Which tests are slowest?** Top-N slowest passing tests to find where time is being wasted in the suite.
- **How long did the full run take?** Job duration tracking to spot pipeline bottlenecks.

Results are broken down by environment, detected automatically from GitLab stage names — useful when you run the same suite across multiple domains or deployment targets.

## Why I built it

Once the Invia regression suite grew beyond a few hundred tests, the raw `results.json` became too large to read manually and too unstructured to share with the team. We needed to answer "which three tests should we fix this sprint to reduce the flaky rate the most?" — and that question required aggregation the default Playwright reporter doesn't provide.

A web page with a file picker turned out to be the lowest-friction option: any QA or developer can open it, no tooling knowledge required.

## How it's structured

```text
parser.html    ← single file, all logic + UI
├── HTML       ← drop zone, tabs, results table
├── CSS        ← inlined, dark/light aware
└── JS         ← parsing, flaky-rate math, GitLab API client
```

## GitLab API tab

When running sharded pipelines, collecting all the `results.json` shards manually is tedious. The GitLab API tab takes a pipeline URL and a personal access token and fetches all matching job artifacts automatically — then merges them into a single parsed view.

## Export

All results export as TSV with one click — paste directly into Excel or Google Sheets for ad-hoc filtering, sharing with stakeholders, or feeding into a sprint tracking sheet.

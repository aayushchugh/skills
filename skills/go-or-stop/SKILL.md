---
name: go-or-stop
description: >-
  Use when asked if a change is ready to ship, or for a go or no-go. Not for
  deploying.
---

# Go or stop

## Scope

Read the diff, the test results, the migrations, the feature flags, the dependency changes, the deploy config, and the known risks. Do not deploy, change production, or create a release until the user explicitly approves that step.

No-go when a migration check or a rollback is missing. A failed or missing test result is a no-go only when the repo already has test code. A repo with no test code skips that check. Do not talk the release into a go.

## Before writing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

Ask the target environment, the migrations included, and the checks already run.

## The check

- What changed, in one line per user-facing change. Leave out internal refactors.
- Tests, when the repo has test code: which ran, which failed, and which did not run. A repo with no test code skips this check.
- Migrations and backfills. Each one needs the current state (table, row count, rows touched), the forward change, a rollback or the data that would be lost, steps that are safe to re-run, batching for a large table, and a check that proves the result. A migration missing any of these is a no-go.
- Feature flags and dependency changes.
- Known risks, each with the check that would catch it.

## The answer

- Go or no-go, with the reasons.
- The checks still to run before the deploy.
- What to watch after the deploy: the signal and the threshold that means stop.
- The rollback steps, in the order to run them.
- A short note of what changed for users.

A migration missing any item above, or an unknown rollback, is a no-go. A missing test result is a no-go only when the repo has test code. Do not invent a test result.

## Replies

Say go or no-go, and the reason.

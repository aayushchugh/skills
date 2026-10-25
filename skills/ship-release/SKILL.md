---
name: ship-release
description: >-
  Check whether a change is ready to ship, with a go or no-go, what to watch,
  and how to roll back. Use when the user asks for a release check, a deploy
  check, or release notes. Do not deploy or change production.
---

# Ship a release

## Use case

Decide whether a change is ready to ship, and say what to do if it is not.

## Scope

Read the diff, the test results, the migrations, the feature flags, the dependency changes, the deploy config, and the known risks.

Do not deploy, change production, or create a release until the user explicitly approves that step.

## Before writing

Ask every unanswered question that would change the go or no-go answer: the target environment, the migrations included, and the checks already run. Send them in one turn.

## The check

- What changed, in one line per user-facing change. Leave out internal refactors.
- Tests: which ran, which failed, and which did not run.
- Migrations and backfills, and whether `change-data-safely` has an approved plan for each one.
- Feature flags and dependency changes.
- Known risks, each with the check that would catch it.

## The answer

- Go or no-go, with the reasons.
- The checks still to run before the deploy.
- What to watch after the deploy: the signal and the threshold that means stop.
- The rollback steps, in the order to run them.
- A short note of what changed for users.

A missing test result, an unapproved migration, or an unknown rollback is a no-go. Do not invent a test result. Put an unknown under Open questions.

## Replies

The check is the deliverable. The note around it is 1–2 lines: go or no-go, and the reason.

## Done

- [ ] The answer is go or no-go, with reasons
- [ ] Tests, migrations, flags, and dependencies were checked
- [ ] Rollback steps are in order
- [ ] The user-facing note leaves out internal refactors
- [ ] Nothing was deployed

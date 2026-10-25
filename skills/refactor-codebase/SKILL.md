---
name: refactor-codebase
description: >-
  Audit a whole repo or a named area for duplication, divergent flows, dead
  code, over-engineering, evident performance waste, and drift from the repo's
  own standards, then apply approved refactor steps one at a time. Use when the
  user asks to refactor, clean up, standardize, or audit the structure of a
  codebase. Do not use for a security audit.
---

# Refactor codebase

## Use case

Find where the code repeats, drifts, or does more than it needs to, against the repo's own standards. Then fix it in small, approved steps that keep behavior the same.

## Scope

The audit is read-only. It ends in a report and an ordered plan. Code changes start only after the user approves a batch of steps.

Skip code the team does not own: `node_modules`, build output, generated files, vendored code, lockfiles, and migrations.

A security issue gets one line in the report, pointing to the `audit-security` skill. Do not review security here.

## Before auditing

Ask every question that would change the plan in one turn: the target area, hard constraints, and behavior that must not change. Skip questions the repo already answers.

## Standards

1. Read the repo's lint, format, and tsconfig settings, and any convention file such as `AGENTS.md`.
2. Where config is silent, the standard is the pattern most of the repo already uses for naming, file layout, module boundaries, imports, data fetching, validation, and error handling.
3. When the config and the majority pattern disagree, the config wins.
4. When there is no clear majority, add an open question. Do not invent a standard or bring one in from outside the repo.

## What to find

Each finding cites its files and callers, or the places the logic repeats.

- **Standards drift:** code that breaks the repo's config or its majority pattern.
- **Structure:** a file in the wrong layer, an import that crosses a module boundary, or an inconsistent folder layout.
- **Duplication:** the same logic, matched by behavior, with a copy count. Propose a helper only on the third copy. Two copies count only when they have already drifted apart.
- **Divergent flows:** different paths doing the same job. Unify them on the existing correct version. When copies differ, list the differences and ask which behavior is right.
- **Reimplemented code and over-engineering:** a local copy of the standard library or an installed package, a pass-through wrapper, an interface with one implementation, or an option with one caller.
- **Dead code:** unused exports, files, branches, and dependencies. A search is not proof. Code is still used when a framework entry point (such as Next.js `page.tsx` or a route file), a dynamic import, a string lookup, a config file, a script, or a package export refers to it.
- **Evident performance waste:** a repeated query, work repeated in a loop, or an unbounded load. Report it only when the code shows it.

Never propose a new abstraction, a new dependency, a framework migration, or a split done only for file size.

## Priority

- P0: copies or flows that already disagree and can cause a bug.
- P1: high-traffic drift, duplication, dead code, or waste.
- P2: local polish.

Mark each step's effort and risk as low, medium, or high.

## Plan

- Order the steps: delete dead code, then replace reimplemented code, then fix standards drift, then unify flows, then simplify what is left.
- A formatting-only change is its own step and uses the repo's formatter script. Never mix it with a logic change.
- Each step is small, keeps behavior the same, ships on its own, names its files, and names the test that checks it. When no test covers a step, say so and use the `generate-test-cases` skill before that step.
- A merge keeps every current caller's output the same. If any caller's output would change, that is a behavior change and needs its own approved step.
- On a big repo, group the steps into small batches. The user approves one batch at a time.
- Stop after the report. Edit nothing until the user approves a batch.

## Apply

1. Before the first step, run the repo's lint, typecheck, and tests, and record what already fails. A failure that was there before is not blamed on the refactor.
2. Apply one approved step at a time, following the `write-simple-code` skill. The approved step is the request, so the change stays inside that step's files. Each step stays its own diff.
3. After each step, run the same checks. If a new failure appears, revert that step's edits, stop, and report. Do not continue to the next step.
4. After a batch, re-check the remaining steps, because earlier steps change later ones. Report, then wait for the next approval.

Never change public behavior or an API without an approved step that says so. Do not commit unless the user asks.

## Summary

Counts by priority, the steps applied, the steps left, the areas read and not read, and open questions. Use only counts that come from evidence. Do not claim lines saved or speed gained, and do not call a partial audit complete.

## Replies

The report is the deliverable. The note around it is 1–2 lines: how many findings, and what needs approval next. After a batch, state what changed and what failed, if anything.

## Done

- [ ] Standards come from the repo's config or its majority pattern
- [ ] Every finding cites its files and callers
- [ ] Dead code is confirmed beyond a search
- [ ] No step adds an abstraction, a dependency, or a migration
- [ ] Every step names its files and its test
- [ ] Nothing was edited before approval
- [ ] A baseline was recorded before the first step
- [ ] A step with a new failure was reverted
- [ ] The summary lists what was read and what was not

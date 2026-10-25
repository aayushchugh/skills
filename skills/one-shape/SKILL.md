---
name: one-shape
description: >-
  Audit a repo for duplication, divergent flows, dead code, over-engineering,
  waste, and standards drift, then apply approved steps. Use when the user
  asks to refactor or clean up a codebase. Do not audit security.
---

# One shape

## Scope

The audit is read-only until the user approves a batch. Then apply one step at a time with `no-slop`.

Skip code the team does not own: `node_modules`, build output, generated files, vendored code, lockfiles, and migrations. A security issue gets one line pointing to `open-doors`.

## Before auditing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

Ask the target area, hard constraints, and behavior that must not change.

## Standards

1. Read the repo's lint, format, and tsconfig settings, and any convention file such as `AGENTS.md`.
2. Where config is silent, the standard is the pattern most of the repo already uses for naming, file layout, module boundaries, imports, data fetching, validation, and error handling.
3. When the config and the majority pattern disagree, the config wins. When there is no clear majority, add an open question. Do not invent a standard.

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

## Plan and apply

Order the steps: delete dead code, then replace reimplemented code, then fix standards drift, then unify flows, then simplify what is left. A formatting-only change is its own step and uses the repo's formatter. Never mix it with a logic change.

Each step is small, keeps behavior the same, ships on its own, names its files, and names the test that checks it. When no test covers a step, say so and use `cases-to-run` before that step. A merge keeps every current caller's output the same. If any caller's output would change, that needs its own approved step. On a big repo, the user approves one batch at a time.

Stop after the report. Edit nothing until the user approves a batch.

1. Before the first step, run the repo's lint, typecheck, and tests, and record what already fails.
2. Apply one approved step at a time with `no-slop`. Each step stays its own diff.
3. After each step, run the same checks. If a new failure appears, revert that step, stop, and report.
4. After a batch, re-check the remaining steps, then wait for the next approval.

Do not commit unless the user asks.

## Summary

Counts by priority, the steps applied, the steps left, the areas read and not read, and open questions. Do not claim lines saved or speed gained, and do not call a partial audit complete.

## Replies

Say how many findings, and what needs approval next. After a batch, state what changed and what failed, if anything.

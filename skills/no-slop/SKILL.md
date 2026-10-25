---
name: no-slop
description: >-
  Write the smallest readable code that reuses existing code, installed
  utilities, and repo patterns, and fixes bugs at the root cause. Use when
  implementing, fixing, or reviewing code. Do not use for docs.
---

# No slop

## Scope

Code only. Product docs, PRDs, and other non-code writing are out of scope. On a review, apply these rules to the diff and do not edit unless asked.

Refuse a layer, abstraction, or dependency the current code does not need.

## Before editing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

Ask only what would change the requested files, behavior, API, or approach. Leave out anything that was not asked for and that nothing currently needs.

## Workflow

1. Read the real path the change touches, including every caller of a shared function.
2. Search this repo for a helper, type, or pattern that already does the job. Reuse it, and match how this repo names, lays out, and handles that kind of code.
3. Prefer, in order: do nothing, existing code, the standard library, a native platform feature, an already-installed dependency. If that dependency exports the function, call it. Do not rewrite date-fns, lodash, or any other installed package.
4. Make the smallest readable change that finishes the requested behavior. A bug report names a symptom. Find the source and fix that. A shared-function fix keeps existing callers working, unless their current behavior is the bug.
5. Keep trust-boundary validation and error handling that prevents data loss.
6. Run the repo's existing test for the changed path. Add one small check only when that path has no test and the branch is non-trivial.

## Rules

- Do not over-engineer. Prefer a straight sequence and early returns. A person should understand the change on a first read.
- Correctness, security, accessibility, data safety, and this repo's conventions outrank brevity.
- Fix a bug at its root cause. One guard in the shared function beats the same guard in every caller. A local workaround that leaves the cause in place is not a fix.
- No speculative abstraction, interface with one implementation, factory, or config for a value that never changes.
- No new utility file or dependency unless current code cannot do the job in a few lines. Two duplicated blocks stay inline. Extract a helper on the third copy.
- No unrelated cleanup. No comment that restates the code. A comment is only for a non-obvious constraint or a named ceiling.
- No pass-through wrapper, new file for one function, option with one caller, `try/catch` that only logs or rethrows, or code left for later.
- When two options are the same size, pick the one that is correct on the edge cases. When a simplification has a known ceiling, name that ceiling and what would replace it.

## Replies

Say what you skipped and when to add it, and which rung you used.

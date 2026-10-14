---
name: write-simple-code
description: >-
  Write, change, and review the smallest human-readable code that reuses
  existing code, installed package utilities, and repo patterns, and fixes
  bugs at their root cause. Use when implementing, fixing, refactoring, or
  reviewing code. Do not use for product docs, PRDs, or other non-code writing.
---

# Write simple code

## Use case

Stop AI slop. Do not over-engineer. Ship the simplest code a person can understand on a first read, built from pieces that already exist.

## Scope

Code only. Product docs, PRDs, and other non-code writing are out of scope.

## Before editing

Ask every question whose answer would change the requested files, behavior, API, or approach. Send them in one turn, then implement once. Skip questions the request or the code already answers.

Leave out anything that was not asked for and that nothing currently needs. Do not ask about that extra.

On a review, apply these rules to the diff and do not edit unless asked.

## Workflow

1. Read the real path the change touches, including every caller of a shared function. Simplicity comes after that reading.
2. If a piece was not asked for and nothing currently needs it, skip it.
3. Search this repo for a helper, type, or pattern that already does the job. Reuse it, and match how this repo names, lays out, and handles that kind of code.
4. Prefer, in order: do nothing, existing code, the standard library, a native platform feature, an already-installed dependency. If that dependency exports the function, call it. Do not rewrite date-fns, lodash, or any other installed package.
5. Make the smallest readable change that still finishes the requested behavior. A bug report names a symptom. Find the source and fix that. Do not patch around it. A shared-function fix keeps existing callers working, unless their current behavior is the bug.
6. Keep trust-boundary validation and error handling that prevents data loss.
7. Run the repo's existing test for the changed path. Add one small check only when that path has no test and the branch is non-trivial.

## Rules

- Do not over-engineer. Prefer a straight sequence and early returns over layers, cleverness, and indirection. A person should understand the change on a first read.
- Correctness, security, accessibility, data safety, and this repo's conventions outrank brevity.
- Fix a bug at its root cause. One guard in the shared function beats the same guard in every caller. A local workaround that leaves the cause in place is not a fix.
- A shared-function fix keeps existing callers working, unless their current behavior is the bug.
- No speculative abstraction, interface with one implementation, factory, or config for a value that never changes.
- No new utility file or dependency unless current code cannot do the job in a few lines.
- Two duplicated blocks stay inline. Extract a helper on the third copy.
- No unrelated cleanup.
- Add code only when reuse, the standard library, the platform, and installed dependencies cannot do it.
- When two options are the same size, pick the one that is correct on the edge cases.
- When a simplification has a known ceiling, name that ceiling and what would replace it.
- No comment that restates the code. A comment is only for a non-obvious constraint or a named ceiling.
- No pass-through wrapper, new file for one function, option with one caller, `try/catch` that only logs or rethrows, or code left for later.

## Replies

Explain in 1–2 lines. Include what you skipped and when to add it, and which rung you used. Write a paragraph only when the user explicitly asks for a longer explanation, walkthrough, or document.

## Done

- [ ] Reused existing code and repo patterns, or recorded why none fit
- [ ] Called the installed package's function instead of a local copy
- [ ] Skipped unrequested scope, and named the rung used
- [ ] No new dependency, utility, abstraction, or banned leftover without a current need
- [ ] Helper extracted only on the third copy
- [ ] Bug fixed at the root cause, not patched at the symptom
- [ ] Existing callers still work, unless their behavior was the bug
- [ ] Required validation and data-loss handling are still there
- [ ] Ran the repo's existing test for the path, or added one small check when none existed

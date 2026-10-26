---
name: cases-to-run
description: >-
  List cases to verify by hand, or name the code tests for no-slop when
  asked. Use when the user asks for test cases or to test a flow. Do not edit
  code or audit security.
---

# Cases to run

## Scope

Do not edit code. `no-slop` is the only skill that writes. Do not write anything until asked. Cover a security requirement or access rule the source already states. Do not invent controls.

Write the smallest set that would catch a real failure. Skip a case that does not change the outcome.

## Before writing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

Ask what would change the expected behavior, data, environment, limits, or permissions. An unknown expected result is not a case. Do not write a result of "TBD" or "works correctly."

## What to read

- A PRD or spec: requirements, acceptance criteria, rules, states, constraints, and non-goals.
- Code or a diff: the changed behavior, its contract, its callers, and the conditions that changed. Stop at the affected path.
- A bug report: the shortest reproduction, expected versus actual behavior, and the environment when it changes the result.

If the repository already tests a behavior, say so. Do not ask `no-slop` to add a second copy, and do not repeat it as a manual case.

## Which cases

Cover the relevant happy path, failure, boundary, state change, permission, and regression. Use one representative value per equivalence class. A boundary is the edge: the last allowed value and the first rejected value.

Test one invalid condition at a time. Combine inputs only when they change the outcome together. One behavior is one case, even when the spec and the code both mention it.

Skip a behavior the spec lists as a non-goal. A missing behavior that loses data, money, access, or the main flow gets a case, or an open question that says why it cannot be tested yet.

A bug gets one case: it fails now and passes once the expected behavior is true. A flow gets the valid path plus the invalid steps a person can actually try.

These rules stay inside the skill. Do not print them as labels on a case.

## The list

Each case has these parts, in this order, in plain language a person can follow without the codebase:

- **Case:** a short name of the behavior.
- **Prerequisites:** only when the case needs a starting state. Leave this out when there is none.
- **Description:** one or two sentences of what should happen, including the result a person can see.
- **Steps to verify:** numbered actions. The last step says what to look at and what should be true.

No priority, no tags, no source line, and no separate test-data or expected-result field. Do not use a word such as journal or handler unless the product shows that word on screen.

## Code tests

Write code tests only when the user asks for them. Name the behaviors. `no-slop` writes the test in the repo's existing style. If the repo has no test runner, ask once before `no-slop` adds one.

## Summary

Say what is still uncovered. Do not claim complete coverage when the source is ambiguous.

## Replies

Say how many cases, and what is still uncovered.

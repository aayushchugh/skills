---
name: cases-to-run
description: >-
  Write a small, risk-based set of test cases from a spec, diff, or bug
  report. Use when the user asks for test cases or QA coverage. Do not write
  test code or audit security.
---

# Cases to run

## Scope

Write the test-case document only. Do not write test code, run tests, or change the source. Cover a security requirement or access rule the source already states. Do not invent controls.

Write the smallest set that would catch a real failure. Skip a case that does not change the outcome.

## Before writing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

Ask what would change the expected behavior, data, environment, limits, or permissions. An unknown expected result is not a case. Do not write a result of "TBD" or "works correctly."

## What to read

- A PRD or spec: requirements, acceptance criteria, rules, states, constraints, and non-goals.
- Code or a diff: the changed behavior, its contract, its callers, and the conditions that changed. Stop at the affected path.
- A bug report: the shortest reproduction, expected versus actual behavior, and the environment when it changes the result.

If the repository already tests a behavior, cite that test. Do not write a duplicate manual case.

## Which cases

Cover the relevant happy path, failure, boundary, state change, permission, and regression. Use one representative value per equivalence class. A boundary is the edge: the last allowed value and the first rejected value.

Test one invalid condition at a time. Combine inputs only when they change the outcome together. One behavior is one case, even when the spec and the code both mention it. Cite both sources on that case.

Skip a behavior the spec lists as a non-goal. A missing P0 behavior gets a case, or an open question that says why it cannot be tested yet.

A bug gets one regression case: it fails on the current behavior and passes once the expected behavior is true. A state flow gets the valid path plus the invalid transitions a person can actually attempt.

## Priority

Order the document P0, then P1, then P2.

- P0: data loss, money, access, a broken primary flow, or an existing caller that would regress.
- P1: a common failure or a boundary.
- P2: a rare edge.

## Each case

- ID
- Title
- Source requirement or changed behavior
- Priority
- Preconditions: role, starting data, and starting state
- Test data
- Steps: actions only. Do not repeat the expected result.
- Expected result: only what a person can see, including the error, the resulting state, and data that must stay unchanged
- Tags: `happy`, `failure`, `boundary`, `permission`, or `regression`. Use one only when it applies. Use no other tag.

## Summary

Counts by priority. Each source requirement or changed behavior mapped to case IDs. Anything left uncovered. Then assumptions and open questions. Do not add a matrix. Do not claim complete coverage when the source is ambiguous.

## Replies

Say how many cases, and what is still uncovered.

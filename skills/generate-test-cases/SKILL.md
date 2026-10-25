---
name: generate-test-cases
description: >-
  Generate a small, risk-based set of structured test cases from a PRD, spec,
  code change, bug report, or diff. Use when the user asks for test cases, QA
  scenarios, or regression coverage. Do not use to write or run test code, or
  to perform a security audit.
---

# Generate test cases

## Use case

Turn a source into the smallest set of cases a person can run. Each case traces to a requirement or a changed behavior.

## Scope

Write the test-case document only. Do not write test code, run tests, or change the source.

A security audit is out of scope. Cover a security requirement or access rule the source already states. Do not invent controls.

## Before writing

Read the source, then ask every unanswered question that would change the expected behavior, data, environment, limits, or permissions. Send them in one turn, then write the cases once. Skip questions the source already answers.

Do not invent an expected result. Put the unknown under Open questions and name what it blocks.

## What to read

- A PRD or spec: requirements, acceptance criteria, rules, states, constraints, and non-goals.
- Code or a diff: the changed behavior, its contract, its callers, and the conditions that changed. Stop at the affected path.
- A bug report: the shortest reproduction, expected versus actual behavior, and the environment when it changes the result.

If the repository already tests a behavior, cite that test. Do not write a duplicate manual case.

## Which cases

Cover the relevant happy path, failure, boundary, state change, permission, and regression. Use one representative value per equivalence class.

Test one invalid condition at a time. Combine inputs only when they change the outcome together.

Skip a behavior the spec lists as a non-goal. A missing P0 behavior gets a case, or an open question that says why it cannot be tested yet.

A bug gets one regression case: it fails on the current behavior and passes once the expected behavior is true.

## Priority

- P0: data loss, money, access, a broken primary flow, or an existing caller that would regress.
- P1: a common failure or a boundary.
- P2: a rare edge.

## Each case

- ID
- Title
- Source requirement or changed behavior
- Priority
- Preconditions
- Test data
- Steps
- Expected result
- Tags, when one applies

One behavior per case. A person can run it without guessing. The expected result names the visible outcome, the error, the resulting state, and any data that must stay unchanged.

## Summary

Counts by priority. Each source requirement or changed behavior mapped to case IDs. Anything left uncovered. Then assumptions and open questions.

Do not add a matrix. Do not claim complete coverage when the source is ambiguous.

## Replies

The document is the deliverable. The note around it is 1–2 lines: how many cases, and what is still uncovered.

## Done

- [ ] Every case traces to a source requirement or changed behavior
- [ ] Existing tests are cited instead of duplicated
- [ ] Non-goals have no cases
- [ ] Each invalid case changes one condition
- [ ] Every expected result is observable
- [ ] Missing P0 behavior has a case or an open question
- [ ] The summary lists counts, coverage, and what is uncovered

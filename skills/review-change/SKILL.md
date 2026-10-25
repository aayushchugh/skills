---
name: review-change
description: >-
  Review a diff for correctness, regressions, broken caller APIs, missing
  tests, and unmet requirements. Use when the user asks for a code review or
  to review a change. Do not use for a security audit, a refactor, or writing
  test cases.
---

# Review a change

## Use case

Read a change and report what is wrong, with evidence. Do not edit the code.

## Scope

Read the diff, the request it was meant to satisfy, every caller of a changed function, and the tests that cover the path.

A security finding gets one line pointing to the `audit-security` skill. A structure or duplication finding gets one line pointing to `refactor-codebase`. A missing test gets one line pointing to `generate-test-cases`. Do not do those jobs here.

## Before writing

Ask every unanswered question that would change whether a finding is real. Send them in one turn, then write the review once. Skip questions the diff or the request already answers.

## Findings

Report a correctness bug, a regression, a break in an API a caller depends on, a missing test for a changed path, or a requirement the change did not meet.

Each finding has:

- ID
- Title
- Severity
- File and line
- Evidence
- Impact
- Fix, in one or two lines

One finding per root cause. The same bug in several callers is one finding: name the shared function and list the callers.

A finding names the broken behavior. If it cannot, it is an open question. Do not report a style comment.

## Severity

- Critical: the change loses data, breaks a primary flow, or breaks callers that are already in use.
- High: a real bug on a common path, or a requirement the change missed.
- Medium: a bug that needs another condition, or a missing test on a non-trivial branch.

## Summary

Order findings Critical, then High, then Medium. End with counts by severity, what was reviewed, and what was not. Do not call the result a complete review of the repo.

## Replies

The review is the deliverable. The note around it is 1–2 lines: how many findings, and which other skill should take the next step.

## Done

- [ ] The diff, the request, the callers, and the tests were read
- [ ] Every finding cites a file and a line
- [ ] Security, structure, and test-case work were handed off
- [ ] The summary says what was not reviewed

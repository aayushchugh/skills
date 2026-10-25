---
name: red-pen
description: >-
  Review a diff or pull request for bugs, regressions, broken callers, missing
  tests, and unmet requirements. Use when the user asks for a code review. Do
  not audit security, refactor, or write tests.
---

# Red pen

## Scope

Read the diff, the request it was meant to satisfy, every caller of a changed function, and the tests that cover the path. For a pull request, read the diff with `gh pr diff`. Do not edit the code.

Report a bug, a regression, or a missed requirement. A style comment is not a finding.

A security finding gets one line pointing to `open-doors`. A structure or duplication finding gets one line pointing to `one-shape`. A missing test gets one line pointing to `cases-to-run`.

## Before writing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

Ask what would change whether a finding is real.

## Findings

Report a correctness bug, a regression, a break in an API a caller depends on, a missing test for a changed path, or a requirement the change did not meet.

Each finding has: ID, Title, Severity, File and line, Evidence, Impact, Fix in one or two lines.

One finding per root cause. The same bug in several callers is one finding: name the shared function and list the callers. A finding names the broken behavior. If it cannot, it is an open question. Do not report a style comment.

## Severity

- Critical: the change loses data, breaks a primary flow, or breaks callers that are already in use.
- High: a real bug on a common path, or a requirement the change missed.
- Medium: a bug that needs another condition, or a missing test on a non-trivial branch.

## Summary

Order findings Critical, then High, then Medium. End with counts by severity, what was reviewed, and what was not. Do not call the result a complete review of the repo.

## Replies

Say how many findings, and which other skill should take the next step.

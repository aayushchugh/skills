---
name: diagnose-bug
description: >-
  Find a bug's root cause from the report, the code path, and the evidence.
  Use when the user asks to diagnose or debug a failure. Do not write the fix
  or the regression test.
---

# Diagnose a bug

## Scope

Read only the path the bug touches, its callers, and the logs, traces, or connected sources needed to prove the cause. Do not edit the code. The fix goes to `write-simple-code`. The regression case goes to `generate-test-cases`.

## Before writing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

Ask what would change the reproduction or the expected behavior.

## The report

- The shortest reproduction: the steps, the data, and the environment when it changes the result.
- Expected behavior and actual behavior.
- Where it happens: the file, the function, and the condition.
- The root cause, backed by the code or a log line. A cause without evidence stays marked as a hypothesis.
- What was checked and ruled out.

Name the symptom, then the source. A local workaround is not a cause.

## Replies

Say the cause, or the hypothesis still open.

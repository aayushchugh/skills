---
name: diagnose-bug
description: >-
  Find the root cause of a bug from a report, the code path, and the evidence
  needed to prove it. Use when the user asks to diagnose, debug, or find why
  something fails. Do not use to write the fix or the regression test.
---

# Diagnose a bug

## Use case

Turn a bug report into a cause you can prove. Do not edit the code.

## Scope

Read only the path the bug touches, its callers, and the logs, traces, or connected sources needed to prove the cause.

The fix goes to `write-simple-code`. The regression case goes to `generate-test-cases`.

## Before writing

Ask every unanswered question that would change the reproduction or the expected behavior. Send them in one turn. Skip questions the report or the code already answers.

## The report

- The shortest reproduction: the steps, the data, and the environment when it changes the result.
- Expected behavior and actual behavior.
- Where it happens: the file, the function, and the condition.
- The root cause, backed by the code or a log line.
- What was checked and ruled out.

A cause without evidence stays marked as a hypothesis. Do not invent a log line or a data value. Put an unknown under Open questions and name what it blocks.

Name the symptom, then the source. A local workaround is not a cause.

## Replies

The diagnosis is the deliverable. The note around it is 1–2 lines: the cause, or the hypothesis still open.

## Done

- [ ] The reproduction is the shortest one that shows the bug
- [ ] Expected and actual behavior are both stated
- [ ] The cause cites a file or a log line
- [ ] A cause without evidence is marked as a hypothesis
- [ ] The fix and the regression test were handed off

---
name: use-skills
description: >-
  Pick and run the right skill, or a chain of skills, for a request. Use when
  unsure which skill applies or when a task spans several steps.
---

# Use skills

## Before writing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

## Pick

Read the chosen skill and follow it. Do not restate its rules here.

| Request | Skill |
| --- | --- |
| Implement, fix, or review code | `write-simple-code` |
| PRD, engineering spec, flow, API reference, runbook, guide, or README | `write-docs` |
| Test cases or regression coverage | `generate-test-cases` |
| Security audit | `audit-security` |
| Refactor or clean up a repo | `refactor-codebase` |
| Review a diff or pull request | `review-change` |
| Diagnose or debug a failure | `diagnose-bug` |
| Release check or go / no-go | `ship-release` |

Run one skill when one fits. Say which skill or chain you picked in one line. Ask one question when two skills fit equally.

## Chains

Pause for approval before a step that writes code or would deploy.

- Bug: `diagnose-bug`, then `write-simple-code`, then `generate-test-cases`, then `review-change`.
- Feature: `write-docs` as a spec, then `write-simple-code`, then `review-change`.
- Release: `review-change`, then `ship-release`. A migration is covered inside `ship-release`.
- Cleanup: `refactor-codebase`, which applies its changes through `write-simple-code`.

`ship-release` does not deploy. `refactor-codebase` does not edit until a batch is approved.

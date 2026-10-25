---
name: which-skill
description: >-
  Pick and run the right skill, or a chain of skills, for a request. Use when
  unsure which skill applies or when a task spans several steps.
---

# Which skill

## Before writing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

## Pick

Read the chosen skill and follow it. Do not restate its rules here.

| Request | Skill |
| --- | --- |
| Implement, fix, or review code | `no-slop` |
| PRD, engineering spec, flow, API reference, runbook, guide, or README | `plain-paper` |
| Test cases or regression coverage | `cases-to-run` |
| Security audit | `open-doors` |
| Refactor or clean up a repo | `one-shape` |
| Review a diff or pull request | `red-pen` |
| Diagnose or debug a failure | `the-cause` |
| Release check or go / no-go | `go-or-stop` |

Run one skill when one fits. Say which skill or chain you picked in one line. Ask one question when two skills fit equally.

## Chains

Pause for approval before a step that writes code or would deploy.

- Bug: `the-cause`, then `no-slop`, then `cases-to-run`, then `red-pen`.
- Feature: `plain-paper` as a spec, then `no-slop`, then `red-pen`.
- Release: `red-pen`, then `go-or-stop`. A migration is covered inside `go-or-stop`.
- Cleanup: `one-shape`, which applies its changes through `no-slop`.

`go-or-stop` does not deploy. `one-shape` does not edit until a batch is approved.

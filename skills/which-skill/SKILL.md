---
name: which-skill
description: >-
  Use when a request could match more than one skill, or needs several skills
  in a row.
---

# Which skill

## Scope

Run one skill when one fits. Do not start a chain to look thorough.

## Before writing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

## Pick

Read the chosen skill and follow it. Do not restate its rules here.

| Request | Skill |
| --- | --- |
| Implement, fix, or review code | `no-slop` |
| PRD, engineering spec, flow, API reference, runbook, guide, or README | `plain-paper` |
| Manual test cases, or code tests for `no-slop` when asked | `cases-to-run` |
| Security audit | `open-doors` |
| Refactor or clean up a repo | `one-shape` |
| Review a diff or pull request | `red-pen` |
| Diagnose or debug a failure | `the-cause` |
| Release check or go / no-go | `go-or-stop` |
| System design, architecture review, or scale/performance improvement | `the-map` |

Run one skill when one fits. Say which skill or chain you picked in one line. Ask one question when two skills fit equally.

## Chains

Pause for approval before a step that writes code or would deploy.

- Bug: `the-cause`, then `no-slop`, then `cases-to-run`, then `red-pen`.
- Feature: `plain-paper` as a spec, then `no-slop`, then `red-pen`.
- Release: `red-pen`, then `go-or-stop`. A migration is covered inside `go-or-stop`.
- Cleanup: `one-shape`, which applies its changes through `no-slop`.
- Design: `the-map`, then `plain-paper` if a spec is still needed, then `no-slop` after approval.

`go-or-stop` does not deploy. `one-shape` does not edit until a batch is approved. `the-map` does not write code.

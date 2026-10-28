---
name: which-skill
description: >-
  Use when two skills fit equally, or a request needs several skills in a row.
  Not when one skill already fits.
---

# Which skill

## Scope

Run one skill when one fits. Do not start a chain to look thorough.

## Before writing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

## Pick

Each skill's description already says when to use it. Do not restate those rules here.

Say which skill or chain you picked in one line. Ask one question when two skills fit equally.

## Chains

Pause for approval before a step that writes code or would deploy.

Read only the skill for the current step. Name the later steps. Do not open the next skill until this step is done, and approved when that step writes or deploys.

- Bug: `the-cause`, then `no-slop`, then `cases-to-run`, then `red-pen`.
- Feature: `plain-paper` as a spec, then `no-slop`, then `red-pen`.
- Release: `red-pen`, then `go-or-stop`. A migration is covered inside `go-or-stop`.
- Cleanup: `one-shape`, which applies its changes through `no-slop`.
- Design: `the-map`, then `plain-paper` if a spec is still needed, then `no-slop` after approval.

`go-or-stop` does not deploy. `one-shape` does not edit until a batch is approved. `the-map` does not write code.

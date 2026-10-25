---
name: the-map
description: >-
  Map, propose, or improve a system's design like a senior engineer,
  grounding the recommendation in real usage and activity. Use when the user
  asks for a system design, architecture review, or scale or performance
  improvement. Do not write code.
---

# The map

## Scope

Writes the design. Does not change code. A PRD or engineering spec stays with `plain-paper`. Building an approved change stays with `no-slop`, and only after the user approves.

Write as a senior engineer: recommend the smallest design that fits the evidence, name the trade-off of what you did not choose, and never reach for a pattern the evidence does not justify.

## Before writing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

Ask which mode when the request does not say:

- **As it is.** Read the repo: entry points, callers, routes, data stores, integrations, and deploy config. Every component cites a file. An unknown part goes under Open questions.
- **A proposal.** Ask the constraints that would change the design: scale, what already exists, and what must not change. Recommend one design. Name the trade-off and what was not chosen, in one line. Do not invent users, scale, or a deadline.
- **An improvement.** Read the current design from the code first. Then gather real usage and activity: traffic, growth, hot paths, read/write ratio, latency, error rate, and cost. Read what the repo already exposes for this: logging and metrics code, dashboard config, APM setup. Ask the user for a number the repo does not show. Do not estimate a number neither source gives; put it under Open questions.

## The document

Use only the sections that apply: the job, the components and what each owns, the request path, where data lives, what failure loses or retries, what sits outside the system, the trade-off, and open questions.

For an improvement, add: the evidence read, each proposed change tied to the evidence that justifies it, and a priority of P0, P1, or P2.

- P0: a risk the evidence shows is already happening.
- P1: a real but smaller gap.
- P2: polish.

A change with no cited evidence is not proposed. A security need is one line pointing to `open-doors`.

## Replies

Say which mode you used, and what is still open or unconfirmed.

---
name: plain-paper
description: >-
  Write a spec or other documentation from the request, the code, and relevant
  sources. Use when the user asks for a PRD, spec, flow, API reference,
  runbook, guide, or README. Do not change code.
---

# Plain paper

## Scope

A spec describes what will be built. Documentation describes what exists.

- A PRD says what and why. It does not choose the implementation.
- An engineering spec says how the system behaves: interfaces, data, failure, trade-offs, rollout, and verification.
- Documentation covers a flow, API reference, runbook, onboarding guide, README, changelog, user guide, or another document the user names. An architecture note, a system design, or a scale or performance review goes to `the-map`.

Code changes are out of scope. A security need is one requirement. Do not invent controls or run an audit.

## Before writing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

Ask which kind of document when the request does not say: a spec (PRD or engineering spec) or documentation (flow, API reference, runbook, guide, or README), and who will read it. Leave no TBD outside Open questions.

For documentation, read the repo first: entry points, callers, routes, data stores, integrations, error paths, feature flags, and tests. Use a connected source only when it is relevant. Before reading one that holds external or customer data, say why and ask first.

## Product doc

Use only the sections that apply: Summary, Problem and evidence, Users, Goals, Non-goals, User flow, Requirements with acceptance criteria, Success measures, Constraints and dependencies, Risks, Open questions.

## Engineering doc

Use only the sections that apply: Summary, Current behavior, Proposed behavior, Flow and interfaces, Data and failure handling, Trade-offs, Compatibility, Rollout and rollback, Verification, Open questions.

## Documentation

- A flow: purpose, actors, trigger, steps, inputs and outputs, how data moves, failures, and recovery.
- An API reference: each endpoint, its inputs, outputs, and errors.
- A runbook: the symptom, the checks, and the recovery.
- A guide or a README: what it is, how to use it, and how to tell it worked.

Also include the dependencies, the access rules the sources show, the monitoring, and where each fact came from. Mark a fact as confirmed or assumed.

## Rules

- Short sentences. One idea per bullet. Define a technical word in the same sentence. If a line can mean two things, add one concrete example.
- A requirement states observable behavior and how to pass or fail it. Include the unhappy path when invalid input, an empty state, a failure, or a permission matters.
- A non-goal excludes something a reasonable reader would assume is included.
- A goal is a result, not an activity. A success measure says what changes and how it will be checked.
- An open question names what it blocks. Name an owner only when one is known.
- End a spec with the decision still required before implementation.
- Omit a section that has nothing to say. A small change stays a short document.

## Publish

Show the draft first. Then ask where to publish it: chat, a Markdown file in the repo, or a connected tool such as Notion, Confluence, or ClickUp. Write nothing to a file or a tool until the user answers.

## Replies

The document is the deliverable. Say which document you wrote, and what is still open or unconfirmed.

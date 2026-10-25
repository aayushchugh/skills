---
name: write-documentation
description: >-
  Write any documentation from the code and relevant connected sources: a
  flow, API reference, architecture note, runbook, onboarding guide, README,
  changelog, user guide, or another document the user names. Use when the user
  asks for documentation. A PRD or requirements spec goes to write-specs.
---

# Write documentation

## Use case

Write the document the user asked for, from what the code and the connected sources actually do.

## Scope

Covers a flow, an API reference, an architecture note, a runbook, an onboarding guide, a README, a changelog, a user guide, or another document the user names.

A PRD or a requirements spec goes to `write-specs`.

## Before writing

Ask which document and who will read it when the request does not say. Ask every other unanswered question that would change the document. Send them in one turn.

Read the repo first: entry points, callers, routes, data stores, integrations, error paths, feature flags, and tests.

Use a connected source only when it is relevant to the document. Before reading one that holds external or customer data, say why and ask first.

## The draft

The shape follows the document type:

- A flow: purpose, actors, trigger, steps, inputs and outputs, how data moves, failures, and recovery.
- An API reference: each endpoint, its inputs, outputs, and errors.
- A runbook: the symptom, the checks, and the recovery.
- A guide or a README: what it is, how to use it, and how to tell it worked.

Every document also includes the dependencies, the access rules the sources show, the monitoring, the open questions, and where each fact came from.

Write in plain language for the named reader. Mark a fact as confirmed or assumed. Never fill a gap with invented behavior. Put an unknown under Open questions. Omit a section that has nothing to say.

## Publish

Show the draft first. Then ask where to publish it: chat, a Markdown file in the repo, or a connected tool such as Notion, Confluence, or ClickUp. Write nothing to a file or a tool until the user answers.

## Replies

The draft is the deliverable. The note around it is 1–2 lines: which document, and what is still unconfirmed.

## Done

- [ ] The document type and the reader are known
- [ ] Facts come from the code or a named source
- [ ] Confirmed facts and assumptions are marked apart
- [ ] Customer data was not read without a yes
- [ ] Nothing was published before the user chose a place

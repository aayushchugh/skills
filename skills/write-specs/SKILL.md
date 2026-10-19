---
name: write-specs
description: >-
  Write a plain-language PRD or engineering spec with testable requirements,
  explicit non-goals, and open questions. Use when the user asks for a PRD,
  product spec, requirements document, or engineering doc. Do not use for
  code changes or a security audit.
---

# Write specs

## Use case

Write the document a non-technical reader can follow, and an engineer can build and check without asking the same questions again.

## Scope

A PRD says what and why. It does not choose the implementation.

An engineering spec says how the system behaves: interfaces, data, failure, trade-offs, rollout, and verification.

Code changes are out of scope. A security audit is out of scope. If the user stated a security need, record it as one requirement. Do not invent controls or run an audit.

## Before writing

Ask every unanswered question that would change the reader, problem, evidence, users, outcome, scope, constraints, dependencies, failure cases, success measure, or an unresolved decision. Send them in one turn, then write the document once. Skip questions the request already answers.

Do not invent a metric, deadline, owner, or requirement. Put the unknown under Open questions. Leave no TBD in any other section.

## Product doc

Use only the sections that apply:

- Summary
- Problem and evidence
- Users
- Goals
- Non-goals
- User flow
- Requirements, each with acceptance criteria
- Success measures
- Constraints and dependencies
- Risks
- Open questions

## Engineering doc

Use only the sections that apply:

- Summary
- Current behavior
- Proposed behavior
- Flow and interfaces
- Data and failure handling
- Trade-offs
- Compatibility
- Rollout and rollback
- Verification
- Open questions

## Rules

- Short sentences. One idea per bullet. Define a technical word in the same sentence. If a line can mean two things, add one concrete example.
- A requirement states observable behavior and how to pass or fail it. Include the unhappy path when invalid input, an empty state, a failure, or a permission matters.
- A non-goal excludes something a reasonable reader would assume is included.
- A goal is a result, not an activity. A success measure says what changes and how it will be checked. If the number is unknown, it is an open question.
- An open question names what it blocks. Name an owner only when one is known.
- End with the decision still required before implementation.
- Omit a section that has nothing to say. A small change stays a short document.

## Replies

The document is the deliverable. The note around it is 1–2 lines: which document you wrote, and the decision still open.

## Done

- [ ] Reader, problem, outcome, and scope are explicit
- [ ] No invented fact outside Open questions
- [ ] Every requirement can pass or fail
- [ ] Non-goals exclude a likely assumption
- [ ] A non-technical reader can follow it
- [ ] An engineer can build and check it without repeating the requirements questions

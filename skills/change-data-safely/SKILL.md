---
name: change-data-safely
description: >-
  Plan a schema migration, backfill, or destructive data change with a
  rollback path and a check that proves the result. Use when the user asks to
  change stored data, migrate a schema, or backfill rows. Do not use for an
  ordinary code change.
---

# Change data safely

## Use case

Plan a change to stored data so it can be reversed and checked. Write no migration and run no destructive command until the user approves the plan.

## Scope

Covers a schema migration, a backfill, and a change that deletes or rewrites rows.

An ordinary code change stays with `write-simple-code`.

## Before writing

Ask every unanswered question that would change the data at risk, the rollback, or whether the steps can be re-run. Send them in one turn. Skip questions the schema or the request already answers.

## The plan

1. Check the current state first: the table, the row count, and the rows the change will touch.
2. Write the forward change.
3. Write the rollback or the recovery path. If a step cannot be reversed, say so and name the data that would be lost.
4. Make every step safe to re-run. A second run changes nothing that the first run already changed.
5. Batch a large table. Name the batch size and what happens if a batch stops halfway.
6. Add a check that proves the result: the expected row count, the expected values, and the rows that must stay unchanged.
7. Name the data at risk.

Do not invent a row count or a column. Put an unknown under Open questions and name what it blocks.

## Apply

Stop after the plan. Edit nothing and run nothing destructive until the user approves it.

After approval, apply the plan with `write-simple-code`. Run the proof check. If it fails, stop and use the rollback. Do not continue.

## Replies

The plan is the deliverable. The note around it is 1–2 lines: what data is at risk, and what needs approval.

## Done

- [ ] The current state was checked
- [ ] The forward change and the rollback are both written
- [ ] Every step is safe to re-run, or the exception is named
- [ ] A large table is batched
- [ ] A check proves the result
- [ ] Nothing ran before approval

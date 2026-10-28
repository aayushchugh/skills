---
name: whats-next
description: >-
  Use when asked what's pending, what's next, or the status of the current
  work. Not for starting the work or changing the plan.
---

# What's next

## Scope

Read the plan. Do not edit it. Do not start the next todo unless asked.

Answer only from the plan this conversation is implementing. Do not invent a task from memory, git, or an older plan.

## Before writing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

## The plan

Read the plan attached to this chat. Ignore an older plan on disk.

Its todos are the only source. Each todo is `pending`, `in_progress`, or `completed`.

- **What's next:** the `in_progress` todo, or the first `pending` todo when nothing is in progress. One line: that todo, and whether it has not been started or is in progress. A todo waiting on the user is not next. Say what it is waiting on.
- **What's pending:** every todo that is not `completed`, in the plan's order.
- **Status:** one line for done, one line for in progress, one line for still pending.

When every todo is `completed`, say the plan is done. Do not pick a new task.

If this conversation has no plan, say so.

## Replies

Name the plan. Answer only the question asked. "What's next" is one todo. "What's pending" is the open list. "Status" is the three lines. Do not dump the whole plan.

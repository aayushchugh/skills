# @aayushchugh/skills

These are the agent skills I use while building real products. I keep optimizing them as better practices show up.

The site is [skills.ayushchugh.com](https://skills.ayushchugh.com).

## Install all of them

Run this inside a project, so the package is a dependency:

```bash
npm install @aayushchugh/skills
npx skills experimental_sync
```

`experimental_sync` is a command from the [Vercel skills CLI](https://github.com/vercel-labs/skills). It links skills shipped inside installed npm packages into your agent. The command is experimental, so its name and options can change.

## Install one skill

This installs a single skill from GitHub:

```bash
npx skills add aayushchugh/skills --skill no-slop -g
```

Replace `no-slop` with any id below.

## Skills

- `no-slop` — No slop. Write the smallest readable code that reuses existing code, installed utilities, and repo patterns, and fixes bugs at the root cause.
- `plain-paper` — Plain paper. Write a spec or other documentation from the request, the code, and relevant sources.
- `cases-to-run` — Cases to run. List the cases to verify by hand, or name the code tests for `no-slop` to write when asked.
- `open-doors` — Open doors. Review application code, APIs, dependencies, secrets, and deploy config for injection, web attacks, and DDoS controls.
- `one-shape` — One shape. Audit a repo for duplication, divergent flows, dead code, over-engineering, waste, and standards drift, then apply approved steps.
- `red-pen` — Red pen. Review a diff or pull request for bugs, regressions, broken callers, missing tests, and unmet requirements.
- `the-cause` — The cause. Find a bug's root cause from the report, the code path, and the evidence.
- `go-or-stop` — Go or stop. Decide if a change is ready to ship, with a go or no-go, what to watch, and how to roll back.
- `the-map` — The map. Map, propose, or improve a system's design like a senior engineer, grounding the recommendation in real usage and activity.
- `whats-next` — What's next. Answer what's pending, what's next, or the status from the plan this conversation is working on.
- `which-skill` — Which skill. Pick and run the right skill, or a chain of skills, for a request.

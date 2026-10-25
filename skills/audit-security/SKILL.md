---
name: audit-security
description: >-
  Perform a read-only security review of application code, APIs, dependencies,
  secrets, and deployment configuration, including injection, common web
  attacks, and DDoS controls. Use when the user asks for a security audit,
  security review, or pentest-readiness review. Never attack a live target.
---

# Audit security

## Use case

Write a findings report for the paths you actually read. One finding is one root cause, backed by code, a dependency, or configuration.

## Scope

Review application code, APIs, dependencies, secrets, and deployment configuration. A diff review follows the changed path and its callers. A repository review checks every relevant surface it can find.

A spec review checks whether those requirements are missing or contradicted. A code review checks the behavior in the code.

This is a read-only audit, not active pentesting. Do not send probes, payloads, traffic, or requests to a live target. Do not claim a control works unless repository evidence proves it. Do not edit the source. A later coding task makes the fix.

## Before writing

Read the changed path and its callers. Ask every unanswered question that would change whether an issue is real or how severe it is. Send them in one turn, then write the report once.

Do not invent a threat, a permission, or a data flow the source does not support. Put that unknown under Open questions and name what it blocks.

## What to review

Follow untrusted input from entry to side effect. Check only categories relevant to the repository:

- Authentication, sessions, authorization, tenant isolation, and privilege changes
- SQL, NoSQL, command, template, header, and log injection
- Cross-site scripting, CSRF, SSRF, open redirects, path traversal, and unsafe file handling
- Deserialization, parser abuse, request smuggling assumptions, and unsafe outbound requests
- Sensitive-data exposure, excessive API responses, error leakage, logs, and caches
- Hardcoded secrets, weak cryptography, insecure randomness, and missing transport assumptions
- CORS, cookies, security headers, origin checks, and trusted-proxy configuration
- Dependency and supply-chain risk visible in manifests and lockfiles
- Business-logic abuse, replay, race conditions, duplicate actions, and missing idempotency
- Resource exhaustion: unbounded input, uploads, queries, pagination, recursion, concurrency, and expensive unauthenticated work

For DDoS and abuse prevention, inspect repository evidence for edge or proxy limits, rate limits, request and body limits, timeouts, concurrency limits, caching, queues, backpressure, and graceful rejection. State when CDN, WAF, autoscaling, network capacity, or provider controls cannot be verified from the repository.

No checklist proves every attack class is covered. Report the surfaces reviewed and the categories that did not apply or could not be verified.

## Findings

One finding per root cause. The same missing check in several callers is one finding: name the shared function and list the callers.

A finding names the missing check, the exposed field, or the requirement that contradicts the code. If it cannot, it is an open question.

Each finding has:

- ID
- Title
- Severity
- File or requirement
- Evidence
- Who can reach it
- Impact
- Fix

The fix names the control to add, in one or two lines. Do not include a patch, exploit steps, a payload, proof-of-concept code, or instructions for attacking a target.

Never copy a secret. Name the file and the kind of credential. Leave the value out of the report.

## Severity

- Critical: an untrusted person can bypass auth, execute code, expose a production secret, or read or change other people's sensitive data at broad scope.
- High: a reachable injection, access-control, data-exposure, or resource-exhaustion gap has serious but bounded impact.
- Medium: the gap is real, and another condition or limited scope reduces the impact.

Reachability, required access, affected data, and blast radius determine severity. An unreachable line is not Critical. Skip a style comment and a theoretical issue with no evidence.

## Summary

Order findings Critical, then High, then Medium. End with counts by severity, the paths and attack surfaces reviewed, what was not reviewed, controls that require live-environment verification, and any open questions.

A clean result on the reviewed paths does not clear the rest of the application. Do not call the result a complete audit.

## Replies

The report is the deliverable. The note around it is 1–2 lines: how many findings, and what was not reviewed.

## Done

- [ ] Every finding names a specific gap in the code or the spec
- [ ] The same missing check is one finding
- [ ] Severity matches who can reach the gap
- [ ] No secret value is in the report
- [ ] The fix names a control and does not describe an attack
- [ ] Injection, web/API attacks, dependencies, and resource exhaustion were checked where relevant
- [ ] DDoS controls are supported by repository evidence or marked unverified
- [ ] The summary lists what was read, what was not, and what needs live verification

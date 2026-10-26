---
name: open-doors
description: >-
  Use when asked for a security audit or a pentest-readiness review. Not for
  a live attack or a normal code review.
---

# Open doors

## Scope

Review application code, APIs, dependencies, secrets, and deployment configuration. A diff review follows the changed path and its callers. A repository review checks every relevant surface it can find. A spec review checks whether those requirements are missing or contradicted.

This is a read-only audit, not active pentesting. Do not send probes, payloads, traffic, or requests to a live target. Do not claim a control works unless repository evidence proves it. Do not edit the source.

Report a gap a person can actually reach. A theoretical issue with no evidence is not a finding.

## Before writing

Ask every blocking question in one turn. Never invent a fact. Put an unknown under Open questions and name what it blocks. Replies are 1–2 lines. Write a paragraph only when the user asks.

Ask what would change whether an issue is real or how severe it is.

## What to review

Follow untrusted input from entry to side effect. Check only categories relevant to the repository:

- Auth and access: authentication, sessions, authorization, tenant isolation, privilege changes.
- Injection: SQL, NoSQL, command, template, header, and log injection.
- Web and files: cross-site scripting, CSRF, SSRF, open redirects, path traversal, unsafe file handling.
- Parsing and outbound: deserialization, parser abuse, request smuggling assumptions, unsafe outbound requests.
- Data and secrets: sensitive-data exposure, excessive API responses, error leakage, logs, caches, hardcoded secrets, weak cryptography, insecure randomness, missing transport assumptions.
- Config: CORS, cookies, security headers, origin checks, trusted-proxy configuration, dependency and supply-chain risk in manifests and lockfiles.
- Logic and exhaustion: business-logic abuse, replay, race conditions, duplicate actions, missing idempotency, unbounded input, uploads, queries, pagination, recursion, concurrency, and expensive unauthenticated work.

For DDoS and abuse prevention, inspect repository evidence for edge or proxy limits, rate limits, request and body limits, timeouts, concurrency limits, caching, queues, backpressure, and graceful rejection. State when CDN, WAF, autoscaling, network capacity, or provider controls cannot be verified from the repository.

Report the surfaces reviewed and the categories that did not apply or could not be verified.

## Findings

One finding per root cause. The same missing check in several callers is one finding: name the shared function and list the callers. A finding names the missing check, the exposed field, or the requirement that contradicts the code. If it cannot, it is an open question.

Each finding has: ID, Title, Severity, File or requirement, Evidence, Who can reach it, Impact, Fix.

The fix names the control to add, in one or two lines. Do not include a patch, exploit steps, a payload, proof-of-concept code, or instructions for attacking a target.

Never copy a secret. Name the file and the kind of credential. Leave the value out of the report.

## Severity

- Critical: an untrusted person can bypass auth, execute code, expose a production secret, or read or change other people's sensitive data at broad scope.
- High: a reachable injection, access-control, data-exposure, or resource-exhaustion gap has serious but bounded impact.
- Medium: the gap is real, and another condition or limited scope reduces the impact.

Reachability, required access, affected data, and blast radius determine severity. An unreachable line is not Critical. Skip a style comment and a theoretical issue with no evidence.

## Summary

Order findings Critical, then High, then Medium. End with counts by severity, the paths and attack surfaces reviewed, what was not reviewed, controls that require live-environment verification, and any open questions. A clean result on the reviewed paths does not clear the rest of the application. Do not call the result a complete audit.

## Replies

Say how many findings, and what was not reviewed.

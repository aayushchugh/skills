export const sampleSkillSources: { slug: string; markdown: string }[] = [
  {
    slug: "deploy-staging",
    markdown: `---
name: deploy-staging
description: Deploy this app to staging and verify the health check. Use when the user asks to deploy, ship to staging, or cut a staging release.
---

# Deploy to staging

## Use case

Ship a branch to staging and confirm the health check before a production release.

## Instructions

1. Run the test suite.
2. Build the production bundle.
3. Deploy to staging.
4. Hit the health check and report the result.
`,
  },
  {
    slug: "write-changelog",
    markdown: `---
name: write-changelog
description: >-
  Draft a changelog from merged pull requests. Use when the user asks for
  release notes, a changelog, or a summary of what shipped.
---

# Write a changelog

## Use case

Turn a list of merged changes into release notes a student can paste into GitHub.

## Instructions

1. Group changes as added, changed, and fixed.
2. Write one sentence per change, starting with a verb.
3. Leave out internal refactors that do not affect users.
`,
  },
  {
    slug: "review-pull-request",
    markdown: `---
name: review-pull-request
description: Review a pull request for correctness, security, and missing tests. Use when the user asks for a code review.
---

# Review a pull request

## Use case

Give a focused review before a student opens or merges a pull request.

## Instructions

- Check the change for bugs and unhandled edge cases.
- Call out security issues before style nits.
- Note missing tests that would have caught a regression.
`,
  },
];

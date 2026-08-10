# Rutgers Student Link

A five-page student resource website for Rutgers University-New Brunswick students.

## Cloudflare Workers deployment

- Worker name: `cite-for-submission`
- Source directory: `rutgers-student-link-workers`
- Static assets directory: `site`
- Build command: leave blank
- Deploy command: `npx wrangler deploy`
- Production branch: `main`
- Production URL: https://cite-for-submission.johnnymingyuan.workers.dev/

The Wrangler configuration targets the original `cite-for-submission` Worker. Updates pushed to `main` are deployed through Cloudflare Workers Builds.

## Pages

- Home
- Marketplace
- Events
- Community
- Resources

## Module 5 multimedia

The Resources page includes all three required embedded multimedia components:

- An embedded YouTube video with context
- An embedded audio clip with a transcript and explanation
- An automatically rotating three-image carousel with controls and highlights

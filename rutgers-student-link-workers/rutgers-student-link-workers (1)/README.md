# Rutgers Student Link

A five-page student resource website for Rutgers University-New Brunswick students.

The home page now includes the Module 5 multimedia component:

- A three-image campus carousel that rotates automatically and includes manual controls
- An embedded Rutgers-New Brunswick YouTube video
- An embedded 28-second audio guide with a written transcript
- A clear explanation of the meaning and significance of every multimedia item

## Cloudflare Workers deployment

- Worker name: `rutgers-student-link`
- Build command: leave blank
- Deploy command: `npx wrangler deploy`
- Production branch: `main`

The deployed address will use Cloudflare's `.workers.dev` domain.

If this folder is replacing an earlier version in GitHub, upload all files and folders again. Cloudflare will redeploy automatically after the commit reaches `main`.

## Pages

- Home
- Marketplace
- Events
- Community
- Resources

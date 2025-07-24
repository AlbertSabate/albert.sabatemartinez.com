# GitHub Actions Setup

This repository uses GitHub Actions for CI/CD to deploy to Cloudflare Workers.

## Required Secrets

You need to configure two secrets in your GitHub repository:

### 1. CLOUDFLARE_API_TOKEN
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Click "Create Token"
3. Use the "Edit Cloudflare Workers" template or create a custom token with:
   - Account: `Cloudflare Workers Scripts:Edit`
   - Zone: `Zone Settings:Read, Page Rules:Read, Workers Routes:Edit`
4. Copy the token value

### 2. CLOUDFLARE_ACCOUNT_ID
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select any domain in your account
3. On the right sidebar, find "Account ID"
4. Copy this value

## Setting up Secrets

1. Go to your GitHub repository
2. Click on "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret" for each:
   - Name: `CLOUDFLARE_API_TOKEN`, Value: Your API token
   - Name: `CLOUDFLARE_ACCOUNT_ID`, Value: Your account ID

## Workflow

The single `deploy.yml` workflow handles everything:

- **On push to main/master**: Runs lint, typecheck, build, and deploys to production
- **On pull requests**: Runs lint, typecheck, build, deploys a preview, and comments the URL

## Local Testing

Before pushing, you can run the same checks locally:

```bash
# Install dependencies
bun install

# Run linter
bun run lint

# Run type checking
bun run typecheck

# Build the application
bun run build

# Deploy to Cloudflare (requires wrangler login)
bun run deploy
```

## Preview Deployments

For preview deployments on PRs, you'll need to add a preview environment to your `wrangler.jsonc`:

```jsonc
{
  // ... existing config
  "env": {
    "preview": {
      "name": "preview-albert-cv"
    }
  }
}
```
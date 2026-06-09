# AGENTS.md

## Cursor Cloud specific instructions

### Monorepo layout

Yarn 1 workspaces monorepo with two apps:

| Workspace | Purpose | Dev command | URL |
|-----------|---------|-------------|-----|
| `web/` | Gatsby 5 frontend (Awesome Inc public site) | `cd web && yarn dev` | http://localhost:8000 |
| `studio/` | Sanity 3 Content Studio | `cd studio && yarn dev` | http://localhost:3333 |

Install dependencies once from the repo root: `yarn install` (see root `README.md`).

### Environment variables (required for Gatsby)

Gatsby loads `web/.env.development` in development (`gatsby-config.js` uses dotenv). This file is **not committed** (`.gitignore` covers `.env*`). Ask the team lead for the real file, or create one locally with at least:

- `GATSBY_SANITY_DATASET` (typically `production` or `development`)
- `FIVE_ACROSS_REWARDS_*` Google Sheets service-account fields (required at config load time even if you are not working on 5 Across pages)
- `SECOND_SPREADSHEET_ID` (needed for `/team-achievements` Netlify API routes)
- `SANITY_READ_TOKEN` (optional; enables draft overlay in dev)

Sanity Cloud (`projectId: y716vocf`) is hosted; no local database. Studio login is required to edit CMS content.

### Running services

Use **tmux** for long-running dev servers (Gatsby builds can take ~1 minute on first start):

```bash
# Gatsby
cd web && yarn dev

# Sanity Studio (optional unless editing schemas/content)
cd studio && yarn dev
```

There is no root `yarn dev` script (`.gitpod.yml` is outdated).

### Lint / test

| Workspace | Command | Notes |
|-----------|---------|-------|
| `web/` | `yarn lint` | Currently fails without `babel-eslint` in `web` devDependencies (parser referenced in `web/.eslintrc.js`) |
| `studio/` | `yarn lint` | Runs but reports many pre-existing style violations |
| `studio/` | `yarn test` | Runs deprecated `sanity check` (no-op) |
| `web/` | `yarn test` | Placeholder script only |

### Build

- Gatsby production build: `cd web && yarn build`
- Studio build: `yarn build-studio` from root, or `cd studio && yarn build`

### Netlify serverless functions

`web/src/api/` routes (e.g. team achievements) are served via Netlify functions, not plain `gatsby develop`. Use `netlify dev` from `web/` when testing those endpoints locally.

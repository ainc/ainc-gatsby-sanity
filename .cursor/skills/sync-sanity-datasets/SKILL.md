---
name: sync-sanity-datasets
description: Sync the Sanity production dataset down into the development dataset for this project (projectId y716vocf). Use when the user asks to clone, copy, refresh, or sync production data into development in Sanity, or to mirror prod content into dev. Runs from the studio/ directory on Windows PowerShell.
---

# Sync Sanity Production → Development

Copies content (documents + assets) from the **production** dataset into the **development** dataset so dev has realistic data. Project: `y716vocf` (datasets: `production`, `development`).

## Safety (read first)

- **Direction is one-way: production → development only.** Never import into or overwrite `production`.
- This **replaces development content** — confirm the user is OK losing current dev data.
- Requires Sanity access. Authenticate first if needed: `npx sanity login` (run inside `studio/`).
- All commands run from the `studio/` directory.

## Method 1 — existing repo script (preferred)

`studio/package.json` defines a `clone` script (export production, import into development with `--replace`):

```powershell
cd studio
yarn clone
```

Yarn runs the script via cmd.exe, so the `&&` inside the script works on Windows.

## Method 2 — manual export/import (PowerShell-safe)

Use when you want control over the steps or the script fails:

```powershell
cd studio
npx sanity dataset export production ./production.tar.gz
npx sanity dataset import ./production.tar.gz development --replace
```

- `--replace` overwrites documents that share an ID. It does **not** delete dev-only documents. For a clean mirror, delete and recreate the dev dataset first (destructive — confirm with the user):

```powershell
npx sanity dataset delete development
npx sanity dataset create development --visibility private
npx sanity dataset import ./production.tar.gz development
```

- Clean up the export afterward: remove `studio/production.tar.gz`.

## Method 3 — direct copy (fastest, no local file)

```powershell
cd studio
npx sanity dataset copy production development
```

Copies server-side (includes assets and history). If `development` already exists, prefer Method 1/2 or delete it first, since copy expects a fresh target.

## Auth via token (CI or non-interactive)

In PowerShell, set the token as an env var for the session (do NOT use `VAR=value cmd` — that's Unix-only):

```powershell
$env:SANITY_AUTH_TOKEN = "<token>"
npx sanity dataset export production ./production.tar.gz
```

## Verify

```powershell
npx sanity documents query "count(*)" --dataset development
```

Compare against production to confirm the sync landed:

```powershell
npx sanity documents query "count(*)" --dataset production
```

## PowerShell rules

- No `&&` chaining in the terminal — use `;` or separate commands (the `yarn clone` script is the exception, since yarn runs it through cmd.exe).
- No heredocs.
- Quote paths containing spaces.

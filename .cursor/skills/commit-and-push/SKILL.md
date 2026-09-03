---
name: commit-and-push
description: Stage, commit, and push changes in this repo from Windows PowerShell. Use when the user asks to commit, commit and push, or push changes live. Covers PowerShell-safe git commands and the lint-staged pre-commit hook.
---

# Commit and Push

This repo runs on **Windows PowerShell** with a **Husky + lint-staged** pre-commit hook (Prettier auto-formats staged `*.{js,jsx,ts,tsx,json,css,scss}` files). Follow the PowerShell-safe steps below.

## Workflow

1. Inspect state first (parallel is fine):

```powershell
git status
git branch --show-current
git log -5 --oneline
```

2. Stage the specific files you changed (prefer explicit paths over `git add .`):

```powershell
git add path/to/file-a path/to/file-b
```

3. Commit. Use the **subject + body** form with multiple `-m` flags. Write a concise subject (the "why"), then a body:

```powershell
git commit -m "Short imperative subject" -m "Longer body explaining why, wrapped as one line."
```

4. Push to the current branch:

```powershell
git push origin <current-branch>
```

Pushing directly to `main` is allowed here, but is a protected-branch write — confirm that's what the user wants. If they want review instead, use the `pr-to-main` skill.

## PowerShell rules (critical)

- **No `&&` chaining.** Use `;` to sequence, or run separate commands:
  - ✅ `git add file.js; git commit -m "msg"`
  - ❌ `git add file.js && git commit -m "msg"`
- **No heredocs (`<<'EOF'`).** They fail to parse in PowerShell. For multi-line commit messages, use repeated `-m` flags (one per paragraph) instead.
- Quote any path containing spaces with double quotes.

## After committing

- The pre-commit hook reformats staged files; the output shows `lint-staged` running Prettier. This is expected.
- If the hook modifies files, they're already included in the commit (lint-staged restages them).
- Verify with `git status` that the tree is clean and the branch is ahead/up to date.

## Notes

- Don't update git config, force-push, or skip hooks unless the user explicitly asks.
- Only commit when asked. Don't create empty commits.

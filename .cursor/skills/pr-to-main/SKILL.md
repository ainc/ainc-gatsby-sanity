---
name: pr-to-main
description: Open a GitHub PR for the current branch and merge it into main, or push the branch and land changes on main in this repo. Use when the user asks to create a PR, merge a PR, push a PR to main, or make branch changes live on main. Covers gh CLI usage and PowerShell-safe commands.
---

# PR to Main

Land branch changes on `main` using the `gh` CLI. This repo is **Windows PowerShell** — embedded quotes/parens/newlines break `gh --body`, so always pass the PR body via `--body-file`.

## Decide the path

- **Branch already pushed and you want review/CI** → open a PR, then merge it (default).
- **Trivial change, on `main` locally, no review needed** → see the `commit-and-push` skill to push `main` directly.

## Create a PR

1. Make sure the branch is pushed:

```powershell
git push -u origin <branch>
```

2. Write the PR body to a temp file (avoids PowerShell quoting failures), then create the PR with `--body-file`:

- Write the markdown body to a temp file, e.g. `C:\Users\<you>\AppData\Local\Temp\pr-body.md`, using the file-writing tool (not echo/heredoc).
- Then:

```powershell
gh pr create --base main --head <branch> --title "Concise PR title" --body-file "C:\path\to\pr-body.md"
```

3. Delete the temp body file afterward.

**Body template:**

```markdown
## Summary
- What changed and why (1-3 bullets)

## Test plan
- [ ] How to verify
```

## Merge the PR

```powershell
gh pr merge <number> --merge
```

- Use `--merge` (merge commit) to match this repo's history. Use `--squash` / `--rebase` only if the user asks.
- Merging into `main` is a protected-branch write — confirm intent before merging.

Verify it landed:

```powershell
gh pr view <number> --json state,mergedAt,mergeCommit
```

## If the merge is blocked by conflicts

1. Update the feature branch locally:

```powershell
git fetch origin
git merge origin/main
```

2. Resolve conflicts in the editor, then:

```powershell
git add <resolved-files>
git commit
git push origin <branch>
```

3. Retry `gh pr merge <number> --merge`.

## After merge: sync local main

```powershell
git checkout main
git pull origin main
```

## PowerShell rules (critical)

- **No `&&` chaining** — use `;` or separate commands.
- **No heredocs (`<<'EOF'`)** — they fail to parse. Use `--body-file` for PR bodies and repeated `-m` flags for commit messages.
- Quote paths containing spaces.

## Notes

- A previously merged PR from a branch does NOT carry new commits — pushing more commits to that same branch requires a **fresh PR** to reach `main`.
- Never force-push to `main` or skip hooks unless explicitly requested.

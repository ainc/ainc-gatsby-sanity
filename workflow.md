# Trello → GitHub Dev Workflow

How a task moves from a Trello card to shipped code and back to a closed loop on Trello. Every step lives in one of two systems, kept in sync by linking the card to the issue.

![Trello](https://img.shields.io/badge/Trello-0079BF?style=flat-square&logo=trello&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)
![Named owner](https://img.shields.io/badge/-Named%20owner-F5A623?style=flat-square)
![Automated](https://img.shields.io/badge/-Automated%20%2F%20someone%20else-lightgrey?style=flat-square)

## Steps

| # | System | Step | Description | Tag |
|---|--------|------|--------------|-----|
| 1 | ![Trello](https://img.shields.io/badge/Trello-0079BF?style=flat-square&logo=trello&logoColor=white) | **Card created** | Task is scoped and added to the board. This card is the source record for the whole task. | ![Automated](https://img.shields.io/badge/-Automated%20%2F%20someone%20else-lightgrey?style=flat-square) |
| 2 | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | **Issue created** | Issue is opened and linked back to the Trello card, so both systems stay traceable to each other. | |
| 3 | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | **Branch created from issue** | Work branch is cut directly from the issue, keeping the branch name and history tied to the task. | |
| 4 | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | **PR opened from the branch** | Pull request is opened early. Changes get made here, this is where the actual work happens. | ![Automated](https://img.shields.io/badge/-Automated%20%2F%20someone%20else-lightgrey?style=flat-square) |
| 5 | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | **Commits pushed** | Work is committed to the branch, updating the open PR as progress is made. | |
| 6 | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | **Contextual comments on the PR** | Questions, review notes, and flags happen inline on the diff, tagging Kyle or another teammate directly. | |
| 7 | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | **PR merged** | Once comments are resolved, the PR is merged into the main branch. | ![Kyle merges](https://img.shields.io/badge/Owner-Kyle%20merges-F5A623?style=flat-square) |
| 8 | ![Trello](https://img.shields.io/badge/Trello-0079BF?style=flat-square&logo=trello&logoColor=white) | **Stakeholders notified** | Card is updated or commented on so anyone watching the board knows the work shipped. | |

> 🔁 **Loop closes:** the card that started the task is the same card that confirms it's done.

## Notes

- **One task, one thread.** Card → issue → branch → PR all reference the same task, so anyone can trace a merged change back to the original request.
- **Review happens in the PR, not in Trello.** Keep technical discussion on the diff where the code lives, so Trello stays a status view rather than a second review channel.
- **Merge is a named checkpoint.** Kyle merging is the explicit final gate before code lands on main.

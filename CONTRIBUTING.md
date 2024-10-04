# Guide to Contributing

## Team Norms

### Team Values

* We will work together to achieve the best results, valuing each other's input and expertise.
* All team communication and decisions are open and shared.
* We work in sprints, iterating quickly and improving based on feedback. We will follow the Scrum framework guidelines.
* Members will communicate actively in team communication channels.
* Each member will be an active, synchronous participant in each standup. Attendance is obligatory, except in emergent situations.
* We will resolve conflicts by discussing as a group and making decisions by consensus.
* Members who require help are encouraged to ask the team openly and proactively.
* Team members are expected to fulfill their commitments and meet deadlines. We hold each other accountable.
* If a member is not delivering on their obligations, we will have an open discussion to understand the situation and find a solution.
* Failure to participate in standups or make progress on tasks for two consecutive standups will be reported to the stakeholders.

### Sprint Cadence

* We will operate in 2 week sprints.

### Daily Standups

* Standups will operate during the weekday in the evening.
* Standups will last about 15 minutes.
* Standups will be held at least 3 times a week.
* The Scrum Master will share their meeting summaries in a communication channel with the stakeholders.

### Coding Standards

* Visual Studio Code will be the designated code editor for the team/
* Code for each task and spike must be peer-reAlways push working code, if you break the pipeline/build then fix it.viewed and pass tests before merging into the main branch of code.
* Write self documenting code. Use descriptive variable and function names. Avoid unnecessary name shortening.
* Don't leave dead/commented out code behind. If you see such code, delete it.
* Make small, frequent commits that reflect individual changes or steps.
* Avoid large, monolithic commits, as they make it harder to track changes and review the code.
* Provide descriptive commit messages.
* Always sync with the main branch before pushing your commits.

## Git workflow

* We will follow the feature branch workflow.
* A branch will be created for each new feature.
* Once a feature is declared complete by the developer, they will open a pull request to the main branch, and add a reviwer.
* Features will only be merged to the main branch through pull requests, never directly.
* Always sync with the main and current branch before pushing your commits.

## Rules for Contribution

### What to Contribute

* Features: When adding new features, create a feature branch and ensure that your feature aligns with the project’s goals. Clearly document any new functionality added.
* Bug Fixes: If you notice a bug, feel free to address it. Please create a bug report if one doesn’t already exist and link it in your pull request.
* Code Improvements: Refactor existing code for performance or readability, but ensure your changes don’t introduce new issues.
* Tests: Write tests for new features or improve existing ones to cover critical functionality and ensure stability.

### How to Contribute

* Fork and Clone: If you’re an external contributor, fork the repository and clone it locally.
* Create a Branch: Following our Git workflow standards, create a new branch for your changes:
  * `git checkout -b <branch-name>`
* Commit and Push: Commit your changes regularly with descriptive messages and push your branch to the remote repository:
  * `git commit -m "Descriptive message of what you did"`
  * `git push origin <branch-name>`
* Create a Pull Request: Once your changes are complete, create a pull request to merge your branch into main. Ensure your Pull Request is clear and concise.
* Code Reviews:
  * Every contribution will be reviewed by at least one other team member.
  * Follow our coding standards, write clean and self-documenting code, and provide meaningful commit messages.

## Setting up local environment

## Bulding & Testing
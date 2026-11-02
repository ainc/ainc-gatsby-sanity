# ainc-gatsby-sanity

A portfolio using **Sanity.io** (for structured content) and **Gatsby** (as a static site generator) within a **Yarn monorepo**.

Because **pushing directly to `main` is impossible**, all changes are managed through **issues**, **feature branches**, and **pull requests (PRs)**—ensuring clarity, collaboration, and minimal downtime when integrating new features or fixes.

---

## Overview

This repository includes:

- **web**: The Gatsby front-end
- **studio**: The Sanity Content Studio (schemas and content)

**Root `package.json`** highlights:

- **`build-studio`**: Builds the Studio (`(cd studio && yarn run build)`).
- **`export-db`** / **`import-db`**: For exporting/importing production dataset.
- **`deploy-graphql`**: Deploys updated GraphQL schema.
- **`clone`**: Clones the production dataset into the development dataset.
- **`prepare`** / **`postinstall`**: Hooks for setting up Husky (Git hooks).

Refer to the **`package.json`** files in each workspace for workspace-specific scripts.

---

## 1. Initial Setup

1. **Clone the repo**  
   git clone <your-repo-url>

2. **Verify Yarn is installed**  
   yarn --version

3. **Install dependencies** (in the root folder)  
   cd ainc-gatsby-sanity  
   yarn install

4. **.env File**
   Ask leader for the .env.development file.

---

## 2. Issue-Driven Development

**Before making any changes**, create a GitHub issue describing the task or feature:

1. **Create an issue**

   - Provide a clear title and description of what you want to accomplish.
   - Specify whether it affects `web`, `studio`, or both.

2. **Create a branch off the issue**  
   git checkout -b feat/<issue-number>-<short-description>
   - Example: `feat/42-add-new-schema-field`

---

## 3. Local Development

### 3.1 Gatsby Site (`web`)

1. **Navigate to `web`**  
   cd web  
   yarn dev

   - The Gatsby dev (development) server runs at [http://localhost:8000](http://localhost:8000).

2. **Edit code** in the `web` folder

   - Changes appear automatically (hot reload).

3. **Build** (production)
   - From `web`:  
     yarn build
   - This creates a production-ready build in `web/public`.

### 3.2 Sanity Studio (`studio`)

1. **Navigate to `studio`**  
   cd studio  
   yarn dev

   - The Studio runs at [http://localhost:3333](http://localhost:3333).

2. **Schema or content updates**
   - Edit files in `studio/schemas` (or your chosen directory).
   - See your changes in real time in the local Studio.

---

## 4. Changes That Affect Both Studio and Web

If schema changes in the Studio require corresponding updates in Gatsby, handle them together in a **single feature branch**.

### Step-by-Step Process

1. **Create a branch off the issue**  
   git checkout -b feat/<issue-number>-<description>

   - Example: `feat/15-update-schema-and-frontend`

2. **Edit the schema** in `studio`

   - Make necessary updates and test locally:  
     cd studio  
     yarn dev

3. **Update Gatsby** in `web`

   - Adjust GraphQL queries/components to match the new schema fields.
   - Test by running `yarn dev` in `web`.

4. **Commit changes (both `studio` and `web`)**  
   git add .  
   git commit -m "Update schema and front-end for issue <#>"

5. **Push and open a PR**  
   git push origin feat/<issue-number>-<description>

   - Link the PR to the corresponding GitHub issue.

6. **Merge and Deploy**
   - After PR approval:
     - Merge into `main`.
     - Redeploy the GraphQL schema if needed:  
       yarn graphql-deploy  
     - Deploy the updated Gatsby site.

---

## 5. Handling Independent Updates

### 5.1 Studio-Only Changes

1. **Create an issue and branch**  
   git checkout -b feat/<issue-number>-<studio-description>

2. **Edit schema** in `studio`

   - Test with `yarn dev`.

3. **Commit and push**  
   git add .  
   git commit -m "Studio-only changes for issue <#>"  
   git push origin feat/<issue-number>-<studio-description>

4. **Open a PR**, merge, and redeploy GraphQL if necessary  
   yarn deploy-graphql

### 5.2 Gatsby-Only Changes

1. **Create an issue and branch**  
   git checkout -b feat/<issue-number>-<web-description>

2. **Edit code** in `web`

   - Test with `yarn dev`.

3. **Commit and push**  
   git add .  
   git commit -m "Web-only changes for issue <#>"  
   git push origin feat/<issue-number>-<web-description>

4. **Open a PR**, merge, and deploy the updated Gatsby site

---

## 6. Syncing Production to Development

If **production** has updates that need to be synced to **development**:

1. **Update** production content in the live Studio.
2. **Clone** production into development:  
   cd studio  
   yarn clone
   - This exports the production dataset and imports it into the development dataset (`--replace` by default).
3. **Restart** local environments to ensure everything is up to date.

---

## 7. Best Practices

1. **Use Issues for Every Task**

   - Create an issue describing the task or change.
   - Reference the issue in your branch name and commits.

2. **Small, Focused PRs**

   - Avoid mixing unrelated changes in a single PR.

3. **Test Locally First**

   - Verify schema changes (`studio`) and front-end queries (`web`) before opening a PR.

4. **Deploy in Sync**

   - Merge and deploy schema changes first (or in the same PR) to prevent querying fields that don’t exist yet.

5. **Communication**
   - Let teammates know if your changes might break existing queries.

---

## Additional Resources

- **Gatsby Docs**: [https://www.gatsbyjs.com/docs/](https://www.gatsbyjs.com/docs/)
- **Sanity Docs**: [https://www.sanity.io/docs](https://www.sanity.io/docs)
- **Import/Export Data**: [https://www.sanity.io/docs/migrating-data](https://www.sanity.io/docs/migrating-data)

---

## Learn More

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

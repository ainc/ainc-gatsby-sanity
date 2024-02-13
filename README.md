# ainc-gatsby-sanity

A portfolio using structured content and a static site builder.

Deployed from [sanity.io/create](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-gatsby-portfolio).

## What you have

- A blazing fast portfolio with [Gatsby.js](https://gatsbyjs.org)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Netlify](https://netlify.com)

## Quick start

1. Clone this repository from your GitHub account
2. `yarn install` in the project root folder on local
3. `yarn run dev` to start the Studio and frontend locally **
   - Your Studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:8000](http://localhost:8000)
4. `yarn run build` to build to production locally
** Note: You may have better success opening two separate terminals to and running `yarn run dev` in both `/studio` and `/web`


## Notes
- Having troucble with `yarn install`?
Verified Node versions: `14.xx`, `17.xx`

## Animate SVG
For simple SVG animation, pure css (@keyframes) can be applied directly to the svg file within the <style> tags but creating a React component for the svg then apply the css styling is recommended for multiple reasons. For more complicated animation, a library is needed. Check this link for a tutorial on using Framer Motion to animate an SVG: (https://www.youtube.com/watch?v=SrmTDrN1lkU)

Note: Grouping SVG is important. This can be done by putting <path> elements that needed to be grouped within the same <g> tags. This can also be done by the design team when exporting the design to SVG file for convenience.


## Workflow to create new documents for production
<details>
<summary>Steps</summary>
<br>

[Import/Export Documentation](https://www.sanity.io/docs/migrating-data)
  - Use `local` machine to create document on your personal tagged dataset [(Commit for reference on how to switch to change tags)](https://github.com/ainc/ainc-gatsby-sanity/commit/83a6e89290f1b83a4fd9d0a0223cc858c05bca8b#:~:text=%3A%20%27beta%27-,graphqlTag,-%3A%20%27beta%27)
  - Export from your tagged dataset, then import into the `dev` dataset using either `--missing` or `--replace` flags [(Documentation)](https://www.sanity.io/docs/importing-data#:~:text=tar.gz%20production-,Protip,-The%20import%20will)
  - In the `dev` dataset, then add content to your new document in the Sanity Dashboard
  -  Then export from the `dev` dataset, and import into the `production` dataset using the `--missing skip` flag (adds any missing data, skips any data with same Id's)
  - Possible have to do `sanity graphql deploy` to update the GraphQL (After adding code in `/documents))
  - Yay you're done... hopefully (Refer to the commands below)

 - - Note: these commands will only transfer the content of the documents, you will still need to add the document code to the `studio/douments` folder

### Confirmed command sequence once a schema is made in your `tagged` dataset
These 2 commands will export from your `tagged` dataset into the `dev` dataset
- `sanity dataset export dev --tag [tagName] ./tagged.tar.gz` (Export from `tagged` dataset)
- `sanity dataset import ./tagged.tar.gz dev --missing skip` (Import into `dev` dataset) this will add all missing data and skip any data with the same id

After this step, you would populate the content in sanity

Then, these 2 commands will import your data from `dev` to `production`
- `sanity dataset export dev ./dev.tar.gz` (Export from `dev` dataset)
Create a backup of `production` dataset (Possible GitHub action)
- `sanity dataset export production ./production.tar.gz` (Export from `production` dataset)

Import from `dev` into `production`
- `sanity dataset import ./dev.tar.gz production --missing skip` (Import into `production` dataset)



<br><br>
</details>

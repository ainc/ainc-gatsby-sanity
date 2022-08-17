const {isFuture,parseISO} = require('date-fns')
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")



exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allFeedAnchorPodcast (
            sort: { fields: [isoDate], order: DESC }
          ) {
            totalCount
            nodes {
              title
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // ...
  // Create blog-list pages
  const posts = result.data.allFeedAnchorPodcast.nodes
  const postsPerPage = 10
  // console.log(posts)
  const numPages = Math.ceil(posts.length / postsPerPage)
  // console.log(numPages)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/podcast` : `/podcast/${i + 1}`,
      component: path.resolve("./src/templates/podcast/podcast-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanitySampleProject(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

}
  

  // const projectEdges = (result.data.allSanitySampleProject || {}).edges || []

  // projectEdges
  //   .filter(edge => !isFuture(parseISO(edge.node.publishedAt)))
  //   .forEach(edge => {
  //     const id = edge.node.id
  //     const slug = edge.node.slug.current
  //     const path = `/project/${slug}/`

  //     createPage({
  //       path,
  //       component: require.resolve('./src/templates/project.js'),
  //       context: {id}
  //     })
  //   })


// exports.createPages = async ({graphql, actions}) => {
//   await createProjectPages(graphql, actions)
// }

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { paginate } = require("gatsby-awesome-pagination");
const { createRedirect } = require("gatsby-plugin-netlify");

async function createBlogPostPages(graphql, actions) {
  const { createPage, createRedirect } = actions;
  const result = await graphql(`
    {
      allSanityBlog {
        totalCount
        edges {
          node {
            date(formatString: "MMMM DD, YYYY")
            slug {
              current
            }
            title
            previewText
            body
            thumbnail {
              asset {
                url
              }
            }
            reference {
              name
              picture {
                asset {
                  gatsbyImageData(
                    height: 54
                    width: 54
                    placeholder: DOMINANT_COLOR
                  )
                }
              }
              title
            }
          }
        }
      }
    }
  `);

  // console.log(JSON.stringify(result, null, 4));

  if (result.errors) throw result.errors;

  //Create individual blog post
  const postEdges = result.data.allSanityBlog.edges;

  postEdges.forEach((edge) => {
    // const id = edge.node.id;
    const path = `/blog/${edge.node.slug.current}`;

    createPage({
      path: path,
      component: require.resolve("./src/templates/blog/blog-template.js"),
      context: {
        post: edge.node,
      },
    });
  });

  // Create a single blog list page
  createPage({
    path: `/blog`,
    component: require.resolve("./src/templates/blog/blog-list-template.js"),
    context: {},
  });

  // Redirect legacy numeric pagination routes (/blog/2, /blog/3, ...) to /blog
  const blogCount = result.data.allSanityBlog.totalCount;
  const blogsPerPage = 10;
  const numBlogs = Math.ceil(blogCount / blogsPerPage);
  for (let i = 2; i <= numBlogs; i++) {
    createRedirect({
      fromPath: `/blog/${i}`,
      toPath: `/blog`,
      isPermanent: true,
      force: true,
      redirectInBrowser: true,
    });
    createRedirect({
      fromPath: `/blog/${i}/`,
      toPath: `/blog`,
      isPermanent: true,
      force: true,
      redirectInBrowser: true,
    });
  }
}

async function createPodcastPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allFeedAnchorPodcast(sort: { isoDate: DESC }) {
        totalCount
        nodes {
          title
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allFeedAnchorPodcast.nodes;
  const postsPerPage = 10; //changed from 9 to 10
  const numPages = Math.ceil(posts.length / postsPerPage);

  //pagination with import
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/podcast` : `/podcast/${i + 1}`,
      component: path.resolve(
        "./src/templates/podcast/podcast-list-template.js",
      ),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
}

async function createNotePages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityNotes {
        edges {
          node {
            slug {
              current
            }
            age
            linkToiframe
            _rawBody
          }
        }
      }
    }
  `);

  // Generate pages based on the data
  result.data.allSanityNotes.edges.forEach(({ node }) => {
    const slug = node.slug.current;
    const note = node;
    createPage({
      path: `/notes/${slug}`,
      component: require.resolve("./src/templates/notes/notes.js"),
      context: {
        title: node.title,
        slug: slug,
        note: note,
      },
    });
  });
}

async function createTutorialsPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityTutorials {
        edges {
          node {
            slug {
              current
            }
            body
            title
          }
        }
      }
    }
  `);

  // Generate pages based on the data
  result.data.allSanityTutorials.edges.forEach(({ node }) => {
    const slug = node.slug.current;
    createPage({
      path: `/tutorials/${slug}`,
      component: require.resolve("./src/templates/tutorials/tutorials.js"),
      context: {
        post: node,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createRedirect } = actions;
  //internal
  createRedirect({
    fromPath: `/5across`,
    toPath: `/events/5across/`,
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: `/5across/program`,
    toPath: `/program`,
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: `/5aprogram`,
    toPath: `/program`,
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: `/code`,
    toPath: `/learn/youth/code/`,
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: `/youth`,
    toPath: `/learn/youth/`,
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: `/woc`,
    toPath: `/notes/woc`,
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });
  // Note: blog pagination redirects are handled in createBlogPostPages to avoid catching post slugs

  //external
  createRedirect({
    fromPath: `https://awesomeincu.com/`,
    toPath: `/weekofcode`,
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: `https://5across.org/`,
    toPath: `/events/5across`,
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: `https://awesomeincu.com/*`,
    toPath: `/weekofcode`,
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });
  createRedirect({
    fromPath: `https://awesomeincu.com`,
    toPath: `/weekofcode`,
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });

  await createPodcastPages(graphql, actions);
  await createBlogPostPages(graphql, actions);
  await createNotePages(graphql, actions);
  await createTutorialsPages(graphql, actions);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      currentDate: getCurrentDate(),
    },
  });
};
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  const config = getConfig();
  const miniCssExtractPlugin = config.plugins.find(
    (plugin) => plugin.constructor.name === "MiniCssExtractPlugin",
  );
  if (miniCssExtractPlugin) {
    miniCssExtractPlugin.options.ignoreOrder = true;
  }
  actions.replaceWebpackConfig(config);
};
/**
 * Returns the current date in YYYY-MM-DD format
 */
function getCurrentDate() {
  const d = new Date();
  let month = (d.getMonth() + 1).toString();
  if (month.length < 2) {
    month = `0${month}`;
  }
  let day = d.getDate().toString();
  if (day.length < 2) {
    day = `0${day}`;
  }
  return `${d.getFullYear()}-${month}-${day}`;
}

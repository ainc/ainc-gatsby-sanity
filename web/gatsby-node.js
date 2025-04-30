//gatsby-node.js
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { paginate } = require("gatsby-awesome-pagination");
const { createRedirect } = require("gatsby-plugin-netlify");

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
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

  //pagination for all blog posts
  const blogCount = result.data.allSanityBlog.totalCount;
  const blogsPerPage = 10; //changed from 9 to 10
  const numBlogs = Math.ceil(blogCount / blogsPerPage);

  Array.from({ length: numBlogs }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve("./src/templates/blog/blog-list-template.js"),
      // component: require.resolve("./src/pages/blog/index.js"),

      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numBlogs,
        currentBlog: i + 1,
      },
    });
  });
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

//------------------------------------------------------------------createSanityPages
async function createSanityPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPage {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running Sanity Page query.`);
    return;
  }

  const pageTemplate = require.resolve("./src/templates/page.js");

  result.data.allSanityPage.nodes.forEach((node) => {
    if (!node.slug?.current) {
      reporter.warn(`Sanity page missing slug: ${node.id}`);
      return;
    }

    createPage({
      path: `/${node.slug.current}`,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: node.id,
      },
    });
  });
}
//------------------------ to create existence of 'content'
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SanityPage implements Node {
      content: [SanityPageContent]
    }
    
    union SanityPageContent = SanityHero | SanityCta | SanityTextBlock | SanityColumnBlock
    
    type SanityColumnBlock implements Node {
      _key: String!
      _type: String!
      spacing: String
      alignment: String
      sections: [SanityColumnSection]
      backgroundImage: SanityImage
    }
    
    type SanityColumnSection {
      _key: String!
      width: String
      content: [SanityPageContent]
    }
    
    type SanityHero implements Node {
      _key: String!
      _type: String!
      heading: String
      subheading: String
      backgroundImage: SanityImage
    }
    
    type SanityCta implements Node {
      _key: String!
      _type: String!
      heading: String
      text: String
      button: SanityButton
      backgroundImage: SanityImage
    }
    
    type SanityTextBlock implements Node {
      _key: String!
      _type: String!
      textAlignment: String
      textColor: String
      backgroundImage: SanityImage
      _rawContent: JSON
    }
    
    type SanityButton {
      text: String
      url: String
      variant: String
    }
    
    type SanitySlug {
      _type: String!
      current: String!
    }
    
    type SanityImage {
      asset: SanityImageAsset
    }
    
    type SanityImageAsset {
      gatsbyImageData: JSON
      url: String
    }
    
    type SanityBlock {
      _key: String!
      _type: String!
      children: [SanitySpan]
      style: String
      list: String
    }
    
    type SanitySpan {
      _key: String!
      _type: String!
      marks: [String]
      text: String
    }
  `;
  createTypes(typeDefs);
};

//----------------------

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

  //---------
  await createSanityPages(graphql, actions, reporter);
  //---------
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

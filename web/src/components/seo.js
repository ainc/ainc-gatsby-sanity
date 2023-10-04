import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import favicon from'../images/logo.png'

function SEO({ description, lang, meta, keywords, title, path }) {
  console.log("Current Page: ", useLocation().pathname);
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const pageTitle = title !== undefined ? 
        (
          //If there is a title prop, use that
          title 
        ) : (
          data.allSanityPageTitles.edges.find(page => page.node.filePath === useLocation().pathname + "/") !== undefined ? 
          (
            //if there is a page title for the current page from sanity, use that
            data.allSanityPageTitles.edges.find(page => page.node.filePath === useLocation().pathname+ "/").node.pageTitle 
          ) : (
            //if there is no page title for the current page from sanity, use the default title
            "Awesome Inc"
          )

        );
        
        const metaDescription = description || (data.site && data.site.description) || "";
        const siteTitle = (data.site && data.site.title) || "";
        const siteAuthor = (data.site && data.site.author && data.site.author.name) || "";
        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={pageTitle}
            titleTemplate={title === siteTitle ? "%s" : `%s | ${siteTitle}`}
            meta={[
              {
                name: "description",
                content: metaDescription
              },
              {
                property: "og:title",
                content: pageTitle
              },
              {
                property: "og:description",
                content: metaDescription
              },
              {
                property: "og:type",
                content: "website"
              },
              {
                name: "twitter:card",
                content: "summary"
              },
              {
                name: "twitter:creator",
                content: siteAuthor
              },
              {
                name: "twitter:title",
                content: pageTitle
              },
              {
                name: "twitter:description",
                content: metaDescription
              },
              {
                name:"og:image",
                content: {favicon}
              }
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                      name: "keywords",
                      content: keywords.join(", ")
                    }
                  : []
              )
              .concat(meta)}
          >
          <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
          </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
      title
      description
      keywords
      author {
        name
      }
    }
    allSanityPageTitles {
      edges {
          node {
              filePath
              pageTitle
          }
      }
    }
  }
`;

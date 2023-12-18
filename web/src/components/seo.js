import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import favicon from'../images/logo.png'

function SEO({ description, lang, meta, keywords, title, path }) {
  console.log("Current Page: ", useLocation().pathname);

  const data = useStaticQuery(
    graphql`
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
      `
    )

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
    {/*Google tag manager */}
    <script>
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WVS8Q79');
            `}
    </script>
    {/*End Google tag manager */}

    {/*Google tag (gtag.js*/}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-2X6W47GSDL"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10985315854');
              gtag('config', 'G-2X6W47GSDL');
            `}
          </script>
   {/*End Google tag (gtag.js*/}
   
   <script type="text/javascript" src="/zoho-marketing-hub.js"></script>
   <script type="text/javascript" src="/zoho-cookie.js"></script>
   <script type="text/javascript" src="/facebook-pixel-code.js"></script>
   <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=405237331509908&autoLogAppEvents=1" nonce="CPsa0mSK"></script>

    </Helmet>
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

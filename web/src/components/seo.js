import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import favicon from "../images/logo.png";

function SEO({ description, lang, meta, keywords, title, path, jsImports }) {
  const data = useStaticQuery(graphql`
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
  `);

  const pageTitle =
    title !== undefined
      ? //If there is a title prop, use that
        title
      : data.allSanityPageTitles.edges.find(
            (page) => page.node.filePath === useLocation().pathname + "/",
          ) !== undefined
        ? //if there is a page title for the current page from sanity, use that
          data.allSanityPageTitles.edges.find(
            (page) => page.node.filePath === useLocation().pathname + "/",
          ).node.pageTitle
        : //if there is no page title for the current page from sanity, use the default title
          "Awesome Inc";

  const metaDescription =
    description || (data.site && data.site.description) || "";
  const siteTitle = (data.site && data.site.title) || "";
  const siteAuthor =
    (data.site && data.site.author && data.site.author.name) || "";
  const salesIQPages = [
    "/learn/",
    "/learn/adults/",
    "/learn/youth/",
    "/bootcamp/",
    "/bootcamp/apply/",
  ];
  const includeSalesIQ = salesIQPages.includes(useLocation().pathname);
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={pageTitle}
      titleTemplate={title === siteTitle ? "%s" : `${siteTitle} | %s`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: pageTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: siteAuthor,
        },
        {
          name: "twitter:title",
          content: pageTitle,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          name: "og:image",
          content: { favicon },
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", "),
              }
            : [],
        )
        .concat(meta)}
    >
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      <jsImports />
      {/*Google tag manager */}
      <script>
        {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtag/js?id=AW-10985315854';f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WVS8Q79');
            `}
      </script>
      {/*End Google tag manager */}

      {/*Google tag (gtag.js*/}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-10985315854"
      ></script>
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

      {/*Zoho CRM / Google Ads */}
      <script
        type="text/javascript"
        src="https://crm.zoho.com/crm/javascript/zcga.js"
      ></script>

      <script
        type="text/javascript"
        src="https://forms.zoho.com/js/zf_gclid.js"
      ></script>

      {/*Zoho marketing hub */}
      <script type="text/javascript" src="/zoho-marketing-hub.js"></script>

      {/*Zoho Cookie */}
      <script type="text/javascript" src="/zoho-cookie.js"></script>

      {/*Facebook pixel code */}
      <script type="text/javascript" src="/facebook-pixel-code.js"></script>

      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=405237331509908&autoLogAppEvents=1"
        nonce="CPsa0mSK"
      ></script>
      {/*Hotjar- unique to https://www.awesomeinc.org/bootcamp  */}
      <script>
        {`
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2076715,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}
      </script>
      {/* Zoho PageSense */}

      <script src="https://cdn.pagesense.io/js/awesomeinc/617258c649af414b86fee0936d14ed09.js"></script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

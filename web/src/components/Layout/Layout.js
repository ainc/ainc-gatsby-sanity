import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SEO from "../seo";

import "../../styles/layout.css";
import { Container } from "react-bootstrap";

const Layout = ({
  pageTitle,
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  jsImports,
  noIndex = false,
}) => {
  const query = useStaticQuery(graphql`
    query {
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

  const isBrowser = typeof window !== "undefined";
  const currentPath = isBrowser ? window.location.pathname : "/";

  let titleOfPage = "Awesome Inc"; // Default title
  try {
    const matchedPage = query?.allSanityPageTitles?.edges?.find(
      (page) => page?.node?.filePath === currentPath,
    );
    titleOfPage = matchedPage?.node?.pageTitle || titleOfPage;
  } catch (error) {
    console.error("Error finding page title:", error);
  }

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
      <SEO
        title={titleOfPage}
        imports={jsImports}
        meta={noIndex ? [{ name: "robots", content: "noindex, nofollow" }] : []}
      />
      <Banner />
      <Header />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;

import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
//import { TransitionPortal } from "gatsby-plugin-transition-link"

import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SEO from "../seo";

import "../../styles/layout.css";
import { Container } from "react-bootstrap";

const Layout = ({ pageTitle, children, onHideNav, onShowNav, showNav, siteTitle, jsImports }) => {
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

  var titleOfPage;
  try {
    titleOfPage = query.allSanityPageTitles.edges.find(
      page => page.node.filePath === useLocation().pathname
    ).node.pageTitle;
  } catch (error) {
    console.error(error);
  }

  return (
    <Container fluid className="d-flex flex-column min-vh-100">
      <SEO title={titleOfPage ? titleOfPage : "Awesome Inc"} imports={jsImports} />
      <Banner />
      <Header />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;

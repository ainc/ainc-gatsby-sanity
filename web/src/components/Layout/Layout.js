import React from "react";
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
  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
      <SEO title={pageTitle} jsImports={jsImports} />
      <Banner />
      <Header />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;

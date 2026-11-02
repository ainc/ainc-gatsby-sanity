import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SEO from "../seo";

import "../../styles/layout.css";
import { Container } from "react-bootstrap";


const Layout = ({ pageTitle, children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <div>
    <title>{pageTitle} | This will be dynamic later</title>
    <Banner/>
    <Header />
    <main>
    <div>
      {children}
    </div>
    </main>
    <Footer />
  </div>
);

export default Layout;

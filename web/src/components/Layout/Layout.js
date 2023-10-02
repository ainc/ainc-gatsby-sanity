 import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import "../../styles/layout.css";


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

 import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from "@reach/router";

import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SEO from "../seo";

import "../../styles/layout.css";

const Layout = ({ pageTitle, children, onHideNav, onShowNav, showNav, siteTitle}) => {
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

  var titleOfPage
  try {
    titleOfPage = query.allSanityPageTitles.edges.find((page) => page.node.filePath === useLocation().pathname).node.pageTitle
  } catch(error) {
    console.error(error)
  }
  
  return(
  <div>
    <SEO title={titleOfPage ? titleOfPage : 'Awesome Inc'}/>
    <Banner />
    <Header />
    <main>
    <div>
      {children}
    </div>
    </main>
    <Footer />
  </div>
  );
};


export default Layout;
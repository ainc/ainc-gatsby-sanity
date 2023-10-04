 import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "../../styles/layout.css";
import SEO from "../seo";
import { useLocation } from "@reach/router";

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
    <head>
      <title>{titleOfPage ? titleOfPage : 'Awesome Inc'}</title>
    </ head>
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
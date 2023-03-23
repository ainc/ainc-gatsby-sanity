import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Layout from "../../components/Layout/Layout";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import { graphql, Link } from "gatsby";
import AwesomeIncLogo from "../../assets/svg/square_gray.svg"
import * as styles from "./links.scss";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const LinksPage = ({ data }) => {
    const allLinks = (data.allSanityLinks.nodes || {})

    return (
        <Container>
            <div className="header d-flex justify-content-center align-items-center">
                <AwesomeIncLogo className="logo" />
            </div>

            <div className="links">
            {allLinks.map((node) => (
                <div className="d-flex justify-content-center">
                <BrandButton className="brand-button">              
                    <a href={node.linkToPage} className="brand-button">{node.title}</a>
                </BrandButton>
                </div>
            ))}
            </div>

            <Col className= "socialsInlineList">
            <ul>
              <li><a href='https://twitter.com/awesomeinclex'><FaTwitter /></a></li>
              <li><a href='https://www.facebook.com/awesomeinclex'><FaFacebookF /></a></li>
              <li><a href='https://www.linkedin.com/school/awesome-inc/'><FaLinkedinIn /></a></li>
              <li><a href='https://www.instagram.com/awesomeinclex/'><FaInstagram /></a></li>
              <li><a href='https://www.youtube.com/user/AincTelevision/featured'><FaYoutube /></a></li>
            </ul>
            </Col>
        </Container> 
    )
}

export const query_links = graphql`
query {
    allSanityLinks(sort: {fields: title, order: DESC}) {
      nodes {
        title
        linkToPage
      }
    }
  }`;


export default LinksPage;
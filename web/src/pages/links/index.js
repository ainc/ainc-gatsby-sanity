import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import SEO from '../../components/seo'
import Layout from "../../components/Layout/Layout";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import { graphql, Link } from "gatsby";
import AwesomeIncLogo from "../../assets/svg/square_gray.svg"
import * as styles from "./links.scss";
import '../../styles/main.scss'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const LinksPage = ({ data }) => {
    const allLinks = (data.allSanityLinks.nodes || {})

    return (
      <Container>
        <SEO />
        <Row>
          <Col className="header d-flex justify-content-center align-items-center">
            <AwesomeIncLogo className="logo" />
          </Col>
        </Row>

        <Row style={{marginTop: "30%"}}>
          {allLinks.map((node) => (
            <Col md={{span: 8, offset: 2}}>
              <a href={node.linkToPage}>
                <BrandButton className="hover--black mb-4 py-0 w-100 ">       
                  {node.title}       
                </BrandButton>
              </a>
            </Col>
          ))}
        </Row>
        <Row className='my-5'>
          <Col md={{span: 2, offset: 5}} className=''>
            <Row className='d-flex justify-content-center'>
              <Col sm={2} className='d-flex justify-content-center'>
                  <a href='https://twitter.com/awesomeinclex'><FaTwitter size={25} color="black"/></a>
              </Col>
              <Col sm={2} className='d-flex justify-content-center'>
                  <a href='https://www.facebook.com/awesomeinclex'><FaFacebookF size={25} color="black"/></a>
              </Col>
              <Col sm={2} className='d-flex justify-content-center'>
                  <a href='https://www.linkedin.com/school/awesome-inc/'><FaLinkedinIn size={25} color="black"/></a>
              </Col>
              <Col sm={2} className='d-flex justify-content-center'>
                  <a href='https://www.instagram.com/awesomeinclex/'><FaInstagram size={25} color="black"/></a>
              </Col>
              <Col sm={2} className='d-flex justify-content-center'>
                  <a href='https://www.youtube.com/user/AincTelevision/featured'><FaYoutube size={25} color="black"/></a>
              </Col>
            </Row>
          </Col>

        </Row>
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
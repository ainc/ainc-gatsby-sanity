import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SEO from "../../components/seo";
import Layout from "../../components/Layout/Layout";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import { graphql, Link } from "gatsby";
import * as styles from "./transy.scss";
import { StaticImage } from "gatsby-plugin-image";
import "../../styles/main.scss";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Title from "../../components/UI/Title/Title";

const LinksPage = ({ data }) => {
  const allLinks = data.allSanityLinks.nodes[0].links || {};

  return (
    <Container>
      <SEO />
      <Row>
        <Col className="header d-flex justify-content-center align-items-center">
          <StaticImage
            placeholder="blurred"
            className="logo mx-auto d-block img-fluid"
            quality="100"
            src="../../assets/svg/logo-grey.svg"
            alt="Awesome Inc Logo"
            // layout="fullWidth"
            style={{ zIndex: "1" }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          
        </Col>
      </Row>

      <Row className="pt-3" style={{ marginTop: "30%" }}>
        <Title className="text-center">Welcome, Transylvania!</Title>
        {allLinks.map((node) => (
          <Col md={{ span: 8, offset: 2 }}>
            <a href={node.url}>
              <BrandButton className="hover--black mb-4 py-0 w-100 ">
                {node.title}
              </BrandButton>
            </a>
          </Col>
        ))}
      </Row>
      <Row className="my-5">
        <Col md={{ span: 2, offset: 5 }} className="">
          <Row className="d-flex justify-content-center">
            <Col sm={2} className="d-flex justify-content-center">
              <a
                href="https://twitter.com/awesomeinclex"
                aria-label="Visit our Twitter"
              >
                <FaTwitter size={25} color="black" />
              </a>
            </Col>
            <Col sm={2} className="d-flex justify-content-center">
              <a
                href="https://www.facebook.com/awesomeinclex"
                aria-label="Visit our Facebook"
              >
                <FaFacebookF size={25} color="black" />
              </a>
            </Col>
            <Col sm={2} className="d-flex justify-content-center">
              <a
                href="https://www.linkedin.com/school/awesome-inc/"
                aria-label="Visit our LinkedIn"
              >
                <FaLinkedinIn size={25} color="black" />
              </a>
            </Col>
            <Col sm={2} className="d-flex justify-content-center">
              <a
                href="https://www.instagram.com/awesomeinclex/"
                aria-label="Visit our Instagram"
              >
                <FaInstagram size={25} color="black" />
              </a>
            </Col>
            <Col sm={2} className="d-flex justify-content-center">
              <a
                href="https://www.youtube.com/user/AincTelevision/featured"
                aria-label="Visit our Youtube"
              >
                <FaYoutube size={25} color="black" />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export const query_links = graphql`
  query {
    allSanityLinks {
      nodes {
        links {
          title
          url
        }
      }
    }
  }
`;

export default LinksPage;

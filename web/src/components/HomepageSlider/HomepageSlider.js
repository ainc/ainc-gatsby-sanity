import React, { useRef } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import BrandLink from "../UI/BrandLink/BrandLink";
import Subtitle from "../UI/Subtitle/Subtitle";
import Title from "../UI/Title/Title";
import Wrapper from "../UI/Wrapper/Wrapper";

const HomepageSlider = (props) => {
  const { scrollToSection, sectionIds } = props;

  const query = useStaticQuery(graphql`
    query imageSlider {
      sanityImageSlider(title: { eq: "Homepage Slider" }) {
        title
        slides {
          title
          subtitle
          cta {
            title
            url
          }
          image {
            asset {
              gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  const slides = query.sanityImageSlider.slides || {};
  return (
    <Carousel controls={false}>
      {slides.map((slide, i) => (
        <Carousel.Item key={i}>
          <div
              style={{
                position: "relative",
                height: "100vh",          
                width: "100%",            
                overflow: "hidden",
                    }}
          >
              <GatsbyImage
                image={getImage(slide.image.asset)}
                alt={slide.image.alt || slide.title || "Slide background"}
                style={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  objectFit: "cover",
                  objectPosition: "center center",
                  zIndex: 0,
                      }}
                />
            <Wrapper>
              <Container className="mb-3 d-flex align-content-center flex-wrap h-100">
                <Row>
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ zIndex: 2 }}
                  >
                    <Subtitle className="text-white">{slide.subtitle}</Subtitle>
                    <Title className="mb-3 text-white">{slide.title}</Title>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.0, duration: 0.6 }}
                  >
                    <Col>
                      <BrandLink href={slide.cta.url} className="mt-3">
                        Learn More
                      </BrandLink>
                    </Col>
                  </motion.div>
                </Row>
              </Container>
            </Wrapper>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomepageSlider;

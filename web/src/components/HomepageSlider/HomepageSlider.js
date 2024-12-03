import React, { useRef, useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import BrandButton from "../UI/BrandButton/BrandButton";
import Subtitle from "../UI/Subtitle/Subtitle";
import Title from "../UI/Title/Title";
import Wrapper from "../UI/Wrapper/Wrapper";

import "./HomepageSlider.css";

const HomepageSlider = (props) => {
  const { scrollToSection, sectionIds } = props;

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setStartAnimation(true);
  }, []);

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
              url
            }
          }
        }
      }
    }
  `);

  const slides = query.sanityImageSlider.slides || [];

  return (
    <Carousel controls={false}>
      {slides.map((slide, i) => {
        return (
          <Carousel.Item key={i}>
            <div
              style={{
                backgroundAttachment: "fixed",
                backgroundImage: `url(${slide.image.asset.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "scroll", // for safari
                height: "100vh",
                backgroundPosition: "center center",
              }}
            >
              <Wrapper>
                <Container className="mb-3 d-flex align-content-center flex-wrap h-100">
                  <Row>
                    {/* Content */}
                    <motion.div
                      className={`slider-content ${startAnimation ? "animate" : ""}`}
                      initial={false}
                      animate={startAnimation ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <Subtitle className="text-white">{slide.subtitle}</Subtitle>
                      <Title className="mb-3 text-white">{slide.title}</Title>
                    </motion.div>

                    {/* Button */}
                    <motion.div
                      className={`slider-button ${startAnimation ? "animate" : ""}`}
                      initial={false}
                      animate={startAnimation ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.0, duration: 0.6 }}
                    >
                      <Col>
                        <BrandButton
                          onClick={() => scrollToSection(sectionIds[i])}
                          href={slide.cta.url}
                          className="mt-3"
                        >
                          Learn More
                        </BrandButton>
                      </Col>
                    </motion.div>
                  </Row>
                </Container>
              </Wrapper>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HomepageSlider;

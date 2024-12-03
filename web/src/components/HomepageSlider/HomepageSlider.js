import React, { useRef, useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import BrandButton from "../UI/BrandButton/BrandButton";
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
        // Refs for the elements
        const contentRef = useRef(null);
        const buttonRef = useRef(null);

        // State variables to control animation
        const [startContentAnimation, setStartContentAnimation] = useState(false);
        const [startButtonAnimation, setStartButtonAnimation] = useState(false);

        // Effect for content animation
        useEffect(() => {
          if (contentRef.current) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setStartContentAnimation(true);
                  observer.disconnect();
                }
              },
              { threshold: 0.1 }
            );
            observer.observe(contentRef.current);

            return () => {
              observer.disconnect();
            };
          }
        }, [contentRef]);

        // Effect for button animation
        useEffect(() => {
          if (buttonRef.current) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setStartButtonAnimation(true);
                  observer.disconnect();
                }
              },
              { threshold: 0.1 }
            );
            observer.observe(buttonRef.current);

            return () => {
              observer.disconnect();
            };
          }
        }, [buttonRef]);

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
                    {/* Correct ref and animation control for content */}
                    <motion.div
                      ref={contentRef}
                      initial={{ opacity: 0, y: -50 }}
                      animate={startContentAnimation ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <Subtitle className="text-white">{slide.subtitle}</Subtitle>
                      <Title className="mb-3 text-white">{slide.title}</Title>
                    </motion.div>

                    {/* Correct ref and animation control for button */}
                    <motion.div
                      ref={buttonRef}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={startButtonAnimation ? { opacity: 1, scale: 1 } : {}}
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

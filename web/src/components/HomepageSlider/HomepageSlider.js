import React, {useRef} from "react";
import { graphql, Link, useStaticQuery } from 'gatsby'
import { motion, useInView } from "framer-motion";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Container, Row, Col, Carousel} from "react-bootstrap"

import BrandButton from "../UI/BrandButton/BrandButton";
import Subtitle from "../UI/Subtitle/Subtitle";
import Title from "../UI/Title/Title";
import Wrapper from "../UI/Wrapper/Wrapper";

const isSSR = typeof window === "undefined";

const HomepageSlider = (props) => {
  const {scrollToSection, sectionIds} = props

  /* Old slider
  const  [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2500)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )*/

  const query = useStaticQuery(graphql`
    query imageSlider {
      sanityImageSlider(title: {eq: "Homepage Slider"}) {
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

  const slides = (query.sanityImageSlider.slides || {});

  return (
    <Carousel controls={false}>
      {slides.map((slide, i) => {
        const contentRef = useRef(null);
        const isContentInView = useInView(contentRef, { once: true });

        const buttonRef = useRef(null);
        const isButtonInView = useInView(buttonRef, { once: true });

        return (
          <Carousel.Item key={i}>
          <div
            style={{
              backgroundAttachment: 'fixed',
              backgroundImage: `url(${slide.image.asset.url})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundAttachment: 'scroll', // for safari
              height: '100vh',
              backgroundPosition: 'center center',
            }}
          >
            <Wrapper>
              <Container className="mb-3 d-flex align-content-center flex-wrap h-100">
                    <Row>
                      <motion.div
                        ref={buttonRef}
                        initial={isSSR ? false : { opacity: 0, scale: 0.5 }}
                        animate={isButtonInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 1.0, duration: 0.6 }}
                      >
                        <Subtitle className="text-white">{slide.subtitle}</Subtitle>
                        <Title className="mb-3 text-white">{slide.title}</Title>
                      </motion.div>
                      
                      <motion.div
                        ref={buttonRef}
                        initial={isSSR ? false : { opacity: 0, scale: 0.5 }}
                        animate={isButtonInView ? { opacity: 1, scale: 1 } : {}}
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
        )  
      })}
    </Carousel>
    
  );
};

export default HomepageSlider;
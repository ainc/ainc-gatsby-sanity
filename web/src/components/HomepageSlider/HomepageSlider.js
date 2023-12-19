import React, {useRef} from "react";
import { graphql, Link, useStaticQuery } from 'gatsby'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Container, Row, Col } from "react-bootstrap"

import BrandButton from "../UI/BrandButton/BrandButton";
import Subtitle from "../UI/Subtitle/Subtitle";
import Title from "../UI/Title/Title";
import Wrapper from "../UI/Wrapper/Wrapper";

const HomepageSlider = (props) => {
  const {scrollToSection, sectionIds} = props

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
  )

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
    <>
      <div ref={sliderRef} className={`keen-slider`}>
      {slides.map((slide,i) => (
        <div className={`keen-slider__slide number-slide${i}`} key={i}>
          <div style={{ 
              backgroundAttachment: 'fixed',
              backgroundImage: `url(${slide.image.asset.url})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundAttachment: 'scroll',
              height: '100vh',
              backgroundPosition: 'center center',
            }}
          >
            <Wrapper>
              <Container className="mb-3 d-flex align-content-center flex-wrap h-100">
                  <Row>
                    <Subtitle className="text-white">{slide.subtitle}</Subtitle>
                    <Title className="mb-3 text-white">{slide.title}</Title>
                    <Col>
                      <BrandButton onClick={() => scrollToSection(sectionIds[i])}  href='slide.cta.url' className="mt-3">Learn More</BrandButton>
                    </Col>
                  </Row>
              </Container>
            </Wrapper>
          </div>
        </div>
      ))}
      </div>
    </>
    
  );
};

export default HomepageSlider;
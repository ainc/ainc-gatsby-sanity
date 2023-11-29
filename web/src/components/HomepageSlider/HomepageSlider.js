import React, {useRef} from "react";
import { graphql, Link, useStaticQuery } from 'gatsby'
// JSX
import HeroSlider, { Slide, Nav, Overlay } from "hero-slider";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";
import BrandButton from "../UI/BrandButton/BrandButton";
import { Container, Row } from "react-bootstrap"

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
          }, 2000)
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
      <div ref={sliderRef} className="keen-slider">
      {slides.map((slide,i) => (
        <div className={`keen-slider__slide number-slide${i}`} key={i}>
          <div style={{ 
              backgroundAttachment: 'fixed',
              backgroundImage: `url(${slide.image.asset.url})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="vw-100 vh-100"
          >
            <Container className="mb-3 h-100">
              <div className="d-flex align-content-center flex-wrap h-100">
                <div className="row">
                  <Subtitle className="text-white">{slide.subtitle}</Subtitle>
                  <Title className="mb-3 text-white">{slide.title}</Title>
                  <BrandButton onClick={() => scrollToSection(sectionIds[i])}  href="{slide.cta.url}" className="mt-3">{slide.cta.title}</BrandButton>
                </div>
              </div>
            </Container>
          </div>
        </div>
      ))}
      </div>
    </>
    
  );
};

export default HomepageSlider;

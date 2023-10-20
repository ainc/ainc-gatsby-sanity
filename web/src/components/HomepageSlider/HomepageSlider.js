import React, {useRef} from "react";
import { graphql, Link, useStaticQuery } from 'gatsby'
// JSX
import HeroSlider, { Slide, Nav, Overlay } from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";
import BrandButton from "../UI/BrandButton/BrandButton";
// import { ButtonContainer } from "./BasicSlider.module.scss"
import { Container } from "react-bootstrap"

const HomepageSlider = (props) => {
  const {scrollToSection, sectionIds} = props
  



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
    <HeroSlider
      // slidingAnimation="left_to_right"
      // orientation="horizontal"
      // initialSlide={1}
      // onBeforeChange={(previousSlide, nextSlide) =>
      //   console.log("onBeforeChange", previousSlide, nextSlide)
      // }
      // onChange={nextSlide => console.log("onChange", nextSlide)}
      // onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      // style={{
      //   backgroundColor: "rgba(0, 0, 0, 0.33)"
      // }}
      // settings={{
      //   slidingDuration: 250, 
      //   slidingDelay: 100,
      //   shouldAutoplay: true,
      //   shouldDisplayButtons: true,
      //   autoplayDuration: 5000,
      //   height: "100vh"
      // }}
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
      autoplay
      height={"100vh"}
    >
      {slides.map((slide,i) => (
        <Overlay key={i}>
          <Slide
            background={{
              backgroundImageSrc: slide.image.asset.url,
              backgroundAttachment: "fixed",
            }}
            >
            <Wrapper>
              <Container className="mb-3">
                <Subtitle className="text-white">{slide.subtitle}</Subtitle>
                <Title className="mb-3 text-white">{slide.title}</Title>
                <BrandButton onClick={() => scrollToSection(sectionIds[i])}  href="{slide.cta.url}" className="mt-3">{slide.cta.title}</BrandButton>
              </Container>
            </Wrapper>
          </Slide>
        </Overlay>
      ))}
      <Nav />
    </HeroSlider>
    
  );
};

export default HomepageSlider;

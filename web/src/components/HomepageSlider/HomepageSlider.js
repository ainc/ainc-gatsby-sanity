import React from "react";
import { graphql, Link, useStaticQuery } from 'gatsby'
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";
import BrandButton from "../UI/BrandButton/BrandButton"
// import { ButtonContainer } from "./BasicSlider.module.scss"
import { Container } from "react-bootstrap"

// TODO: Convert these images to GatsbyImage and use Sanity to source them
const workspace_hero_image = "../HomepageSlider/"
const bootcamp_hero_image = "./hero-image-2-min.jpg"
const fellowship_hero_image = "./hero-image-3-min.jpg"

// Images
// const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const HomepageSlider = props => {

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
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      // onBeforeChange={(previousSlide, nextSlide) =>
      //   console.log("onBeforeChange", previousSlide, nextSlide)
      // }
      // onChange={nextSlide => console.log("onChange", nextSlide)}
      // onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 250, 
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "100vh"
      }}
    >
      {slides.map((slide,i) => (
        <OverlayContainer key={i}>
          <Slide
            background={{
              backgroundImage: slide.image.asset.url,
              backgroundAttachment: "fixed"
            }}
            >
            <Wrapper>
              <Container className="mb-3">
                <Subtitle className="text-white">{slide.subtitle}</Subtitle>
                <Title className="mb-3 text-white">{slide.title}</Title>
                <BrandButton href="{slide.cta.url}" className="mt-3">{slide.cta.title}</BrandButton>
              </Container>
            </Wrapper>
          </Slide>
        </OverlayContainer>
      ))}
      <Nav />
    </HeroSlider>

    
  );
};

export default HomepageSlider;

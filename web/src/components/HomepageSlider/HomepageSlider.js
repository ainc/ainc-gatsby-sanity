import React from 'react';
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Wrapper from "../UI/Wrapper/Wrapper";
import { Container, Row, Col } from "react-bootstrap"
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";
import BrandButton from "../UI/BrandButton/BrandButton";

export default ({ preload, sectionIds }) => {
  const sliderRef = React.useRef(null);
  
  const [slider, setSlider] = React.useState(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState([])

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

  React.useEffect(() => {
    const slider_new = new KeenSlider(sliderRef.current, {
      initialSlide: currentSlide,
      changed: (idx) => {
        setCurrentSlide(idx)
      }  
    }) 
    setSlider(slider_new)
    return () => {
      slider_new.destroy() 
    };
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      const new_loaded = [...loaded]
      new_loaded[currentSlide] = true
      setLoaded(new_loaded)
    },500)
  }, [currentSlide])
  


  function getLoaded(){
    return loaded
  }

  
  return  <div className="slider-wrapper">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__track">
                {
                  slides.map((image, i) => { 
                    return (
                      <div className={`keen-slider__slide number-slide`}>
                        <div style={{ 
                              backgroundAttachment: 'fixed',
                              backgroundImage: `url(${image.image.asset.url})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                              height: '100vh',
                              backgroundPosition: 'center center',
                            }}
                          >
                          <Wrapper>
                            <Container className="mb-3 d-flex align-content-center flex-wrap h-100">
                                <Row>
                                  <Subtitle className="text-white">{image.subtitle}</Subtitle>
                                  <Title className="mb-3 text-white">{image.title}</Title>
                                  <Col>
                                    <BrandButton onClick={() => scrollToSection(sectionIds[i])}  href='slide.cta.url' className="mt-3">Learn More</BrandButton>
                                  </Col>
                                </Row>
                            </Container>
                          </Wrapper>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
};

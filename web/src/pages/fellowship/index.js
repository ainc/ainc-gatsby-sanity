import React, { useState } from "react";
import Layout from '../../components/Layout/Layout'
import { graphql, Link, Img } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import SEO from '../../components/seo'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import PerksIcon from '/src/assets/svg/perks.svg'
import PortfolioIcon from '/src/assets/svg/portfolio.svg'
import MentorsIcon from '/src/assets/svg/mentors.svg'
import Title from '../../components/UI/Title/Title'
import Subtitle from '../../components/UI/Subtitle/Subtitle'
import BrandButton from "../../components/UI/BrandButton/BrandButton"
import "../../styles/main.scss"
import * as styles from './fellowship.module.scss'
import * as footerStyles from '../../components/Footer/Footer.module.scss'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import ApplyNowModal from "./Components/ApplyNowModal";
import ModalCustom from "../../components/Modal/ModalCustom";
import ImageOutline from '../../components/ImageOutline/ImageOutline'

/**
 * TODO:
 * Fix SVG icons, for whatever reason, some of the elements are not displaying colors correctly
 */

const FellowshipPage = ({ data }) => {
  
  const FellowshipSponsers = (data.allSanityFellowshipSponsers.nodes || {})

  const [refCallback] = useKeenSlider(
    {
      rtl: true,
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
          }, 5000)
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
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

  return (
    <Layout>
      
      {/* Header section */}
      <Container>
        <Row>
          <Col className="m-auto" xs={12} sm={4} >
            <Title className="brand" >FELLOWSHIP</Title>
            <Subtitle className="fst-italic fw-lighter fs-4 text-lowercase">A mentor-driven program for Kentucky based startups</Subtitle>
  
            <ApplyNowModal
              title="Apply Now"
              link="https://forms.zohopublic.com/virtualoffice9155/form/AwesomeFellowshipApplication/formperma/r12Y7iQP0rWYHU33MvoA15j6wO4YlTVP02EuWMwJol8"
            />

          </Col>
          <Col className="my-5 " xs={12} sm={8} >
            <ImageOutline style={{marginLeft: "7rem"}}>
              <StaticImage src="../../images/brainstorming.jpg" width={375} objectFit='cover' className='position-relative' alt="people brainstorming"/>
            </ImageOutline>
          </Col>

        </Row>
      </Container>
      
      {/* What is the fellowship */}
      <Container>
        <Row>
          <Col className="mx-auto my-5" xs={12} sm={{ offset: 1, span: 10}} lg={6}>
            <Title className="text-center text-uppercase">What is the Fellowship?</Title>
            <p className='text-center mt-3'>
              A mentor-driven program designed to accelerate your high tech startup. The program is tailored to your startup's needs and runs on a flexible timeline unique to your team, supporting your startup for up to one year.
            </p>
          </Col>
        </Row>
      </Container>

      {/* perks, portfolio and mentors */}
      <Container>
        <Row>
          <Col className="mx-auto my-2" xs={12} sm={{ offset: 1, span: 10}} lg={{ offset: 3, span: 6}} >
            <Row>
              <Col className="m-auto text-center" xs={4}>
                {/* <div > */}
                <a href="/fellowship/perks" aria-label="Perks of the fellowship">
                <StaticImage 
                  className='mx-auto d-block img-fluid' 
                  quality='100' 
                  src='../../assets/svg/perks.svg' 
                  alt="Devices icon"
                  layout='fixed'
                />
                </a>
                <Subtitle className={`${styles.iconTitle} text-center fw-bold mt-2`}>Perks</Subtitle>
                {/* </div> */}
              </Col>
              <Col className="m-auto text-center" xs={4}>
              {/* <div className="m-auto text-center text-wrap"> */}
              <a href="/mentors" aria-label="Mentors of the fellowship">
                <StaticImage 
                  className='mx-auto d-block img-fluid' 
                  quality='100' 
                  src='../../assets/svg/mentors.svg' 
                  alt="Devices icon"
                  layout='fixed'
                />
                </a>
                <Subtitle className={`${styles.iconTitle} text-center fw-bold mt-2`}>Mentors</Subtitle>
                {/* </div> */}
              </Col>
              <Col className="m-auto text-center" xs={4}>
              {/* <div className="m-auto text-center"> */}
                <a href="/fellowship/portfolio" aria-label="Read our fellowship portfolio">
                  <StaticImage 
                    className='mx-auto d-block img-fluid' 
                    quality='100' 
                    src='../../assets/svg/portfolio.svg' 
                    alt="Devices icon"
                    layout='fixed'
                  />
                </a>
                <Subtitle className={`${styles.iconTitle} text-center fw-bold mt-2`} >Portfolio</Subtitle>
                {/* </div> */}
              </Col>

            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mb-5 mt-4">
          <Col className="d-flex justify-content-center">
          <ApplyNowModal
          title="Apply Now"
          link="https://forms.zohopublic.com/virtualoffice9155/form/AwesomeFellowshipApplication/formperma/r12Y7iQP0rWYHU33MvoA15j6wO4YlTVP02EuWMwJol8"/>
          </Col>

        </Row>
      </Container>

      {/* how it works */}
      <Container>
        <Row className="my-5">
          <Col xs={8} sm={6}>
          <a onClick={handleShow}  id="video-btn" href='#!'>
            <StaticImage src="../../images/fellowship-video-macbook.png" className="position-relative" alt="Macbook with video"/>
          </a>
          <ModalCustom 
          lgShow = {lgShow} 
          hide = {handleClose}
          bgDark = {false} 
          centered
          content = {
          <iframe 
          width="100%" 
          height="500" 
          src="https://www.youtube.com/embed/IlLYF7VwiD8?si=L7HdAvUqlppI9SgM"
          title="YouTube video player"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
          }/>
          </Col>
          <Col xs={4} sm={6}>
            <Title>How it Works</Title>
            <StaticImage src="../../images/arrow-red.png" alt="red arrow"/>
          </Col>
        </Row>
      </Container>

      {/* testimonials */}
      <Container fluid className="background--grey">
        <Row className="my-5">
          <Col xs={12} className="m-auto">
            <Container className="double-border--brand my-5">
              <div ref={refCallback} className="keen-slider d-flex align-items-center">
                <div className="keen-slider__slide">
                  <p className="text-center text--white mb-1 mt-3">
                    Our company took advantage of all of the services. They were incredibly helpful and well-timed for us.
                  </p>
                  <p className='text-center fst-italic text-white mb-3'> 
                  {/* changed text from grey to white for better contrast, but lighter grey is probably better */}
                    Kirsten Moorefield
                  </p>
                </div>
                <div className="keen-slider__slide">
                  <p className="text-center text--white mb-1 mt-3">
                    The Fellowship Program has been an incredible resource in Kentucky as WeatherCheck grows. Our team utilized many of the resources offered while we were in the program.
                  </p>
                  <p className='text-center fst-italic text-white mb-3'>
                    Demetrius Gray
                  </p>
                </div>
                <div className="keen-slider__slide">
                  <p className='text-center text--white mb-1 mt-3'>
                    The network I've developed through the Fellowship program includes some of my most trusted advisors as well as my lead investors.
                  </p>
                  <p className='text-center fst-italic text-white mb-3'>
                    Josh Lau
                  </p>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      
      {/* Our Approach (What we provide) */}
      <Container className="my-5">
        <Row>
          <Col className='col-md-auto mr-5'>
            <Title className='text-center mb-4'>Our Approach</Title>
            <StaticImage className={styles.img} src='../../images/approach.png' alt="Fellowship approach diagram" />
          </Col>
          <Col className="d-flex align-items-center mx-5">
            <Container>
              <Row className='my-4'>
                  <Title className="fs-5" style={{"letterSpacing": "0rem"}}>Our Fellowship program provides:</Title>
              </Row>
              <Row>
                <div className="fs-6" style={{"letterSpacing": "0rem"}}>
                  <ul>
                    <li className="my-2">Access to our network of over 85 mentors</li>
                    <li className="my-2">Web development, video, and graphic design services</li>
                    <li className="my-2">24/7 Access to Awesome Inc co-working space</li>
                    <li className="my-2">Access to pro bono legal and accounting services</li>
                  </ul>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="d-flex justify-content-center">
          <ApplyNowModal 
          title="Apply Now"
          link="https://forms.zohopublic.com/virtualoffice9155/form/AwesomeFellowshipApplication/formperma/r12Y7iQP0rWYHU33MvoA15j6wO4YlTVP02EuWMwJol8"/>
          </Col>
        </Row>
      </Container>
      
      {/* Sponsors */}
      <div className={`${footerStyles.footerBackground} text-center pt-5 pb-1`}>
        <Col className="col-md-auto">
        <Title className="text-center text-white mb-5">FELLOWSHIP SPONSORS</Title>
          <Row className={`mx-auto col-sm-6`} style={{"letterSpacing": "0rem"}}> {/*Change the "col-sm-6" higher or lower to change total column width*/}
            {FellowshipSponsers.map((node,i) => {
              if ((node._rawSponserLogo) == null){
                return(
                  <Col xs="5" sm="3" className={`${styles.sponsor} text-center`} key={i}>
                    <a href={node.sponserWebsite} aria-label="Visit {node.sponser}'s site">
                      <div className='m-2'>
                        <h2 className='fs-4'>{node.sponser}</h2>
                      </div>
                    </a>
                  </Col>
                )
              }else{
                return (
                  <Col xs="5" sm="3" className={`${styles.sponsor} text-center`} key={i}>
                    <a href={node.sponserWebsite} aria-label="Visit {node.sponser}'s site">
                      <div className=''>
                        <img src={node._rawSponserLogo.asset.url} alt={node.sponser} className="img-fluid"/>
                      </div>
                    </a>
                  </Col> 
                ) 
              }
              })}
          </Row>
          </Col>
      </div>
    </Layout>
  )
}

export const query_sponsers = graphql`
query {
  allSanityFellowshipSponsers(sort: {_rawSponserLogo: ASC}) {
    nodes {
      sponser
      sponserWebsite
      _rawSponserLogo(resolveReferences: {maxDepth: 10})
    }
  }
}
`

export default FellowshipPage;
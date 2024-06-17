import React, { useState } from "react";
import { graphql } from 'gatsby'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from "framer-motion";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import ApplyNowModal from "./Components/ApplyNowModal";
import Layout from '../../components/Layout/Layout'
import ImageOutline from '../../components/ImageOutline/ImageOutline'
import ModalCustom from "../../components/Modal/ModalCustom";
import Subtitle from '../../components/UI/Subtitle/Subtitle'
import Title from '../../components/UI/Title/Title'
import KPIBoxes from "./Components/KPIBox/KPIBox";
import "../../styles/main.scss"
import * as styles from './fellowship.module.scss'

/**
 * TODO:
 * Fix SVG icons, for whatever reason, some of the elements are not displaying colors correctly
 */

const FellowshipPage = ({ data }) => {
  
  const FellowshipSponsers = (data.allSanityFellowshipSponsers.nodes || {})
  const fellowshipKPIs = (data.allSanityFellowshipKpIs.nodes[0] || {} )
  console.log(fellowshipKPIs)
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
          <Col className="m-auto" xs={12} sm={4} md={4}>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}>
            <Title className="brand pl-5 mt-3">FELLOWSHIP</Title>
            <Subtitle className="fw-lighter fs-4">A one year, mentor-driven program designed to accelerate your high tech startup.</Subtitle>
            
            <ApplyNowModal
              title="Apply Now"
              link="https://forms.zohopublic.com/virtualoffice9155/form/AwesomeFellowshipApplication/formperma/r12Y7iQP0rWYHU33MvoA15j6wO4YlTVP02EuWMwJol8"
            />
            </motion.div>
          </Col>
          <Col className="my-4" xs={12} sm={6} >
            <ImageOutline style={{marginLeft: "1rem"}}>
              <StaticImage placeholder="blurred" src="../../images/fellowship_header.jpg" width={400} objectFit='cover' className='position-relative' alt="people brainstorming"/>
            </ImageOutline>
          </Col>

        </Row>
      </Container>
    

      {/*KPI's */}
      <Container className='my-5'>
        <Row className='d-flex justify-content-center align-items-center flex-sm-column flex-md-row'>
          <Title className="text-center text-uppercase">Fellowship Metrics</Title>

          <Col className='d-flex justify-content-center align-items-center py-2'>
            <KPIBoxes title={fellowshipKPIs.companiesServed} subtitle='Portfolio Companies' />
          </Col>
          <Col className='d-flex justify-content-center align-items-center py-2'>
            <KPIBoxes className='' title={fellowshipKPIs.investmentRaised} subtitle=' Outside Investment Raised' />
          </Col>
          <Col className='d-flex justify-content-center align-items-center py-2'>
            <KPIBoxes className='' title={fellowshipKPIs.jobsCreated} subtitle='Jobs Created' />
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
      
      {/* perks, portfolio and mentors */}
      <Container className='py-5'>
        <Row className=''>
              <Col className="m-auto text-center" >
                {/* <div > */}
                <motion.div initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 1 }}>
                <a href="/fellowship/perks" aria-label="Perks of the fellowship">
                <StaticImage placeholder="blurred" 
                  className='mx-auto d-block img-fluid' 
                  quality='100' 
                  src='../../assets/svg/perks.svg' 
                  alt="Devices icon"
                  layout='fixed'
                />
                </a>
                <a href="/fellowship/perks" aria-label="Perks of the fellowship">
                  <BrandButton className={`text-center mt-2`}>Perks</BrandButton>
                </a>
                </motion.div>
                {/* </div> */}
              </Col>
              <Col className="m-auto text-center" >
              {/* <div className="m-auto text-center text-wrap"> */}
              <motion.div initial={{ opacity: 0, y: -50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 1 }}>
              <a href="/mentors" aria-label="Mentors of the fellowship">
                <StaticImage placeholder="blurred" 
                  className='mx-auto d-block img-fluid' 
                  quality='100' 
                  src='../../assets/svg/mentors.svg' 
                  alt="Devices icon"
                  layout='fixed'
                />
                </a>
                <a href="/mentors" aria-label="Mentors of the fellowship">
                  <BrandButton className={` text-center mt-2`}>Mentors</BrandButton>
                </a>
                </motion.div>
                {/* </div> */}
              </Col>
              <Col className="m-auto text-center" >
              {/* <div className="m-auto text-center"> */}
              <motion.div initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 1 }}>
                <a href="/fellowship/portfolio" aria-label="Read our fellowship portfolio">
                  <StaticImage placeholder="blurred" 
                    className='mx-auto d-block img-fluid' 
                    quality='100' 
                    src='../../assets/svg/portfolio.svg' 
                    alt="Devices icon"
                    layout='fixed'
                  />
                </a>
                <a href="/fellowship/portfolio" aria-label="Read our fellowship portfolio">
                  <BrandButton className={`text-center mt-2`} >Portfolio</BrandButton>
                </a>
                </motion.div>
                {/* </div> */}
              </Col>

        </Row>
      </Container>

      {/* how it works */}
      <Container fluid className='py-3 d-flex justify-content-center align-items-center' style={{backgroundColor: '#E6E7E8'}}>
        <Row className="my-5">
          <Col xs={8} sm={6}>
          <a onClick={handleShow}  id="video-btn" href='#!'>
            <StaticImage placeholder="blurred" src="../../images/fellowship-video-macbook.png" className="position-relative" alt="Macbook with video"/>
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
            <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}>
            <StaticImage placeholder="blurred" src="../../images/arrow-red.png" alt="red arrow" width={150}/>
            </motion.div>
          </Col>
        </Row>
      </Container>
      
      {/* Our Approach (What we provide) */}
      <Container className="my-5">
        <Row>
          <Col className='col-md-auto mr-5 text-center'>
            <Title className='text-center mb-4'>Our Approach</Title>
            <StaticImage placeholder="blurred" className={styles.img} src='../../images/approach.png' alt="Fellowship approach diagram" />
          </Col>
          <Col className="d-flex align-items-center mx-5">
            <Container>
              <Row className='my-4'>
                  <Title className="fs-5" style={{"letterSpacing": "0rem"}}>Our Fellowship program provides:</Title>
              </Row>
              <Row>
                <div className="fs-6" style={{"letterSpacing": "0rem"}}>
                  <motion.div initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.5, duration: 1 }}>
                  <ul>
                    <li className="my-2">Access to our network of over 85 mentors</li>
                    <li className="my-2">Web development, video, and graphic design services</li>
                    <li className="my-2">24/7 Access to Awesome Inc co-working space</li>
                    <li className="my-2">Access to pro bono legal and accounting services</li>
                  </ul>
                  </motion.div>
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
      <div className={`${styles.sponsorBackground} text-center pt-5 pb-1`}>
        <Col className="col-md-auto">
        <Title className="text-center text-white mb-5">FELLOWSHIP SPONSORS</Title>
          <Row className={`mx-auto col-sm-6 d-flex justify-content-center`} style={{"letterSpacing": "0rem"}}> {/*Change the "col-sm-6" higher or lower to change total column width*/}
            {FellowshipSponsers.map((node,i) => {
              if ((node._rawSponserLogo) == null){
                return(
                  <Col xs="5" sm="3" className={`${styles.sponsor} text-center`} key={i}>
                    <a href={node.sponserWebsite} aria-label="Visit {node.sponser}'s site">
                      <div className='m-2'>
                        <h4 className=''>{node.sponser}</h4>
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
  allSanityFellowshipKpIs(sort: {_updatedAt: DESC}) {
    nodes {
      companiesServed
      investmentRaised
      jobsCreated
    }
  }
}
`

export default FellowshipPage;
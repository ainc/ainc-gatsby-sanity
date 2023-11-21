import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout/Layout'
import Diagonal from '../../components/Layout/Diagonal/Diagonal'
import ImageOutline from '../../components/ImageOutline/ImageOutline'
import { Container, Row, Col } from 'react-bootstrap'
import SEO from '../../components/seo'
import { StaticImage, getImage } from 'gatsby-plugin-image'
import Title from '../../components/UI/Title/Title'
import BrandButton from '../../components/UI/BrandButton/BrandButton'
import { headerBackgroundAlignRight, tbDiv, teamButton, diagonalBackground } from "./internships.module.scss";
import '../../styles/main.scss'
import internWhy from '/src/images/intern-why.jpg';
import { useState } from 'react'
import ModalCustom from '../../components/Modal/ModalCustom'
import ModalButton from '../../components/ModalButton/ModalButton'
//import ButtonAndImage from '../../components/ButtonAndImage/ButtonAndImage'

const InternshipsPage = ({ data }) => {
  //define show and close functions for all of the modals- had to do it this way because ButtonAndImage was not displaying images correctly
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);
  
  return (
    <Layout>
      
      {/* Header section */}
      <Container fluid className={`mobile-hide-bg ${headerBackgroundAlignRight}`}>
        <Container className='mb-5'>
          <Row>
            <Col md={7}>
              <Title className="text-uppercase mt-5">Looking for an Internship?</Title>
              <p>
                If you’re looking to build your skillset with real projects while building the tech and startup community in Lexington, we’d love to chat. Did we mention we eat a *lot* of Oreos.
              </p>
              <a href="https://careers.awesomeinc.org/jobs/Careers/649925000000610353/Team-Alpha---Internship?source=CareerSite"
                target ="_blank" rel="noopener noreferrer">
                <BrandButton className='my-4'>Apply Now</BrandButton>
              </a>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Why section */}
      <div className={`${diagonalBackground}`}>
        <Container>
          <Row>      
            <Col md={8}>
              <Title className='text-white text-uppercase my-5'>About Team Alpha</Title>
              <p className='text-white my-5'>
                Our interns, or Team Alpha as we prefer, are integral parts in helping us make Lexington a better place to live and work. We want you to bring your passion, curiosity, determination, and healthy disregard of the fear of failure. Together, we can grow the tech and startup ecosystem and we promise not to take ourselves too seriously while we’re at it.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Teams section */}
      <Container className='my-5'>
        <Row>
          <Title className='text-center text-uppercase my-5'>Find the Right Team for You</Title>
        </Row>
        <Row className='justify-content-center'>
          <Col md={6} lg={4}>
          <div className={`${tbDiv}`}>
            <ImageOutline>
              <StaticImage className='img-red-outline' src='../../images/intern-video.jpg' alt='Video Intern'/>
            </ImageOutline>
            <ModalButton to="https://www.youtube.com/embed/Xhs6weqDvfg?si=VAty1-G7uhTV5JeU">Video</ModalButton>
          </div>
          </Col>
          <Col md={6} lg={4}>
          <div className={`${tbDiv}`}>
            <ImageOutline>
              <StaticImage className='img-red-outline' src='../../images/intern-development.jpg' alt='Development Intern'/>
            </ImageOutline>
            <ModalButton to="https://www.youtube.com/embed/sflZ2tFXMIY?si=wYiNsRS6-4wJu8GV&amp;controls=0">Development</ModalButton>
          </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={6} lg={4}>
          <div className={`${tbDiv}`}>
            <ImageOutline>
              <StaticImage className='img-red-outline' src='../../images/intern-events-marketing.jpg' alt='Events and Marketing Intern'/>
            </ImageOutline>
            <ModalButton to="https://www.youtube.com/embed/kyp3acHFCZA?si=quXJIkj8x57EL-3F">Events + Marketing</ModalButton>
          </div>
          </Col>
          <Col md={6} lg={4}>
          <div className={`${tbDiv}`}>
            <ImageOutline>
              <StaticImage className='img-red-outline' src='../../images/intern-design.jpg' alt='Design Intern'/>
            </ImageOutline>
            <ModalButton to="https://www.youtube.com/embed/_t21lollr1c?si=fdXekYbyXoR6fXXJ">Design</ModalButton>
          </div>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
          <a href="https://careers.awesomeinc.org/jobs/Careers/649925000000610353/Team-Alpha---Internship?source=CareerSite"
            target="_blank" rel="noopener noreferrer">
              <BrandButton className='my-5'>Apply Now</BrandButton>
          </a>
            
          </Col>
        </Row>
      </Container>

      {/* Who We Look For section */}
      <Container className='my-5'>
        <Row className='text-center'>
          <Col>
            <a href="https://www.youtube.com/watch?v=OCG3FIviexc" target='_blank'>
              <BrandButton className='secondary mb-5'>Watch Video</BrandButton>
            </a>
            
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={8} lg={7}>
            <Title className='text-center text-uppercase my-6'>Who We're Looking For</Title>
            <p style={{textAlign:'justify'}}>
              We’re looking for interns to join any of our teams for a 20ish week internship in Lexington, KY. Interns produce compelling videos to tell stories that matter, create web applications that improve processes and efficiency, build community by bringing people together through our communication channels, and design visual graphics that keep all of the above creative and cohesive.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Why Join section */}
      <Container fluid className='my-5 py-5' style={{backgroundColor:'#323232'}}>
        <Container>
          <Row className='justify-content-center'>
            <Col className='text-center my-auto' xs={12} md={5} lg={3}>
              <StaticImage src='../../images/question.png' alt="Question mark logo" width={250} />
            </Col>
            <Col className='my-2 d-block d-md-none' xs={12}/>
            <Col xs='auto'>
              <Title className='text--bright-red text-uppercase' style={{writingMode:'vertical-lr', transform:'rotate(180deg)', margin:'0px'}}>Why Join?</Title>
            </Col>
            <Col xs={7} md={5} lg={7} xl={6}>
              <h2 className='text-white d-flex align-items-center fs-5' style={{textAlign:'justify'}}>
                In addition to the free t-shirt, we’ll provide you with an opportunity to improve your skills, portfolio and network. Our goal is to assure you the best experience by helping you achieve your goals whether that is getting into your dream school or working for your favorite company.
              </h2>
            </Col>
          </Row>
          <Row className='text-center pt-5'>
            <Col>
              <a href="https://careers.awesomeinc.org/jobs/Careers/649925000000610353/Team-Alpha---Internship?source=CareerSite" 
                target="_blank" rel="noopener noreferrer">
                <BrandButton>Apply Now</BrandButton>
              </a>
              
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Our Team section */}
      <Container className='my-5'>
        <Row className='text-center'>
          <Col xs={6} md={3}>
            <ImageOutline>
              <StaticImage objectFit='cover' src='../../images/emilywehrle-wall.jpg' alt="Headshot of Emily Wehrle" />
            </ImageOutline>
          </Col>
          <Col xs={6} md={3}>
            <ImageOutline>
              <StaticImage objectFit='cover' src='../../images/kyleraney-wall.jpg' alt="Headshot of Kyle Raney" />
            </ImageOutline>
          </Col>
          <Col className='my-4 d-block d-md-none' xs={12}/>
          <Col xs={6} md={3}>
            <ImageOutline>
              <StaticImage objectFit='cover' src='../../images/jacquelinebenson-wall.jpg' alt="Headshot of Jacqueline Benson" />
            </ImageOutline>
          </Col>
          <Col xs={6} md={3}>
            <ImageOutline>
              <StaticImage objectFit='cover' src='../../images/garrettfahrbach-wall.jpg' alt="Headshot of GarrettFahrbach" />
            </ImageOutline>
          </Col>
        </Row>
        <Row className='text-center pt-5'>
          <Col>
            <a href="../team-alpha" target="_blank" rel="noopener noreferrer">
              <BrandButton>Meet the Team</BrandButton>
            </a>
            
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default InternshipsPage;
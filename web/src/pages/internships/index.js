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
import * as styles from './internships.module.scss';
import internWhy from '/src/images/intern-why.jpg';
import { useState } from 'react'
import ModalCustom from '../../components/Modal/ModalCustom'
import ModalButton from '../../components/ModalButton/ModalButton'
import Subtitle from '../../components/UI/Subtitle/Subtitle'
//import ButtonAndImage from '../../components/ButtonAndImage/ButtonAndImage'

const InternshipsPage = ({ data }) => {
  //define show and close functions for all of the modals- had to do it this way because ButtonAndImage was not displaying images correctly
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);
  
  return (
    <Layout>
        {/* Header section */}
        <section id="header">
            <Container fluid>
              <Row className={styles.headerSection}>
                  <Col className="mt-5 offset-md-2">
                      <Title className="text-uppercase mt-5 text-white">Join Team Alpha</Title>
                      <Subtitle className='text-uppercase text-white'>Gain Real experience.</Subtitle>
                      <Subtitle className='text-uppercase text-white'>Meet Awesome People.</Subtitle>
                      <Subtitle className='text-uppercase text-white'>Eat A Lot of Oreos.</Subtitle>
                      <a href="https://careers.awesomeinc.org/jobs/Careers/649925000000610353/Team-Alpha---Internship?source=CareerSite"
                      target="_blank" rel="noopener noreferrer">
                      <BrandButton className="mt-3 mb-1">Apply Now</BrandButton>
                      </a>
                  </Col>
              </Row>
            </Container>
        </section>

      {/* What is Team Alpha Section */}
        <Container>
          <Row>
            <Col>
            {/*Team alpha image */}
            </Col>  
            <Col className='my-3'>
              <Title className='text--bright-red text-uppercase mt-5'>What is Team Alpha?</Title>
              <p className='my-5'>
                Team Alpha, Awesome Inc's internship program, is an integral part of helping accomplish our mission to make Lexington a better place
                to live and work. Our goal is to equip each intern with skill sets while gaining real-world experience by working on one of four teams:
                web development, design, videography, and marketing.
              </p>
            <a href='#team'><BrandButton className='secondary mb-5'>Find your team</BrandButton></a>
            </Col>
          </Row>
        </Container>

      {/* Teams section */}
      <section id='team'>
        <Container fluid style={{backgroundColor: '#C12029'}}>
          <Row>
            <Title className='text-center text-white text-uppercase mt-5 mb-3'>Find Your Team</Title>
            <p className='text-center text-white'>Find the team that's right for you and join our list of alumni.</p>
            <p className='text-center text-white' style={{fontStyle: 'italic'}}>(Some have gone on to work at places like Disney, Facebook, Google, Spotify, and more!)</p>
          </Row>
          <Row className='justify-content-center gx-2' style={{height: '21rem'}}>
            <Col className='col-md-2'>
                <div className={styles.tbDiv}>
                  <StaticImage style={{width: '17rem', height: '21rem', position: 'absolute', bottom: '-10%'}} src='../../images/intern-design.jpg' alt='Design Intern'/>
                  <ModalButton to="https://www.youtube.com/embed/_t21lollr1c?si=fdXekYbyXoR6fXXJ">Design</ModalButton>
                </div>
            </Col>
            <Col className='col-md-2'>
              <div className={styles.tbDiv}>
                <StaticImage style={{width: '17rem', height: '21rem' , position: 'absolute', bottom: '-10%'}} src='../../images/intern-events-marketing.jpg' alt='Events and Marketing Intern'/>
                <ModalButton to="https://www.youtube.com/embed/kyp3acHFCZA?si=quXJIkj8x57EL-3F">Marketing</ModalButton>
              </div>
            </Col>
            <Col className='col-md-2'>
              <div className={styles.tbDiv}>
                <StaticImage style={{width: '17rem', height: '21rem', position: 'absolute', bottom: '-10%'}}  src='../../images/intern-video.jpg' alt='Video Intern'/>
                <ModalButton to="https://www.youtube.com/embed/Xhs6weqDvfg?si=VAty1-G7uhTV5JeU">Video</ModalButton>
              </div>
            </Col>
            <Col className='col-md-2'>
            <div className={styles.tbDiv}>
                <StaticImage style={{width: '17rem', height: '21rem', position: 'absolute', bottom: '-10%'}} src='../../images/intern-development.jpg' alt='Development Intern'/>
                <ModalButton to="https://www.youtube.com/embed/sflZ2tFXMIY?si=wYiNsRS6-4wJu8GV&amp;controls=0">Development</ModalButton>
            </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Awesome Inc section */}
      <Container className='mt-5'>
        <Row className='mt-5'>
          <Col className='text-right mt-5'>
          <Title className='text--bright-red text-uppercase mt-5 text-right'>Why Awesome Inc?</Title>
          <p className='my-5'>
          In addition to the free t-shirt and unlimited oreos, we'll provide you with an opportunity to improve your skills,
          portfolio, and network. Since 2009, Awesome Inc has built a work hard, play ahrd culture capable of accelerating you towards your definition
          of awesome. Our goal is to give you the best experience by helping you achieve your goals; whether that is getting into your dream school, working
          for your favorite company, or starting something of your own.
          </p>
          </Col>
          <Col>
          {/*Garret/Cam flick */}
          </Col>
        </Row>
      </Container>

      {/* Our Team section */}
      <Container className='my-5'>
        <Row className='text-center'>
          <Col xs={6} md={3}>
            <a href='/team-alpha'>
            <ImageOutline>
              <StaticImage objectFit='cover' src='../../images/emilywehrle-wall.jpg' alt="Headshot of Emily Wehrle" />
            </ImageOutline>
            </a>
          </Col>
          <Col xs={6} md={3}>
          <a href='/team-alpha'>
            <ImageOutline>
              <StaticImage objectFit='cover' src='../../images/kyleraney-wall.jpg' alt="Headshot of Kyle Raney" />
            </ImageOutline>
          </a>
          </Col>
          <Col className='my-4 d-block d-md-none' xs={12}/>
          <Col xs={6} md={3}>
          <a href='/team-alpha'>
            <ImageOutline>
              <StaticImage objectFit='cover' src='../../images/jacquelinebenson-wall.jpg' alt="Headshot of Jacqueline Benson" />
            </ImageOutline>
          </a>
          </Col>
          <Col xs={6} md={3}>
          <a href='/team-alpha'>
            <ImageOutline>
              <StaticImage objectFit='cover' src='../../images/garrettfahrbach-wall.jpg' alt="Headshot of GarrettFahrbach" />
            </ImageOutline>
          </a>
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
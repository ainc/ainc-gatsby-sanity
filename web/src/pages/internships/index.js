import React, {useEffect, useState, useRef} from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout/Layout'
import Diagonal from '../../components/Layout/Diagonal/Diagonal'
import ImageOutline from '../../components/ImageOutline/ImageOutline'
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'
import SEO from '../../components/seo'
import { StaticImage, getImage, GatsbyImage} from 'gatsby-plugin-image'
import Title from '../../components/UI/Title/Title'
import BrandButton from '../../components/UI/BrandButton/BrandButton'
import * as styles from './internships.module.scss';
import './accordion.scss'
import internWhy from '/src/images/intern-why.jpg';
import ModalCustom from '../../components/Modal/ModalCustom'
import ModalButton from '../../components/ModalButton/ModalButton'
import Subtitle from '../../components/UI/Subtitle/Subtitle'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Profile from '../../components/Profile/Profile'
//import ButtonAndImage from '../../components/ButtonAndImage/ButtonAndImage'

export const query = graphql`
query MyQuery {
  allSanityInternTestimonials {
    nodes {
      cohort
      name
      team
      testimonial
      picture {
        asset {
          gatsbyImageData(width: 100, height: 100)
        }
      }
    }
  }
  allSanityTeamAlpha(filter: {name: {in: ["Kyle Raney", "Cam Sloss", "Garrett Fahrbach", "Jacqueline Benson", "Liam Chesser"]}} sort: {name:ASC}) {
    nodes {
      name
      favoritePerson
      favoriteRule
      favoriteSong
      randomFact
      role
      picture {
        asset {
          gatsbyImageData(width: 250, layout: CONSTRAINED, aspectRatio: 1)
        }
      }
    }
  }
}`;
const InternshipsPage = ({ data }) => {
  //define show and close functions for all of the modals- had to do it this way because ButtonAndImage was not displaying images correctly
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);
  const allSanityInternTestimonials = (data.allSanityInternTestimonials.nodes)
  const allTeamAlpha = (data.allSanityTeamAlpha.nodes || {})


  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (s) => {
        sliderRef.current = s;
      },
    ]
  );

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.prev();
      console.log('previous')
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.next();
      console.log('next')
    }
  };
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
          <Row className='justify-content-center' style={{height: '21rem'}}>
            <Col className='col-12 col-md-6 col-lg-2 mb-4'>
                <div className={styles.tbDiv}>
                  <StaticImage style={{height: '100%', position: 'absolute', bottom: '-12%'}} src='../../images/intern-design.jpg' alt='Design Intern'/>
                  <ModalButton to="https://www.youtube.com/embed/_t21lollr1c?si=fdXekYbyXoR6fXXJ">Design</ModalButton>
                </div>
            </Col>
            <Col className='col-12 mb-4 col-md-6 col-lg-2'>
              <div className={styles.tbDiv}>
                <StaticImage style={{height: '100%', position: 'absolute', bottom: '-12%'}} src='../../images/intern-events-marketing.jpg' alt='Events and Marketing Intern'/>
                <ModalButton to="https://www.youtube.com/embed/kyp3acHFCZA?si=quXJIkj8x57EL-3F">Marketing</ModalButton>
              </div>
            </Col>
            <Col className='col-12 mb-4 col-md-6 col-lg-2'>
              <div className={styles.tbDiv}>
                <StaticImage style={{height: '100%', position: 'absolute', bottom: '-12%'}}  src='../../images/intern-video.jpg' alt='Video Intern'/>
                <ModalButton to="https://www.youtube.com/embed/Xhs6weqDvfg?si=VAty1-G7uhTV5JeU">Video</ModalButton>
              </div>
            </Col>
            <Col className='col-12 mb-4 col-md-6 col-lg-2'>
            <div className={styles.tbDiv}>
                <StaticImage style={{height: '100%', position: 'absolute', bottom: '-12%'}} src='../../images/intern-development.jpg' alt='Development Intern'/>
                <ModalButton to="https://www.youtube.com/embed/sflZ2tFXMIY?si=wYiNsRS6-4wJu8GV&amp;controls=0">Development</ModalButton>
            </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Awesome Inc section */}
      <Container className='mt-5'>
        <Row className='mt-5'>
          <Col className='mt-5'>
          <Title className='text--bright-red text-uppercase mt-5' style={{textAlign: 'right'}}>Why Awesome Inc?</Title>
          <p className='my-5' style={{textAlign: 'right'}}>
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

      {/*Who we're looking for section */}
      <Container fluid style={{backgroundColor: '#ED3742'}}>
        <Row className=''>
          <Col className='mt-5'>
          {/*5 across flick */}
          </Col>
          <Col className='my-5'>
            <Title className='text-uppercase text-white'>Who we're looking for</Title>
            <p className='text-white'>
            High school, college, and graduate students that are eager, coachable, and a good fit for Awesome Inc's culture.
            This immersive experience in Lexington, KY typically lasts for 1-2 semesters. To learn more about what our specific requirements are, click each
            team's profile above.
            </p>
            <a href="https://careers.awesomeinc.org/jobs/Careers/649925000000610353/Team-Alpha---Internship?source=CareerSite"
            target="_blank" rel="noopener noreferrer">
              <BrandButton className='white'>Apply Now</BrandButton>
            </a>
          </Col>
        </Row>
      </Container>

      {/*Intern Testimonals */}
      <Container>
        <Row>
            <Title className='text-center mt-5 text-uppercase text--red'>Intern Testimonials</Title>
        </Row>
      </Container>
      <div style={{position: 'relative'}}>
        <div ref={sliderRef} className={`keen-slider py-5`}>
          {allSanityInternTestimonials.map((node, index) => (
            <div key={index} className="keen-slider__slide">
              <Row className='d-flex justify-content-center'>
                <Col md={6}>
                  <p className='text-justify text-center'>{node.testimonial}</p>
                </Col>
              </Row>
              <Row>
                <Col md={6} className='d-flex align-items-center justify-content-end'>
                  <GatsbyImage image={node.picture.asset.gatsbyImageData} className='rounded-circle'/>
                </Col>
                <Col className='pt-3'>
                  <Subtitle style={{color: '#C12029'}}>{node.name}</Subtitle>
                  <p className='mb-0' style={{fontStyle: 'italic'}}>{node.cohort}</p>
                  <p style={{fontStyle: 'italic'}}>{node.team}</p>
                </Col>
              </Row>
            </div>
          ))}
        </div>
        <div className='d-none d-lg-flex' style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 17rem'}}>
          <button onClick={handlePrevClick} style={{border: 'none', backgroundColor: 'transparent'}}>
            <StaticImage src='../../images/bootcamp/arrow-steps.png' alt="Previous" style={{transform: 'scaleX(-1)'}}/>
          </button>
          <button onClick={handleNextClick} style={{border: 'none', backgroundColor: 'transparent'}}>
            <StaticImage src='../../images/bootcamp/arrow-steps.png' alt="Next" />
          </button>
        </div>
      </div>

      {/*Apply Now */}
      <Container fluid>
        <Row className={`${styles.applySection} d-flex text-center align-items-center`}>
          <a href="https://careers.awesomeinc.org/jobs/Careers/649925000000610353/Team-Alpha---Internship?source=CareerSite"
          target="_blank" rel="noopener noreferrer">
            <BrandButton>Apply Now</BrandButton>
          </a>
        </Row>
      </Container>
      
      {/*FAQ section */}
      <section id='faq'>
      <Container fluid style={{backgroundColor: '#323232'}}>
        <Row className='text-center'>
          <Title className='text-white text-uppercase mt-5'>Frequently Asked Questions</Title>
        </Row>
          <Accordion>
            <Row className='mt-3'>
              <Col>
                  <Accordion.Item eventKey="0" >
                    <Accordion.Header>
                    How long does the internship last?
                    </Accordion.Header>
                    <Accordion.Body style={{ backgroundColor: '#323232', color: '#ffffff' }}>
                    Typically, interns are with us for around the length of a college semester or a summer break.
                    However, some of our strongest and most mutually-beneficial internships have lasted longer.
                    </Accordion.Body>
                  </Accordion.Item>
              </Col>
              <Col>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                    What does a typical day look like?
                    </Accordion.Header>
                    <Accordion.Body style={{ backgroundColor: '#323232', color: '#ffffff' }}>
                    Our interns typically work anywhere from 10-25 hours per week. 
                    On a work day, you’ll come to our space and sit anywhere you’d like. Team Alpha  gets lots of real-world office and team-building experience. 
                    We bring the fun at our space, which means there will be plenty of opportunities for team lunches and coffee walks, ping pong tournaments, and great conversation.
                    </Accordion.Body>
                  </Accordion.Item>
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                  <Accordion.Item eventKey="3" >
                    <Accordion.Header>
                    What if I am interested in multiple teams?
                    </Accordion.Header>
                    <Accordion.Body style={{ backgroundColor: '#323232', color: '#ffffff' }}>
                    Great! Our internships are flexible and we try to play to each individual’s strengths and passions. 
                    We encourage you to pick a team that best fits your skills and experience as your first choice.
                    We’re flexible with what team you end up on and try to put you where it’s best suited. 
                    </Accordion.Body>
                  </Accordion.Item>
              </Col>
              <Col>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                    What's up with the Oreos?
                    </Accordion.Header>
                    <Accordion.Body style={{ backgroundColor: '#323232', color: '#ffffff' }}>
                    Ever since the beginning of Awesome Inc, Oreos have been our Founders’ and Team’s snack of choice.
                    We like to say that the Double Stuf Oreo is the Lexington Startup Community’s favorite cookie.
                    </Accordion.Body>
                  </Accordion.Item>
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                  <Accordion.Item eventKey="5" >
                    <Accordion.Header>
                    Is this a paid internship?
                    </Accordion.Header>
                    <Accordion.Body style={{ backgroundColor: '#323232', color: '#ffffff' }}>
                    We do not pay our interns. Team Alpha will gain experience, knowledge, and eat lots of Oreos. 
                    We’ve found out interns learn <span style={{fontStyle: 'italic'}}>how</span> to work while being around our team and we help them transition to another internship or their first job.
                    Our program lays a necessary foundation that interns build upon for their futures.
                    </Accordion.Body>
                  </Accordion.Item>
              </Col>
              <Col>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                    Is this internship in-person?
                    </Accordion.Header>
                    <Accordion.Body style={{ backgroundColor: '#323232', color: '#ffffff' }}>
                    We strongly encourage in-person so one can take full advantage of our office culture and experience. 
                    Rarely, do we make exceptions for fully remote interns. We want to be your friend, and it’s much easier to do that when you’re with us at the space!
                    </Accordion.Body>
                  </Accordion.Item>
              </Col>
            </Row>
      </Accordion>
      </Container>
    </section>
      {/* Our Team section */}
      <Container>
          <Row className='justify-content-center mt-5'>
            {allTeamAlpha.map((node, i) => (
              <Col xs={12} sm={10} md={6} lg={4} xl={3} xxl={3} className='my-2' key={i}>
                <Profile
                  variant="two"
                  name={node.name}
                  occupation={node.role}
                  fact={node.randomFact}
                  rule={node.favoriteRule}
                  song={node.favoriteSong}
                  favoritePerson={node.favoritePerson}
                  image={node.picture.asset.gatsbyImageData}
                />
              </Col>
            ))}
          </Row>
        </Container>
    </Layout>
  )
}

export default InternshipsPage;
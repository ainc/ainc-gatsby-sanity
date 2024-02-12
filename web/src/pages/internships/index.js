import React, {useEffect, useState, useRef} from 'react'
import { graphql } from 'gatsby'
import { motion } from 'framer-motion';
import Layout from '../../components/Layout/Layout'
import Diagonal from '../../components/Layout/Diagonal/Diagonal'
import ImageOutline from '../../components/ImageOutline/ImageOutline'
import { Container, Row, Col, Accordion, Card, Carousel } from 'react-bootstrap'
import SEO from '../../components/seo'
import { StaticImage, getImage, GatsbyImage} from 'gatsby-plugin-image'
import Title from '../../components/UI/Title/Title'
import BrandButton from '../../components/UI/BrandButton/BrandButton'
import * as styles from './internships.module.scss';
import './bootstrap-classes.scss'
import internWhy from '/src/images/intern-why.jpg';
import ModalCustom from '../../components/Modal/ModalCustom'
import ModalButton from '../../components/ModalButton/ModalButton'
import Subtitle from '../../components/UI/Subtitle/Subtitle'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Profile from '../../components/Profile/Profile'
//import ButtonAndImage from '../../components/ButtonAndImage/ButtonAndImage'
import TeamInfoModal from './Components/TeamInfo'
import QAModal from './Components/QAModal'

import OreoImage from '../../images/kevin_oreos.jpg'
import InternshipTime from '../../images/smiling_5across.jpg'
import TypicalDay from '../../images/smiling_nick.jpg'
import MultipleTeams from '../../images/cam_keith.jpg'
import Payment from '../../images/networking.jpg'
import InPerson from '../../images/cam_talking.jpg'

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
  const allSanityInternTestimonials = (data.allSanityInternTestimonials.nodes)
  const allTeamAlpha = (data.allSanityTeamAlpha.nodes || {})

  const [teamInfoDiv, setTeamInfoDiv] = useState(null);

  const showTeamDiv = (team) => {
    setTeamInfoDiv(team);
  };
  const hideTeamDiv = () => {
    setTeamInfoDiv(null);
  };
  return (
    <Layout>
        {/* Header section */}
        <section id="header">
            <Container fluid>
              <Row className={styles.headerSection}>
                  <Col className="mt-5 offset-md-2">
                      <motion.div initial={{ opacity: 0, y: -50 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.5, duration: 0.8 }}>
                        <Title className="text--big mt-5 fw-bold text-white">Join Team Alpha</Title>
                        <Subtitle className='text-uppercase text-white'>Gain Real experience.</Subtitle>
                        <Subtitle className='text-uppercase text-white'>Meet Awesome People.</Subtitle>
                        <Subtitle className='text-uppercase text-white'>Eat A Lot of Oreos.</Subtitle>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.0, duration: 0.6 }}>
                        <a href="https://careers.awesomeinc.org/jobs/Careers/649925000000610353/Team-Alpha---Internship?source=CareerSite"
                        target="_blank" rel="noopener noreferrer">
                        <BrandButton className="mt-3 mb-1">Apply Now</BrandButton>
                        </a>
                      </motion.div>
                  </Col>
              </Row>
            </Container>
        </section>

      {/* What is Team Alpha Section */}
        <Container>
          <Row className='flex-column flex-sm-row my-5'>
            <Col className='d-flex align-items-center justify-content-center my-5' style={{position: 'relative'}}>
              <StaticImage placeholder="blurred" src='../../images/team-alpha-coffee.jpg' alt='Team Alpha getting coffee' style={{maxWidth: '350px'}}/>
              <div className={styles.teamAlphaBadge}>
                <motion.div initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0, duration: 0.6 }}>
                <StaticImage placeholder="blurred" src='../../images/Team_Alpha_Logo_Grey.png' alt='Team alpha logo'/>
                </motion.div>
              </div>
            </Col>  
            <Col className='my-3'>
              <Title className='text--bright-red text-uppercase mt-5'>What is Team Alpha?</Title>
              <p className='my-5' style={{width: '65%'}}>
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
          <div className={styles.tbDiv}>
            <Title className='text-center text-white text-uppercase mt-5 mb-3'>Find Your Team</Title>
            <p className='text-center text-white'>Find the team that's right for you and join our list of alumni.</p>
            <p className='text-center text-white' style={{fontStyle: 'italic'}}>(Some have gone on to work at places like Disney, Facebook, Google, Spotify, and more!)</p>
            <div className={`${styles.billiImage} d-none d-sm-block`}>
              <motion.div initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}>
              <StaticImage placeholder="blurred" src='../../images/billi.png' alt='billi'/>
              </motion.div>
            </div>
          </div>
          </Row>
          <motion.div initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}>
          <Row className='justify-content-center ' style={{height: '21rem'}}>
            <Col className='col-12 col-md-4 col-lg-2 mb-4 mx-4'>
                <div className={styles.tbDiv}>
                  <StaticImage placeholder="blurred" className={`${styles.teamImages} d-none d-sm-block`} style={{position: 'absolute', bottom: '-12%'}} src='../../images/team-alpha-design.jpg' alt='Design Intern'/>
                  <BrandButton onClick={() => showTeamDiv('design')} className={`${styles.teamButton} secondary text-center`}>Design</BrandButton>
                  <TeamInfoModal
                  show={teamInfoDiv === 'design'}
                  onHide={hideTeamDiv}
                  title="DESIGN"
                  content="The Design Team is responsible for keeping visual elements aligned with the overall mission, message, and branding at Awesome Inc. We look for eager-to-learn individuals who have experience in Adobe Creative Suite and design principles showcasing layout, typography, and effective communication."
                  color='#C12029'
                  team="design"
                  link="https://www.youtube.com/watch?v=_t21lollr1c"
                  />
                </div>
            </Col>
            <Col className='col-12 mb-4 col-md-4 col-lg-2 mx-4'>
              <div className={styles.tbDiv}>
                <StaticImage placeholder="blurred" className={`${styles.teamImages} d-none d-sm-block`} style={{position: 'absolute', bottom: '-12%'}} src='../../images/team-alpha-marketing.jpg' alt='Events and Marketing Intern'/>
                <BrandButton onClick={() => showTeamDiv('marketing')} className={`${styles.teamButton} secondary text-center`}>Marketing</BrandButton>
                  <TeamInfoModal
                  show={teamInfoDiv === 'marketing'}
                  onHide={hideTeamDiv}
                  title="MARKETING"
                  content="The Marketing Team's mission is to reach and inform our target audiences about Awesome Inc, our initiatives, and events. We accomplish this through many avenues, including our website, newsletters, Google Ads and Analytics, podcasts, blogs, and CRMs. Typically, we look for interns with strengths in copywriting, social media management, data analytics, and video content production."
                  color='#ED3742'
                  team="marketing"
                  link="https://www.youtube.com/watch?v=kyp3acHFCZA"
                  />
              </div>
            </Col>
            <Col className='col-12 mb-4 col-md-4 col-lg-2 mx-4'>
              <div className={styles.tbDiv}>
                <StaticImage placeholder="blurred" className={`${styles.teamImages} d-none d-sm-block`} style={{ position: 'absolute', bottom: '-12%'}}  src='../../images/team-alpha-video.jpg' alt='Video Intern'/>
                <BrandButton onClick={() => showTeamDiv('video')} className={`${styles.teamButton} secondary text-center`}>Video</BrandButton>
                  <TeamInfoModal
                  show={teamInfoDiv === 'video'}
                  onHide={hideTeamDiv}
                  title="VIDEO"
                  content="We are looking for tech-savvy, organized, and creative individual who has expeirence using a digital camera, and a video editing (Premiere Pro is preferred). Applicants must have an understanding of how to storyboard in preparation for shoots and know basic camera settings: aperture, shutter speed, ISO, and white balance."
                  color='#939597'
                  team="video"
                  link="https://www.youtube.com/watch?v=Xhs6weqDvfg"
                  />              
              </div>
            </Col>
            <Col className='col-12 mb-4 col-md-4 col-lg-2 mx-4'>
            <div className={styles.tbDiv}>
                <StaticImage placeholder="blurred" className={`${styles.teamImages} d-none d-sm-block`} style={{position: 'absolute', bottom: '-12%'}} src='../../images/team-alpha-development.jpg' alt='Development Intern'/>
                <BrandButton onClick={() => showTeamDiv('development')} className={`${styles.teamButton} secondary text-center`}>Development</BrandButton>
                  <TeamInfoModal
                  show={teamInfoDiv === 'development'}
                  onHide={hideTeamDiv}
                  title="WEB DEVELOPMENT"
                  content="Create innovative software for growing businesses. Work with Lexington's most talented developers to find tune your coding skills. Get involved with Awesome Inc U to further your knowledge and learn to develop your own apps, video games, and more!"
                  color='#323232'
                  team="web development"
                  link="https://www.youtube.com/watch?v=sflZ2tFXMIY&t=1s"
                  />             
            </div>
            </Col>
          </Row>
          </motion.div>
        </Container>
      </section>

      {/* Why Awesome Inc section */}
      <Container className='mt-4'>
        <Row className='mt-4 flex-column flex-sm-row'>
          <Col className='mt-5 '>
          <Title className='text--bright-red text-uppercase mt-5 pt-5' style={{textAlign: 'right'}}>Why Awesome Inc?</Title>
          <p className={`${styles.paragraphAlign} my-5`} style={{textAlign: 'right', marginLeft: 'auto', width: '65%'}}>
          In addition to the free t-shirt and unlimited oreos, we'll provide you with an opportunity to improve your skills,
          portfolio, and network. Since 2009, Awesome Inc has built a work hard, play ahrd culture capable of accelerating you towards your definition
          of awesome. Our goal is to give you the best experience by helping you achieve your goals; whether that is getting into your dream school, working
          for your favorite company, or starting something of your own.
          </p>
          </Col>
          <Col className='d-flex align-items-center justify-content-center my-5 py-5'>
            <StaticImage placeholder="blurred" src='../../images/garret-cam.jpg' alt='Team Alpha having fun' style={{maxWidth: '550px'}} className='mt-lg-5 py-lg-4'/>
          </Col>
        </Row>
      </Container>
  
      {/*Who we're looking for section */}
      <Container fluid className={styles.lookingForSection} >
        <Row className='flex-column flex-sm-row'>
          <Col className='d-flex align-items-center justify-content-center my-5 py-5'>
            <motion.div initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}>
            <StaticImage placeholder="blurred" src='../../images/team-alpha-5across.jpg' alt='Team Alpha at 5Across' style={{maxWidth: '400px'}} className='my-4 '/>
            </motion.div>
          </Col>
          <Col className='mt-5 pt-5 text-left mx-md-5'>
            <Title className='text-uppercase text-white'>Who we're looking for</Title>
            <p className='text-white my-5' style={{width: '65%'}}>
            High school, college, and graduate students that are eager, coachable, and a good fit for Awesome Inc's culture.
            This immersive experience in Lexington, KY typically lasts for 1-2 semesters. To learn more about what our specific requirements are, click each
            team's profile above.
            </p>
            <a href="https://careers.awesomeinc.org/jobs/Careers/649925000000610353/Team-Alpha---Internship?source=CareerSite"
            target="_blank" rel="noopener noreferrer">
              <BrandButton className='white--dark-text'>Apply Now</BrandButton>
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
      <Carousel indicators={false} className={`${styles.carouselHeight} my-3`}>
      {allSanityInternTestimonials.map((node, index) => (
        <Carousel.Item key={index}>
          <Row className='d-flex justify-content-center'>
            <Col md={6}>
              <p className='text-justify text-center'>{node.testimonial}</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className='d-flex align-items-center justify-content-center justify-content-md-end'>
              <GatsbyImage image={node.picture.asset.gatsbyImageData} className='rounded-circle' alt={node.name}/>
            </Col>
            <Col className='pt-3 d-flex flex-column align-items-center align-items-md-start'>
              <Subtitle style={{color: '#C12029'}}>{node.name}</Subtitle>
              <p className='mb-0' style={{fontStyle: 'italic'}}>{node.cohort}</p>
              <p style={{fontStyle: 'italic'}}>{node.team}</p>
            </Col>
          </Row>
        </Carousel.Item>
      ))}
      </Carousel>

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
        <Container className='my-5 py-4'>
        <Row className='d-flex justify-content-center align-items-center flex-column flex-sm-row'>
            <Col className='d-flex justify-content-center align-items-center'>
              <QAModal 
              title='How long does the internship last?'
              img={InternshipTime}
              content="Typically, interns are with us for around the length of a college semester or a summer break. However, some of our strongest and most mutually-beneficial internships have lasted longer."
              />
            </Col>
            <Col className='d-flex justify-content-center align-items-center'>
              <QAModal 
              title='What does a typical day look like?'
              img={TypicalDay}
              content="Our interns typically work anywhere from 10-25 hours per week. On a work day, you'll come to our space and sit anywhere you'd like. Team Alpha  gets lots of real-world office and team-building experience. We bring the fun at our space, which means there will be plenty of opportunities for team lunches and coffee walks, ping pong tournaments, and great conversation."
              />
            </Col>
          </Row>
          <Row className='d-flex justify-content-center align-items-center flex-column flex-sm-row'>
            <Col className='d-flex justify-content-center align-items-center'>
              <QAModal 
              title='What if I am interested in multiple teams?'
              img={MultipleTeams}
              content="Great! Our internships are flexible and we try to play to each individual's strengths and passions.We encourage you to pick a team that best fits your skills and experience as your first choice. We're flexible with what team you end up on and try to put you where it's best suited."            
               />
            </Col>
            <Col className='d-flex justify-content-center align-items-center flex-column flex-sm-row'>
              <QAModal
              title="What's up with the Oreos?"
              img={OreoImage}
              content="Ever since the beginning of Awesome Inc, Oreos have been our Founders' and Team's snack of choice. We like to say that the Double Stuf Oreo is the Lexington Startup Community's favorite cookie."
              />
            </Col>
          </Row>
          <Row className='d-flex justify-content-center align-items-center flex-column flex-sm-row '>
            <Col className='d-flex justify-content-center align-items-center mb-5 pb-4'>
              <QAModal 
              title='Is this a paid internship?'
              img={Payment}
              content="We do not pay our interns. Team Alpha will gain experience, knowledge, and eat lots of Oreos. We've found out interns learn how to work while being around our team and we help them transition to another internship or their first job. Our program lays a necessary foundation that interns build upon for their futures."
              />
            </Col>
            <Col className='d-flex justify-content-center align-items-center mb-5 pb-4'>
              <QAModal
              title="Is this internship in-person?"
              img={InPerson}
              content="We strongly encourage in-person so one can take full advantage of our office culture and experience. Rarely, do we make exceptions for fully remote interns. We want to be your friend, and it's much easier to do that when you're with us at the space!"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
      {/* Our Team section */}
      <motion.div initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}>
      <Container>
        <Row className='text-center'>
        <Title className='text--bright-red text-uppercase mt-3'>Meet our Team ALpha Managers</Title>
        </Row>
        <Row className='d-flex justify-content-center mt-3'>
            {allTeamAlpha.map((node, i) => (
              <Col xs={12} sm={10} md={6} lg={4} xl={4} xxl={4} className={`my-3 d-flex ${i < 3 ? `${styles[`customCol${i % 3 + 1}`]}` : 'justify-content-center'}`} key={i}> {/*Applies conditional styling to the first three columns - do this because the profile card was not mind for 3 column rows in mind */}
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
          <Row>
            <Col className='text-center'>
            <a href="https://careers.awesomeinc.org/jobs/Careers/649925000000610353/Team-Alpha---Internship?source=CareerSite"
                      target="_blank" rel="noopener noreferrer">
            <BrandButton className='my-3'>Add me to the fun bunch</BrandButton>
            </a>
            </Col>
          </Row>
      </Container>
      </motion.div>
    </Layout>
  )
}

export default InternshipsPage;
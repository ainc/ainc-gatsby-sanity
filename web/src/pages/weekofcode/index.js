import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/seo';
import { Container, Row, Col, CarouselItem } from 'react-bootstrap';
import Title from '../../components/UI/Title/Title';
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import weekOfCodeRelayPicture from './images/week-of-code-relay.jpg';
import Accordion from 'react-bootstrap/Accordion';
import EventBriteModal from '../../components/EventBriteModal/EventBriteModal';
import useEventbrite from 'react-eventbrite-popup-checkout';
import { graphql } from "gatsby";


const Page = ({ data }) => {


  const event1Link = 'https://www.eventbrite.com/e/week-of-code-summer-camp-level-1-at-awesome-inc-2024-tickets-801830545747'
  const event2Link = 'https://www.eventbrite.com/e/week-of-code-summer-camp-level-1-at-awesome-inc-2024-tickets-801837556717'
  const event3Link = 'https://www.eventbrite.com/e/week-of-code-summer-camp-level-1-at-awesome-inc-2024-tickets-837800292227'



  const ButtonRow = () => {
    return (
      <section className="mb-5">
        <h1 className="fs-6 fw-bold">2024 Dates</h1>
        <EventBriteModal link={event1Link}>
          <BrandButton className="px-4 mb-3 mx-2 text-uppercase" variant="primary">JUNE 10-13 {'>>'}</BrandButton>
        </EventBriteModal>
        <EventBriteModal link={event2Link} >
          <BrandButton className="px-4 mb-3 mx-1 text-uppercase" variant="primary">JULY 15-18 {'>>'}</BrandButton>
        </EventBriteModal>
        <EventBriteModal link={event3Link}>
          <BrandButton className="px-4 mb-3 mx-2 text-uppercase" variant="primary">JULY 22-25 {'>>'}</BrandButton>
        </EventBriteModal>
      </section>
    )
  }

  return (
    <Layout>
      <Container>
      <Title className="my-5 text-center">WEEK OF CODE SUMMER CAMP</Title>

    <Row className="justify-content-start">
      <Col md={8}>
        <ButtonRow />
      </Col>
    </Row>
      
      <h1 className="mb-4">2024 Summer Camps</h1>
      <h2 className="fw-bold fs-4 mb-4">Ages: 9-16 | Beginner - Intermediate</h2>
      <p className="fst-italic mb-4">No experience required</p>
      <p className="mb-4">
        Every parent today wants their kids to learn how to interact with 
        technology in a healthy way, make friends, and be prepared for a 
        21st-century world, including getting into college and finding a 
        job they love and at which they will succeed. Week of Code Summer Camp does all of that.
      </p>
      <h2 className="fw-bold fs-4 mb-4">Prepare Your Child For a 21st Century World</h2>
      <p className="mb-4">
        At Week of Code, you learn by doing - it’s hands-on, at your pace, and 
        balanced with fun, off-computer activities. You’ll design and develop 
        your very own website, mobile app, and video game in one week. Work 
        with industry-standard hardware and software, complete a final project
        of your choice, build a portfolio, and bring your new tech knowledge and skills into the real world.
      </p>
      <div className="ratio ratio-16x9 mb-4">
      <iframe 
        src="https://www.youtube.com/embed/daWr1oOWd-Y"  
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        title="Youtube video"
        
        allowFullScreen>
      </iframe>
      </div>


      <h3 className="fw-bold mb-4 fs-4">Unsure of your summer plans? Make changes with no fees up to 30 days before your start date.</h3>
      

      <Row className="justify-content-start">
      <Col md={8}>
        <ButtonRow />
      </Col>
      </Row>

      <p className="mb-3">
        In addition to programming time inside, campers will interact with our upbeat team for 
        unplugged activities and games. More than just coding - Week of Code boosts creativity, 
        logical thinking skills, and brain power. The camp is kept small to ensure everyone gets focused attention.
      </p>

      <img className="mb-4 img-fluid" style={{width: '70rem'}}src={weekOfCodeRelayPicture} alt="Week of Code Relay" />

      <h4 className="fw-bold mb-4">In this course, your student will:</h4>

      <ul className="mb-4">
        <li style={{fontSize: '16px'}}>Create a video game, website, and a mobile app in one week</li>
        <li style={{fontSize: '16px'}}>Build a foundation of HTML, CSS, JavaScript, Android, C#, Unity 3D</li>
        <li style={{fontSize: '16px'}}>Think like a computer with logic and gates</li>
        <li style={{fontSize: '16px'}}>Analyze how programs work and how code functions</li>
        <li style={{fontSize: '16px'}}>Develop computational thinking skills</li>
      </ul>

      <h5 className="mb-5 fw-bold mb-4">Your student will take home:</h5>
      <ul>
        <li className="mb-4" style={{fontSize: '16px'}}>Project files and portfolio</li>
      </ul>
      
      <Row className="justify-content-start">
      <Col md={8}>
        <ButtonRow />
      </Col>
      </Row>



    <h1 style={{fontSize: '50px'}}  className="fw-bold">FAQs</h1>

    <Accordion className="mb-5" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Where is the best place to park near Awesome Inc?</Accordion.Header>
        <Accordion.Body>
          Free Parking is available for drop-off/pickup. The best location is 
          the parking lot to the east side of our building, in spaces 1-19. 
          See parking map for more details.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do students need their own computer for this course?</Accordion.Header>
        <Accordion.Body>
          Yes, each student will need to provide his/her own laptop for the course. 
          Either Microsoft Windows-based PC's, or Apple Mac OS X computers will work,
          but iPads and Chromebooks will not work for this course. We recommend a laptop
          made within the past 3-4 years. Computers should be free from viruses/malware. 
          We have a limited number of
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Are scholarships available for this course?</Accordion.Header>
        <Accordion.Body>
          Yes, a very limited number of partial scholarships are available. You can apply 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
    </Layout>

  )
}
export default Page;


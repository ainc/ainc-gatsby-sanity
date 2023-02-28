import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Row, Col, CarouselItem } from 'react-bootstrap';
import Title from '../../components/UI/Title/Title';
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import weekOfCodeRelayPicture from './images/week-of-code-relay.jpg';
import Accordion from 'react-bootstrap/Accordion';
import useEventbrite from 'react-eventbrite-popup-checkout';

const Page = ({ data }) => {

  const handleOrderCompleted = React.useCallback(() => {
    console.log('Order completed successfully');
  }, []);

  const iframeCheckout = useEventbrite({
    eventId: '484398708577',
    modal: false,
    onOrderComplete: handleOrderCompleted,
    iFrameHeight: 500, // optional
    iFrameAutoAdapt: 100, // optional - The widget's viewport percentage (between 75-100)
  });

  return (
    <Layout pageTitle="Week of Code Summer Camp | Awesome Inc">
      <Container>
      <Title className="my-5 text-center">WEEK OF CODE SUMMER CAMP</Title>

    <Row className="justify-content-start">
      <Col md={8}>
        <section className="mb-5">
          <h6 className="fw-bold">2023 Dates</h6>
          <BrandButton className="px-4 mb-3" variant="primary">JUNE 12-15 >></BrandButton> 
          <BrandButton className="mx-4 px-4 mb-3" variant="primary">JUNE 19-22 >></BrandButton> 
          <BrandButton className="px-4 mb-3" variant="primary">JULY 10-13 >></BrandButton>
        </section>
      </Col>
    </Row>
      
      <h1 className="mb-4">2023 Summer Camps</h1>
      <h4 className="fw-bold mb-4">Ages: 9-16 | Beginner - Intermediate</h4>
      <p className="fst-italic mb-4">No experience required</p>
      <p className="mb-4">
        Every parent today wants their kids to learn how to interact with 
        technology in a healthy way, make friends, and be prepared for a 
        21st-century world, including getting into college and finding a 
        job they love and at which they will succeed. Week of Code Summer Camp does all of that.
      </p>
      <h4 className="fw-bold mb-4">Prepare Your Child For a 21st Century World</h4>
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


      <h4 className="fw-bold mb-4">Unsure of your summer plans? Make changes with no fees up to 30 days before your start date.</h4>
      

      <Row className="justify-content-start">
      <Col md={8}>
        <section className="mb-5">
          <h6 className="fw-bold">2023 Dates</h6>
          <BrandButton className="px-4 mb-3" variant="primary">JUNE 12-15 >></BrandButton> 
          <BrandButton className="mx-4 px-4 mb-3" variant="primary">JUNE 19-22 >></BrandButton> 
          <BrandButton className="px-4 mb-3" variant="primary">JULY 10-13 >></BrandButton>
        </section>
      </Col>
      </Row>

      <p className="mb-3">
        In addition to programming time inside, campers will interact with our upbeat team for 
        unplugged activities and games. More than just coding - Week of Code boosts creativity, 
        logical thinking skills, and brain power. The camp is kept small to ensure everyone gets focused attention.
      </p>

      <img className="mb-4 img-fluid" src={weekOfCodeRelayPicture} alt="Week of Code Relay" />

      <h4 className="mb-5" className="fw-bold mb-4">In this course, your student will:</h4>

      <ul className="mb-4">
        <li style={{fontSize: '16px'}}>Create a video game, website, and a mobile app in one week</li>
        <li style={{fontSize: '16px'}}>Build a foundation of HTML, CSS, JavaScript, Android, C#, Unity 3D</li>
        <li style={{fontSize: '16px'}}>Think like a computer with logic and gates</li>
        <li style={{fontSize: '16px'}}>Analyze how programs work and how code functions</li>
        <li style={{fontSize: '16px'}}>Develop computational thinking skills</li>
      </ul>

      <h4 className="mb-5" className="fw-bold mb-4">Your student will take home:</h4>
      <ul>
        <li className="mb-4" style={{fontSize: '16px'}}>Project files and portfolio</li>
      </ul>
      
      <Row className="justify-content-start">
      <Col md={8}>
        <section className="mb-5">
          <h6 className="fw-bold">2023 Dates</h6>
          <BrandButton className="px-4 mb-3" variant="primary">JUNE 12-15 >></BrandButton> 
          <BrandButton className="mx-4 px-4 mb-3" variant="primary">JUNE 19-22 >></BrandButton> 
          <BrandButton className="px-4 mb-3" variant="primary">JULY 10-13 >></BrandButton>
        </section>
      </Col>
      </Row>

    <Row>
      {iframeCheckout && (
        <div id={iframeCheckout.id} />
      )}
    </Row>

    
    <h1 style={{fontSize: '50px'}} className="fw-bold">FAQs</h1>

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

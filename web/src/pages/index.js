import React, { Suspense } from "react";
import {useRef, useState, useEffect} from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import { Container, Row, Col, Image, Badge, Card } from "react-bootstrap";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import HomepageSlider from '../components/HomepageSlider/HomepageSlider'
import BrandButton from '../components/UI/BrandButton/BrandButton'
import Title from "../components/UI/Title/Title";
import Subtitle from "../components/UI/Subtitle/Subtitle";
import BackgroundCard from "../components/BackgroundCard/BackgroundCard";
import CoreValue from "../components/CustomCode/CoreValue/CoreValue";
import Event from "../components/Event/Event";
import NewsletterSection from "../components/Layout/Newsletter/Newsletter";
import PodcastSection from "../components/Layout/Podcast/Podcast";
import Startups from "../components/Layout/Startups/Startups";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import HorizontalCard from "../components/HorizontalCard/HorizontalCard";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion"

import ModalCustom from "../components/Modal/ModalCustom";

import { useLocation } from "@reach/router";

// Images
import core_values from "../images/core-values.png";
import workspace_hero from "../images/ainc-workspace-hero.jpeg";
import desk_background from "../images/workspace-desk-bg-red.png";
import workspace_background from "../images/workspace-border.png";

import DevicesIcon from "../assets/svg/devices.svg";
import StackIcon from "../assets/svg/stack.svg";
import ToolsIcon from "../assets/svg/tools.svg";
import { withTheme } from "styled-components";


export const query = graphql`
query IndexPageQuery($currentDate: Date!) { 
  sanityEvents(featured: {eq: true}, date: {gte: $currentDate}) {
    id
    featured
    eventName
    date
    picture {
      asset {
        gatsbyImageData(width: 550, aspectRatio: 1.1)
      }
    }
    location
    linkToEvent
    host
  }
  allSanityEvents(sort: {date: ASC}, filter: {date: {gte: $currentDate}}) {
    nodes {
      id
      featured
      eventName
      date
      picture {
        asset {
          gatsbyImageData(width: 550, aspectRatio: 1.0)
        }
      }
      location
      linkToEvent
      host
    }
  }
  allSanityCourses(
    limit: 3,
    filter: {featured: {eq: true}}
  ) {
    nodes {
      id
      courseTitle
      courseLink
      courseType
      learnMore
      description
      designedFor
      picture {
        asset {
          gatsbyImageData(height: 300)
          url
        }
      }
    }
  }
  allSanityPageTitles {
    edges {
      node {
        filePath
        pageTitle
      }
    }
  }
}
`;

const IndexPage = ({ data }) => {

  const events = (data.allSanityEvents.nodes || {})

  let feature_event = (data.sanityEvents ? data.sanityEvents : events[0]) //if there is no featured event, then set the closest event to be featured

  let eventsNoFeature = []; {/* Create empty array for events to filter into */}

  events.forEach(event => {
      if(!event.eventName.includes(feature_event.eventName)) eventsNoFeature.push(event);  {/*if featured eventName == event.eventName then remove event from list*/}
    }
  )
  eventsNoFeature = eventsNoFeature.slice(0, 3); {/* Slice the list to only contain 3 elements max */}

  const courses = (data.allSanityCourses.nodes || {})

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  //Scroll to a section when button is clicked (HomepageSlider component)
  const scrollToSection = (sectionId) => {
    switch (sectionId) {
      case 'workspace':
        section1Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        break;
      case 'courses':
        section2Ref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'startup':
        section3Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center'});
        break;
      
      default:
        break;
    }
  };

  const [isWorkspaceButton1Hovered, setIsWorkspaceButton1Hovered] = useState(false);
  const [isWorkspaceButton2Hovered, setIsWorkspaceButton2Hovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 800); // Adjust the threshold as needed
    };

    // Initial check on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount


  return (
    <Layout>
 
        <HomepageSlider
          scrollToSection={scrollToSection} sectionIds={['workspace','courses','startup']}
        />

      {/* FOUR INITIATIVES */}
      <section id="initiatives">
        <Container className="my-5">
          <Row className='d-flex justify-content-center'>
            {/* <Col xs={12} sm={{ span: 10, offset: 1}} > */}
                
              <Row className={` row row-cols-5 justify-content-center my-3 px-1 gx-5`}>
                {/* <Col md={3}> */}
                
                <Col xs={6} sm={6} md={6} lg={3} xl={3} className='mt-3'>
                  <motion.div whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  <BackgroundCard
                    title="Learn to Code"
                    text="Everybody can and should learn to code, start today."
                    backgroundImage="/images/student-learn-to-code-shirt.jpg"
                    imgSrc="https://d33wubrfki0l68.cloudfront.net/592e71aaecbd967bf40d6346937d2a5a78f502f7/bb4b9/images/icons/learn-to-code.png"
                    alt="brackets"
                    sectionRef = {section2Ref}
                  
                  />
                  </motion.div>
                </Col>
                
                {/* <Col md={3}> */}
                <Col xs={6} sm={6} md={6} lg={3} xl={3} className='mt-3 '>
                  <motion.div whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  <BackgroundCard 
                    title="Rent Workspace"
                    text="Rent a desk or space for events, meetings, and more."
                    backgroundImage="/images/awesome-inc-space-banner.jpg"
                    imgSrc="https://d33wubrfki0l68.cloudfront.net/13acb6f3560e894a9e0eecc194c96f778fba858f/f6fb2/images/icons/rent-workspace.png"
                    link="/workspace"
                    alt="desk and chair"
                    sectionRef = {section1Ref}
                   
                   />
                   </motion.div>
                </Col>
                {/* <Col md={3}> */}
                  <Col xs={6} sm={6} md={6} lg={3} xl={3} className='mt-3 '>
                  <motion.div whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  <BackgroundCard
                    title="Accelerate your startup"
                    text="We will help grow your business with a mentor-driven, accelerator program."
                    backgroundImage="/images/startup-panel-min.jpg"
                    imgSrc="https://d33wubrfki0l68.cloudfront.net/40f039dccd7775d86dcc2076d6b01abe6802fdac/f6c13/images/icons/accelerate-your-startup.png"
                    link="/learn"
                    alt="brackets"
                    sectionRef = {section3Ref}

                  />
                  </motion.div>
                </Col>
                {/* <Col md={3}> */}
                <Col xs={6} sm={6} md={6} lg={3} xl={3} className='mt-3 '>
                <motion.div whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  <BackgroundCard 
                    title="Software Development"
                    text="Let us create custom software for your business."
                    backgroundImage="/images/software-panel.jpg"
                    imgSrc="https://d33wubrfki0l68.cloudfront.net/fb2b3c6c872a02cdce20d96103c70a10b3f75172/3398b/images/icons/software-development.png"
                    link="/learn"
                    alt="brackets"
                    sectionRef = {section4Ref}
                    
                  />
                  </motion.div>
                </Col>
              </Row>
            {/* </Col> */}
          </Row>
          <Row>
            <Col xs={12} sm={{span: 8, offset: 2}}>
              <Title className="mt-5 text-center text-uppercase">Welcome to Awesome Inc</Title>
              <p className="mt-3 mb-5 text-center">Pursue your Definition of Awesome</p>
              <p className="mt-3 text-center">We exist to create and grow high tech startups. We do this by hosting community events, leading technology education courses, and offering a shared workspace environment. Click one of our initiatives above to learn more about Awesome Inc.</p>
              
                <a href="../about">
                  <BrandButton className="secondary d-block mx-auto">Learn More</BrandButton>
                </a>
              
              
            </Col>
          </Row>
          
        </Container>
      </section>

      {/* CORE VALUES */}
      <section  id="core-values">
        <div 
          className="parallax bg-filter-mute" 
          style={{ backgroundPosition: `0 50%`, minHeight: `500px` }}>
          <div id="lgx-core-values" className="lgx-video-background">
            <Container className="mt-5">
              <Row className="w-50">
                  <Title className="text-uppercase white">Our Core Values</Title>
                  <p className="text-white">
                    Here at Awesome Inc we not only work by our core values, but live by them too.
                  </p>
              </Row>
              <Row className="mb-5">
                <CoreValue />
              </Row>
            </Container>
          </div>
        </div>
      </section>
      
      {/* EVENTS */}
      <section id="events">
        <Title className="mt-5 mb-3 text-uppercase text-center">Upcoming Events</Title>
        <p className='text-center'>Join us and be apart of the startup community!</p>
        <Container className=''>
          <Row className="card__featured_mosaic gy-1  me-2">
            <Col className="card__featured" xs={12} sm={10} md={12} lg={7} xl={7}>
              <FeatureCard className='ms-0'
                title={feature_event.eventName}
                date={feature_event.date}
                image={feature_event.picture.asset.gatsbyImageData}
                host={feature_event.host}
                location={feature_event.location}
                link={feature_event.linkToEvent}
              />
            </Col>
            <Col className="card__secondary" xs={12} sm={10} md={8} lg={5} xl={5}>
              <Row className='bottom-0 me-2 ms-1'>
              {eventsNoFeature.map((node,i) => ( //map through the filtered list
                <HorizontalCard className='ms-0'
                  title={node.eventName}
                  date={node.date}
                  image={node.picture.asset.gatsbyImageData}
                  host={node.host}
                  location={node.location}
                  link={node.linkToEvent}
                  key={i}
                />
              ))}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center my-5">
              <a href="../events">
                <BrandButton>View Events</BrandButton>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* COURSES */}
      <section ref={section2Ref} id="courses" style={{backgroundColor: "#323232"}}>
        <Title className="pt-5 mb-3 text-uppercase text-center text-white">Educational Courses</Title>
        <p className="mb-5 text-uppercase text-center text-white">Made for any level</p>
        <Container>
          <Row>
            {courses.map((node,i) => (
              <Col className='mb-3' md={4} lg={4} key={i}>
                <Card className='h-100'>
                  <GatsbyImage 
                    image={node.picture.asset.gatsbyImageData} 
                    alt={node.courseTitle} 
                    className="m-2 d-flex align-content-center" 
                    objectFit="contain"
                    style={{maxHeight: `280px`}}
                  />

                  <Card.Body className="d-flex flex-column my-3 mx-3">
                    <p className="text-brand-dark mx-auto mt-2 text--italic text-uppercase">
                      {node.designedFor}
                    </p>
                    <p className="my-2 mb-3">
                      {node.description}
                    </p>

                    <a href={node.learnMore} className='mt-auto'>
                      <BrandButton className="d-block mx-auto my-4 secondary">Learn More</BrandButton>
                    </a>
                    
                  </Card.Body>
                </Card>
              </Col>
            ))}
            
          </Row>
          <Row>
            <Col className="d-flex justify-content-center my-5">
              <a href="../learn">
                <BrandButton >View Courses</BrandButton>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* STARTUPS */}

      <section ref={section3Ref} id="startup">
        <Startups />
      </section>  
        
      {/* WORKSPACE */}
      <section ref={section1Ref} id="workspace" style={{backgroundColor: `#D1D1D1`, borderColor: `black`, backgroundImage: isLargeScreen ? `url(${workspace_background})`: 'inherit', backgroundRepeat: 'no-repeat', backgroundPosition: 'center 80%', backgroundSize: '85% 85%'}}>
        <Title className="pt-5 mb-2 text-uppercase text-center">Workspace</Title>
        <Subtitle className=" text-uppercase text-center">Join Our Workspace</Subtitle>
        <a style={{position:'relative', top: isLargeScreen ? '-6rem' : 'inherit', left: isLargeScreen ? '90%' : 'inherit', justifyContent: isLargeScreen ? 'inherit' : 'center'}} href="https://calendly.com/awesometour/30min?" target="_blank">
          <img src="https://d33wubrfki0l68.cloudfront.net/223738930eb44ab59015db4d33febf500d9da8f1/0ab2a/images/icons/schedule-a-tour-button-red.png" width='100' height='100' id="tour-button" alt="tour button" />
        </a>
        <Container>
          <div style={{backgroundImage: `url(${desk_background})`, backgroundRepeat: `no-repeat`, backgroundSize: `35%`, backgroundPosition: `50% 50%`, padding: `5rem 0`}}>
            <Row>
              <Col xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0.5, y: -50 }}
                  whileInView={{ opacity: 1 , y: 0}}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}>
                <div className="d-flex justify-content-center" >
                  <a href="../workspace">
                    <Card className="card--equal-width bg-secondary p-4 mb-3" onMouseEnter={() => setIsWorkspaceButton1Hovered(true)} onMouseLeave={() =>setIsWorkspaceButton1Hovered(false)} style={{boxShadow: isWorkspaceButton1Hovered ? ' 0 5px 10px rgba(162, 27, 34, 0.75)' : 'inherit'}}>
                      <Subtitle className="fw-bold text-center text-white">Functional Workspace</Subtitle>
                      <p className="text-center text-white fw-bolder">An awesome space to work or host your next meeting.</p>
                    </Card>
                  </a>
                </div>
                </motion.div>
              </Col>
              <Col xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0.5, y: 50 }}
                  whileInView={{ opacity: 1 , y: 0}}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}>
                <div className="d-flex justify-content-center mt-5 pt-5">
                  <a href="../workspace">
                    <Card className="card--equal-width bg-secondary p-4" onMouseEnter={() => setIsWorkspaceButton2Hovered(true)} onMouseLeave={() =>setIsWorkspaceButton2Hovered(false)} style={{boxShadow: isWorkspaceButton2Hovered ? ' 0 5px 10px rgba(162, 27, 34, 0.75)' : 'inherit'}}>
                      <Subtitle className="fw-bold text-center text-white">Membership Benefits</Subtitle>
                      <p className="text-center text-white fw-bolder">Flexible membership options and features to support your business operations.</p>
                    </Card>
                  </a>
                </div>    
                </motion.div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>


      {/* SOFTWARE DEVELOPMENT */}
      {/* TODO: Fix icons to be 1:1 */}
      <section ref={section4Ref} id="software">
        <Title className="pt-5 mb-3 text-uppercase text-center">Software Development</Title>
        <Subtitle className="mb-5 text-uppercase text-center fw-bolder">Let us create custom software for your business</Subtitle>
        <Container>
          <Row>
            <Col>
              <div className="h-100 my-5">
                <a href="https://apaxsoftware.com/">
                  <motion.div
                    initial={{ opacity: 0.5, y: 50 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.9 }}>
                  <StaticImage 
                    className='mx-auto d-block img-fluid' 
                    quality='100' 
                    src='../assets/svg/devices.svg' 
                    alt="Devices icon"
                    layout='fixed'
                  />
                  </motion.div>
                  <Subtitle className="text-center fw-bolder mt-5 mb-3">Mobile Apps + Websites</Subtitle>
                
                </a>
                
                <p className="text-center">Our expert team of web developers build websites and mobile applications that are fast, secure, and easy to maintain.</p>
              </div>
            </Col>
            <Col>
              <div className="h-100 my-5">
              <a href="https://apaxsoftware.com/">
                <motion.div
                    initial={{ opacity: 0.5, y: -50 }}
                    whileInView={{ opacity: 1 , y: 0}}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.9 }}>
                <StaticImage 
                  className='mx-auto d-block img-fluid' 
                  quality='100' 
                  src='../assets/svg/stack.svg' 
                  alt="software stack icon"
                  layout='fixed'
                />
                </motion.div>
                <Subtitle className="text-center fw-bolder mt-5 mb-3">Software Consulting</Subtitle>
                </a>
                <p className="text-center">We make clients part of our streamlined process by facilitating reviews and planning sessions during all parts of the development cycle.</p>
              </div>
            </Col>
            <Col>
              <div className="h-100 my-5">
              <a href="https://apaxsoftware.com/">
                <motion.div
                  initial={{ opacity: 0.5, y: 50 }}
                  whileInView={{ opacity: 1 , y: 0}}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}>
                <StaticImage 
                  className='mx-auto d-block img-fluid' 
                  quality='100' 
                  src='../assets/svg/tools.svg' 
                  alt="Tools icon"
                  layout='fixed'
                />
                </motion.div>
                <Subtitle className="text-center fw-bolder mt-5 mb-3">Graphic Design</Subtitle>
              </a>
                <p className="text-center">Our UI/UX design services transform your project, increasing user satisfaction, reducing development costs, and delivering a high ROI.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* NEWSLETTER */}
      <NewsletterSection />

      {/* PODCAST */}
      <PodcastSection />
      
    </Layout>
  );
};


export default IndexPage;

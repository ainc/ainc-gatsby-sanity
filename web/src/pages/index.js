import React from "react";
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
import StartupsSection from "../components/Layout/Startups/Startups";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import HorizontalCard from "../components/HorizontalCard/HorizontalCard";
import { GatsbyImage } from "gatsby-plugin-image";

// Images
import core_values from "../images/core-values.png";
import workspace_hero from "../images/ainc-workspace-hero.jpeg";
import desk_background from "../images/workspace-desk-bg-red.png";
import DevicesIcon from "../assets/svg/devices.svg";
import StackIcon from "../assets/svg/stack.svg";
import ToolsIcon from "../assets/svg/tools.svg";

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
  allSanityEvents(sort: {fields: date, order: ASC}, filter: {date: {gte: $currentDate}}) {
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
}
`;

const IndexPage = props => {

  const { data, errors } = props;

  const events = (data.allSanityEvents.nodes || {})

  let feature_event = (data.sanityEvents ? data.sanityEvents : events[0]) //if there is no featured event, then set the closest event to be featured

  let eventsNoFeature = []; {/* Create empty array for events to filter into */}

  events.forEach(event => {
    if(!event.eventName.includes(feature_event.eventName)) eventsNoFeature.push(event);  {/*if featured eventName == event.eventName then remove event from list*/}
    }
  )
  eventsNoFeature = eventsNoFeature.slice(0, 3); {/* Slice the list to only contain 3 elements max */}

  
  const courses = (data.allSanityCourses.nodes || {})

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title="" description="" keywords="" />
      <HomepageSlider />

      {/* FOUR INITIATIVES */}
      <section id="initiatives">
        <Container className="my-5">
          <Row>
            <Col xs={12} sm={{ span: 10, offset: 1}} >
              <Row>
                <Col md={3}>
                  <BackgroundCard 
                    title="Learn to Code"
                    text="Everybody can and should learn to code, start today."
                    backgroundImage="https://www.awesomeinc.org/images/student-learning-to-code-panel.jpg"
                    imgSrc="https://d33wubrfki0l68.cloudfront.net/592e71aaecbd967bf40d6346937d2a5a78f502f7/bb4b9/images/icons/learn-to-code.png"
                    link="/learn"
                  />
                </Col>
                <Col md={3}>
                  <BackgroundCard 
                    title="Rent Workspace"
                    text="Rent a desk or space for events, meetings, and more."
                    backgroundImage="https://www.awesomeinc.org/images/awesome-inc-space-panel.jpg"
                    imgSrc="https://d33wubrfki0l68.cloudfront.net/13acb6f3560e894a9e0eecc194c96f778fba858f/f6fb2/images/icons/rent-workspace.png"
                    link="/workspace"
                  />
                </Col>
                <Col md={3}>
                  <BackgroundCard 
                    title="Accelerate your startup"
                    text="We will help grow your business with a mentor-driven, accelerator program."
                    backgroundImage="https://www.awesomeinc.org/images/student-learning-to-code-panel.jpg"
                    imgSrc="https://d33wubrfki0l68.cloudfront.net/592e71aaecbd967bf40d6346937d2a5a78f502f7/bb4b9/images/icons/learn-to-code.png"
                    link="/learn"
                  />
                </Col>
                <Col md={3}>
                  <BackgroundCard 
                    title="Software Development"
                    text="Let us create custom software for your business."
                    backgroundImage="https://www.awesomeinc.org/images/student-learning-to-code-panel.jpg"
                    imgSrc="https://d33wubrfki0l68.cloudfront.net/592e71aaecbd967bf40d6346937d2a5a78f502f7/bb4b9/images/icons/learn-to-code.png"
                    link="/learn"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={{span: 8, offset: 2}}>
              <Title className="mt-5 text-center text-uppercase">Welcome to Awesome Inc</Title>
              <p className="mt-3 mb-5 text-center">Pursue your Definition of Awesome</p>
              <p className="mt-3 text-center">We exist to create and grow high tech startups. We do this by hosting community events, leading technology education courses, and offering a shared workspace environment. Click one of our initiatives above to learn more about Awesome Inc.</p>
              <a href="#"><BrandButton className="secondary d-block mx-auto">Learn More</BrandButton></a>
            </Col>
          </Row>
          
        </Container>
      </section>

      {/* CORE VALUES */}
      <section id="core-values">
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
        <Title className="my-5 text-uppercase text-center">Upcoming Events</Title>
        <Container >
          <Row className="card__featured_mosaic">
            <Col className="card__featured">
              <FeatureCard 
                title={feature_event.eventName}
                date={feature_event.date}
                image={feature_event.picture.asset.gatsbyImageData}
                host={feature_event.host}
                location={feature_event.location}
                link={feature_event.linkToEvent}
              />
            </Col>
            <Col className="card__secondary">
              {eventsNoFeature.map((node,i) => ( //map through the filtered list
                <HorizontalCard 
                  className="mb-3"
                  title={node.eventName}
                  date={node.date}
                  image={node.picture.asset.gatsbyImageData}
                  host={node.host}
                  location={node.location}
                  link={node.linkToEvent}
                  key={i}
                />
              ))}
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center my-5">
              <a href="#">
                <BrandButton href="/events">View Events</BrandButton>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* COURSES */}
      <section id="courses" style={{backgroundColor: "#323232"}}>
        <Title className="pt-5 mb-3 text-uppercase text-center white">Educational Courses</Title>
        <p className="mb-5 text-uppercase text-center text-white">Made for any level</p>
        <Container>
          <Row>
            {courses.map((node,i) => (
              <Col key={i}>
                <Card className='h-100'>
                  <GatsbyImage 
                    image={node.picture.asset.gatsbyImageData} 
                    alt={node.courseTitle} 
                    className="m-2" 
                    objectFit="scale-down" 
                    style={{maxHeight: `280px`}}
                  />

                  <Card.Body className="d-flex flex-column my-3 mx-3">
                    <p className="text--grey mx-auto mt-2 text--italic text-uppercase">
                      {node.designedFor}
                    </p>
                    <p className="my-2">
                      {node.description}
                    </p>
                    <a href={node.learnMore}>
                      <BrandButton className="d-block mx-auto my-4 secondary">Learn More</BrandButton>
                    </a>
                    
                  </Card.Body>
                </Card>
              </Col>
            ))}
            
          </Row>
          <Row>
            <Col className="d-flex justify-content-center my-5">
              <a href="#">
                <BrandButton href="/events">View Courses</BrandButton>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* STARTUPS */}
      {/* <StartupsSection /> */}

      {/* WORKSPACE */}
      <section id="workspace" style={{backgroundColor: `#D1D1D1`}}>
        <Title className="pt-5 mb-3 text-uppercase text-center">Workspace</Title>
        <Subtitle className="mb-5 text-uppercase text-center">Join Our Workspace</Subtitle>
        <Container>
          <div style={{backgroundImage: `url(${desk_background})`, backgroundRepeat: `no-repeat`, backgroundSize: `35%`, backgroundPosition: `50% 50%`, padding: `5rem 0`}}>
            <Row>
              <Col xs={12} sm={6}>
                <div className="d-flex justify-content-center">
                  <a href="#">
                    <Card className="card--equal-width bg--dark-grey p-4 mb-5">
                      <Subtitle className="fw-bold text-center text-white">Functional Workspace</Subtitle>
                      <p className="text-center text-white fw-bolder">An awesome space to work or host your next meeting.</p>
                    </Card>
                  </a>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="d-flex justify-content-center mt-5 pt-5">
                  <a href="#">
                    <Card className="card--equal-width bg--dark-grey p-4">
                      <Subtitle className="fw-bold text-center text-white">Membership Benefits</Subtitle>
                      <p className="text-center text-white fw-bolder">Flexible membership options and features to support your business operations.</p>
                    </Card>
                  </a>
                </div>    
              </Col>
            </Row>
          </div>
        </Container>
      </section>


      {/* SOFTWARE DEVELOPMENT */}
      {/* TODO: Fix icons to be 1:1 */}
      <section id="software">
        <Title className="pt-5 mb-3 text-uppercase text-center">Software Development</Title>
        <Subtitle className="mb-5 text-uppercase text-center fw-bolder">Let us create custom software for your business</Subtitle>
        <Container>
          <Row>
            <Col>
              <div className="h-100 my-5">
                {/* <DevicesIcon className="d-block mx-auto my-3 w-50" /> */}
                <Subtitle className="text-center fw-bolder mt-5 mb-3">Mobile Apps + Websites</Subtitle>
                <p className="text-center">Our expert team of web developers build websites and mobile applications that are fast, secure, and easy to maintain.</p>
              </div>
            </Col>
            <Col>
              <div className="h-100 my-5">
                {/* <StackIcon className="d-block mx-auto my-3 w-50" /> */}
                <Subtitle className="text-center fw-bolder mt-5 mb-3">Software Consulting</Subtitle>
                <p className="text-center">We make clients part of our streamlined process by facilitating reviews and planning sessions during all parts of the development cycle.</p>
              </div>
            </Col>
            <Col>
              <div className="h-100 my-5">
                {/* <ToolsIcon className="d-block mx-auto my-3 w-50" /> */}
                <Subtitle className="text-center fw-bolder mt-5 mb-3">Graphic Design</Subtitle>
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

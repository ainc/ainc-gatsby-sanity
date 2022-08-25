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
import FeatureCard from "../components/FeatureCard/FeatureCard";
import HorizontalCard from "../components/HorizontalCard/HorizontalCard";

// Images
import core_values from "../images/core-values.png";
import workspace_hero from "../images/ainc-workspace-hero.jpeg";
import pitch_your_idea from "../images/startups-pitch.png";
import accelerate_your_startup from "../images/accelerate-your-startup.png";
import showcase_ky_entrep from "../images/startups-showcase.png";
import desk_background from "../images/workspace-desk-bg-red.png";
import mobile_apps_icon from "../images/development-apps-websites.png"
import software_consulting_icon from "../images/development-consulting.png"
import graphic_design_icon from "../images/development-design.png"

export const query = graphql`
query IndexPageQuery {
  site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
    title
    description
    keywords
  }
  allSanityEvents(limit:4) {
    edges {
      node {
        eventName
        date(formatString: "MMMM D, YYYY")
        linkToEvent
        host
        location
        picture {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
}
`;

const IndexPage = props => {

  
  const { data, errors } = props;

  const events = (data.allSanityEvents.edges || {})

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
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
          class="parallax bg-filter-mute" 
          style={{ backgroundPosition: `0 50%`, minHeight: `500px` }}>
          <div id="lgx-core-values" class="lgx-video-background">
            <Container className="mt-5">
              <Row>
                <Title className="text-uppercase white">Our Core Values</Title>
                <p className="text-white">
                  Here at Awesome Inc we not only work by our core values, but live by them too.
                </p>
              </Row>
              <Row>
                <CoreValue />
              </Row>
            </Container>
          </div>
        </div>
      </section>
      {/* EVENTS */}
      <section id="events">
        <Title className="my-5 text-uppercase text-center">Upcoming Events</Title>
        <Container>
          <Row>
            <Col className="h-100">
              <FeatureCard 
                title="Some event"
              />
            </Col>
            <Col className="h-100">
              <HorizontalCard 
                title="Some other event"
              />
            </Col>
          </Row>
          <Row>
            {data.allSanityEvents.edges.map((edge) => (
              <Col>
                <Event
                image={
                  edge.node.picture.asset.gatsbyImageData
                }
                date={edge.node.date}
                host={edge.node.host}
                location={edge.node.location}
                link={edge.node.linkToEvent}
                name={edge.node.eventName}
                />
              </Col>
            ))}
            
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
        <Title className="pt-5 mb-3 text-uppercase text-center white">Coding Courses</Title>
        <p className="mb-5 text-uppercase text-center text-white">Made for any level</p>
        <Container>
          <Row>
            {data.allSanityEvents.edges.map((edge) => (
              <Col>
                <Event
                image={
                  edge.node.picture.asset.gatsbyImageData
                }
                date={edge.node.date}
                host={edge.node.host}
                location={edge.node.location}
                link={edge.node.linkToEvent}
                name={edge.node.eventName}
                />
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
      <section id="startups">
        <Title className="pt-5 mb-3 text-uppercase text-center">Startups</Title>
        <Subtitle className="mb-5 text-uppercase text-center">Join Our Program</Subtitle>
        <Container>
          <Row>
            <Col>
              <div className="h-100 my-5">
                <img className="d-block mx-auto" src={pitch_your_idea} alt="Pitch your idea icon" />
                <Subtitle className="text-center brand fw-bold">Pitch Your Idea</Subtitle>
                <p className="text-center">We offer outlets for your idea to be heard. Share your idea with us or learn more about events that promote entrepreneurship.</p>
              </div>
              
            </Col>
            <Col>
              <div className="h-100 my-5">
                <img className="d-block mx-auto" src={accelerate_your_startup} alt="accelerate your startup icon" />
                <Subtitle className="text-center brand fw-bold">Accelerate Your Startup</Subtitle>
                <p className="text-center">Our Fellowship Program is mentor-driven, designed to accelerate your high-tech startup. Learn about the Fellowship Program as well as our other programs designed to foster your startup's growth.</p>
              </div>
            </Col>
            <Col>
              <div className="h-100 my-5">
                <img className="d-block mx-auto" src={showcase_ky_entrep} alt="showcasing kentucky entrepreneurs icon" />
                <Subtitle className="text-center brand fw-bold">Showcasing Kentucky Entrepreneurs</Subtitle>
                <p className="text-center">Discover the impact that Entrepreneurship has made in the Commonwealth.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

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
                <img className="d-block mx-auto w-50" src={mobile_apps_icon} alt="Mobile apps and websites" />
                <Subtitle className="text-center fw-bolder mt-5 mb-3">Mobile Apps + Websites</Subtitle>
                <p className="text-center">Our expert team of web developers build websites and mobile applications that are fast, secure, and easy to maintain.</p>
              </div>
            </Col>
            <Col>
              <div className="h-100 my-5">
                <img className="d-block mx-auto w-50" src={software_consulting_icon} alt="accelerate your startup icon" />
                <Subtitle className="text-center fw-bolder mt-5 mb-3">Software Consulting</Subtitle>
                <p className="text-center">We make clients part of our streamlined process by facilitating reviews and planning sessions during all parts of the development cycle.</p>
              </div>
            </Col>
            <Col>
              <div className="h-100 my-5">
                <img className="d-block mx-auto w-50" src={graphic_design_icon} alt="showcasing kentucky entrepreneurs icon" />
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

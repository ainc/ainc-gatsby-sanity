import React, { Suspense } from "react";
import { useRef, useState, useEffect } from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import { Card } from "react-bootstrap";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import HomepageSlider from "../components/HomepageSlider/HomepageSlider";
import BrandButton from "../components/UI/BrandButton/BrandButton";
import Title from "../components/UI/Title/Title";
import Subtitle from "../components/UI/Subtitle/Subtitle";
import BackgroundCard from "../components/BackgroundCard/BackgroundCard";
// import CoreValue from "../components/CustomCode/CoreValue/CoreValue";
import Event from "../components/Event/Event";
// import NewsletterSection from "../components/Layout/Newsletter/Newsletter";
// import PodcastSection from "../components/Layout/Podcast/Podcast";
// import Startups from "../components/Layout/Startups/Startups";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import HorizontalCard from "../components/HorizontalCard/HorizontalCard";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

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
import EventBriteModal from "../components/EventBriteModal/EventBriteModal";
// import Accomplishments from "../components/Accomplishments/Accomplishments";

import "./index.scss";

export const query = graphql`
  query IndexPageQuery($currentDate: Date!) {
    sanityEvents(featured: { eq: true }, date: { gte: $currentDate }) {
      id
      featured
      eventName
      date
      picture {
        asset {
          gatsbyImageData(width: 550, aspectRatio: 1.1, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], breakpoints: [400, 768, 1200, 1920])
        }
      }
      location
      linkToEvent
      host
    }
    allSanityEvents(
      sort: { date: ASC }
      filter: { date: { gte: $currentDate } }
    ) {
      nodes {
        id
        featured
        eventName
        date
        picture {
          asset {
            gatsbyImageData(width: 550, aspectRatio: 1.0, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], breakpoints: [400, 768, 1200, 1920])
          }
        }
        location
        linkToEvent
        host
      }
    }
    allSanityCourses(limit: 3, filter: { featured: { eq: true } }) {
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
            gatsbyImageData(height: 200, width: 250, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], breakpoints: [400, 768, 1200, 1920])
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
  const events = data.allSanityEvents.nodes || {};

  let feature_event = data.sanityEvents || events[0] || {};

  let eventsNoFeature = events
    .filter(
      (event) => event.eventName && feature_event.eventName !== event.eventName,
    )
    .slice(0, 3); // Ensure no crash on missing eventName

  const courses = data.allSanityCourses.nodes || {};

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  //Scroll to a section when button is clicked (HomepageSlider component)
  const scrollToSection = (sectionId) => {
    switch (sectionId) {
      case "workspace":
        section1Ref.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
        break;
      case "courses":
        section2Ref.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "startup":
        section3Ref.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
        break;

      default:
        break;
    }
  };

  const NewsletterSection = React.lazy(() =>
  import("../components/Layout/Newsletter/Newsletter")
);
const PodcastSection = React.lazy(() =>
  import("../components/Layout/Podcast/Podcast")
);

const Accomplishments = React.lazy(() => 
  import ("../components/Accomplishments/Accomplishments")
);

const CoreValue = React.lazy(() =>
  import ("../components/CustomCode/CoreValue/CoreValue") 
);

const Startups = React.lazy(() =>
  import ("../components/Layout/Startups/Startups")
);

  const [isWorkspaceButton1Hovered, setIsWorkspaceButton1Hovered] =
    useState(false);
  const [isWorkspaceButton2Hovered, setIsWorkspaceButton2Hovered] =
    useState(false);
useEffect(() => {
  // Gatsby SSR guard
  if (typeof window === "undefined") return;

  const canvas = document.querySelector(".snow");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let W = window.innerWidth;
  let H = window.innerHeight;
  const flakes = [];
  const numFlakes = 180;
  let animationId;

  canvas.width = W;
  canvas.height = H;

  function Flake() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.r = Math.random() * 1.2;
    this.weight = Math.random() * 3 + 2;
    this.speed = this.weight * 0.6;
    this.alpha = this.weight / 5;
  }

  for (let i = 0; i < numFlakes; i++) {
    flakes.push(new Flake());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);

    flakes.forEach(flake => {
      flake.y += flake.speed;
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.weight, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${flake.alpha})`;
      ctx.fill();

      if (flake.y > H) {
        flake.y = -flake.weight;
        flake.x = Math.random() * W;
      }
    });

    animationId = requestAnimationFrame(loop);
  }

  loop();

  // 🕒 STOP AFTER 12 SECONDS
  const stopTimer = setTimeout(() => {
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, W, H);
  }, 12000);

  const resize = () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  };

  window.addEventListener("resize", resize);

  return () => {
    clearTimeout(stopTimer);
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", resize);
  };
}, []);

  return (
    <Layout>
      <canvas className="snow" />

      <HomepageSlider
        scrollToSection={scrollToSection}
        sectionIds={["workspace", "courses", "startup"]}
      />

      {/* FOUR INITIATIVES */}
      <section id="initiatives">
        <Container className="my-5">
          <Row className="d-flex justify-content-center">
            {/* <Col xs={12} sm={{ span: 10, offset: 1}} > */}

            <Row
              className={` row row-cols-5 justify-content-center my-3 px-1 gx-3`}
            >
              {/* <Col md={3}> */}
              <Col xs={6} sm={6} md={6} lg={3} xl={3} className="mt-3">
                <BackgroundCard
                  title="Learn to Code"
                  text="Everybody can and should learn to code, start today."
                  backgroundImage="/images/student-learn-to-code-shirt.jpg"
                  formats={["auto", "webp", "avif"]}
                  imgSrc="https://d33wubrfki0l68.cloudfront.net/592e71aaecbd967bf40d6346937d2a5a78f502f7/bb4b9/images/icons/learn-to-code.png"
                  alt="brackets"
                  sectionRef={section2Ref}
                />
              </Col>

              {/* <Col md={3}> */}
              <Col xs={6} sm={6} md={6} lg={3} xl={3} className="mt-3">
                <BackgroundCard
                  title="Rent Workspace"
                  text="Rent a desk or space for events, meetings, and more."
                  backgroundImage="/images/awesome-inc-space-banner.jpg"
                  formats={["auto", "webp", "avif"]}
                  imgSrc="https://d33wubrfki0l68.cloudfront.net/13acb6f3560e894a9e0eecc194c96f778fba858f/f6fb2/images/icons/rent-workspace.png"
                  link="/workspace"
                  alt="desk and chair"
                  sectionRef={section1Ref}
                />
              </Col>
              {/* <Col md={3}> */}
              <Col xs={6} sm={6} md={6} lg={3} xl={3} className="mt-3">
                <BackgroundCard
                  title="Accelerate your startup"
                  text="We will help grow your business with a mentor-driven, accelerator program."
                  backgroundImage="/images/startup-panel-min.jpg"
                  formats={["auto", "webp", "avif"]}
                  imgSrc="https://d33wubrfki0l68.cloudfront.net/40f039dccd7775d86dcc2076d6b01abe6802fdac/f6c13/images/icons/accelerate-your-startup.png"
                  link="/learn"
                  alt="brackets"
                  sectionRef={section3Ref}
                />
              </Col>
              {/* <Col md={3}> */}
              <Col xs={6} sm={6} md={6} lg={3} xl={3} className="mt-3 ">
                <BackgroundCard
                  title="Software Development"
                  text="Let us create custom software for your business."
                  backgroundImage="/images/software-panel.jpg"
                  formats={["auto", "webp", "avif"]}
                  imgSrc="https://d33wubrfki0l68.cloudfront.net/fb2b3c6c872a02cdce20d96103c70a10b3f75172/3398b/images/icons/software-development.png"
                  link="/learn"
                  alt="brackets"
                  sectionRef={section4Ref}
                />
              </Col>
            </Row>
            {/* </Col> */}
          </Row>
          <Row>
            <Col xs={12} sm={{ span: 8, offset: 2 }}>
              <Title className="mt-5 text-center text-uppercase">
                Welcome to Awesome Inc
              </Title>
              <p className="mt-3 mb-5 text-center">
                Pursue your Definition of Awesome
              </p>
              <p className="mt-3 text-center">
                We exist to create and grow high tech startups. We do this by
                hosting community events, leading technology education courses,
                and offering a shared workspace environment. Click one of our
                initiatives above to learn more about Awesome Inc.
              </p>

              <a href="../about">
                <BrandButton className="secondary d-block mx-auto">
                  Learn More
                </BrandButton>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      {/*ACCOMPLISHMENTS */}
      <Suspense fallback={null}>
      <Accomplishments />
      </Suspense>

      {/* CORE VALUES */}
      <section id="core-values">
        <div
          className="parallax bg-filter-mute"
          style={{ backgroundPosition: `0 50%`, minHeight: `500px` }}
        >
          <div id="lgx-core-values" className="lgx-video-background">
            <Container className="mt-5">
              <Row className="w-50">
                <Title className="text-uppercase white">Our Core Values</Title>
                <p className="text-white">
                  Here at Awesome Inc we not only work by our core values, but
                  live by them too.
                </p>
              </Row>
              <Row className="mb-5">
                <Suspense fallback={null}>
                <CoreValue />
                </Suspense>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events">
        <Title className="mt-5 mb-4 text-uppercase text-center">
          Upcoming Events
        </Title>
        <Container fluid="xxl">
          <Row className="g-4">
            {eventsNoFeature?.map((event, i) => (
              <Col
                key={i}
                xs={12}
                xl={6} // 2 columns at 1200px+
                className="d-flex justify-content-center"
              >
                <FeatureCard
                  className="w-100"
                  style={{ maxWidth: "600px" }}
                  title={event.eventName}
                  date={event.date}
                  image={event.picture?.asset?.gatsbyImageData}
                  host={event.host}
                  location={event.location}
                  link={event.linkToEvent}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* COURSES */}
      <section
        ref={section2Ref}
        id="courses"
        style={{ backgroundColor: "#323232" }}
      >
        <Title className="pt-5 mb-3 text-uppercase text-center text-white">
          Educational Courses
        </Title>
        <p className="mb-5 text-uppercase text-center text-white">
          Made for any level
        </p>
        <Container>
          <Row className="justify-content-center">
            {courses.map((node, i) => (
              <Col className="mb-3" md={4} lg={4} key={i}>
                <motion.div
                  className="h-100"
                  initial={{ opacity: 0.5, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Card className="h-100">
                    <GatsbyImage
                      image={node.picture.asset.gatsbyImageData}
                      alt={node.courseTitle}
                      className="m-2 d-flex align-content-center"
                      objectFit="contain"
                      style={{ maxHeight: `280px` }}
                    />

                    <Card.Body className="d-flex flex-column my-3 mx-3">
                      <p className="text-brand-dark mx-auto mt-2 text--italic text-uppercase">
                        {node.designedFor}
                      </p>
                      <p className="my-2 mb-3">{node.description}</p>

                      <a href={node.learnMore} className="mt-auto">
                        <BrandButton className="d-block mx-auto my-4 secondary">
                          Learn More
                        </BrandButton>
                      </a>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="d-flex justify-content-center my-5">
              <a href="../learn">
                <BrandButton>View Courses</BrandButton>
              </a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* STARTUPS */}
      <section ref={section3Ref} id="startup">
        <Suspense fallback={null}>
        <Startups />
        </Suspense>
      </section>

      {/* WORKSPACE */}
      <section ref={section1Ref} id="workspace" className="workspace-section">
        <Title className="pt-5 mb-2 text-uppercase text-center">
          Workspace
        </Title>
        <Subtitle className=" text-uppercase text-center">
          Join Our Workspace
        </Subtitle>
        <a
          className="workspace-button"
          href="https://calendly.com/awesometour/30min?"
          target="_blank"
        >
        <StaticImage
          src="../images/icons/schedule-a-tour-button-red.png" 
          alt="tour button"
          width={100}
          height={100}
          id="tour-button"
        />
        </a>
        <Container>
          <div
            style={{ position: "relative", padding: "5rem, 0" }}
          >
              <StaticImage
                src="../images/desk_background.png"
                alt="Desk Background"
              style={{
                position: "absolute",
                inset: 0,
                backgroundRepeat: "no-repeat",
                backgroundSize: "35%",
                backgroundPosition: "50% 50%",
                    }}
                placeholder="blurred"
              />
            <Row>
              <Col xs={12} sm={6}>
                <div className="d-flex justify-content-center">
                  <motion.div
                    initial={{ opacity: 0.5, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <a href="../workspace">
                      <Card
                        className="card--equal-width bg-secondary p-4 mb-3"
                        onMouseEnter={() => setIsWorkspaceButton1Hovered(true)}
                        onMouseLeave={() => setIsWorkspaceButton1Hovered(false)}
                        style={{
                          boxShadow: isWorkspaceButton1Hovered
                            ? " 0 5px 10px rgba(162, 27, 34, 0.75)"
                            : "inherit",
                        }}
                      >
                        <Subtitle className="fw-bold text-center text-white">
                          Functional Workspace
                        </Subtitle>
                        <p className="text-center text-white fw-bolder">
                          An awesome space to work or host your next meeting.
                        </p>
                      </Card>
                    </a>
                  </motion.div>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="d-flex justify-content-center mt-5 pt-5">
                  <motion.div
                    initial={{ opacity: 0.5, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, duration: 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <a href="../workspace">
                      <Card
                        className="card--equal-width bg-secondary p-4"
                        onMouseEnter={() => setIsWorkspaceButton2Hovered(true)}
                        onMouseLeave={() => setIsWorkspaceButton2Hovered(false)}
                        style={{
                          boxShadow: isWorkspaceButton2Hovered
                            ? " 0 5px 10px rgba(162, 27, 34, 0.75)"
                            : "inherit",
                        }}
                      >
                        <Subtitle className="fw-bold text-center text-white">
                          Membership Benefits
                        </Subtitle>
                        <p className="text-center text-white fw-bolder">
                          Flexible membership options and features to support
                          your business operations.
                        </p>
                      </Card>
                    </a>
                  </motion.div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* SOFTWARE DEVELOPMENT */}
      {/* TODO: Fix icons to be 1:1 */}
      <section ref={section4Ref} id="software">
        <Title className="pt-5 mb-3 text-uppercase text-center">
          Software Development
        </Title>
        <Subtitle className="mb-5 text-uppercase text-center fw-bolder">
          Let us create custom software for your business
        </Subtitle>
        <Container>
          <Row>
            <Col>
              <div className="h-100 my-5">
                <a href="https://apaxsoftware.com/">
                  <motion.div
                    initial={{ opacity: 0.5, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <StaticImage
                      placeholder="blurred"
                      className="mx-auto d-block img-fluid"
                      quality="100"
                      src="../assets/svg/devices.svg"
                      alt="Devices icon"
                      layout="fixed"
                    />
                  </motion.div>
                  <Subtitle className="text-center fw-bolder mt-5 mb-3">
                    Mobile Apps + Websites
                  </Subtitle>
                </a>

                <p className="text-center">
                  Our expert team of web developers build websites and mobile
                  applications that are fast, secure, and easy to maintain.
                </p>
              </div>
            </Col>
            <Col>
              <div className="h-100 my-5">
                <a href="https://apaxsoftware.com/">
                  <motion.div
                    initial={{ opacity: 0.5, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <StaticImage
                      placeholder="blurred"
                      className="mx-auto d-block img-fluid"
                      quality="100"
                      src="../assets/svg/stack.svg"
                      alt="software stack icon"
                      layout="fixed"
                    />
                  </motion.div>
                  <Subtitle className="text-center fw-bolder mt-5 mb-3">
                    Software Consulting
                  </Subtitle>
                </a>
                <p className="text-center">
                  We make clients part of our streamlined process by
                  facilitating reviews and planning sessions during all parts of
                  the development cycle.
                </p>
              </div>
            </Col>
            <Col>
              <div className="h-100 my-5">
                <a href="https://apaxsoftware.com/">
                  <motion.div
                    initial={{ opacity: 0.5, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <StaticImage
                      placeholder="blurred"
                      className="mx-auto d-block img-fluid"
                      quality="100"
                      src="../assets/svg/tools.svg"
                      alt="Tools icon"
                      layout="fixed"
                    />
                  </motion.div>
                  <Subtitle className="text-center fw-bolder mt-5 mb-3">
                    Graphic Design
                  </Subtitle>
                </a>
                <p className="text-center">
                  Our UI/UX design services transform your project, increasing
                  user satisfaction, reducing development costs, and delivering
                  a high ROI.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <Suspense fallback={<div>Loading…</div>}>
      {/* NEWSLETTER */}
      <NewsletterSection />
      {/* PODCAST */}
      <PodcastSection />
      </Suspense>
    </Layout>
  );
};

export default IndexPage;

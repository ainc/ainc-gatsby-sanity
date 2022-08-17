import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import { Container, Row, Col, Image } from "react-bootstrap";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import HomepageSlider from '../components/HomepageSlider/HomepageSlider'
import BrandButton from '../components/UI/BrandButton/BrandButton'
import Title from "../components/UI/Title/Title";
import Subtitle from "../components/UI/Subtitle/Subtitle";
import BackgroundCard from "../components/BackgroundCard/BackgroundCard";
import CoreValue from "../components/CustomCode/CoreValue/CoreValue"

// Images
import core_values from "../images/core-values.png";
import workspace_hero from "../images/ainc-workspace-hero.jpeg";

export const query = graphql`
query IndexPageQuery {
  site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
    title
    description
    keywords
  }
}
`;

const IndexPage = props => {

  
  const { data, errors } = props;

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
          <Title></Title>
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
    </Layout>
  );
};

export default IndexPage;

import * as React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout/Layout";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Title from "../../components/UI/Title/Title";
import * as styles from "./idea.module.scss";
import BrandButton from "../../components/UI/BrandButton/BrandButton";

const IdeaPage = ({ data }) => {
  return (
    <Layout>
      <Container
        fluid
        className={`${styles.header} d-flex justify-content-center align-items-center`}
      >
        <StaticImage
          placeholder="blurred"
          src="./images/idea-header-text.png"
          style={{ width: "600px" }}
        />
      </Container>
      <Container>
        <Row className="justify-content-center flex-column flex-md-row my-5 py-4">
          <Col
            className={`d-flex flex-column justify-content-between ${styles.borderRight}  text-center`}
          >
            <a href="/events/5across">
              <StaticImage
                placeholder="blurred"
                className="mb-3"
                quality="100"
                style={{ maxWidth: "250px" }}
                src="./images/5-across-logo-black-text.png"
              />
            </a>
            <p className="mt-3">
              A Pitch Competition for Kentucky Entrepreneurs
            </p>
            <a
              href="https://forms.zohopublic.com/virtualoffice9155/form/5AcrossApplication1/formperma/i3hM2QiFcJG1DM_nCW8jQvMplp5UUFgRbKc5Ev8kuiA"
              target="_blank"
            >
              <BrandButton className="secondary my-3">
                Apply to pitch
              </BrandButton>
            </a>
          </Col>
          <Col className=" d-flex flex-column justfy-content-between align-items-center text-center mt-4">
            <Subtitle
              className="mb-4 text-uppercase"
              style={{ fontWeight: 800 }}
            >
              Have an idea?
            </Subtitle>
            <p className="mt-3" style={{ width: "70%" }}>
              Do you have an idea you'd like to pursue or a problem you'd like
              to solve but don't know where to start or who to start with?
            </p>
            <a href="#form" className="link--brand">
              <BrandButton className="secondary my-4">We can help</BrandButton>
            </a>
          </Col>
        </Row>
      </Container>
      <Container fluid className={styles.backgroundBreak} />
      {/* still need to find a solution for form accessibility 
        <Container fluid className={styles.testimonials}>
            <h1>test</h1>
            <Carousel></Carousel>
        </Container> */}
      <section id="form">
        <Container className="mt-3">
          <iframe
            src="https://forms.zohopublic.com/virtualoffice9155/form/Ihaveanidea/formperma/30hj1gQf-u3TTxMYOytfjzUJhtBJgqYeim-yn04e1Tw?gclid=undefined"
            title="I have an idea form"
            width="100%"
            height="1000px"
          ></iframe>
        </Container>
      </section>
    </Layout>
  );
};
export default IdeaPage;

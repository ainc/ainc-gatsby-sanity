import React from "react";
import { graphql } from "gatsby";
import { Container, Col, Row } from "react-bootstrap";
import * as styles from "./events.module.css";
import Event from "../../components/Event/Event";
import Layout from "../../components/Layout/Layout";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Title from "../../components/UI/Title/Title";

const EventsPage = ({ data }) => {
  const events = data.allSanityEvents.edges || {};

  return (
    <Layout>
      {/* Heading */}
      <Container className="text-center my-5">
        <Row>
          <Title className="text-uppercase">Upcoming Events</Title>
        </Row>
        <Row>
          <Subtitle className="fs-5">Join us and be a part of the startup community!</Subtitle>
        </Row>
      </Container>

      {/* Events */}
      <Container className={styles.noHorizontalSpacing}>
        <Row className={`${styles.noHorizontalSpacing} mb-5 d-flex justify-content-center`}>
          {events.map(edge => (
            <Col
              xs={10}
              sm={10}
              md={6}
              lg={6}
              className="my-1 d-flex justify-content-center"
              key={edge.node.eventName}
            >
              <Event
                image={edge.node.picture.asset.gatsbyImageData}
                date={edge.node.date}
                host={edge.node.host}
                location={edge.node.location}
                link={edge.node.linkToEvent}
                name={edge.node.eventName}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export const query_events = graphql`
  query($currentDate: Date!) {
    allSanityEvents(sort: { date: ASC }, filter: { date: { gte: $currentDate } }) {
      edges {
        node {
          eventName
          date(formatString: "MMMM D, YYYY")
          linkToEvent
          host
          location
          picture {
            asset {
              gatsbyImageData(aspectRatio: 1.05)
            }
          }
        }
      }
    }
  }
`;

export default EventsPage;

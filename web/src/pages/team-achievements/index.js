import React from "react";
import { graphql } from "gatsby";
import { Container, Row } from "react-bootstrap";

import Event from "../../components/Event/Event";
import Layout from "../../components/Layout/Layout";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Title from "../../components/UI/Title/Title";

const EventsPage = ({ data }) => {
  const events = data.allSanityEvents.edges || [];

  return (
    <Layout>
      {/* Heading */}
      <Container className="text-center my-5">
        <Row>
          <Title className="text-uppercase">Upcoming Events</Title>
        </Row>
      </Container>

      {/* Team members boards */}
     
    </Layout>
  );
};

export const query_team_members = graphql`
  query ($currentDate: Date!) {
    allSanityEvents(
      sort: { date: ASC }
      filter: { date: { gte: $currentDate } }
    ) {
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

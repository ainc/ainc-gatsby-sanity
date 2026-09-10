import React from "react";
import { graphql } from "gatsby";
import { Container, Row } from "react-bootstrap";
import { useLocation } from "@reach/router";
import * as styles from "./events.module.scss";
import Event from "../../components/Event/Event";
import Layout from "../../components/Layout/Layout";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import Title from "../../components/UI/Title/Title";
import { getEventbriteCode } from "../../lib/eventbriteDiscount";

const EventsPage = ({ data }) => {
  const events = data.allSanityEvents.edges || [];
  const promoCode = getEventbriteCode(useLocation().search);

  return (
    <Layout>
      {/* Heading */}
      <Container className="text-center my-5">
        <Row>
          <Title className="text-uppercase">Upcoming Events</Title>
        </Row>
        <Row>
          <Subtitle className="fs-5">
            Join us and be a part of the startup community!
          </Subtitle>
          {promoCode && (
            <p className="mt-3 mb-0">
              Promo code <strong>{promoCode}</strong> will be applied at
              checkout.
            </p>
          )}
        </Row>
      </Container>

      {/* Events */}
      <div
        className={`${styles.customContainer} ${styles.noHorizontalSpacing}`}
      >
        <div className={styles.flexContainer}>
          {events.length > 0 ? (
            events.map((edge) => (
              <div
                className={`${styles.flexItem} ${styles.contentWrapper}`}
                key={edge.node.eventName ?? edge.node.id}
              >
                <Event
                  image={edge.node.picture.asset.gatsbyImageData}
                  date={edge.node.date}
                  host={edge.node.host}
                  location={edge.node.location}
                  link={edge.node.linkToEvent}
                  name={edge.node.eventName ?? "Untitled Event"}
                />
              </div>
            ))
          ) : (
            <div className={`${styles.noEventsMessage}`}>
              <p>No upcoming events</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query_events = graphql`
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

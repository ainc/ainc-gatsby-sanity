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

const RESERVED_EVENT_LANDING_SLUGS = new Set(["5across"]);

const landingPath = (page) => {
  const slug = page.slug?.current;
  if (
    !page.event?.id ||
    !slug ||
    RESERVED_EVENT_LANDING_SLUGS.has(slug.toLowerCase())
  ) {
    return null;
  }
  return `/events/${slug}/`;
};

const EventsPage = ({ data }) => {
  const events = data.allSanityEvents.edges || [];
  const location = useLocation();
  const promoCode = getEventbriteCode(location.search);
  const landingPages = new Map();
  (data.allSanityPage?.nodes || []).forEach((page) => {
    const path = landingPath(page);
    if (path && !landingPages.has(page.event.id)) {
      landingPages.set(page.event.id, path);
    }
  });

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
                  image={edge.node.picture?.asset?.gatsbyImageData}
                  date={edge.node.date}
                  host={edge.node.host}
                  location={edge.node.location}
                  link={
                    landingPages.has(edge.node.id)
                      ? `${landingPages.get(edge.node.id)}${location.search}`
                      : edge.node.linkToEvent
                  }
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
          id
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
    allSanityPage {
      nodes {
        slug {
          current
        }
        event {
          id
        }
      }
    }
  }
`;

export default EventsPage;

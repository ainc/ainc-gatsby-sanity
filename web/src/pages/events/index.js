import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Container, Col, Row, Image } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from "./events.module.css";

import SocialMedia from "../../components/SocialMedia/SocialMedia";
import TeamMember from "../../components/TeamMember/TeamMember";
import OutlineDiv from "../../components/DivOutline/DivOutline";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";
import Event from "../../components/Event/Event";

const EventsPage = ({ data }) => {
    const events = (data.allSanityEvents.edges || {})

    return (
        <Layout>
            <main>
                {/* Heading */}
                <section>
                    <div className={styles.centerHeading}>
                        <Row>
                            <Title className={styles.headingTitle}>
                                Upcoming Events
                            </Title>
                        </Row>
                        <Row>
                            <Subtitle className={styles.headingSubtitle}> 
                                Join us and be a part of the startup community!
                            </Subtitle>
                        </Row>
                    </div>
                </section>

                {/* Events */}
                <section>
                  <Container className={styles.flexContainer}>
                        {events.map((edge) => (
                          <div className={styles.flexItem}>
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
                          </div>
                        ))}
                  </Container>
                </section>
            </main>
        </Layout>
    )
}

export const query_events = graphql`
  query {
    allSanityEvents {
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
`

export default EventsPage;
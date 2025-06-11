import React from "react";
import { graphql } from "gatsby";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./timeline.module.css";

import Layout from "../../components/Layout/Layout";
import { Container, Col, Row } from "react-bootstrap";

const HistoryWall = ({ data }) => {
  const timelineData = data.allSanityTimelineEvent.nodes;

  return (
    <Layout>
      <Container className={styles.timelineContainer}>
        <Row>
          {timelineData.map((event, index) => {
            const imageData = getImage(event.image?.asset);

            return (
              <Col
                key={event.id}
                md={6}
                lg={4}
                className="mb-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.timelineItem}
                >
                  {imageData && (
                    <GatsbyImage
                      image={imageData}
                      alt={event.image?.alt || event.title}
                      className="mb-3"
                    />
                  )}
                  <h3 className={styles.timelineDate}>{event.date}</h3>
                  <h2 className={styles.timelineTitle}>{event.title}</h2>
                  <p className={styles.timelineContent}>{event.content}</p>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
};

export default HistoryWall;

// GraphQL Page Query
export const query = graphql`
  {
    allSanityTimelineEvent {
      nodes {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          asset {
            gatsbyImageData
          }
        }
        content
      }
    }
  }
`;


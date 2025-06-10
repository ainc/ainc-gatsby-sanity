import React from "react";
import { graphql } from "gatsby";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./timeline.module.css";

const HistoryWall = ({ data }) => {

  const timelineData = data.allSanityTimelineEvent.nodes;

  return (
    <div
      className={styles.timelineContainer}
    >
      {timelineData.map((event, index) => {
        const imageData = getImage(event.image?.asset);

        return (
          <motion.div
            key={event.id}
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
              />
            )}
            <h3 className={styles.timelineDate}>{event.date}</h3>
            <h2 className={styles.timelineTitle}>{event.title}</h2>
            <p className={styles.timelineContent}>{event.content}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HistoryWall;

// GraphQL Page Query
export const query = graphql`
  {
    allSanityTimelineEvent {
      nodes {
        title
        date
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


import React from "react";
// import { graphql } from "gatsby";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SEO from "../../components/seo";


const HistoryWall = () => {
  // const query = graphql`
  //   query allSanityTimelineEvent {
  //     nodes {
  //       id
  //       date(formatString: "MMMM D, YYYY")
  //       title
  //       image {
  //         asset {
  //           gatsbyImageData(width: 800, placeholder: BLURRED)
  //         }
  //       }
  //     }
  //   }
  // `);

  // const timelineData = data.allSanityTimelineEvent.nodes;

  const timelineData = []; // empty array so it doesn't crash

  return (
    <div
      className="timeline-container"
      style={{ padding: "50px", background: "#f8f8f7" }}
    >
      {timelineData.length === 0 && (
        <p>
          This is as far as I have gotten. Still not seeing <code>TimelineEvent</code> in GraphQL and
          can't bring content from Sanity over without the proper query.
        </p>
      )}
    </div>
  );
};


export default HistoryWall;

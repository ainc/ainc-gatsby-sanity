// src/pages/pinBoardPage.js
import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
// If you have a Subtitle or BrandButton, etc., import them here as well
// import Subtitle from "../../components/UI/Subtitle/Subtitle";

import CorkBoard from "../../components/CorkBoard/CorkBoard";
import * as styles from "./pinBoardPage.module.scss"; // optional SCSS module

const PinBoardPage = ({ data }) => {
  // 1) Extract pins & userBoard from GraphQL result
  const pins = data.allSanityPin.nodes || [];
  const userBoard = data.allSanityUserBoard.nodes[0] || null;

  // 2) Optionally, get the board image from userBoard
  let boardImageData = null;
  if (userBoard?.boardImage?.asset?.gatsbyImageData) {
    boardImageData = userBoard.boardImage.asset.gatsbyImageData;
  }

  // 3) Render the page using your standard layout & styling
  return (
    <Layout>
      <Container fluid className={`${styles.mainHeading} text-center`}>
        <Row>
          <Col className="my-5">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Title className="fw-bold">Interactive Pin Board</Title>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* The CorkBoard handles randomization & drag. We pass it the data. */}
      <Container fluid className="mb-5">
        <CorkBoard
          userId="demoUser123"
          initialPins={pins}
          sanityBoardDoc={userBoard}
          topLeftGatsbyImage={boardImageData}
        />
      </Container>
    </Layout>
  );
};

/**
 * GraphQL query:
 * - Fetch all "pin" docs with needed fields (title, type, size, fallbackColor, image).
 * - Fetch the userBoard doc for our "demoUser123" user.
 */
export const query = graphql`
  query {
    allSanityPin {
      nodes {
        _id
        title
        type
        size
        fallbackColor
        pinImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
    allSanityUserBoard(filter: { userId: { eq: "demoUser123" } }, limit: 1) {
      nodes {
        _id
        userId
        boardImage {
          asset {
            gatsbyImageData
          }
        }
        pinPositions {
          pinId
          x
          y
        }
      }
    }
  }
`;

export default PinBoardPage;

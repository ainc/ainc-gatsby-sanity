import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import CorkBoard from "../../components/CorkBoard/CorkBoard";

const PinBoardPage = ({ data }) => {
  const pins = data.allSanityPin.nodes || [];
  const userBoard = data.allSanityUserBoard.nodes[0] || null;

  let boardImageData = null;
  if (userBoard?.boardImage?.asset?.gatsbyImageData) {
    boardImageData = userBoard.boardImage.asset.gatsbyImageData;
  }

  return (
    <Layout>
      <Container fluid /* className={`${styles.mainHeading} text-center`}`*/>
        <Row>
          <Col className="my-5 text-center">
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

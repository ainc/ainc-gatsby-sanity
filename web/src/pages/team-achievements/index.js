import React from "react";
import { graphql } from "gatsby";
import { Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import { GatsbyImage } from "gatsby-plugin-image";

const AchievementsPage = ({ data }) => {
  // const pinBoards = data?.allSanityTeamMember?.edges?.filter(node => node.pinBoard !== null);
  const teamMembers = data?.allSanityTeamMember?.edges;
  return (
    <Layout>
      {/* Heading */}
      <Container className="text-center my-5">
        <Row>
          <Title className="text-uppercase">Team Achievements</Title>
        </Row>
      </Container>

      {/* Pin boards */}
      <Container>
        <div className="text-center">
          {teamMembers.length > 0 ? (
            teamMembers.map((edge) =>
              edge.node.pinBoard ? (
                <div className="my-5">
                  <GatsbyImage
                    image={edge.node.pinBoard?.asset.gatsbyImageData}
                  />
                </div>
              ) : null,
            )
          ) : (
            <p>No Team Achievement Boards Found</p>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export const query_pins = graphql`
  {
    allSanityTeamMember {
      edges {
        node {
          pinBoard {
            asset {
              gatsbyImageData
            }
          }
          name
        }
      }
    }
  }
`;

export default AchievementsPage;

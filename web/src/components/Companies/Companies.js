import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { Container, Col, Row } from "react-bootstrap";
import Title from "../../components/UI/Title/Title";

const query = useStaticQuery(graphql`
  {
    allSanityBootcampEmployers {
      nodes {
        company
        picture {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`);

const Companies = ({ employers }) => {
  return (
    <section id="employers" className="py-4">
      <Container className="py-4">
        <Row className="">
          <Col>
            <Row className="mt-4">
              <Title className="text-uppercase text-center mt-4">
                Companies who have hired our graduates
              </Title>
            </Row>
            <Col>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <Row className="row-cols-lg-5 mt-lg-5 mb-lg-1 mx-lg-5">
                  {employers.map((node, i) => (
                    <div key={i} className="text-center" xs={12}>
                      <GatsbyImage
                        style={{
                          maxWidth: "40rem",
                          marginTop: "1.5rem",
                          marginLeft: "1.5rem",
                          marginRight: "1.5rem",
                          marginBottom: "1.5rem",
                        }}
                        image={node.picture.asset.gatsbyImageData}
                        alt={node.company}
                      />
                    </div>
                  ))}
                </Row>
              </motion.div>
              <div className="text-center">
                <p style={{ marginTop: `0`, fontSize: `10px` }}>
                  <b>and over 50 more companies</b>
                </p>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Companies;

import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import { graphql, StaticQuery } from "gatsby";
import * as styles from "./tutorials.module.css";

const TutorialsPage = ({ data }) => {
  const allTutorials = data.allSanityTutorials.nodes || {};
  return (
    <Layout>
      {/* Tutorial Header */}
      <section className={styles.tutorialHeader}>
        <Container fluid>
          <Row>
            <Col>
              <Title className="text-uppercase">Tutorials</Title>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.tutorialList}>
        <Container>
          <Row>
            <Col>
              <ul>
                {allTutorials.map((node) => (
                  <li>
                    <a
                      className={"link--brand"}
                      href={`/tutorials/${node.slug.current}/`}
                    >
                      {node.title}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default TutorialsPage;

export const query_press = graphql`
  query MyQuery {
    allSanityTutorials {
      nodes {
        title
        slug {
          current
        }
      }
    }
  }
`;

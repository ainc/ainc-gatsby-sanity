import * as React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { graphql } from "gatsby";
import SEO from "../../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import * as styles from "./notes.scss";

const Notes = ({ data }) => {
  const noteContent = data.sanityNotes;

  return (
    <Layout>
      <SEO title={noteContent.title} />
      <Container>
        <Row key={noteContent.slug.current}>
          <Col>
            <Title className="text-center my-5">{noteContent.title}</Title>
            {noteContent._rawBody && (
              <BlockContent
                className="body"
                blocks={noteContent._rawBody}
                imageOptions={{ w: 700, h: 600, fit: "max" }}
              />
            )}
            {noteContent.linkToiframe && (
              <div className="mb-5">
                <iframe
                  className="border border-1 border-dark rounded"
                  src={noteContent.linkToiframe}
                  allowFullScreen
                  width="100%"
                  height="700"
                ></iframe>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Notes;

export const query = graphql`
  query ($slug: String!) {
    sanityNotes(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      linkToiframe
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`;

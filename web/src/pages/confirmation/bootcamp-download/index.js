import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../../../components/Layout/Layout";

const Page = () => {
  const data = useStaticQuery(graphql`
    {
      sanityBootcampProgramGuide {
        bootcampProgramGuide {
          asset {
            url
            originalFilename
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Container>
        <Row className="my-3">
          <Col md={{ span: 9, offset: 2 }}>
            <h1>Bootcamp Program Guide Download Sent</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 9, offset: 2 }}>
            <p>
              Thanks for your interest in Awesome Inc's Web Developer Bootcamp.
              Here's a{" "}
              <a
                className="text--red link--bright-red fw-bold"
                href={
                  data.sanityBootcampProgramGuide.bootcampProgramGuide.asset.url
                }
                download={
                  data.sanityBootcampProgramGuide.bootcampProgramGuide.asset
                    .originalFilename
                }
                target="_blank"
              >
                link to download
              </a>{" "}
              the guide or check your email for the Bootcamp Program Guide.
            </p>
          </Col>
        </Row>
        <Col className="mb-5" md={{ span: 9, offset: 2 }}>
          <p>
            <a
              className="text--red link--bright-red fw-bold"
              href="../../bootcamp"
            >
              &lt;&lt;Back to Bootcamp
            </a>
          </p>
        </Col>
      </Container>
    </Layout>
  );
};
export default Page;

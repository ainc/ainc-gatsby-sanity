import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import Profile from "../components/Profile/Profile";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query AlumniPageQuery {
    allSanityBootcampAlumni {
      nodes {
        id
        name
        github
        portfolio
        linkedin
        class
        job
        picture {
          asset {
            gatsbyImageData(layout: CONSTRAINED, width: 300, aspectRatio: 1)
          }
        }
      }
    }
  }
`;

const AlumniPage = props => {
  const { data, errors } = props;
  console.log(data.allSanityBootcampAlumni.nodes);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const alumniNodes = (data.allSanityBootcampAlumni.nodes || {})

  return (
    <Layout>
      <Container>
        <Row>
          {alumniNodes.map((node) => (
            <div className="col-3" key={node.id}>
            <Profile
              name={node.name}
              image={node.picture.asset.gatsbyImageData}
              linkedin={node.linkedin}
              github={node.github}
              website={node.portfolio}
              position={node.job}
            ></Profile>
          </div>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default AlumniPage;

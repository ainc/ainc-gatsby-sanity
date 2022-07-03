import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import ProjectPreviewGrid from "../components/project-preview-grid";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query AlumniPageQuery {
    allSanityBootcampAlumni {
      nodes {
        name
        class
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;
  console.log(data);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const alumniNodes = (data || {})

  return (
    <Layout>
      <Container>
        <React.Fragment>
          {data.map((node) => (
            <React.Fragment>
              <p>node.name</p>
              <p>node.class</p>
            </React.Fragment>
          ))}
        </React.Fragment>
      </Container>
    </Layout>
  );
};

export default IndexPage;

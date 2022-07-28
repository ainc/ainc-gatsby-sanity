import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import { Container, Row, Col, Image } from "react-bootstrap";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import HomepageSlider from '../components/HomepageSlider/HomepageSlider'
import BrandButton from '../components/UI/BrandButton/BrandButton'
import Title from "../components/UI/Title/Title";
import Subtitle from "../components/UI/Subtitle/Subtitle";

// Images
import core_values from "../images/core-values.png";
import workspace_hero from "../images/ainc-workspace-hero.jpeg";

export const query = graphql`
query IndexPageQuery {
  site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
    title
    description
    keywords
  }
}
`;

const IndexPage = props => {

  
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title="" description="" keywords="" />
      <HomepageSlider />

      {/* CORE VALUES */}
      <section id="core-values">
        <div 
          class="parallax bg-filter-mute" 
          style={{ backgroundImage: `url(${workspace_hero})`, backgroundPosition: `0 50%`, minHeight: `500px` }}>
          <div id="lgx-core-values" class="lgx-video-background">
            <Container>
              
                <Title class="text-uppercase white">Our Core Values</Title>
                <p class="text-white">
                  Here at Awesome Inc we not only work by our core values, but live by them too.
                </p>
              
              
            </Container>
                  
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

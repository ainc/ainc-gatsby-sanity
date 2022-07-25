import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import HomepageSlider from '../components/HomepageSlider/HomepageSlider'
import BrandButton from '../components/UI/BrandButton/BrandButton'
import Title from "../components/UI/Title/Title";
import Subtitle from "../components/UI/Subtitle/Subtitle";

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
        <div id="lgx-core-values" class="lgx-video-background">
          <Container>
            <Title class="text-uppercase">Our Core Values</Title>
            <div class="lgx-video-banner-info">
              <p class="text">Here at Awesome Inc we not only work by our core values, but live by them too.</p>
            </div>
          </Container>
                
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

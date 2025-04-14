import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";

// Existing hero styles
const HeroSection = styled.section`
  padding: 2rem;
  text-align: center;
  color: white;
  position: relative;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
  }

  p {
    font-size: 1.5rem;
    position: relative;
    z-index: 2;
  }
`;

const BackgroundImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  .gatsby-image-wrapper {
    height: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

// Updated CTA styles with background image support
const CtaContainer = styled.section`
  position: relative;
  padding: 4rem 2rem;
  color: white;
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const CtaContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const CtaButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  margin-top: 1rem;
  background: ${(props) =>
    props.variant === "primary"
      ? "white"
      : props.variant === "secondary"
        ? "#0070f3"
        : "transparent"};
  color: ${(props) =>
    props.variant === "primary"
      ? "#0070f3"
      : props.variant === "secondary"
        ? "white"
        : "#0070f3"};
  border: ${(props) =>
    props.variant === "outline" ? "2px solid #0070f3" : "none"};
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const PageTemplate = ({ data }) => {
  const page = data.sanityPage;

  return (
    <Layout>
      <main>
        {page.content?.map((section) => {
          switch (section._type) {
            case "hero":
              return (
                <HeroSection key={section._key}>
                  <h2>{section.heading}</h2>
                  <p>{section.subheading}</p>
                  {section.backgroundImage?.asset?.gatsbyImageData && (
                    <BackgroundImageWrapper>
                      <GatsbyImage
                        image={section.backgroundImage.asset.gatsbyImageData}
                        alt={section.heading || "Hero background"}
                        style={{ height: "100%" }}
                      />
                    </BackgroundImageWrapper>
                  )}
                </HeroSection>
              );

            case "cta":
              return (
                <CtaContainer key={section._key}>
                  {section.backgroundImage?.asset?.gatsbyImageData && (
                    <BackgroundImageWrapper>
                      <GatsbyImage
                        image={section.backgroundImage.asset.gatsbyImageData}
                        alt={section.heading || "CTA background"}
                        style={{ height: "100%" }}
                      />
                    </BackgroundImageWrapper>
                  )}
                  <CtaContent>
                    <h2>{section.heading}</h2>
                    <p>{section.text}</p>
                    {section.button && (
                      <CtaButton
                        href={section.button.url}
                        variant={section.button.variant || "primary"}
                      >
                        {section.button.text}
                      </CtaButton>
                    )}
                  </CtaContent>
                </CtaContainer>
              );

            default:
              return null;
          }
        })}
      </main>
    </Layout>
  );
};

// Updated GraphQL query to include CTA background image
export const query = graphql`
  query ($id: String!) {
    sanityPage(id: { eq: $id }) {
      title
      slug {
        current
      }
      content {
        ... on SanityHero {
          _type
          _key
          heading
          subheading
          backgroundImage {
            asset {
              gatsbyImageData(
                width: 2000
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        ... on SanityCta {
          _type
          _key
          heading
          text
          backgroundImage {
            asset {
              gatsbyImageData(
                width: 2000
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          button {
            text
            url
            variant
          }
        }
      }
    }
  }
`;
export default PageTemplate;

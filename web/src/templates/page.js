//coloumnBlock, no bg image, has words, cta only
import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { PortableText } from "@portabletext/react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";

// Hero styles
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

// CTA styles
const CtaContainer = styled.section`
  position: relative;
  padding: 0;
  color: white;
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;
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
        ? "#A03232"
        : "transparent"};
  color: ${(props) =>
    props.variant === "primary"
      ? "#A03232"
      : props.variant === "secondary"
        ? "white"
        : "#A03232"};
  border: ${(props) =>
    props.variant === "outline" ? "2px solid #A03232" : "none"};
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    color: #651316;
  }
`;

// Text Block styles
const TextBlockSection = styled.section`
  position: relative;
  padding: 4rem 0;
  width: 100vw;
  left: 50%;
  margin-left: -50vw;
  text-align: ${(props) => props.textAlignment || "left"};
  overflow: hidden;
  background-color: #fff;

  /* Dynamic text color - single source of truth */
  &,
  & * {
    color: ${(props) => {
      if (props.textColor) {
        return props.textColor === "black"
          ? "#000"
          : props.textColor === "white"
            ? "#fff"
            : props.textColor;
      }
      return props.hasBackgroundImage ? "#fff" : "#000";
    }};
  }

  .content-wrapper {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  h2,
  h3 {
    margin: 1.5rem 0 1rem;
  }

  ul,
  ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    border-left: 3px solid #ccc;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
  }
`;

// Column Block styles
const ColumnBlockContainer = styled.div`
  display: flex;
  gap: ${(props) => {
    switch (props.$spacing) {
      case "small":
        return "1rem";
      case "large":
        return "3rem";
      default:
        return "2rem";
    }
  }};
  align-items: ${(props) =>
    props.$alignment === "center"
      ? "center"
      : props.$alignment === "bottom"
        ? "flex-end"
        : "flex-start"};
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ColumnItem = styled.div`
  flex: ${(props) => {
    switch (props.$width) {
      case "25%":
        return "0 0 calc(25% - 1rem)";
      case "33%":
        return "0 0 calc(33.333% - 1rem)";
      case "50%":
        return "0 0 calc(50% - 1rem)";
      case "66%":
        return "0 0 calc(66.666% - 1rem)";
      case "75%":
        return "0 0 calc(75% - 1rem)";
      case "100%":
        return "0 0 100%";
      default:
        return "1";
    }
  }};
  background-color: rgba(0, 0, 255, 0.1); // Temporary debug color
  min-height: 100px; // Ensure it's visible

  @media (max-width: 768px) {
    flex: 0 0 100% !important;
    width: 100%;
  }
`;
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RowItem = styled.div`
  flex: 1 1 50%;
`;

const CustomPortableText = ({ value }) => (
  <div className="portable-text-wrapper">
    <PortableText value={value} />
  </div>
);

const renderSection = (section) => {
  // Early return for invalid sections
  if (!section?._type) {
    console.error("Invalid section data:", section);
    return null;
  }

  // Destructure common properties
  const { _key, backgroundImage } = section;
  const bgImage = backgroundImage?.asset?.gatsbyImageData;

  switch (section._type) {
    case "hero":
      return (
        <HeroSection key={_key}>
          <h2>{section.heading}</h2>
          <p>{section.subheading}</p>
          {bgImage && (
            <BackgroundImageWrapper>
              <GatsbyImage
                image={bgImage}
                alt={section.heading || "Hero background"}
                style={{ height: "100%" }}
              />
            </BackgroundImageWrapper>
          )}
        </HeroSection>
      );

    case "cta":
      return (
        <CtaContainer key={_key}>
          {bgImage && (
            <BackgroundImageWrapper>
              <GatsbyImage
                image={bgImage}
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

    case "textBlock":
      const hasBgImage = !!bgImage;
      return (
        <TextBlockSection
          key={_key}
          textAlignment={section.textAlignment}
          hasBackgroundImage={!!bgImage}
          textColor={section.textColor}
        >
          {hasBgImage && (
            <BackgroundImageWrapper>
              <GatsbyImage
                image={bgImage}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </BackgroundImageWrapper>
          )}
          <div className="content-wrapper">
            <CustomPortableText value={section.content} />
          </div>
        </TextBlockSection>
      );

    default:
      console.warn(`Unknown section type: ${section._type}`);
      return null;
  }
};

const PageTemplate = ({ data }) => {
  console.log("Page data:", JSON.stringify(data.sanityPage.content, null, 2));
  const page = data.sanityPage;

  // Helper function to parse raw content
  const parseRawContent = (raw) => {
    try {
      return JSON.parse(JSON.stringify(raw));
    } catch (error) {
      console.error("Error parsing raw content:", error);
      return null;
    }
  };

  return (
    <Layout>
      <main>
        {page?.content?.filter(Boolean).map((section) => {
          if (!section?._type) return null;

          if (section._type === "columnBlock") {
            const sections = section._rawSections
              ? parseRawContent(section._rawSections)
              : [];

            return (
              <ColumnBlockContainer
                key={section._key || crypto.randomUUID()}
                $spacing={section.spacing}
                $alignment={section.alignment}
              >
                {sections
                  ?.filter((subsection) => subsection?.content?._type)
                  .map((subsection) => {
                    const content = subsection.content;
                    return (
                      <ColumnItem
                        key={subsection._key || crypto.randomUUID()}
                        $width={subsection.width}
                      >
                        {content._type === "textBlock" ? (
                          <TextBlockSection
                            textAlignment={content.textAlignment}
                            textColor={content.textColor}
                            hasBackgroundImage={!!content.backgroundImage}
                          >
                            {content.backgroundImage?.asset
                              ?.gatsbyImageData && (
                              <BackgroundImageWrapper>
                                <GatsbyImage
                                  image={
                                    content.backgroundImage.asset
                                      .gatsbyImageData
                                  }
                                  alt=""
                                  style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                  }}
                                />
                              </BackgroundImageWrapper>
                            )}
                            {content._rawContent && (
                              <div className="content-wrapper">
                                <PortableText
                                  value={parseRawContent(content._rawContent)}
                                />
                              </div>
                            )}
                          </TextBlockSection>
                        ) : (
                          renderSection(content)
                        )}
                      </ColumnItem>
                    );
                  })}
              </ColumnBlockContainer>
            );
          }

          // Handle textBlock separately if needed
          if (section._type === "textBlock") {
            return (
              <TextBlockSection
                key={section._key || crypto.randomUUID()}
                textAlignment={section.textAlignment}
                textColor={section.textColor}
              >
                {section._rawContent && (
                  <div className="content-wrapper">
                    <PortableText
                      value={parseRawContent(section._rawContent)}
                    />
                  </div>
                )}
              </TextBlockSection>
            );
          }

          return (
            <div key={section._key || crypto.randomUUID()}>
              {renderSection(section)}
            </div>
          );
        })}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($id: String!) {
    sanityPage(id: { eq: $id }) {
      title
      slug {
        current
      }
      _rawContent(resolveReferences: { maxDepth: 10 })
      content {
        ... on SanityHero {
          _key
          _type
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
          _key
          _type
          heading
          text
          button {
            text
            url
            variant
          }
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
        ... on SanityTextBlock {
          _key
          _type
          textAlignment
          textColor
          backgroundImage {
            asset {
              gatsbyImageData(
                width: 2000
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          _rawContent
        }
        ... on SanityColumnBlock {
          _key
          _type
          spacing
          alignment
          backgroundImage {
            asset {
              gatsbyImageData(
                width: 2000
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          _rawSections(resolveReferences: { maxDepth: 10 })
        }
      }
    }
  }
`;

export default PageTemplate;

import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { PortableText } from "@portabletext/react";
import { useLocation } from "@reach/router";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import {
  getEventbriteCode,
  withEventbriteDiscount,
} from "../../lib/eventbriteDiscount";
import "../../components/UI/BrandButton/BrandButton.scss";
import * as styles from "./event-landing.module.scss";

const portableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "";
      if (!href) return children;
      const external = /^https?:\/\//i.test(href);
      return (
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    },
  },
};

const detailCopy = {
  date: "Date",
  location: "Location",
  host: "Host",
  tags: "Tags",
};

const RichText = ({ value }) => {
  if (!Array.isArray(value) || value.length === 0) return null;
  return <PortableText value={value} components={portableTextComponents} />;
};

const RegisterLink = ({ href, children }) => {
  const location = useLocation();
  if (!href) return null;

  const eventbrite = href.toLowerCase().includes("eventbrite.com");
  const url = eventbrite
    ? withEventbriteDiscount(href, getEventbriteCode(location.search))
    : href;
  const external = /^https?:\/\//i.test(url);

  return (
    <a
      href={url}
      className={`button ${styles.action}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
};

const detailValue = (key, event) => {
  if (!event) return "";
  if (key === "date") {
    return [event.date, event.startTime].filter(Boolean).join(" · ");
  }
  if (key === "location") return event.location || "";
  if (key === "host") return event.host || "";
  if (key === "tags") {
    return (event.tags || [])
      .map((tag) => tag?.label || tag?.value)
      .filter(Boolean)
      .join(", ");
  }
  return "";
};

const buttonHref = (section, event) => {
  if (section.linkSource === "custom") return section.url || "";
  return event?.linkToEvent || "";
};

const Hero = ({ section, event }) => {
  const image = event?.picture?.asset?.gatsbyImageData;
  const heading = section.heading || event?.eventName;
  const subheading = section.subheading || event?.date;

  return (
    <section>
      {image && (
        <GatsbyImage
          image={image}
          alt={heading || "Event"}
          objectFit="cover"
          className={styles.heroImage}
        />
      )}
      <Container className="py-5">
        {subheading && <p className={styles.kicker}>{subheading}</p>}
        {heading && <Title>{heading}</Title>}
        <RichText value={section._rawText} />
        {section.showRegistrationButton && (
          <RegisterLink href={event?.linkToEvent}>
            {section.buttonLabel || "Register"}
          </RegisterLink>
        )}
      </Container>
    </section>
  );
};

const EventDetails = ({ section, event }) => {
  const rows = (section.details || [])
    .map((key) => ({
      key,
      label: detailCopy[key] || key,
      value: detailValue(key, event),
    }))
    .filter((row) => row.value);

  if (rows.length === 0) return null;

  return (
    <Container className="pb-5">
      <div className={styles.details}>
        {rows.map((row) => (
          <div key={row.key}>
            <div className={styles.detailLabel}>{row.label}</div>
            <div>{row.value}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const TextSection = ({ section }) => {
  if (!section.title && !section._rawText) return null;

  return (
    <Container className="pb-5">
      {section.title && <Title className="mb-3">{section.title}</Title>}
      <RichText value={section._rawText} />
    </Container>
  );
};

const Features = ({ section }) => {
  const features = section.features || [];
  if (!section.title && features.length === 0) return null;

  return (
    <Container className="pb-5">
      {section.title && <Title className="mb-4">{section.title}</Title>}
      <Row>
        {features.map((feature) => {
          const image = feature.image?.asset?.gatsbyImageData;
          return (
            <Col md={4} className="mb-4" key={feature._key}>
              {image && (
                <GatsbyImage
                  image={image}
                  alt={feature.title || ""}
                  className={styles.featureImage}
                />
              )}
              {feature.title && <h3>{feature.title}</h3>}
              {feature.text && <p>{feature.text}</p>}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const ImageAndLink = ({ section }) => {
  const image =
    section.image?.asset?.gatsbyImageData ||
    section.secondaryImage?.asset?.gatsbyImageData;
  if (!image && !section.title) return null;

  const picture = image ? (
    <GatsbyImage image={image} alt={section.alt || section.title || ""} />
  ) : null;

  return (
    <Container className="pb-5">
      {section.link && picture ? (
        <a
          href={section.link}
          className={styles.linkedImage}
          target="_blank"
          rel="noopener noreferrer"
        >
          {picture}
        </a>
      ) : (
        picture
      )}
      {section.title && <p className={styles.caption}>{section.title}</p>}
    </Container>
  );
};

const Questions = ({ section }) => {
  const faqs = (section._rawFaqs || []).filter((faq) => faq?.question);
  if (!section.title && faqs.length === 0) return null;

  return (
    <Container className="pb-5">
      {section.title && <Title className="mb-4">{section.title}</Title>}
      <Accordion>
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={String(index)} key={faq._id || faq.question}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

const ButtonSection = ({ section, event }) => {
  const href = buttonHref(section, event);
  if (!section.label || !href) return null;

  return (
    <Container className="pb-5">
      <RegisterLink href={href}>{section.label}</RegisterLink>
    </Container>
  );
};

const sectionsByType = {
  SanityHeroImage: Hero,
  SanityEventDetails: EventDetails,
  SanityTextSection: TextSection,
  SanityFeatures: Features,
  SanityImageLink: ImageAndLink,
  SanityFrequentlyAskedQuestions: Questions,
  SanityButton: ButtonSection,
};

const Section = ({ section, event }) => {
  const Component = sectionsByType[section.__typename];
  if (!Component) return null;
  return <Component section={section} event={event} />;
};

const EventLandingPage = ({ data }) => {
  const page = data.sanityPage;
  const event = page?.event;
  const sections = page?.content || [];

  return (
    <Layout pageTitle={page?.title || event?.eventName || "Event"}>
      {sections.map((section) => (
        <Section
          key={section._key || section.__typename}
          section={section}
          event={event}
        />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query EventLandingPage($id: String!) {
    sanityPage(id: { eq: $id }) {
      title
      event {
        eventName
        date(formatString: "MMMM D, YYYY")
        startTime: date(formatString: "h:mma")
        host
        location
        linkToEvent
        tags {
          label
          value
        }
        picture {
          asset {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
          }
        }
      }
      content {
        ... on SanityHeroImage {
          __typename
          _key
          heading
          subheading
          showRegistrationButton
          buttonLabel
          _rawText(resolveReferences: { maxDepth: 5 })
        }
        ... on SanityEventDetails {
          __typename
          _key
          details
        }
        ... on SanityTextSection {
          __typename
          _key
          title
          _rawText(resolveReferences: { maxDepth: 5 })
        }
        ... on SanityFeatures {
          __typename
          _key
          title
          features {
            _key
            title
            text
            image {
              asset {
                gatsbyImageData(width: 800, placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
        ... on SanityImageLink {
          __typename
          _key
          alt
          link
          title
          image {
            asset {
              gatsbyImageData(width: 1200, placeholder: DOMINANT_COLOR)
            }
          }
          secondaryImage {
            asset {
              gatsbyImageData(width: 400, placeholder: DOMINANT_COLOR)
            }
          }
        }
        ... on SanityFrequentlyAskedQuestions {
          __typename
          _key
          title
          _rawFaqs(resolveReferences: { maxDepth: 5 })
        }
        ... on SanityButton {
          __typename
          _key
          label
          linkSource
          url
        }
      }
    }
  }
`;

export default EventLandingPage;

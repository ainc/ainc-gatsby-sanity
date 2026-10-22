import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { PortableText } from "@portabletext/react";
import { useLocation } from "@reach/router";
import { Accordion, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandLink from "../../components/UI/BrandLink/BrandLink";
import {
  getEventbriteCode,
  withEventbriteDiscount,
} from "../../lib/eventbriteDiscount";
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

const RegisterLink = ({ href, children, className }) => {
  const location = useLocation();
  if (!href) return null;

  const eventbrite = href.toLowerCase().includes("eventbrite.com");
  const url = eventbrite
    ? withEventbriteDiscount(href, getEventbriteCode(location.search))
    : href;
  const external = /^https?:\/\//i.test(url);

  return (
    <BrandLink
      href={url}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </BrandLink>
  );
};

const SectionHeading = ({ children }) => (
  <div className={styles.sectionHeading}>
    <Title className="text-uppercase text-center">{children}</Title>
  </div>
);

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
  const heading = section.heading || event?.eventName;
  const subheading = section.subheading || event?.date;
  const eventImage = event?.picture?.asset?.gatsbyImageData;
  const slides = [
    ...(eventImage
      ? [
          {
            key: "event-picture",
            image: eventImage,
            alt: heading || "Event",
          },
        ]
      : []),
    ...(section.photos || [])
      .filter((photo) => photo?.image?.asset?.gatsbyImageData)
      .map((photo) => ({
        key: photo._key,
        image: photo.image.asset.gatsbyImageData,
        alt: photo.alt || heading || "Event",
      })),
  ];

  return (
    <section className={styles.hero}>
      {slides.length > 1 ? (
        <Carousel controls={false} className={styles.heroCarousel}>
          {slides.map((slide) => (
            <Carousel.Item key={slide.key}>
              <GatsbyImage
                image={slide.image}
                alt={slide.alt}
                objectFit="cover"
                className={styles.heroImage}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        slides[0] && (
          <GatsbyImage
            image={slides[0].image}
            alt={slides[0].alt}
            objectFit="cover"
            className={styles.heroImage}
          />
        )
      )}
      <div className={styles.heroScrim} aria-hidden="true" />
      <Container className={styles.heroContent}>
        {subheading && <Subtitle className="mb-3 white">{subheading}</Subtitle>}
        {heading && (
          <Title className="mb-3 white text--big">{heading}</Title>
        )}
        <div className={styles.heroText}>
          <RichText value={section._rawText} />
        </div>
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
    <section className={styles.detailsBand}>
      <Container>
        <div className={styles.details}>
          {rows.map((row) => (
            <div key={row.key}>
              <div className={styles.detailLabel}>{row.label}</div>
              <div className={styles.detailValue}>{row.value}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const TextSection = ({ section }) => {
  if (!section.title && !section._rawText) return null;

  return (
    <section className={styles.section}>
      <Container>
        {section.title && <SectionHeading>{section.title}</SectionHeading>}
        <div className={styles.copy}>
          <RichText value={section._rawText} />
        </div>
      </Container>
    </section>
  );
};

const Features = ({ section }) => {
  const features = section.features || [];
  if (!section.title && features.length === 0) return null;

  return (
    <section className={styles.section}>
      <Container>
        {section.title && <SectionHeading>{section.title}</SectionHeading>}
        <Row className="justify-content-center">
          {features.map((feature) => {
            const image = feature.image?.asset?.gatsbyImageData;
            return (
              <Col md={4} className="mb-4 d-flex" key={feature._key}>
                <Card className={styles.featureCard}>
                  {image && (
                    <GatsbyImage
                      image={image}
                      alt={feature.title || ""}
                      objectFit="cover"
                      className={styles.featureImage}
                    />
                  )}
                  <Card.Body>
                    {feature.title && (
                      <Subtitle className="text-uppercase">
                        {feature.title}
                      </Subtitle>
                    )}
                    {feature.text && <p className="mt-3">{feature.text}</p>}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
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
    <section className={styles.section}>
      <Container className={styles.imageBlock}>
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
        {section.title && (
          <p className={styles.caption}>{section.title}</p>
        )}
      </Container>
    </section>
  );
};

const Questions = ({ section }) => {
  const faqs = (section._rawFaqs || []).filter((faq) => faq?.question);
  if (!section.title && faqs.length === 0) return null;

  return (
    <section className={styles.section}>
      <Container>
        {section.title && <SectionHeading>{section.title}</SectionHeading>}
        <Accordion className={styles.questions}>
          {faqs.map((faq, index) => (
            <Accordion.Item
              eventKey={String(index)}
              key={faq._id || faq.question}
            >
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

const ButtonSection = ({ section, event }) => {
  const href = buttonHref(section, event);
  if (!section.label || !href) return null;

  return (
    <section className={`${styles.section} text-center`}>
      <Container>
        <RegisterLink href={href}>{section.label}</RegisterLink>
      </Container>
    </section>
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
          photos {
            _key
            alt
            image {
              asset {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
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

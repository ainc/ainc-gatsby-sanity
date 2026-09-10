import React, { useCallback, useRef, useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/UI/Title/Title";
// CSS module: class names in the scss file become styles.hero, styles.track, etc.
import * as styles from "./timeline.module.scss";

/**
 * /timeline — Gatsby page for Awesome Inc history.
 * Layout already draws Banner, Header, and Footer.
 * Data comes from Sanity "Timeline Event" documents (see studio/schemas/documents/timeline.js).
 */
const TimelinePage = ({ data }) => {
  // `data` is injected by the GraphQL query at the bottom of this file.
  const events = data.allSanityTimelineEvent?.nodes || [];

  // Unique years for the nav, oldest first. Same year twice (e.g. two 2010 events)
  // still only appears once in the year row / dropdown.
  const years = [...new Set(events.map((event) => event.year))].sort(
    (left, right) => Number(left) - Number(right),
  );

  // The <ol> of cards. Used so arrows / dropdown can scroll a specific <li> into view.
  const trackRef = useRef(null);

  // Which card is showing in the mobile carousel (0 = first / oldest event).
  const [activeIndex, setActiveIndex] = useState(0);
  const activeYear = events[activeIndex]?.year || years[0] || "";

  // Jump the card list to a given index. `block: "nearest"` keeps the page from
  // jumping vertically when we only meant to slide sideways on mobile.
  const scrollToIndex = useCallback(
    (index) => {
      const next = Math.max(0, Math.min(index, events.length - 1));
      const card = trackRef.current?.children[next];
      if (!(card instanceof HTMLElement)) {
        return;
      }

      card.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
      setActiveIndex(next);
    },
    [events.length],
  );

  // Keep the dropdown in sync when the user swipes the mobile carousel.
  const handleTrackScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) {
      return;
    }

    const next = Math.round(track.scrollLeft / track.clientWidth);
    setActiveIndex((current) => (current === next ? current : next));
  };

  // Mobile <select>: go to the first event that belongs to that year.
  const handleYearChange = (event) => {
    const year = event.target.value;
    const index = events.findIndex((item) => item.year === year);
    if (index >= 0) {
      scrollToIndex(index);
    }
  };

  return (
    <Layout>
      {/* Hero: full-width photo + red overlay + locked Trello copy. Not the Header. */}
      <section className={styles.hero}>
        <Container className={styles.heroInner}>
          {/* `white` is a Title.scss class so the heading stays readable on red. */}
          <Title className={`${styles.heroTitle} white text-center`}>
            A History of Awesome
          </Title>
          <p className={styles.heroCopy}>
            Over the past two decades Awesome Inc and APAX Software have made a
            significant impact on entrepreneurship and education throughout the
            Commonwealth. This timeline highlights the key events and successes
            of our organization.
          </p>
        </Container>
      </section>

      <section>
        <Container className={`pb-5 ${styles.milestones}`}>
          <Title className="text-center text-uppercase">Key Milestones</Title>

          {/* Desktop: year links. href="#year-2007" matches id on the first card of that year. */}
          {years.length > 0 && (
            <nav className={styles.yearNav} aria-label="Jump to year">
              {years.map((year) => (
                <a
                  key={year}
                  href={`#year-${year}`}
                  className={styles.yearLink}
                >
                  {year}
                </a>
              ))}
            </nav>
          )}

          {/* Mobile only (shown in CSS under 992px): prev / year select / next. */}
          {years.length > 0 && (
            <nav className={styles.mobileNav} aria-label="Timeline controls">
              <button
                type="button"
                className={styles.mobileArrow}
                onClick={() => scrollToIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous milestone"
              >
                ‹
              </button>
              <select
                className={styles.mobileYearSelect}
                value={activeYear}
                onChange={handleYearChange}
                aria-label="Jump to year"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className={styles.mobileArrow}
                onClick={() => scrollToIndex(activeIndex + 1)}
                disabled={activeIndex === events.length - 1}
                aria-label="Next milestone"
              >
                ›
              </button>
            </nav>
          )}

          {/*
            ONE list of cards for both layouts. Desktop CSS stacks them (vertical
            line + dots). Mobile CSS makes this a horizontal swipe carousel.
            Do not duplicate this list for mobile — that would download photos twice.
          */}
          <ol
            ref={trackRef}
            className={styles.track}
            onScroll={handleTrackScroll}
          >
            {events.map((event, index) => {
              // Only the first event of a year gets id="year-2010" (HTML ids must be unique).
              const isFirstOfYear =
                events.findIndex((item) => item.year === event.year) === index;

              return (
                <li
                  key={event._id}
                  id={isFirstOfYear ? `year-${event.year}` : undefined}
                  className={styles.item}
                >
                  {/* Decorative spine marker; hidden on mobile. aria-hidden = not for screen readers. */}
                  <span className={styles.dot} aria-hidden="true" />
                  <article className={styles.card}>
                    {event.image?.asset?.gatsbyImageData && (
                      <GatsbyImage
                        image={event.image.asset.gatsbyImageData}
                        alt={event.title}
                        className={styles.cardImage}
                      />
                    )}
                    <div className={styles.cardBody}>
                      <p className={styles.date}>{event.date}</p>
                      <h2 className={styles.cardTitle}>{event.title}</h2>
                      {event.description && (
                        <p className={styles.cardText}>{event.description}</p>
                      )}
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>
    </Layout>
  );
};

// Gatsby runs this at build time and passes the result as the `data` prop above.
// Sort oldest-first so the default (index 0) is APAX if that is the earliest date.
// `year:` is an alias: same Sanity date field, formatted as "2007" for the nav.
export const query = graphql`
  query TimelinePageQuery {
    allSanityTimelineEvent(sort: { date: ASC }) {
      nodes {
        _id
        date(formatString: "MMMM D, YYYY")
        year: date(formatString: "YYYY")
        title
        description
        image {
          asset {
            gatsbyImageData(width: 900, placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`;

export default TimelinePage;

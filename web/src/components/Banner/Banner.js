import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect } from "react";
import * as styles from "./Banner.module.scss";
import { useLocation } from "@reach/router";

const Banner = () => {
  const currentDate = new Date().toISOString().slice(0, 10);

  const bannerData = useStaticQuery(graphql`
    query newfiveAcrossQuery($currentDate: Date) {
      allSanityEvents(
        filter: {
          reference: { eventTypeName: { eq: "5 Across" } }
          date: { gte: $currentDate }
        }
        sort: { date: ASC }
      ) {
        nodes {
          eventName
          date(formatString: "MMMM D, YYYY")
          host
          location
          linkToEvent
          picture {
            asset {
              gatsbyImageData
            }
          }
          reference {
            eventTypeName
          }
        }
      }
    }
  `);

  const upcoming = bannerData.allSanityEvents.nodes.filter(
    (event) => new Date(event.date) >= new Date(currentDate)
  );

  const showUpcoming =
    upcoming.length > 0 ? (
      <p>
        Sign up <a href={upcoming[0].linkToEvent}>here</a> for 5 Across -{" "}
        {upcoming[0].date}{" "}
      </p>
    ) : null;

  // ------------------ Countdown ------------------
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const targetDate = new Date("December 3, 2025 17:00:00"); // hard-coded
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  // ------------------------------------------------

  return (
    useLocation().pathname !== "/bootcamp/" && (
      <div
        role="banner"
        className={`${styles.banner} ${!showUpcoming ? styles.noPadding : ""}`}
      >
        {showUpcoming}
        <p className={styles.countdown}>
          Event starts in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </p>
      </div>
    )
  );
};

export default Banner;

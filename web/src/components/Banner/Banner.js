import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect } from "react";
import * as styles from "./Banner.module.scss";
import { useLocation } from "@reach/router";

const Banner = () => {
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

  const currentDate = new Date().toISOString().slice(0, 10);

  const upcoming = bannerData.allSanityEvents.nodes.filter(
    (event) => new Date(event.date) >= new Date(currentDate),
  );
  const showUpcoming =
    currentDate > upcoming ? null : (
      <p>
        Sign up <a href={upcoming[0].linkToEvent}>here</a> for 5 Across -{" "}
        {upcoming[0].date}{" "}
      </p>
    );

  return (
    useLocation().pathname !== "/bootcamp/" && (
      <div
        role="banner"
        className={`${styles.banner} ${!showUpcoming ? styles.noPadding : ""}`}
      >
        {showUpcoming}
      </div>
    )
  );
};

export default Banner;

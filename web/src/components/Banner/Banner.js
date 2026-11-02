import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import * as styles from "./Banner.module.scss";
import { useLocation } from "@reach/router";

const Banner = () => {
  const bannerData = useStaticQuery(graphql`
    query bannerQuery {
      sanityBanner {
        enabled
        link {
          title
          url
          behavior
        }
      }
    }
  `);

  const banner = bannerData.sanityBanner;
  const showBanner =
    banner?.enabled && banner?.link?.title && banner?.link?.url;

export const upcoming_5a = graphql`
query MyQuery {
  allSanityEvents(filter: {eventName: {glob: "5 Across -*"}}, sort: {_rev: ASC}) {
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
}`;

export default Banner






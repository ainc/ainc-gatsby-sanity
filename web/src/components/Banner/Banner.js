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

  return (
    useLocation().pathname !== "/bootcamp/" && (
      <div
        role="banner"
        className={`${styles.banner} ${!showBanner ? styles.noPadding : ""}`}
      >
        {showBanner && (
          <a
            href={banner.link.url}
            target={banner.link.behavior === "new_tab" ? "_blank" : "_self"}
            rel={
              banner.link.behavior === "new_tab"
                ? "noopener noreferrer"
                : undefined
            }
            style={{ fontSize: "1rem" }}
          >
            {banner.link.title}
          </a>
        )}
      </div>
    )
  );
};

export default Banner;

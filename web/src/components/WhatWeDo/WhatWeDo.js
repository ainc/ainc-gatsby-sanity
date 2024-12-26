import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Image, Row } from "react-bootstrap";
import * as styles from "./WhatWeDo.module.scss";
import Subtitle from "../UI/Subtitle/Subtitle";
import redAsterisk from "../../images/what-we-do/red-asterisk.png";

const WhatWeDoBox = ({ item }) => {
  const partnerships = ["Startup Lexington", "Startup Weekend", "UndrCvr Lex"];
  const description = item.description.replace(/\s([^\s<]+)\s*$/, "\u00A0$1"); // Remove orphan words.
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center text-center">
      <div
        className={`${styles.logoContainer} d-flex flex-column justify-content-center align-items-center text-center`}
      >
        <a href={item.linkToPage} className="d-flex align-items-center">
          <Image
            className={`${styles.logo}`}
            src={item.logo.asset.url}
            alt={item.title}
          />
          {partnerships.includes(item.title) && (
            <Image
              className={`${styles.asterisk}`}
              src={redAsterisk}
              alt="Red asterisk"
            />
          )}
        </a>
      </div>
      <p className={`${styles.logoDescription}  mt-auto`}>{description}</p>
    </Container>
  );
};

export default WhatWeDoBox;

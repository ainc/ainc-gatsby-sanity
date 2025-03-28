import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

import * as styles from "./BackgroundCard.module.scss";

const BackgroundCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  //Scroll to a specific section when card is clicked
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
      {props.sectionRef ? (
        <a
          onClick={() => scrollToSection(props.sectionRef)}
          style={{ cursor: "pointer" }}
        >
          <Card
            className={`${styles.cardBackgroundFilter} col-xs-12`}
            style={{ backgroundImage: `url(${props.backgroundImage})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Card.Body className="card-body--background-card p-1">
              <Card.Img
                variant="top"
                src={props.imgSrc}
                alt={props.alt}
                className="d-block mx-auto mt-3 w-50"
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1.0)",
                  transition: "0.3s",
                }}
              />
              <Card.Title
                className={`text-uppercase text-white text-center fw-bold mt-3 ${styles.cardTitle}`}
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1.0)",
                  transition: "0.3s",
                }}
              >
                {props.title}
              </Card.Title>
              <Card.Text
                className={`text-white text-center mb-5 ${styles.cardText}`}
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1.0)",
                  transition: "0.3s",
                }}
              >
                {props.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      ) : (
        <a
          href={props.link}
          style={{ cursor: "pointer" }} // Added cursor: pointer
        >
          <Card
            className={`${styles.cardBackgroundFilter} col-xs-12`}
            style={{ backgroundImage: `url(${props.backgroundImage})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Card.Body className="card-body--background-card p-1">
              <Card.Img
                variant="top"
                src={props.imgSrc}
                alt={props.alt}
                className="d-block mx-auto mt-3 w-50"
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1.0)",
                  transition: "0.3s",
                }}
              />
              <Card.Title
                className={`text-uppercase text-white text-center fw-bold mt-3 ${styles.cardTitle}`}
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1.0)",
                  transition: "0.3s",
                }}
              >
                {props.title}
              </Card.Title>
              <Card.Text
                className={`text-white text-center mb-5 ${styles.cardText}`}
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1.0)",
                  transition: "0.3s",
                }}
              >
                {props.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      )}
    </motion.div>
  );
};

export default BackgroundCard;

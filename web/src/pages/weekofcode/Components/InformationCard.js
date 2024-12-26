import React, { useEffect, useState, useRef } from "react";
import * as styles from "./InformationCard.module.css";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Carousel,
} from "react-bootstrap";

const InformationCard = (props) => {
  const { float, title, children, textAlign } = props;

  return (
    <>
      <div className={styles.ovalContainer} style={{ float: float }}>
        <div style={{ float: float }}>
          {" "}
          {/* Float title separately */}
          <div
            className={`${styles.ovalTitle} text-white d-flex justify-content-center align-items-center`}
            style={{ float: float }}
          >
            {title}
          </div>
        </div>
        <div className={styles.ovalBlock} style={{ textAlign: textAlign }}>
          {children}
        </div>
      </div>
      <div style={{ clear: "both" }}></div> {/* Clear the float */}
    </>
  );
};

export default InformationCard;

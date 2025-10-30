import React, { useEffect, useState, useRef } from "react";
import * as styles from "./ProjectCard.module.css";
import SEO from "../../../components/seo";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Carousel,
} from "react-bootstrap";
import { Image } from "react-bootstrap";

const ProjectCard = ({ image, description }) => {
  return (
    <>
      <SEO
        title="Project Card"
        meta={[
          {
            name: "robots",
            content: "noindex, nofollow",
          },
        ]}
      />
      <Col className={`${styles.block}`}>
        <Row className="d-flex justify-content-center mb-5">
          <div className={styles.avatarContainer}>
            <Image src={image} alt={"Logo"} className={styles.avatar} />
          </div>
        </Row>
        <Row className="d-flex text-center">
          <p className="fw-bold">{description}</p>
        </Row>
      </Col>
    </>
  );
};

export default ProjectCard;

import React, { Component } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Col } from "react-bootstrap";
import SEO from "../../../../components/seo";
import Subtitle from "../../../../components/UI/Subtitle/Subtitle";
import * as styles from "../profileCard.module.scss";

const ProfileCard = (props) => {
  return (
    <>
      <SEO
        title="Profile Card"
        meta={[
          {
            name: "robots",
            content: "noindex, nofollow",
          },
        ]}
      />
      <Col className="d-flex justify-content-center">
        <div className={`${styles.profileCard} text-center `}>
          <GatsbyImage
            image={props.image}
            alt="Profile Image"
            className={`${styles.cardImg} img-circle`}
          />
          <div className={`${styles.cardContainer} background--gray rounded`}>
            <Subtitle className="text-white fs-2 mt-4 pt-4 fancy-font">
              meet {props.name}
            </Subtitle>
            {/* <Subtitle className="text-white fs-2 mt-4 pt-4 fancy-font">meet stephen</Subtitle> */}
            <p
              style={{ fontSize: "12px", lineHeight: "12px" }}
              className="text-center text-white pt-2 mb-1 mx-3 mt-2 px-2"
            >
              {props.text1}
            </p>
            <p
              style={{ fontSize: "12px", lineHeight: "12px" }}
              className="text-center text-white text--micro pb-3 mx-3 px-0"
            >
              {props.text2}
            </p>
          </div>
        </div>
      </Col>
    </>
  );
};

export default ProfileCard;

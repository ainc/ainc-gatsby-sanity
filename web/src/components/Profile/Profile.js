import React, { useState } from "react";
import {
  ButtonGroup,
  Button,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";

import Ribbon from "../Ribbon/Ribbon";

import "../../styles/main.scss";
import * as styles from "./Profile.module.scss";
import { btnGroupFullWidth } from "./Profile.module.scss";

const Profile = ({
  variant,
  name,
  image,
  linkedin,
  github,
  website,
  position,
  occupation,
  fact,
  rule,
  song,
  favoritePerson,
}) => {
  const [showText, setShowText] = useState("");

  const handleMouseOver = (event) => {
    setShowText(event.target.id);
  };

  const handleMouseOut = () => {
    setShowText(""); // reset the state
  };

  {
    /* /mentors cards */
  }
  const renderVariantOne = () => (
    <React.Fragment>
      <Card className="rounded-0">
        <div>
          <GatsbyImage image={image} className="card-img-top" alt={name} />
          {position && <Ribbon position={position}></Ribbon>}
        </div>
        <Card.Body>
          <Card.Text className="text-center my-1 fs-6 fw-bold">
            {name}
          </Card.Text>
          {occupation && (
            <p className="text-center text--micro mb-2">{occupation}</p>
          )}
          <ButtonGroup size="sm" className={`btn-group ${btnGroupFullWidth}`}>
            {website && (
              <Button href={website} variant="outline-dark" target="_blank">
                Portfolio
              </Button>
            )}
            {linkedin && (
              <Button href={linkedin} variant="outline-dark" target="_blank">
                LinkedIn
              </Button>
            )}
            {github && (
              <Button href={github} variant="outline-dark" target="_blank">
                GitHub
              </Button>
            )}
          </ButtonGroup>
        </Card.Body>
      </Card>
    </React.Fragment>
  );

  {
    /* Team alpha cards */
  }
  const renderVariantTwo = () => (
    <React.Fragment>
      <Card
        className={`rounded-0 mb-3 ${styles.profile}`}
        style={{ maxWidth: "300px" }}
      >
        <div className={styles.pictureDiv}>
          <GatsbyImage
            image={image}
            className={`card-img-top`}
            alt={name}
            quality="100"
          />
          <div
            className={` ${styles.figcaption} ${showText == "fact" ? styles.figcaptionShow : ""}`}
          >
            <div className={styles.attributeText}>
              <p className="fw-bold">Random Fact: </p>
              {fact}
            </div>
          </div>

          <div
            className={` ${styles.figcaption} ${showText == "rule" ? styles.figcaptionShow : ""}`}
          >
            <div className={styles.attributeText}>
              <p className="fw-bold">Favorite Rule: </p>
              {rule}
            </div>
          </div>

          <div
            className={` ${styles.figcaption} ${showText == "song" ? styles.figcaptionShow : ""}`}
          >
            <div className={styles.attributeText}>
              <p className="fw-bold">Favorite Song: </p>
              {song}
            </div>
          </div>

          <div
            className={` ${styles.figcaption} ${showText == "person" ? styles.figcaptionShow : ""}`}
          >
            <div className={styles.attributeText}>
              <p className="fw-bold">Favorite Person: </p>
              {favoritePerson}
            </div>
          </div>
        </div>
        <div className="buttonGroup">
          <Card.Body>
            <Card.Text className="text-center my-1 fs-6 fw-bold">
              {name}
            </Card.Text>
            {occupation && (
              <p className="text-center text--micro mb-2 lh-1">{occupation}</p>
            )}

            {/* Button Container */}
            <Container>
              <Row className="d-flex justify-content-center text--micro text-center">
                <Col
                  xs={6}
                  id="fact"
                  className={styles.attributeButton}
                  onMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                >
                  Random Fact
                </Col>

                <Col
                  xs={6}
                  id="rule"
                  className={styles.attributeButton}
                  onMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                >
                  Favorite Rule
                </Col>

                <Col
                  xs={6}
                  id="song"
                  className={styles.attributeButton}
                  onMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                >
                  Favorite Song
                </Col>

                <Col
                  xs={6}
                  id="person"
                  className={styles.attributeButton}
                  onMouseEnter={handleMouseOver}
                  onMouseLeave={handleMouseOut}
                >
                  Favorite Person
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </div>
      </Card>
    </React.Fragment>
  );

  const renderContent = () => {
    switch (variant) {
      case "one": // profile card regular
        return renderVariantOne();
      case "two": // team alpha card
        return renderVariantTwo();
      default: //(default) profile card regular
        return renderVariantOne();
    }
  };

  return <div>{renderContent()}</div>;
};

export default Profile;

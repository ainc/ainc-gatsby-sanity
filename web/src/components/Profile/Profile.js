import React, { useState } from "react";
// import { graphql } from 'gatsby'
import { ButtonGroup, Button, Card, Container, Row, Col } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import Ribbon from "../Ribbon/Ribbon";
import * as styles from './Profile.module.scss'
// import {FaUser} from 'react-icons/fa';
import { btnGroupFullWidth } from "./Profile.module.scss";
import "../../styles/main.scss"


const Profile = ({ variant, name, image, linkedin, github, website, position, occupation, fact, rule, song, favoritePerson }) => {

  const [showText, setShowText] = useState("");

  const handleMouseOver = (event) => {
    setShowText(event.target.id);
    console.log('hello there')
  };

  const handleMouseOut = () => {
    setShowText(""); // reset the state
  };

  {/* /mentors cards */ }
  const renderVariantOne = () => (
    <React.Fragment>
      <Card className='rounded-0'>
        <div>
          <GatsbyImage image={image} className="card-img-top" alt={name} />
        </div>
        <Card.Body>
          {position && <Ribbon position={position}></Ribbon>}
          <Card.Text className="text-center my-1 fs-6 fw-bold">{name}</Card.Text>
          {occupation && <p className='text-center text--micro mb-2'>{occupation}</p>}
          <ButtonGroup size="sm" className={`btn-group ${btnGroupFullWidth}`}>
            {website && <Button href={website} variant="outline-dark">
              Portfolio
            </Button>}
            {linkedin && <Button href={linkedin} variant="outline-dark">
              LinkedIn
            </Button>}
            {github && <Button href={github} variant="outline-dark">
              GitHub
            </Button>}
          </ButtonGroup>
        </Card.Body>
      </Card>
    </React.Fragment>
  );

  {/* Team alpha cards */ }
  const renderVariantTwo = () => (

    <React.Fragment>
      <Card className={`rounded-0 mb-3 ${styles.profile}`}>
          <div className={styles.pictureDiv}>
            <GatsbyImage
              image={image}
              className={`card-img-top`}
              alt={name}
              quality="100"
            />
            <div className={` ${styles.figcaption} ${showText == "fact" ? styles.figcaptionShow : "" }`}>
              <p className={styles.attributeText}><span className='fw-bold'>Random Fact: </span>{fact}</p>
            </div>
            
            <div className={` ${styles.figcaption} ${showText == "rule" ? styles.figcaptionShow : ""}`}>
              <p className={styles.attributeText}><span className='fw-bold'>Favorite Rule: </span>{rule}</p>
            </div>

            <div className={` ${styles.figcaption} ${showText == "song" ? styles.figcaptionShow : ""}`}>
              <p className={styles.attributeText}><span className='fw-bold'>Favorite Song: </span>{song}</p>
            </div>

            <div className={` ${styles.figcaption} ${showText == "person" ? styles.figcaptionShow : ""}`}>
              <p className={styles.attributeText}><span className='fw-bold'>Favorite Person: </span>{favoritePerson}</p>
            </div>
          </div>
          <div className='buttonGroup'>
            <Card.Body>
              <Card.Text className="text-center my-1 fs-6 fw-bold">{name}</Card.Text>
              {occupation && <p className='text-center text--micro mb-2 lh-1'>{occupation}</p>}

              {/* Button Container */}
              <Container>
                <Row className='d-flex justify-content-center text--micro text-center'>
                  <Col xs={6} 
                    id="fact" 
                    className={styles.attributeButton}
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                  >
                    Random Fact
                  </Col>

                  <Col xs={6}
                    id="rule"
                    className={styles.attributeButton}
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                  >
                    Favorite Rule
                  </Col>

                  <Col xs={6}
                    id="song"
                    className={styles.attributeButton}
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                  >
                    Favorite Song
                  </Col>

                  <Col xs={6} 
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

  return (
    <div>
      {renderContent()}
    </div>

  );
};

export default Profile;

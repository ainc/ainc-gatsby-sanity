import React, { useState } from "react";
// import { graphql } from 'gatsby'
import { ButtonGroup, Button, Card, Container } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import Ribbon from "../Ribbon/Ribbon";
import * as styles from './Profile.module.scss'
// import {FaUser} from 'react-icons/fa';
import { btnGroupFullWidth } from "./Profile.module.scss";


const Profile = ({ variant, name, image, linkedin, github, website, position, occupation, fact, rule, song, favoritePerson }) => {

  const [showText, setShowText] = useState("");

  const handleMouseOver = (event) => {
    setShowText(event.target.id);
    console.log('hello there')
  };

  const handleMouseOut = () => {
    setShowText("");
    console.log('bye')
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
            {website && <Button onMouseOver={MouseOver} onMouseOut={MouseOut} href={website} variant="outline-dark">
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
        <figure className={styles.figure}>
          <div className={styles.pictureDiv}>
            <GatsbyImage
              image={image}
              className={`card-img-top ${styles.profileImage}`}
              alt={name}
            />
            <div
              className={` ${styles.figcaption} ${showText == "fact" ? styles.figcaptionShow : styles.figcaptionHide }`}

            >
              <p className={styles.lgxVerticalFact}><p className='fw-bold ms-0 '>Random Fact: </p>{fact}</p>
            </div>
            <div
              className={` ${styles.figcaptionRule} ${showText == "rule" ? styles.figcaptionRuleShow : ""}`}

            >
              <p className={styles.lgxVerticalRule}><p className='fw-bold ms-0 '>Favorite Rule: </p>{rule}</p>
            </div>
            <div
              className={` ${styles.figcaptionSong} ${showText == "song" ? styles.figcaptionSongShow : ""}`}

            >
              <p className={styles.lgxVerticalSong}><p className='fw-bold ms-0 '>Favorite Song: </p>{song}</p>
            </div>
            <div
              className={` ${styles.figcaptionPerson} ${showText == "person" ? styles.figcaptionPersonShow : ""}`}

            >
              <p className={styles.lgxVerticalPerson}><p className='fw-bold ms-0 '>Favorite Person: </p>{favoritePerson}</p>
            </div>
          </div>
          <div className='buttonGroup'>
            <Card.Body>
              {position && <Ribbon position={position}></Ribbon>}
              <Card.Text className="text-center my-1 fs-6 fw-bold">{name}</Card.Text>
              {occupation && <p className='text-center text--micro mb-2 lh-1'>{occupation}</p>}
              <div className='d-flex justify-content-center'>
                <ButtonGroup size="sm" className={`btn-group row row-cols-2 ${styles.btnGroupFullWidth}`}>
                  {fact && <Button
                    id="fact"
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                    className={`rounded-0 ${styles.factButton}`}
                    variant="outline-dark">
                    Random Fact
                  </Button>}

                  {rule && <Button
                    id="rule"
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                    className={`  ${styles.ruleButton}`}
                    variant="outline-dark">
                    Favorite Rule
                  </Button>}

                  {song && <Button
                    id="song"
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                    className={` text-center border-top-0 ${styles.songButton}`}
                    variant="outline-dark">
                    Favorite Song
                  </Button>}


                  {favoritePerson && <Button
                    id="person"
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                    className={` text-center border-top-0 rounded-0 ${styles.personButton}`}
                    variant="outline-dark">
                    Favorite Person
                  </Button>}

                </ButtonGroup>


              </div>


            </Card.Body>
          </div>
        </figure>
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

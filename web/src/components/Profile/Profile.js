import React, { useState } from "react";
// import { graphql } from 'gatsby'
import { ButtonGroup, Button, Card, Container } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import Ribbon from "../Ribbon/Ribbon";
import * as styles from './Profile.module.scss'
// import {FaUser} from 'react-icons/fa';
import { btnGroupFullWidth } from "./Profile.module.scss";


const Profile = ({ variant, name, image, linkedin, github, website, position, occupation, fact, rule, song, favoritePerson }) => {

  const [showText, setShowText] = useState(false);

  const handleMouseOver = () => {
    setShowText(true);
  };

  const handleMouseOut = () => {
    setShowText(false);
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

          <GatsbyImage
            image={image}
            className={`card-img-top ${styles.profileImage}`}
            alt={name}
          />
          
          <div className='buttonGroup'>
            <Card.Body>
              {position && <Ribbon position={position}></Ribbon>}
              <Card.Text className="text-center my-1 fs-6 fw-bold">{name}</Card.Text>
              {occupation && <p className='text-center text--micro mb-2'>{occupation}</p>}
              <div className='d-flex justify-content-center'>
                <ButtonGroup size="sm" className={`btn-group row row-cols-2 ${btnGroupFullWidth}`}>
                  {fact && <Button className={`rounded-start ${styles.factButton}`} variant="outline-dark">
                    Random Fact
                  </Button>}
                  <figcaption className={` ${styles.figcaption}`}>
                    <p className={styles.lgxVerticalFact}><p className='fw-bold ms-0 '>Random Fact: </p>{fact}</p>
                  </figcaption>
                  {rule && <Button className={` rounded-end ${styles.ruleButton}`} variant="outline-dark">
                    Favorite Rule
                  </Button>}
                  <figcaption className={styles.figcaptionRule}>
                    <p className={styles.lgxVerticalRule}><p className='fw-bold ms-0 '>Favorite Rule: </p>{rule}</p>
                  </figcaption>
                  {song && <Button className={` rounded-start border-top-0 ${styles.songButton}`} variant="outline-dark">
                    Favorite Song
                  </Button>}
                  <figcaption className={styles.figcaptionSong}>
                    <p className={styles.lgxVerticalSong}><p className='fw-bold ms-0 '>Favorite Song: </p>{song}</p>
                  </figcaption>

                  {favoritePerson && <Button className={` rounded-end border-top-0 ${styles.personButton}`} variant="outline-dark">
                    Favorite Person</Button>}
                  <figcaption className={styles.figcaptionPerson}>
                    <p className={`${styles.lgxVerticalPerson}`}><p className='fw-bold ms-0 '>Favorite Person: </p>{favoritePerson}</p>
                  </figcaption>
                </ButtonGroup>


              </div>
              {/* <div className={styles.test}></div>

            <div className="imageBox">
              <image/>
              <caption>{fact}</caption>
            </div>

            <div className="buttongroup">
              <button>fact</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
            </div> */}


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

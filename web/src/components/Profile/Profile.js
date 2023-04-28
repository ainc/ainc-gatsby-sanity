import React from "react";
// import { graphql } from 'gatsby'
import { ButtonGroup, Button, Card, Container } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import Ribbon from "../Ribbon/Ribbon";
import * as styles from './Profile.module.scss'

import { btnGroupFullWidth } from "./Profile.module.scss";


const Profile = ( { variant, name, image, linkedin, github, website, position, occupation, fact, rule, song, favoritePerson }) => {

    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);
    
  const renderVariantOne = () => (
    <React.Fragment>
          <Card className='rounded-0'> 
      <GatsbyImage image={image} className="card-img-top" alt={name} />
      <Card.Body>
        { position && <Ribbon position={position}></Ribbon>}
        <Card.Text className="text-center my-1 fs-6 fw-bold">{name}</Card.Text>
        { occupation && <p className='text-center text--micro mb-2'>{occupation}</p>}
        <ButtonGroup size="sm" className={`btn-group ${btnGroupFullWidth}`}>
          { website && <Button href={website} variant="outline-dark">
            Portfolio
          </Button>}
          { linkedin && <Button href={linkedin} variant="outline-dark">
            LinkedIn
          </Button>}
          { github && <Button href={github} variant="outline-dark">
            GitHub
          </Button>}
        </ButtonGroup>
      </Card.Body>
    </Card>
    </React.Fragment>
  );

  const renderVariantTwo = () => (
    <React.Fragment>
      <Card className='rounded-0'> 
      <div className={styles.profile}>
      <figure className={styles.figure}>
      <GatsbyImage image={image} className="card-img-top" alt={name} />
      <Card.Body>
        { position && <Ribbon position={position}></Ribbon>}
        <Card.Text className="text-center my-1 fs-6 fw-bold">{name}</Card.Text>
        { occupation && <p className='text-center text--micro mb-2'>{occupation}</p>}
        <ButtonGroup size="sm" className={`btn-group ${btnGroupFullWidth}`}>
          { fact && <Button href={fact} variant="outline-dark"><figcaption className={styles.figcaption}>
            <div className={styles.optionHover}>
              <p className={styles.optionText}>{fact}</p>
            </div>
          </figcaption>
            Fun Fact
          </Button>}
          { rule && <Button href={rule} variant="outline-dark">
            Favorite Rule
          </Button>}
          { song && <Button href={song} variant="outline-dark">
            Favorite Song
          </Button>}
          { favoritePerson && <Button href={favoritePerson} variant="outline-dark">
            Favorite Person</Button>}
        </ButtonGroup>
      </Card.Body>
      
      </figure>
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

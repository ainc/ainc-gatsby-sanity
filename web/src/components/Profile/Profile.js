import * as React from "react";
// import { graphql } from 'gatsby'
import { ButtonGroup, Button, Card } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import Ribbon from "../Ribbon/Ribbon";

import { btnGroupFullWidth } from "./Profile.module.css";


const Profile = ({ name, image, linkedin, github, website, position, occupation }) => {
  return (
    // <div className={`card ${cardShadow}`}>
    <Card className='rounded-0'> 
      <GatsbyImage image={image} className="card-img-top" alt={name} />
      <Card.Body>
        { position && <Ribbon position={position}></Ribbon>}
        <Card.Text className="text-center my-1 fs-6">{name}</Card.Text>
        { occupation && <p className='text-center text--micro my-0'>{occupation}</p>}
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
  );
};

export default Profile;

import * as React from "react";
// import { graphql } from 'gatsby'
import { ButtonGroup, Button, Card } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import Ribbon from "../Ribbon/Ribbon";

import { btnGroupFullWidth } from "./Profile.module.css";

const Profile = ({ name, image, linkedin, github, website, position }) => {
  return (
    // <div className={`card ${cardShadow}`}>
    <Card>
      <GatsbyImage image={image} className="card-img-top" alt={name} />
      <Card.Body>
        <Ribbon position={position}></Ribbon>
        <Card.Text className="text-center">{name}</Card.Text>
        <ButtonGroup size="sm" className={`btn-group ${btnGroupFullWidth}`}>
          <Button href={website} variant="outline-dark">
            Portfolio
          </Button>
          <Button href={linkedin} variant="outline-dark">
            LinkedIn
          </Button>
          <Button href={github} variant="outline-dark">
            GitHub
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default Profile;

import * as React from "react";
// import { graphql } from 'gatsby'
import { ButtonGroup, Button, Card } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import Ribbon from "../Ribbon/Ribbon";

import { btnGroupFullWidth } from "./Profile.module.css";


const Profile = ({ name, image, linkedin, github, website, position, occupation }) => {
  return (
    <Card className='rounded-0'> 
      <GatsbyImage image={image} className="card-img-top" alt={name} />
      <Card.Body>
        <Card.Text className="text-center my-1 fs-6 fw-bold">{name}</Card.Text>
        <p className='text-center text--micro mb-2'>{occupation}</p>
        <ButtonGroup size="sm" className={`btn-group ${btnGroupFullWidth}`}>
          <Button href={linkedin} variant="outline-dark">
            LinkedIn
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default Profile;

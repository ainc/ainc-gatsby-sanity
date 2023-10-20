import React from 'react';
import BrandButton from '../../../components/UI/BrandButton/BrandButton';
import { Col } from "react-bootstrap";
import * as styles from "./fiveAcross.module.scss";

export default function HorizontalButtons() {
  return (
    <>
      <Col md="auto" className="d-flex justify-content-center">
          <a href="https://forms.zohopublic.com/virtualoffice9155/form/5AcrossApplication1/formperma/i3hM2QiFcJG1DM_nCW8jQvMplp5UUFgRbKc5Ev8kuiA"
            target="_blank"
            rel="noopener">
              <BrandButton className={`secondary text-uppercase`}>Apply to Pitch</BrandButton>
            </a>
         
      </Col>
      <Col md="auto" className="d-flex justify-content-center">
        <a href="https://www.eventbrite.com/e/5-across-october-2023-entrepreneur-pitch-competition-awesome-inc-tickets-705466097087"
          target="_blank"
          rel="noopener">
          <BrandButton className={`secondary text-uppercase`}>Register to Attend</BrandButton>
        </a>
      </Col>
    </>
  )
}

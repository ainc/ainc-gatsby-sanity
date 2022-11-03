import React from 'react';
import BrandButton from '../../../components/UI/BrandButton/BrandButton';
import { Col } from "react-bootstrap";
import * as styles from "./fiveAcross.module.scss";

export default function HorizontalButtons() {
  return (
    <>
      <Col md="auto" className="d-flex justify-content-center">
          <BrandButton className={`secondary text-uppercase`}>Apply to Pitch</BrandButton>
      </Col>
      <Col md="auto" className="d-flex justify-content-center">
          <BrandButton className={`secondary text-uppercase`}>Register to Attend</BrandButton>
      </Col>
    </>
  )
}

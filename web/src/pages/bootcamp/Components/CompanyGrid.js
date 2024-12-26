import React from "react";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";

function CompanyGrid(props) {
  return (
    <div>
      <Row>
        <Row className="pt-4 pb-3">
          <Col>
            <GatsbyImage src={props.src1} alt={props.alt1}></GatsbyImage>
          </Col>
          <Col>
            <GatsbyImage src={props.scr2} alt={props.alt2}></GatsbyImage>
          </Col>
          <Col>
            <GatsbyImage src={props.src3} alt={props.alt3}></GatsbyImage>
          </Col>
          <Col>
            <GatsbyImage src={props.src4} alt={props.alt4}></GatsbyImage>
          </Col>
          <Col>
            <GatsbyImage src={props.src5} alt={props.alt5}></GatsbyImage>
          </Col>
        </Row>
        <Row className="pb-3 pt-3">
          <Col>
            <GatsbyImage src={props.src6} alt={props.alt6}></GatsbyImage>
          </Col>
          <Col>
            <GatsbyImage src={props.src7} alt={props.alt7}></GatsbyImage>
          </Col>
          <Col>
            <GatsbyImage src={props.src8} alt={props.alt8}></GatsbyImage>
          </Col>
          <Col>
            <GatsbyImage src={props.src9} alt={props.alt9}></GatsbyImage>
          </Col>
          <Col>
            <GatsbyImage src={props.src10} alt={props.alt10}></GatsbyImage>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default CompanyGrid;

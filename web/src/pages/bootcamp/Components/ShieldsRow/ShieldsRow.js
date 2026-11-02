import React from "react";
import { Row, Col } from "react-bootstrap";
import Shield from "../Shield/Shield";

function ShieldsRow(props) {
  return (
    <div style={{ width: "99vw" }}>
      <Row className="justify-content-center mx-auto me-auto">
        <Col xs={2} sm={1} lg={1} xl={1} className="col-2 me-5">
          <Shield className="mt-5" text={props.text1}></Shield>
        </Col>
        <Col xs={2} sm={1} lg={1} xl={1} className="col-2 me-5">
          <Shield text={props.text2}></Shield>
        </Col>
        <Col xs={2} sm={1} lg={1} xl={1} className="col-2 me-5">
          <Shield text={props.text3}></Shield>
        </Col>
        <Col xs={2} sm={1} lg={1} xl={1} className="col-2 me-5">
          <Shield text={props.text4}></Shield>
        </Col>
        <Col xs={2} sm={1} lg={1} xl={1} className="col-2 me-5">
          <Shield text={props.text5}></Shield>
        </Col>
      </Row>
    </div>
  );
}

export default ShieldsRow;

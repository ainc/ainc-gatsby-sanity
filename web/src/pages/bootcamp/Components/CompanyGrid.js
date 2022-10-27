import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image";

function CompanyGrid(props) {
    return (
        <div>
            <Row>
                <Row className="pt-4 pb-3">
                    <Col>
                        <img src={props.src1} alt={props.alt1}></img>
                    </Col>
                    <Col>
                        <img src={props.scr2} alt={props.alt2}></img>
                    </Col>
                    <Col>
                        <img src={props.src3} alt={props.alt3}></img>
                    </Col>
                    <Col>
                        <img src={props.src4} alt={props.alt4}></img>
                    </Col>
                    <Col>
                        <img src={props.src5} alt={props.alt5}></img>
                    </Col>
                </Row>
                <Row className="pb-3 pt-3">
                    <Col>
                        <img src={props.src6} alt={props.alt6}></img>
                    </Col>
                    <Col>
                        <img src={props.src7} alt={props.alt7}></img>
                    </Col>
                    <Col>
                        <img src={props.src8} alt={props.alt8}></img>
                    </Col>
                    <Col>
                        <img src={props.src9} alt={props.alt9}></img>
                    </Col>
                    <Col>
                        <img src={props.src10} alt={props.alt10}></img>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}

export default CompanyGrid

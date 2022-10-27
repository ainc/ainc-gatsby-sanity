import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image";

function CompanyGrid(props) {
    return (
        <div>
            <Row>
                <Row className="pt-4 pb-3">
                    <Col>
                        <StaticImage src={props.src1} alt={props.alt1}></StaticImage>
                    </Col>
                    <Col>
                        <StaticImage src={props.scr2} alt={props.alt2}></StaticImage>
                    </Col>
                    <Col>
                        <StaticImage src={props.src3} alt={props.alt3}></StaticImage>
                    </Col>
                    <Col>
                        <StaticImage src={props.src4} alt={props.alt4}></StaticImage>
                    </Col>
                    <Col>
                        <StaticImage src={props.src5} alt={props.alt5}></StaticImage>
                    </Col>
                </Row>
                <Row className="pb-3 pt-3">
                    <Col>
                        <StaticImage src={props.src6} alt={props.alt6}></StaticImage>
                    </Col>
                    <Col>
                        <StaticImage src={props.src7} alt={props.alt7}></StaticImage>
                    </Col>
                    <Col>
                        <StaticImage src={props.src8} alt={props.alt8}></StaticImage>
                    </Col>
                    <Col>
                        <StaticImage src={props.src9} alt={props.alt9}></StaticImage>
                    </Col>
                    <Col>
                        <StaticImage src={props.src10} alt={props.alt10}></StaticImage>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}

export default CompanyGrid

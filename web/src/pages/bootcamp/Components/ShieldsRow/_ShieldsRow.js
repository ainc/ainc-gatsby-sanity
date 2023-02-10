import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Shield from '../Shield/_Shield';

function ShieldsRow(props) {
    return (
        <div>
            <Row className="row-cols-lg-5 row-cols-md-5">
                <Col className="my-2">
                    <Shield text={props.text1}></Shield>
                </Col>
                <Col className="my-2">
                    <Shield text={props.text2}></Shield>
                </Col>
                <Col className="my-2">
                    <Shield text={props.text3}></Shield>
                </Col>
                <Col className="my-2">
                    <Shield text={props.text4}></Shield>
                </Col>
                <Col className="my-2">
                    <Shield text={props.text5}></Shield>
                </Col>
            </Row>
        </div>
    )
}

export default ShieldsRow

import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Shield from './Shield'

function ShieldsRow(props) {
    return (
        <div>
            <Row>
                <Col>
                    <Shield text={props.text1}></Shield>
                </Col>
                <Col>
                    <Shield text={props.text2}></Shield>
                </Col>
                <Col>
                    <Shield text={props.text3}></Shield>
                </Col>
                <Col>
                    <Shield text={props.text4}></Shield>
                </Col>
                <Col>
                    <Shield text={props.text5}></Shield>
                </Col>
            </Row>
        </div>
    )
}

export default ShieldsRow

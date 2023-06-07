import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import * as styles from '../shield.module.scss'

const Shield = ({text}) => {

        return (
            <Row className={`${styles.shieldPanel} mx-auto my-auto`}>
                <Col xs={{span: 6}} md={{span: 10}} className={`${styles.shieldText} mx-5 relative`}>
                    <h6 className="text-white text-justify" style={{overflowWrap: "break-word"}}>{text}</h6>
                </Col>
            </Row>
        )
    
}

export default Shield

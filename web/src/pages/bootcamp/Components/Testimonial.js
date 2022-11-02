import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Subtitle from '../../../components/UI/Subtitle/Subtitle'

import * as styles from './Testimonial.module.scss'

function Testimonial(props) {
    return (
        <div className={styles.testimonial}>
            <Row>
                <Col className="col-2">
                    <div className={styles.bootcampGradImages}>
                        <Row className="my-3">
                            <div>
                                <img src={props.src1} data-testimonial="1" alt="Bootcamp Graduate 1"/>
                            </div>
                        </Row>
                        <Row className="my-3">
                            <div>
                                <img src={props.src2} class="active" data-testimonial="2" alt="Bootcamp Graduate 2" />
                            </div>
                        </Row>
                        <Row className="my-3">
                            <div>
                                <img src={props.src3} data-testimonial="3" alt="Bootcamp Graduate 3" />
                            </div>
                        </Row>
                    </div>
                </Col>
                <Col className="col-8">
                    <Row>
                        <div className={styles.testimonialWindow}>
                            <Row>
                                <div className={styles.testimonialWindowText} data-testimonial="1">
                                    <Subtitle>{props.name1}</Subtitle>
                                    <p>{props.testimonial1}</p>
                                </div>
                            </Row>
                            <Row>
                                <div className={styles.testimonialWindowText} data-testimonial="3">
                                    <Subtitle>{props.name2}</Subtitle>
                                    <p>{props.testimonial2}</p>
                                </div>
                            </Row>
                            <Row>
                                <div className={styles.testimonialWindowText} data-testimonial="3">
                                    <Subtitle>{props.name3}</Subtitle>
                                    <p>{props.testimonial3}</p>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Testimonial

import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Subtitle from '../../../components/UI/Subtitle/Subtitle'

import * as styles from './Testimonial.module.scss'

const TestimonialContent = (props) => {
    return (
        <div className={styles.testimonialWindowText}>
            <Subtitle className="text-uppercase fw-semibold" style={{float: "left"}}>{props.author}</Subtitle>
            <br></br>
            <p className="mt-4 lh-lg fs-5">{props.content}</p>
        </div>
    )
}

function Testimonial(props) {

    const [data, setData] = React.useState({
        author: "",
        content: ""
    })

    React.useEffect(() => {
        setData({...data, ['author']: "Melanie Stoeckle", ['content']: "Melanie came to Bootcamp with previous experiene in graphic design. She landed a job as a developer within a week of graduating from the program. Eventually, she earned the freedom through her employer to work remotely, and now travels with world - her office is wherever there's a wifi connection."})
    }, [])

    const handleTestimonialClick = (e, author, content) => {
        e.preventDefault()
        setData({...data, ['author']: author, ['content']: content})
    }

    return (
        <div className={styles.testimonial}>
            <Row>
                <Col className="col-2">
                    <div className={styles.bootcampGradImages}>
                        <Row className="my-4">
                            <div onClick={(e) => handleTestimonialClick(e, "David Vanderhaar", "David worked part-time at Starbucks, and applied for the Bootcamp on a whim (and with a little encouragement from his wife). In addition to working full-time as a software developer, he also teaches classes helping kids learn to code.")}>
                                <img src={props.src1} alt="Bootcamp Graduate 1"/>
                            </div>
                        </Row>
                        <Row className="my-4">
                            <div onClick={(e) => handleTestimonialClick(e, "Melanie Stoeckle", "Melanie came to Bootcamp with previous experiene in graphic design. She landed a job as a developer within a week of graduating from the program. Eventually, she earned the freedom through her employer to work remotely, and now travels with world - her office is wherever there's a wifi connection.")}>
                                <img src={props.src2} alt="Bootcamp Graduate 2" />
                            </div>
                        </Row>
                        <Row className="my-4">
                            <div onClick={(e) => handleTestimonialClick(e, "Brett Fraley", 'Brett made the switch from factory worker to software developer. "I worked in lots of different types of factories for years and my body was just getting run down at such a young age. I knew I needed something else. There is no way I could have afforded time or money for a four-year degree."')}>
                                <img src={props.src3} alt="Bootcamp Graduate 3" />
                            </div>
                        </Row>
                    </div>
                </Col>
                <Col className="col-8">
                    <Row className="mt-3 mb-5">
                        <div className={styles.testimonialWindow}>
                            <Row className="">
                                <TestimonialContent 
                                author={data.author}
                                content={data.content}
                                />
                            </Row>
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Testimonial

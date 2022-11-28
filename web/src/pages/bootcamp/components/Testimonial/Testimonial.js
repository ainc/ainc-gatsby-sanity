import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from 'react-bootstrap'
import Subtitle from '../../../../components/UI/Subtitle/Subtitle';
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './Testimonial.module.scss'

const TestimonialContent = (props) => {
    return (
        <div>
            <Row>
                <Col>
                    <Subtitle className="text-uppercase fw-bold" style={{float: "left"}}>{props.author}</Subtitle>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-justify mt-4 lh-lg fs-5">{props.content}</p>
                </Col>
            </Row>
        </div>
    )
}

function Testimonial(props) {

    const [data, setData] = React.useState({
        author: "",
        content: ""
    })

    React.useEffect(() => {
        setData({...data, ['author']: props.name2, ['content']: props.testimonial2})
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
                            <div onClick={(e) => handleTestimonialClick(e, props.name1, props.testimonial1)}>
                                <GatsbyImage
                                image={props.image1} 
                                alt="Bootcamp Graduate 1"
                                />
                            </div>
                        </Row>
                        <Row className="my-4">
                            <div onClick={(e) => handleTestimonialClick(e, props.name2, props.testimonial2)}>
                                <GatsbyImage
                                image={props.image2} 
                                alt="Bootcamp Graduate 2" 
                                />
                            </div>
                        </Row>
                        <Row className="my-4">
                            <div onClick={(e) => handleTestimonialClick(e, props.name3, props.testimonial3)}>
                                <GatsbyImage
                                image={props.image3} 
                                alt="Bootcamp Graduate 3" 
                                />
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

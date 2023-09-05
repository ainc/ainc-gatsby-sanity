import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from 'react-bootstrap'
import Subtitle from '../../../../components/UI/Subtitle/Subtitle';
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../testimonial.module.scss'

const TestimonialContent = (props) => {
    return (
        <div style={{height:"290px"}}>
            <Row className='mx-3'>
                <Col>
                    <h4 className="text-uppercase fw-bold mt-4" style={{float: "left"}}>{props.author}</h4>
                </Col>
                <div>
                    <p  style={{fontSize:"15px"}}className="mt-4 lh-lg">{props.content}</p>
                </div>
                
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
        <div style={{backgroundColor:""}}className={`mx-auto`}>
            <Col className={styles.testimonial}>
                <Col xs={10} xl={2} lg={2} md={2} sm={4} className={`${styles.bootcampGradImages} ms-auto`}>
                    {/* <div className={styles.bootcampGradImages}> */}
                        <Col className="my-4">
                            <div onClick={(e) => handleTestimonialClick(e, props.name1, props.testimonial1)}>
                                <GatsbyImage
                                image={props.image1} 
                                alt="Bootcamp Graduate 1"
                                />
                            </div>
                        </Col>
                        <Col  className="my-4">
                            <div onClick={(e) => handleTestimonialClick(e, props.name2, props.testimonial2)}>
                                <GatsbyImage
                                image={props.image2} 
                                alt="Bootcamp Graduate 2" 
                                />
                            </div>
                        </Col>
                        <Col className="my-4">
                            <div onClick={(e) => handleTestimonialClick(e, props.name3, props.testimonial3)}>
                                <GatsbyImage
                                image={props.image3} 
                                alt="Bootcamp Graduate 3" 
                                />
                            </div>
                        </Col>
                    {/* </div> */}
                </Col>
                <Col xs={12} xl={6} lg={6} md={6} sm={8} className="me-auto">
                    <Row className="mt-3 mb-5">
                        <div className={`${styles.testimonialWindow} mx-auto`}>
                            <Row className="">
                                <TestimonialContent 
                                author={data.author}
                                content={data.content}
                                />
                            </Row>
                        </div>
                    </Row>
                </Col>
            </Col>
        </div>
    )
}

export default Testimonial

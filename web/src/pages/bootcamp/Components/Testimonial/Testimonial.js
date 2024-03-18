import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from 'react-bootstrap'
import Subtitle from '../../../../components/UI/Subtitle/Subtitle';
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../testimonial.module.scss'
import { motion } from "framer-motion";

const TestimonialContent = (props) => {
    return (
        <div>
            <Row className='mt-3'>
                <Col>
                    <h4 className="text-uppercase fw-bold mt-4">{props.author}</h4>
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
        content: "",
        hoveredImage: null, // Track the currently hovered image
    })

    React.useEffect(() => {
        setData({...data, ['author']: props.name1, ['content']: props.testimonial1})
    }, [])

    const handleTestimonialHover = (author, content, image) => {
        setData({...data, ['author']: author, ['content']: content, ['hoveredImage']: image})
    }

    
    return (
        <div className={`mx-auto`}>
            <Row className={styles.testimonial}>
                <Col xs={12} xl={2} lg={2} md={2} sm={4} className={`${styles.bootcampGradImages} ms-auto`}>
                    {/* <div className={styles.bootcampGradImages}> */}
                        <Col className="my-4">
                            <div onMouseEnter={() => handleTestimonialHover(props.name1, props.testimonial1, props.image1)}>
                                <GatsbyImage
                                image={props.image1} 
                                alt="Bootcamp Graduate 1"
                                style={{border: data.hoveredImage === props.image1 ? '4px solid #C12029' : 'none'}}
                                />
                            </div>
                        </Col>
                        <Col  className="my-4">
                            <div onMouseEnter={() => handleTestimonialHover(props.name2, props.testimonial2, props.image2)}>
                                <GatsbyImage
                                image={props.image2} 
                                alt="Bootcamp Graduate 2" 
                                style={{border: data.hoveredImage === props.image2 ? '4px solid #C12029' : 'none'}}

                                />
                            </div>
                        </Col>
                        <Col className="my-4">
                            <div onMouseEnter={() => handleTestimonialHover(props.name3, props.testimonial3, props.image3)}>
                                <GatsbyImage
                                image={props.image3} 
                                alt="Bootcamp Graduate 3"
                                style={{border: data.hoveredImage === props.image3 ? '4px solid #C12029' : 'none'}}

                                />
                            </div>
                        </Col>
                    {/* </div> */}
                </Col>
                <Col xs={12} xl={6} lg={6} md={6} sm={8} className="me-auto d-flex align-items-center">
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
            </Row>
        </div>
    )
}

export default Testimonial

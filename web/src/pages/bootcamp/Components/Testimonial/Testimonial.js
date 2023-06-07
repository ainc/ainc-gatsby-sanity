import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from 'react-bootstrap'
import Subtitle from '../../../../components/UI/Subtitle/Subtitle';
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../testimonial.module.scss'
import '../../../../styles/main.scss'

const TestimonialContent = (props) => {
    return (
        <Row className='flex-column align-items-center px-2'>
            <Col xs={{span: 12, offset: 0}}>
                <Subtitle className="text-uppercase mt-4 fw-bold mx-auto text--fs-70">{props.author}</Subtitle>
            </Col>
            <Col xs={{span: 12, offset: 0}}>
                <Subtitle className="text-start lh-lg my-3 text--fs-40">{props.content}</Subtitle>
            </Col>
        </Row>
    )
}

function Testimonial(props) {

    const [data, setData] = React.useState({
        author: "",
        content: ""
    })
    const [imageSelected, setImageSelected] = React.useState("Bootcamp Graduate 1")

    React.useEffect(() => {
        setData({...data, ['author']: props.name1, ['content']: props.testimonial1})
    }, [])

    const handleTestimonialClick = (e, author, content) => {
        e.preventDefault()
        setData({...data, ['author']: author, ['content']: content})
        // console.log(e.target.alt)
        setImageSelected(e.target.alt)
        console.log(imageSelected)
    }

    return (
        <Row className=''>
            <Col md={{span: 2, offset: 1}} className="d-flex align-items-center">
                <Row className='flex-row flex-md-column align-content-center gap-md-4'>
                    <Col  xs={{span: 4, offset: 0}} md={{span: 8, offset: 0}} onClick={(e) => handleTestimonialClick(e, props.name1, props.testimonial1)}>
                        <GatsbyImage
                            className={imageSelected == "Bootcamp Graduate 1" ? "border border-2 border-danger": ""}
                            image={props.image1} 
                            alt="Bootcamp Graduate 1"
                        />
                    </Col>
                    <Col xs={{span: 4, offset: 0}} md={{span: 8, offset: 0}} onClick={(e) => handleTestimonialClick(e, props.name2, props.testimonial2)}>
                        <GatsbyImage
                            className={imageSelected == "Bootcamp Graduate 2" ? "border border-2 border-danger": ""}
                            image={props.image2} 
                            alt="Bootcamp Graduate 2" 
                        />
                    </Col>
                    <Col xs={{span: 4, offset: 0}} md={{span: 8, offset: 0}} onClick={(e) => handleTestimonialClick(e, props.name3, props.testimonial3)}>
                        <GatsbyImage
                            className={imageSelected == "Bootcamp Graduate 3" ? "border border-2 border-danger": ""}
                            image={props.image3} 
                            alt="Bootcamp Graduate 3" 
                        />
                    </Col>
                </Row>
            </Col>

            <Col xs={{span: 12, pffset: 0}} md={{span: 6}}>
                <Row className="my-3 my-md-0">
                    <div className={`${styles.testimonialWindow} mx-auto items-center`}>
                        <TestimonialContent 
                            author={data.author}
                            content={data.content}
                        />
                    </div>
                </Row>
            </Col>
        </Row>
    )
}

export default Testimonial

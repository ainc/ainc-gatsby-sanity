import React , {useState} from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";


const TestimonialSlider = ( props ) => {
    return(
        <Container>
            <Carousel>
                {props.images.map((node,index) => (
                    <Carousel.Item>
                        <GatsbyImage image={node.testimonialImage.asset.gatsbyImageData} alt={node.title} />
                    </Carousel.Item>         
                ))}
            </Carousel>
        </Container>
    )
}

export default TestimonialSlider;
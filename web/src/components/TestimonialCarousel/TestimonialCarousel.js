import React , {useState} from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";


const TestimonialCarousel = ( props ) => {
    const testimonials = props.images.testimonials;
    
    return(
        <Container>
            <Carousel>
                {testimonials.map((node,index) => (
                    <Carousel.Item key={index} className='d-flex justify-content-center align-items-center my-5'>
                        <GatsbyImage image={node.testimonials.asset.gatsbyImageData} alt={node.testimonials.title} />
                    </Carousel.Item>   
                ))}
            </Carousel>
        </Container>
    )
}

export default TestimonialCarousel;
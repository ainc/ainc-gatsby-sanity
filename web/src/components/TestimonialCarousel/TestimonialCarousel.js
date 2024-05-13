import React , {useState} from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";


const TestimonialCarousel = ( props ) => {
    const testimonials = props.images.testimonials;
    
    return(
        <Container className="my-5">
            <Carousel controls={false}>
                {testimonials.map((node,index) => (
                    <Carousel.Item key={index}>
                        <div className='d-flex justify-content-center align-items-center my-5' style={{height: '25vh'}}>
                        <GatsbyImage image={node.testimonials.asset.gatsbyImageData} alt={node.testimonials.title} style={{width: '650px'}}/>
                        </div>
                    </Carousel.Item>   
                ))}
            </Carousel>
        </Container>
    )
}

export default TestimonialCarousel;
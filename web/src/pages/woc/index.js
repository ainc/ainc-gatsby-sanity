import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout/Layout";
import { Container, Col, Row, Image } from "react-bootstrap";

import Title from "../../components/UI/Title/Title";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../components/UI/BrandButton/BrandButton";



const WoCPage = ({ data }) => {
    return(
        <Layout>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <Title className='text-uppercase'>Week of Code</Title>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row> 
                    <Col>
                        <Subtitle>Overview</Subtitle>
                        <p>What if you spent your summer learning to make your own apps instead of just playing them? This camp introduces the fundamentals of coding. Students will create websites, mobile apps, and video games all while having fun with our energetic team.</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default WoCPage;